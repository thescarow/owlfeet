"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_event-handler_profile-socket_mainProfile_dev_js"],{

/***/ "./dev-javascripts/socket/event-handler/profile-socket/mainProfile.dev.js":
/*!********************************************************************************!*\
  !*** ./dev-javascripts/socket/event-handler/profile-socket/mainProfile.dev.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProfileSocket\": () => (/* binding */ createProfileSocket)\n/* harmony export */ });\n///////////////////////////////////////\nconst profileUserReceivedFollowRequestCount = document.getElementById(\"profileUserReceivedFollowRequestCount\");\nconst profileUserFollowerCount = document.getElementById(\"profileUserFollowerCount\");\nconst profileUserFollowingCount = document.getElementById(\"profileUserFollowingCount\");\nfunction createProfileSocket(socket) {\n  console.log(\"inside profileSocket\");\n\n  if (isOwner && isOwner === true) {\n    console.log(\"inside owner profile socket\"); //send-follow-request\n\n    socket.on(\"add-follower\", async user => {\n      const followerUserBoxContainer = document.getElementById(\"followerUserBoxContainer\");\n\n      if (followerUserBoxContainer) {\n        let {\n          createUserBox\n        } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_user_js_createUserBox_dev_js\"), __webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js-_81c91\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../user/js/createUserBox.dev.js */ \"./dev-javascripts/user/js/createUserBox.dev.js\"));\n        createUserBox(followerUserBoxContainer, \"follower\", user);\n        console.log(followerUserBoxContainer);\n      }\n\n      if (profileUserFollowerCount) {\n        profileUserFollowerCount.textContent = (parseInt(profileUserFollowerCount.textContent) + 1).toString();\n      }\n    }); //unfollow\n\n    socket.on(\"remove-follower\", userId => {\n      const followerUserBoxContainer = document.getElementById(\"followerUserBoxContainer\");\n\n      if (followerUserBoxContainer) {\n        let userBox = followerUserBoxContainer.querySelector(`.user-box[data-user-id=\"${userId}\"]`);\n\n        if (userBox) {\n          userBox.parentNode.removeChild(userBox);\n        }\n      }\n\n      if (profileUserFollowerCount) {\n        profileUserFollowerCount.textContent = (parseInt(profileUserFollowerCount.textContent) - 1).toString();\n      }\n    }); //accept-follow-request\n\n    socket.on(\"add-following\", async user => {\n      const followingUserBoxContainer = document.getElementById(\"followingUserBoxContainer\");\n\n      if (followingUserBoxContainer) {\n        let {\n          createUserBox\n        } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_user_js_createUserBox_dev_js\"), __webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js-_81c91\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../user/js/createUserBox.dev.js */ \"./dev-javascripts/user/js/createUserBox.dev.js\"));\n        createUserBox(followingUserBoxContainer, \"following\", user);\n      }\n\n      if (profileUserFollowingCount) {\n        profileUserFollowingCount.textContent = (parseInt(profileUserFollowingCount.textContent) + 1).toString();\n      }\n    }); //remove-follower\n\n    socket.on(\"remove-following\", userId => {\n      const followingUserBoxContainer = document.getElementById(\"followingUserBoxContainer\");\n\n      if (followingUserBoxContainer) {\n        let userBox = followingUserBoxContainer.querySelector(`.user-box[data-user-id=\"${userId}\"]`);\n\n        if (userBox) {\n          userBox.parentNode.removeChild(userBox);\n        }\n      }\n\n      if (profileUserFollowingCount) {\n        profileUserFollowingCount.textContent = (parseInt(profileUserFollowingCount.textContent) - 1).toString();\n      }\n    }); ///cancel/delete-received-follow-request\n    //accept-received-follow-request\n\n    socket.on(\"remove-sent-follow-request\", userId => {\n      const sentFollowRequestUserBoxContainer = document.getElementById(\"sentFollowRequestUserBoxContainer\");\n\n      if (sentFollowRequestUserBoxContainer) {\n        let userBox = sentFollowRequestUserBoxContainer.querySelector(`.user-box[data-user-id=\"${userId}\"]`);\n\n        if (userBox) {\n          userBox.parentNode.removeChild(userBox);\n        }\n      }\n\n      const followingUserBoxContainer = document.getElementById(\"followingUserBoxContainer\");\n\n      if (followingUserBoxContainer) {\n        let userBoxs = [...followingUserBoxContainer.querySelectorAll(`.user-box[data-user-id=\"${userId}\"]`)];\n        userBoxs.forEach(userBox => {\n          if (userBox.querySelector(\".user-box__btn--cancel-sent-follow-request\")) {\n            userBox.parentNode.removeChild(userBox);\n          }\n        });\n      }\n    }); //send-follow-request\n\n    socket.on(\"add-received-follow-request\", async user => {\n      const receivedFollowRequestUserBoxContainer = document.getElementById(\"receivedFollowRequestUserBoxContainer\");\n\n      if (receivedFollowRequestUserBoxContainer) {\n        let {\n          createUserBox\n        } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_user_js_createUserBox_dev_js\"), __webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js-_81c91\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../user/js/createUserBox.dev.js */ \"./dev-javascripts/user/js/createUserBox.dev.js\"));\n        createUserBox(receivedFollowRequestUserBoxContainer, \"received-follow-request\", user);\n      }\n\n      if (profileUserReceivedFollowRequestCount) {\n        profileUserReceivedFollowRequestCount.textContent = (parseInt(profileUserReceivedFollowRequestCount.textContent) + 1).toString();\n      }\n    }); //cancel-sent-follow-request\n\n    socket.on(\"remove-received-follow-request\", userId => {\n      if (receivedFollowRequestUserBoxContainer) {\n        let userBox = receivedFollowRequestUserBoxContainer.querySelector(`.user-box[data-user-id=\"${userId}\"]`);\n\n        if (userBox) {\n          userBox.parentNode.removeChild(userBox);\n        }\n      }\n\n      if (profileUserReceivedFollowRequestCount) {\n        profileUserReceivedFollowRequestCount.textContent = (parseInt(profileUserReceivedFollowRequestCount.textContent) - 1).toString();\n      }\n    });\n  }\n\n  socket.on(\"change-user-follow-status\", (userId, userFollowStatus) => {\n    let profileFollowActionBtn = document.getElementById(\"profileFollowActionBtn\");\n    console.log(userId, userFollowStatus);\n\n    if (profileFollowActionBtn) {\n      if (profileUser._id == userId) {\n        profileFollowActionBtn.setAttribute(\"data-user-follow-status\", userFollowStatus);\n\n        if (userFollowStatus === \"send-follow-request\") {\n          profileFollowActionBtn.textContent = \"FOLLOW\";\n          profileFollowActionBtn.classList.remove(\"profile-btn--cancel-sent-follow-request\", \"profile-btn--unfollow\");\n          profileFollowActionBtn.classList.add(\"profile-btn--follow\");\n        }\n\n        if (userFollowStatus === \"unfollow\") {\n          profileFollowActionBtn.textContent = \"UNFOLLOW\";\n          profileFollowActionBtn.classList.remove(\"profile-btn--follow\", \"profile-btn--cancel-sent-follow-request\");\n          profileFollowActionBtn.classList.add(\"profile-btn--unfollow\");\n        }\n\n        if (userFollowStatus === \"cancel-sent-follow-request\") {\n          profileFollowActionBtn.textContent = \"CANCEL REQUEST\";\n          profileFollowActionBtn.classList.remove(\"profile-btn--follow\", \"profile-btn--unfollow\");\n          profileFollowActionBtn.classList.add(\"profile-btn--cancel-sent-follow-request\");\n        }\n      }\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvcHJvZmlsZS1zb2NrZXQvbWFpblByb2ZpbGUuZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLE1BQU1BLHFDQUFxQyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FDNUMsdUNBRDRDLENBQTlDO0FBR0EsTUFBTUMsd0JBQXdCLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUMvQiwwQkFEK0IsQ0FBakM7QUFHQSxNQUFNRSx5QkFBeUIsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQ2hDLDJCQURnQyxDQUFsQztBQUlPLFNBQVNHLG1CQUFULENBQTZCQyxNQUE3QixFQUFxQztFQUMxQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7O0VBRUEsSUFBSUMsT0FBTyxJQUFJQSxPQUFPLEtBQUssSUFBM0IsRUFBaUM7SUFDL0JGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBRCtCLENBRS9COztJQUNBRixNQUFNLENBQUNJLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLE1BQU1DLElBQU4sSUFBYztNQUN0QyxNQUFNQyx3QkFBd0IsR0FBR1gsUUFBUSxDQUFDQyxjQUFULENBQy9CLDBCQUQrQixDQUFqQzs7TUFHQSxJQUFJVSx3QkFBSixFQUE4QjtRQUM1QixJQUFJO1VBQUVDO1FBQUYsSUFBb0IsTUFBTSxzVUFBOUI7UUFHQUEsYUFBYSxDQUFDRCx3QkFBRCxFQUEyQixVQUEzQixFQUF1Q0QsSUFBdkMsQ0FBYjtRQUNBSixPQUFPLENBQUNDLEdBQVIsQ0FBWUksd0JBQVo7TUFDRDs7TUFDRCxJQUFJVCx3QkFBSixFQUE4QjtRQUM1QkEsd0JBQXdCLENBQUNXLFdBQXpCLEdBQXVDLENBQ3JDQyxRQUFRLENBQUNaLHdCQUF3QixDQUFDVyxXQUExQixDQUFSLEdBQWlELENBRFosRUFFckNFLFFBRnFDLEVBQXZDO01BR0Q7SUFDRixDQWhCRCxFQUgrQixDQW9CL0I7O0lBQ0FWLE1BQU0sQ0FB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IndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9zb2NrZXQvZXZlbnQtaGFuZGxlci9wcm9maWxlLXNvY2tldC9tYWluUHJvZmlsZS5kZXYuanM/Mjc2YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgcHJvZmlsZVVzZXJSZWNlaXZlZEZvbGxvd1JlcXVlc3RDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwicHJvZmlsZVVzZXJSZWNlaXZlZEZvbGxvd1JlcXVlc3RDb3VudFwiXHJcbilcclxuY29uc3QgcHJvZmlsZVVzZXJGb2xsb3dlckNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJwcm9maWxlVXNlckZvbGxvd2VyQ291bnRcIlxyXG4pXHJcbmNvbnN0IHByb2ZpbGVVc2VyRm9sbG93aW5nQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInByb2ZpbGVVc2VyRm9sbG93aW5nQ291bnRcIlxyXG4pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZmlsZVNvY2tldChzb2NrZXQpIHtcclxuICBjb25zb2xlLmxvZyhcImluc2lkZSBwcm9maWxlU29ja2V0XCIpXHJcblxyXG4gIGlmIChpc093bmVyICYmIGlzT3duZXIgPT09IHRydWUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIG93bmVyIHByb2ZpbGUgc29ja2V0XCIpXHJcbiAgICAvL3NlbmQtZm9sbG93LXJlcXVlc3RcclxuICAgIHNvY2tldC5vbihcImFkZC1mb2xsb3dlclwiLCBhc3luYyB1c2VyID0+IHtcclxuICAgICAgY29uc3QgZm9sbG93ZXJVc2VyQm94Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJmb2xsb3dlclVzZXJCb3hDb250YWluZXJcIlxyXG4gICAgICApXHJcbiAgICAgIGlmIChmb2xsb3dlclVzZXJCb3hDb250YWluZXIpIHtcclxuICAgICAgICBsZXQgeyBjcmVhdGVVc2VyQm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICBcIi4uLy4uLy4uL3VzZXIvanMvY3JlYXRlVXNlckJveC5kZXYuanNcIlxyXG4gICAgICAgIClcclxuICAgICAgICBjcmVhdGVVc2VyQm94KGZvbGxvd2VyVXNlckJveENvbnRhaW5lciwgXCJmb2xsb3dlclwiLCB1c2VyKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvbGxvd2VyVXNlckJveENvbnRhaW5lcilcclxuICAgICAgfVxyXG4gICAgICBpZiAocHJvZmlsZVVzZXJGb2xsb3dlckNvdW50KSB7XHJcbiAgICAgICAgcHJvZmlsZVVzZXJGb2xsb3dlckNvdW50LnRleHRDb250ZW50ID0gKFxyXG4gICAgICAgICAgcGFyc2VJbnQocHJvZmlsZVVzZXJGb2xsb3dlckNvdW50LnRleHRDb250ZW50KSArIDFcclxuICAgICAgICApLnRvU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vdW5mb2xsb3dcclxuICAgIHNvY2tldC5vbihcInJlbW92ZS1mb2xsb3dlclwiLCB1c2VySWQgPT4ge1xyXG4gICAgICBjb25zdCBmb2xsb3dlclVzZXJCb3hDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBcImZvbGxvd2VyVXNlckJveENvbnRhaW5lclwiXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGlmIChmb2xsb3dlclVzZXJCb3hDb250YWluZXIpIHtcclxuICAgICAgICBsZXQgdXNlckJveCA9IGZvbGxvd2VyVXNlckJveENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgYC51c2VyLWJveFtkYXRhLXVzZXItaWQ9XCIke3VzZXJJZH1cIl1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmICh1c2VyQm94KSB7XHJcbiAgICAgICAgICB1c2VyQm94LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodXNlckJveClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHByb2ZpbGVVc2VyRm9sbG93ZXJDb3VudCkge1xyXG4gICAgICAgIHByb2ZpbGVVc2VyRm9sbG93ZXJDb3VudC50ZXh0Q29udGVudCA9IChcclxuICAgICAgICAgIHBhcnNlSW50KHByb2ZpbGVVc2VyRm9sbG93ZXJDb3VudC50ZXh0Q29udGVudCkgLSAxXHJcbiAgICAgICAgKS50b1N0cmluZygpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvL2FjY2VwdC1mb2xsb3ctcmVxdWVzdFxyXG4gICAgc29ja2V0Lm9uKFwiYWRkLWZvbGxvd2luZ1wiLCBhc3luYyB1c2VyID0+IHtcclxuICAgICAgY29uc3QgZm9sbG93aW5nVXNlckJveENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIFwiZm9sbG93aW5nVXNlckJveENvbnRhaW5lclwiXHJcbiAgICAgIClcclxuICAgICAgaWYgKGZvbGxvd2luZ1VzZXJCb3hDb250YWluZXIpIHtcclxuICAgICAgICBsZXQgeyBjcmVhdGVVc2VyQm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICBcIi4uLy4uLy4uL3VzZXIvanMvY3JlYXRlVXNlckJveC5kZXYuanNcIlxyXG4gICAgICAgIClcclxuICAgICAgICBjcmVhdGVVc2VyQm94KGZvbGxvd2luZ1VzZXJCb3hDb250YWluZXIsIFwiZm9sbG93aW5nXCIsIHVzZXIpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHByb2ZpbGVVc2VyRm9sbG93aW5nQ291bnQpIHtcclxuICAgICAgICBwcm9maWxlVXNlckZvbGxvd2luZ0NvdW50LnRleHRDb250ZW50ID0gKFxyXG4gICAgICAgICAgcGFyc2VJbnQocHJvZmlsZVVzZXJGb2xsb3dpbmdDb3VudC50ZXh0Q29udGVudCkgKyAxXHJcbiAgICAgICAgKS50b1N0cmluZygpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvL3JlbW92ZS1mb2xsb3dlclxyXG4gICAgc29ja2V0Lm9uKFwicmVtb3ZlLWZvbGxvd2luZ1wiLCB1c2VySWQgPT4ge1xyXG4gICAgICBjb25zdCBmb2xsb3dpbmdVc2VyQm94Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJmb2xsb3dpbmdVc2VyQm94Q29udGFpbmVyXCJcclxuICAgICAgKVxyXG4gICAgICBpZiAoZm9sbG93aW5nVXNlckJveENvbnRhaW5lcikge1xyXG4gICAgICAgIGxldCB1c2VyQm94ID0gZm9sbG93aW5nVXNlckJveENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgYC51c2VyLWJveFtkYXRhLXVzZXItaWQ9XCIke3VzZXJJZH1cIl1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmICh1c2VyQm94KSB7XHJcbiAgICAgICAgICB1c2VyQm94LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodXNlckJveClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHByb2ZpbGVVc2VyRm9sbG93aW5nQ291bnQpIHtcclxuICAgICAgICBwcm9maWxlVXNlckZvbGxvd2luZ0NvdW50LnRleHRDb250ZW50ID0gKFxyXG4gICAgICAgICAgcGFyc2VJbnQocHJvZmlsZVVzZXJGb2xsb3dpbmdDb3VudC50ZXh0Q29udGVudCkgLSAxXHJcbiAgICAgICAgKS50b1N0cmluZygpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8vY2FuY2VsL2RlbGV0ZS1yZWNlaXZlZC1mb2xsb3ctcmVxdWVzdFxyXG4gICAgLy9hY2NlcHQtcmVjZWl2ZWQtZm9sbG93LXJlcXVlc3RcclxuICAgIHNvY2tldC5vbihcInJlbW92ZS1zZW50LWZvbGxvdy1yZXF1ZXN0XCIsIHVzZXJJZCA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbnRGb2xsb3dSZXF1ZXN0VXNlckJveENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIFwic2VudEZvbGxvd1JlcXVlc3RVc2VyQm94Q29udGFpbmVyXCJcclxuICAgICAgKVxyXG4gICAgICBpZiAoc2VudEZvbGxvd1JlcXVlc3RVc2VyQm94Q29udGFpbmVyKSB7XHJcbiAgICAgICAgbGV0IHVzZXJCb3ggPSBzZW50Rm9sbG93UmVxdWVzdFVzZXJCb3hDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIGAudXNlci1ib3hbZGF0YS11c2VyLWlkPVwiJHt1c2VySWR9XCJdYFxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAodXNlckJveCkge1xyXG4gICAgICAgICAgdXNlckJveC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHVzZXJCb3gpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZvbGxvd2luZ1VzZXJCb3hDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBcImZvbGxvd2luZ1VzZXJCb3hDb250YWluZXJcIlxyXG4gICAgICApXHJcbiAgICAgIGlmIChmb2xsb3dpbmdVc2VyQm94Q29udGFpbmVyKSB7XHJcbiAgICAgICAgbGV0IHVzZXJCb3hzID0gW1xyXG4gICAgICAgICAgLi4uZm9sbG93aW5nVXNlckJveENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBgLnVzZXItYm94W2RhdGEtdXNlci1pZD1cIiR7dXNlcklkfVwiXWBcclxuICAgICAgICAgIClcclxuICAgICAgICBdXHJcbiAgICAgICAgdXNlckJveHMuZm9yRWFjaCh1c2VyQm94ID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdXNlckJveC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYm94X19idG4tLWNhbmNlbC1zZW50LWZvbGxvdy1yZXF1ZXN0XCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdXNlckJveC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHVzZXJCb3gpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vc2VuZC1mb2xsb3ctcmVxdWVzdFxyXG4gICAgc29ja2V0Lm9uKFwiYWRkLXJlY2VpdmVkLWZvbGxvdy1yZXF1ZXN0XCIsIGFzeW5jIHVzZXIgPT4ge1xyXG4gICAgICBjb25zdCByZWNlaXZlZEZvbGxvd1JlcXVlc3RVc2VyQm94Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJyZWNlaXZlZEZvbGxvd1JlcXVlc3RVc2VyQm94Q29udGFpbmVyXCJcclxuICAgICAgKVxyXG4gICAgICBpZiAocmVjZWl2ZWRGb2xsb3dSZXF1ZXN0VXNlckJveENvbnRhaW5lcikge1xyXG4gICAgICAgIGxldCB7IGNyZWF0ZVVzZXJCb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgIFwiLi4vLi4vLi4vdXNlci9qcy9jcmVhdGVVc2VyQm94LmRldi5qc1wiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNyZWF0ZVVzZXJCb3goXHJcbiAgICAgICAgICByZWNlaXZlZEZvbGxvd1JlcXVlc3RVc2VyQm94Q29udGFpbmVyLFxyXG4gICAgICAgICAgXCJyZWNlaXZlZC1mb2xsb3ctcmVxdWVzdFwiLFxyXG4gICAgICAgICAgdXNlclxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb2ZpbGVVc2VyUmVjZWl2ZWRGb2xsb3dSZXF1ZXN0Q291bnQpIHtcclxuICAgICAgICBwcm9maWxlVXNlclJlY2VpdmVkRm9sbG93UmVxdWVzdENvdW50LnRleHRDb250ZW50ID0gKFxyXG4gICAgICAgICAgcGFyc2VJbnQocHJvZmlsZVVzZXJSZWNlaXZlZEZvbGxvd1JlcXVlc3RDb3VudC50ZXh0Q29udGVudCkgKyAxXHJcbiAgICAgICAgKS50b1N0cmluZygpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvL2NhbmNlbC1zZW50LWZvbGxvdy1yZXF1ZXN0XHJcbiAgICBzb2NrZXQub24oXCJyZW1vdmUtcmVjZWl2ZWQtZm9sbG93LXJlcXVlc3RcIiwgdXNlcklkID0+IHtcclxuICAgICAgaWYgKHJlY2VpdmVkRm9sbG93UmVxdWVzdFVzZXJCb3hDb250YWluZXIpIHtcclxuICAgICAgICBsZXQgdXNlckJveCA9IHJlY2VpdmVkRm9sbG93UmVxdWVzdFVzZXJCb3hDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIGAudXNlci1ib3hbZGF0YS11c2VyLWlkPVwiJHt1c2VySWR9XCJdYFxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAodXNlckJveCkge1xyXG4gICAgICAgICAgdXNlckJveC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHVzZXJCb3gpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJvZmlsZVVzZXJSZWNlaXZlZEZvbGxvd1JlcXVlc3RDb3VudCkge1xyXG4gICAgICAgIHByb2ZpbGVVc2VyUmVjZWl2ZWRGb2xsb3dSZXF1ZXN0Q291bnQudGV4dENvbnRlbnQgPSAoXHJcbiAgICAgICAgICBwYXJzZUludChwcm9maWxlVXNlclJlY2VpdmVkRm9sbG93UmVxdWVzdENvdW50LnRleHRDb250ZW50KSAtIDFcclxuICAgICAgICApLnRvU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNvY2tldC5vbihcImNoYW5nZS11c2VyLWZvbGxvdy1zdGF0dXNcIiwgKHVzZXJJZCwgdXNlckZvbGxvd1N0YXR1cykgPT4ge1xyXG4gICAgbGV0IHByb2ZpbGVGb2xsb3dBY3Rpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJwcm9maWxlRm9sbG93QWN0aW9uQnRuXCJcclxuICAgIClcclxuICAgIGNvbnNvbGUubG9nKHVzZXJJZCwgdXNlckZvbGxvd1N0YXR1cylcclxuICAgIGlmIChwcm9maWxlRm9sbG93QWN0aW9uQnRuKSB7XHJcbiAgICAgIGlmIChwcm9maWxlVXNlci5faWQgPT0gdXNlcklkKSB7XHJcbiAgICAgICAgcHJvZmlsZUZvbGxvd0FjdGlvbkJ0bi5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImRhdGEtdXNlci1mb2xsb3ctc3RhdHVzXCIsXHJcbiAgICAgICAgICB1c2VyRm9sbG93U3RhdHVzXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmICh1c2VyRm9sbG93U3RhdHVzID09PSBcInNlbmQtZm9sbG93LXJlcXVlc3RcIikge1xyXG4gICAgICAgICAgcHJvZmlsZUZvbGxvd0FjdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiRk9MTE9XXCJcclxuICAgICAgICAgIHByb2ZpbGVGb2xsb3dBY3Rpb25CdG4uY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgICAgXCJwcm9maWxlLWJ0bi0tY2FuY2VsLXNlbnQtZm9sbG93LXJlcXVlc3RcIixcclxuICAgICAgICAgICAgXCJwcm9maWxlLWJ0bi0tdW5mb2xsb3dcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgcHJvZmlsZUZvbGxvd0FjdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS1idG4tLWZvbGxvd1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlckZvbGxvd1N0YXR1cyA9PT0gXCJ1bmZvbGxvd1wiKSB7XHJcbiAgICAgICAgICBwcm9maWxlRm9sbG93QWN0aW9uQnRuLnRleHRDb250ZW50ID0gXCJVTkZPTExPV1wiXHJcbiAgICAgICAgICBwcm9maWxlRm9sbG93QWN0aW9uQnRuLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICAgIFwicHJvZmlsZS1idG4tLWZvbGxvd1wiLFxyXG4gICAgICAgICAgICBcInByb2ZpbGUtYnRuLS1jYW5jZWwtc2VudC1mb2xsb3ctcmVxdWVzdFwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBwcm9maWxlRm9sbG93QWN0aW9uQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLWJ0bi0tdW5mb2xsb3dcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXJGb2xsb3dTdGF0dXMgPT09IFwiY2FuY2VsLXNlbnQtZm9sbG93LXJlcXVlc3RcIikge1xyXG4gICAgICAgICAgcHJvZmlsZUZvbGxvd0FjdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiQ0FOQ0VMIFJFUVVFU1RcIlxyXG4gICAgICAgICAgcHJvZmlsZUZvbGxvd0FjdGlvbkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgICBcInByb2ZpbGUtYnRuLS1mb2xsb3dcIixcclxuICAgICAgICAgICAgXCJwcm9maWxlLWJ0bi0tdW5mb2xsb3dcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgcHJvZmlsZUZvbGxvd0FjdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICBcInByb2ZpbGUtYnRuLS1jYW5jZWwtc2VudC1mb2xsb3ctcmVxdWVzdFwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsicHJvZmlsZVVzZXJSZWNlaXZlZEZvbGxvd1JlcXVlc3RDb3VudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9maWxlVXNlckZvbGxvd2VyQ291bnQiLCJwcm9maWxlVXNlckZvbGxvd2luZ0NvdW50IiwiY3JlYXRlUHJvZmlsZVNvY2tldCIsInNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJpc093bmVyIiwib24iLCJ1c2VyIiwiZm9sbG93ZXJVc2VyQm94Q29udGFpbmVyIiwiY3JlYXRlVXNlckJveCIsInRleHRDb250ZW50IiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsInVzZXJJZCIsInVzZXJCb3giLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZm9sbG93aW5nVXNlckJveENvbnRhaW5lciIsInNlbnRGb2xsb3dSZXF1ZXN0VXNlckJveENvbnRhaW5lciIsInVzZXJCb3hzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZWNlaXZlZEZvbGxvd1JlcXVlc3RVc2VyQm94Q29udGFpbmVyIiwidXNlckZvbGxvd1N0YXR1cyIsInByb2ZpbGVGb2xsb3dBY3Rpb25CdG4iLCJwcm9maWxlVXNlciIsIl9pZCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/profile-socket/mainProfile.dev.js\n");

/***/ })

}]);