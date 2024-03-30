
export const storageKey: any = {
  user: "user@jaipurria",
  token: "token@jaipurria",
  oldToken: "oldToken@jaipurria",
  oldUser: "oldUser@jaipurria",
  dashboardCount: "dashboardCount@jaipurria",
  showSubscription: "showSubscription@jaipurria",
  permissions: "acc@jaipurria"
};

export function setUser(data: any) {
  return localStorage.setItem(storageKey.user, JSON.stringify(data));
}

export function getUser() {
  const user = localStorage.getItem(storageKey.user)
  return user ? JSON.parse(user) : null;
}

export function setToken(data: string) {
  return localStorage.setItem(storageKey.token, data);
}

export function getToken() {
  return localStorage.getItem(storageKey.token);
}

export function setOldToken(data: string) {
  return localStorage.setItem(storageKey.oldToken, data);
}

export function getOldToken() {
  return localStorage.getItem(storageKey.oldToken);
}

export function setOldUser(data: any) {
  return localStorage.setItem(storageKey.oldUser, JSON.stringify(data));
}

export function getOldUser() {
  const user = localStorage.getItem(storageKey.oldUser)
  return user ? JSON.parse(user) : null;
}

export function setToStorage(key: string, data: any) {
  return localStorage.setItem(key, JSON.stringify(data));
}

export function getFromStore(key: string) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null;
}

export function clearAll() {
  localStorage.clear();
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}
