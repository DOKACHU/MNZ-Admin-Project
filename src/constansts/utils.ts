export const stableSort = (array: any, comparator: any) => {
  const stabilizedThis = array.map((el: never, index: number) => [el, index]);
  stabilizedThis?.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el: any) => el[0]);
};

export const descendingComparator = (a: any, b: any, orderBy: any) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = (order: string, orderBy: string) => {
  return order === 'desc'
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
};

export function dateFormat(date: Date) {
  const initmonth = date.getMonth() + 1;
  const initday = date.getDate();
  const inithour = date.getHours();
  const initminute = date.getMinutes();
  const initsecond = date.getSeconds();

  const month = initmonth >= 10 ? initmonth : `0${initmonth}`;
  const day = initday >= 10 ? initday : `0${initday}`;
  const hour = inithour >= 10 ? inithour : `0${inithour}`;
  const minute = initminute >= 10 ? initminute : `0${initminute}`;
  const second = initsecond >= 10 ? initsecond : `0${initsecond}`;

  return `${date.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`;
}
