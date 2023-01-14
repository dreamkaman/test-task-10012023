import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Button, Typography } from '@mui/material';
import GetSvg from 'shared/GetSvg';

import { Article } from 'redux/types';
import * as api from 'API/articlesAPI';

import s from './ArticlePage.module.scss';

const ArticlePage = () => {
    const [foundArticle, setFoundArticle] = useState<Article>();
    const { id = '' } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.getArticleById(id)
            .then((data) => {
                console.log(data);

                setFoundArticle(data);
            });
    }, [id]);



    const onClickBackHandle = () => {
        navigate('/');
    }

    return <>
        <div className={s.imageWrapper}>
            <img src={foundArticle?.imageUrl} alt={foundArticle?.title} />
        </div>
        <div className={`${s.wrapperAll}`}>
            <div className={s.wrapperText}>
                <Typography
                    component='h5'
                    sx={{
                        mb: '50px',
                        fontSize: '24px',
                        lineHeight: '1.22',
                        fontFamily: 'inherit',
                        textAlign: 'center',
                        color: '#363636'

                    }}
                >{foundArticle?.title}</Typography>
                <Typography
                    component='p'
                    sx={{
                        fontSize: '18px',
                        lineHeight: '1.5',
                        fontFamily: 'inherit'
                    }}
                >{foundArticle?.summary}</Typography>
            </div>
            <Button
                onClick={onClickBackHandle}
                size="small"
                startIcon={<GetSvg name='icon-arrow-left' className="arrowSvg" />}
                sx={{
                    padding: 0,
                    fontSize: '16px',
                    lineHeight: '1.5',
                    fontFamily: 'inherit',
                    fontWeight: '700',
                    color: '#363636',
                    textTransform: 'none'
                }}>
                Back to homepage
            </Button>
        </div>

    </>
}

export default ArticlePage;