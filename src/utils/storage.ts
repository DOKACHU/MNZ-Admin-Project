/* eslint-disable prettier/prettier */
const storagePrefix = 'mnz_dev_';

const storage = {
  // 토큰 가져오기
  getToken: () => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}token`) as string
    );
  },

  // 토근 저장하기
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  // 토큰 삭제
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};

export default storage;
