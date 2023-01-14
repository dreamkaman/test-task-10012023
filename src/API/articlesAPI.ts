import axios from "axios";

import { Article } from 'redux/types';

export type GetArticlesResponse = {
    data: Article[];
};

export type GetArticleByIdResponse = {
    data: Article;
}

const instance = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3',
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': '*',
        'Content-Type': 'application/json',
    }
});

export const getArticles = async () => {
    try {
        const { data } = await instance.get<GetArticlesResponse>(
            '/articles'
        );

        return data;

    } catch (error) {
        console.log(error);
    }

};

export const getArticleById = async (id: string) => {
    try {
        const { data } = await instance.get<GetArticleByIdResponse>(
            `/articles/${id}`
        );

        return data;

    } catch (error) {
        console.log(error);
    }
}


