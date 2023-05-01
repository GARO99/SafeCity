import { Language } from "../resource/language"
import { AppMessage } from "./app-message.model"
/** 
 * A dictionary where the keys are the error codes from some Firebase service (auth, firestore, etc.) and 
 * the value is a TranslateObject
*/
export type ResourceErrorMessageDictionary = [Language, Record<string, AppMessage>]