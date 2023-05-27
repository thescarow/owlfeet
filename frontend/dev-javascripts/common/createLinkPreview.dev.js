import "./css/createLinkPreview.dev.css"
export function createLinkPreview(linkPreviewData) {
  let linkPreview = document.createElement("div")
  linkPreview.classList.add("link-preview")
  linkPreview.innerHTML = ` 
    <a href="#" class="link-preview__link">
        <h3 class='link-preview__title'>
        </h3>
      
        <div class='link-preview__pic link-preview__pic--img'>
        </div>
  
         <p class='link-preview__desc'>
         </p>
    </a>
  `
  linkPreview.getElementsByClassName("link-preview__link")[0].href = "#"
  // linkPreviewData.url || "#"

  let linkPreviewPic =
    linkPreview.getElementsByClassName("link-preview__pic")[0]

  let linkPreviewTitle = linkPreview.getElementsByClassName(
    "link-preview__title"
  )[0]

  let linkPreviewDesc =
    linkPreview.getElementsByClassName("link-preview__desc")[0]

  if (linkPreviewData.mediaType === "image") {
    linkPreviewTitle.textContent = "Image"
    linkPreviewPic.classList.add("link-preview__pic--svg")
    linkPreviewPic.innerHTML = `${svg_messageLinkPreviewImageIcon}`
    linkPreviewDesc.textContent = ""
  } else if (linkPreviewData.mediaType === "audio") {
    linkPreviewTitle.textContent = "Audio"
    linkPreviewPic.classList.add("link-preview__pic--svg")
    linkPreviewPic.innerHTML = `${svg_messageLinkPreviewAudioIcon}`

    linkPreviewDesc.textContent = ""
  } else if (linkPreviewData.mediaType === "video") {
    linkPreviewTitle.textContent = "Video"
    linkPreviewPic.classList.add("link-preview__pic--svg")
    linkPreviewPic.innerHTML = `${svg_messageLinkPreviewVideoIcon}`
    linkPreviewDesc.textContent = ""
  } else if (linkPreviewData.mediaType === "application") {
    linkPreviewTitle.textContent = "Application"
    linkPreviewPic.classList.add("link-preview__pic--svg")
    linkPreviewPic.innerHTML = `${svg_messageLinkPreviewApplicationIcon}`
    linkPreviewDesc.textContent = ""
  } else {
    if (
      linkPreviewData.hasOwnProperty("siteName") &&
      linkPreviewData.siteName &&
      linkPreviewData.siteName !== ""
    ) {
      linkPreviewTitle.insertAdjacentHTML(
        "afterend",
        `  
          <div class='link-preview__site'>
                 <div class='link-preview__site-icon'>
                 </div>
                 <div class='link-preview__site-name'>
                </div>
        </div>
      `
      )
      linkPreview.getElementsByClassName(
        "link-preview__site-name"
      )[0].textContent = linkPreviewData.siteName

      if (
        linkPreviewData.hasOwnProperty("favicons") &&
        linkPreviewData.favicons.length > 0
      ) {
        linkPreview
          .getElementsByClassName("link-preview__site-icon")[0]
          .classList.add("link-preview__site-icon--img")
        linkPreview.getElementsByClassName(
          "link-preview__site-icon"
        )[0].innerHTML = `<img src="${linkPreviewData.favicons[0]}" alt="Website logo">`
      } else {
        linkPreview
          .getElementsByClassName("link-preview__site-icon")[0]
          .classList.add("link-preview__site-icon--svg")
        linkPreview.getElementsByClassName(
          "link-preview__site-icon"
        )[0].innerHTML = `${svg_messageLinkPreviewWebsiteIcon}`
      }
    }
    linkPreview.getElementsByClassName("link-preview__title")[0].textContent =
      linkPreviewData.title || ""

    if (linkPreviewData.images.length > 0) {
      linkPreviewPic.classList.add("link-preview__pic--img")
      linkPreviewPic.innerHTML = `<img src="${linkPreviewData.images[0]}" alt="Image preview">`
    } else {
      linkPreviewPic.classList.add("link-preview__pic--svg")
      linkPreviewPic.innerHTML = `${svg_messageLinkPreviewWebsiteIcon}`
    }

    linkPreview.getElementsByClassName("link-preview__desc")[0].textContent =
      linkPreviewData.description || ""
  }
  return linkPreview
}
