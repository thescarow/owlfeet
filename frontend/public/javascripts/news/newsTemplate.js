var profileImageBasePath = '/uploads/userProfileImages'
// var images = [...document.getElementsByClassName("news-image")]
var newsMedia = document.getElementsByClassName("news-media")[0]

var newsMainContainer = document.getElementsByClassName("news-main-container")[0];

var width = Number(
  window.getComputedStyle(newsMainContainer).getPropertyValue("width").slice(0, -2)
);

// images.forEach((img) => {
//   img.style.height = width * (9 / 16) + "px";
// });
newsMedia.style.height = width * (9 / 16) + "px";

// news Model 
// #########################
//accessing madal here
// #############################
var newsModal = document.getElementById("newsModal");
var modalInner = document.getElementById("modalInner")
var modalContent = document.getElementById("modalContent")
var closeBtn = document.getElementById("closeBtn");
var preloader = document.getElementById("preloader")
 // ####################################
// ###### closing modal 
// When the user clicks on close (x), close the modal
closeBtn.onclick = function () {
  newsModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == newsModal) {
    newsModal.style.display = "none";
  }
}





//  fetching description from server by clicking on the title 
var titles = [...document.getElementsByClassName("news-title")]
titles.forEach(title=>{
  title.addEventListener("dblclick",(event)=>{

    var newsId = event.target.dataset.newsId;   // getting newsId for particular title 
      newsModal.style.display = "block";
      preloader.style.display = "block"  // these two lines for displaying modal and preloader 
    
      var data = {
        newsId: newsId
      }
      
      fetch("/news/data/desc", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
    
    
          if(!data.error){
    
            preloader.style.display = "none"  // clear the content in madal content box and hiding the  preloader
            modalContent.innerHTML = ""
      //##################################################
            var descContainer = document.createElement("div")
            descContainer.innerHTML = data.desc
             descContainer.classList.add("news-description")
             modalContent.appendChild(descContainer)
          
          }
          else{
    
            preloader.style.display = "none"
            modalContent.innerHTML = "" // same here hiding preloader and clear the modal content
            var errorContainer = document.createElement("div")
            errorContainer.appendChild(document.createTextNode("error in fetching description please try again"))
            errorContainer.classList.add("news-description-error")
            modalContent.appendChild(errorContainer)
    
          }
        }); // ending the description fetch here
    }) // ending title click event listener here 
    

})



// fetching comments here 

function fetchingComments(event){

  var newsId = event.target.dataset.newsId;   // getting newsId for particular title 
  newsModal.style.display = "block"
  preloader.style.display = "block"  // these two lines for displaying modal and preloader 

  var data = {
    newsId: newsId
  }
  
  fetch("/news/data/comments", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {


      if(!data.error){

        preloader.style.display = "none"  // clear the content in madal content box and hiding the  preloader
        modalContent.innerHTML = ""
        //##################################################
        var commentsContainer = document.createElement("div")
        commentsContainer.classList.add("comments-container")

      data.comments.forEach(comment=>{

         var profileImagePath = profileImageBasePath + "/" + comment.postedBy.profile


        commentsContainer.innerHTML +=  ` <div class="modal-comment-single">
           <div class="modal-comment-user-profile">
           <img src="${profileImagePath}">
     </div>
     <div class="modal-comment-username">
     ${comment.postedBy.userName}:
     </div>
      <div class="modal-comment-content">
      ${comment.content}
      </div>
     </div> `
     })

       modalContent.appendChild(commentsContainer) 
      
      }
      else{

        preloader.style.display = "none"
        modalContent.innerHTML = "" // same here hiding preloader and clear the modal content
        var errorContainer = document.createElement("div")
        errorContainer.appendChild(document.createTextNode("error in fetching comments please try again"))
        errorContainer.classList.add("news-comments-error")
        modalContent.appendChild(errorContainer)

      }
    }); // ending the description fetch here
}
 
var commentBtns = [...document.getElementsByClassName("commentBtn")]
commentBtns.forEach(commentBtn=>{
  commentBtn.addEventListener("click", fetchingComments)
})

var commentDatas = [...document.getElementsByClassName('comment-data')]
commentDatas.forEach(commentData=>{
  commentData.addEventListener("click", fetchingComments)

})







// #############################################
// ######################################



























//  like feature

var updateLikeData = {
  like: function (newsId) {
    document.querySelector("#like-count-" + newsId).textContent++;
  },
  unlike: function (newsId) {
    document.querySelector("#like-count-" + newsId).textContent--;
  },
};

var toggleLikeActiveClass = {
  like: function (element) {
    element.classList.add("active");
  },
  unlike: function (element) {
    element.classList.remove("active");
  },
};

var likeBtns = [...document.getElementsByClassName("likeBtn")];
likeBtns.forEach(likeBtn=>{

  likeBtn.addEventListener("click", function (event) {
    var newsId = event.target.dataset.newsId;
    var action;
    if (event.target.classList.contains("active")) {
      toggleLikeActiveClass["unlike"](event.target);
      event.target.name = event.target.name + "-outline";
      updateLikeData["unlike"](newsId);
      action = "unlike";
    } else {
      event.target.name = event.target.name.slice(0, -8);
      toggleLikeActiveClass["like"](event.target);
      updateLikeData["like"](newsId);
      action = "like";
    }
  
    var data = {
      newsId: newsId,
      action: action,
    };
  
    fetch("/news/actions/like", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // this logic for when server fail to like and unlike the news
        if (data.error) {
            console.log("hello")
          if (action == "like") {
            toggleLikeActiveClass["unlike"](event.target);
            event.target.name = event.target.name + "-outline";
            updateLikeData["unlike"](newsId);
            action = "unlike";
          } else {
            event.target.name = event.target.name.slice(0, -8);
            toggleLikeActiveClass["like"](event.target);
            updateLikeData["like"](newsId);
            action = "like";
          }
        }
      else{
        console.log(data.savedUserId);
  
      }
      });
  });
  


})
// ########################################## end like feature here 


