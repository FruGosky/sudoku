import { Modal } from '@mantine/core';
import { FADED_MODAL_TRANSITION } from '../constants';

type TTitleColor = 'green' | 'red';

const getModalClassNames = (titleColor: TTitleColor) => ({
	title: `!text-2xl text-center text-${titleColor}-600 !font-semibold`,
	header: '!justify-center !pr-4',
});

type TGameResultModalProps = {
	isOpen: boolean;
	title: string;
	titleColor: TTitleColor;
	message: string;
	emoji: string;
	footer: React.ReactNode;
};

export function GameResultModal({
	isOpen,
	title,
	titleColor,
	message,
	emoji,
	footer,
}: TGameResultModalProps) {
	return (
		<Modal
			centered
			classNames={getModalClassNames(titleColor)}
			closeOnClickOutside={false}
			closeOnEscape={false}
			opened={isOpen}
			size="xs"
			title={title}
			transitionProps={FADED_MODAL_TRANSITION}
			withCloseButton={false}
			onClose={() => {}}
		>
			<div className="text flex flex-col gap-4">
				<div className="flex items-center justify-center gap-1">
					<span>{message}</span>
					<span className="text-2xl">{emoji}</span>
				</div>
				{footer}
			</div>
		</Modal>
	);
}
