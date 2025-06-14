import { Modal } from '@mantine/core';
import { useSudokuStore } from '../stores/useSudokuStore';
import { FADED_MODAL_TRANSITION } from '../constants';
import PlayAgainButton from '../components/PlayAgainButton';

const MODAL_CLASS_NAMES = {
	title: '!text-2xl text-center text-green-600 !font-semibold',
	header: '!justify-center !pr-4',
};

export default function GameWonModal() {
	const isOpen = useSudokuStore((store) => store.openedModal === 'gameWon');

	return (
		<Modal
			size="xs"
			opened={isOpen}
			onClose={() => {}}
			title="Game Won"
			classNames={MODAL_CLASS_NAMES}
			centered
			transitionProps={FADED_MODAL_TRANSITION}
			withCloseButton={false}
			closeOnClickOutside={false}
			closeOnEscape={false}
		>
			<div className="text flex flex-col gap-4">
				<div className="flex items-center justify-center gap-1">
					<span>{'Congrats u won the game!'}</span>
					<span className="text-2xl">{'🥵'}</span>
				</div>
				<div className="flex items-center justify-center">
					<PlayAgainButton />
				</div>
			</div>
		</Modal>
	);
}
