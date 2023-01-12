import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Header from 'components/Header';
import Articles from 'components/Articles';

import { getAllArticlesOperation } from 'redux/articles/articleOperations';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    // dispatch(getAllArticlesOperation());//Fix this error
  }, []);

  console.log(articles);

  return <>
    <Header />
    <Articles />

  </>;
}

export default App;
