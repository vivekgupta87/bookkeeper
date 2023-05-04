"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[2802],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const i={id:"run-locally",title:"Run bookies locally"},l=void 0,a={unversionedId:"getting-started/run-locally",id:"version-4.15.4/getting-started/run-locally",title:"Run bookies locally",description:"Bookies are individual BookKeeper servers. You can run an ensemble of bookies locally on a single machine using the localbookie command of the bookkeeper CLI tool and specifying the number of bookies you'd like to include in the ensemble.",source:"@site/versioned_docs/version-4.15.4/getting-started/run-locally.md",sourceDirName:"getting-started",slug:"/getting-started/run-locally",permalink:"/docs/4.15.4/getting-started/run-locally",draft:!1,tags:[],version:"4.15.4",frontMatter:{id:"run-locally",title:"Run bookies locally"},sidebar:"docsSidebar",previous:{title:"BookKeeper installation",permalink:"/docs/4.15.4/getting-started/installation"},next:{title:"BookKeeper concepts and architecture",permalink:"/docs/4.15.4/getting-started/concepts"}},c={},u=[],s={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Bookies are individual BookKeeper servers. You can run an ensemble of bookies locally on a single machine using the ",(0,o.kt)("a",{parentName:"p",href:"../reference/cli#bookkeeper-localbookie"},(0,o.kt)("inlineCode",{parentName:"a"},"localbookie"))," command of the ",(0,o.kt)("inlineCode",{parentName:"p"},"bookkeeper")," CLI tool and specifying the number of bookies you'd like to include in the ensemble."),(0,o.kt)("p",null,"This would start up an ensemble with 10 bookies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bin/bookkeeper localbookie 10\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When you start up an ensemble using ",(0,o.kt)("inlineCode",{parentName:"p"},"localbookie"),", all bookies run in a single JVM process.")))}f.isMDXComponent=!0}}]);