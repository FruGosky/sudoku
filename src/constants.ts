import type { TCorrectGridSizes, TDifficulty } from './types/game.types';
import type { TransitionProps } from '@mantine/core';

// GRID
export const VALID_GRID_SIZES = [4, 9, 16] as const;
export const DEFAULT_GRID_SIZE: TCorrectGridSizes = 9;

// ICON
export const DEFAULT_ICON_SIZE_PX = 20;
export const DEFAULT_ICON_FILL = 'currentColor';

// LIVES
export const DEFAULT_LIVES = 3;

// MODALS
export const FADED_MODAL_TRANSITION: Partial<Omit<TransitionProps, 'mounted'>> =
	{
		transition: 'fade',
		duration: 600,
		timingFunction: 'linear',
	};

// DIFFICULTY
export const AVAILABLE_DIFFICULTIES = ['easy', 'medium', 'hard'] as const;
export const DIFFICULTY_PERCENTAGES: Record<TDifficulty, number> = {
	easy: 0.4, // 40% of numbers shown
	medium: 0.3, // 30% of numbers shown
	hard: 0.2, // 20% of numbers shown
} as const;
export const DEFAULT_DIFFICULTY: TDifficulty = 'medium';

// Shortcuts
export const UNSELECT_ALL_BUTTONS = ['ESCAPE'];
export const TOGGLE_NOTE_MODE_BUTTONS = ['N', 'TAB'];

// RAGE
export const RAGE_BUTTON_TEXT = 'Rage Button 🤬';
export const RAGE_MESSAGE = 'RAGE';
export const RAGE_LETTER_TIMEOUT = 100;
export const RAGE_EXECUTION_TIME =
	(RAGE_MESSAGE.length - 1) * RAGE_LETTER_TIMEOUT;
export const TIME_TO_CLOSE_TAB_AFTER_RAGE = 300;

// PLAY AGAIN
export const PLAY_AGAIN_BUTTON_TEXT = 'Play Again';

// NOTE MODE
export const NOTE_MODE_SWITCH_TOOLTIP = `Note mode (${TOGGLE_NOTE_MODE_BUTTONS.join(' / ')})`;

// GAME OVER
export const GAME_OVER_MODAL_TITLE = 'Game Over';
export const GAME_OVER_MODAL_MESSAGE = 'You lost the game';
export const GAME_OVER_EMOJI = '🥺';

// GAME WON
export const GAME_WON_MODAL_TITLE = 'Game Won';
export const GAME_WON_MODAL_MESSAGE = 'Congrats u won the game!';
export const GAME_WON_EMOJI = '🥵';
