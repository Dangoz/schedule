import ITheme from './theme.interface'

const themes: ITheme[] = [
  {
    name: 'dark',
    background: "#171b1f",
    foreground: "#262a2f",
    // background: "#262a2f",
    // foreground: "#171b1f",
    textLow: "#adadad",
    textHigh: "#ffffff",
    emission: "#ffffff",
  },
  {
    name: 'spring',
    // background: '#A0E7E5',
    background: '#355070',
    foreground: '#FFAEBC',
    textLow: "#adadad",
    textHigh: "#ffffff",
    emission: "#FFAEBC",
  },
  {
    name: 'test',
    background: '#111111',
    foreground: '#0072e1',
    textLow: "#adadad",
    textHigh: "#ffffff",
    emission: "#0072e1"
  }
]

export const themeNames: string[] = themes.map(theme => theme.name);

export default themes;