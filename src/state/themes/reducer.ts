import { AnyAction } from 'redux'
import ITheme from './theme.interface'
import themes from './themes'

interface ThemeStore {
  theme: ITheme
  themes: ITheme[]
}

const initialState: ThemeStore = {
  theme: themes[0],
  themes,
}

const reducer = (state = initialState, { type, payload }: AnyAction): ThemeStore => {
  if (type === 'SWITCH_THEME') {
    const newTheme = state.themes.find((theme) => theme.name === payload.theme)
    return {
      // theme: newTheme,
      ...state,
      theme: newTheme,
    }
  }
  return state
}

export default reducer
