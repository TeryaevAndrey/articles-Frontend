import React from "react";

export const useHttp = () => {
  const [loading, setLoading] = React.useState<boolean>(false); 
  const [error, setError] = React.useState<string>("");

  const request = React.useCallback(async (
    url: string,
    method: string = "GET", 
    body: any, 
    headers: any = {}
  ) => {
    
    setLoading(true);

    try {
      if(body) {
        body = JSON.stringify(body);
        headers["Content-Type"] = "application/json";
      }

      const response = await fetch(url, {method, body, headers});
      const data = await response.json();

      if(!response.ok) {
        throw new Error(data.message || "Что-то пошло не так");
      }

      setLoading(false);

      return data;
    } catch(err: any) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  }, []);
  
  return {loading, request, error};
}