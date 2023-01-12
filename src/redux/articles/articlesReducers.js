import { createReducer, combineReducers } from "@reduxjs/toolkit";

const initialStateArticles = [];

const entities = createReducer(initialStateArticles, {
  "articles/get/pending": (_state) => [],
  "articles/get/fulfilled": (state, { payload }) => {
    console.log(payload);
  },
  "articles/get/rejected": (state) => state,
});

const isLoading = createReducer(false, {
  "articles/get/pending": () => true,
  "articles/get/fulfilled": () => false,
  "articles/get/rejected": () => false,
});

const error = createReducer(null, {
  "articles/get/pending": () => null,
  "articles/get/fulfilled": () => null,
  "articles/get/rejected": (_, action) => action.error,
});

export const articlesReducer = combineReducers({
  entities,
  isLoading,
  error,
});
