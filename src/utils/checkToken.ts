import jwtDecode from "jwt-decode";

const checkToken = async () => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  if (token) {
    const decodedToken: { [key: string]: any } = await jwtDecode(token);

    const currentTime: number = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      return true;
    }
  } else {
    return false;
  }

  return false;
};

export default checkToken;
