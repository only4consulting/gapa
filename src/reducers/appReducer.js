import { TEST_ACTION } from "../actions/appActions";

const initialState = {
  counterTestAction: 12
};

// Reducer para la app
export const appReducer = (state = initialState, action) => {

  // Evaluar la acción despachada
  switch (action.type) {

    // Acción de prueba
    case TEST_ACTION:
      return {
        ...state,
        counterTestAction: state.counterTestAction + 1
      };

    // Si no es ninguna de las acciones anteriores
    default:
      return state;
  }
}