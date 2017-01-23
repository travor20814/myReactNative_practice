export const LOGIN_SUCCESS = 'LOGIN/LOGIN_SUCCESS';

export function login(account) {
  return {
    type: LOGIN_SUCCESS,
    name: account,
  };
}
