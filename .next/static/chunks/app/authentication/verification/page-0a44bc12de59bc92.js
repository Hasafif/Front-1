(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[614],{5856:function(e,t,n){Promise.resolve().then(n.bind(n,7697))},7697:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(7437),a=n(2265),i=n(7908);let r=async(e,t)=>await i.Z.post("https://chatg6.ai/api/auth/verify",{token:e,email:t});var u=n(1545),c=()=>{let[e,t]=(0,a.useState)(""),[n,i]=(0,a.useState)(""),[c,o]=(0,a.useState)(!1),[l,f]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=new URLSearchParams(window.location.search),n=e.get("token"),s=e.get("email");t(n),i(s)},[e]),(0,a.useEffect)(()=>{e&&n&&r(e,n).then(e=>{200===e.status?f("Verification done successfully"):226===e.status?f("Token Expired!"):f("Something went wrong, please try again later"),o(!0)})},[e,n]),(0,s.jsxs)(s.Fragment,{children:[c&&(0,s.jsx)(u.Z,{message:l,dur:30,display:o}),(0,s.jsx)("div",{className:"layout",children:(0,s.jsxs)("p",{children:["Token: ",e,(0,s.jsx)("br",{}),"Email: ",n]})})]})}},1545:function(e,t,n){"use strict";var s=n(7437);n(651),t.Z=e=>{let{message:t,dur:n,display:a}=e;return setTimeout(()=>a(!1),1e3*n),(0,s.jsxs)("div",{className:"notification",children:[(0,s.jsx)("p",{children:t}),(0,s.jsx)("button",{onClick:function(){a(!1)},children:"x"})]})}},651:function(){}},function(e){e.O(0,[908,971,69,744],function(){return e(e.s=5856)}),_N_E=e.O()}]);