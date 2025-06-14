import { FilledBrokenHearthIcon } from '../icons/FilledBrokenHeartIcon';
import { FilledHearthIcon } from '../icons/FilledHearthIcon';
import { useSudokuStore } from '../stores/useSudokuStore';

export function PlayerLives() {
	const livesLeft = useSudokuStore((store) => store.livesLeft);

	return (
		<div className="relative flex items-center justify-center">
			<HearthIconDisplay />
			<span className="absolute mb-0.5 text-xs font-semibold text-white">
				{livesLeft}
			</span>
		</div>
	);
}

function HearthIconDisplay() {
	const livesLeft = useSudokuStore((store) => store.livesLeft);

	if (livesLeft <= 0) {
		return (
			<FilledBrokenHearthIcon
				fill="var(--color-red-600)"
				height={30}
				width={30}
			/>
		);
	}

	return (
		<FilledHearthIcon fill="var(--color-red-600)" height={30} width={30} />
	);
}
