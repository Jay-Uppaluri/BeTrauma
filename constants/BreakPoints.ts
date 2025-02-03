import { useWindowDimensions } from 'react-native';

export const breakpointLarge = 1024;

export type Breakpoint = 'large' | 'medium';

export const large: Breakpoint = 'large';
export const medium: Breakpoint = 'medium';

const breakpointForWidth = (width: number): Breakpoint =>
  width >= breakpointLarge ? large : medium;

export function useBreakpoint(): Breakpoint {
  const { width } = useWindowDimensions();
  return breakpointForWidth(width);
}
