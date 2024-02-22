document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square-container .square')
  const playerDisplay = document.querySelector('#player')

  let currentPlayer = 'player O'
  let counter = 0

  // Add event listener to each square
  squares.forEach((square) => {
    square.addEventListener('click', () => {
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

      // * GAME OVER
      let isGameOver = false // throttle the game over function

      function gameOver() {
        // THROTTLE: Prevent further calls if game is already over
        if (isGameOver) return

        isGameOver = true

        setTimeout(() => {
          // Reset the game
          squares.forEach((square) => {
            square.innerHTML = ''
            square.style.color = 'black'
          })

          // Reset the player display and current player
          playerDisplay.innerHTML = 'player X'
          currentPlayer = 'player O'
          counter = 0 // Reset the counter for the next game

          // isGameOver = false
        }, 1000) // Adjust the timeout as needed
      }

      // * CHECK WINNER
      function checkWinner() {
        // * Check if draw
        if (counter > 8) {
          gameOver()
          counter = 0
        }

        // * Check if X wins
        else if (
          squares[0].innerHTML === 'x' &&
          squares[1].innerHTML === 'x' &&
          squares[2].innerHTML === 'x'
        ) {
          squares[0].style.color = '#059669'
          squares[1].style.color = '#059669'
          squares[2].style.color = '#059669'
          gameOver()
        } else if (
          squares[0].innerHTML === 'x' &&
          squares[4].innerHTML === 'x' &&
          squares[8].innerHTML === 'x'
        ) {
          squares[0].style.color = '#059669'
          squares[4].style.color = '#059669'
          squares[8].style.color = '#059669'
          gameOver()
        } else if (
          squares[0].innerHTML === 'x' &&
          squares[3].innerHTML === 'x' &&
          squares[6].innerHTML === 'x'
        ) {
          squares[0].style.color = '#059669'
          squares[3].style.color = '#059669'
          squares[6].style.color = '#059669'
          gameOver()
        } else if (
          squares[1].innerHTML === 'x' &&
          squares[4].innerHTML === 'x' &&
          squares[7].innerHTML === 'x'
        ) {
          squares[1].style.color = '#059669'
          squares[4].style.color = '#059669'
          squares[7].style.color = '#059669'
          gameOver()
        } else if (
          squares[2].innerHTML === 'x' &&
          squares[5].innerHTML === 'x' &&
          squares[8].innerHTML === 'x'
        ) {
          squares[2].style.color = '#059669'
          squares[5].style.color = '#059669'
          squares[8].style.color = '#059669'
          gameOver()
        } else if (
          squares[3].innerHTML === 'x' &&
          squares[4].innerHTML === 'x' &&
          squares[5].innerHTML === 'x'
        ) {
          squares[3].style.color = '#059669'
          squares[4].style.color = '#059669'
          squares[5].style.color = '#059669'
          gameOver()
        } else if (
          squares[6].innerHTML === 'x' &&
          squares[7].innerHTML === 'x' &&
          squares[8].innerHTML === 'x'
        ) {
          squares[6].style.color = '#059669'
          squares[7].style.color = '#059669'
          squares[8].style.color = '#059669'
          gameOver()
        }

        // * Check if O wins
        else if (
          squares[0].innerHTML === 'o' &&
          squares[1].innerHTML === 'o' &&
          squares[2].innerHTML === 'o'
        ) {
          squares[0].style.color = '#059669'
          squares[1].style.color = '#059669'
          squares[2].style.color = '#059669'
          gameOver()
        } else if (
          squares[0].innerHTML === 'o' &&
          squares[4].innerHTML === 'o' &&
          squares[8].innerHTML === 'o'
        ) {
          squares[0].style.color = '#059669'
          squares[4].style.color = '#059669'
          squares[8].style.color = '#059669'
          gameOver()
        } else if (
          squares[0].innerHTML === 'o' &&
          squares[3].innerHTML === 'o' &&
          squares[6].innerHTML === 'o'
        ) {
          squares[0].style.color = '#059669'
          squares[3].style.color = '#059669'
          squares[6].style.color = '#059669'
          gameOver()
        } else if (
          squares[1].innerHTML === 'o' &&
          squares[4].innerHTML === 'o' &&
          squares[7].innerHTML === 'o'
        ) {
          squares[1].style.color = '#059669'
          squares[4].style.color = '#059669'
          squares[7].style.color = '#059669'
          gameOver()
        } else if (
          squares[2].innerHTML === 'o' &&
          squares[5].innerHTML === 'o' &&
          squares[8].innerHTML === 'o'
        ) {
          squares[2].style.color = '#059669'
          squares[5].style.color = '#059669'
          squares[8].style.color = '#059669'
          gameOver()
        } else if (
          squares[3].innerHTML === 'o' &&
          squares[4].innerHTML === 'o' &&
          squares[5].innerHTML === 'o'
        ) {
          squares[3].style.color = '#059669'
          squares[4].style.color = '#059669'
          squares[5].style.color = '#059669'
          gameOver()
        } else if (
          squares[6].innerHTML === 'o' &&
          squares[7].innerHTML === 'o' &&
          squares[8].innerHTML === 'o'
        ) {
          squares[6].style.color = '#059669'
          squares[7].style.color = '#059669'
          squares[8].style.color = '#059669'
          gameOver()
        }
      }

      setTimeout(() => {
        checkWinner()
      }, 100)
    })
  })
})
