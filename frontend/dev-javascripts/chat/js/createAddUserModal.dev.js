let svg_addNew = `<svg width="102" height="102" viewBox="0 0 102 102"  xmlns="http://www.w3.org/2000/svg">
<path d="M51 1C41.111 1 31.444 3.93245 23.2215 9.42652C14.999 14.9206 8.59043 22.7295 4.80605 31.8658C1.02166 41.0021 0.0314976 51.0555 1.96076 60.7545C3.89002 70.4535 8.65206 79.3627 15.6447 86.3553C22.6373 93.3479 31.5465 98.11 41.2455 100.039C50.9445 101.969 60.9979 100.978 70.1342 97.194C79.2705 93.4096 87.0794 87.0009 92.5735 78.7785C98.0675 70.556 101 60.889 101 51C101 44.4339 99.7067 37.9321 97.194 31.8658C94.6812 25.7995 90.9983 20.2876 86.3553 15.6447C81.7124 11.0017 76.2005 7.31876 70.1342 4.80602C64.0679 2.29329 57.5661 1 51 1V1ZM51 91C43.0888 91 35.3552 88.654 28.7772 84.2588C22.1992 79.8635 17.0723 73.6164 14.0448 66.3073C11.0173 58.9983 10.2252 50.9556 11.7686 43.1964C13.312 35.4371 17.1216 28.3098 22.7157 22.7157C28.3098 17.1216 35.4372 13.312 43.1964 11.7686C50.9556 10.2252 58.9983 11.0173 66.3073 14.0448C73.6164 17.0723 79.8635 22.1992 84.2588 28.7772C88.654 35.3551 91 43.0887 91 51C91 61.6086 86.7857 71.7828 79.2843 79.2843C71.7828 86.7857 61.6087 91 51 91V91ZM71 46H56V31C56 29.6739 55.4732 28.4021 54.5355 27.4645C53.5979 26.5268 52.3261 26 51 26C49.6739 26 48.4022 26.5268 47.4645 27.4645C46.5268 28.4021 46 29.6739 46 31V46H31C29.6739 46 28.4022 46.5268 27.4645 47.4645C26.5268 48.4021 26 49.6739 26 51C26 52.3261 26.5268 53.5978 27.4645 54.5355C28.4022 55.4732 29.6739 56 31 56H46V71C46 72.3261 46.5268 73.5978 47.4645 74.5355C48.4022 75.4732 49.6739 76 51 76C52.3261 76 53.5979 75.4732 54.5355 74.5355C55.4732 73.5978 56 72.3261 56 71V56H71C72.3261 56 73.5979 55.4732 74.5355 54.5355C75.4732 53.5978 76 52.3261 76 51C76 49.6739 75.4732 48.4021 74.5355 47.4645C73.5979 46.5268 72.3261 46 71 46Z"  />
</svg>`
let svg_searchBtn = `<svg width="102" height="102" viewBox="0 0 102 102" xmlns="http://www.w3.org/2000/svg">
<path d="M48.9056 89.3888C75.3631 89.3888 96.8111 69.6023 96.8111 45.1944C96.8111 20.7865 75.3631 1 48.9056 1C22.4481 1 1 20.7865 1 45.1944C1 69.6023 22.4481 89.3888 48.9056 89.3888Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82.2194 83.7185L101 101"   stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
let svg_defaultUserImageIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="Layer 2"><circle cx="16" cy="6.96" r="6"/><path d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"/></g></svg>
`
import "../css/addUserModal.dev.css"
let allAddedUser = []
// we store value of alreadyAddedUser array to allAddedUser array so that we can not destroy the alreadyAddedUser array refrence so when we click cancel it will not change anything
export async function createAddUserModal(
  alreadyAddedUser,
  updateUsersCallback
) {
  allAddedUser = [...alreadyAddedUser]

  const chatMainContainer = document.getElementById("chatMainContainer")
  let addUserModal = document.getElementById("addUserModal")
  if (!addUserModal) {
    addUserModal = document.createElement("div")
    addUserModal.classList.add("chat-modal")
    addUserModal.setAttribute("id", "addUserModal")

    let addUserModalHtml = ` <div class="chat-modal-content chat-modal-content--added-user">

    <div class="added-user-container">
        <div class="chat-modal-content-row chat-modal-content-row--added-user-container">
            <div class="added-user-container__title">Added User:</div>
            <div class="added-user-user-count">0/10</div>
        </div>
    </div>

    <div class="add-user-search-box">
        <input class="add-user-search-box__input" type="text" placeholder="Search user ">
        <div class="add-user-search-box__btn">
        ${svg_searchBtn}
        </div>
    </div>


    <div class="add-user-searched-user-container">
        <div class="add-user-searched-user-container__title">Select User:</div> 
        <div class="add-user-searched-user-container__user">
      </div>

    </div>


    <div class="add-user-btn-container">
        <div class="add-user__btn" id="closeAddUserModalBtn">Cancle</div>
        <div class="add-user__btn add-user__btn--active" id="getAddedUserBtn">Add</div>
    </div>
    </div>`

    addUserModal.insertAdjacentHTML("beforeend", addUserModalHtml)
    chatMainContainer.insertAdjacentElement("beforeend", addUserModal)

    // initialise add user modal
    updateAddedUserContainer(addUserModal, allAddedUser)
    fetchSearchedUserInAddUserModal(addUserModal, "", 10)
    // initialise Event to group chat form Modal

    let addUserSearchBoxInput = addUserModal.getElementsByClassName(
      "add-user-search-box__input"
    )[0]

    let searchedUserContainer = addUserModal.getElementsByClassName(
      "add-user-searched-user-container__user"
    )[0]
    addUserSearchBoxInput.addEventListener("input", function () {
      clearTimeout(this.delay)
      this.delay = setTimeout(
        function () {
          let userInput = addUserSearchBoxInput.value.trim()
          if (userInput !== "") {
            fetchSearchedUserInAddUserModal(addUserModal, userInput, 3)
          } else {
            searchedUserContainer.innerHTML = ""
          }
        }.bind(this),
        1000
      )
    })
    // event for get added user btn
    document
      .getElementById("getAddedUserBtn")
      .addEventListener("click", async () => {
        // update the users of calling function
        updateUsersCallback(allAddedUser)
        addUserModal.classList.add("chat-modal--hide")
      })

    //close added user modal event
    document
      .getElementById("closeAddUserModalBtn")
      .addEventListener("click", () => {
        addUserModal.classList.add("chat-modal--hide")
      })
    window.addEventListener("click", event => {
      if (event.target === addUserModal) {
        addUserModal.classList.add("chat-modal--hide")
      }
    })
  } else {
    // initialise add user modal
    updateAddedUserContainer(addUserModal, allAddedUser)
    fetchSearchedUserInAddUserModal(addUserModal, "", 10)
    addUserModal.classList.remove("chat-modal--hide")
  }
}

