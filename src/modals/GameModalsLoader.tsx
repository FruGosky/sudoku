import { GameOverModal } from './GameOverModal';
import { GameWonModal } from './GameWonModal';

export function GameModalsLoader() {
	return (
		<>
			<GameOverModal />
			<GameWonModal />
		</>
	);
}
