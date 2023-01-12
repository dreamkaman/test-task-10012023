import { useEffect, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';

import Header from 'components/Header';
import Articles from 'components/Articles';

import { getAllArticlesOperation } from 'redux/articles/articleOperations';

import './App.css';

const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {

    dispatch(getAllArticlesOperation());
  }, [dispatch]);


  return <>
    <Header />
    <Articles />

  </>;
}

export default App;
