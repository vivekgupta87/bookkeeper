"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[6268],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97502:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const i={},a="BP-25: MovingChecksumToProto--Refactor the checksum part of bookkeeper",c={type:"mdx",permalink:"/bps/BP-25-MovingChecksumToProto",source:"@site/src/pages/bps/BP-25-MovingChecksumToProto.md",title:"BP-25: MovingChecksumToProto--Refactor the checksum part of bookkeeper",description:"Motivation",frontMatter:{}},l=[{value:"Motivation",id:"motivation",level:3},{value:"Public Interfaces",id:"public-interfaces",level:3},{value:"Proposed Changes",id:"proposed-changes",level:3},{value:"Compatibility, Deprecation, and Migration Plan",id:"compatibility-deprecation-and-migration-plan",level:3},{value:"Test Plan",id:"test-plan",level:3},{value:"Rejected Alternatives",id:"rejected-alternatives",level:3}],p={toc:l},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bp-25-movingchecksumtoproto--refactor-the-checksum-part-of-bookkeeper"},"BP-25: MovingChecksumToProto--Refactor the checksum part of bookkeeper"),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Current the checksum implementation is in client module while the checksum semantic is more close to protocol. Moreover, moving the checksum implementation to protocol will avoid server module's dependency to client module when doing checksum in server side."),(0,o.kt)("h3",{id:"public-interfaces"},"Public Interfaces"),(0,o.kt)("p",null,"An internal refactor not affecting public interfaces."),(0,o.kt)("h3",{id:"proposed-changes"},"Proposed Changes"),(0,o.kt)("p",null,"Move the DigestManager and related classes to proto module"),(0,o.kt)("h3",{id:"compatibility-deprecation-and-migration-plan"},"Compatibility, Deprecation, and Migration Plan"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h3",{id:"test-plan"},"Test Plan"),(0,o.kt)("p",null,"The original all tests should work as before."),(0,o.kt)("h3",{id:"rejected-alternatives"},"Rejected Alternatives"),(0,o.kt)("p",null,"N/A"))}s.isMDXComponent=!0}}]);