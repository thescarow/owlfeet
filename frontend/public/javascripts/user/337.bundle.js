"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[337],{9337:(e,n,r)=>{r.r(n),r.d(n,{setSettingActionContent:()=>o});var t=r(5967);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(){document.getElementById("settingActionContent").innerHTML='\n  <div id="changePasswordBox">\n      <span>Change your Password</span>\n      <input type="password" id=\'currentPassword\' class="password" placeholder="Current Password">\n      <input type="password" id=\'newPassword\' class="password"  placeholder="New Password">\n      <input type="password" id=\'confirmPassword\' class="password" placeholder="Confirm Password">\n      <label id="showPasswordContainer">\n      <input type="checkbox" id=\'showPassword\'> \n      <span id="showPasswordText"> Show Password </span>\n      </label>\n      <div class="change-password-btns">\n          <button id="canclePassword" class="btn">Cancle</button>\n          <button id="changePassword" class="btn">Submit</button>\n      </div>\n  <a href="/user-auth/reset-password" id="profileResetPassword">Forgot password </a>\n  </div>\n  ';var e=document.getElementById("changePassword");document.getElementById("canclePassword").addEventListener("click",(function(){profileOwnerSettingActionSection.classList.remove("show")}));var n=document.getElementById("currentPassword"),r=document.getElementById("newPassword"),o=document.getElementById("confirmPassword");n.addEventListener("keyup",(function(e){n.value=n.value.replace(/\s/g,"")})),r.addEventListener("keyup",(function(e){r.value=r.value.replace(/\s/g,"")})),o.addEventListener("keyup",(function(e){o.value=o.value.replace(/\s/g,"")}));var a,d=function(e){if(Array.isArray(e))return s(e)}(a=document.getElementsByClassName("password"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,n){if(e){if("string"==typeof e)return s(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,n):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=document.getElementById("showPassword");c.addEventListener("change",(function(){c.checked?d.forEach((function(e){e.type="text"})):d.forEach((function(e){e.type="password"}))})),e.addEventListener("click",(function(){if(""!=n.value)if(o.value==r.value){var e={currentPassword:n.value,newPassword:r.value};fetch("/user-auth/change-user-password",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Error in Changing Password")})).then((function(e){e.isSuccess?((0,t.A)("Your Password Is Changed SuccessFully","success"),n.value="",r.value="",o.value="",profileOwnerSettingActionSection.classList.remove("show")):(0,t.A)(e.error,"error")})).catch((function(e){(0,t.A)("Server Error In Changing Password,Please Try Again","error")}))}else(0,t.A)("Password And Confirm Password Are Not Same, Please Check Them Carefully","error");else(0,t.A)("Please Enter Current Password, It Should Not Be Empty","error"),n.focus()}))}}}]);