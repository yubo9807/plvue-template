import{c as f,r as p,h as t,i as m,L as s,R as h,a as i,F as y,b}from"./pl-vue-6f01cf60.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}})();const v="production",g=Object.freeze({BASE_URL:"/plvue-template",NODE_ENV:v,BASE_API:"/api"}),a={count:0},L={addCount(){a.count++}},A=f(a,L);function N(){const r=A(),n=p(0);return t("div",null,t("h1",null,()=>n.value),t("button",{onclick:()=>n.value++},"count ++"),t("h1",null,()=>r.count),t("button",{onclick:r.addCount},"store.count++"))}function O(){return t("div",{style:"margin-top: 80px"},t("a",{href:"http://plvue.hpyyb.cn/",target:"_blank"},"Pl Vue 文档"))}const E="not-found-710606",F={"not-found":"not-found-710606",notFound:E};function P(){return t("div",{className:F["not-found"]},"404")}const R="nav-fbcc39",S={nav:R};function _(){return m({base:g.BASE_URL,mode:"hash"}),t(y,null,t(h,{notFound:P},t(i,{path:"/",component:N}),t(i,{path:"/about",component:O})),t("nav",{className:S.nav},t(s,{to:"/"},"Home"),t(s,{to:"/about"},"About")))}const l=document.getElementById("root");l.innerHTML="";l.appendChild(b(t(_,null)));