
export const talentList: string[][] = [

  // generation 1
  ['jason', 'fujikurauruka', 'hakushikaiori', 'pipkinpippa',
    'rinkouashelia', 'shisuimichiru', 'tenmamaemi', 'utatanenasa'],

  // generation 2  
  []
]
module.exports = async (): Promise<string[][]> => {
  return talentList;
}