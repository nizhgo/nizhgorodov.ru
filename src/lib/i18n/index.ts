import { writable, derived } from 'svelte/store';
import { ru } from './ru';
import { en } from './en';
import type { Translations } from './types';

export type Locale = 'ru' | 'en';

const translations: Record<Locale, Translations> = { ru, en };

export const locale = writable<Locale>('en');

export const t = derived(locale, ($locale) => translations[$locale]);
