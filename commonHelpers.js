import{i as l}from"./assets/vendor-bee2f3af.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const u=document.querySelector(".form");document.querySelector(".button");u.addEventListener("submit",e=>{e.preventDefault();const s=e.target.elements.query.value;f(s).then(n=>{d(n)}),e.target.reset()});function f(e){const s="https://pixabay.com/api/",n="?key=42272316-28c697ce0580eb37211383c7d",i=`&q=${e}`,t="&image_type=photo",r="&orientation=horizontal",o="&safesearch=true",a=s+n+i+t+r+o;return e.trim()===""?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):fetch(a).then(c=>c.json())}function m(e){return`<li class="gallery-item" >
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}"
    />
  </a>
  <sapn>likes ${e.likes}</span>
  <sapn>views ${e.views}</span>
  <sapn>comments ${e.comments}</span>
  <sapn>downloads ${e.downloads}</span>
</li>`}function d(e){const s=m(e);refs.infoEl.innerHTML=s}
//# sourceMappingURL=commonHelpers.js.map
