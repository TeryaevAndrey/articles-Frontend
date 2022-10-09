import React from "react";

const storageName: string = "userData";

export const useAuth = () => {
  const [token, setToken] = React.useState<undefined | string>(undefined);
  const [ready, setReady] = React.useState<boolean>(false);
  const [userId, setUserId] = React.useState<undefined | string>(undefined);
  const [name, setName] = React.useState<undefined | string>(undefined);

  const login = React.useCallback((jwtToken: string, id: string, name: string) => {
    setToken(jwtToken);
    setUserId(id);
    setName(name);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
        name
      })
    );
  }, []);

  const logout = React.useCallback(() => {
    setToken(undefined);
    setUserId(undefined);
    setName(undefined);
    localStorage.removeItem(storageName);
  }, []);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) || "{}");

    if (data && data.token) {
      login(data.token, data.userId, data.name);
    }

    setReady(true);
  }, [login]);

  return { login, logout, token, userId, ready, name };
};