async function fetchSearchedUserInAddUserModal(
  addUserModal,
  userInput,
  userCount
) {
  fetch(
    `/user/fetch-following-users?userInput=${userInput}&userCount=${userCount}`
  )
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(async data => {
      if (data.isSuccess) {
        updateSearchedUserContainer(addUserModal, data.users)
      } else {
        let { createMainNotification } = await import(
          "../../common/mainNotification.dev"
        )
        createMainNotification(data.error, "error")
      }
    })
    .catch(async err => {
      console.log(err)
      let { createMainNotification } = await import(
        "../../common/mainNotification.dev"
      )
      createMainNotification(
        "Server Error,Please Check Your Search Input",
        "error"
      )
    })
}

function updateSearchedUserContainer(addUserModal, users) {
  let addedUserContainer = addUserModal.getElementsByClassName(
    "added-user-container"
  )[0]
  let searchedUserContainer = addUserModal.getElementsByClassName(
    "add-user-searched-user-container__user"
  )[0]

  searchedUserContainer.innerHTML = ""

  users.forEach(user => {
    createSearchedUser(searchedUserContainer, addedUserContainer, user)
  })
}

function createSearchedUser(searchedUserContainer, addedUserContainer, user) {
  if (!allAddedUser.find(addedUser => addedUser._id === user._id)) {
    let addUserSearchedUser = document.createElement("div")
    addUserSearchedUser.classList.add("add-user-searched-user")
    addUserSearchedUser.dataset.userId = user._id
    let addUserSearchedUserHtml = `
     
                  <div class='add-user-searched-user__pic  ${
                    user.hasOwnProperty("profile") && user.profile !== ""
                      ? "add-user-searched-user__pic--img"
                      : "add-user-searched-user__pic--svg"
                  }'>
                      <img src="${user.profile}"
                          alt="">
                          ${svg_defaultUserImageIcon}
                  </div>
                  <div class="chat-modal-content--column chat-modal-content-column--user-data">
                      <div class="add-user-searched-user__fullname"></div>
                      <div class="add-user-searched-user__username"></div>
                  </div>
                  <div class="add-user-searched-user__btn">
                      ${svg_addNew}
                  </div>`

    addUserSearchedUser.insertAdjacentHTML("beforeend", addUserSearchedUserHtml)

    addUserSearchedUser.getElementsByClassName(
      "add-user-searched-user__fullname"
    )[0].textContent = user.firstName + " " + user.lastName

    addUserSearchedUser.getElementsByClassName(
      "add-user-searched-user__username"
    )[0].textContent = "@" + user.username

    searchedUserContainer.insertAdjacentElement(
      "afterbegin",
      addUserSearchedUser
    )

    addUserSearchedUser
      .getElementsByClassName("add-user-searched-user__btn")[0]
      .addEventListener("click", () => {
        addUserSearchedUser.parentNode.removeChild(addUserSearchedUser)

        allAddedUser.push(user)

        createAddedUser(addedUserContainer, searchedUserContainer, user)
      })
  }
}

