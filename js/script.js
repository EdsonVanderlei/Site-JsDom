function InitTab() {
  const tablist = document.querySelectorAll(".jslist li");
  console.log(tablist);
  const tababout = document.querySelectorAll(".jsabout div");
  console.log(tababout);
  tababout[0].classList.add("active");
  tablist[0].classList.add("active");
  if (tablist.length && tababout.length) {
    function activetab(index) {
      tablist.forEach((item) => {
        item.classList.remove("active");
      });
      tablist[index].classList.add("active");
      tababout.forEach((tab) => {
        tab.classList.remove("active");
      });
      tababout[index].classList.add("active");
    }

    tablist.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        activetab(index);
      });
    });
  }
}
InitTab();

function InitAccordion() {
  const accordion = document.querySelectorAll(".js-accordion dt");
  if (accordion.length) {
    function active() {
      console.log(this.nextElementSibling);
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    accordion.forEach((item) => {
      item.addEventListener("click", active);
    });
  }
}
InitAccordion();

function scroll() {
  const scroll = document.querySelectorAll('.menu a[href^= "#"]');
  if (scroll.length) {
    function ScrollAc(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const element = document.querySelector(href);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    scroll.forEach((item) => {
      item.addEventListener("click", ScrollAc);
    });
  }
}
scroll();
const show = document.querySelectorAll(".js-content");
const height = window.innerHeight * 0.6;

function scrollanima() {
  show.forEach((item) => {
    const showtop = item.getBoundingClientRect().top;
    const top = showtop - height < 0;
    if (top) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollanima);
