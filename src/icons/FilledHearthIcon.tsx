import { DEFAULT_ICON_FILL, DEFAULT_ICON_SIZE_PX } from '../constants';
import type { TIconProps } from '../types/icon.types';

export function FilledHearthIcon({
	width = DEFAULT_ICON_SIZE_PX,
	height = DEFAULT_ICON_SIZE_PX,
	fill = DEFAULT_ICON_FILL,
}: TIconProps) {
	return (
		<svg
			height={height}
			viewBox="0 0 20 20"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.388 4.29a4.3 4.3 0 0 0-6.127-.016c-1.688 1.705-1.68 4.476.016 6.189l6.277 6.34c.26.263.682.263.942 0l6.245-6.304a4.41 4.41 0 0 0-.017-6.187a4.305 4.305 0 0 0-6.135-.015l-.596.603z"
				fill={fill}
			/>
		</svg>
	);
}
