export const logged = () => localStorage.getItem('password');
export const login = password => localStorage.setItem('password', password);
