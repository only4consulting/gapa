import { SET_SENT, SET_FORM_VAL, SET_VERIFIED, SET_ERR_CAPTCHA, RESET_FORM } from "../actions/appActions";

const initialState = {
  sent: false,
  errorCaptcha: false,
  isVerified: false,
  form: {
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: ''
  }
};

// Reducer para la app
export const appReducer = (state = initialState, action) => {

  // Evaluar la acción despachada
  switch (action.type) {

    //Setear flag de enviando mail
    case SET_SENT:
      return {
        ...state,
        sent: true
      };

    //Resetear formulario
    case RESET_FORM:
      return initialState;

    //Setear valor del formulario
    case SET_FORM_VAL:

      let form = Object.assign({}, state.form);

      form[action.field] = action.val;

      return {
        ...state,
        form
      }

    //Si se verifió el captcha
    case SET_VERIFIED: {
      return {
        ...state,
        isVerified: true,
        errorCaptcha: false
      }
    }

    //Indicar un error por no verificar captcha
    case SET_ERR_CAPTCHA: {
      return {
        ...state,
        errorCaptcha: true
      }
    }

    // Si no es ninguna de las acciones anteriores
    default:
      return state;
  }
}