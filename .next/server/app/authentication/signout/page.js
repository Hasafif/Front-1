(()=>{var e={};e.id=603,e.ids=[603],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},39191:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var s=r(50482),n=r(69108),a=r(62563),i=r.n(a),o=r(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["authentication",{children:["signout",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,25732)),"/home/ec2-user/g6Base1/next-front/app/authentication/signout/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,22291)),"/home/ec2-user/g6Base1/next-front/app/authentication/signout/layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,24260)),"/home/ec2-user/g6Base1/next-front/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/ec2-user/g6Base1/next-front/app/authentication/signout/page.tsx"],c="/authentication/signout/page",h={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/authentication/signout/page",pathname:"/authentication/signout",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},88706:(e,t,r)=>{Promise.resolve().then(r.bind(r,96602))},28374:(e,t,r)=>{Promise.resolve().then(r.bind(r,73972)),Promise.resolve().then(r.bind(r,43901))},50541:()=>{},84072:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},96602:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(95344);r(3729);var n=r(47674);r(45511);let a=e=>s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"form",children:[s.jsx("h1",{children:"Are you sure to sign out?"}),s.jsx("button",{onClick:()=>(0,n.signOut)({redirect:!0,callbackUrl:"http://localhost:3000/"}),children:"Sign out"})]})})},73972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(95344),n=r(47674);function a({children:e}){return s.jsx(n.SessionProvider,{children:e})}},43901:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(95344),n=r(56506),a=r(47674),i=r(8428);function o(){let{data:e,status:t}=(0,a.useSession)();return(0,i.useRouter)(),(0,s.jsxs)("header",{children:[s.jsx("div",{className:"auth-options",children:e?(0,s.jsxs)("div",{children:[s.jsx("p",{children:e.user?.name}),s.jsx(n.default,{className:"header-link",href:"/api/auth/signout",children:"Sign Out"})]}):(0,s.jsxs)("div",{children:[s.jsx(n.default,{className:"header-link",href:"/api/auth/signin",children:"Sign in"}),s.jsx(n.default,{className:"header-link",href:"/authentication/signup",children:"Sign up"})]})}),(0,s.jsxs)("nav",{children:[s.jsx(n.default,{className:"header-link",href:"/",children:"Home"}),s.jsx(n.default,{className:"header-link",href:"/profile",children:"User Profile"}),s.jsx(n.default,{className:"header-link",href:"/dashboard",children:"Account Dashboard"}),s.jsx(n.default,{className:"header-link",href:"/search_tools",children:"Search Tools"})]})]})}r(25601)},22291:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>n});var s=r(25036);r(36690);let n={title:"Signout"};function a({children:e}){return s.jsx("section",{className:"layout",children:e})}},25732:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>i});let s=(0,r(86843).createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/app/authentication/signout/page.tsx`),{__esModule:n,$$typeof:a}=s,i=s.default},24260:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>p});var s=r(25036),n=r(86843);let a=(0,n.createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/app/context/AuthProvider.tsx`),{__esModule:i,$$typeof:o}=a,l=a.default;r(63726);let d=(0,n.createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/components/Management/Header.tsx`),{__esModule:u,$$typeof:c}=d,h=d.default,p={title:"G6 Research Platform"};function x({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{children:[s.jsx(l,{children:s.jsx(h,{})}),s.jsx("main",{children:e})]})})}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(70337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},63726:()=>{},36690:()=>{},45511:()=>{},25601:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[456,922,337],()=>r(39191));module.exports=s})();