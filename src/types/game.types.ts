import { AVAILABLE_DIFFICULTIES, VALID_GRID_SIZES } from '@constants';

export type TCell = {
	value: number | null;
	correctValue: number;
	notes: number[];
};

export type TGrid = TCell[][];

export type TCorrectGridSizes = (typeof VALID_GRID_SIZES)[number];

export type TAvailableGameModals = 'gameOver' | 'gameWon' | null;

export type TDifficulty = (typeof AVAILABLE_DIFFICULTIES)[number];
