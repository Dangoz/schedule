import { AnyAction } from 'redux'
import ITheme from './theme.interface'
import themes from './themes'
import themeStore from './themeStore'

const initialState: {
  theme: ITheme,
  themes: ITheme[]
} = {
  theme: themes[0],
  themes
}

const reducer = (state = initialState, { type, payload }: AnyAction): {
  theme: ITheme, themes: ITheme[]
} => {
  if (type === "SWITCH_THEME") {
    const newTheme = state.themes.find(theme => theme.name === payload.theme);
    return {
      // theme: newTheme,
      ...state,
      theme: newTheme
    }
  }
}

export default reducer;


