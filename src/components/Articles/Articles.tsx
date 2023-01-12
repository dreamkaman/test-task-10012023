import { Grid } from '@mui/material';

import ArticleCards from './components/ArticleCards';
import { useAppSelector } from 'redux/hooks';

import { articlesArray } from 'redux/articles/articlesSelectors';

// import s from './Article.module.scss';


const Articles = () => {
    const articles = useAppSelector(articlesArray);
    console.log(articles);

    return <Grid container spacing={25}>
        <ArticleCards />
    </Grid>
}

export default Articles;