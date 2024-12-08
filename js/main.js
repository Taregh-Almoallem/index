// navbar //
const menu_dropdown_mobile = document.querySelector("#menu-dropdown-mobile");
const btn_to_up = document.querySelector(".bi-caret-down-fill");
const menu_dropdown_mobile_item = document.querySelector(
  ".menu-dropdown-mobile"
);
menu_dropdown_mobile.addEventListener("click", function () {
  menu_dropdown_mobile_item.classList.toggle("menu-dropdown-mobile-show");
  btn_to_up.classList.toggle("rotate-to-up");
  console.log(btn_to_up.classList);
});
const navbar_mobile = document.querySelector(".section-nav-mobile");
const btn_open_mobile = document.querySelector(".btn-nav-mobile");
const btn_close_navbar = document.querySelector(".bi-x-circle-fill");

btn_close_navbar.addEventListener("click", function () {
  navbar_mobile.style.display = "none";
});
btn_open_mobile.addEventListener("click", function () {
  navbar_mobile.style.display = "block";
});

const rigester = document.querySelector(".rigester");
const dashboard = document.querySelector(".dashboard");

rigester.addEventListener("click", () => {
  dashboard.classList.add("dashboard-show");
  event.stopPropagation();
});

const dropdown = document.querySelector(".dropdown");
const menu_dropdown = document.querySelector("#menu-dropdown");
const btn_up = document.querySelector(".bi-caret-down-fill");

dropdown.addEventListener("click", () => {
  menu_dropdown.classList.add("menu-dropdown-show");
  btn_up.classList.add("rotare-to-up");
  event.stopPropagation();
});
document.addEventListener("click", () => {
  dashboard.classList.remove("dashboard-show");
  menu_dropdown.classList.remove("menu-dropdown-show");
  btn_up.classList.remove("rotare-to-up");
});

var swiper = new Swiper(".header .mySwiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 2000,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,
  allowTouchMove: false,
});
var swiper = new Swiper(".product-discount .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper("#product-slide2 .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    800: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".brands .mySwiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  freeMode: true,
  speed: 3000,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    800: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  },
  loopedSlides: 10,
  allowTouchMove: false,
});
function convertToPersianNumbers() {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  document.querySelectorAll(".fa-numbers").forEach((element) => {
    element.innerHTML = element.innerHTML.replace(
      /\d/g,
      (w) => persianNumbers[+w]
    );
  });
}

// اجرای تابع
convertToPersianNumbers();

// دسترسی به عنصر شمارش معکوس و تاریخ انقضا از داده‌های آن
document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");

  // بررسی وجود عنصر countdown
  if (!countdownElement) {
    return;
  }

  // استخراج زمان انقضا از data-expiration
  const expirationTime = new Date(
    countdownElement.getAttribute("data-expiration")
  ).getTime();

  // تابع تبدیل اعداد انگلیسی به فارسی
  function toPersianNumber(number) {
    return number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  }

  // شمارش معکوس
  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = expirationTime - now;

    // محاسبه روز، ساعت، دقیقه و ثانیه
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // نمایش شمارش معکوس با اعداد فارسی
    countdownElement.innerHTML = `${toPersianNumber(
      days.toString().padStart(2, "0")
    )}:${toPersianNumber(hours.toString().padStart(2, "0"))}:${toPersianNumber(
      minutes.toString().padStart(2, "0")
    )}:${toPersianNumber(seconds.toString().padStart(2, "0"))}`;

    // اگر زمان به پایان رسید، شمارش را متوقف می‌کنیم
    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "زمان تمام شد";
    }
  }, 1000);
});
const colors = document.querySelectorAll(".colors");

// افزودن رویداد کلیک به هر عنصر
colors.forEach((color) => {
  color.addEventListener("click", function () {
    colors.forEach((c) => {
      c.classList.remove("border-for-colors");
    });
    color.classList.add("border-for-colors");
  });
});

