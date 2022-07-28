"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[13717],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(v,c(c({ref:t},s),{},{components:n})):r.createElement(v,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21019:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"React 18"},i=void 0,l={unversionedId:"react-18",id:"react-18",title:"React 18",description:"Taro v3.5 \u5f00\u59cb\u652f\u6301\u3002",source:"@site/docs/react-18.md",sourceDirName:".",slug:"/react-18",permalink:"/taro-docs/docs/next/react-18",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/react-18.md",tags:[],version:"current",frontMatter:{title:"React 18"},sidebar:"docs",previous:{title:"PReact",permalink:"/taro-docs/docs/next/preact"},next:{title:"\u6982\u8ff0",permalink:"/taro-docs/docs/next/vue-overall"}},p={},s=[{value:"\u76f8\u5173\u8d44\u6599",id:"\u76f8\u5173\u8d44\u6599",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa\u65b0\u9879\u76ee",id:"\u521b\u5efa\u65b0\u9879\u76ee",level:3},{value:"\u65e7\u9879\u76ee\u5347\u7ea7",id:"\u65e7\u9879\u76ee\u5347\u7ea7",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],u={toc:s};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",a({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",a({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",a({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",a({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",a({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",a({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Taro v3.5 \u5f00\u59cb\u652f\u6301\u3002"))),(0,r.kt)("p",null,"\u4ece Taro v3.5 \u5f00\u59cb\uff0cTaro \u5c06\u9ed8\u8ba4\u4f7f\u7528 React 18 \u7248\u672c\u3002\u4f60\u53ef\u4ee5\u5728 Taro \u4f7f\u7528 React18 \u4e2d\u6fc0\u52a8\u4eba\u5fc3\u7684\u65b0\u7279\u6027\u4e86\u3002"),(0,r.kt)("h3",a({},{id:"\u76f8\u5173\u8d44\u6599"}),"\u76f8\u5173\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"https://reactjs.org/blog/2022/03/29/react-v18.html"}),"React v18.0"))),(0,r.kt)("h2",a({},{id:"\u4f7f\u7528\u65b9\u6cd5"}),"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("h3",a({},{id:"\u521b\u5efa\u65b0\u9879\u76ee"}),"\u521b\u5efa\u65b0\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# @tarojs/cli \u5347\u7ea7\u5230 v3.5\n$ taro init myProject\n# \u9009\u62e9\u300creact\u300d\u6846\u67b6 \n")),(0,r.kt)("h3",a({},{id:"\u65e7\u9879\u76ee\u5347\u7ea7"}),"\u65e7\u9879\u76ee\u5347\u7ea7"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),'$ taro update project 3.5\n# \u9879\u76ee package.json \u4e2d react / react-dom \u7248\u672c\u5347\u7ea7\u4e3a "^18"\n')),(0,r.kt)("div",a({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",a({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",a({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",a({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",a({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",a({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u5347\u7ea7\u4e86 Taro v3.5\uff0c\u4f46\u4e0d\u60f3\u4f7f\u7528 React v18\uff0c\u53ef\u4ee5\u5c06\u9879\u76ee ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"react / react-dom")," \u7248\u672c\u964d\u7ea7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"^17")," \u5e76\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u3002"))),(0,r.kt)("h2",a({},{id:"\u6ce8\u610f\u4e8b\u9879"}),"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u65f6\uff0cWebpack4 \u6682\u4e0d\u652f\u6301\u4f7f\u7528 React18\uff0c",(0,r.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/12134#issuecomment-1197904281"}),"#12134"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53d7\u5c0f\u7a0b\u5e8f\u73af\u5883\u9650\u5236\uff0c\u8bf8\u5982\u65b0 SSR Suspense \u7b49\u7279\u6027\u5c06\u4e0d\u80fd\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"RN \u6682\u4e0d\u652f\u6301 React v18\uff0c\u9700\u8981\u7b49\u5f85 RN \u5b98\u65b9\u8f93\u51fa\u652f\u6301\u65b9\u6848\u3002")))}d.isMDXComponent=!0}}]);