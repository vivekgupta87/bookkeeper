"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[1922],{3905:function(e,o,n){n.d(o,{Zo:function(){return m},kt:function(){return k}});var t=n(67294);function i(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){i(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var o=t.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},m=function(e){var o=c(e.components);return t.createElement(l.Provider,{value:o},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,k=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?t.createElement(k,s(s({ref:o},m),{},{components:n})):t.createElement(k,s({ref:o},m))}));function k(e,o){var n=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24189:function(e,o,n){n.r(o),n.d(o,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return c}});var t=n(83117),i=(n(67294),n(3905));const r={id:"decomission",title:"Decommission Bookies"},s=void 0,a={unversionedId:"admin/decomission",id:"version-4.11.1/admin/decomission",title:"Decommission Bookies",description:"In case the user wants to decommission a bookie, the following process is useful to follow in order to verify if the",source:"@site/versioned_docs/version-4.11.1/admin/decomission.md",sourceDirName:"admin",slug:"/admin/decomission",permalink:"/docs/4.11.1/admin/decomission",draft:!1,tags:[],version:"4.11.1",frontMatter:{id:"decomission",title:"Decommission Bookies"},sidebar:"version-4.11.1/docsSidebar",previous:{title:"BookKeeper Admin REST API",permalink:"/docs/4.11.1/admin/http"},next:{title:"BookKeeper API",permalink:"/docs/4.11.1/api/overview"}},l={},c=[{value:"Before we decommission",id:"before-we-decommission",level:3},{value:"Process of Decommissioning",id:"process-of-decommissioning",level:3}],m={toc:c},p="wrapper";function d(e){let{components:o,...n}=e;return(0,i.kt)(p,(0,t.Z)({},m,n,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In case the user wants to decommission a bookie, the following process is useful to follow in order to verify if the\ndecommissioning was safely done."),(0,i.kt)("h3",{id:"before-we-decommission"},"Before we decommission"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure state of your cluster can support the decommissioning of the target bookie.\nCheck if ",(0,i.kt)("inlineCode",{parentName:"p"},"EnsembleSize >= Write Quorum >= Ack Quorum")," stays true with one less bookie")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure target bookie shows up in the listbookies command.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that there is no other process ongoing (upgrade etc)."))),(0,i.kt)("h3",{id:"process-of-decommissioning"},"Process of Decommissioning"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log on to the bookie node, check if there are underreplicated ledgers.")),(0,i.kt)("p",null,"If there are, the decommission command will force them to be replicated.\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell listunderreplicated")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stop the bookie\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper-daemon.sh stop bookie"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the decommission command.\nIf you have logged onto the node you wish to decommission, you don't need to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"-bookieid"),"\nIf you are running the decommission command for target bookie node from another bookie node you should mention\nthe target bookie id in the arguments for ",(0,i.kt)("inlineCode",{parentName:"p"},"-bookieid"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell decommissionbookie"),"\nor\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell decommissionbookie -bookieid <target bookieid>"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Validate that there are no ledgers on decommissioned bookie\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell listledgers -bookieid <target bookieid>")))),(0,i.kt)("p",null,"Last step to verify is you could run this command to check if the bookie you decommissioned doesn\u2019t show up in list bookies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bookkeeper shell listbookies -rw -h\n./bookkeeper shell listbookies -ro -h\n")))}d.isMDXComponent=!0}}]);