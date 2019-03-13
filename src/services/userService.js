import http from './index';

export const login = (username, password) => http.post('/auth/authenticate', { email: username, password });
