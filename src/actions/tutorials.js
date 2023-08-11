import { CREATE_TUTORIAL, RETRIEVE_TUTORIALS } from "./types";

import TutorialDataService from "../services/tutorial.service";
import TutorialService from "../services/tutorial.service";

export const createTutorial = (data) => async (dispatch) => {
  try {
    console.log("Data being sent to createTutorial action:", data);

    // const condutor = data;
    // console.log(condutor, "dados");
    // if (!condutor) {
    //   throw new Error("Condutor is undefined");
    // }

    const res = await TutorialDataService.create({
      ...data,
    }); // Send data as an object

    console.log("Response from server:", res.data);

    dispatch({
      type: CREATE_TUTORIAL,
      payload: res.data,
    });

    console.log("Action dispatched");
    return Promise.resolve(res.data);
  } catch (err) {
    console.log("Error in action", err);
    return Promise.reject(err);
  }
};

export const retrieveTutorials = () => (dispatch) => {
  return TutorialService.getAll()
    .then((response) => {
      console.log("Fetched tutorials:", response.data); // Log the fetched data
      dispatch({
        type: RETRIEVE_TUTORIALS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
