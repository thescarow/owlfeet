import { createMainNotification } from "../../common/mainNotification.dev.js"
import "../css/profileEditProfileOption.dev.css"
import Uppy from "@uppy/core"
import Dashboard from "@uppy/dashboard"
import Webcam from "@uppy/webcam"
import ImageEditor from "@uppy/image-editor"
import AwsS3Multipart from "@uppy/aws-s3-multipart"
import "@uppy/core/dist/style.css"
import "@uppy/dashboard/dist/style.css"
import "@uppy/webcam/dist/style.css"
import "@uppy/image-editor/dist/style.css"

let birthdayDay = new Date(profileUser.birthday).getDate()
if (birthdayDay < 10) {
  birthdayDay = "0" + birthdayDay
}

let birthday =
  new Date(profileUser.birthday).getFullYear() +
  "-" +
  (new Date(profileUser.birthday).getMonth() + 1) +
  "-" +
  birthdayDay

export function setOwnerSettingContent(modalBox, modalContentBox, profileUser) {
  modalContentBox.innerHTML = `
<div class="editProfile-form-container" id="editProfileFormContainer">
<header>Edit Profile</header>
<div class="editProfile-progress" id="editProfileProgress">
    <div class="editProfile-progress-info">
        <div class="step" id="editProfileProgressInfoStep">STEP: 1 OF 3</div>
        <div class="step-info" id="editProfileProgressInfoStepInfo">Your Profile</div>
    </div>
    <div class="editProfile-progress-bar">
        <div class="editProfile-progress-bar-highlighter" id="editProfileProgressBarhighlighter"></div>
    </div>
</div>

<!-- Form Begins -->
<div class="editProfile-form" id="editProfileForm">


    <div class="editProfile-form-page" id="editProfileFormPage1">
        <div class="profile-field">
            <div id="editProfileProfile">
                      <img src="${profileUser.profileUrl}" alt="${profileUser.firstName}'s profile image" >                     
            </div>
            <p id="editProfileProfileBtn">Click to change profile picture</p>
        </div>
        <div class="half-input-fields">
            <div class="input-field">
                <label for="editProfileFirstName">First Name<span class="required">*</span></label>
                <input type="text" id="editProfileFirstName" placeholder="First Name" autocomplete="off" style="text-transform:capitalize;" value="${profileUser.firstName}">
            </div>
            <div class="input-field">
                <label for="editProfileLastName">Last Name</label>
                <input type="text" id="editProfileLastName" placeholder="Last Name" autocomplete="off" style="text-transform:capitalize;" value="${profileUser.lastName}">
            </div>
        </div>



        <div class="input-field">
            <label for="editProfileEmail">Email</label>
            <input type="email" id="editProfileEmail" placeholder="abc@xyz.com" autocomplete="off"
                pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$" style="text-transform: lowercase;" value="${profileUser.email}">
        </div>
        <div class="btn-field">
            <button class="next" id="next1">
                                        
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12.01 12.01 0 0 0 12 0Zm4.641 12.768-6 5a1 1 0 1 1-1.282-1.536L14.437 12 9.359 7.768a1 1 0 1 1 1.282-1.536l6 5a1 1 0 0 1 0 1.536Z" data-name="19. Next"/></svg>
            </button>
        </div>

    </div>
 
    <div class="editProfile-form-page" id="editProfileFormPage2">
        <div class="input-field">
            <label for="editProfileUsername">Username<span class="required">*</span></label>
            <ul class="info">
                <li>Choose unique username</li>
                <li>Use alphabate or .(dot) or _(underspace) </li>
                <li class="not-use">Don't use special character(!@#$%^&*;'...) or space</li>
            </ul>

            <div class="editProfile-username-container">
                <input type="text" name="username" id="editProfileUsername" autocomplete="off" value="${profileUser.username}">
                <span class="editProfile-username-refresh" id="editProfileUsernameRefresh">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z" data-name="refresh"/></g></svg>
                </span>
            </div>



        </div>
      
        <div class="btn-field">

            <button class="prev" id="prev1">
                               
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,0A12,12,0,1,0,24,12,12.01,12.01,0,0,0,12,0Zm2.64,16.232a1,1,0,1,1-1.28,1.536l-6-5a1,1,0,0,1,0-1.536l6-5a1,1,0,1,1,1.28,1.536L9.562,12Z" data-name="16. Previous"/></svg>
            </button>
            <button class="next" id="next2">
                                         
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12.01 12.01 0 0 0 12 0Zm4.641 12.768-6 5a1 1 0 1 1-1.282-1.536L14.437 12 9.359 7.768a1 1 0 1 1 1.282-1.536l6 5a1 1 0 0 1 0 1.536Z" data-name="19. Next"/></svg>
            </button>
        </div>

    </div>
    <div class="editProfile-form-page" id="editProfileFormPage3">
        <div class="input-field">
            <label for="editProfileGenderMale">Gender</label>


            <div class="gender-btns">

                <div class="gender-btn">
                    <input type="radio" name="editProfileGender" value="male" checked="checked"
                        id="editProfileGenderMale">
                    <label class="editProfile-gender-label" for="editProfileGenderMale">Male
                    </label>
                </div>
                <div class="gender-btn">
                    <input type="radio" name="editProfileGender" value="female" id="editProfileGenderFemale">
                    <label class="editProfile-gender-label" for="editProfileGenderFemale">Female
                    </label>
                </div>
                <div class="gender-btn">
                    <input type="radio" name="editProfileGender" value="other" id="editProfileGenderOther">
                    <label class="editProfile-gender-label" for="editProfileGenderOther">Other
                    </label>
                </div>


            </div>
        </div>

        <div class="input-field">
            <label for="editProfileBirthday">BirthDay<span class="required">*</span></label>
            <input type="date" id="editProfileBirthday" name="birthday" autocomplete="off" value="${birthday}">
        </div>
        <div class="input-field">
            <label for="sigupState">Address<span class="required">*</span>
            </label>
            <select name="editProfileState" id="editProfileState">
                <option value="" selected disabled hidden>-- select state --
                </option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DH">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
            </select>
            <select name="editProfileCity" id="editProfileCity">
                <option value="" selected disabled hidden>-- select city -- </option>
            </select>

        </div>
      
        <div class="input-field">
            <label for="editProfileBio">Bio</label>
            <textarea name="bio" id="editProfileBio" cols="30" rows="10" autocomplete="off">${profileUser.bio}</textarea>
        </div>
        <div class="btn-field">

            <button class="prev" id="prev2"> 
                                         
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,0A12,12,0,1,0,24,12,12.01,12.01,0,0,0,12,0Zm2.64,16.232a1,1,0,1,1-1.28,1.536l-6-5a1,1,0,0,1,0-1.536l6-5a1,1,0,1,1,1.28,1.536L9.562,12Z" data-name="16. Previous"/></svg>
            </button>
            <button class="Submit" id="editProfileSubmit">Submit
            </button>
        </div>
    </div>


</div>


</div> `

  window.addEventListener("keydown", e => {
    if (e.key == "Tab") e.preventDefault()
  })
  const editProfileProfileBtn = document.getElementById("editProfileProfileBtn")
  const editProfileProfile = document.getElementById("editProfileProfile")
  ////////////////////////////////////////////////////////////////

  const uppy = new Uppy({
    id: "editProfile",
    autoProceed: false,
    allowMultipleUploadBatches: false,
    debug: false,
    onBeforeFileAdded: (currentFile, files) => {
      currentFile.name = profileUser.profile || ""
      return currentFile
    },
    restrictions: {
      maxFileSize: 1024 * 1024 * 10,
      maxNumberOfFiles: 1,
      allowedFileTypes: ["image/jpg", "image/jpeg", "image/png", "image/gif"]
    },
    meta: { mediaType: "user-profile-picture" },
    infoTimeout: 5000
  })
    .use(Dashboard, {
      trigger: "#editProfileProfileBtn",
      target: "body",
      inline: false,
      // plugins: ['Webcam'],
      thumbnailWidth: 300,
      proudlyDisplayPoweredByUppy: false,
      closeModalOnClickOutside: true,
      theme: "dark",
      locale: {
        strings: {
          dropPasteImportFiles: "Upload here or Drop file here 👇"
        }
      },
      note: "Upload your profile. >file-size: up to 10MB, >file-type: [jpeg  jpg  gif  png]"
    })
    .use(Webcam, {
      target: Dashboard,
      mirror: true,
      modes: ["picture"],
      showRecordingLength: true
    })
    .use(ImageEditor, {
      target: Dashboard,
      quality: 0.8
    })
    .use(AwsS3Multipart, {
      limit: 4,
      companionUrl: `${location.origin}/companion`
    })

  uppy.on("complete", result => {
    console.log(
      "Upload complete! We’ve uploaded these files:",
      result.successful
    )
    const image = document.createElement("img")
    image.src = result.successful[0].preview
    editProfileProfile.innerHTML = ""
    editProfileProfile.appendChild(image)
    profileUser.profile = result.successful[0].s3Multipart.key
  })
  /////////////////////////////////////////////////////

  const editProfileFormPage1 = document.getElementById("editProfileFormPage1")
  const editProfileFormPage2 = document.getElementById("editProfileFormPage2")
  const editProfileFormPage3 = document.getElementById("editProfileFormPage3")
  const editProfileForm = document.getElementById("editProfileForm")

  const editProfileProgressInfoStep = document.getElementById(
    "editProfileProgressInfoStep"
  )
  const editProfileProgressInfoStepInfo = document.getElementById(
    "editProfileProgressInfoStepInfo"
  )
  const editProfileProgressBarhighlighter = document.getElementById(
    "editProfileProgressBarhighlighter"
  )

  const next1 = document.getElementById("next1")
  const next2 = document.getElementById("next2")
  const prev1 = document.getElementById("prev1")
  const prev2 = document.getElementById("prev2")

  const editProfileSubmit = document.getElementById("editProfileSubmit")
  //////////////////////////////////
  //////////////////////////////////
  const editProfileFirstName = document.getElementById("editProfileFirstName")
  const editProfileLastName = document.getElementById("editProfileLastName")
  const editProfileEmail = document.getElementById("editProfileEmail")
  const editProfileUsername = document.getElementById("editProfileUsername")
  const editProfileGenderMale = document.getElementById("editProfileGenderMale")
  const editProfileGenderFemale = document.getElementById(
    "editProfileGenderFemale"
  )
  const editProfileGenderOther = document.getElementById(
    "editProfileGenderOther"
  )
  const editProfileBirthday = document.getElementById("editProfileBirthday")
  const editProfileCity = document.getElementById("editProfileCity")
  const editProfileState = document.getElementById("editProfileState")

  const editProfileBio = document.getElementById("editProfileBio")

  next1.addEventListener("click", () => {
    if (editProfileFirstName.value != "") {
      editProfileFormPage1.style.left = "-150%"
      editProfileFormPage2.style.left = "0%"
      editProfileForm.scrollTop = 0
      editProfileProgressBarhighlighter.style.width = "66%"
      editProfileProgressInfoStepInfo.textContent = "Username"
      editProfileProgressInfoStep.textContent = "STEP: 2 OF 3"
    } else {
      createMainNotification("Please Enter Firstname, It Should Not Be Empty")
      editProfileFirstName.focus()
    }
  })
  prev1.addEventListener("click", () => {
    editProfileFormPage1.style.left = "0%"
    editProfileFormPage2.style.left = "150%"
    editProfileForm.scrollTop = 0
    editProfileProgressBarhighlighter.style.width = "33%"
    editProfileProgressInfoStepInfo.textContent = "Your Profile"
    editProfileProgressInfoStep.textContent = "STEP: 1 OF 3"
  })
  next2.addEventListener("click", () => {
    if (editProfileUsername.value != "") {
      editProfileFormPage2.style.left = "-150%"
      editProfileFormPage3.style.left = "0%"
      editProfileForm.scrollTop = 0
      editProfileProgressBarhighlighter.style.width = "100%"
      editProfileProgressInfoStepInfo.textContent = "Bio"
      editProfileProgressInfoStep.textContent = "STEP: 3 OF 3"
    } else {
      createMainNotification(
        "Please Enter An Unique Username, It Should Not Be Empty"
      )
      editProfileUsername.focus()
    }
  })

  prev2.addEventListener("click", () => {
    editProfileFormPage2.style.left = "0%"
    editProfileFormPage3.style.left = "150%"
    editProfileForm.scrollTop = 0
    editProfileProgressBarhighlighter.style.width = "66%"
    editProfileProgressInfoStepInfo.textContent = "Username"
    editProfileProgressInfoStep.textContent = "STEP: 2 OF 3"
  })

  //////////////////////////////////////////////////////////////
  // username input
  editProfileUsername.addEventListener("change", () => {
    let checkUsername = editProfileUsername.value
    if (editProfileUsername.value != "") {
      fetch(
        "/user-auth/check-username?checkUsername=" +
          checkUsername +
          "&firstName" +
          editProfileFirstName.value
      )
        .then(res => {
          if (res.ok) {
            return res.json()
          } else throw new Error("server error in generating username")
        })
        .then(data => {
          console.log(data)
          if (data.isUnique) {
            if (data.isChange) {
              editProfileUsername.value = data.newUsername
              createMainNotification(
                "Your Username Is changed Because It Contains Special characters"
              )
              editProfileUsername.classList.add("valid")
            } else {
              editProfileUsername.value = data.newUsername
              editProfileUsername.classList.add("valid")
            }
          } else {
            editProfileUsername.value = data.newUsername
            createMainNotification(
              "Your username Is Already Registered, You can Use This Server Generated Username Or Try Diffrent",
              "error"
            )
          }
        })
        .catch(error => {
          createMainNotification(
            "Server Error, Please Type Username Again",
            "error"
          )
        })
    } else {
      editProfileUsername.classList.remove("valid")
    }
  })
  const editProfileUsernameRefresh = document.getElementById(
    "editProfileUsernameRefresh"
  )
  let degree = 0
  editProfileUsernameRefresh.addEventListener("click", () => {
    if (!editProfileUsernameRefresh.classList.contains("disable")) {
      degree += 360
      editProfileUsernameRefresh.style.rotate = `${degree}deg`
      let firstName = editProfileFirstName.value
      editProfileUsernameRefresh.classList.add("disable")

      fetch("/user-auth/generate-username?firstName=" + firstName)
        .then(res => {
          if (res.ok) {
            return res.json()
          } else throw new Error("server error in generating username")
        })
        .then(data => {
          editProfileUsername.value = data.newUsername
          editProfileUsername.classList.add("valid")
          editProfileUsernameRefresh.classList.remove("disable")
        })
        .catch(error => {
          createMainNotification(
            "Server Error In Generating Username, Please Try Again",
            "error"
          )
        })
    }
  })

  /////////////////////////////////////////////////////////////
  //editProfile address

  let selectLocation = function () {
    if (editProfileState.value != "") {
      editProfileCity.style.display = "block"
      fetch("/user-auth/generate-cities?stateCode=" + editProfileState.value)
        .then(res => {
          if (res.ok) return res.json()
          throw new Error("error in generating cities")
        })
        .then(data => {
          let options = `<option value="" selected disabled hidden>-- select city -- </option>`
          data.citiesName.forEach(city => {
            if (profileUser.location.city == city) {
              options += `<option value="${city}" selected>${city}</option>`
            } else {
              options += `<option value="${city}">${city}</option>`
            }
          })
          editProfileCity.innerHTML = options
          editProfileCity.style.display = "block"
        })
        .catch(err => {
          createMainNotification(
            "Server Error In Generating Cities,Please Selectt state Again",
            "error"
          )
        })
    }
  }

  editProfileState.value = profileUser.location.state
  selectLocation()
  editProfileState.addEventListener("change", selectLocation)

  ////////////////////////////////////////////////////////////
  // editProfile submit form

  editProfileSubmit.addEventListener("click", e => {
    if (editProfileBirthday != "") {
      if (editProfileState.value != "" && editProfileCity.value != "") {
        let editProfileGender
        if (editProfileGenderMale.checked)
          editProfileGender = editProfileGenderMale.value
        else if (editProfileGenderFemale.checked)
          editProfileGender = editProfileGenderFemale.value
        else editProfileGender = editProfileGenderMale.value

        let editProfileData = {
          firstName: editProfileFirstName.value,
          lastName: editProfileLastName.value,
          email: editProfileEmail.value,
          username: editProfileUsername.value,
          gender: editProfileGender,
          birthday: editProfileBirthday.value,
          country: "IN",
          state: editProfileState.value,
          city: editProfileCity.value,
          bio: editProfileBio.value,
          profile: profileUser.profile
        }
        fetch("/user-auth/edit-user-profile", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editProfileData)
        })
          .then(res => {
            if (res.ok) return res.json()
            throw new Error("Error in Editing Profile")
          })
          .then(data => {
            if (data.isSuccess) {
              createMainNotification(
                "Your Profile Is Edited Successfully",
                "success"
              )
              location.replace(`/user/${data.username}`)
            } else {
              createMainNotification(data.error, "error")
            }
          })
          .catch(err => {
            createMainNotification(
              "Server Error In Editing Profile,Please Try Again",
              "error"
            )
          })
      } else {
        if (editProfileState.value == "") {
          createMainNotification("Please Select Your State")
          editProfileState.focus()
        } else if (editProfileCity.value == "") {
          createMainNotification("Please Select Your City")
          editProfileCity.focus()
        }
      }
    } else {
      createMainNotification("Please Select Your Birthday")
      editProfileBirthday.focus()
    }
  })
}
