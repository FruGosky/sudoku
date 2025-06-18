import { GameOverModal } from '@modals/GameOverModal';
import { GameWonModal } from '@modals/GameWonModal';

export function GameModalsLoader() {
	return (
		<>
			<GameOverModal />
			<GameWonModal />
		</>
	);
}
