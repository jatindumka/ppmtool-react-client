import { all } from "redux-saga/effects";
// import JobsSaga from "containers/HomePage/saga";
// import JobsRequestSaga from "containers/JobsRequest/saga";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([]);
}
