document.addEventListener('DOMContentLoaded', function () {
  //*** Account Menu ***//

  var accountDropdownTrigger = document.querySelector('#account-menu');
  var accountMenu = document.querySelector('#account-dropdown-menu');

  const handleAccountDropdown = (show, element) => {
    if (show) {
      element.classList.remove('invisible');
      element.classList.remove('opacity-0');
      element.classList.add('opacity-100');
      element.classList.add('z-100');
    } else {
      element.classList.add('opacity-0');
      element.classList.remove('opacity-100');
      setTimeout(() => {
        element.classList.add('invisible');
        element.classList.remove('z-100');
      }, 1000);
    }
  };

  // Account Menu Event listeners
  accountDropdownTrigger.addEventListener('mouseenter', () => handleAccountDropdown(true, accountMenu));
  accountDropdownTrigger.addEventListener('mouseleave', () => handleAccountDropdown(false, accountMenu));

  // 🌟 Mobile: Tap/Click Events
  accountDropdownTrigger.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevents click from closing immediately
    handleAccountDropdown(true, accountMenu);
  });

  // 🌟 Close when tapping outside (Mobile/Desktop)
  document.addEventListener('click', function (event) {
    if (!accountDropdownTrigger.contains(event.target) && !accountMenu.contains(event.target)) {
      handleAccountDropdown(false, accountMenu);
    }
  });

  //*** Nav Menu ***//

  var navDropdownTrigger = document.querySelector('#nav-menu');
  var navDropdownMenu = document.querySelector('#nav-dropdown-menu');
  var navDropdownContent = document.querySelector('#nav-dropdown-content');

  const navMenuClose = () => {
    navDropdownMenu.classList.add('invisible');
    navDropdownMenu.classList.add('opacity-0');
    navDropdownMenu.classList.remove('opacity-100');
  };

  const hndleNavClick = () => {
    navDropdownMenu.classList.toggle('invisible');
    navDropdownMenu.classList.toggle('opacity-0');
    navDropdownMenu.classList.toggle('opacity-100');
  };

  // Navigation Menu Event listeners
  navDropdownTrigger.addEventListener('click', () => hndleNavClick());
  navDropdownTrigger.addEventListener('mouseleave', () => setTimeout(() => navMenuClose(), 2500));
  navDropdownContent.addEventListener('mouseleave', () => setTimeout(() => navMenuClose(), 1500));
});
