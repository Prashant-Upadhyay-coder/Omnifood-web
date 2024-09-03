const Myname = "raj Upadhyay";
const h1 = document.querySelector(".heading-primary");

const yearupdate = document.querySelector(".year");
yearupdate.textContent = new Date().getFullYear(); //update copyright year

const btnnav = document.querySelector(".btn-mobile-nav");
const headEr = document.querySelector(".header");
const mainnav = document.querySelector(".main-nav");
btnnav.addEventListener("click", function () {
  headEr.classList.toggle("nav-open");
  mainnav.classList.add("trans");
});

//smooth scrolling animation all for safari,
const alllinks = document.querySelectorAll("a:link");
alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href != "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link")) {
      headEr.classList.remove("nav-open");
      mainnav.classList.remove("trans");
    }
  });
});

//sticky nav
const sectionhero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }else if(ent.isIntersecting === true){
        document.body.classList.remove("sticky");
    }
  },

  {
    root: null,
    threshold: 0,
    rootMargin:'-80px',
  }
);
obs.observe(sectionhero);





function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
