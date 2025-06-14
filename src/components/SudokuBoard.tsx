import { GameModalsLoader } from '../modals/GameModalsLoader';
import { ShortcutsProvider } from '../providers/ShortcutsProvider';
import { GameToolbar } from './GameToolbar';
import { Grid } from './Grid';

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
