import { all, takeLatest } from "redux-saga/effects";

import { Types as UsersType } from "store/ducks/users";

import { getUsers } from "./users";

export default function* rootSaga() {
  yield all([takeLatest(UsersType.GET_USERS_REQUEST, getUsers)]);
}
