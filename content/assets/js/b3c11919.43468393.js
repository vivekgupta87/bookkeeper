"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[372],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=i,m=u["".concat(s,".").concat(b)]||u[b]||c[b]||n;return r?o.createElement(m,a(a({ref:t},d),{},{components:r})):o.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},78170:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return s}});var o=r(83117),i=(r(67294),r(3905));const n={},a="BP-26: Move distributedlog library as part of bookkeeper",l={type:"mdx",permalink:"/bps/BP-26-move-distributedlog-core-library",source:"@site/src/pages/bps/BP-26-move-distributedlog-core-library.md",title:"BP-26: Move distributedlog library as part of bookkeeper",description:"Motivation",frontMatter:{}},s=[{value:"Motivation",id:"motivation",level:3},{value:"Public Interfaces",id:"public-interfaces",level:3},{value:"Proposed Changes",id:"proposed-changes",level:3},{value:"Compatibility, Deprecation, and Migration Plan",id:"compatibility-deprecation-and-migration-plan",level:3},{value:"Test Plan",id:"test-plan",level:3},{value:"Rejected Alternatives",id:"rejected-alternatives",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bp-26-move-distributedlog-library-as-part-of-bookkeeper"},"BP-26: Move distributedlog library as part of bookkeeper"),(0,i.kt)("h3",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"DistributedLog is an extension of Apache BookKeeper, which offers ",(0,i.kt)("em",{parentName:"p"},"reopenable")," log streams as its storage primitives.\nIt is tightly built over bookkeeper ledgers, and provides an easier-to-use abstraction and api to use. Applications\ncan use ",(0,i.kt)("em",{parentName:"p"},"named")," log streams rather than ",(0,i.kt)("em",{parentName:"p"},"numbered")," ledgers to store their data. For example, users can use log streams\nas files to storge objects, checkpoints and other more general filesystem related use cases."),(0,i.kt)("p",null,"Moving the distributedlog core library as part of bookkeeper would have following benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'It provides more generic "reopenable" log abstraction. It lowers the barrier for people to use bookkeeper to store\ndata, and bring in more use cases into bookkeeper ecosystem.'),(0,i.kt)("li",{parentName:"ul"},"Using ledgers to build continous log stream has been a pattern that been reimplemented multiple times at multiple places,\nfrom older projects like HDFS namenode log manager, Hedwig to the newer projects like DistributedLog and Pulsar."),(0,i.kt)("li",{parentName:"ul"},"Most of the distributedlog usage is using the distributedlog library which only depends Apache BookKeeper and there is no\nadditional components introduced. To simplify those usages, it is better to release distributedlog library along with\nbookkeeper. It provides a better integration and release procedure.")),(0,i.kt)("p",null,'This proposal proposes "moving the distributedlog library code base as part of bookkeeper and continuing the library\ndevelopment in bookkeeper".'),(0,i.kt)("h3",{id:"public-interfaces"},"Public Interfaces"),(0,i.kt)("p",null,"This is a new library moved in bookkeeper. It will ",(0,i.kt)("em",{parentName:"p"},"NOT")," touch any existing bookkeeper modules and ledger api."),(0,i.kt)("h3",{id:"proposed-changes"},"Proposed Changes"),(0,i.kt)("p",null,"This proposal will ",(0,i.kt)("em",{parentName:"p"},"ONLY")," move following library-only modules from distributedlog repo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"distributedlog-core: the log stream library that build over bookkeeper ledgr api. It doesn't introduce any service components. Library only."),(0,i.kt)("li",{parentName:"ul"},"distributedlog-io/dlfs: A hdfs filesystem api wrapper over the log stream api, to provide filesystem-like usage over bookkeeper.")),(0,i.kt)("p",null,"This proposal will ",(0,i.kt)("em",{parentName:"p"},"NOT"),' move other service components like "distributedlog-proxy".'),(0,i.kt)("p",null,"The steps to make this change are described as following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the proposed modules (",(0,i.kt)("inlineCode",{parentName:"li"},"distributedlog-core")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"distributedlog-io/dlfs"),") will be moved under ",(0,i.kt)("inlineCode",{parentName:"li"},"stream/distributedlog")," directory at apache bookkeeper repo."),(0,i.kt)("li",{parentName:"ul"},'a new "stream" profile will be added to the root ',(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml"),' file. The distributedlog module will only be build when "-Pstream" is specified\nin the maven build command. This allows users who only use ledger api skip building distributedlog module.'),(0,i.kt)("li",{parentName:"ul"},"the distributedlog api, javadoc api and some tutorials will be integrated with current bookkeeper website to provide integrated experiences\nwhen users browse bookkeeper website.")),(0,i.kt)("h3",{id:"compatibility-deprecation-and-migration-plan"},"Compatibility, Deprecation, and Migration Plan"),(0,i.kt)("p",null,"This doesn't change existing modules or api. so no compatibility, deprecation and migration plan for bookkeeper users."),(0,i.kt)("p",null,"For distributedlog users, the distributedlog library will begin release under groupId ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.bookkeeper")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.distributedlog"),".\nAPI documentation will be updated to reflect this."),(0,i.kt)("h3",{id:"test-plan"},"Test Plan"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"rejected-alternatives"},"Rejected Alternatives"),(0,i.kt)("p",null,"N/A"))}u.isMDXComponent=!0}}]);