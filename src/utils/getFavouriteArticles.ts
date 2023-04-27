import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const getFavouriteArticles = async (dispatch: Dispatch) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  axios.get("/get-my-favourite-articles", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    
  });
};
