import { create } from 'zustand';
import {
	DEFAULT_GRID_SIZE,
	DEFAULT_LIVES,
	VALID_GRID_SIZES,
	DIFFICULTY_PERCENTAGES,
	DEFAULT_DIFFICULTY,
} from '@constants';
import { shuffleArray } from '@utils/shuffle-array';
import type {
	TAvailableGameModals,
	TCorrectGridSizes,
	TGrid,
	TDifficulty,
} from '@/types/game.types';

/**
 * Reveals random cells in the grid based on the difficulty level
 * @param grid - The Sudoku grid to modify (mutates in place)
 * @param size - The size of the grid
 * @param difficulty - The difficulty level
 */
function revealCellsByDifficulty(
	grid: TGrid,
	size: number,
	difficulty: TDifficulty,
) {
	const totalCells = size * size;
	const cellsToShow = Math.floor(
		totalCells * DIFFICULTY_PERCENTAGES[difficulty],
	);
	const positions = Array.from({ length: totalCells }, (_, i) => i);
	const shuffledPositions = shuffleArray(positions);

	for (let i = 0; i < cellsToShow; i++) {
		const pos = shuffledPositions[i];
		const row = Math.floor(pos / size);
		const col = pos % size;
		grid[row][col].value = grid[row][col].correctValue;
	}
}

/**
 * Generates a complete Sudoku solution grid
 * @param size - Grid size (must be a perfect square: 4, 9, 16)
 * @param difficulty - Game difficulty level
 * @returns Complete Sudoku grid with cells hidden based on difficulty
 */
export function generateSudokuGrid(
	size: TCorrectGridSizes = 9,
	difficulty: TDifficulty = DEFAULT_DIFFICULTY,
): TGrid {
	// Validate size is a perfect square
	const subGridSize = Math.sqrt(size);
	if (!Number.isInteger(subGridSize)) {
		throw new Error(
			`Grid size ${size} is not valid. Size must be a perfect square (4, 9, 16)`,
		);
	}

	// Generate a complete valid solution
	const solution = generateCompleteSolution(size, subGridSize);

	// Convert to Grid format with cells hidden based on difficulty
	const grid: TGrid = solution.map((row) =>
		row.map((value) => ({
			value: null,
			correctValue: value,
			notes: [],
		})),
	);

	revealCellsByDifficulty(grid, size, difficulty);

	return grid;
}

function generateCompleteSolution(
	size: number,
	subGridSize: number,
): number[][] {
	const grid: number[][] = Array(size)
		.fill(null)
		.map(() => Array<typeof size>(size).fill(0));

	// Fill diagonal subGrids first (they don't interfere with each other)
	for (let i = 0; i < size; i += subGridSize) {
		fillSubGrid(grid, i, i, size, subGridSize);
	}

	// Fill remaining cells using backtracking
	solveSudoku(grid, size, subGridSize);

	return grid;
}

function fillSubGrid(
	grid: number[][],
	row: number,
	col: number,
	size: number,
	subGridSize: number,
): void {
	const numbers = Array.from({ length: size }, (_, i) => i + 1);
	const shuffledNumbers = shuffleArray(numbers);

	let idx = 0;
	for (let i = 0; i < subGridSize; i++) {
		for (let j = 0; j < subGridSize; j++) {
			grid[row + i][col + j] = shuffledNumbers[idx++];
		}
	}
}

function solveSudoku(
	grid: number[][],
	size: number,
	subGridSize: number,
): boolean {
	for (let row = 0; row < size; row++) {
		for (let col = 0; col < size; col++) {
			if (grid[row][col] !== 0) continue;
			const numbers = Array.from({ length: size }, (_, i) => i + 1);
			const shuffledNumbers = shuffleArray(numbers);

			for (const number of shuffledNumbers) {
				if (
					!isValidPlacement(grid, row, col, number, size, subGridSize)
				) {
					continue;
				}
				grid[row][col] = number;

				if (solveSudoku(grid, size, subGridSize)) return true;

				grid[row][col] = 0;
			}
			return false;
		}
	}
	return true;
}

function isValidPlacement(
	grid: number[][],
	row: number,
	col: number,
	num: number,
	size: number,
	subGridSize: number,
): boolean {
	// Check row
	for (let i = 0; i < size; i++) {
		if (grid[row][i] === num) return false;
	}

	// Check column
	for (let i = 0; i < size; i++) {
		if (grid[i][col] === num) return false;
	}

	// Check subGrid
	const startRow = Math.floor(row / subGridSize) * subGridSize;
	const startCol = Math.floor(col / subGridSize) * subGridSize;

	for (let i = startRow; i < startRow + subGridSize; i++) {
		for (let j = startCol; j < startCol + subGridSize; j++) {
			if (grid[i][j] === num) return false;
		}
	}

	return true;
}

