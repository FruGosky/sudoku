import { Grid } from './Grid';
import { ShortcutsProvider } from '../providers/ShortcutsProvider';
import { GameToolbar } from './GameToolbar';
import GameModalsLoader from '../modals/GameModalsLoader';

export function SudokuBoard() {
	return (
		<ShortcutsProvider>
			<div className="flex w-fit flex-col gap-2">
				<GameToolbar />
				<Grid />
				<GameModalsLoader />
			</div>
		</ShortcutsProvider>
	);
}
