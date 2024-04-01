(()=>{var e={};e.id=949,e.ids=[949],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},39866:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=n(50482),s=n(69108),a=n(62563),i=n.n(a),o=n(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let c=["",{children:["authentication",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,17439)),"/home/ec2-user/g6Base1/next-front/app/authentication/login/page.tsx"]}]},{layout:[()=>Promise.resolve().then(n.bind(n,62241)),"/home/ec2-user/g6Base1/next-front/app/authentication/login/layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,24260)),"/home/ec2-user/g6Base1/next-front/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/ec2-user/g6Base1/next-front/app/authentication/login/page.tsx"],u="/authentication/login/page",h={require:n,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/authentication/login/page",pathname:"/authentication/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},25499:(e,t,n)=>{Promise.resolve().then(n.bind(n,12138))},28374:(e,t,n)=>{Promise.resolve().then(n.bind(n,73972)),Promise.resolve().then(n.bind(n,43901))},50541:()=>{},84072:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2583,23)),Promise.resolve().then(n.t.bind(n,26840,23)),Promise.resolve().then(n.t.bind(n,38771,23)),Promise.resolve().then(n.t.bind(n,13225,23)),Promise.resolve().then(n.t.bind(n,9295,23)),Promise.resolve().then(n.t.bind(n,43982,23))},12138:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(95344),s=n(3729),a=n(47674);n(45511);let i=e=>{let t="http://localhost:3000/",[n,i]=(0,s.useState)(""),[o,l]=(0,s.useState)(""),c=async e=>{e.preventDefault(),await (0,a.signIn)("credentials",{username:n,password:o,redirect:!0,callbackUrl:"http://localhost:3000/"})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("form",{className:"form",onSubmit:c,children:[r.jsx("h1",{children:"Login"}),r.jsx("input",{name:"usr",type:"text",onChange:e=>i(e.target.value),placeholder:"Username",required:!0}),r.jsx("input",{name:"pwd",type:"password",onChange:e=>l(e.target.value),placeholder:"Password",required:!0}),r.jsx("button",{type:"submit",children:"Login"}),(0,r.jsxs)("span",{children:["Dont have an account? ",r.jsx("a",{href:"/signup",children:"Register"})]})]}),r.jsx("button",{onClick:()=>(0,a.signIn)("google",{callbackUrl:t}),children:"Google"}),r.jsx("button",{onClick:()=>(0,a.signIn)("github",{callbackUrl:t}),children:"Github"}),r.jsx("button",{onClick:()=>(0,a.signIn)("linkedin",{callbackUrl:t}),children:"Linkedin"})]})}},73972:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(95344),s=n(47674);function a({children:e}){return r.jsx(s.SessionProvider,{children:e})}},43901:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(95344),s=n(56506),a=n(47674),i=n(8428);function o(){let{data:e,status:t}=(0,a.useSession)();return(0,i.useRouter)(),(0,r.jsxs)("header",{children:[r.jsx("div",{className:"auth-options",children:e?(0,r.jsxs)("div",{children:[r.jsx("p",{children:e.user?.name}),r.jsx(s.default,{className:"header-link",href:"/api/auth/signout",children:"Sign Out"})]}):(0,r.jsxs)("div",{children:[r.jsx(s.default,{className:"header-link",href:"/api/auth/signin",children:"Sign in"}),r.jsx(s.default,{className:"header-link",href:"/authentication/signup",children:"Sign up"})]})}),(0,r.jsxs)("nav",{children:[r.jsx(s.default,{className:"header-link",href:"/",children:"Home"}),r.jsx(s.default,{className:"header-link",href:"/profile",children:"User Profile"}),r.jsx(s.default,{className:"header-link",href:"/dashboard",children:"Account Dashboard"}),r.jsx(s.default,{className:"header-link",href:"/search_tools",children:"Search Tools"})]})]})}n(25601)},62241:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a,metadata:()=>s});var r=n(25036);n(36690);let s={title:"Login"};function a({children:e}){return r.jsx("section",{className:"layout",children:e})}},17439:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>a,__esModule:()=>s,default:()=>i});let r=(0,n(86843).createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/app/authentication/login/page.tsx`),{__esModule:s,$$typeof:a}=r,i=r.default},24260:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x,metadata:()=>p});var r=n(25036),s=n(86843);let a=(0,s.createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/app/context/AuthProvider.tsx`),{__esModule:i,$$typeof:o}=a,l=a.default;n(63726);let c=(0,s.createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/components/Management/Header.tsx`),{__esModule:d,$$typeof:u}=c,h=c.default,p={title:"G6 Research Platform"};function x({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{children:[r.jsx(l,{children:r.jsx(h,{})}),r.jsx("main",{children:e})]})})}},57481:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(70337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},63726:()=>{},36690:()=>{},45511:()=>{},25601:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[456,922,337],()=>n(39866));module.exports=r})();