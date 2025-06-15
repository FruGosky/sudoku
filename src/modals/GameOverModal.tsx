import { PlayAgainButton } from '../components/PlayAgainButton';
import { RageButton } from '../components/RageButton';
import {
	GAME_OVER_EMOJI,
	GAME_OVER_MODAL_MESSAGE,
	GAME_OVER_MODAL_TITLE,
} from '../constants';
import { useSudokuStore } from '../stores/useSudokuStore';
import { GameResultModal } from './GameResultModal';

function GameOverFooter() {
	return (
		<div className="flex items-center justify-between gap-3">
			<RageButton />
			<PlayAgainButton />
		</div>
	);
}

export function GameOverModal() {
	const isOpen = useSudokuStore((store) => store.openedModal === 'gameOver');

	return (
		<GameResultModal
			emoji={GAME_OVER_EMOJI}
			footer={<GameOverFooter />}
			isOpen={isOpen}
			message={GAME_OVER_MODAL_MESSAGE}
			title={GAME_OVER_MODAL_TITLE}
			titleColor="red"
		/>
	);
}
