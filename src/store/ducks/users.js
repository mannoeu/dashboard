/**
 * STATE
 */
const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: "",
  sort_by_username: "asc",
  data: [],
};

/**
 * TYPES
 */
export const Types = {
  GET_USERS_REQUEST: "get-users-request",
  GET_USERS_SUCCESS: "get-users-success",
  GET_USERS_FAILURE: "get-users-failure",
  SORT: "sort-users",
  REMOVE: "remove-user",
  ADD: "add-user",
  UPDATE: "UPDATE-user",
};

/**
 * REDUCER
 */
export function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_REQUEST:
      return { ...state, loading: true, error: "" };
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        ...applySortedConfig(
          action.payload.data,
          state?.sort_by_username,
          true
        ),
      };
    case Types.REMOVE:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: state?.data?.filter((item) => item.id !== action.payload.id),
      };
    case Types.GET_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload.data };
    case Types.SORT:
      return {
        ...state,
        ...applySortedConfig(state?.data, state?.sort_by_username),
      };
    case Types.ADD:
      return createNewUser(state, action.payload.data);
    case Types.UPDATE:
      return updateUser(state, action.payload.data);
    default:
      return state;
  }
}
/**
 * FUNCS
 */

const applySortedConfig = (
  data,
  actual_sort = "asc",
  maintain_sort = false
) => {
  const onSort = (arr, type) => {
    return arr.sort((a, b) =>
      type === "asc"
        ? a.username.localeCompare(b.username)
        : b.username.localeCompare(a.username)
    );
  };

  let arr = maintain_sort
    ? onSort(data, actual_sort)
    : actual_sort === "asc"
    ? onSort(data, "desc")
    : onSort(data, "asc");
  let sort_value = maintain_sort
    ? actual_sort
    : actual_sort === "asc"
    ? "desc"
    : "asc";

  return { data: arr, sort_by_username: sort_value };
};

const createNewUser = (state, newUser) => {
  let arr = state?.data;
  let new_user_id = !arr?.length
    ? 1
    : Math.max(...arr.map((item) => item.id)) + 1;

  let new_user = {
    id: new_user_id,
    ...newUser,
    username: newUser.name.toLowerCase().split(" ").join("_"),
    address: {
      city: "-",
      ...newUser?.address,
    },
  };

  arr.push(new_user);

  return {
    ...state,
    ...applySortedConfig(arr, state?.sort_by_username, true),
  };
};

const updateUser = (state, updatedUser) => {
  let arr = state?.data;
  let index = arr.findIndex((user) => user.id === updatedUser.id);
  arr[index] = {
    ...arr[index],
    name: updatedUser?.name,
    email: updatedUser?.email,
  };

  return {
    ...state,
    ...applySortedConfig(arr, state?.sort_by_username, true),
  };
};

/**
 * ACTIONS
 */
export const Creators = {
  getUsersRequest: (data) => ({
    type: Types.GET_USERS_REQUEST,
    payload: { data },
  }),
  getUsersSuccess: (data) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: { data },
  }),
  getUsersFailure: (data) => ({
    type: Types.GET_USERS_FAILURE,
    payload: { data },
  }),
  sort: (data) => ({
    type: Types.SORT,
    payload: { data },
  }),
  remove: (id) => ({
    type: Types.REMOVE,
    payload: { id },
  }),
  create: (data) => ({
    type: Types.ADD,
    payload: { data },
  }),
  update: (data) => ({
    type: Types.UPDATE,
    payload: { data },
  }),
};
