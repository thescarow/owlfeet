let svg_mainNavCallIcon = `<svg width="100" height="100" viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M98.2028 86.6366C95.1161 96.0163 83.0226 100.696 74.3826 99.9162C62.5825 98.8495 49.7424 92.5898 39.9956 85.6967C25.6688 75.5637 12.2487 59.8909 4.42868 43.2582C-1.09803 31.5053 -2.33804 17.0524 5.88202 6.33949C8.92205 2.37963 12.2154 0.266376 17.1488 0.0197179C24.0022 -0.313604 24.9622 3.60626 27.3155 9.71271C29.0689 14.2792 31.4089 18.939 32.7156 23.6722C35.1623 32.5052 26.6089 32.8719 25.5288 40.0916C24.8622 44.6448 30.3755 50.7512 32.8689 53.9978C37.6748 60.3207 43.5611 65.744 50.2557 70.0172C54.0557 72.4105 60.1758 76.7237 64.5225 74.3437C71.2159 70.6772 70.5892 59.3909 79.9426 63.2108C84.7893 65.1841 89.4827 68.0306 94.1094 70.5239C101.263 74.3704 100.929 78.3569 98.2028 86.6366C100.243 80.4502 96.1627 92.8231 98.2028 86.6366Z" />
</svg>`
let svg_mainNavHomeIcon = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.967 93.9104V78.5761C34.9669 74.6903 38.293 71.5334 42.4128 71.509H57.5401C61.6783 71.509 65.033 74.673 65.033 78.5761V93.866C65.0329 97.2362 67.9159 99.9753 71.4892 99.9998H81.8096C86.6297 100.011 91.2566 98.2138 94.6693 95.0034C98.082 91.7929 100 87.4336 100 82.8875V39.3292C100 35.6569 98.274 32.1735 95.2875 29.8175L60.2262 3.37134C54.0974 -1.25439 45.3441 -1.10496 39.3968 3.72691L5.08954 29.8175C1.96179 32.1041 0.0923805 35.5978 0 39.3292V82.843C0 92.3184 8.14411 99.9998 18.1904 99.9998H28.2752C29.9956 100.012 31.6499 99.3752 32.8709 98.232C34.0919 97.0887 34.7786 95.5331 34.7785 93.9104H34.967Z" />
</svg>
`

const callMainContainer = document.getElementById("callMainContainer")
const afterCallSection = document.getElementById("afterCallSection")
const onCallSection = document.getElementById("onCallSection")

let callRoom

export async function createAfterCallSection(
  callRoomData,
  isCallEnded = false
) {
  callRoom = callRoomData
  onCallSection.classList.add("on-call-section--hide")

  afterCallSection.innerHTML = `
     <div class="after-call-message" >
          You left the call
     </div>

    <div class="after-call-row after-call-row--btn-container">

         <div class="after-call-btn after-call-btn--rejoin"  id="afterCallRejoinBtn">
             Rejoin
         </div>

        <div class="after-call-btn after-call-btn--new-call" id="afterCallNewCallBtn">
      ${svg_mainNavCallIcon} Create new call
       </div>

    </div>

    <div class="after-call-btn after-call-btn--back-home" id="afterCallBackToHomeBtn">
            ${svg_mainNavHomeIcon} Back to home
    </div>

    `

  if (callRoom.isChatRoom === true) {
    if (isCallEnded) {
      afterCallSection.getElementsByClassName(
        "after-call-message"
      )[0].textContent = "Call ended"
      document
        .getElementById("afterCallRejoinBtn")
        .classList.add("after-call-btn--hide")
    } else {
      afterCallSection.getElementsByClassName(
        "after-call-message"
      )[0].textContent = "You left the call"
    }
  } else {
    afterCallSection.getElementsByClassName(
      "after-call-message"
    )[0].textContent = "You left the call"
  }

  afterCallSection.classList.remove("after-call-section--hide")

  let { default: Feedback } = await import("@betahuhn/feedback-js")

  const options = {
    id: "feedback", // id to identify the form on the backend
    endpoint: "/user-feedback", // enpoint of your backend to handle the submission
    emailField: true, // show email input field, default: false
    events: false, // Emit feedback-submit event instead of sending data to endpoint
    forceShowButton: false, // Show the default button even if you use `data-feedback-trigger`
    types: {
      // Feedback types
      general: {
        text: "General Feedback",
        icon: "🙂"
      },
      idea: {
        text: "I have an idea",
        icon: "💡"
      },
      bug: {
        text: "I found an issue",
        icon: "🐞"
      }
    },
    btnTitle: "Feedback", // title of button
    title: "Feedback", // text at the top
    inputPlaceholder: "Your feedback goes here!",
    emailPlaceholder: "Email address (optional)",
    submitText: "Submit", // text for submit button
    backText: "Back", // text for back button
    contactText: "", // text for other contact option
    contactLink: "/", // link for other contact option
    typeMessage: "What feedback do you have?", // message for selecting feedback type
    success: "Thanks! 👊", // message displayed on successfull submission
    failedTitle: "Oops, an error ocurred!", // title displayed on error
    failedMessage:
      "Please try again. If this keeps happening, try to send an email instead.", // default error message if backend doesn't return one
    position: "right", // position of button left/right
    primary: "rgb(236, 179, 101)", // primary color
    background: "rgb(22, 37, 39)", // background color
    color: "rgb(255, 255, 255)" // font color
  }

  const feedback = new Feedback(options)
  feedback.renderButton()

  initialiseEventForAfterCallSection()
}

function initialiseEventForAfterCallSection() {
  document.getElementById("afterCallRejoinBtn").addEventListener("click", e => {
    location.reload()
  })
  document
    .getElementById("afterCallNewCallBtn")
    .addEventListener("click", e => {
      location.replace("/call")
    })
  document
    .getElementById("afterCallBackToHomeBtn")
    .addEventListener("click", e => {
      location.replace("/")

      //   window.location.href = "https://example.com/new-page"
      //   location.reload()
    })
}
