import axios from "axios";

import { GET_ERRORS } from "./types";

export const createProject = async (project, history, dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard");
  } catch (err) {
    console.log("catch", err.response.data);

    dispatch({ type: GET_ERRORS, payload: err.response.data });
    console.log("catch2");
  }
};
