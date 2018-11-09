import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { localeReducer } from './locale-reducer';
import { SPANISH_TRANSLATION, ENGLISH_TRANSLATION, FRENCH_TRANSLATION } from './messages';
import { beforeEach, before } from 'mocha';

let initialState;

describe('locale reducer', () => {
    it('should switch to spanish', () => {
        const initialState = {
            lang: ENGLISH_TRANSLATION.lang,
            messages: ENGLISH_TRANSLATION.messages
        }
        const afterState = {
            lang: SPANISH_TRANSLATION.lang,
            messages: SPANISH_TRANSLATION.messages
        }
        deepFreeze(initialState);
        expect(
            localeReducer(initialState, { type: 'LOCALE_SELECTED', locale: 'es' })
        ).toEqual(afterState);
    });
    it('should switch to english', () => {
        const initialState = {
            lang: SPANISH_TRANSLATION.lang,
            messages: SPANISH_TRANSLATION.messages
        }
        const afterState = {
            lang: ENGLISH_TRANSLATION.lang,
            messages: ENGLISH_TRANSLATION.messages
        }
        deepFreeze(initialState);
        expect(
            localeReducer(initialState, { type: 'LOCALE_SELECTED', locale: 'en' })
        ).toEqual(afterState);
    });
    it('should switch to french', () => {
        const initialState = {
            lang: ENGLISH_TRANSLATION.lang,
            messages: ENGLISH_TRANSLATION.messages
        }
        const afterState = {
            lang: FRENCH_TRANSLATION.lang,
            messages: FRENCH_TRANSLATION.messages
        }
        deepFreeze(initialState);
        expect(
            localeReducer(initialState, { type: 'LOCALE_SELECTED', locale: 'fr' })
        ).toEqual(afterState);
    });
});