type TSelectedCell = {
	row: number;
	col: number;
};

export type TSudokuStore = {
	grid: TGrid;
	setValue: (row: number, col: number, value: number | null) => void;
	resetGame: () => void;

	// Size
	size: TCorrectGridSizes;
	setSize: (size: TSudokuStore['size']) => void;

	// Difficulty
	difficulty: TDifficulty;
	setDifficulty: (difficulty: TDifficulty) => void;

	// Lives
	livesLeft: number;
	decrementLives: () => void;

	// Modals
	openedModal: TAvailableGameModals;
	setOpenedModal: (modalName: TSudokuStore['openedModal']) => void;
	hideModal: () => void;

	// Selected Cell
	selectedCell: TSelectedCell | null;
	setSelectedCell: (row: number, col: number) => void;
	unselectCell: () => void;
	setSelectedCellValue: (value: number | null) => void;
	validateValueForSelectedCell: (value: number | null) => boolean;

	// Notes
	isNoteMode: boolean;
	toggleNoteMode: () => void;
	toggleNote: (row: number, col: number, note: number) => void;
	toggleNoteForSelectedCell: (note: number) => void;
};

export const useSudokuStore = create<TSudokuStore>()(
	(set, get) =>
		({
			grid: generateSudokuGrid(DEFAULT_GRID_SIZE, DEFAULT_DIFFICULTY),
			setValue: (row, col, value) => {
				set((state) => {
					const grid = [...state.grid.map((gridRow) => [...gridRow])];
					grid[row][col] = { ...grid[row][col], value };
					return { grid };
				});
			},
			resetGame: () => {
				set((state) => ({
					grid: generateSudokuGrid(state.size, state.difficulty),
					livesLeft: DEFAULT_LIVES,
					isNoteMode: false,
				}));
			},

			// Size
			size: DEFAULT_GRID_SIZE,
			setSize: (size) => {
				if (!VALID_GRID_SIZES.includes(size)) {
					throw new Error('Invalid size');
				}

				set({
					size,
					grid: generateSudokuGrid(size, get().difficulty),
				});
			},

			// Difficulty
			difficulty: DEFAULT_DIFFICULTY,
			setDifficulty: (difficulty) => {
				set({
					difficulty,
					grid: generateSudokuGrid(get().size, difficulty),
				});
			},

			// Lives
			livesLeft: DEFAULT_LIVES,
			decrementLives: () => {
				if (get().livesLeft <= 0) return;
				set((state) => ({
					livesLeft: state.livesLeft - 1,
				}));
			},

			// Modals
			openedModal: null,
			setOpenedModal: (modalName) => {
				set({ openedModal: modalName });
			},
			hideModal: () => {
				set({ openedModal: null });
			},

			// Selected Cell
			selectedCell: null,
			setSelectedCell: (row, col) => {
				set({
					selectedCell: { row, col },
				});
			},
			unselectCell: () => {
				set({ selectedCell: null });
			},
			setSelectedCellValue: (value) => {
				const selectedCell = get().selectedCell;
				if (!selectedCell) return;
				get().setValue(selectedCell.row, selectedCell.col, value);
			},
			validateValueForSelectedCell: (value) => {
				const selectedCell = get().selectedCell;
				if (!selectedCell) return false;
				const cell = get().grid[selectedCell.row][selectedCell.col];
				return cell.correctValue === value;
			},

			// Notes
			isNoteMode: false,
			toggleNoteMode: () => {
				set((state) => ({ isNoteMode: !state.isNoteMode }));
			},
			toggleNote: (row, col, note) => {
				set((state) => {
					const grid = [...state.grid.map((gridRow) => [...gridRow])];
					const cell = grid[row][col];
					const notes = cell.notes.includes(note)
						? cell.notes.filter((cellNote) => cellNote !== note)
						: [...cell.notes, note];
					grid[row][col] = { ...cell, notes };
					return { grid };
				});
			},
			toggleNoteForSelectedCell: (note) => {
				const selectedCell = get().selectedCell;
				if (!selectedCell) return;
				get().toggleNote(selectedCell.row, selectedCell.col, note);
			},
		}) satisfies TSudokuStore,
);
