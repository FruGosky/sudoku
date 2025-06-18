import { DifficultySelector } from '@components/DifficultySelector';
import { NoteModeSwitch } from '@components/NoteModeSwitch';
import { PlayerLives } from '@components/PlayerLives';

export function GameToolbar() {
	return (
		<div className="flex gap-2">
			<NoteModeSwitch />
			<DifficultySelector />
			<PlayerLives />
		</div>
	);
}
