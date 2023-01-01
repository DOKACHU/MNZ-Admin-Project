import dayjs from 'dayjs';

export const stableSort = (array: any, comparator: any) => {
  const stabilizedThis = array.map((el: never, index: number) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
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

export const mockTimeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
      index % 2 === 0 ? '00' : '30'
    }`
);

export const detailsIconSX = {
  width: 15,
  height: 15,
  verticalAlign: 'text-top',
  mr: 0.5,
  mt: 0.25,
};

export const styleH4 = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 600,
};

export const styleSubtitle = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 500,
};

// export function dateFormat(date: Date) {
//   const initmonth = date.getMonth() + 1;
//   const initday = date.getDate();
//   const inithour = date.getHours();
//   const initminute = date.getMinutes();
//   const initsecond = date.getSeconds();

//   const month = initmonth >= 10 ? initmonth : `0${initmonth}`;
//   const day = initday >= 10 ? initday : `0${initday}`;
//   const hour = inithour >= 10 ? inithour : `0${inithour}`;
//   const minute = initminute >= 10 ? initminute : `0${initminute}`;
//   const second = initsecond >= 10 ? initsecond : `0${initsecond}`;

//   return `${date.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`;
// }

export function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function convertDate(date: any) {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss'); // '25/01/2019'
}

export function convertDay(date: any) {
  return dayjs(date).format('YYYY-MM-DD'); // '25/01/2019'
}

export function convertTime(date: any) {
  return dayjs(date).format('HH:mm:ss'); // '25/01/2019'
}

export const statusArr = [
  { label: '추가', id: 'add' },
  { label: '차감', id: 'sub' },
];
