export function translateUrl(url, to, from = "fr") {
	return `https://translate.google.com/translate?hl=&sl=${from}&tl=${to}&u=${encodeURI(
		url
	)}`
}