var toggleFollowLink = {
  follow: function (element) {
    element.classList.remove("active");
    element.textContent = "follow";
  },
  unfollow: function (element) {
    element.classList.add("active");
    element.textContent = "unfollow";
  }
};

var followBtns = [...document.getElementsByClassName("user-follow-link")]

followBtns.forEach(followBtn=>{

  followBtn.addEventListener("click", function (event) {
    var followUserId = event.target.dataset.followUserId;
    var action;
    if (event.target.classList.contains("active")) {
  
      toggleFollowLink["follow"](event.target);
      action = "unfollow";
  
    } else {
     toggleFollowLink["unfollow"](event.target);
      action = "follow";
    }
  
    var data = {
      followUserId: followUserId,
      action: action,
    };
  
    fetch("/news/actions/follow", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
  
        
        
        // this logic for when server fail to like and unlike the news
        if (data.error) {
          if (action == "follow") {
            toggleFollowLink["follow"](event.target);
            
            
          } else {
            toggleFollowLink["unfollow"](event.target);
            
          }
        }
        else{
  
          console.log(data.loginUser,data.followUser)
        }
        
      });
  });






})





// comments feature 

var commentSends = [...document.getElementsByClassName("comment-send")];
commentSends.forEach(commentSend=>{

  commentSend.addEventListener("click", (event) => {
    var newsId = event.target.dataset.newsId;
    var commentOutput = document.querySelector("#comment-output-" + newsId); //comment output box 
    var commentInput  = document.querySelector("#comment-" + newsId);

    var comment = commentInput.value
    // var dirtyComment = commentInput.value
    // var comment = ""
    // if(dirtyComment != "" && dirtyComment != null){
    //   comment = DOMPurify.sanitize(dirtyComment); 
    // }
  
    
    
  
  
    var img = document.querySelector("#profile-" + newsId);
    // var profileSrc = img.src;
    var userName = img.dataset.username;
  
    // if (comment != "" && comment != null) {
    
      commentInput.value = ""
      
      //  creating single comment #######
      var commentSingle = document.createElement("div");
      commentSingle.classList.add("comment-single");
      //create comment element
      var commentElement = document.createElement("div");
      commentElement.appendChild(document.createTextNode(comment));
      commentElement.classList.add("comment");
      ///create comment user
      var commentUser = document.createElement("div");
      commentUser.classList.add("comment-user");
      commentUser.appendChild(document.createTextNode(userName + ":"));
  
      //attching these to comment -output
      commentSingle.appendChild(commentUser);
      commentSingle.appendChild(commentElement);
      commentOutput.appendChild(commentSingle);
      document.querySelector("#comment-count-" + newsId).textContent++;
      
  
  //  #######################################
  
  var data = {
    newsId: newsId,
    commentValue: comment
  };
  
  
  
  fetch("/news/actions/comment", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.error){
  
        document.querySelector("#comment-count-" + newsId).textContent--;
        commentOutput.removeChild(commentOutput.lastChild)
      }
      else{
  
        if(data.invalidComment){
          document.querySelector("#comment-count-" + newsId).textContent--;
          alert("you entered invalid comment")
    
        }
        else{
          console.log(data.savedNews)
        }}
      
    })
  // }
  //   // this else for frontend sanitiztion 
  // else{
  //   commentInput.value = ""
  //   alert("you entered invalid comment")
  
  // }
  }) // ######### comment addEventListner end here 
  



})







// logic for save news  

var toggleSaveActiveClass = {
  save: function (element) {
    element.classList.add("active");
  },
  unsave: function (element) {
    element.classList.remove("active");
  },
};




var saveBtns = [...document.getElementsByClassName("saveBtn")];
saveBtns.forEach(saveBtn=>{

  saveBtn.addEventListener("click", function (event) {
    var newsId = event.target.dataset.newsId;
    var action;
    if (event.target.classList.contains("active")) {
      toggleSaveActiveClass["unsave"](event.target);
      event.target.name = event.target.name + "-outline";
      action = "unsave";
    } else {
      event.target.name = event.target.name.slice(0, -8);
      toggleSaveActiveClass["save"](event.target);
      
      action = "save";
    }
  
    var data = {
      newsId: newsId,
      action: action,
    };
  
    fetch("/news/actions/save", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // this logic for when server fail to like and unlike the news
        if (data.error) {
          if (action == "save") {
            toggleSaveActiveClass["unsave"](event.target);
            event.target.name = event.target.name + "-outline";
            
           
          } else {
            event.target.name = event.target.name.slice(0, -8);
            toggleSaveActiveClass["save"](event.target);
            
          
          }
        }
        else{
  
          console.log(data.savedUserId);
  
        }
  
      });
  });
  

})
