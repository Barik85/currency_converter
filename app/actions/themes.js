import { SWITCH_THEME } from '../redux/actionTypes';

const switchTheme = color => ({
  type: SWITCH_THEME,
  payload: color,
});

export default switchTheme;
