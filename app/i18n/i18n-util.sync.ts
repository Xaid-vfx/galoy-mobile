// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters'
import type { Locales, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

import af from './af'
import ca from './ca'
import cs from './cs'
import de from './de'
import el from './el'
import en from './en'
import es from './es'
import fr from './fr'
import it from './it'
import pt from './pt'
import sw from './sw'
import th from './th'
import tr from './tr'
import vi from './vi'

const localeTranslations = {
	af,
	ca,
	cs,
	de,
	el,
	en,
	es,
	fr,
	it,
	pt,
	sw,
	th,
	tr,
	vi,
}

export const loadLocale = (locale: Locales): void => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = (): void => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))
