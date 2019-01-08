import axios from 'axios';
import { formatString } from '../utils/appUtils';

export const SET_SENT = 'SET_SENT';
export const SET_FORM_VAL = 'SET_FORM_VAL';
export const SET_VERIFIED = 'SET_VERIFIED';
export const SET_ERR_CAPTCHA = 'SET_ERR_CAPTCHA';
export const RESET_FORM = 'RESET_FORM';

export function setErrCaptcha() {
  return {
    type: SET_ERR_CAPTCHA
  }
}

export function resetForm() {
  return {
    type: RESET_FORM
  }
}

export function setSent(val) {
  return {
    type: SET_SENT,
    payload: val
  }
}

export function setVerified() {
  return {
    type: SET_VERIFIED
  }
}

export function setFormVal(field, val) {
  return {
    type: SET_FORM_VAL,
    field,
    val
  }
}

export const sendEmail = () => async (dispatch, getState) => {

  dispatch(setSent());

  let mailForm = getState().appReducer.form;

  mailForm = {
    ...mailForm,
    val: 'tina'
  }

  const format = formatString(mailForm)

  const values = {
    obj: format
  }

  try {

    const res = await axios.post(ENVAR_API_URL + 'api/mail', values);

    console.log("Respuesta del servicio", res.data);

  } catch (err) {

    console.log("Error enviando email", err)

    dispatch(setSending(false));

  }

};