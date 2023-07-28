export function checkKeyboard(onKeyboard, offKeyboard) {
  if ("virtualKeyboard" in navigator) {
    // const { x, y, width, height } = navigator.virtualKeyboard.boundingRect
    // navigator.virtualKeyboard.overlaysContent = true

    navigator.virtualKeyboard.addEventListener("geometrychange", event => {
      const { x, y, width, height } = event.target.boundingRect
      if (height > 0 && width > 0) {
        onKeyboard(height)
      } else {
        offKeyboard()
      }
    })
  } else {
    window.addEventListener("resize", function () {
      const keyboardHeight = getKeyboardHeight()

      if (keyboardHeight !== -1) {
        onKeyboard(height)
      } else {
        offKeyboard()
      }
    })
    // window.screen object
    screen.orientation.addEventListener("change", event => {
      const type = event.target.type
      const angle = event.target.angle
      const keyboardHeight = getKeyboardHeight()
      if (keyboardHeight !== -1) {
        onKeyboard(height)
      } else {
        offKeyboard()
      }
    })
  }
}
// Function to detect virtual keyboard and return its height
function getKeyboardHeight() {
  const viewportHeight = window.innerHeight
  const documentHeight = document.documentElement.clientHeight
  const keyboardVisible = viewportHeight < documentHeight

  if (keyboardVisible) {
    return documentHeight - viewportHeight
  } else {
    return -1
  }
}
//this method add the keyboard-open class to body when keyboard is open and remove it when keyboard is off

// //logic for keyboard detection

// function updateWindowSize() {
//   window.lastInnerWidth = window.innerWidth
//   window.lastInnerHeight = window.innerHeight
//   window.lastOrientation = window.orientation
//   // Stays the same for iOS, so that's our ticket to detect iOS keyboard
//   window.lastBodyHeight = document.body.clientHeight
// }

// function detectKeyboard() {
//   function orientationChange() {
//     if (
//       ((window.lastOrientation == 0 || window.lastOrientation == 180) &&
//         (window.orientation == 0 || window.orientation == 180)) ||
//       ((window.lastOrientation == 90 || window.lastOrientation == -90) &&
//         (window.orientation == 90 || window.orientation == -90))
//     )
//       return false
//     else return true
//   }

//   // No orientation change, keyboard opening
//   if (
//     window.lastInnerHeight - window.innerHeight > 150 &&
//     window.innerWidth == window.lastInnerWidth
//   ) {
//     var keyboardHeight = window.lastInnerHeight - window.innerHeight
//     updateWindowSize()
//     return keyboardHeight
//   }
//   // Orientation change with keyboard already opened
//   if (
//     orientationChange() &&
//     document.body.classList.contains("keyboard-open")
//   ) {
//     var keyboardHeight =
//       screen.height - window.topBarHeight - window.innerHeight
//     updateWindowSize()
//     return keyboardHeight
//   }

//   // No orientation change, keyboard closing
//   if (
//     window.innerHeight - window.lastInnerHeight > 150 &&
//     window.innerWidth == window.lastInnerWidth
//   ) {
//     var keyboardHeight = -1
//     updateWindowSize()
//     return keyboardHeight
//   }

//   // Orientation change or regular resize, no keyboard action
//   var keyboardHeight = 0
//   updateWindowSize()
//   return keyboardHeight
// }
// //keyboard resize handler
// function actualResizeHandler() {
//   var keyboardHeight = detectKeyboard()
//   if (keyboardHeight > 0) {
//     if (!document.body.classList.contains("keyboard-open"))
//       document.body.classList.add("keyboard-open")
//     return keyboardHeight
//   } else if (keyboardHeight == -1) {
//     document.body.classList.remove("keyboard-open")
//     return -1
//   }
// }
// //this function take to callbacks 1st for onkeyboard and 2nd for offKeyoard
// export function checkKeyboard(onKeyboard, offKeyboard) {
//   updateWindowSize()
//   window.topBarHeight = screen.height - window.innerHeight
//   window.addEventListener("resize", resizeThrottler, false)

//   var resizeTimeout
//   function resizeThrottler() {
//     // ignore resize events as long as an actualResizeHandler execution is in the queue
//     if (!resizeTimeout) {
//       resizeTimeout = setTimeout(function () {
//         resizeTimeout = null
//         let keyboardHeight = actualResizeHandler()
//         if (keyboardHeight > 0) {
//           onKeyboard(keyboardHeight) // calling a onKeyboard callback function when keyboard is on
//         } else if (keyboardHeight == -1) {
//           offKeyboard(keyboardHeight) //caling a offKeboard callback function when keyboard is off
//         }
//         // The actualResizeHandler will execute at a rate of 15fps 1000/66 = 15 means 15 calls per sec
//       }, 66)
//     }
//   }
// }
// ////end the keyboard detection
