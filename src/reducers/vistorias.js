import { CREATE_VISTORIA, RETRIEVE_VISTORIAS } from "../actions/types";

const initialState = [];

function vistoriaReducer(vistorias = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_VISTORIA:
      return [...vistorias, payload];

    case RETRIEVE_VISTORIAS:
      return payload;

    default:
      return vistorias;
  }
}

export default vistoriaReducer;
