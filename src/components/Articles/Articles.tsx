import { FC } from 'react';
import { Grid } from '@mui/material';

import { useAppSelector } from 'redux/hooks';
import { articlesArray } from 'redux/articles/articlesSelectors';

import ArticleCard from './components/ArticleCard';
import { Article } from 'redux/types';

const Articles: FC = () => {
    const articles: Article[] = useAppSelector(articlesArray);

    return <Grid
        container
        position='static'
        sx={{ gap: '45px',
        width: '1440px',
        padding: '45px 75px',
        marginLeft:'auto',
        marginRight:'auto' }}
        >
        {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
        ))}
    </Grid>
}

export default Articles;