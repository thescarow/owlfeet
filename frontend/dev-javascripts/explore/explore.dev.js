let exploreMainContainer = document.getElementById("exploreMainContainer")
let openMainSearchBtn = document.getElementById("openMainSearchBtn")
;(async function () {
  if (!IS_INIT_EXPLORE_MODULE) {
    initialiseEventForExploreModule()
    IS_INIT_EXPLORE_MODULE = true
  }
})()
function initialiseEventForExploreModule() {
  if (exploreMainContainer) {
    if (openMainSearchBtn) {
      openMainSearchBtn.addEventListener("click", async () => {
        const { createMainSearchSectionModal } = await import(
          "./js/createMainSearchSectionModal.dev"
        )
        createMainSearchSectionModal()
      })
    }
  }
}
