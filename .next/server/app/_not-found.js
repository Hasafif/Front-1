(()=>{var e={};e.id=165,e.ids=[165],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6833:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d});var n=r(50482),s=r(69108),i=r(62563),a=r.n(i),o=r(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,24260)),"/home/ec2-user/g6Base1/next-front/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],c=[],u="/_not-found",h={require:r,loadChunk:()=>Promise.resolve()},x=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},28374:(e,t,r)=>{Promise.resolve().then(r.bind(r,73972)),Promise.resolve().then(r.bind(r,43901))},84072:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},73972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(95344),s=r(47674);function i({children:e}){return n.jsx(s.SessionProvider,{children:e})}},43901:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(95344),s=r(56506),i=r(47674),a=r(8428);function o(){let{data:e,status:t}=(0,i.useSession)();return(0,a.useRouter)(),(0,n.jsxs)("header",{children:[n.jsx("div",{className:"auth-options",children:e?(0,n.jsxs)("div",{children:[n.jsx("p",{children:e.user?.name}),n.jsx(s.default,{className:"header-link",href:"/api/auth/signout",children:"Sign Out"})]}):(0,n.jsxs)("div",{children:[n.jsx(s.default,{className:"header-link",href:"/api/auth/signin",children:"Sign in"}),n.jsx(s.default,{className:"header-link",href:"/authentication/signup",children:"Sign up"})]})}),(0,n.jsxs)("nav",{children:[n.jsx(s.default,{className:"header-link",href:"/",children:"Home"}),n.jsx(s.default,{className:"header-link",href:"/profile",children:"User Profile"}),n.jsx(s.default,{className:"header-link",href:"/dashboard",children:"Account Dashboard"}),n.jsx(s.default,{className:"header-link",href:"/search_tools",children:"Search Tools"})]})]})}r(25601)},24260:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>x});var n=r(25036),s=r(86843);let i=(0,s.createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/app/context/AuthProvider.tsx`),{__esModule:a,$$typeof:o}=i,l=i.default;r(63726);let d=(0,s.createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/components/Management/Header.tsx`),{__esModule:c,$$typeof:u}=d,h=d.default,x={title:"G6 Research Platform"};function m({children:e}){return n.jsx("html",{lang:"en",children:(0,n.jsxs)("body",{children:[n.jsx(l,{children:n.jsx(h,{})}),n.jsx("main",{children:e})]})})}},63726:()=>{},25601:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[456,922],()=>r(6833));module.exports=n})();