import { SudokuBoard } from './components/SudokuBoard';
import { AppMantineProvider } from './providers/AppMantineProvider';
import './App.css';

export default function App() {
	return (
		<AppMantineProvider>
			<div className="flex h-svh w-svw items-center justify-center">
				<SudokuBoard />
			</div>
		</AppMantineProvider>
	);
}
