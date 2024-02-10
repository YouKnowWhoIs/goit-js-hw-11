import{i as c,S as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),y=document.querySelector(".gallery"),a=document.querySelector(".loader");f.addEventListener("submit",g);function g(o){o.preventDefault();const r=o.target.elements.query.value;if(r.trim()==="")return c.error({message:"Please enter a search query.",position:"topRight"});a.style.display="inline-block",p(r),o.target.reset()}function p(o){const r="https://pixabay.com/api/",n="?key=42272316-28c697ce0580eb37211383c7d",s=`&q=${o}`,e="&image_type=photo",t="&orientation=horizontal",l="&safesearch=true",u=r+n+s+e+t+l;return fetch(u).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i&&i.hits&&i.hits.length>0?d(i):c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(i=>{console.error("Error:",i)}).finally(()=>{a.style.display="none"})}function d(o){const r=o.hits.map(h).join("");y.innerHTML=r,document.querySelectorAll(".gallery-link").forEach(e=>{e.setAttribute("href",e.querySelector("img").getAttribute("src"))}),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function h({largeImageURL:o,webformatURL:r,tags:n,likes:s,views:e,comments:t,downloads:l}){return`<li class="gallery-item" >
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${r}"
        alt="${n}"
      />
    </a>
    <div class="item-text">
      <ul>Likes<li>${s}</li></ul>
      <ul>Views<li>${e}</li></ul>
      <ul>Comments<li>${t}</li></ul>
      <ul>Downloads<li>${l}</li></ul>
    </div>
  </li>`}
//# sourceMappingURL=commonHelpers.js.map
