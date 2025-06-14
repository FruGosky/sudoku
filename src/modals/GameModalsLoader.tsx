import GameOverModal from './GameOverModal';
import GameWonModal from './GameWonModal';

export default function GameModalsLoader() {
	return (
		<>
			<GameOverModal />
			<GameWonModal />
		</>
	);
}
