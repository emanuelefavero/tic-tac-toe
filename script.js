document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square-container .square')
  const playerDisplay = document.querySelector('#player')

  let currentPlayer = 'player O'
  let counter = 0

  // Add event listener to each square
  squares.forEach((square) => {
    square.addEventListener('click', (e) => {
      // Every time a square is clicked, the counter goes up by 1
      counter++

      // loop through the squaresArray and gets the index of each square.
      const squaresArray = Array.from(squares)
      const index = squaresArray.indexOf(square)

      // Show current player
      playerDisplay.innerHTML = currentPlayer

      // If current player is player O, then the square will be filled with 'x' and vice versa
      if (currentPlayer === 'player O') {
        squares[index].innerHTML = 'x'
        currentPlayer = 'player X'
      } else {
        squares[index].innerHTML = 'o'
        currentPlayer = 'player O'
      }

      // Game Over
      function gameOverFunction() {
        setTimeout(() => {
          clearInterval(gameOver)
          squares.forEach((square) => {})
          setTimeout(() => {
            squares.forEach((square) => {
              square.innerHTML = ''
              square.style.color = 'black'
            })
          }, 500)
          playerDisplay.innerHTML = 'player X'
          currentPlayer = 'player O'
        }, 500)
      }

      const gameOver = setInterval(() => {
        // Check if X wins
        if (
          squares[0].innerHTML === 'x' &&
          squares[1].innerHTML === 'x' &&
          squares[2].innerHTML === 'x'
        ) {
          squares[0].style.color = 'green'
          squares[1].style.color = 'green'
          squares[2].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[0].innerHTML === 'x' &&
          squares[4].innerHTML === 'x' &&
          squares[8].innerHTML === 'x'
        ) {
          squares[0].style.color = 'green'
          squares[4].style.color = 'green'
          squares[8].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[0].innerHTML === 'x' &&
          squares[3].innerHTML === 'x' &&
          squares[6].innerHTML === 'x'
        ) {
          squares[0].style.color = 'green'
          squares[3].style.color = 'green'
          squares[6].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[1].innerHTML === 'x' &&
          squares[4].innerHTML === 'x' &&
          squares[7].innerHTML === 'x'
        ) {
          squares[1].style.color = 'green'
          squares[4].style.color = 'green'
          squares[7].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[2].innerHTML === 'x' &&
          squares[5].innerHTML === 'x' &&
          squares[8].innerHTML === 'x'
        ) {
          squares[2].style.color = 'green'
          squares[5].style.color = 'green'
          squares[8].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[3].innerHTML === 'x' &&
          squares[4].innerHTML === 'x' &&
          squares[5].innerHTML === 'x'
        ) {
          squares[3].style.color = 'green'
          squares[4].style.color = 'green'
          squares[5].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[6].innerHTML === 'x' &&
          squares[7].innerHTML === 'x' &&
          squares[8].innerHTML === 'x'
        ) {
          squares[6].style.color = 'green'
          squares[7].style.color = 'green'
          squares[8].style.color = 'green'
          gameOverFunction()
        }
        // Check if O wins
        if (
          squares[0].innerHTML === 'o' &&
          squares[1].innerHTML === 'o' &&
          squares[2].innerHTML === 'o'
        ) {
          squares[0].style.color = 'green'
          squares[1].style.color = 'green'
          squares[2].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[0].innerHTML === 'o' &&
          squares[4].innerHTML === 'o' &&
          squares[8].innerHTML === 'o'
        ) {
          squares[0].style.color = 'green'
          squares[4].style.color = 'green'
          squares[8].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[0].innerHTML === 'o' &&
          squares[3].innerHTML === 'o' &&
          squares[6].innerHTML === 'o'
        ) {
          squares[0].style.color = 'green'
          squares[3].style.color = 'green'
          squares[6].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[1].innerHTML === 'o' &&
          squares[4].innerHTML === 'o' &&
          squares[7].innerHTML === 'o'
        ) {
          squares[1].style.color = 'green'
          squares[4].style.color = 'green'
          squares[7].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[2].innerHTML === 'o' &&
          squares[5].innerHTML === 'o' &&
          squares[8].innerHTML === 'o'
        ) {
          squares[2].style.color = 'green'
          squares[5].style.color = 'green'
          squares[8].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[3].innerHTML === 'o' &&
          squares[4].innerHTML === 'o' &&
          squares[5].innerHTML === 'o'
        ) {
          squares[3].style.color = 'green'
          squares[4].style.color = 'green'
          squares[5].style.color = 'green'
          gameOverFunction()
        }
        if (
          squares[6].innerHTML === 'o' &&
          squares[7].innerHTML === 'o' &&
          squares[8].innerHTML === 'o'
        ) {
          squares[6].style.color = 'green'
          squares[7].style.color = 'green'
          squares[8].style.color = 'green'
          gameOverFunction()
        }

        // Check if draw
        if (counter > 8) {
          gameOverFunction()
          counter = 0
        }
      }, 100)
    })
  })
})
