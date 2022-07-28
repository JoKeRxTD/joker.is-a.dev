// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     console.log("Looks like someone is trying to access something!");

//     alert("Hmm.... What's going on here? 🤔");

//     return false;
//   }

//   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//     console.log("Looks like someone is trying to access something!");

//     alert("Hmm.... What's going on here? 🤔");

//     return false;
//   }

//   if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
//     console.log("Looks like someone is trying to access something!");

//     alert("Hmm.... What's going on here? 🤔");

//     return false;
//   }

//   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//     console.log("Looks like someone is trying to access something!");

//     alert("Hmm.... What's going on here? 🤔");

//     return false;
//   }

//   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//     console.log("Looks like someone is trying to access something!");

//     alert("Hmm.... What's going on here? 🤔");

//     return false;
//   }
// };

// document.addEventListener("contextmenu", (e) => e.preventDefault());

// document.addEventListener("developertools", (e) => e.preventDefault());

// document.addEventListener("inspect_element", (e) => e.preventDefault());

const bodyBase = 'text-base dark:bg-[#0D1B2A] dark:text-gray-100'

export const basic = {
  html: 'scrollbars-dark',
  body: `bg-gray-50 ${bodyBase}`,
  lightBorder: 'border-gray-100',
  lightBg: 'bg-gray-100',
  aside: 'bg-gray-800',
  asideBrand: 'bg-gray-900 text-white',
  asideMenuCloseLg: 'text-white',
  asideMenuLabel: 'text-gray-400',
  asideMenuItem: 'hover:bg-gray-600 hover:bg-opacity-50',
  asideMenuItemActive: 'font-bold text-white',
  asideMenuItemInactive: 'text-gray-300',
  asideSubmenuList: 'bg-gray-700 bg-opacity-50',
  navBarItemLabel: 'text-black',
  navBarItemLabelHover: 'hover:text-blue-500',
  navBarItemLabelActiveColor: 'text-blue-600',
  navBarMenuListUpperLabel: 'bg-gray-100',
  tableTr: 'lg:hover:bg-gray-100',
  tableTrOdd: 'lg:bg-gray-50',
  overlay: 'from-gray-700 via-gray-900 to-gray-700'
}

export const white = {
  html: 'scrollbars-light',
  body: `bg-white ${bodyBase}`,
  lightBorder: 'border-gray-100',
  lightBg: 'bg-gray-100',
  aside: 'bg-white border-r border-gray-100',
  asideBrand: '',
  asideMenuCloseLg: '',
  asideMenuLabel: 'dark:text-gray-400',
  asideMenuItem: 'text-blue-600 hover:text-black dark:text-white',
  asideMenuItemActive: 'font-bold text-black dark:text-white',
  asideMenuItemInactive: '',
  asideSubmenuList: 'bg-gray-50',
  navBarItemLabel: 'text-blue-600',
  navBarItemLabelHover: 'hover:text-black',
  navBarItemLabelActiveColor: 'text-black',
  navBarMenuListUpperLabel: 'bg-gray-50',
  tableTr: 'lg:hover:bg-gray-100',
  tableTrOdd: 'lg:bg-gray-50',
  overlay: 'from-white via-gray-100 to-white'
}

// Variables

const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

// Functions

const toggleMode = () => {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};

// Call toggleMode on page load

toggleMode();

// Event listeners

checkbox.addEventListener("click", toggleMode);