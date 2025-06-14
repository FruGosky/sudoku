import { Button } from '@mantine/core';
import { useSudokuStore } from '../stores/useSudokuStore';

export default function PlayAgainButton() {
	const hideModal = useSudokuStore((store) => store.hideModal);
	const resetGame = useSudokuStore((store) => store.resetGame);

	const playAgain = () => {
		hideModal();
		resetGame();
	};

	return <Button onClick={playAgain}>{'Play Again'}</Button>;
}
