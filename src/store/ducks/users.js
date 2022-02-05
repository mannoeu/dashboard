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
  var GET_SORT = {
    asc: (arr) =>
      arr?.sort((a, b) =>
        a.username > b.username ? 1 : b.username > a.username ? -1 : 0
      ),
    desc: (arr) =>
      arr?.sort((a, b) =>
        a.username < b.username ? 1 : b.username < a.username ? -1 : 0
      ),
  };

  var arr = maintain_sort
    ? GET_SORT[actual_sort](data)
    : actual_sort === "asc"
    ? GET_SORT.desc(data)
    : GET_SORT.asc(data);
  var sort_value = maintain_sort
    ? actual_sort
    : actual_sort === "asc"
    ? "desc"
    : "asc";

  return { data: arr, sort_by_username: sort_value };
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
};
