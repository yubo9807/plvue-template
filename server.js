"use strict";const m=require("http"),p=require("fs"),a=require("path"),t=require("pl-vue"),v="production",c=Object.freeze({BASE_URL:"",NODE_ENV:v,BASE_API:"/api"}),f={count:0},g={addCount(){f.count++}},y=t.createStore(f,g);function b(){const e=y(),n=t.ref(0);return t.h("div",null,t.h("h1",null,()=>n.value),t.h("button",{onclick:()=>n.value++},"count ++"),t.h("h1",null,()=>e.count),t.h("button",{onclick:e.addCount},"store.count++"))}function _(){return t.h("div",{style:"margin-top: 80px"},t.h("a",{href:"http://plvue.hpyyb.cn/",target:"_blank"},"Pl Vue 文档"))}const S="not-found-710606",A={"not-found":"not-found-710606",notFound:S};function j(){return t.h("div",{className:A["not-found"]},"404")}const w="nav-fbcc39",E={nav:w};t.createRouter({base:c.BASE_URL,mode:"hash",routes:[{path:"/",component:b},{path:"/about",component:_},{component:j}]});function F(){return t.h(t.Fragment,null,t.h("nav",{className:E.nav},t.h(t.Link,{to:"/"},"Home"),t.h(t.Link,{to:"/about"},"About")),t.h(t.Router,null))}const i={"text/html":[".html"],"text/css":[".css"],"application/javascript;":[".js"],"application/json":[".json"],"image/vnd.microsoft.icon":[".ico"],"image/jpeg":[".jpg",".jpeg"],"image/png":[".png"],"image/gif":[".gif"],"application/pdf":[".pdf"],"font/woff2":[".worf2"],"font/woff":[".worf"],"font/ttf":[".ttf"],"application/octet-stream":[".mp4",".avi"]};function L(){const e=Object.values(i).flat();return[".gz"].concat(e)}function k(e){e=e.toLowerCase();let n=null;for(const o in i)if(i[o].includes(e)){n=o;break}return n}const x=c.BASE_URL.slice(1),R=p.readFileSync(a.resolve(__dirname,x,"index.html"),"utf-8"),B=m.createServer(async(e,n)=>{const o=e.url.replace(c.BASE_URL||"/","/"),u=a.extname(o);if(L().includes(u)){const s=a.resolve(__dirname,e.url.slice(1));p.readFile(s,(d,h)=>{if(d)n.writeHead(404,{"Content-Type":"text/plain"}),n.end("Not Found");else{const l=k(u);l&&n.setHeader("Content-Type",l),n.write(h),n.end()}})}else{const s=await t.ssrOutlet(F,o,R);n.write(s),n.end()}}),r=3e3;B.listen(r,()=>{console.log(`http://localhost:${r}${c.BASE_URL}`)});
