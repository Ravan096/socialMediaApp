export const getTokenFromCookie = () => {
    debugger
    const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token='))
        ?.split('=')[1];

    return token || null;
};