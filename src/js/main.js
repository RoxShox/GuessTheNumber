let input = document.querySelector(".field__input")
let btn = document.querySelector(".field__btn")
let check = document.querySelector(".result__check-out")
let help = document.querySelector(".result__help-out")
let count = document.querySelector(".result__count-out")
let err = document.querySelector(".error")
let helpParity = document.querySelector(".help-parity")

let countTry = 0
let countHint = 0
let randNum = 1 + Math.floor(Math.random() * 100)

btn.addEventListener("click", checkNum)

function checkNum(e) {
	let userNum = input.value
	if (!validateInputValue()) {
		return
	} else if (userNum > randNum) {
		check.textContent = "Пока что не угадали ..."
		help.textContent = "Загаданное число меньше "
		countTry++
		countHint++
		count.textContent = countTry
	} else if (userNum < randNum) {
		check.textContent = "Пока что не угадали ..."
		help.textContent = "Загаданное число больше "
		countTry++
		countHint++
		count.textContent = countTry
	} else {
		check.textContent = "Поздравляем! Вы угадали."
		help.textContent = "В самый раз"
		countTry++
		count.textContent = countTry
	}
	renderHint()
}

function renderHint() {
	let parrity = randNum % 2 === 0 ? "Ваше число четное" : "Ваше число нечётное"
	if (countHint === 3) {
		helpParity.textContent = parrity
		countHint = 0
	} else {
		helpParity.textContent = ""
	}
}

function validateInputValue() {
	let userNum = input.value
	if (userNum > 100 || userNum < 1) {
		err.textContent = "Введите число в указаном диапазоне"
		return false
	} else {
		err.textContent = ""
		return true
	}
}
