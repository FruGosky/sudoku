import { DifficultySelector } from './DifficultySelector';
import { NoteModeSwitch } from './NoteModeSwitch';
import { PlayerLives } from './PlayerLives';

export function GameToolbar() {
	return (
		<div className="flex gap-2">
			<NoteModeSwitch />
			<DifficultySelector />
			<PlayerLives />
		</div>
	);
}
