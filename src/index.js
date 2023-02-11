const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {

	let byTenDigits = []
	let byTwoDigits = []
	let morseEncoded = []
	let result = []

	let getStrSlicedToArr = (str, sectionLength, arr) => {
		for (let i = 0; i < str.length; i += sectionLength) {
			arr.push(str.slice(i, i + sectionLength))
		}
	}

	getStrSlicedToArr(expr, 10, byTenDigits)

	byTenDigits.forEach(str => {

		let arr = []

		if (!str.includes('*')) {
			getStrSlicedToArr(str, 2, arr)
		}
		byTwoDigits.push(arr)
	})

	byTwoDigits.forEach(twoDigitArr => {

		let arr = []

		twoDigitArr.forEach(el => {
			if (el === '10') {
				arr.push('.')
			} else if (el === '11') {
				arr.push('-')
			}
		})
		morseEncoded.push(arr)
	})

	morseEncoded.map(el => el = el.join('')).forEach(el => {

		if (el === '') {
			result.push(' ')
		}

		for (let prop in MORSE_TABLE) {
			if (prop === el) {
				result.push(MORSE_TABLE[prop])
			}
		}
	})

	return result.join('')
}

module.exports = {
	decode
}