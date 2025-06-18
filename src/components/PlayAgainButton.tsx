import { Button } from '@mantine/core';
import { PLAY_AGAIN_BUTTON_TEXT } from '@constants';
import { useSudokuStore } from '@stores/useSudokuStore';

export function PlayAgainButton() {
	const hideModal = useSudokuStore((store) => store.hideModal);
	const resetGame = useSudokuStore((store) => store.resetGame);

	const playAgain = () => {
		hideModal();
		resetGame();
	};

	return <Button onClick={playAgain}>{PLAY_AGAIN_BUTTON_TEXT}</Button>;
}
