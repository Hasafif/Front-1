(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{2059:function(e,t,a){Promise.resolve().then(a.bind(a,3191))},3191:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var r=a(7437),l=a(2265);a(2848);var n=e=>{let{label:t,onClick:a}=e;return(0,r.jsx)("button",{className:"search-button",value:t,onClick:a,children:t})},s=a(7908);let i="fXtwPJIYby5MEMOJdrN067O7rtfDrs3O7TKZbzMt";var o={SEMANTIC_CONFIG:{api_url:"https://api.semanticscholar.org/graph/v1/paper/search",api_key:i,headers:{"x-api-key":i}}};function c(e){return e.toString().slice(0,4)}function u(e){var t;let a=null===(t=e[0])||void 0===t?void 0:t.toString(),r=null==a?void 0:a.match(/\s*,/),l=-1;return(null==r?void 0:r.index)?(void 0!==(a=null==a?void 0:a.substring(r.index-a.length,r.index))&&(l=a.lastIndexOf(" ")),a=null==a?void 0:a.substring(l+1)," ".concat(a," et al ")):(void 0!==a&&(l=a.lastIndexOf(" ")),a=null==a?void 0:a.substring(l+1),1===e.length)?a:" ".concat(a," et al ")}async function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;try{let a=(await s.Z.get(o.SEMANTIC_CONFIG.api_url,{params:{query:"".concat(e),limit:t},headers:{"x-api-key":o.SEMANTIC_CONFIG.api_key}})).data.data,r=[];a.map(e=>{let t="".concat(e.paperId);r.push(t)});let l=(await s.Z.post("https://api.semanticscholar.org/graph/v1/paper/batch?fields=title,year,authors,openAccessPdf,abstract",{ids:r,headers:{"x-api-key":o.SEMANTIC_CONFIG.api_key}})).data,n=[];return l.forEach(e=>{let t=e.title,a=c(e.year),r=[];if(0!==e.authors.length){e.authors.forEach(e=>{e.name&&r.push(e.name)});let l=e.abstract,s=null===e.openAccessPdf?"":e.openAccessPdf.url;n.push({id:n.length,title:t,author:r,authors:r,published:a,pdf_url:s,abstract:l})}}),n}catch(l){if(a>0)return await new Promise(e=>setTimeout(e,r)),h(e,t,a-1,2*r);throw l}}let d=0;async function p(e,t){try{let a=await s.Z.get("https://export.arxiv.org/api/query",{params:{search_query:'all:"'.concat(e,'"'),start:0,max_results:t||10}}),r=new DOMParser().parseFromString(a.data,"text/xml").querySelectorAll("entry"),l=[];return r.forEach(e=>{var t,a,r,n,s,i,o,h,d,p,m;l.push({id:l.length,title:null===(a=e.querySelector("title"))||void 0===a?void 0:null===(t=a.textContent)||void 0===t?void 0:t.trim(),author:u([null===(n=e.querySelector("author"))||void 0===n?void 0:null===(r=n.textContent)||void 0===r?void 0:r.trim()]),authors:[null===(i=e.querySelector("author"))||void 0===i?void 0:null===(s=i.textContent)||void 0===s?void 0:s.trim()],published:c(null===(h=e.querySelector("published"))||void 0===h?void 0:null===(o=h.textContent)||void 0===o?void 0:o.trim()),pdf_url:null===(d=e.querySelector('link[title="pdf"]'))||void 0===d?void 0:d.getAttribute("href"),abstract:null===(m=e.querySelector("summary"))||void 0===m?void 0:null===(p=m.textContent)||void 0===p?void 0:p.trim()})}),l}catch(a){if(d<3)return d++,console.log(a),p(e,t);throw a}}async function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;try{let a=await s.Z.get("https://archive.org/advancedsearch.php",{params:{q:'"'.concat(e,'" AND collection:(journals) AND format:(Text PDF) AND mediatype:(texts)'),fl:["identifier"],rows:t,output:"json"}}),r=[];for(let e of(console.log(a.data),a.data.response.docs)){let t=await x(e.identifier),a={id:r.length,title:t.title,author:u([t.authors]),pdf_url:t.pdf_url,published:c(t.published)};r.push(a)}return console.log(r),r}catch(l){if(a>0)return await new Promise(e=>setTimeout(e,r)),m(e,t,a-1,2*r);throw l}}async function x(e){let t=await s.Z.get("https://archive.org/metadata/".concat(e)),a=t.data.metadata,r="";r="creator"in a?a.creator:"journaltitle"in a?a.journaltitle:"contributor"in a?a.contributor:"Unknown";let l=a.publicdate,n=a.title,i=t.data.files,o="";for(let t of i)"Text PDF"===t.format&&(o="https://archive.org/download/".concat(e,"/").concat(t.name));return{title:n,authors:r,published:l,pdf_url:o}}var v=e=>{let{value:t}=e,a=JSON.parse(t);return(0,r.jsxs)("div",{className:"result",children:[(0,r.jsxs)("h4",{children:["Title:",a.title]}),(0,r.jsxs)("h4",{children:["Author:",a.author]}),(0,r.jsxs)("h4",{children:["Published:",a.published]}),""!==a.pdf_url&&(0,r.jsxs)("h4",{children:["PDF:",(0,r.jsx)("a",{href:a.pdf_url,children:"Download"})]})]})},g=e=>{let{query:t,isSearching:a,searchEngine:n,onFetch:s}=e,[i,o]=(0,l.useState)(null),[c,u]=(0,l.useState)(""),[d,x]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{a&&(async()=>{try{x(!0);let e="";switch(n){case"semantic":default:e=await h(t);break;case"arxiv":e=await p(t);break;case"archive":e=await m(t)}s(e),o(e)}catch(e){e instanceof Error?u(e.message):u("An unknown error occurred")}finally{x(!1)}})()},[a,t,n,s]),c)?(0,r.jsx)("div",{className:"fetch-container",children:c}):d?(0,r.jsx)("div",{className:"fetch-container",children:"Searching..."}):(0,r.jsx)("div",{className:"fetch-container",children:i&&(0,r.jsx)("div",{children:i.map(e=>(0,r.jsx)(v,{value:JSON.stringify(e)},e.id))})})},j=e=>{let{value:t,onChange:a}=e;return(0,r.jsx)("input",{type:"text",className:"search-box",placeholder:"Search...",value:t,onChange:a})},f={urls:{backendUrl:"https://api.chatg6.ai"},endpoints:{literature:"literature/",documentation:"documentation/",plagiarism:"plagiarism/",article:"article/",outline:"outline/"}};function b(e){return new Promise(t=>setTimeout(t,e))}async function y(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,l=[];try{let a=[];try{a=await h(e,15)}catch(t){console.error("Error in searchInSemantic:",t),a=await p(e,10)}let r=a.filter(e=>null!==e.abstract);(r=r.slice(0,5)).forEach(e=>{let t={title:e.title,authors:e.authors,pdf_url:e.pdf_url,published:e.published,abstract:e.abstract};l.push(t)}),console.log(l);let n=await S(l,t,e);return console.log(n),n}catch(l){if(a>0)return await b(r),y(e,t,a-1,2*r);throw l}}async function S(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:500;console.log(e);try{return s.Z.post("".concat(f.urls.backendUrl,"/").concat(f.endpoints.literature),{Researches:e,style:t,subject:a}).then(e=>(console.log(e),e))}catch(n){if(r>0)return await b(l),S(e,t,a,r-1,2*l);throw n}}async function A(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;console.log(e);try{return s.Z.post("".concat(f.urls.backendUrl,"/").concat(f.endpoints.documentation),{Researches:e,style:t}).then(e=>(console.log(e),e))}catch(l){if(a>0)return await b(r),A(e,t,a-1,2*r);throw l}}async function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;console.log(e);try{let t=await s.Z.post("".concat(f.urls.backendUrl,"/").concat(f.endpoints.plagiarism),{text:e});if(t.data.userId){if((await s.Z.post("https://chatg6.ai/api/utils/record",{type:"plg",plgId:t.data.userId})).data.ok)return t;return{data:{message:"Something went wrong"}}}}catch(r){if(t>0)return await b(a),w(e,t-1,2*a);throw r}}async function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:500,i=[];if(0==t.length&&!1==r){let t=[];try{t=await h(e,40)}catch(e){console.error("Error in searchInSemantic:",e),t=[]}console.log(t),i=t.filter(e=>null!==e.abstract&&""!==e.pdf_url)}else i=t;let o={topic:e,res:i,outline:a,arxiv:r};try{return s.Z.post("".concat(f.urls.backendUrl,"/").concat(f.endpoints.article),o).then(e=>(console.log(e),e))}catch(s){if(l>0)return await b(n),C(e,t,a,r,l-1,2*n);throw s}}async function N(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,r=[];try{r=await h(e,40)}catch(e){console.error("Error in searchInSemantic:",e),r=[]}console.log(r);let l=r.filter(e=>null!==e.abstract&&""!==e.pdf_url);try{return s.Z.post("".concat(f.urls.backendUrl,"/").concat(f.endpoints.outline),{topic:e,res:l}).then(e=>(console.log(e),e))}catch(r){if(t>0)return await b(a),N(e,t-1,2*a);throw r}}var k=()=>{let[e,t]=(0,l.useState)(""),[a,n]=(0,l.useState)(""),[s,i]=(0,l.useState)(!1),[o,c]=(0,l.useState)("check");return(0,l.useEffect)(()=>{try{s&&(async()=>{let t=await w(e);n(null==t?void 0:t.data.message)})()}catch(e){e instanceof Error?n(e.message):n("An unknown error occurred")}finally{i(!1),a&&c("check")}},[e,s,a]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"Plagiarism Check"}),(0,r.jsx)("textarea",{value:e,onChange:e=>{t(e.target.value),n("")},className:"plg-check-textarea",placeholder:"Insert some text to check for plagiarism content"}),(0,r.jsx)("button",{className:"plg-check-button",onClick:()=>{i(!0),c("checking..")},children:o}),(0,r.jsx)("p",{children:a})]})};a(1056);var E=e=>{let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container",children:t})})},_=e=>{let{query:t}=e,[a,n]=(0,l.useState)(""),[s,i]=(0,l.useState)("apa"),[o,c]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{try{o&&(async()=>{let e=await y(t,s);n(e.data)})()}catch(e){e instanceof Error?n(e.message):n("An unknown error occurred")}finally{c(!1)}},[o,t,s]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"Literature Review"}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("select",{onChange:e=>{i(e.target.value)},value:s,className:"cite-lr",children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Citation Type"}),(0,r.jsx)("option",{value:"apa",children:"APA"}),(0,r.jsx)("option",{value:"ieee",children:"IEEE"}),(0,r.jsx)("option",{value:"mla",children:"MLA"}),(0,r.jsx)("option",{value:"ama",children:"AMA"}),(0,r.jsx)("option",{value:"asa",children:"ASA"}),(0,r.jsx)("option",{value:"aaa",children:"AAA"}),(0,r.jsx)("option",{value:"apsa",children:"APSA"}),(0,r.jsx)("option",{value:"mhra",children:"MHRA"}),(0,r.jsx)("option",{value:"oscola",children:"OSCOLA"})]}),(0,r.jsx)("button",{className:"gener-lr",onClick:()=>{n(""),c(!0)},children:"Generate"})]}),(0,r.jsx)("p",{className:"output-lr",children:a})]})},I=e=>{let{onExit:t}=e,[a,n]=(0,l.useState)(""),[s,i]=(0,l.useState)({title:"",authors:"",pdf_url:"",published:"",abstract:""}),[o,c]=(0,l.useState)(""),[u,h]=(0,l.useState)("apa"),[d,p]=(0,l.useState)([]),m=e=>{let{name:t,value:a}=e.target;i(e=>({...e,[t]:a}))},x=async()=>{try{let e=d.filter(e=>""!==e.title.trim()||""!==e.authors.trim()||""!==e.pdf_url.trim()||""!==e.published.trim()||""!==e.abstract.trim()).map(e=>({...e,authors:e.authors.includes(",")?e.authors.split(",").map(e=>e.trim()):[e.authors.trim()]})),t=await S(e,u,o);n(t.data),p([])}catch(e){console.error("Error sending data to API:",e)}};return(0,r.jsxs)("section",{className:"custom-lr",children:[(0,r.jsxs)("section",{className:"custom-lr-data",children:[(0,r.jsx)("h1",{children:"Saved Data"}),(0,r.jsx)("ul",{className:"output-lr",children:d.map((e,t)=>(0,r.jsxs)("li",{children:["Saved Data item: ",t+1]},t))})]}),(0,r.jsxs)("section",{className:"custom-lr-data",children:[(0,r.jsx)("h1",{children:"Literature Review"}),(0,r.jsx)("input",{value:o,onChange:e=>{c(e.target.value)},placeholder:"Subject"}),(0,r.jsx)("input",{name:"title",value:s.title,onChange:m,placeholder:"Title"}),(0,r.jsx)("input",{name:"authors",value:s.authors,onChange:m,placeholder:"Authors"}),(0,r.jsx)("input",{name:"published",value:s.published,onChange:m,placeholder:"Publish Year"}),(0,r.jsx)("input",{name:"pdf_url",value:s.pdf_url,onChange:m,placeholder:"PDF URL"}),(0,r.jsx)("textarea",{className:"abstract-lr",name:"abstract",value:s.abstract,onChange:m,placeholder:"Abstract"}),(0,r.jsxs)("select",{onChange:e=>{h(e.target.value)},value:u,className:"cite-lr",children:[(0,r.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Citation Type"}),(0,r.jsx)("option",{value:"apa",children:"APA"}),(0,r.jsx)("option",{value:"ieee",children:"IEEE"}),(0,r.jsx)("option",{value:"mla",children:"MLA"}),(0,r.jsx)("option",{value:"ama",children:"AMA"}),(0,r.jsx)("option",{value:"asa",children:"ASA"}),(0,r.jsx)("option",{value:"aaa",children:"AAA"}),(0,r.jsx)("option",{value:"apsa",children:"APSA"}),(0,r.jsx)("option",{value:"mhra",children:"MHRA"}),(0,r.jsx)("option",{value:"oscola",children:"OSCOLA"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("button",{className:"gener-lr",onClick:()=>{let{title:e,authors:t,published:a,pdf_url:r,abstract:l}=s;if(""!==e.trim()&&""!==t.trim()&&""!==r.trim()&&""!==a.trim()&&""!==l.trim()){let n={title:e,authors:t,published:a,pdf_url:r,abstract:l};p(e=>[...e,n])}i({title:"",authors:"",pdf_url:"",published:"",abstract:""}),c("")},children:"Save"}),(0,r.jsx)("button",{className:"gener-lr",onClick:x,children:"Generate"})]}),(0,r.jsx)("button",{className:"exit-lr-btn",onClick:()=>{t(!1)},children:"EXIT"})]}),(0,r.jsxs)("section",{className:"custom-lr-data",children:[(0,r.jsx)("h1",{children:"Output"}),(0,r.jsx)("p",{className:"output-lr",children:a})]})]})},P=e=>{let{onExit:t}=e,[a,n]=(0,l.useState)(""),[s,i]=(0,l.useState)({title:"",authors:"",pdf_url:"",published:""}),[o,c]=(0,l.useState)("apa"),[u,h]=(0,l.useState)([]),d=e=>{let{name:t,value:a}=e.target;i(e=>({...e,[t]:a}))},p=async()=>{try{let e=u.filter(e=>""!==e.title.trim()||""!==e.authors.trim()||""!==e.pdf_url.trim()||""!==e.published.trim()).map(e=>({...e,authors:e.authors.includes(",")?e.authors.split(",").map(e=>e.trim()):[e.authors.trim()]})),t=await A(e,o);n(t.data),h([])}catch(e){console.error("Error sending data to API:",e)}};return(0,r.jsxs)("section",{className:"custom-lr",children:[(0,r.jsxs)("section",{className:"custom-lr-data",children:[(0,r.jsx)("h1",{children:"Saved Data"}),(0,r.jsx)("ul",{className:"output-lr",children:u.map((e,t)=>(0,r.jsxs)("li",{children:["Saved Reference: ",t+1]},t))})]}),(0,r.jsxs)("section",{className:"custom-lr-data",children:[(0,r.jsx)("h1",{children:"Custom References"}),(0,r.jsx)("input",{name:"title",value:s.title,onChange:d,placeholder:"Title"}),(0,r.jsx)("input",{name:"authors",value:s.authors,onChange:d,placeholder:"Authors"}),(0,r.jsx)("input",{name:"published",value:s.published,onChange:d,placeholder:"Publish Year"}),(0,r.jsx)("input",{name:"pdf_url",value:s.pdf_url,onChange:d,placeholder:"PDF URL"}),(0,r.jsxs)("select",{onChange:e=>{c(e.target.value)},value:o,className:"cite-lr",children:[(0,r.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Citation Type"}),(0,r.jsx)("option",{value:"apa",children:"APA"}),(0,r.jsx)("option",{value:"ieee",children:"IEEE"}),(0,r.jsx)("option",{value:"mla",children:"MLA"}),(0,r.jsx)("option",{value:"ama",children:"AMA"}),(0,r.jsx)("option",{value:"asa",children:"ASA"}),(0,r.jsx)("option",{value:"aaa",children:"AAA"}),(0,r.jsx)("option",{value:"apsa",children:"APSA"}),(0,r.jsx)("option",{value:"mhra",children:"MHRA"}),(0,r.jsx)("option",{value:"oscola",children:"OSCOLA"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("button",{className:"gener-lr",onClick:()=>{let{title:e,authors:t,published:a,pdf_url:r}=s;if(""!==e.trim()&&""!==t.trim()&&""!==r.trim()&&""!==a.trim()){let l={title:e,authors:t,published:a,pdf_url:r};h(e=>[...e,l])}i({title:"",authors:"",pdf_url:"",published:""})},children:"Save"}),(0,r.jsx)("button",{className:"gener-lr",onClick:p,children:"Generate"})]}),(0,r.jsx)("button",{className:"exit-lr-btn",onClick:()=>{t(!1)},children:"EXIT"})]}),(0,r.jsxs)("section",{className:"custom-lr-data",children:[(0,r.jsx)("h1",{children:"References List"}),(0,r.jsx)("p",{className:"output-lr",children:a})]})]})},O=e=>{let{query:t}=e,[a,n]=(0,l.useState)(""),[s,i]=(0,l.useState)(!1),[o,c]=(0,l.useState)(!1),[u,h]=(0,l.useState)(""),[d,p]=(0,l.useState)(!1),[m,x]=(0,l.useState)([]);return(0,l.useEffect)(()=>{try{s&&(async()=>{h(a);let e=await C(t,m,u,d);n(e.data),h(""),x([]),p(!1)})()}catch(e){e instanceof Error?n(e.message):n("An unknown error occurred")}finally{i(!1)}},[s,t,m,u,d,a]),(0,l.useEffect)(()=>{try{o&&(async()=>{let e=await N(t);n(e.data.outline),h(e.data.outline),x(e.data.refs),p(e.data.arxiv)})()}catch(e){e instanceof Error?n(e.message):n("An unknown error occurred")}finally{c(!1)}},[o,t,m,d]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"Article"}),(0,r.jsxs)("section",{children:[(0,r.jsx)("button",{className:"gener-lr",onClick:()=>{n(""),i(!0)},children:"Generate"}),(0,r.jsx)("button",{className:"gener-lr",onClick:()=>{n(""),c(!0)},children:"Generate outline"})]}),(0,r.jsx)("div",{className:"output-lr",onInput:e=>{let t=e.target.textContent||"";n(t),console.log(t)},contentEditable:"true",suppressContentEditableWarning:!0,children:a})]})},T=()=>{let[e,t]=(0,l.useState)(null),[a,s]=(0,l.useState)(!1),[i,o]=(0,l.useState)(!1),[c,u]=(0,l.useState)(""),[h,d]=(0,l.useState)(!1),[p,m]=(0,l.useState)("semantic"),x=e=>{m(e.target.value),u(c),d(!0)};return(0,r.jsxs)("main",{children:[(0,r.jsxs)(E,{children:[(0,r.jsx)("h1",{children:"Search tools"}),(0,r.jsx)(j,{value:c,onChange:e=>{u(e.target.value),d(!1)}}),(0,r.jsxs)("div",{className:"search-buttons",children:[(0,r.jsx)(n,{label:"arxiv",onClick:x}),(0,r.jsx)(n,{label:"archive",onClick:x}),(0,r.jsx)(n,{label:"semantic",onClick:x})]}),(0,r.jsx)(g,{searchEngine:p,isSearching:h,query:c,onFetch:t})]}),(0,r.jsx)(E,{children:(0,r.jsx)(_,{query:c})}),(0,r.jsx)(E,{children:(0,r.jsx)(O,{query:c})}),(0,r.jsxs)(E,{children:[(0,r.jsx)(k,{}),(0,r.jsx)("button",{className:"view-custom-lr-btn",onClick:()=>{s(!0)},children:"Create Custom Literature Review"}),(0,r.jsx)("button",{className:"view-custom-lr-btn",onClick:()=>{o(!0)},children:"Create Custom references list"}),a&&(0,r.jsx)(I,{onExit:s}),i&&(0,r.jsx)(P,{onExit:o})]})]})}},1056:function(){},2848:function(){}},function(e){e.O(0,[908,971,69,744],function(){return e(e.s=2059)}),_N_E=e.O()}]);