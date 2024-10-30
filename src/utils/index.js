/**
 *
 * @param {string} key Key of cookie to get
 * @returns {string|null} Value of retrieved cookie
 */
export const getCookie = (key) => {
  return localStorage.getItem(key);
};

/**
 *
 * @param {string} key Key of cookie to set
 * @param {string} val Value to set cookie with
 */
export const setCookie = (key, val) => {
  localStorage.setItem(key, val);
};

/**
 *
 * @description Add or remove dark class from App component
 * @param {Boolean} isDark Whether or not to apply dark mode class
 */
export const toggleDarkClass = (isDark) => {
  if (isDark) document.getElementById("app").classList.add("dark");
  else document.getElementById("app").classList.remove("dark");
};

export const DARK_MODE_COOKIE = "nr-dark-mode";