if (window.location.pathname.includes("product.html")) {
  // نمایش پیغام موفقیت
  const button_store = document.querySelector(".button-add-store");
  const trash = document.querySelector(".bi-trash3");
  const button_remove_store = document.querySelector(".button-remove-store");
  button_store.addEventListener("click", () => {
    const message = document.querySelector(".message-text-success");
    message.style.display = "block";
    button_store.style.display = "none";
    button_remove_store.style.display = "flex";
    trash.style.display = "flex";

    setTimeout(function () {
      message.style.display = "none";
    }, 3500);
  });

  trash.addEventListener("click", () => {
    const message = document.querySelector(".message-text-remove");
    message.style.display = "block";
    button_store.style.display = "block";
    button_remove_store.style.display = "none";
    trash.style.display = "none";

    setTimeout(function () {
      message.style.display = "none";
    }, 3500);
  });
  const img_product = document.querySelector(".img-product");
  const img_gallery = document.querySelectorAll(".img-gallery img");
  let currentindex = 0;
  img_gallery.forEach((x, index) => {
    x.addEventListener("click", function () {
      currentindex = index;
      changeimg();
    });
  });
  function changeimg() {
    img_product.src = img_gallery[currentindex].src;
    img_gallery.forEach((x) => {
      x.classList.remove("active-select-img");
      img_gallery[currentindex].classList.add("active-select-img");
    });
  }
  changeimg();

  // like and dislike comments
  const like_comments = document.querySelectorAll(".like-comments");
  const dislike_comments = document.querySelectorAll(".dislike-comments");

  // اضافه کردن رویداد کلیک به هر دکمه like
  like_comments.forEach((likeBtn, index) => {
    likeBtn.addEventListener("click", function () {
      // حذف کلاس از دکمه dislike مرتبط
      dislike_comments[index].classList.remove("dislike-comments-ok");
      // اضافه کردن کلاس به دکمه like مرتبط
      likeBtn.classList.add("like-comments-ok");
    });
  });

  // اضافه کردن رویداد کلیک به هر دکمه dislike
  dislike_comments.forEach((dislikeBtn, index) => {
    dislikeBtn.addEventListener("click", function () {
      // حذف کلاس از دکمه like مرتبط
      like_comments[index].classList.remove("like-comments-ok");
      // اضافه کردن کلاس به دکمه dislike مرتبط
      dislikeBtn.classList.add("dislike-comments-ok");
    });
  });

  // ارور فیلدها

  const input = document.querySelector(".subject-input-comments");
  const textarea = document.querySelector("textarea");
  const errors = document.querySelectorAll(".error");
  const submit_message = document.querySelector(".submit-message");

  function checks() {
    // بررسی اینکه آیا فیلد خالی است یا نه
    let formValid = true;

    if (input.value.trim() === "") {
      errors[0].classList.add("error-show");
      formValid = false; // فرم معتبر نیست
    } else {
      errors[0].classList.remove("error-show");
    }

    if (textarea.value.trim() === "") {
      errors[1].classList.add("error-show");
      formValid = false; // فرم معتبر نیست
    } else {
      errors[1].classList.remove("error-show");
    }

    return formValid;
  }
  let button_submit_send = document.querySelector(".button-submit");
  button_submit_send.addEventListener("click", (event) => {
    event.preventDefault(); // جلوگیری از ارسال فرم به طور پیش‌فرض

    if (checks()) {
      // اگر فرم معتبر باشد
      submit_message.style.display = "block";
      input.value = "";
      textarea.value = "";
      setTimeout(() => {
        submit_message.style.display = "none";
      }, 3500);
    } else {
    }
  });
}

// اضاف و کاهش تعداد محصول در سبد خرید
function increase() {
  const counter = document.getElementById("counter");
  counter.value = parseInt(counter.value) + 1;
}

function decrease() {
  const counter = document.getElementById("counter");
  if (parseInt(counter.value) > 1) {
    // جلوگیری از منفی شدن
    counter.value = parseInt(counter.value) - 1;
  }
}
// مدال اطلاعات حساب کاربری
function saveChanges() {
  // دریافت اطلاعات از مدال
  const fullName = document.getElementById("fullName").value;
  const nationalCode = document.getElementById("nationalCode").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const birthDate = document.getElementById("birthDate").value;
  const password = document.getElementById("password").value;
  const province = document.getElementById("province").value;
  const city = document.getElementById("city").value;

  // به‌روزرسانی فرم اصلی
  document.getElementById("fullNameMain").value = fullName;
  document.getElementById("nationalCodeMain").value = nationalCode;
  document.getElementById("phoneMain").value = phone;
  document.getElementById("emailMain").value = email;
  document.getElementById("passwordMain").value = password;
  document.getElementById("birthDateMain").value = birthDate;
  document.getElementById("provinceMain").value = province;
  document.getElementById("cityMain").value = city;

  // پیام موفقیت
  alert("اطلاعات با موفقیت به‌روزرسانی شد!");
  // بستن مدال
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("editModal")
  );
  modal.hide();
}

// داشبورد
function showDashboardSection(section) {
  // همه بخش‌ها را انتخاب کن
  const sections = document.querySelectorAll(".left-dashboard");

  // همه بخش‌ها را مخفی کن
  sections.forEach((item) => {
    item.classList.add("d-none");
  });

  // بخش مورد نظر را نمایش بده
  const targetSection = document.querySelector(`.${section}`);
  if (targetSection) {
    targetSection.classList.remove("d-none");
  }
}

// بخش آدرس
function editadderes() {
  // دریافت اطلاعات از مدال
  const addressInput = document.getElementById("addressInput").value;
  const postalCodeInput = document.getElementById("postalCodeInput").value;
  const phoneInput = document.getElementById("phoneInput").value;

  // به روز رسانی فرم آدرس
  document.querySelector(".addressInputmain").textContent = addressInput;
  document.querySelector(".postalCodeInputmain").textContent =
    "کد پستی: " + postalCodeInput;
  document.querySelector(".phoneInputmain").textContent =
    "شماره تماس: " + phoneInput;

  // بستن مدال
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("addressModal")
  );
  modal.hide();
}
const log_out = document.querySelector(".log-out");
log_out?.addEventListener("click", () => {
  const message = document.querySelector(".message-text-remove");
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 3500);
});

document.addEventListener("DOMContentLoaded", () => {
  // گرفتن تمام عناوین فیلتر
  const filterTitles = document.querySelectorAll(".filter-title");

  // افزودن رویداد کلیک به هر عنوان
  filterTitles.forEach((title) => {
    title.addEventListener("click", () => {
      // پیدا کردن محتوای مرتبط
      const content = title.nextElementSibling;

      if (content) {
        // باز و بسته کردن محتوا
        content.classList.toggle("show");

        // تغییر حالت آیکون
        title.classList.toggle("open");
      }
    });
  });
});

function openForm(evt, formName) {
  const forms = document.querySelectorAll(".form");
  const buttons = document.querySelectorAll(".tablink");

  forms.forEach((form) => {
    form.classList.remove("active");
  });

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(formName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
