import "../css/signupCss.dev.css"

const mainAccountContainer = document.getElementById("mainAccountContainer")
mainAccountContainer.innerHTML = `
<div class="signup-form-container" id="signupFormContainer">
<header>Registration Form</header>
<div class="signup-progress" id="signupProgress">
    <div class="signup-progress-info">
        <div class="step" id="signupProgressInfoStep">STEP: 1 OF 4</div>
        <div class="step-info" id="signupProgressInfoStepInfo">Your Profile</div>
    </div>
    <div class="signup-progress-bar">
        <div class="signup-progress-bar-highlighter" id="signupProgressBarhighlighter"></div>
    </div>
</div>

<!-- Form Begins -->
<div class="signup-form" id="signupForm">


    <div class="signup-form-page" id="signupFormPage1">
        <div class="profile-field">
            <div id="signupProfile">
                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.84846399,13.5498221 C7.28813318,13.433801 8.73442297,13.433801 10.1740922,13.5498221 C10.9580697,13.5955225 11.7383286,13.6935941 12.5099314,13.8434164 C14.1796238,14.1814947 15.2696821,14.7330961 15.73685,15.6227758 C16.0877167,16.317132 16.0877167,17.1437221 15.73685,17.8380783 C15.2696821,18.727758 14.2228801,19.3149466 12.4926289,19.6174377 C11.7216312,19.7729078 10.9411975,19.873974 10.1567896,19.9199288 C9.43008411,20 8.70337858,20 7.96802179,20 L6.64437958,20 C6.36753937,19.9644128 6.09935043,19.9466192 5.83981274,19.9466192 C5.05537891,19.9062698 4.27476595,19.8081536 3.50397353,19.6530249 C1.83428106,19.3327402 0.744222763,18.7633452 0.277054922,17.8736655 C0.0967111971,17.5290284 0.00163408158,17.144037 0.000104217816,16.752669 C-0.00354430942,16.3589158 0.0886574605,15.9704652 0.268403665,15.6227758 C0.72692025,14.7330961 1.81697855,14.1548043 3.50397353,13.8434164 C4.27816255,13.6914539 5.06143714,13.5933665 5.84846399,13.5498221 Z M8.00262682,-1.16351373e-13 C10.9028467,-1.16351373e-13 13.2539394,2.41782168 13.2539394,5.40035587 C13.2539394,8.38289006 10.9028467,10.8007117 8.00262682,10.8007117 C5.10240696,10.8007117 2.75131423,8.38289006 2.75131423,5.40035587 C2.75131423,2.41782168 5.10240696,-1.16351373e-13 8.00262682,-1.16351373e-13 Z" transform="translate(4 2)"/></svg>
            </div>
            <button data-profile-key="" id="signupProfileBtn">
                                                 <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve"><circle cx="14.5" cy="16.5" r="3.5"/><path d="M25 8h-3.279a1 1 0 0 1-.949-.684l-.316-.949A2 2 0 0 0 18.558 5h-8.117a2 2 0 0 0-1.897 1.368l-.316.948A1 1 0 0 1 7.279 8H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h21a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM14.5 22C11.468 22 9 19.532 9 16.5s2.468-5.5 5.5-5.5 5.5 2.468 5.5 5.5-2.468 5.5-5.5 5.5zm6-10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/><path d="M5.5 7h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z"/></svg>
            <span>Profile</span>
            </button>
            <p>Click to add profile picture</p>
        </div>
        <div class="half-input-fields">
            <div class="input-field">
                <label for="signupFirstName">First Name<span class="required">*</span></label>
                <input type="text" id="signupFirstName" placeholder="First Name" autocomplete="off" style="text-transform:capitalize;">
            </div>
            <div class="input-field">
                <label for="signupLastName">Last Name</label>
                <input type="text" id="signupLastName" placeholder="Last Name" autocomplete="off" style="text-transform:capitalize;">
            </div>
        </div>



        <div class="input-field">
            <label for="signupEmail">Email</label>
            <input type="email" id="signupEmail" placeholder="abc@xyz.com" autocomplete="off"
                pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$" style="text-transform: lowercase;">
        </div>
        <div class="btn-field">
            <button class="next" id="next1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12.01 12.01 0 0 0 12 0Zm4.641 12.768-6 5a1 1 0 1 1-1.282-1.536L14.437 12 9.359 7.768a1 1 0 1 1 1.282-1.536l6 5a1 1 0 0 1 0 1.536Z" data-name="19. Next"/></svg>
            </button>
        </div>

    </div>
    <div class="signup-form-page" id="signupFormPage2">
        <div class="input-field">
            <label for="signupPassword">Set up password<span class="required">*</span></label>
            <h2>Please create a secure password including the following criteria below.</h2>
            <ul>
                <li class="signup-password-rules" id="signupPasswordRule8">atleast 8 letters</li>
                <li class="signup-password-rules" id="signupPasswordRuleNumber">numbers</li>
                <li class="signup-password-rules" id="signupPasswordRuleUpper">capital letters</li>
                <li class="signup-password-rules" id="signupPasswordRuleSpecial">special characters</li>
            </ul>
            <div class="signup-password-container">
                <input class="signup-password" type="password" name="password" id="signupPassword"
                    autocomplete="off">
                <span class="signup-password-show">
                             <svg class="signupPasswordShowSvg" width="139" height="147" viewBox="0 0 139 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <g id="index_account_signupPasswordShow 1">
                             <path id="passwordUpLine" fill-rule="evenodd" clip-rule="evenodd" d="M69.5011 32.6693C41.3309 32.6693 17.3103 50.2814 7.42118 75.0871C7.22419 75.5812 6.93712 76.0293 6.57635 76.4061C6.21558 76.7828 5.78818 77.0807 5.31854 77.2828C4.84891 77.4848 4.34625 77.587 3.83925 77.5837C3.33226 77.5803 2.83086 77.4713 2.36368 77.263C1.89651 77.0546 1.47271 76.751 1.11648 76.3695C0.760249 75.988 0.478568 75.536 0.287515 75.0393C0.0964626 74.5427 -0.00021887 74.0111 0.00299185 73.4749C0.00620257 72.9387 0.10924 72.4085 0.306225 71.9144C11.4174 44.0462 38.2613 24.5018 69.5011 24.5018C100.741 24.5018 127.585 44.0462 138.696 71.9144C139.094 72.9122 139.101 74.0363 138.715 75.0393C138.329 76.0424 137.582 76.8422 136.638 77.263C135.695 77.6837 134.632 77.6908 133.684 77.2828C132.735 76.8747 131.979 76.0849 131.581 75.0871C121.692 50.2814 97.6713 32.6693 69.5011 32.6693V32.6693Z" fill="#2B3151"/>
                             <path id="passwordDownLine" fill-rule="evenodd" clip-rule="evenodd" d="M69.5011 114.332C41.3309 114.332 17.3103 96.7202 7.42118 71.9144C7.22419 71.4204 6.93712 70.9722 6.57635 70.5954C6.21558 70.2187 5.78818 69.9208 5.31854 69.7188C4.84891 69.5167 4.34625 69.4145 3.83925 69.4179C3.33226 69.4213 2.83086 69.5302 2.36368 69.7386C1.89651 69.9469 1.47271 70.2505 1.11648 70.632C0.760249 71.0135 0.478568 71.4655 0.287515 71.9622C0.0964626 72.4589 -0.00021887 72.9904 0.00299185 73.5266C0.00620257 74.0628 0.10924 74.5931 0.306225 75.0871C11.4174 102.955 38.2613 122.5 69.5011 122.5C100.741 122.5 127.585 102.955 138.696 75.0871C139.094 74.0893 139.101 72.9652 138.715 71.9622C138.329 70.9592 137.582 70.1593 136.638 69.7386C135.695 69.3178 134.632 69.3107 133.684 69.7188C132.735 70.1268 131.979 70.9166 131.581 71.9144C121.692 96.7202 97.6713 114.332 69.5011 114.332V114.332Z" fill="#2B3151"/>
                             <path id="passwordMiddleLine" fill-rule="evenodd" clip-rule="evenodd" d="M69.5011 53.0866C66.9461 53.0535 64.4102 53.5571 62.0406 54.5682C59.671 55.5794 57.5148 57.0779 55.6969 58.977C53.8791 60.876 52.4358 63.1378 51.4507 65.6312C50.4657 68.1246 49.9584 70.8 49.9584 73.5023C49.9584 76.2046 50.4657 78.88 51.4507 81.3734C52.4358 83.8668 53.8791 86.1286 55.6969 88.0276C57.5148 89.9267 59.671 91.4252 62.0406 92.4364C64.4102 93.4475 66.9461 93.9511 69.5011 93.918C74.5801 93.8522 79.43 91.6723 82.9995 87.8508C86.5691 84.0293 88.5709 78.874 88.5709 73.5023C88.5709 68.1306 86.5691 62.9753 82.9995 59.1538C79.43 55.3322 74.5801 53.1523 69.5011 53.0866V53.0866ZM42.4747 73.5008C42.4747 69.7474 43.1738 66.0307 44.532 62.563C45.8902 59.0953 47.8809 55.9445 50.3905 53.2904C52.9002 50.6364 55.8795 48.5311 59.1585 47.0947C62.4375 45.6583 65.9519 44.919 69.5011 44.919C73.0502 44.919 76.5646 45.6583 79.8436 47.0947C83.1226 48.5311 86.102 50.6364 88.6116 53.2904C91.1213 55.9445 93.112 59.0953 94.4702 62.563C95.8284 66.0307 96.5275 69.7474 96.5275 73.5008C96.5275 81.0811 93.6801 88.351 88.6116 93.7111C83.5432 99.0712 76.6689 102.082 69.5011 102.082C62.3332 102.082 55.459 99.0712 50.3905 93.7111C45.3221 88.351 42.4747 81.0811 42.4747 73.5008V73.5008Z" fill="#2B3151"/>
                             <path id="passwordShowLine" fill-rule="evenodd" clip-rule="evenodd" d="M137.871 1.19665C139.376 2.79218 139.376 5.37687 137.871 6.9724L6.59009 145.805C6.23148 146.184 5.8058 146.485 5.33733 146.69C4.86887 146.895 4.36679 147 3.85979 147C3.35278 147 2.85076 146.894 2.3824 146.689C1.91403 146.483 1.48849 146.183 1.13008 145.803C0.771666 145.424 0.487394 144.974 0.293495 144.479C0.0995951 143.983 -0.000134317 143.452 1.35769e-07 142.916C0.000134589 142.38 0.100131 141.849 0.294279 141.354C0.488427 140.858 0.772926 140.408 1.13153 140.029L132.409 1.19665C133.915 -0.398882 136.362 -0.398882 137.871 1.19665Z" fill="#2B3151"/>
                             </g>
                            </svg>
                </span>
            </div>
            <div class="signup-password-strength" id="signupPasswordStrength">
                <div></div>
                <div></div>
                <div></div>
                <div class="signup-password-strength-text">none</div>
            </div>


        </div>
        <div class="input-field">
            <label for="signupConfirmPassword">Confirm password
            </label>
            <div class="signup-password-container">
                <input class="signup-password" type="password" name="cPassword" id="signupConfirmPassword"
                    autocomplete="off">
                <span class="signup-password-show">
                             <svg class="signupPasswordShowSvg" width="139" height="147" viewBox="0 0 139 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="index_account_signupPasswordShow 1">
                            <path id="passwordUpLine" fill-rule="evenodd" clip-rule="evenodd" d="M69.5011 32.6693C41.3309 32.6693 17.3103 50.2814 7.42118 75.0871C7.22419 75.5812 6.93712 76.0293 6.57635 76.4061C6.21558 76.7828 5.78818 77.0807 5.31854 77.2828C4.84891 77.4848 4.34625 77.587 3.83925 77.5837C3.33226 77.5803 2.83086 77.4713 2.36368 77.263C1.89651 77.0546 1.47271 76.751 1.11648 76.3695C0.760249 75.988 0.478568 75.536 0.287515 75.0393C0.0964626 74.5427 -0.00021887 74.0111 0.00299185 73.4749C0.00620257 72.9387 0.10924 72.4085 0.306225 71.9144C11.4174 44.0462 38.2613 24.5018 69.5011 24.5018C100.741 24.5018 127.585 44.0462 138.696 71.9144C139.094 72.9122 139.101 74.0363 138.715 75.0393C138.329 76.0424 137.582 76.8422 136.638 77.263C135.695 77.6837 134.632 77.6908 133.684 77.2828C132.735 76.8747 131.979 76.0849 131.581 75.0871C121.692 50.2814 97.6713 32.6693 69.5011 32.6693V32.6693Z" fill="#2B3151"/>
                            <path id="passwordDownLine" fill-rule="evenodd" clip-rule="evenodd" d="M69.5011 114.332C41.3309 114.332 17.3103 96.7202 7.42118 71.9144C7.22419 71.4204 6.93712 70.9722 6.57635 70.5954C6.21558 70.2187 5.78818 69.9208 5.31854 69.7188C4.84891 69.5167 4.34625 69.4145 3.83925 69.4179C3.33226 69.4213 2.83086 69.5302 2.36368 69.7386C1.89651 69.9469 1.47271 70.2505 1.11648 70.632C0.760249 71.0135 0.478568 71.4655 0.287515 71.9622C0.0964626 72.4589 -0.00021887 72.9904 0.00299185 73.5266C0.00620257 74.0628 0.10924 74.5931 0.306225 75.0871C11.4174 102.955 38.2613 122.5 69.5011 122.5C100.741 122.5 127.585 102.955 138.696 75.0871C139.094 74.0893 139.101 72.9652 138.715 71.9622C138.329 70.9592 137.582 70.1593 136.638 69.7386C135.695 69.3178 134.632 69.3107 133.684 69.7188C132.735 70.1268 131.979 70.9166 131.581 71.9144C121.692 96.7202 97.6713 114.332 69.5011 114.332V114.332Z" fill="#2B3151"/>
                            <path id="passwordMiddleLine" fill-rule="evenodd" clip-rule="evenodd" d="M69.5011 53.0866C66.9461 53.0535 64.4102 53.5571 62.0406 54.5682C59.671 55.5794 57.5148 57.0779 55.6969 58.977C53.8791 60.876 52.4358 63.1378 51.4507 65.6312C50.4657 68.1246 49.9584 70.8 49.9584 73.5023C49.9584 76.2046 50.4657 78.88 51.4507 81.3734C52.4358 83.8668 53.8791 86.1286 55.6969 88.0276C57.5148 89.9267 59.671 91.4252 62.0406 92.4364C64.4102 93.4475 66.9461 93.9511 69.5011 93.918C74.5801 93.8522 79.43 91.6723 82.9995 87.8508C86.5691 84.0293 88.5709 78.874 88.5709 73.5023C88.5709 68.1306 86.5691 62.9753 82.9995 59.1538C79.43 55.3322 74.5801 53.1523 69.5011 53.0866V53.0866ZM42.4747 73.5008C42.4747 69.7474 43.1738 66.0307 44.532 62.563C45.8902 59.0953 47.8809 55.9445 50.3905 53.2904C52.9002 50.6364 55.8795 48.5311 59.1585 47.0947C62.4375 45.6583 65.9519 44.919 69.5011 44.919C73.0502 44.919 76.5646 45.6583 79.8436 47.0947C83.1226 48.5311 86.102 50.6364 88.6116 53.2904C91.1213 55.9445 93.112 59.0953 94.4702 62.563C95.8284 66.0307 96.5275 69.7474 96.5275 73.5008C96.5275 81.0811 93.6801 88.351 88.6116 93.7111C83.5432 99.0712 76.6689 102.082 69.5011 102.082C62.3332 102.082 55.459 99.0712 50.3905 93.7111C45.3221 88.351 42.4747 81.0811 42.4747 73.5008V73.5008Z" fill="#2B3151"/>
                            <path id="passwordShowLine" fill-rule="evenodd" clip-rule="evenodd" d="M137.871 1.19665C139.376 2.79218 139.376 5.37687 137.871 6.9724L6.59009 145.805C6.23148 146.184 5.8058 146.485 5.33733 146.69C4.86887 146.895 4.36679 147 3.85979 147C3.35278 147 2.85076 146.894 2.3824 146.689C1.91403 146.483 1.48849 146.183 1.13008 145.803C0.771666 145.424 0.487394 144.974 0.293495 144.479C0.0995951 143.983 -0.000134317 143.452 1.35769e-07 142.916C0.000134589 142.38 0.100131 141.849 0.294279 141.354C0.488427 140.858 0.772926 140.408 1.13153 140.029L132.409 1.19665C133.915 -0.398882 136.362 -0.398882 137.871 1.19665Z" fill="#2B3151"/>
                           </g>
                          </svg>
                </span>
            </div>
            <div class="signup-password-confirm" id="signupPasswordConfirm">
                

                <div class="signup-password-confirm-text" id="signupPasswordConfirmText">Not match</div>
            </div>

        </div>
        <div class="btn-field">

            <button class="prev" id="prev1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,0A12,12,0,1,0,24,12,12.01,12.01,0,0,0,12,0Zm2.64,16.232a1,1,0,1,1-1.28,1.536l-6-5a1,1,0,0,1,0-1.536l6-5a1,1,0,1,1,1.28,1.536L9.562,12Z" data-name="16. Previous"/></svg>
            </button>
            <button class="next" id="next2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12.01 12.01 0 0 0 12 0Zm4.641 12.768-6 5a1 1 0 1 1-1.282-1.536L14.437 12 9.359 7.768a1 1 0 1 1 1.282-1.536l6 5a1 1 0 0 1 0 1.536Z" data-name="19. Next"/></svg>
            </button>
        </div>
    </div>
    <div class="signup-form-page" id="signupFormPage3">
        <div class="input-field">
            <label for="SignupUsername">Username<span class="required">*</span></label>
            <ul class="info">
                <li>Choose unique username</li>
                <li>Use alphabate or .(dot) or _(underspace) </li>
                <li class="not-use">Don't use special character(!@#$%^&*;'...) or space</li>
            </ul>

            <div class="signup-username-container">
                <input type="text" name="username" id="signupUsername" autocomplete="off">
                <span class="signup-username-refresh" id="signupUsernameRefresh">
                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z" data-name="refresh"/></g></svg>
                </span>
            </div>



        </div>
        
        <div class="btn-field">

            <button class="prev" id="prev2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,0A12,12,0,1,0,24,12,12.01,12.01,0,0,0,12,0Zm2.64,16.232a1,1,0,1,1-1.28,1.536l-6-5a1,1,0,0,1,0-1.536l6-5a1,1,0,1,1,1.28,1.536L9.562,12Z" data-name="16. Previous"/></svg>
            </button>
            <button class="next" id="next3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12.01 12.01 0 0 0 12 0Zm4.641 12.768-6 5a1 1 0 1 1-1.282-1.536L14.437 12 9.359 7.768a1 1 0 1 1 1.282-1.536l6 5a1 1 0 0 1 0 1.536Z" data-name="19. Next"/></svg>
            </button>
        </div>

    </div>
    <div class="signup-form-page" id="signupFormPage4">
        <div class="input-field">
            <label for="signupGenderMale">Gender</label>


            <div class="gender-btns">

                <div class="gender-btn">
                    <input type="radio" name="signupGender" value="male" checked="checked"
                        id="signupGenderMale">
                    <label class="signup-gender-label" for="signupGenderMale">Male
                    </label>
                </div>
                <div class="gender-btn">
                    <input type="radio" name="signupGender" value="female" id="signupGenderFemale">
                    <label class="signup-gender-label" for="signupGenderFemale">Female
                    </label>
                </div>
                <div class="gender-btn">
                    <input type="radio" name="signupGender" value="other" id="signupGenderOther">
                    <label class="signup-gender-label" for="signupGenderOther">Other
                    </label>
                </div>


            </div>
        </div>

        <div class="input-field">
            <label for="signupBirthday">BirthDay<span class="required">*</span></label>
            <input type="date" id="signupBirthday" name="birthday" autocomplete="off">
        </div>
        <div class="input-field">
            <label for="sigupState">Address<span class="required">*</span>
            </label>
            <select name="signupState" id="signupState">
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
            <select name="signupCity" id="signupCity">
                <option value="" selected disabled hidden>-- select city -- </option>
            </select>

        </div>
        
        <div class="input-field">
            <label for="signupBio">Bio</label>
            <textarea name="bio" id="signupBio" cols="30" rows="10" autocomplete="off"></textarea>
        </div>
        
        <div class="btn-field">

            <button class="prev" id="prev3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,0A12,12,0,1,0,24,12,12.01,12.01,0,0,0,12,0Zm2.64,16.232a1,1,0,1,1-1.28,1.536l-6-5a1,1,0,0,1,0-1.536l6-5a1,1,0,1,1,1.28,1.536L9.562,12Z" data-name="16. Previous"/></svg>
            </button>
            <button class="Submit" id="signupSubmit">Submit
            </button>
        </div>
    </div>


</div>


</div>

`
