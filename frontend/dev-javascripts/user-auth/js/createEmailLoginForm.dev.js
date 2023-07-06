let svg_secureLoginLinkIcon = `
<svg width="86" height="100" viewBox="0 0 86 100"  xmlns="http://www.w3.org/2000/svg">
<path d="M50.1667 32.0822C50.1667 28.1501 46.9417 24.933 43 24.933C39.0583 24.933 35.8333 28.1501 35.8333 32.0822V39.2315H50.1667V32.0822Z" />
<path d="M0 17.7837V46.3807C0 76.05 15.7667 84.9866 37.2667 97.1403L41.2083 99.2851C41.925 100 42.2833 100 43 100C43.7167 100 44.075 100 44.7917 99.6425L48.7333 97.4978C70.2333 84.9866 86 76.05 86 46.3807V17.7837C86 16.3539 84.925 14.924 83.4917 14.5666L44.075 0.268097C43.3583 -0.0893655 42.2833 -0.0893655 41.5667 0.268097L2.15 14.5666C1.075 14.924 0 16.3539 0 17.7837ZM21.5 49.9553C21.5 45.3083 24.3667 41.3762 28.6667 39.9464V32.0822C28.6667 24.2181 35.1167 17.7837 43 17.7837C50.8833 17.7837 57.3333 24.2181 57.3333 32.0822V39.9464C61.6333 41.3762 64.5 45.3083 64.5 49.9553V60.6792C64.5 72.4754 54.825 82.1269 43 82.1269C31.175 82.1269 21.5 72.4754 21.5 60.6792V49.9553Z" />
<path d="M43 49.9553C40.85 49.9553 39.4167 51.3852 39.4167 53.5299V60.6792C39.4167 62.824 40.85 64.2538 43 64.2538C45.15 64.2538 46.5833 62.824 46.5833 60.6792V53.5299C46.5833 51.3852 45.15 49.9553 43 49.9553Z" />
</svg>
`

import "../css/emailLoginForm.dev.css"

const mainAccountContainer = document.getElementById("mainAccountContainer")

const accountBox = document.getElementById("accountBox")

export function createEmailLoginForm() {
  let emailLoginContainer = document.getElementById("emailLoginContainer")
  if (!emailLoginContainer) {
    emailLoginContainer = document.createElement("div")
    emailLoginContainer.classList.add("email-login")
    emailLoginContainer.setAttribute("id", "emailLoginContainer")

    emailLoginContainer.innerHTML = ` 
     <div class="email-login__title">Email Login</div>
    <div class="email-login__desc">Login without password</div>
    <!-- Form Begins -->
    <div class="email-login-form" id="emailLoginForm">
        <div class="email-login__note email-login__note--pre">
            Enter your registerd email address and click on login button. We will send a secure link to
            your
            registered email
            address. You can use this link to login your account securely.
        </div>
        <div class="email-input-field">
            <label class="email-input-field__label" for="emailLoginInput">Registerd Email<span>*</span></label>
            <input class="email-input-field__input" type="email" id="emailLoginInput" placeholder="Email"
                autocomplete="off">
        </div>

        <div class="email-login__note email-login__note--hide email-login__note--post" id='emailLoginPostNote'>
            We've sent a secure link to your registered email address, go and check your inbox. You can
            use this link to access your account only once. If you don't use this link within 15 min, link will
            expire automatically.
        </div>


        <div class="email-input-btn-field">
            <div class="email-input-btn email-input-btn--send-email" id="emailLoginActionBtn">
                ${svg_secureLoginLinkIcon} Send Secure Login Link
            </div>
        </div>

    </div>
    `
    accountBox.classList.add("account-box--hide")
    mainAccountContainer.insertAdjacentElement("beforeend", emailLoginContainer)
  } else {
    if (emailLoginContainer.classList.contains("email-login--hide"))
      emailLoginContainer.classList.remove("email-login--hide")

    if (!accountBox.classList.contains("account-box--hide"))
      accountBox.classList.add("account-box--hide")
  }
}
