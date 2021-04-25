import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { routerMiddleware } from "connected-react-router";
import rootSaga from "./rootSaga";

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware(history), sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  //   store.injectedReducers = {};
  /* istanbul ignore next */
  //   if (module.hot) {
  //     module.hot.accept("./reducers", () => {
  //       store.replaceReducer(rootReducer(store.injectedReducers));
  //     });
  //   }

  return store;
}
