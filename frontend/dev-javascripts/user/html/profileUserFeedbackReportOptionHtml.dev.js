import { createMainNotification } from "../../common/mainNotification.dev.js"
import "../css/profileUserFeedbackReportOption.dev.css"
export function setOwnerSettingContent(modalBox, modalBoxContent, profileUser) {
  modalBoxContent.innerHTML = `
  <div id="UserfeedbackReportBox">

  <span id="userFeedbackReportTitle">Feedback/Report</span>

   <select  id="userFeedbackReportType">
       <option value="feedback"> I want to share feedback.
       </option>
      <option value="report">I want to report a problem.</option>
  </select>

   <textarea id="userFeedbackReportValue" placeholder="Write your feedback..."></textarea>

      <div id="userFeedBackReportBtns" >
          <button id="cancleUserFeedbackReport" class="btn"> Cancle </button>
          <button id="userFeedbackReport" class="btn">Submit</button>
      </div>
  </div>
  `
  const cancleUserFeedbackReport = document.getElementById(
    "cancleUserFeedbackReport"
  )
  cancleUserFeedbackReport.addEventListener("click", () => {
    modalBox.style.display = "none"
  })

  const userFeedbackReportType = document.getElementById(
    "userFeedbackReportType"
  )

  const userFeedbackReportValue = document.getElementById(
    "userFeedbackReportValue"
  )

  userFeedbackReportType.addEventListener("change", () => {
    if (userFeedbackReportType.value == "feedback") {
      userFeedbackReportValue.setAttribute(
        "placeholder",
        "Write your feedback..."
      )
    } else if (userFeedbackReportType.value == "report") {
      userFeedbackReportValue.setAttribute(
        "placeholder",
        "Write your report..."
      )
    }
  })
  const userFeedbackReport = document.getElementById("userFeedbackReport")

  userFeedbackReport.addEventListener("click", () => {
    let userFeedbackReportData = {
      userFeedbackReportType: userFeedbackReportType.value,
      userFeedbackReportValue: userFeedbackReportValue.value
    }
    fetch("/user-auth/user-feedback-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userFeedbackReportData)
    })
      .then(res => {
        if (res.ok) return res.json()
        throw new Error("Server Error in Sending Your Feedback/Report")
      })
      .then(data => {
        if (data.isSuccess) {
          createMainNotification(
            `Your ${
              userFeedbackReportType.value == "feedback" ? "Feedback" : "Report"
            } Is Sent Successfully`,
            "success"
          )
          userFeedbackReportValue.value = ""
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        createMainNotification(
          `Server Error In Sending Your ${
            userFeedbackReportType.value == "feedback" ? "Feedback" : "Report"
          }, Please Try Again`,
          "error"
        )
      })
  })
}
