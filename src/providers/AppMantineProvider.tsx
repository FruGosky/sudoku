import type { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

type TAppMantineProviderProps = {
	children: ReactNode;
};

export function AppMantineProvider({ children }: TAppMantineProviderProps) {
	return (
		<MantineProvider defaultColorScheme="dark" forceColorScheme="dark">
			<Notifications />
			{children}
		</MantineProvider>
	);
}
