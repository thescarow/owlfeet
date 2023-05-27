import "./css/mainNotification.dev.css"

let svg_mainNotificationErrorIcon = `
<svg width="100" height="90" viewBox="0 0 100 90"  xmlns="http://www.w3.org/2000/svg">
<path d="M6.28356 90H93.7078C94.7941 90.0009 95.8622 89.7331 96.8078 89.2228C97.7534 88.7124 98.5443 87.9769 99.1034 87.088C99.6625 86.1991 99.9708 85.187 99.998 84.1506C100.025 83.1141 99.7707 82.0886 99.259 81.174L55.6412 3.174C55.1061 2.21551 54.3081 1.41386 53.3325 0.854789C52.357 0.295717 51.2405 0.000253689 50.1025 0H50.0962C47.7764 0 45.6515 1.218 44.5576 3.168L0.744896 81.168C0.232394 82.0823 -0.0236231 83.1075 0.00171349 84.1442C0.02705 85.1808 0.332879 86.1935 0.889492 87.084C1.4491 87.9725 2.2398 88.7078 3.18489 89.2187C4.12998 89.7296 5.19739 89.9988 6.28356 90ZM50.0962 66C50.922 66.0002 51.7397 66.1556 52.5026 66.4574C53.2654 66.7592 53.9586 67.2014 54.5423 67.7589C55.1261 68.3163 55.5891 68.978 55.905 69.7062C56.2208 70.4344 56.3832 71.2149 56.383 72.003C56.3828 72.7911 56.22 73.5715 55.9038 74.2996C55.5876 75.0276 55.1242 75.6891 54.5401 76.2463C53.956 76.8034 53.2627 77.2453 52.4997 77.5467C51.7367 77.8482 50.9189 78.0032 50.0931 78.003C48.4253 78.0026 46.826 77.3699 45.647 76.2441C44.468 75.1184 43.8059 73.5917 43.8063 72C43.8067 70.4083 44.4696 68.882 45.6492 67.7567C46.8288 66.6315 48.4285 65.9996 50.0962 66ZM43.8094 54.096V30.096C43.8094 28.5047 44.4718 26.9786 45.6508 25.8534C46.8298 24.7281 48.4289 24.096 50.0962 24.096C51.7636 24.096 53.3627 24.7281 54.5417 25.8534C55.7207 26.9786 56.383 28.5047 56.383 30.096V54.096C56.383 55.6873 55.7207 57.2134 54.5417 58.3386C53.3627 59.4639 51.7636 60.096 50.0962 60.096C48.4289 60.096 46.8298 59.4639 45.6508 58.3386C44.4718 57.2134 43.8094 55.6873 43.8094 54.096Z" />
</svg>
`
let svg_mainNotificationInfoIcon = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0C22.3875 0 0 22.3875 0 50C0 77.6125 22.3875 100 50 100C77.6125 100 100 77.6125 100 50C100 22.3875 77.6125 0 50 0ZM43.75 43.75C43.75 42.0924 44.4085 40.5027 45.5806 39.3306C46.7527 38.1585 48.3424 37.5 50 37.5C51.6576 37.5 53.2473 38.1585 54.4194 39.3306C55.5915 40.5027 56.25 42.0924 56.25 43.75V75C56.25 76.6576 55.5915 78.2473 54.4194 79.4194C53.2473 80.5915 51.6576 81.25 50 81.25C48.3424 81.25 46.7527 80.5915 45.5806 79.4194C44.4085 78.2473 43.75 76.6576 43.75 75V43.75ZM50 31.35C49.179 31.3498 48.3661 31.1879 47.6077 30.8735C46.8494 30.5592 46.1603 30.0985 45.5799 29.5179C44.9996 28.9372 44.5393 28.2479 44.2253 27.4894C43.9113 26.7308 43.7498 25.9178 43.75 25.0969C43.7502 24.2759 43.9121 23.463 44.2265 22.7046C44.5408 21.9462 45.0015 21.2572 45.5821 20.6768C46.1628 20.0964 46.8521 19.6361 47.6106 19.3221C48.3692 19.0082 49.1822 18.8467 50.0031 18.8469C51.6611 18.8473 53.2511 19.5063 54.4232 20.679C55.5953 21.8517 56.2535 23.442 56.2531 25.1C56.2527 26.758 55.5937 28.348 54.421 29.5201C53.2483 30.6922 51.658 31.3504 50 31.35Z" />
</svg>

