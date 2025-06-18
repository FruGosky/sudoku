import { GameToolbar } from '@components/GameToolbar';
import { Grid } from '@components/Grid';
import { GameModalsLoader } from '@modals/GameModalsLoader';
import { ShortcutsProvider } from '@providers/ShortcutsProvider';

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
