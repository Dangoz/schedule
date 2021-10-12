export const actions = {
  SWITCH_THEME: "SWITCH_THEME"
}

export const switchTheme = (theme: string) => {
  return {
    type: actions.SWITCH_THEME,
    payload: {
      theme
    }
  }
}