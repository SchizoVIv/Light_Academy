(()=>{!function(){let e=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),t=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor),s=document.querySelector(".scrollbar");e||t||(s.innerHTML="You need Webkit browser to run this code")}(),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href").slice(1),s=document.getElementById(t);window.scrollTo({top:s.offsetTop,behavior:"smooth"})}))})),document.querySelectorAll(".slider__nav").forEach((function(e,t){e.addEventListener("click",(function(){document.querySelectorAll(".reviews__images").forEach((function(e,s){s===t?(e.classList.add("reviews__images_on"),e.classList.remove("reviews__images_off")):(e.classList.add("reviews__images_off"),e.classList.remove("reviews__images_on"))}))}))}));const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");e.addEventListener("click",(function(){const e=document.querySelectorAll(".reviews__images");document.querySelectorAll(".swiper-slide").forEach(((t,s)=>{t.classList.contains("swiper-slide-prev")&&e.forEach(((e,t)=>{s===t?(console.log(`index ${s}  i ${t}`),e.classList.remove("reviews__images_off"),e.classList.add("reviews__images_on")):e.classList.remove("reviews__images_on")}))}))})),t.addEventListener("click",(function(){const e=document.querySelectorAll(".reviews__images");document.querySelectorAll(".swiper-slide").forEach(((t,s)=>{t.classList.contains("swiper-slide-next")&&e.forEach(((e,t)=>{s===t?(console.log(`index ${s}  i ${t}`),e.classList.remove("reviews__images_off"),e.classList.add("reviews__images_on")):e.classList.remove("reviews__images_on")}))}))}));const s=document.querySelector("#menu-toggle"),o=document.querySelector(".header__button-container"),c=document.querySelector(".header__overflow"),r=document.querySelector(".header__nav-box"),a=document.querySelector(".header__contacts");function i(){const e=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${e}px`,document.body.style.width="100%"}function n(){const e=parseInt(document.body.style.top,10);document.body.style.position="",document.body.style.top="",document.body.style.width="",window.scrollTo(0,Math.abs(e))}document.querySelector(".header__nav-box").addEventListener("click",(function(e){if("A"===e.target.tagName){const t=e.target.getAttribute("href");if("#"===t.charAt(0)){const o=document.querySelector(t);o&&(n(),o.scrollIntoView({behavior:"smooth"}),s.checked=!1,c.classList.add("overflow_hidden"),r.classList.remove("header__nav-box_active"),a.classList.remove("header__contacts_active"),e.preventDefault())}}}));const d=document.querySelector(".popup__button-close"),l=document.querySelector(".popup__overflow"),_=(document.querySelector(".popup__box"),document.querySelector(".popup")),u=document.querySelector(".popup__title"),m=document.querySelector(".academy__button"),v=document.querySelector(".advantages__button"),h=document.querySelector(".coaching__button"),L=document.querySelector(".coach__button"),p=document.querySelector(".header"),f=document.querySelector(".header__logo"),q=document.querySelector(".requests__disk"),y=document.querySelector(".requests__card:last-child");let g=0;const S=150;let w=0;const E=()=>window.pageXOffset||document.documentElement.scrollTop,b=()=>p.classList.contains("header_hide");let k=0,A=0,x=window.innerWidth;function $(){w=window.innerWidth}function T(e,t){n(),e.classList.add("popup__hidden"),t.classList.remove("overflow-active")}function C(e,t,s){i(),e.classList.remove("popup__hidden"),t.classList.add("overflow-active"),s.classList.contains("advantages__wheel")||s.classList.contains("advantages__button")||s.classList.contains("advantages__wheel-content")||s.classList.contains("advantages__wheel-inner")?u.textContent="Заполни форму и получи подарок!":u.textContent="Запишитесь на консультацию"}document.addEventListener("mousemove",(function(e){k=e.clientX,A=e.clientY,A<80&&E()>S&&b()&&x>991&&(p.classList.remove("header_hide"),p.classList.add("header_border"),f.classList.add("header__logo_hide")),A>80&&E()>S&&!b()&&x>991&&(p.classList.add("header_hide"),f.classList.add("header__logo_hide"),p.classList.remove("header_border"))})),window.addEventListener("scroll",(()=>{E()<g&&b()&&x<992&&E()>301&&g>301&&(p.classList.remove("header_hide"),p.classList.remove("header_border"),f.classList.add("header__logo_hide")),E()<g&&!b()&&x<992&&E()<301&&g<301&&(p.classList.remove("header_hide"),p.classList.remove("header_border"),f.classList.remove("header__logo_hide")),E()<g&&E()<S&&g<201&&b()&&(p.classList.remove("header_hide"),f.classList.remove("header__logo_hide"),p.classList.remove("header_border")),E()>g&&!b()&&E()>S&&(p.classList.add("header_hide"),f.classList.add("header__logo_hide"),p.classList.remove("header_border")),x>1700&&E()>2099&&E()<2700&&(q.classList.add("requests__disk_anim"),y.classList.add("requests__card_anim")),x<1701&&E()>1920&&E()<2450&&(q.classList.add("requests__disk_anim"),y.classList.add("requests__card_anim")),x<1500&&E()>1720&&E()<2120&&(q.classList.add("requests__disk_anim"),y.classList.add("requests__card_anim")),x<1200&&E()>1600&&E()<1800&&(q.classList.add("requests__disk_anim"),y.classList.add("requests__card_anim")),x<712&&E()>2200&&E()<2400&&(q.classList.add("requests__disk_anim"),y.classList.add("requests__card_anim")),x<500&&E()>2350&&E()<2500&&(q.classList.remove("requests__disk_anim"),y.classList.remove("requests__card_anim")),g=E()})),window.addEventListener("resize",$),$(),o.addEventListener("click",(function(){s.checked?(n(),c.classList.add("overflow_hidden"),r.classList.remove("header__nav-box_active"),a.classList.remove("header__contacts_active")):(c.classList.remove("overflow_hidden"),r.classList.add("header__nav-box_active"),a.classList.add("header__contacts_active"),i())})),d.addEventListener("click",(()=>{T(_,l)})),l.addEventListener("click",(()=>{T(_,l)})),m.addEventListener("click",(e=>{C(_,l,e.target)})),v.addEventListener("click",(e=>{C(_,l,e.target)})),h.addEventListener("click",(e=>{C(_,l,e.target)})),L.addEventListener("click",(e=>{C(_,l,e.target)}));const I=document.querySelector(".popup-img1__button-close"),W=document.querySelector(".popup-img1__overflow"),Y=(document.querySelector(".popup-img1__box"),document.querySelector(".popup-img1")),D=document.querySelector(".founder__link");I.addEventListener("click",(()=>{T(Y,W)})),W.addEventListener("click",(()=>{T(Y,W)})),D.addEventListener("click",(()=>{C(Y,W)}));const M=document.querySelector(".popup-img2__button-close"),X=document.querySelector(".popup-img2__overflow"),z=(document.querySelector(".popup-img2__box"),document.querySelector(".popup-img2")),B=document.querySelector(".format__certificate");function G(){const e=document.querySelector("#name"),t=document.querySelector("#phone"),s=document.querySelector("#email"),o=document.querySelector(".appointment__button"),c=document.querySelector("#option");""===e.value.trim()||""===t.value.trim()||""===s.value.trim()||""===c.value.trim()?o.disabled=!0:o.disabled=!1}M.addEventListener("click",(()=>{T(z,X)})),X.addEventListener("click",(()=>{T(z,X)})),B.addEventListener("click",(()=>{C(z,X)})),document.querySelectorAll(".faq__question").forEach(((e,t)=>{e.addEventListener("click",(()=>{const e=document.querySelectorAll(".faq__answer-text"),s=document.querySelectorAll(".faq__question-text");e.forEach(((e,s)=>{t===s&&e.classList.toggle("faq__answer-text_active")})),s.forEach(((e,s)=>{t===s&&e.classList.toggle("hidden-after")}))}))}));const H=document.querySelector("#name"),N=document.querySelector("#phone"),O=document.querySelector("#email"),V=document.querySelector("#option");H.addEventListener("input",G),N.addEventListener("input",G),O.addEventListener("input",G),V.addEventListener("input",G),G(),document.querySelectorAll(".services__item-text").forEach(((e,t)=>{x>992?(e.addEventListener("mouseover",(()=>{document.querySelectorAll(".services__item-tooltip").forEach(((e,s)=>{s===t&&e.classList.add("services__item-tooltip_active")}))})),e.addEventListener("mouseout",(()=>{document.querySelectorAll(".services__item-tooltip").forEach(((e,s)=>{s===t&&e.classList.remove("services__item-tooltip_active")}))}))):e.addEventListener("click",(()=>{document.querySelectorAll(".services__item-tooltip").forEach(((e,s)=>{s!==t||e.classList.contains("services__item-tooltip_active")?e.classList.contains("services__item-tooltip_active")&&e.classList.remove("services__item-tooltip_active"):e.classList.add("services__item-tooltip_active")}))}))})),(e=>{const t=document.querySelectorAll(".advantages__wheel-inner");let s=-60;for(let e of t)e.style.transform=`rotate(${s}deg)`,s+=10})(),(e=>{const t=document.querySelectorAll(".advantages__wheel-content");let s=0;for(let e of t)e.style.transform=`rotate(${s}deg)`,s+=5})();const j=document.querySelectorAll(".teachers__card");function F(e,t,s,o,c){return s===t&&0===s||s===t&&2===s?e.classList.add(o):s===t&&1===s||s===t&&3===s?e.classList.add(c):void 0}x<993&&j.forEach(((e,t)=>{e.addEventListener("click",(()=>{const e=document.querySelectorAll(".teachers__foto"),s=document.querySelectorAll(".teachers__content");e.forEach(((e,s)=>{if(e.classList.contains("teachers__card_open-left")||e.classList.contains("teachers__card_open-right")){if(e.classList.contains("teachers__card_open-left")||e.classList.contains("teachers__card_open-right")){if(e.classList.contains("teachers__card_open-left"))return e.classList.remove("teachers__card_open-left");if(e.classList.contains("teachers__card_open-right"))return e.classList.remove("teachers__card_open-right")}}else F(e,s,t,"teachers__card_open-left","teachers__card_open-right")})),s.forEach(((e,s)=>{if(e.classList.contains("teachers__card_open-left")||e.classList.contains("teachers__card_open-right")){if(e.classList.contains("teachers__card_open-left")||e.classList.contains("teachers__card_open-right")){if(e.classList.contains("teachers__card_open-left"))return e.classList.remove("teachers__card_open-left");if(e.classList.contains("teachers__card_open-right"))return e.classList.remove("teachers__card_open-right")}}else F(e,s,t,"teachers__card_open-left","teachers__card_open-right")}))}))}))})();