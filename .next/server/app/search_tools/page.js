(()=>{var e={};e.id=884,e.ids=[884],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},1413:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>d,originalPathname:()=>h,pages:()=>u,routeModule:()=>p,tree:()=>c});var a=r(50482),s=r(69108),n=r(62563),l=r.n(n),i=r(68300),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let c=["",{children:["search_tools",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,55471)),"/home/ec2-user/g6Base1/next-front/app/search_tools/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,12391)),"/home/ec2-user/g6Base1/next-front/app/search_tools/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,24260)),"/home/ec2-user/g6Base1/next-front/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/ec2-user/g6Base1/next-front/app/search_tools/page.tsx"],h="/search_tools/page",d={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/search_tools/page",pathname:"/search_tools",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},28374:(e,t,r)=>{Promise.resolve().then(r.bind(r,73972)),Promise.resolve().then(r.bind(r,43901))},9274:(e,t,r)=>{Promise.resolve().then(r.bind(r,85964))},84072:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},35303:()=>{},73972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var a=r(95344),s=r(47674);function n({children:e}){return a.jsx(s.SessionProvider,{children:e})}},85964:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>M});var a=r(95344),s=r(3729);r(13293);let n=({label:e,onClick:t})=>a.jsx("button",{className:"search-button",value:e,onClick:t,children:e});var l=r(53608);let i="fXtwPJIYby5MEMOJdrN067O7rtfDrs3O7TKZbzMt",o={SEMANTIC_CONFIG:{api_url:"https://api.semanticscholar.org/graph/v1/paper/search",api_key:i,headers:{"x-api-key":i}}};function c(e){return e.toString().slice(0,4)}function u(e){let t=e[0]?.toString(),r=t?.match(/\s*,/),a=-1;return r?.index?(void 0!==(t=t?.substring(r.index-t.length,r.index))&&(a=t.lastIndexOf(" ")),t=t?.substring(a+1),` ${t} et al `):(void 0!==t&&(a=t.lastIndexOf(" ")),t=t?.substring(a+1),1===e.length)?t:` ${t} et al `}async function h(e,t=15,r=3,a=500){try{let r=(await l.Z.get(o.SEMANTIC_CONFIG.api_url,{params:{query:`${e}`,limit:t},headers:{"x-api-key":o.SEMANTIC_CONFIG.api_key}})).data.data,a=[];r.map(e=>{let t=`${e.paperId}`;a.push(t)});let s=(await l.Z.post("https://api.semanticscholar.org/graph/v1/paper/batch?fields=title,year,authors,openAccessPdf,abstract",{ids:a,headers:{"x-api-key":o.SEMANTIC_CONFIG.api_key}})).data,n=[];return s.forEach(e=>{let t=e.title,r=c(e.year),a=[];if(0!==e.authors.length){e.authors.forEach(e=>{e.name&&a.push(e.name)});let s=e.abstract,l=null===e.openAccessPdf?"":e.openAccessPdf.url;n.push({id:n.length,title:t,author:a,authors:a,published:r,pdf_url:l,abstract:s})}}),n}catch(s){if(r>0)return await new Promise(e=>setTimeout(e,a)),h(e,t,r-1,2*a);throw s}}let d=0;async function p(e,t){try{let r=await l.Z.get("https://export.arxiv.org/api/query",{params:{search_query:`all:"${e}"`,start:0,max_results:t||10}}),a=new DOMParser().parseFromString(r.data,"text/xml").querySelectorAll("entry"),s=[];return a.forEach(e=>{s.push({id:s.length,title:e.querySelector("title")?.textContent?.trim(),author:u([e.querySelector("author")?.textContent?.trim()]),authors:[e.querySelector("author")?.textContent?.trim()],published:c(e.querySelector("published")?.textContent?.trim()),pdf_url:e.querySelector('link[title="pdf"]')?.getAttribute("href"),abstract:e.querySelector("summary")?.textContent?.trim()})}),s}catch(r){if(d<3)return d++,console.log(r),p(e,t);throw r}}async function x(e,t=10,r=3,a=500){try{let r=await l.Z.get("https://archive.org/advancedsearch.php",{params:{q:`"${e}" AND collection:(journals) AND format:(Text PDF) AND mediatype:(texts)`,fl:["identifier"],rows:t,output:"json"}}),a=[];for(let e of(console.log(r.data),r.data.response.docs)){let t=await m(e.identifier),r={id:a.length,title:t.title,author:u([t.authors]),pdf_url:t.pdf_url,published:c(t.published)};a.push(r)}return console.log(a),a}catch(s){if(r>0)return await new Promise(e=>setTimeout(e,a)),x(e,t,r-1,2*a);throw s}}async function m(e){let t=`https://archive.org/metadata/${e}`,r=await l.Z.get(t),a=r.data.metadata,s="";s="creator"in a?a.creator:"journaltitle"in a?a.journaltitle:"contributor"in a?a.contributor:"Unknown";let n=a.publicdate,i=a.title,o=r.data.files,c="";for(let t of o)"Text PDF"===t.format&&(c=`https://archive.org/download/${e}/${t.name}`);return{title:i,authors:s,published:n,pdf_url:c}}let f=({value:e})=>{let t=JSON.parse(e);return(0,a.jsxs)("div",{className:"result",children:[(0,a.jsxs)("h4",{children:["Title:",t.title]}),(0,a.jsxs)("h4",{children:["Author:",t.author]}),(0,a.jsxs)("h4",{children:["Published:",t.published]}),""!==t.pdf_url&&(0,a.jsxs)("h4",{children:["PDF:",a.jsx("a",{href:t.pdf_url,children:"Download"})]})]})},j=({query:e,isSearching:t,searchEngine:r,onFetch:n})=>{let[l,i]=(0,s.useState)(null),[o,c]=(0,s.useState)(""),[u,d]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{t&&(async()=>{try{d(!0);let t="";switch(r){case"semantic":default:t=await h(e);break;case"arxiv":t=await p(e);break;case"archive":t=await x(e)}n(t),i(t)}catch(e){e instanceof Error?c(e.message):c("An unknown error occurred")}finally{d(!1)}})()},[t,e,r,n]),o)?a.jsx("div",{className:"fetch-container",children:o}):u?a.jsx("div",{className:"fetch-container",children:"Searching..."}):a.jsx("div",{className:"fetch-container",children:l&&a.jsx("div",{children:l.map(e=>a.jsx(f,{value:JSON.stringify(e)},e.id))})})},g=({value:e,onChange:t})=>a.jsx("input",{type:"text",className:"search-box",placeholder:"Search...",value:e,onChange:t}),v={urls:{backendUrl:"https://api.chatg6.ai"},endpoints:{literature:"literature/",documentation:"documentation/",plagiarism:"plagiarism/",article:"article/",outline:"outline/"}};function b(e){return new Promise(t=>setTimeout(t,e))}async function y(e,t,r=3,a=500){let s=[];try{let r=[];try{r=await h(e,15)}catch(t){console.error("Error in searchInSemantic:",t),r=await p(e,10)}let a=r.filter(e=>null!==e.abstract);(a=a.slice(0,5)).forEach(e=>{let t={title:e.title,authors:e.authors,pdf_url:e.pdf_url,published:e.published,abstract:e.abstract};s.push(t)}),console.log(s);let n=await S(s,t,e);return console.log(n),n}catch(s){if(r>0)return await b(a),y(e,t,r-1,2*a);throw s}}async function S(e,t,r,a=3,s=500){console.log(e);try{return l.Z.post(`${v.urls.backendUrl}/${v.endpoints.literature}`,{Researches:e,style:t,subject:r}).then(e=>(console.log(e),e))}catch(n){if(a>0)return await b(s),S(e,t,r,a-1,2*s);throw n}}async function A(e,t,r=3,a=500){console.log(e);try{return l.Z.post(`${v.urls.backendUrl}/${v.endpoints.documentation}`,{Researches:e,style:t}).then(e=>(console.log(e),e))}catch(s){if(r>0)return await b(a),A(e,t,r-1,2*a);throw s}}async function w(e,t=3,r=500){console.log(e);try{let t=await l.Z.post(`${v.urls.backendUrl}/${v.endpoints.plagiarism}`,{text:e});if(t.data.userId){if((await l.Z.post("https://chatg6.ai/api/utils/record",{type:"plg",plgId:t.data.userId})).data.ok)return t;return{data:{message:"Something went wrong"}}}}catch(a){if(t>0)return await b(r),w(e,t-1,2*r);throw a}}async function _(e,t=[],r,a,s=3,n=500){let i=[];if(0==t.length&&!1==a){let t=[];try{t=await h(e,40)}catch(e){console.error("Error in searchInSemantic:",e),t=[]}console.log(t),i=t.filter(e=>null!==e.abstract&&""!==e.pdf_url)}else i=t;let o={topic:e,res:i,outline:r,arxiv:a};try{return l.Z.post(`${v.urls.backendUrl}/${v.endpoints.article}`,o).then(e=>(console.log(e),e))}catch(l){if(s>0)return await b(n),_(e,t,r,a,s-1,2*n);throw l}}async function C(e,t=3,r=500){let a=[];try{a=await h(e,40)}catch(e){console.error("Error in searchInSemantic:",e),a=[]}console.log(a);let s=a.filter(e=>null!==e.abstract&&""!==e.pdf_url);try{return l.Z.post(`${v.urls.backendUrl}/${v.endpoints.outline}`,{topic:e,res:s}).then(e=>(console.log(e),e))}catch(a){if(t>0)return await b(r),C(e,t-1,2*r);throw a}}let N=()=>{let[e,t]=(0,s.useState)(""),[r,n]=(0,s.useState)(""),[l,i]=(0,s.useState)(!1),[o,c]=(0,s.useState)("check");return(0,s.useEffect)(()=>{try{l&&(async()=>{let t=await w(e);n(t?.data.message)})()}catch(e){e instanceof Error?n(e.message):n("An unknown error occurred")}finally{i(!1),r&&c("check")}},[e,l,r]),(0,a.jsxs)(a.Fragment,{children:[a.jsx("h1",{children:"Plagiarism Check"}),a.jsx("textarea",{value:e,onChange:e=>{t(e.target.value),n("")},className:"plg-check-textarea",placeholder:"Insert some text to check for plagiarism content"}),a.jsx("button",{className:"plg-check-button",onClick:()=>{i(!0),c("checking..")},children:o}),a.jsx("p",{children:r})]})};r(17192);let P=({children:e})=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"container",children:e})}),k=({query:e})=>{let[t,r]=(0,s.useState)(""),[n,l]=(0,s.useState)("apa"),[i,o]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{try{i&&(async()=>{let t=await y(e,n);r(t.data)})()}catch(e){e instanceof Error?r(e.message):r("An unknown error occurred")}finally{o(!1)}},[i,e,n]),(0,a.jsxs)(a.Fragment,{children:[a.jsx("h1",{children:"Literature Review"}),(0,a.jsxs)("section",{children:[(0,a.jsxs)("select",{onChange:e=>{l(e.target.value)},value:n,className:"cite-lr",children:[a.jsx("option",{value:"",disabled:!0,children:"Citation Type"}),a.jsx("option",{value:"apa",children:"APA"}),a.jsx("option",{value:"ieee",children:"IEEE"}),a.jsx("option",{value:"mla",children:"MLA"}),a.jsx("option",{value:"ama",children:"AMA"}),a.jsx("option",{value:"asa",children:"ASA"}),a.jsx("option",{value:"aaa",children:"AAA"}),a.jsx("option",{value:"apsa",children:"APSA"}),a.jsx("option",{value:"mhra",children:"MHRA"}),a.jsx("option",{value:"oscola",children:"OSCOLA"})]}),a.jsx("button",{className:"gener-lr",onClick:()=>{r(""),o(!0)},children:"Generate"})]}),a.jsx("p",{className:"output-lr",children:t})]})},E=({onExit:e})=>{let[t,r]=(0,s.useState)(""),[n,l]=(0,s.useState)({title:"",authors:"",pdf_url:"",published:"",abstract:""}),[i,o]=(0,s.useState)(""),[c,u]=(0,s.useState)("apa"),[h,d]=(0,s.useState)([]),p=e=>{let{name:t,value:r}=e.target;l(e=>({...e,[t]:r}))},x=async()=>{try{let e=h.filter(e=>""!==e.title.trim()||""!==e.authors.trim()||""!==e.pdf_url.trim()||""!==e.published.trim()||""!==e.abstract.trim()).map(e=>({...e,authors:e.authors.includes(",")?e.authors.split(",").map(e=>e.trim()):[e.authors.trim()]})),t=await S(e,c,i);r(t.data),d([])}catch(e){console.error("Error sending data to API:",e)}};return(0,a.jsxs)("section",{className:"custom-lr",children:[(0,a.jsxs)("section",{className:"custom-lr-data",children:[a.jsx("h1",{children:"Saved Data"}),a.jsx("ul",{className:"output-lr",children:h.map((e,t)=>(0,a.jsxs)("li",{children:["Saved Data item: ",t+1]},t))})]}),(0,a.jsxs)("section",{className:"custom-lr-data",children:[a.jsx("h1",{children:"Literature Review"}),a.jsx("input",{value:i,onChange:e=>{o(e.target.value)},placeholder:"Subject"}),a.jsx("input",{name:"title",value:n.title,onChange:p,placeholder:"Title"}),a.jsx("input",{name:"authors",value:n.authors,onChange:p,placeholder:"Authors"}),a.jsx("input",{name:"published",value:n.published,onChange:p,placeholder:"Publish Year"}),a.jsx("input",{name:"pdf_url",value:n.pdf_url,onChange:p,placeholder:"PDF URL"}),a.jsx("textarea",{className:"abstract-lr",name:"abstract",value:n.abstract,onChange:p,placeholder:"Abstract"}),(0,a.jsxs)("select",{onChange:e=>{u(e.target.value)},value:c,className:"cite-lr",children:[a.jsx("option",{value:"",disabled:!0,selected:!0,children:"Citation Type"}),a.jsx("option",{value:"apa",children:"APA"}),a.jsx("option",{value:"ieee",children:"IEEE"}),a.jsx("option",{value:"mla",children:"MLA"}),a.jsx("option",{value:"ama",children:"AMA"}),a.jsx("option",{value:"asa",children:"ASA"}),a.jsx("option",{value:"aaa",children:"AAA"}),a.jsx("option",{value:"apsa",children:"APSA"}),a.jsx("option",{value:"mhra",children:"MHRA"}),a.jsx("option",{value:"oscola",children:"OSCOLA"})]}),(0,a.jsxs)("section",{children:[a.jsx("button",{className:"gener-lr",onClick:()=>{let{title:e,authors:t,published:r,pdf_url:a,abstract:s}=n;if(""!==e.trim()&&""!==t.trim()&&""!==a.trim()&&""!==r.trim()&&""!==s.trim()){let n={title:e,authors:t,published:r,pdf_url:a,abstract:s};d(e=>[...e,n])}l({title:"",authors:"",pdf_url:"",published:"",abstract:""}),o("")},children:"Save"}),a.jsx("button",{className:"gener-lr",onClick:x,children:"Generate"})]}),a.jsx("button",{className:"exit-lr-btn",onClick:()=>{e(!1)},children:"EXIT"})]}),(0,a.jsxs)("section",{className:"custom-lr-data",children:[a.jsx("h1",{children:"Output"}),a.jsx("p",{className:"output-lr",children:t})]})]})},q=({onExit:e})=>{let[t,r]=(0,s.useState)(""),[n,l]=(0,s.useState)({title:"",authors:"",pdf_url:"",published:""}),[i,o]=(0,s.useState)("apa"),[c,u]=(0,s.useState)([]),h=e=>{let{name:t,value:r}=e.target;l(e=>({...e,[t]:r}))},d=async()=>{try{let e=c.filter(e=>""!==e.title.trim()||""!==e.authors.trim()||""!==e.pdf_url.trim()||""!==e.published.trim()).map(e=>({...e,authors:e.authors.includes(",")?e.authors.split(",").map(e=>e.trim()):[e.authors.trim()]})),t=await A(e,i);r(t.data),u([])}catch(e){console.error("Error sending data to API:",e)}};return(0,a.jsxs)("section",{className:"custom-lr",children:[(0,a.jsxs)("section",{className:"custom-lr-data",children:[a.jsx("h1",{children:"Saved Data"}),a.jsx("ul",{className:"output-lr",children:c.map((e,t)=>(0,a.jsxs)("li",{children:["Saved Reference: ",t+1]},t))})]}),(0,a.jsxs)("section",{className:"custom-lr-data",children:[a.jsx("h1",{children:"Custom References"}),a.jsx("input",{name:"title",value:n.title,onChange:h,placeholder:"Title"}),a.jsx("input",{name:"authors",value:n.authors,onChange:h,placeholder:"Authors"}),a.jsx("input",{name:"published",value:n.published,onChange:h,placeholder:"Publish Year"}),a.jsx("input",{name:"pdf_url",value:n.pdf_url,onChange:h,placeholder:"PDF URL"}),(0,a.jsxs)("select",{onChange:e=>{o(e.target.value)},value:i,className:"cite-lr",children:[a.jsx("option",{value:"",disabled:!0,selected:!0,children:"Citation Type"}),a.jsx("option",{value:"apa",children:"APA"}),a.jsx("option",{value:"ieee",children:"IEEE"}),a.jsx("option",{value:"mla",children:"MLA"}),a.jsx("option",{value:"ama",children:"AMA"}),a.jsx("option",{value:"asa",children:"ASA"}),a.jsx("option",{value:"aaa",children:"AAA"}),a.jsx("option",{value:"apsa",children:"APSA"}),a.jsx("option",{value:"mhra",children:"MHRA"}),a.jsx("option",{value:"oscola",children:"OSCOLA"})]}),(0,a.jsxs)("section",{children:[a.jsx("button",{className:"gener-lr",onClick:()=>{let{title:e,authors:t,published:r,pdf_url:a}=n;if(""!==e.trim()&&""!==t.trim()&&""!==a.trim()&&""!==r.trim()){let s={title:e,authors:t,published:r,pdf_url:a};u(e=>[...e,s])}l({title:"",authors:"",pdf_url:"",published:""})},children:"Save"}),a.jsx("button",{className:"gener-lr",onClick:d,children:"Generate"})]}),a.jsx("button",{className:"exit-lr-btn",onClick:()=>{e(!1)},children:"EXIT"})]}),(0,a.jsxs)("section",{className:"custom-lr-data",children:[a.jsx("h1",{children:"References List"}),a.jsx("p",{className:"output-lr",children:t})]})]})},I=({query:e})=>{let[t,r]=(0,s.useState)(""),[n,l]=(0,s.useState)(!1),[i,o]=(0,s.useState)(!1),[c,u]=(0,s.useState)(""),[h,d]=(0,s.useState)(!1),[p,x]=(0,s.useState)([]);return(0,s.useEffect)(()=>{try{n&&(async()=>{u(t);let a=await _(e,p,c,h);r(a.data),u(""),x([]),d(!1)})()}catch(e){e instanceof Error?r(e.message):r("An unknown error occurred")}finally{l(!1)}},[n,e,p,c,h,t]),(0,s.useEffect)(()=>{try{i&&(async()=>{let t=await C(e);r(t.data.outline),u(t.data.outline),x(t.data.refs),d(t.data.arxiv)})()}catch(e){e instanceof Error?r(e.message):r("An unknown error occurred")}finally{o(!1)}},[i,e,p,h]),(0,a.jsxs)(a.Fragment,{children:[a.jsx("h1",{children:"Article"}),(0,a.jsxs)("section",{children:[a.jsx("button",{className:"gener-lr",onClick:()=>{r(""),l(!0)},children:"Generate"}),a.jsx("button",{className:"gener-lr",onClick:()=>{r(""),o(!0)},children:"Generate outline"})]}),a.jsx("div",{className:"output-lr",onInput:e=>{let t=e.target.textContent||"";r(t),console.log(t)},contentEditable:"true",suppressContentEditableWarning:!0,children:t})]})},M=()=>{let[e,t]=(0,s.useState)(null),[r,l]=(0,s.useState)(!1),[i,o]=(0,s.useState)(!1),[c,u]=(0,s.useState)(""),[h,d]=(0,s.useState)(!1),[p,x]=(0,s.useState)("semantic"),m=e=>{x(e.target.value),u(c),d(!0)};return(0,a.jsxs)("main",{children:[(0,a.jsxs)(P,{children:[a.jsx("h1",{children:"Search tools"}),a.jsx(g,{value:c,onChange:e=>{u(e.target.value),d(!1)}}),(0,a.jsxs)("div",{className:"search-buttons",children:[a.jsx(n,{label:"arxiv",onClick:m}),a.jsx(n,{label:"archive",onClick:m}),a.jsx(n,{label:"semantic",onClick:m})]}),a.jsx(j,{searchEngine:p,isSearching:h,query:c,onFetch:t})]}),a.jsx(P,{children:a.jsx(k,{query:c})}),a.jsx(P,{children:a.jsx(I,{query:c})}),(0,a.jsxs)(P,{children:[a.jsx(N,{}),a.jsx("button",{className:"view-custom-lr-btn",onClick:()=>{l(!0)},children:"Create Custom Literature Review"}),a.jsx("button",{className:"view-custom-lr-btn",onClick:()=>{o(!0)},children:"Create Custom references list"}),r&&a.jsx(E,{onExit:l}),i&&a.jsx(q,{onExit:o})]})]})}},43901:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(95344),s=r(56506),n=r(47674),l=r(8428);function i(){let{data:e,status:t}=(0,n.useSession)();return(0,l.useRouter)(),(0,a.jsxs)("header",{children:[a.jsx("div",{className:"auth-options",children:e?(0,a.jsxs)("div",{children:[a.jsx("p",{children:e.user?.name}),a.jsx(s.default,{className:"header-link",href:"/api/auth/signout",children:"Sign Out"})]}):(0,a.jsxs)("div",{children:[a.jsx(s.default,{className:"header-link",href:"/api/auth/signin",children:"Sign in"}),a.jsx(s.default,{className:"header-link",href:"/authentication/signup",children:"Sign up"})]})}),(0,a.jsxs)("nav",{children:[a.jsx(s.default,{className:"header-link",href:"/",children:"Home"}),a.jsx(s.default,{className:"header-link",href:"/profile",children:"User Profile"}),a.jsx(s.default,{className:"header-link",href:"/dashboard",children:"Account Dashboard"}),a.jsx(s.default,{className:"header-link",href:"/search_tools",children:"Search Tools"})]})]})}r(25601)},24260:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>p});var a=r(25036),s=r(86843);let n=(0,s.createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/app/context/AuthProvider.tsx`),{__esModule:l,$$typeof:i}=n,o=n.default;r(63726);let c=(0,s.createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/components/Management/Header.tsx`),{__esModule:u,$$typeof:h}=c,d=c.default,p={title:"G6 Research Platform"};function x({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{children:[a.jsx(o,{children:a.jsx(d,{})}),a.jsx("main",{children:e})]})})}},12391:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>s});var a=r(25036);let s={title:"Research Tools",description:"A collection of Research tools developed by G6 company"};function n({children:e}){return a.jsx("div",{children:e})}},55471:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>l});let a=(0,r(86843).createProxy)(String.raw`/home/ec2-user/g6Base1/next-front/app/search_tools/page.tsx`),{__esModule:s,$$typeof:n}=a,l=a.default},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(70337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},17192:()=>{},63726:()=>{},25601:()=>{},13293:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[456,922,337,608],()=>r(1413));module.exports=a})();