import{c as d,r as f,h as t,a as p,i as m,R as h,b as s,L as i,F as y}from"./pl-vue-075fe516.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const b="production",v=Object.freeze({BASE_URL:"/plvue-template",NODE_ENV:b,BASE_API:"/api"}),a={count:0},g={addCount(){a.count++}},L=d(a,g);function A(){const r=L(),n=f(0);return t("div",null,t("h1",null,()=>n.value),t("button",{onclick:()=>n.value++},"count ++"),t("h1",null,()=>r.count),t("button",{onclick:r.addCount},"store.count++"))}function N(){return t("div",{style:"margin-top: 80px"},t("a",{href:"http://plvue.hpyyb.cn/",target:"_blank"},"Pl Vue 文档"))}const O="not-found-710606",E={"not-found":"not-found-710606",notFound:O};function F(){return t("div",{className:E["not-found"]},"404")}const P="nav-fbcc39",R={nav:P};function S(){return m({base:v.BASE_URL,mode:"hash"}),t(y,null,t("nav",{className:R.nav},t(i,{to:"/"},"Home"),t(i,{to:"/about"},"About")),t(h,{notFound:F},t(s,{path:"/",component:A}),t(s,{path:"/about",component:N})))}const _=document.getElementById("root");_.appendChild(p(t(S,null)));