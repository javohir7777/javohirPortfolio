import { EN } from "../../data/en/EN";
import { UZ } from "../../data/uz/UZ";
import { CHANGE_LANG } from "../types/languageType";

const language = {
  en: EN,
  uz: UZ,
};

const langType = "en";

const initialState = {
  langType,
  language: language[langType],
};

export const languageReducer = (state = initialState, { type, payload }) => {
  if (type === CHANGE_LANG) {
    return {
      langType: payload,
      language: language[payload],
    };
  }
  return state;
};
