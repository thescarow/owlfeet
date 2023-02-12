const multiStepForm = [...document.querySelectorAll(".multi-step-form")]

multiStepForm.forEach(form=>{
  const formSteps = [...form.querySelectorAll(".form-step")]
  let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
  })
  
  if (currentStep < 0) {
    currentStep = 0
    showCurrentStep()
  }
  
  form.addEventListener("click", e => {
    let incrementor
    if (e.target.matches("[data-next]")) {
      incrementor = 1
    } else if (e.target.matches("[data-previous]")) {
      incrementor = -1
    }
  
    if (incrementor == null) return
  
    const inputs = [...formSteps[currentStep].querySelectorAll("input")]
    const allValid = inputs.every(input => input.reportValidity())
    if (allValid) {
      currentStep += incrementor
      showCurrentStep()
    }
  })
  
  formSteps.forEach(step => {
    step.addEventListener("animationend", e => {
      formSteps[currentStep].classList.remove("hide")
      e.target.classList.toggle("hide", !e.target.classList.contains("active"))
    })
  })
  
  function showCurrentStep() {
    formSteps.forEach((step, index) => {
      step.classList.toggle("active", index === currentStep)
    })
  }
  
  
  


})




const newsBtn = document.getElementsByClassName('news-btn')[0]
const newsContainer = document.getElementById('news-container')
const trendBtn = document.getElementsByClassName('trend-btn')[0]
const trendContainer = document.getElementById('trend-container')


newsBtn.addEventListener('click' , ()=>{
newsContainer.classList.add('active')
trendContainer.classList.remove('active')
})

trendBtn.addEventListener('click' , ()=>{
trendContainer.classList.add('active')
newsContainer.classList.remove('active')

})



const maxImages = 3;

const images = [...document.getElementsByClassName('images')]

images.forEach(images=>{

images.addEventListener('change' , (e)=>{

  if(e.target.files.length > maxImages) {
    
    alert(`you can upload maximum ${maxImages} files `)
   e.target.form[9].disabled = true;

  }
  else{
    e.target.form[9].disabled = false;
  }

})

})
// also check for the mime type 


const maxVideos = 2;

const videos = [...document.getElementsByClassName('videos')]

videos.forEach(videos=>{

videos.addEventListener('change' , (e)=>{

  if(e.target.files.length > maxVideos) {
    
    alert(`you can upload maximum ${maxVideos} files `)
   e.target.form[9].disabled = true;

  }
  else{
    e.target.form[9].disabled = false;
  }

})

})


// and also check for the size of the file 