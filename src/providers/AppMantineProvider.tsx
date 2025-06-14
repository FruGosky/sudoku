import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import type { ReactNode } from 'react';

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
