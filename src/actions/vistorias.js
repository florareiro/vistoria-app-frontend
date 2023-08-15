import { CREATE_VISTORIA, RETRIEVE_VISTORIAS } from "./types";

import VistoriaService from "../services/vistoria.service";

export const createVistoria = (data) => async (dispatch) => {
  try {
    console.log("Data being sent to createVistoria action:", data);

    // const condutor = data;
    // console.log(condutor, "dados");
    // if (!condutor) {
    //   throw new Error("Condutor is undefined");
    // }

    const res = await VistoriaService.create({
      ...data,
    }); // Send data as an object

    console.log("Response from server:", res.data);

    dispatch({
      type: CREATE_VISTORIA,
      payload: res.data,
    });

    console.log("Action dispatched");
    return Promise.resolve(res.data);
  } catch (err) {
    console.log("Error in action", err);
    return Promise.reject(err);
  }
};

export const retrieveVistorias = () => (dispatch) => {
  return VistoriaService.getAll()
    .then((response) => {
      console.log("Fetched vistorias:", response.data); // Log the fetched data
      dispatch({
        type: RETRIEVE_VISTORIAS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
