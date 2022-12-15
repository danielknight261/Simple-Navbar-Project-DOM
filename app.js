// classList - show and gets all the classes
// contain - checks the classlist for specific classes
// add - add classes
// remove - remove class
// toggler - toggle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList.contains('random'))
  // console.log(links.classList.contains('links'))
//   if (links.classList.contains("show-links")) {
//     links.classList.remove("show-links");
//   } else {
//     links.classList.add("show-links");
//   }
//as toggle is defined you can skip the 5 lines of code above by simply putting toggle removing the need to remove and add
  links.classList.toggle('show-links')
});
