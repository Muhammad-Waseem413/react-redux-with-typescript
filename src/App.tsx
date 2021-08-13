import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";

import { Article } from "./components/Article";
import { AddArticle } from "./components/AddArticle";
import { addArticle, removeArticle } from "./store/actionCreators";
import { Dispatch } from "redux";
import { State } from "../src/store/combinedReducer";

const App: React.FC = () => {
  const { articles }: ArticleState = useSelector(
    (state: State) => state.articles
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default App;
