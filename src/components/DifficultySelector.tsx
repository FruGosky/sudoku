import { Select } from '@mantine/core';
import { AVAILABLE_DIFFICULTIES } from '../constants';
import { useSudokuStore } from '../stores/useSudokuStore';
import type { TDifficulty } from '../types/game.types';

export function DifficultySelector() {
	const difficulty = useSudokuStore((store) => store.difficulty);
	const setDifficulty = useSudokuStore((store) => store.setDifficulty);

	const handleOnChange = (value: string | null) => {
		if (!value) return;
		if (!AVAILABLE_DIFFICULTIES.includes(value as never)) return;
		setDifficulty(value as TDifficulty);
	};

	return (
		<Select
			data={AVAILABLE_DIFFICULTIES}
			size="xs"
			value={difficulty}
			onChange={handleOnChange}
		/>
	);
}
