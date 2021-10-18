import { createStore } from 'redux'
import { switchTheme } from './actions';
import reducer from './reducer'

const themeStore = createStore(reducer);

themeStore.dispatch(switchTheme('dark'));

export default themeStore;

