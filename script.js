document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square-container .square')
  const playerDisplay = document.querySelector('#player')

  let currentPlayer = 'player O'
  let counter = 0

  let isGameOver = false // throttle the game over function

  // Add event listener to each square
  squares.forEach((square) => {
    square.addEventListener('click', () => {
      // Check if the square is already filled, if it is, then do nothing
      if (square.innerHTML !== '') return

      // Check if the game is over, if it is, then do nothing
      if (isGameOver) return

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
      // let isGameOver = false // throttle the game over function

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

          isGameOver = false
        }, 1000) // Adjust the timeout as needed
      }

      // * CHECK WINNER
      function checkWinner() {
        // * Check if draw
        if (counter > 8) {
          gameOver()
          counter = 0
        }

        // * Check if X or O wins
        function checkWhoWins(player, color) {
          if (
            squares[0].innerHTML === player &&
            squares[1].innerHTML === player &&
            squares[2].innerHTML === player
          ) {
            squares[0].style.color = color
            squares[1].style.color = color
            squares[2].style.color = color
            gameOver()
          } else if (
            squares[0].innerHTML === player &&
            squares[4].innerHTML === player &&
            squares[8].innerHTML === player
          ) {
            squares[0].style.color = color
            squares[4].style.color = color
            squares[8].style.color = color
            gameOver()
          } else if (
            squares[0].innerHTML === player &&
            squares[3].innerHTML === player &&
            squares[6].innerHTML === player
          ) {
            squares[0].style.color = color
            squares[3].style.color = color
            squares[6].style.color = color
            gameOver()
          } else if (
            squares[1].innerHTML === player &&
            squares[4].innerHTML === player &&
            squares[7].innerHTML === player
          ) {
            squares[1].style.color = color
            squares[4].style.color = color
            squares[7].style.color = color
            gameOver()
          } else if (
            squares[2].innerHTML === player &&
            squares[5].innerHTML === player &&
            squares[8].innerHTML === player
          ) {
            squares[2].style.color = color
            squares[5].style.color = color
            squares[8].style.color = color
            gameOver()
          } else if (
            squares[3].innerHTML === player &&
            squares[4].innerHTML === player &&
            squares[5].innerHTML === player
          ) {
            squares[3].style.color = color
            squares[4].style.color = color
            squares[5].style.color = color
            gameOver()
          } else if (
            squares[6].innerHTML === player &&
            squares[7].innerHTML === player &&
            squares[8].innerHTML === player
          ) {
            squares[6].style.color = color
            squares[7].style.color = color
            squares[8].style.color = color
            gameOver()
          }
        }

        checkWhoWins('x', '#059669')
        checkWhoWins('o', '#059669')
      }

      checkWinner()
    })
  })
})
