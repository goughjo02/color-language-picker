import { SPANISH_TRANSLATION, ENGLISH_TRANSLATION, FRENCH_TRANSLATION } from './messages';


//let locale = 
//    (navigator.localeuage && navigator.localeuages[0])
//    || navigator.localeuage
//    || navigator.userlocaleuage
//    || 'en-US'

const initialState = {
    locale: ENGLISH_TRANSLATION.locale,
    messages: ENGLISH_TRANSLATION.messages
};

export const localeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOCALE_SELECTED':
            switch (action.locale) {
                case 'en':
                    return { ...state, locale: ENGLISH_TRANSLATION.locale, messages: ENGLISH_TRANSLATION.messages };
                case 'fr':
                    return { ...state, locale: FRENCH_TRANSLATION.locale, messages: FRENCH_TRANSLATION.messages };
                case 'es':
                    return { ...state, locale: SPANISH_TRANSLATION.locale, messages: SPANISH_TRANSLATION.messages };
                default:
                    return { ...state, locale: ENGLISH_TRANSLATION.locale, messages: ENGLISH_TRANSLATION.messages };
            }
        default:
            return state;
    }
};