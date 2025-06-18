import { PlayAgainButton } from '@components/PlayAgainButton';
import {
	GAME_WON_EMOJI,
	GAME_WON_MODAL_MESSAGE,
	GAME_WON_MODAL_TITLE,
} from '@constants';
import { GameResultModal } from '@modals/GameResultModal';
import { useSudokuStore } from '@stores/useSudokuStore';

function GameWonFooter() {
	return (
		<div className="flex items-center justify-center">
			<PlayAgainButton />
		</div>
	);
}

export function GameWonModal() {
	const isOpen = useSudokuStore((store) => store.openedModal === 'gameWon');

	return (
		<GameResultModal
			emoji={GAME_WON_EMOJI}
			footer={<GameWonFooter />}
			isOpen={isOpen}
			message={GAME_WON_MODAL_MESSAGE}
			title={GAME_WON_MODAL_TITLE}
			titleColor="red"
		/>
	);
}
