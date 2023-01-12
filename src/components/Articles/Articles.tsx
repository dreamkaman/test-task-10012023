import { Grid } from '@mui/material';

import ArticleCard from './components/ArticleCard';

// import s from './Article.module.scss';


const Articles = () => {
    return <Grid container spacing={5}>
        <ArticleCard />
    </Grid>
}

export default Articles;