import { useContext } from 'react';
import { LanguageContext } from '../layout';

export function useLanguage() {
  return useContext(LanguageContext);
}
