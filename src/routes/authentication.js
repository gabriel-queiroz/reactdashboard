const isAuthenticated = () => !!localStorage.getItem('@reactdashboard:token');
export default isAuthenticated;
