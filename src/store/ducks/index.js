import { combineReducers } from "redux";

import { users } from "store/ducks/users";
import { modal } from "store/ducks/modal";

export default combineReducers({
  users,
  modal,
});
