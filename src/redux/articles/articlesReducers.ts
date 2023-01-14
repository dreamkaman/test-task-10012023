import { createReducer, combineReducers } from "@reduxjs/toolkit";

import {Article} from '../types';



const initialStateEntities: Article[] = [];

const entities = createReducer(initialStateEntities, {
  "articles/get/pending": () => [],
  "articles/get/fulfilled": (_, {payload}) => payload,
  "articles/get/rejected": (state: Article[]) => state,

  "articlesByFilterValue/get/pending": () => [],
  "articlesByFilterValue/get/fulfilled": (_, {payload}) => payload,
  "articlesByFilterValue/get/rejected": (state: Article[]) => state,
});

const isLoading = createReducer(false, {
  "articles/get/pending": () => true,
  "articles/get/fulfilled": () => false,
  "articles/get/rejected": () => false,

  "articlesByFilterValue/get/pending": () => true,
  "articlesByFilterValue/get/fulfilled": () => false,
  "articlesByFilterValue/get/rejected": () => false,
});


const error = createReducer(null, {
  "articles/get/pending": () => null,
  "articles/get/fulfilled": () => null,
  "articles/get/rejected": (_, action) => action.error,

  "articlesByFilterValue/get/pending": () => null,
  "articlesByFilterValue/get/fulfilled": () => null,
  "articlesByFilterValue/get/rejected": (_, action) => action.error
});

export const articlesReducer = combineReducers({
  entities,
  isLoading,
  error,
});
