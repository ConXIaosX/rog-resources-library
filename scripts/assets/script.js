/* StorySlider */ document.addEventListener('DOMContentLoaded',()=>{const e=document.querySelector('.StorySlider__Wrapper'),t=document.querySelectorAll('.StorySlider__Widget'),n=t.length,o=2000;let r=0,i=!1;const s=t[0].cloneNode(!0);e.appendChild(s);function l(){if(i)return;i=!0,r++,e.style.transition='transform 0.5s ease-in-out',e.style.transform=`translate3d(-${r*100}%, 0, 0)`,r===n?setTimeout(()=>{e.style.transition='none',e.style.transform='translate3d(0, 0, 0)',r=0,requestAnimationFrame(()=>{setTimeout(()=>{e.style.transition='transform 0.5s ease-in-out',i=!1},50)})},500):setTimeout(()=>{i=!1},500)}setInterval(l,o)});
