!function(n){var e={};function a(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e);var t=()=>'\n      <header class="header-main">\n         <div class="header-logo">\n            <a href="#">\n               <img src="src/assets/img/logo.png">\n            </a>\n         </div>\n         <nav class="header-nav">\n            <a href="#/about/" class="nav-element">About</a>\n         </nav>\n      </header>\n   ';var r=()=>'\n      <footer class="footer-main">\n         <h4>Hecho en Chiapas con 💜 🇲🇽</h4>\n         <section class="social-media">\n            <ul>\n               <li>\n                  <a href="https://github.com/LuisHernandez019" target="_blank"><img src="src/assets/img/github.svg"></a>\n               </li>\n               <li>\n                  <a href="https://www.linkedin.com/in/luishernandez19/" target="_blank"><img src="src/assets/img/linkedin.svg"></a>\n               </li>\n               <li>\n                  <a href="https://dribbble.com/LuisHernandez19" target="_blank"><img src="src/assets/img/dribbble.svg"></a>\n               </li>\n               <li>\n                  <a href="https://twitter.com/hdz_xls" target="_blank"><img src="src/assets/img/twitter.svg"></a>\n               </li>\n            </ul>\n         </section>\n      </footer>\n   ';const s="https://rickandmortyapi.com/api/character/";var i=async n=>{const e=n?`${s}${n}`:s;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}};var c=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var o=()=>'\n      <div class="error404">\n         <img src="src/assets/img/rick404.png">\n         <h2>Page not found</h2>\n      </div>\n   ';var l=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return"/"+n};const d={"/":async()=>`\n      <div class="characters">\n         ${(await i()).results.map(n=>`\n            <article class="characters-item">\n               <a href="#/${n.id}/">\n                  <img src="${n.image}" alt="${n.name}">\n               </a>\n               <div class="portal-container">\n                  <h2 class="character-name">${n.name}</h2>\n               </div>\n            </article>\n         `).join("")}\n      </div>\n   `,"/:id":async()=>{const n=c(),e=await i(n);return`\n      <section class="character-inner">\n         <article class="character-card">\n            <img src="${e.image}" alt="${e.name}">\n            <div class="portal-container">\n               <h2 class="character-name">${e.name}</h2>\n            </div>\n         </article>\n         <article class="character-description">\n            <h3>• Episodes: <span>${e.episode.length}</span></h3>\n            <h3>• Status: <span>${e.status}</span></h3>\n            <h3>• Species: <span>${e.species}</span></h3>\n            <h3>• Gender: <span>${e.gender}</span></h3>\n            <h3>• Origin: <span>${e.origin.name}</span></h3>\n            <h3>• Last Location: <span>${e.location.name}</span></h3>\n         </article>\n      </section>\n   `},"/contact":"Contact"};var h=async()=>{const n=document.getElementById("header"),e=document.getElementById("content"),a=document.getElementById("footer");n.innerHTML=await t();let s=c(),i=await l(s),h=d[i]?d[i]:o;e.innerHTML=await h(),a.innerHTML=await r()};window.addEventListener("load",h),window.addEventListener("hashchange",h)}]);