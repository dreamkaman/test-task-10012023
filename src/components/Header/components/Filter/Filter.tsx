import { FormEvent } from 'react';
import { useGlobalContext } from 'Context';

import { getAllArticlesOperation, getArticlesByFilterValueOperation } from 'redux/articles/articleOperations';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { articlesArray } from 'redux/articles/articlesSelectors';

import s from './Filter.module.scss';

const Filter = () => {
    const dispatch = useAppDispatch();
    const { filter, setFilter } = useGlobalContext();

    const articles = useAppSelector(articlesArray);

    const onChangeFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    const onSubmitHandler = (e: FormEvent) => {

        e.preventDefault();

        if (!filter) {
            dispatch(getAllArticlesOperation());
        } else {
            dispatch(getArticlesByFilterValueOperation(filter));
        }

    }

    return <>
        <form className={s.filterForm} onSubmit={onSubmitHandler}>
            <label className={s.filterLabel} htmlFor="filter">Filter by keywords</label>
            <input className={s.filterInput} type="text" name="filter" value={filter} onChange={onChangeFilterHandler} />
        </form>
        <p className={s.results}>Results: {articles?.length}</p>
    </>
}

export default Filter;