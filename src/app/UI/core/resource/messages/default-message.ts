import { DefaultAppMessage } from "../../models/default-app-message.model";
import { Language } from "../language";

export const defaultMessage: Record<Language, DefaultAppMessage> = {
  en: {
    classMessage: 'Unexpected Error.',
    defaultReplaceable: 'Server Error.'
  },
  es: {
    classMessage: 'Error Inesperado.',
    defaultReplaceable: 'Error del Servidor.'
  }
}