import {  createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'API/articlesAPI';

export const getAllArticlesOperation = createAsyncThunk('articles/get', async () => {
    try {
        const response = await api.getArticles();
        return response;
    } catch (error) {
        console.log(error);
    }

})
