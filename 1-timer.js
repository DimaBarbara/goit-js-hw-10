import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as v}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector("[data-start]"),h=document.querySelector(".timer"),m=document.getElementById("datetime-picker");let s,y;function a(e){return String(e).padStart(2,"0")}const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<new Date?(v.error({title:"Error",message:"Please choose a date in the future"}),s=null,m.disabled=!1):(s=t,l.disabled=!1,console.log(s))}};f("#datetime-picker",b);function D(e){const n=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),r=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:o,minutes:d,seconds:r}}function M(){if(!s)return;const t=s-new Date;if(t<=0)clearInterval(y);else{const{days:i,hours:c,minutes:u,seconds:n}=D(t),o=a(i),d=a(c),r=a(u),p=a(n);h.innerHTML=`
            <div class="timer">
      <div class="field">
        <span class="value" data-days>${o}</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-hours>${d}</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-minutes>${r}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-seconds>${p}</span>
        <span class="label">Seconds</span>
      </div>
    </div>
    `}}l.addEventListener("click",()=>{setInterval(M,1e3),l.disabled=!0,m.disabled=!0});
//# sourceMappingURL=1-timer.js.map
