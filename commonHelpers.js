import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const m=document.querySelector(".form"),f=document.querySelector(".gallery");m.addEventListener("submit",p);function p(o){o.preventDefault();const r=o.target.elements.query.value;if(r.trim()==="")return c.error({message:"Please enter a search query.",position:"topRight"});d(r),o.target.reset()}function d(o){const r="https://pixabay.com/api/",l="?key=42272316-28c697ce0580eb37211383c7d",n=`&q=${o}`,e="&image_type=photo",t="&orientation=horizontal",s="&safesearch=true",a=r+l+n+e+t+s;return fetch(a).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i&&i.hits&&i.hits.length>0?g(i):c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(i=>{console.error("Error:",i)})}function g(o){const r=o.hits.map(h).join("");f.innerHTML=r}function h({largeImageURL:o,webformatURL:r,tags:l,likes:n,views:e,comments:t,downloads:s}){return`<li class="gallery-item" >
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${r}"
        data-source="${o}"
        alt="${l}"
      />
    </a>
    <div class="item-text">
      <ul>Likes<li>${n}</li></ul>
      <ul>Views<li>${e}</li></ul>
      <ul>Comments<li>${t}</li></ul>
      <ul>Downloads<li>${s}</li></ul>
    </div>
  </li>`}new u(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
