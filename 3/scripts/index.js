var r=document.querySelector(".navigation"),u=document.querySelector(".navigation__toggle"),m=()=>{r.classList.toggle("navigation--closed"),r.classList.toggle("navigation--open")},s=()=>{u.addEventListener("click",m)};var l=document.querySelector(".carousel__page-button--before"),d=document.querySelector(".carousel__page-button--after"),o=document.querySelectorAll(".carousel__item"),n=document.querySelectorAll(".carousel__pagination-item"),c=e=>Array.from(e).findIndex(i=>i.classList.contains("carousel__item--active")),a=(e,t)=>{o[e].classList.remove("carousel__item--active"),n[e].classList.remove("carousel__pagination-item--active"),o[t].classList.add("carousel__item--active"),n[t].classList.add("carousel__pagination-item--active"),l.disabled=t===0,d.disabled=t===Array.from(o).length-1},_=()=>{let e=c(o);e>0&&a(e,e-1)},v=()=>{let e=c(o);e>=0&&e<o.length-1&&a(e,e+1)},f=({target:e})=>{let t=c(o),i=Array.from(n).indexOf(e);i!==-1&&i!==t&&a(t,i)},g=()=>{l.addEventListener("click",_),d.addEventListener("click",v),n.forEach(e=>e.addEventListener("click",f))};s();g();