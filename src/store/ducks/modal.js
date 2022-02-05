const INITIAL_STATE = {
  show: false,
  title: "",
  content: null,
  size: "",
};

/**
 * TYPES
 */

export const Types = {
  SHOW: "show-modal",
  HIDE: "hide-modal",
};
/**
 * REDUCER
 */
export function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        ...state,
        show: true,
        title: action.payload.title,
        content: action.payload.content,
        size: action.payload.size,
      };
    case Types.HIDE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  open: (title = "", content = null, size = "md") => ({
    type: Types.SHOW,
    payload: { title, content, size },
  }),
  close: () => ({
    type: Types.HIDE,
  }),
};