`
let svg_mainNotificationSuccessIcon = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0C40.1109 0 30.444 2.93245 22.2215 8.42652C13.9991 13.9206 7.59043 21.7295 3.80604 30.8658C0.0216643 40.0021 -0.968502 50.0555 0.960758 59.7545C2.89002 69.4536 7.65206 78.3627 14.6447 85.3553C21.6373 92.3479 30.5465 97.11 40.2455 99.0392C49.9445 100.969 59.9979 99.9783 69.1342 96.194C78.2705 92.4096 86.0794 86.001 91.5735 77.7785C97.0675 69.556 100 59.8891 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0ZM73.5833 39.9583L50 63.5C47.6563 65.8408 44.4792 67.1557 41.1667 67.1557C37.8542 67.1557 34.6771 65.8408 32.3333 63.5L26.4167 57.625C26.0282 57.2365 25.72 56.7753 25.5098 56.2677C25.2995 55.7601 25.1913 55.2161 25.1913 54.6667C25.1913 54.1172 25.2995 53.5732 25.5098 53.0656C25.72 52.558 26.0282 52.0968 26.4167 51.7083C26.8052 51.3198 27.2664 51.0117 27.774 50.8014C28.2816 50.5912 28.8256 50.4829 29.375 50.4829C29.9244 50.4829 30.4685 50.5912 30.9761 50.8014C31.4836 51.0117 31.9449 51.3198 32.3333 51.7083L38.2083 57.625C38.5957 58.0155 39.0565 58.3255 39.5643 58.537C40.072 58.7486 40.6166 58.8575 41.1667 58.8575C41.7167 58.8575 42.2613 58.7486 42.7691 58.537C43.2768 58.3255 43.7377 58.0155 44.125 57.625L67.6667 34.0417C68.0552 33.6532 68.5164 33.345 69.024 33.1347C69.5316 32.9245 70.0756 32.8163 70.625 32.8163C71.1744 32.8163 71.7185 32.9245 72.226 33.1347C72.7336 33.345 73.1948 33.6532 73.5833 34.0417C73.9718 34.4302 74.28 34.8914 74.4902 35.399C74.7005 35.9065 74.8087 36.4506 74.8087 37C74.8087 37.5494 74.7005 38.0934 74.4902 38.601C74.28 39.1086 73.9718 39.5698 73.5833 39.9583Z" />
</svg>

`
let svg_mainNotificationTimerAndCloseIcon = `
<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g class="timerAndClose">
<path class="timerPath" d="M35 10C39.5356 10 43.7185 11.1176 47.5488 13.3529C51.3791 15.5881 54.4119 18.6209 56.6471 22.4512C58.8824 26.2815 60 30.4644 60 35C60 39.5356 58.8824 43.7185 56.6471 47.5488C54.4119 51.3791 51.3791 54.4119 47.5488 56.6471C43.7185 58.8824 39.5356 60 35 60C30.4644 60 26.2815 58.8824 22.4512 56.6471C18.6209 54.4119 15.5881 51.3791 13.3529 47.5488C11.1176 43.7185 10 39.5356 10 35C10 30.4644 11.1176 26.2815 13.3529 22.4512C15.5881 18.6209 18.6209 15.5881 22.4512 13.3529C26.2815 11.1176 30.4644 10 35 10Z" />
<path class="closePath" d="M35 10C21.25 10 10 21.25 10 35C10 48.75 21.25 60 35 60C48.75 60 60 48.75 60 35C60 21.25 48.75 10 35 10ZM44.25 40.75C45.25 41.75 45.25 43.25 44.25 44.25C43.25 45.25 41.75 45.25 40.75 44.25L35 38.5L29.25 44.25C28.25 45.25 26.75 45.25 25.75 44.25C24.75 43.25 24.75 41.75 25.75 40.75L31.5 35L25.75 29.25C24.75 28.25 24.75 26.75 25.75 25.75C26.75 24.75 28.25 24.75 29.25 25.75L35 31.5L40.75 25.75C41.75 24.75 43.25 24.75 44.25 25.75C45.25 26.75 45.25 28.25 44.25 29.25L38.5 35L44.25 40.75Z" />
</g>
</svg>

`

export function createMainNotification(message, type = "info") {
  if (type != "error" && type != "success") {
    type = "info"
  }
  const mainNotification = document.createElement("div")
  mainNotification.classList.add("main-notification", type)

  mainNotification.innerHTML = `
     <div class="main-notification__header">  
           <div class="main-notification__icon"></div>
           <div class="main-notification__title"></div>
     </div>

     <div class="main-notification__content">    
     </div>

     <div class="main-notification__timer-and-close-icon">
            ${svg_mainNotificationTimerAndCloseIcon}
     </div> `

  mainNotification.getElementsByClassName(
    "main-notification__content"
  )[0].textContent = message

  let mainNotificationIcon = mainNotification.getElementsByClassName(
    "main-notification__icon"
  )[0]
  let mainNotificationTitle = mainNotification.getElementsByClassName(
    "main-notification__title"
  )[0]

  if (type === "error") {
    mainNotification.classList.add("main-notification--error")
    mainNotificationIcon.innerHTML = `${svg_mainNotificationErrorIcon}`
    mainNotificationTitle.textContent = "Error"
  } else if (type === "info") {
    mainNotification.classList.add("main-notification--info")
    mainNotificationIcon.innerHTML = `${svg_mainNotificationInfoIcon}`
    mainNotificationTitle.textContent = "Info"
  } else if (type === "success") {
    mainNotification.classList.add("main-notification--success")
    mainNotificationIcon.innerHTML = `${svg_mainNotificationSuccessIcon}`
    mainNotificationTitle.textContent = "Success"
  }

  let mainNotificationCloseTimeout
  // delete after click on close button
  mainNotification
    .getElementsByClassName("main-notification__timer-and-close-icon")[0]
    .addEventListener("click", () => {
      mainNotification.remove()
      clearTimeout(mainNotificationCloseTimeout)
    })

  // // delete after 10s automatically
  // mainNotificationCloseTimeout = setTimeout(() => {
  //   mainNotification.remove()
  // }, 10000)

  document.body.insertAdjacentElement("afterbegin", mainNotification)
}
