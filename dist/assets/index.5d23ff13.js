(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function a(s,t){let i=document.getElementById(s).getElementsByClassName("container")[0],n=t;for(let e=0;e<n.length;e++){let o=document.createElement("div");o.className="card hidden",o.innerHTML='<img src= "'+n[e][1]+'">',n[e].length>2&&(o.innerHTML='<a href="'+n[e][2]+'" target="_blank"><img src= "'+n[e][1]+'"></a>'),o.style.transitionDelay=200*(e+1)+"ms",i.appendChild(o)}}const d=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting?t.target.classList.add("show"):t.target.classList.remove("show")})});function c(){document.addEventListener("DOMContentLoaded",()=>{let s=0,t=0,i=document.getElementById("cursor");document.onmousemove=r=>{s=r.pageX,t=r.pageY};let n=12,e=0,o=0;function l(){requestAnimationFrame(l),e+=(s-e)/n,o+=(t-o)/n,i.style.top=o-15+"px",i.style.left=e-15+"px"}l()})}document.querySelector("#app").innerHTML=`
  <div>
  <section>
  <h1 class = "hidden">Hello, i am Abdulmohsen.</h1>
</section>

<section id="languages">
  <h2 class = "hidden">Languages</h2>
  <div class="container"></div>
</section>

<section id="related">
  <h2 class="hidden">Related sites</h2>
  <div class="container"></div>
</section>

<footer>Links to be updated.</footer>

<div class="footimg"></div>
  </div>
`;let g=[["Python","./logos/Python-logo.png"],["JS","./logos/JavaScript-logo.png"],["Java","./logos/java-logo.png"],["SQL","./logos/mysql.png"]],u=[["CV","./logos/cv.png",""],["Github","./logos/git.png","https://github.com/AbdulmohsenA"],["LinkedIn","./logos/linin.png","https://linkedin.com/"],["Kaggle","./logos/kaggle.png","https://www.kaggle.com/abdulmohsena/"]];a("languages",g);a("related",u);window.onload=s=>{document.querySelectorAll(".hidden").forEach(i=>d.observe(i))};c();
