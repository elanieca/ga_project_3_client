const setToken = (token) => localStorage.setItem('token', token);

const getToken = () => localStorage.getItem('token');

const logout = () => localStorage.removeItem('token');

const getPayload = () => {
  const token = getToken();

  if (!token) return false;

  const parts = token.split('.');

  const invalidToken = parts.length < 3;

  if (invalidToken) return false;

  return JSON.parse(Buffer.from(parts[1], 'base64'));
};

const isOwner = (objectId) => objectId === getPayload().userId;

export const AUTH = {
  setToken,
  getToken,
  getPayload,
  isOwner,
  logout
};
