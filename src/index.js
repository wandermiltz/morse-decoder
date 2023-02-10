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

	let byTenDigitsArr = []
	let byTwoDigitsArr = []
	let morseEncodedArr = []
	let resultArr = []

	let getStrSlicedToArr = (str, sectionLength, arr) => {
		for (let i = 0; i < str.length; i += sectionLength) {
			arr.push(str.slice(i, i + sectionLength))
		}
	}

	getStrSlicedToArr(expr, 10, byTenDigitsArr)

	byTenDigitsArr.forEach(el => {

		let arr = []

		if (el.includes('**')) {
			arr = [' ']
		} else {
			getStrSlicedToArr(el, 2, arr)
		}
		byTwoDigitsArr.push(arr)
	})

	byTwoDigitsArr.forEach(twoDigitArr => {

		let arr = []

		if (twoDigitArr.includes(' ')) {
			arr.push(' ')
		}

		twoDigitArr.forEach(el => {
			if (el == '10') {
				arr.push('.')
			} else if (el == '11') {
				arr.push('-')
			}
		})
		morseEncodedArr.push(arr)
	})

	morseEncodedArr.map(el => el = el.join('')).forEach(el => {

		if (el === ' ') {
			resultArr.push(el)
		}

		for (let prop in MORSE_TABLE) {
			if (prop === el) {
				resultArr.push(MORSE_TABLE[prop])
			}
		}
	})

	return resultArr.join('')
}

module.exports = {
	decode
}