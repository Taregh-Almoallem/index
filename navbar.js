// const menu_dropdown_mobile = document.querySelector("#menu-dropdown-mobile");
// const btn_to_up = document.querySelector(".bi-caret-down-fill");
// const menu_dropdown_mobile_item = document.querySelector(
//   ".menu-dropdown-mobile"
// );
// menu_dropdown_mobile.addEventListener("click", function () {
//   menu_dropdown_mobile_item.classList.toggle("menu-dropdown-mobile-show");
//   btn_to_up.classList.toggle("rotate-to-up");
//   console.log(btn_to_up.classList);
// });
// const navbar_mobile = document.querySelector(".section-nav-mobile");
// const btn_open_mobile = document.querySelector(".btn-nav-mobile");
// const btn_close_navbar = document.querySelector(".bi-x-circle-fill");

// btn_close_navbar.addEventListener("click", function () {
//   navbar_mobile.style.display = "none";
// });
// btn_open_mobile.addEventListener("click", function () {
//   navbar_mobile.style.display = "block";
// });

// const rigester = document.querySelector(".rigester");
// const dashboard = document.querySelector(".dashboard");

// rigester.addEventListener("click", () => {
//   dashboard.classList.add("dashboard-show");
//   event.stopPropagation();
// });

// const dropdown = document.querySelector(".dropdown");
// const menu_dropdown = document.querySelector("#menu-dropdown");
// const btn_up = document.querySelector(".bi-caret-down-fill");

// dropdown.addEventListener("click", () => {
//   menu_dropdown.classList.add("menu-dropdown-show");
//   btn_up.classList.add("rotare-to-up");
//   event.stopPropagation();
// });
// document.addEventListener("click", () => {
//   dashboard.classList.remove("dashboard-show");
//   menu_dropdown.classList.remove("menu-dropdown-show");
//   btn_up.classList.remove("rotare-to-up");
// });

var tooltip = new bootstrap.Tooltip(document.querySelector(".btn"), {
  placement: "top", // مکان Tooltip (بالا، پایین، چپ، راست)
  trigger: "hover", // نحوه فعال‌سازی (hover، focus، click)
  delay: { show: 500, hide: 200 }, // تأخیر نمایش و مخفی‌شدن
});

var popover = new bootstrap.Popover(document.querySelector(".btn-success"), {
  placement: "top", // مکان نمایش
  trigger: "hover", // نحوه فعال‌سازی
  html: true, // پشتیبانی از HTML داخل محتوا
  content: "<b>این یک متن با HTML است!</b>", // محتوای HTML
});
