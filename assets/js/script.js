document.addEventListener("DOMContentLoaded", () => {
  //theme toggle
  const htmlElement = document.documentElement

  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    htmlElement.setAttribute('data-theme', newTheme)
    toggleThemeIcon(document.getElementById('themeIcon'))
    toggleThemeIcon(document.getElementById('mobileThemeIcon'))
  }

  function toggleThemeIcon (themeIcon) {
    if (!themeIcon) return
    themeIcon.classList.toggle('ph-moon')
    themeIcon.classList.toggle('ph-sun')
  }

  const themeToggleBtn = document.getElementById('themeToggleBtn')
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme)

  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn')
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