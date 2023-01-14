import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import GetSvg from "shared/GetSvg";

import { Article } from "redux/types";
import { convertDate } from 'helpers/date';
import { cutText100 } from 'helpers/text'

import s from './ArticleCard.module.scss';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {

    const navigate = useNavigate();

    const onClickReadMoreHandle = () => {
        navigate(`/${article.id}`);
    }

    return <Grid item>
        <Card sx={{
            width: '398px',
            height: '530px',
            borderRadius: '5px',
            border: '1px solid #EAEAEA',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
            // fontFamily:'Montserrat'
            fontFamily: 'var(--main-font-family)'
        }}>
            <CardMedia
                sx={{ height: 217 }}
                image={article.imageUrl}
                title={article.title}
            />
            <div className={s.publicationDate}>
                <GetSvg name='icon-calendar' className='calendarSvg' />
                <Typography component='p' sx={{
                    ml: '8px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    lineHeight: '1.5'
                }}>{convertDate(article.publishedAt)}</Typography>
            </div>
            <CardContent sx={{
                height: '174px',
                mb: '20px',
                padding: '0 25px'
            }}>

                <Typography
                    gutterBottom
                    variant="h5"
                    component="h5"
                    sx={{
                        minHeight: '86px',
                        lineHeight: '1.2',
                        mb: '20px',
                        fontFamily: 'inherit',
                    }}>
                    {article.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        fontFamily: 'inherit',
                    }}>
                    {cutText100(article.summary)}
                </Typography>

            </CardContent>
            <CardActions sx={{
                padding: '0 25px 25px'
            }}>
                <Button
                    onClick={onClickReadMoreHandle}
                    size="small"
                    endIcon={<GetSvg name='icon-arrow-right' className="arrowSvg" />}
                    sx={{
                        padding: 0,
                        fontSize: '16px',
                        lineHeight: '1.5',
                        fontFamily: 'inherit',
                        fontWeight: '700',
                        color: '#363636',
                        textTransform: 'none'
                    }}>
                    Read more
                </Button>
            </CardActions>
        </Card>
    </Grid >
}

export default ArticleCard;