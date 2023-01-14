import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'API/articlesAPI';
import { ratingSummery, ratingTitle } from 'helpers/text';

export const getAllArticlesOperation = createAsyncThunk('articles/get', async () => {
    try {
        const response = await api.getArticles();
        return response;
    } catch (error) {
        console.log(error);
    }
})

export const getArticlesByFilterValueOperation = createAsyncThunk('articlesByFilterValue/get', async (filter: string) => {
    try {
        const response = await api.getArticlesByFilterValue(filter);

        const wordsFilterArray = filter.split(' ');

        const articlesUpdatedRating = response?.map((article) => {
            const rating = ratingTitle(wordsFilterArray, article.title) + ratingSummery(wordsFilterArray, article.summary);
            return { ...article, rating };
        });

        articlesUpdatedRating?.sort((a, b) => {
            return b.rating - a.rating
        }
        );

        return articlesUpdatedRating;
    } catch (error) {
        console.log(error);
    }
})
