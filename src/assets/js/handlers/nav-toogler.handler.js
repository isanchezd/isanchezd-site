const $click = () => {
  const navbarToggler = document.body.querySelector(".navbar-toggler");

  if (window.getComputedStyle(navbarToggler).display !== "none") {
    navbarToggler.click();
  }
}

const NavTooglerHandler = () => {
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener("click", $click);
    });
}

export { NavTooglerHandler }
