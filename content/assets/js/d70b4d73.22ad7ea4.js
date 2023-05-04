"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[8385],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||n;return a?r.createElement(m,o(o({ref:t},s),{},{components:a})):r.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56826:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return p}});var r=a(83117),i=(a(67294),a(3905));const n={},o="Papers and Presentations",l={type:"mdx",permalink:"/community/presentations",source:"@site/src/pages/community/presentations.md",title:"Papers and Presentations",description:"Papers",frontMatter:{}},p=[{value:"Papers",id:"papers",level:2},{value:"Presentations",id:"presentations",level:2},{value:"Blog Posts",id:"blog-posts",level:2}],c={toc:p},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"papers-and-presentations"},"Papers and Presentations"),(0,i.kt)("h2",{id:"papers"},"Papers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://ieeexplore.ieee.org/abstract/document/7930058/"},"DistributedLog: A High Performance Replicated Log Service"),", Sijie Guo, Robin Dhamankar, and Leigh Stewart. Data Engineering (ICDE), 2017 IEEE 33rd International Conference on. IEEE, 2017."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://dl.acm.org/citation.cfm?id=2433144"},"Durability with BookKeeper"),", Flavio P. Junqueira, Ivan Kelly, Benjamin Reed")),(0,i.kt)("h2",{id:"presentations"},"Presentations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.slideshare.net/hustlmsp/apache-bookkeeper-a-high-performance-and-low-latency-storage-service"},"Apache BookKeeper: A High Performance and Low Latency Storage Service"),", Sijie Guo, Linux Vault 2017"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.slideshare.net/jujjuri/apache-con2016final"},"Apache BookKeeper as distributed Store"),", (",(0,i.kt)("a",{parentName:"li",href:"http://feathercast.apache.org/apachecon-na-2016-low-latency-distributed-storage-services-using-apache-bookkeeper-venkateswararao-jujjuri-sijie-guo/"},"audio"),") JV Jujjuri, ApacheCon 2016"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apachebigdata2016.sched.org/event/6M74/building-a-durable-real-time-data-pipeline-apache-bookkeeper-at-twitter-sijie-guo-leigh-stewart-twitter"},"Building a Durable Real-Time Data Pipeline: Apache BookKeeper at Twitter"),", Leigh Stewart, Apache Big Data 2016 ( ",(0,i.kt)("a",{parentName:"li",href:"http://schd.ws/hosted_files/apachebigdata2016/65/Building%20a%20Durable%20Real-Time%20Data%20Pipeline-Apache%20BookKeeper%20at%20Twitter.pdf"},"Slides")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://daxue.qq.com/content/content/id/2492"},"Scale DistributedLog at Twitter"),", Sijie Guo, QCon Beijing, April 2016"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.oreilly.com/ideas/twitters-real-time-data-stack?twitter=@bigdata"},"Building DistributedLog, a high-performance replicated log service")," (",(0,i.kt)("a",{parentName:"li",href:"http://conferences.oreilly.com/strata/strata-ca-2016/public/schedule/detail/46897"},"Slides"),"), Sijie Guo, Strata+Hadoop World, March 2016"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/QW1OEQxcjZc"},"Building DistributedLog, a high-performance replicated log service"),", Sijie Guo, Sep 2015"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.slideshare.net/MessagingMeetup/cloud-messaging-service-technical-overview"},"Cloud Messaging Service - Technical Overview"),", Matteo Merli, Sep 2015"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.slideshare.net/MatthieuMorel/building-reliable-systems-with-apache-bookkeeper"},"Building reliable systems with Apache BookKeeper"),", Matthieu Morel, Jun 2014"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/download/attachments/27832576/bk-hadoop-summit-2013.pdf?version=1&modificationDate=1363841022000&api=v2"},"Serving millions of journals with Apache BookKeeper"),", Flavio P. Junqueira, Ivan Kelly, March 2013"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://hbtc2012.hadooper.cn/subject/track1maheswara2.pdf"},"Namenode High Availability with BookKeeper"),", Uma Maheswara Rao G, At Hadoop And BigData Technology Conference 2012"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/download/attachments/27832576/bookkeeper-ladis-2012.pdf?version=1&modificationDate=1343016091000&api=v2"},"Durability with BookKeeper"),", Flavio P. Junqueira, LADIS Workshop, July 2012"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/download/attachments/27832576/bookkeeper-hic-2011.pdf?version=1&modificationDate=1322791384000&api=v2"},"BookKeeper"),", Flavio P. Junqueira, Hadoop in China, 2011")),(0,i.kt)("h2",{id:"blog-posts"},"Blog Posts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yahooeng.tumblr.com/post/150078336821/open-sourcing-pulsar-pub-sub-messaging-at-scale"},"Open-sourcing Pulsar, Pub-sub Messaging at Scale"),", Sep 2016"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://eolivelli.blogspot.it/2016/03/majordodo-distributed-resource-manager.html"},"Majordodo - a Distributed Resource Manager built on top of Apache BookKeeper"),", March 2016 "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.twitter.com/2015/building-distributedlog-twitter-s-high-performance-replicated-log-service"},"Building DistributedLog - Twitter's high performance replicated log service"),", Sep 2015"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://yahooeng.tumblr.com/post/109908973316/bookkeeper-yahoos-distributed-log-storage-is"},"BookKeeper - Yahoo's Distributed Log Storage - is an Apache Top Level Project"),", Feb 2015"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.yahoo.com/blogs/ydn/bookkeeper-durability-scale-54048.html"},"BookKeeper - Durability at Scale"),", Nov 2012")))}u.isMDXComponent=!0}}]);