import type { RootState } from '../store';

export const articlesArray = (state:RootState) => state.articles.entities;
