import { call, put } from "redux-saga/effects";
import { Creators as UsersAction } from "store/ducks/users";

export function* getUsers() {
  try {
    const data = yield call(() =>
      fetch(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      )
        .then((res) => res.json())
        .then((result) => result)
    );

    yield put(UsersAction.getUsersSuccess(data));
  } catch (error) {
    yield put(UsersAction.getUsersFailure(error.message));
  }
}
