import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
	RAGE_EXECUTION_TIME,
	RAGE_MESSAGE,
	RAGE_LETTER_TIMEOUT,
	TIME_TO_CLOSE_TAB_AFTER_RAGE,
} from '../constants';

const rageNotification = (message: string) => {
	notifications.show({
		message,
		position: 'top-center',
		color: 'red',
		classNames: {
			root: '!bg-red-600 before:!content-none my-2 w-fit mx-auto mt-auto',
			description:
				'flex items-center justify-center !text-white !text-2xl',
		},
		autoClose: RAGE_EXECUTION_TIME + 200,
		withCloseButton: false,
	});
};

const rageCloseTab = async () => {
	const letters = RAGE_MESSAGE.split('');
	rageNotification(letters[0]);
	for (let i = 1; i < letters.length; i++) {
		await new Promise((resolve) =>
			setTimeout(() => {
				rageNotification(letters[i]);
				resolve(null);
			}, RAGE_LETTER_TIMEOUT),
		);
	}
	setTimeout(window.close, TIME_TO_CLOSE_TAB_AFTER_RAGE);
};

export function RageButton() {
	return (
		<Button
			color="var(--color-red-900)"
			size="xs"
			onClick={void rageCloseTab}
		>
			{'Rage Button 🤬'}
		</Button>
	);
}
