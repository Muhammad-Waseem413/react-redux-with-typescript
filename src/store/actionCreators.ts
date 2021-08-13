import * as actionTypes from "./actionTypes";

export const addArticle = (article: IArticle) => (dispatch: DispatchType) => {
  dispatch({ type: actionTypes.ADD_ARTICLE, article });
};

export const removeArticle =
  (article: IArticle) => (dispatch: DispatchType) => {
    dispatch({ type: actionTypes.REMOVE_ARTICLE, article });
  };
