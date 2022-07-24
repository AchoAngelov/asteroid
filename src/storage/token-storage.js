export const setTokenStorage = (token) => {
    localStorage.setItem('token', token);
};
export const getTokenStorage = () => localStorage.getItem('token');
