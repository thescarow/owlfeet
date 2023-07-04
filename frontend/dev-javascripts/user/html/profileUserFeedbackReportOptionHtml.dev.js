import { createMainNotification } from "../../common/mainNotification.dev.js"
import "../css/profileUserFeedbackReportOption.dev.css"
export function setFeedbackContent(modalBox, modalContentBox) {
  modalContentBox.innerHTML = ""
  let userFeedback = document.createElement("div")
  userFeedback.classList.add("user-feedback")
  userFeedback.setAttribute("id", "userFeedback")

  userFeedback.innerHTML = `

       <div class="user-feedback__title">
          User Feedback or Report
       </div>
  
      <select class="user-feedback__type" id="userFeedbackType">

        <option value="feedback"> I want to share feedback.    </option>
        <option value="report">I want to report a problem.    </option>

      </select>

    <textarea class="user-feedback__textarea" id="userFeedbackInput" placeholder="Write your feedback..."></textarea>


    <div class="user-feedback__btn-container" >
   
         <div class="user-feedback__btn" id="submitUserFeedbackBtn">Submit</div>

    </div> 
`
  modalContentBox.insertAdjacentElement("beforeend", userFeedback)
  attachScript(modalBox)
}

function attachScript(modalBox) {
  const userFeedbackType = document.getElementById("userFeedbackType")

  const userFeedbackInput = document.getElementById("userFeedbackInput")

  userFeedbackType.addEventListener("change", () => {
    if (userFeedbackType.value == "feedback") {
      userFeedbackInput.setAttribute("placeholder", "Write your feedback...")
    } else if (userFeedbackType.value == "report") {
      userFeedbackInput.setAttribute("placeholder", "Write your report...")
    }
  })
  const submitUserFeedbackBtn = document.getElementById("submitUserFeedbackBtn")

  submitUserFeedbackBtn.addEventListener("click", () => {
    if (userFeedbackInput.value.trim() !== "") {
      let data = {
        userFeedbackReportType: userFeedbackType.value,
        userFeedbackReportValue: userFeedbackInput.value
      }
      fetch("/user-auth/user-feedback-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.ok) return res.json()
          throw new Error("Server error in sending your Feedback/Report")
        })
        .then(data => {
          if (data.isSuccess) {
            createMainNotification(
              `Your ${
                userFeedbackType.value === "feedback" ? "Feedback" : "Report"
              } is sent successfully`,
              "success"
            )
            userFeedbackInput.value = ""
            setTimeout(() => {
              if (!modalBox.classList.contains("hide"))
                modalBox.classList.add("hide")
            }, 2000)
          } else {
            createMainNotification(data.error, "error")
          }
        })
        .catch(err => {
          createMainNotification(
            `Server error in sending your ${
              userFeedbackType.value == "feedback" ? "Feedback" : "Report"
            }, Please try again`,
            "error"
          )
        })
    } else {
      createMainNotification(
        `Please write something in your ${
          userFeedbackType.value == "feedback" ? "Feedback" : "Report"
        }, Don't leave it empty`,
        "error"
      )
    }
  })
}
