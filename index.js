const app = "I don't do much."
function moveDodgerLeft(dodger) {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  
}

document.on('keydown', e => {
  var dodger = document.getElementById('dodger')
  if (e.which === 37) {
    moveDodgerLeft(dodger)
  }
  
  if (e.which === 39) {
    moveDodgerRight();
  }
});