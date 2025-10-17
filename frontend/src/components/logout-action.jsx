import { useState } from "react";

export default function Logout() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return () => {
    localStorage.clear();
    const storedToken = localStorage.getItem('token');
    if (storedToken !== token) {
      setToken(storedToken);
    }

    return token;
  };
}