import { useEffect } from 'react';
import { useAppDispatch } from 'redux/hooks';

import { Routes } from 'react-router-dom';
import { Route } from 'react-router';


import { getAllArticlesOperation } from 'redux/articles/articleOperations';

import HomePage from 'features/HomePage/HomePage';
import ArticlePage from 'features/ArticlePage';

import './App.css';

const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {

    dispatch(getAllArticlesOperation());
  }, [dispatch]);


  return <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/:id' element={<ArticlePage />} />
  </Routes>


}

export default App;
