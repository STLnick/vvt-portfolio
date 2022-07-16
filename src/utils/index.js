export const getCookie = (key) => {
  return localStorage.getItem(key);
};

export const setCookie = (key, val) => {
  localStorage.setItem(key, val);
};

export const DARK_MODE_COOKIE = 'nr-dark-mode';