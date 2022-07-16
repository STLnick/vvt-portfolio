export const getCookie = (key) => {
  return localStorage.getItem(key);
};

export const setCookie = (key, val) => {
  localStorage.setItem(key, val);
};

export const toggleDarkClass = (isDark) => {
  if (isDark) document.getElementById('app').classList.add('dark');
  else document.getElementById('app').classList.remove('dark');
}

export const DARK_MODE_COOKIE = 'nr-dark-mode';