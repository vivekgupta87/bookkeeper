"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[9918],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},76410:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=r(83117),n=(r(67294),r(3905));const i={id:"metrics",title:"Metric collection"},o=void 0,l={unversionedId:"admin/metrics",id:"version-4.16.1/admin/metrics",title:"Metric collection",description:"BookKeeper enables metrics collection through a variety of stats providers.",source:"@site/versioned_docs/version-4.16.1/admin/metrics.md",sourceDirName:"admin",slug:"/admin/metrics",permalink:"/docs/admin/metrics",draft:!1,tags:[],version:"4.16.1",frontMatter:{id:"metrics",title:"Metric collection"},sidebar:"docsSidebar",previous:{title:"Using AutoRecovery",permalink:"/docs/admin/autorecovery"},next:{title:"Upgrade",permalink:"/docs/admin/upgrade"}},s={},p=[{value:"Stats providers",id:"stats-providers",level:2},{value:"Enabling stats providers in bookies",id:"enabling-stats-providers-in-bookies",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"BookKeeper enables metrics collection through a variety of ",(0,n.kt)("a",{parentName:"p",href:"#stats-providers"},"stats providers"),"."),(0,n.kt)("h2",{id:"stats-providers"},"Stats providers"),(0,n.kt)("p",null,"BookKeeper has stats provider implementations for these sinks:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Provider"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Provider class name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.bookkeeper.stats/codahale-metrics-provider"},"Codahale Metrics")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"org.apache.bookkeeper.stats.CodahaleMetricsProvider"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://prometheus.io/"},"Prometheus")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"org.apache.bookkeeper.stats.prometheus.PrometheusMetricsProvider"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-stats-providers/codahale-metrics-provider"},"Codahale Metrics")," stats provider is the default provider.")),(0,n.kt)("h2",{id:"enabling-stats-providers-in-bookies"},"Enabling stats providers in bookies"),(0,n.kt)("p",null,"Two stats-related ",(0,n.kt)("a",{parentName:"p",href:"../reference/config/"},"configuration parameters")," are available for bookies:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"enableStatistics")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether statistics are enabled for the bookie"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"sanityCheckMetricsEnabled")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Flag to enable sanity check metrics in bookie stats"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"statsProviderClass")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stats provider class used by the bookie"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"org.apache.bookkeeper.stats.CodahaleMetricsProvider"))))),(0,n.kt)("p",null,"To enable stats:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"set the ",(0,n.kt)("inlineCode",{parentName:"li"},"enableStatistics")," parameter to ",(0,n.kt)("inlineCode",{parentName:"li"},"true")),(0,n.kt)("li",{parentName:"ul"},"set ",(0,n.kt)("inlineCode",{parentName:"li"},"statsProviderClass")," to the desired provider (see the ",(0,n.kt)("a",{parentName:"li",href:"#stats-providers"},"table above")," for a listing of classes)")))}m.isMDXComponent=!0}}]);