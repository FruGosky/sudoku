import { useSudokuStore } from '../stores/useSudokuStore';
import { Select } from '@mantine/core';
import { AVAILABLE_DIFFICULTIES } from '../constants';
import type { TDifficulty } from '../types/game.types';

export default function DifficultySelector() {
	const difficulty = useSudokuStore((store) => store.difficulty);
	const setDifficulty = useSudokuStore((store) => store.setDifficulty);

	const handleOnChange = (value: string | null) => {
		if (!value) return;
		if (!AVAILABLE_DIFFICULTIES.includes(value as never)) return;
		setDifficulty(value as TDifficulty);
	};

	return (
		<Select
			size="xs"
			data={AVAILABLE_DIFFICULTIES}
			value={difficulty}
			onChange={handleOnChange}
		/>
	);
}
