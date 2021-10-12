import { createStore } from 'redux'
import { switchTheme } from './actions';
import reducer from './reducer'

// import ITheme from './theme.interface'
// import themes from './themes'

const themeStore = createStore(reducer);

themeStore.dispatch(switchTheme('dark'))

export default themeStore;

