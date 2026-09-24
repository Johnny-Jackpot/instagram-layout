document.addEventListener("DOMContentLoaded", () => {
  //theme toggle
  const themeToggleBtn = document.getElementById('themeToggleBtn')
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn')
  const themeIcon = document.getElementById('themeIcon')
  const mobileThemeIcon = document.getElementById('mobileThemeIcon')
  const htmlElement = document.documentElement

  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    htmlElement.setAttribute('data-theme', newTheme)
    toggleThemeIcon(themeIcon)
    toggleThemeIcon(mobileThemeIcon)
  }

  function toggleThemeIcon (themeIcon) {
    if (!themeIcon) return
    themeIcon.classList.toggle('ph-moon')
    themeIcon.classList.toggle('ph-sun')
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme)
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme)

  //sidebar active state
  function addNavBtnListener(buttons) {
    buttons.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault()
        buttons.forEach(navButton => navButton.classList.remove('active'))
        item.classList.add('active')
      })
    })
  }
  addNavBtnListener(document.querySelectorAll('.nav-menu .nav-item'))
  addNavBtnListener(document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn'))
});