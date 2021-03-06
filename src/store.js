import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import reducers from "./reducers/index";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = logger;

const middleware = [sagaMiddleware, loggerMiddleware];

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
