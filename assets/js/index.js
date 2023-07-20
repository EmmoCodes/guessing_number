'use strict'

const chooseRounds = document.querySelector('.my-rounds')
const customRoundsInput = document.querySelector('.custom-rounds')
const guessingInput = document.querySelector('.input-number')
const customRounds = document.querySelector('.custom-rounds')
const guessBtn = document.querySelector('.guess-btn')
const startBtn = document.querySelector('.start-game')
const output = document.querySelector('ol')

let randomNumber
let counter = 1
let currentRound = 0
let amountRounds

const roundsAmount = () => {
  const checkedBtn = document.querySelector('input:checked')

  if (checkedBtn.value === 'custom') {
    customRoundsInput.classList.remove('hide')
  } else {
    amountRounds = Number(checkedBtn.value)
  }
}

const startGame = () => {
  const hidedSection = document.querySelector('.hided-section')
  const checkedBtn = document.querySelector('input:checked')

  if (checkedBtn.value === 'custom') {
    amountRounds = Number(customRounds.value)
    console.log(amountRounds)
  }

  if (amountRounds === undefined) {
    return
  }

  hidedSection.classList.remove('hide')
  randomNumber = Math.ceil(Math.random() * 100)
}

const generalLogic = () => {
  const inputValue = Number(guessingInput.value)

  if ((inputValue === 0) | (inputValue === 101)) return

  if (currentRound === amountRounds) {
    output.innerHTML = 'GAME OVER'
    return
  }

  currentRound++

  if (inputValue === randomNumber) {
    output.innerHTML += `<li>${counter} YES! You guessed it! The number is ${inputValue}</li>`
  } else if (inputValue > randomNumber) {
    output.innerHTML += `<li>${counter} You need to guess lower than ${inputValue} </li>`
  } else if (inputValue < randomNumber) {
    output.innerHTML += `<li>${counter} You need to guess higher than ${inputValue} </li>`
  }

  const html = `${currentRound} / ${amountRounds}`
  chooseRounds.innerHTML = html

  counter++
}

chooseRounds.addEventListener('click', roundsAmount)
startBtn.addEventListener('click', startGame)
guessBtn.addEventListener('click', generalLogic)
