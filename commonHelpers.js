import{i as b}from"./assets/error-icon-dcf8e2db.js";import{f as p,i as g}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]");n.setAttribute("disabled",!0);const S=document.querySelector("[data-days]"),C=document.querySelector("[data-hours]"),M=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let d,i=0,u=1e3,l;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;l=e,t[0]<e?g.show({title:"Error",titleColor:"#fff",message:"Please choose a date in the future",messageColor:"#fff",backgroundColor:"#EF4040",position:"topCenter",messageLineHeight:"24px",messageSize:"16px",iconUrl:b,theme:"dark"}):(n.removeAttribute("disabled"),d=t[0])}};p(c,q);n.addEventListener("click",T);function x(t){const m=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function o(t){return t.toString().padStart(2,"0")}function T(){n.setAttribute("disabled",!0),c.setAttribute("disabled",!0),i=setInterval(()=>{let t=d.getTime()-l.getTime()-u;if(u+=1e3,t<0){clearInterval(i);return}const{days:e,hours:r,minutes:s,seconds:a}=x(t);S.textContent=o(e),C.textContent=o(r),M.textContent=o(s),D.textContent=o(a)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
