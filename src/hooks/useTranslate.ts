import { useEffect, useState } from 'react';
import { useI18N } from '../hooks';
import { Locale } from '../constants';

async function getTranslations(locale: Locale) {
	const translations = await import(`../i18n/${locale}.json`);
	return translations.default;
}

export function useTranslate() {
	const { locale } = useI18N();
	const [translations, setTranslations] = useState();

	useEffect(() => {
		async function updateTranslations() {
			setTranslations(await getTranslations(locale ?? Locale.En));
		}
		updateTranslations();
	}, [locale]);

	const translate = (key: string) => {
		if (translations) {
			return translations[key] || key;
		}
	};

	return { translate };
}
