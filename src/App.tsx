import '@/App.css';
import { SudokuBoard } from '@components/SudokuBoard';
import { AppMantineProvider } from '@providers/AppMantineProvider';

export function App() {
	return (
		<AppMantineProvider>
			<div className="flex h-svh w-svw items-center justify-center">
				<SudokuBoard />
			</div>
		</AppMantineProvider>
	);
}
