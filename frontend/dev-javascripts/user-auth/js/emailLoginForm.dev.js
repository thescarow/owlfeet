import emailValidator from "email-validator"
import { createMainNotification } from "../../common/mainNotification.dev.js"
const emailLoginInput = document.getElementById("emailLoginInput")
const emailLoginPostNote = document.getElementById("emailLoginPostNote")
const emailLoginActionBtn = document.getElementById("emailLoginActionBtn")

emailLoginInput.addEventListener("input", () => {
  if (!emailLoginPostNote.classList.contains("email-login__note--hide"))
    emailLoginPostNote.classList.add("email-login__note--hide")
})
emailLoginActionBtn.addEventListener("click", () => {
  let email = emailLoginInput.value.trim()
  if (email !== "") {
    if (emailValidator.validate(email)) {
      fetch("/user-auth/send-email-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
      })
        .then(res => {
          if (res.ok) return res.json()
          throw new Error("Server error in sending secure login link.")
        })
        .then(data => {
          if (data.isSuccess) {
            createMainNotification(
              "Secure link is sent to your Email Box.",
              "success"
            )
            if (
              emailLoginPostNote.classList.contains("email-login__note--hide")
            )
              emailLoginPostNote.classList.remove("email-login__note--hide")
          } else {
            createMainNotification(data.error, "error")
          }
        })
        .catch(err => {
          createMainNotification(
            "Server error in sending secure login link,Please try again",
            "error"
          )
        })
    } else {
      createMainNotification(
        "This Email Address is not valid, Please check it and try again",
        "error"
      )
    }
  } else {
    createMainNotification("Email should not be empty", "error")
  }
})