function updateAddedUserContainer(addUserModal, users) {
  let addedUserContainer = addUserModal.getElementsByClassName(
    "added-user-container"
  )[0]
  let searchedUserContainer = addUserModal.getElementsByClassName(
    "add-user-searched-user-container__user"
  )[0]
  addedUserContainer.innerHTML = ""
  users.forEach(user => {
    createAddedUser(addedUserContainer, searchedUserContainer, user)
  })
}

function createAddedUser(addedUserContainer, searchedUserContainer, user) {
  let addedUser = document.createElement("div")
  addedUser.classList.add("added-user")
  addedUser.dataset.userId = user._id
  let addedUserHtml = `<div class='added-user__pic ${
    user.hasOwnProperty("profile") && user.profile !== ""
      ? "added-user__pic--img"
      : "added-user__pic--svg"
  }'>
  <img src="${user.profile}"
      alt="user image"> 
      ${svg_defaultUserImageIcon}
</div>
<div class="added-user__username"></div>
<span class="added-user__remove">X</span>`
  addedUser.insertAdjacentHTML("beforeend", addedUserHtml)
  addedUser.getElementsByClassName("added-user__username")[0].textContent =
    "@" + user.username

  addedUser
    .getElementsByClassName("added-user__remove")[0]
    .addEventListener("click", () => {
      allAddedUser = allAddedUser.filter(user => {
        if (addedUser.dataset.userId !== user._id) {
          return true
        }
      })

      addedUser.parentElement.removeChild(addedUser)

      createSearchedUser(searchedUserContainer, addedUserContainer, user)
    })
  addedUserContainer.insertAdjacentElement("beforeend", addedUser)
}
