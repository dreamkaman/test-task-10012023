import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'API/articlesAPI';

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
        const response = await api.getArticlesByFilterValue(filter)
        return response;
    } catch (error) {
        console.log(error);
    }
})
