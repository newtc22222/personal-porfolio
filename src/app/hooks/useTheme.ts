import { useContext } from 'react';
import { ThemeContext } from '../layout';

export function useTheme() {
  return useContext(ThemeContext);
}
