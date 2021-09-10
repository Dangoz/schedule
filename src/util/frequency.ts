/**
 * class for dealing with frequency
 */
export default class Frequency {

  /**
   * sort by frequency of appearance within data array
   * @param data Example input: [1, 2, 3, 4, 5, 2, 6, 7, 8, 2, 3, 8]
   * @returns output: [2, 3, 8, 1, 4, 5, 6, 7]
   */
  public static sortByFrequency<T>(data: T[]): T[] {
    let frequencyLists: T[][] = [];

    data.forEach(d => {
      let f = frequencyLists.filter((fList, index) => {
        if (fList[0] === d) frequencyLists[index].push(d);
        return fList[0] === d;
      })
      if (!f.length) frequencyLists.push([d]);
    })

    frequencyLists = frequencyLists.sort((a, b) => {
      return b.length - a.length;
    })
    // console.log('after', frequencyLists);
    const sortedData: T[] = frequencyLists.map(list => list[0]);
    return sortedData;
  }
}