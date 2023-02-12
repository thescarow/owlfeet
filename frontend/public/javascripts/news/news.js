var profileImageBasePath = '/uploads/userProfileImages'
const images = [...document.getElementsByClassName("news-image")];

const mainContainer = document.getElementsByClassName("main-container")[0];

const width = Number(
  window.getComputedStyle(mainContainer).getPropertyValue("width").slice(0, -2)
);

images.forEach((img) => {
  img.style.height = width * (9 / 16) + "px";
});

// news Model 
// #########################
//accessing madal here
// #############################
let newsModal = document.getElementById("newsModal");
let modalInner = document.getElementById("modalInner")
let modalContent = document.getElementById("modalContent")
let closeBtn = document.getElementById("closeBtn");
let preloader = document.getElementById("preloader")
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
let title = document.getElementById("newsTitle")
title.addEventListener("dblclick",(event)=>{

let newsId = event.target.dataset.newsId;   // getting newsId for particular title 
  newsModal.style.display = "block";
  preloader.style.display = "block"  // these two lines for displaying modal and preloader 

  let data = {
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
        const descContainer = document.createElement("div")
        descContainer.innerHTML = data.desc
         descContainer.classList.add("news-description")
         modalContent.appendChild(descContainer)
      
      }
      else{

        preloader.style.display = "none"
        modalContent.innerHTML = "" // same here hiding preloader and clear the modal content
        const errorContainer = document.createElement("div")
        errorContainer.appendChild(document.createTextNode("error in fetching description please try again"))
        errorContainer.classList.add("news-description-error")
        modalContent.appendChild(errorContainer)

      }
    }); // ending the description fetch here
}) // ending title click event listener here 



// fetching comments here 

function fetchingComments(event){

  let newsId = event.target.dataset.newsId;   // getting newsId for particular title 
  newsModal.style.display = "block"
  preloader.style.display = "block"  // these two lines for displaying modal and preloader 

  let data = {
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
        const commentsContainer = document.createElement("div")
        commentsContainer.classList.add("comments-container")

      data.comments.forEach(comment=>{

         let profileImagePath = profileImageBasePath + "/" + comment.postedBy.profile


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
        const errorContainer = document.createElement("div")
        errorContainer.appendChild(document.createTextNode("error in fetching comments please try again"))
        errorContainer.classList.add("news-comments-error")
        modalContent.appendChild(errorContainer)

      }
    }); // ending the description fetch here
}
 
const commentData = document.getElementById('commentData')
const commentBtn = document.getElementById("commentBtn")
commentBtn.addEventListener("click", fetchingComments)
commentData.addEventListener("click", fetchingComments)







// #############################################
// ######################################



























//  like feature

let updateLikeData = {
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

const likeBtn = document.getElementById("likeBtn");

likeBtn.addEventListener("click", function (event) {
  let newsId = event.target.dataset.newsId;
  let action;
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

  let data = {
    newsId: newsId,
    action: action,
  };

  fetch("/news/actions/like", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((savedUserId) => {
      // this logic for when server fail to like and unlike the news
      if (!savedUserId) {
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

      console.log(savedUserId);
    });
});
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

const followBtn = document.getElementById("userFollowLink");

followBtn.addEventListener("click", function (event) {
  let followUserId = event.target.dataset.followUserId;
  let action;
  if (event.target.classList.contains("active")) {

    toggleFollowLink["follow"](event.target);
    action = "unfollow";

  } else {
   toggleFollowLink["unfollow"](event.target);
    action = "follow";
  }

  let data = {
    followUserId: followUserId,
    action: action,
  };

  fetch("/news/actions/follow", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((savedUsers) => {

      console.log(savedUsers.loginUser,savedUsers.followUser)


      // this logic for when server fail to like and unlike the news
      // if (!savedUserId) {
      //   if (action == "follow") {
      //     toggleFollowLink["unfollow"](event.target);
     

      //   } else {
      //     toggleFollowLink["follow"](event.target);
      
      //   }
      // }

      
    });
});




// comments feature 

const commentSend = document.getElementById("commentSend");
commentSend.addEventListener("click", (event) => {
  let newsId = event.target.dataset.newsId;
  let commentOutput = document.querySelector("#comment-output-" + newsId); //comment output box 
  let commentInput  = document.querySelector("#comment-" + newsId);
  let dirtyComment = commentInput.value
  let comment = ""
  if(dirtyComment != "" && dirtyComment != null){
    comment = DOMPurify.sanitize(dirtyComment); 
  }

  
  


  let img = document.querySelector("#profile-" + newsId);
  // let profileSrc = img.src;
  let userName = img.dataset.username;

  if (comment != "" && comment != null) {
  
    commentInput.value = ""
     
    //  creating single comment #######
    let commentSingle = document.createElement("div");
    commentSingle.classList.add("comment-single");
    //create comment element
    let commentElement = document.createElement("div");
    commentElement.appendChild(document.createTextNode(comment));
    commentElement.classList.add("comment");
    ///create comment user
    let commentUser = document.createElement("div");
    commentUser.classList.add("comment-user");
    commentUser.appendChild(document.createTextNode(userName + ":"));

    //attching these to comment -output
    commentSingle.appendChild(commentUser);
    commentSingle.appendChild(commentElement);
    commentOutput.appendChild(commentSingle);
    document.querySelector("#comment-count-" + newsId).textContent++;
    

//  #######################################

let data = {
  newsId: newsId,
  commentValue: comment
};



fetch("/news/actions/comment", {
  method: "PUT",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((savedNews) => {
    if(savedNews.invalidComment){
      document.querySelector("#comment-count-" + newsId).textContent--;
      alert("you entered invalid comment")

    }
    console.log(savedNews) 
  })
}

else{
  commentInput.value = ""
  alert("you entered invalid comment")

}
}) // ######### comment addEventListner end here 







// logic for save news  

var toggleSaveActiveClass = {
  save: function (element) {
    element.classList.add("active");
  },
  unsave: function (element) {
    element.classList.remove("active");
  },
};




const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", function (event) {
  let newsId = event.target.dataset.newsId;
  let action;
  if (event.target.classList.contains("active")) {
    toggleSaveActiveClass["unsave"](event.target);
    event.target.name = event.target.name + "-outline";
    action = "unsave";
  } else {
    event.target.name = event.target.name.slice(0, -8);
    toggleSaveActiveClass["save"](event.target);
    
    action = "save";
  }

  let data = {
    newsId: newsId,
    action: action,
  };

  fetch("/news/actions/save", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((savedUserId) => {
      // this logic for when server fail to like and unlike the news
      if (!savedUserId) {
        if (action == "save") {
          toggleSaveActiveClass["unsave"](event.target);
          event.target.name = event.target.name + "-outline";
          
         
        } else {
          event.target.name = event.target.name.slice(0, -8);
          toggleSaveActiveClass["save"](event.target);
          
        
        }
      }

      console.log(savedUserId);
    });
});
