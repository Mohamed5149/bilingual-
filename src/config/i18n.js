import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locale/en.json';
import ar from '../locale/ar.json';

i18n.use(initReactI18next)
    .init({
        resources: {
            en, ar
        },
        lng:'ar',
        fallbackLng: 'ar',
        debug: true,
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
          escapeValue: false,
          formatSeparator: ',',
        },
        react: {
            wait: true
        }
    })

export default i18n;