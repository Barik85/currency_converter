import { SWITCH_THEME } from '../redux/actionTypes';

const INITIAL_STATE = { primaryColor: '#1c3334' };

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return { primaryColor: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
