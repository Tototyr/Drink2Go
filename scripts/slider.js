var r=document.querySelector(".carousel__page-button--before"),a=document.querySelector(".carousel__page-button--after"),c=document.querySelectorAll(".carousel__item"),i=document.querySelectorAll(".carousel__pagination-item"),n=e=>Array.from(e).findIndex(o=>o.classList.contains("carousel__item--active")),s=(e,t)=>{c[e].classList.remove("carousel__item--active"),i[e].classList.remove("carousel__pagination-item--active"),c[t].classList.add("carousel__item--active"),i[t].classList.add("carousel__pagination-item--active"),r.disabled=t===0,a.disabled=t===Array.from(c).length-1},l=()=>{let e=n(c);e>0&&s(e,e-1)},d=()=>{let e=n(c);e>=0&&e<c.length-1&&s(e,e+1)},u=({target:e})=>{let t=n(c),o=Array.from(i).indexOf(e);o!==-1&&o!==t&&s(t,o)},g=()=>{r.addEventListener("click",l),a.addEventListener("click",d),i.forEach(e=>e.addEventListener("click",u))};export{g as initializeSlider};
