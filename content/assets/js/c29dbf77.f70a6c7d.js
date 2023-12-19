"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[7378],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,d=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,v=u["".concat(o,".").concat(g)]||u[g]||c[g]||d;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var d=t.length,i=new Array(d);i[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<d;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2934:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=t(87462),a=t(63366),d=(t(67294),t(3905)),i=["components"],l={id:"ledger-adv-api",title:"The Advanced Ledger API"},o=void 0,s={unversionedId:"api/ledger-adv-api",id:"version-4.6.2/api/ledger-adv-api",title:"The Advanced Ledger API",description:"In release 4.5.0, Apache BookKeeper introduces a few advanced API for advanced usage.",source:"@site/versioned_docs/version-4.6.2/api/ledger-adv-api.md",sourceDirName:"api",slug:"/api/ledger-adv-api",permalink:"/docs/4.6.2/api/ledger-adv-api",tags:[],version:"4.6.2",frontMatter:{id:"ledger-adv-api",title:"The Advanced Ledger API"},sidebar:"version-4.6.2/docsSidebar",previous:{title:"The Ledger API",permalink:"/docs/4.6.2/api/ledger-api"},next:{title:"DistributedLog",permalink:"/docs/4.6.2/api/distributedlog-api"}},p={},c=[{value:"LedgerHandleAdv",id:"ledgerhandleadv",level:2},{value:"Creating advanced ledgers",id:"creating-advanced-ledgers",level:3},{value:"Add Entries",id:"add-entries",level:3},{value:"Read Entries",id:"read-entries",level:3}],u={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,d.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"In release ",(0,d.kt)("inlineCode",{parentName:"p"},"4.5.0"),", Apache BookKeeper introduces a few advanced API for advanced usage.\nThis sections covers these advanced APIs."),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Before learn the advanced API, please read ",(0,d.kt)("a",{parentName:"p",href:"ledger-api"},"Ledger API")," first.")),(0,d.kt)("h2",{id:"ledgerhandleadv"},"LedgerHandleAdv"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/client/LedgerHandleAdv"},(0,d.kt)("inlineCode",{parentName:"a"},"LedgerHandleAdv"))," is an advanced extension of ",(0,d.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/client/LedgerHandle"},(0,d.kt)("inlineCode",{parentName:"a"},"LedgerHandle")),".\nIt allows user passing in an ",(0,d.kt)("inlineCode",{parentName:"p"},"entryId")," when adding an entry."),(0,d.kt)("h3",{id:"creating-advanced-ledgers"},"Creating advanced ledgers"),(0,d.kt)("p",null,"Here's an exmaple:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-java"},'byte[] passwd = "some-passwd".getBytes();\nLedgerHandleAdv handle = bkClient.createLedgerAdv(\n    3, 3, 2, // replica settings\n    DigestType.CRC32,\n    passwd);\n')),(0,d.kt)("p",null,"You can also create advanced ledgers asynchronously."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-java"},'class LedgerCreationCallback implements AsyncCallback.CreateCallback {\n    public void createComplete(int returnCode, LedgerHandle handle, Object ctx) {\n        System.out.println("Ledger successfully created");\n    }\n}\nclient.asyncCreateLedgerAdv(\n        3, // ensemble size\n        3, // write quorum size\n        2, // ack quorum size\n        BookKeeper.DigestType.CRC32,\n        password,\n        new LedgerCreationCallback(),\n        "some context"\n);\n')),(0,d.kt)("p",null,"Besides the APIs above, BookKeeper allows users providing ",(0,d.kt)("inlineCode",{parentName:"p"},"ledger-id")," when creating advanced ledgers."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-java"},'long ledgerId = ...; // the ledger id is generated externally.\n\nbyte[] passwd = "some-passwd".getBytes();\nLedgerHandleAdv handle = bkClient.createLedgerAdv(\n    ledgerId, // ledger id generated externally\n    3, 3, 2, // replica settings\n    DigestType.CRC32,\n    passwd);\n')),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Please note, it is users' responsibility to provide a unique ledger id when using the API above.\nIf a ledger already exists when users try to create an advanced ledger with same ledger id,\na ",(0,d.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/client/BKException.BKLedgerExistException.html"},"LedgerExistsException")," is thrown by the bookkeeper client.")),(0,d.kt)("h3",{id:"add-entries"},"Add Entries"),(0,d.kt)("p",null,"The normal ",(0,d.kt)("a",{parentName:"p",href:"ledger-api/#adding-entries-to-ledgers"},"add entries api")," in advanced ledgers are disabled. Instead, when users want to add entries\nto advanced ledgers, an entry id is required to pass in along with the entry data when adding an entry."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-java"},'long entryId = ...; // entry id generated externally\n\nledger.addEntry(entryId, "Some entry data".getBytes());\n')),(0,d.kt)("p",null,"A few notes when using this API:"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"The entry id has to be non-negative."),(0,d.kt)("li",{parentName:"ul"},"Clients are okay to add entries out of order."),(0,d.kt)("li",{parentName:"ul"},"However, the entries are only acknowledged in a monotonic order starting from 0.")),(0,d.kt)("h3",{id:"read-entries"},"Read Entries"),(0,d.kt)("p",null,"The read entries api in advanced ledgers remain same as ",(0,d.kt)("a",{parentName:"p",href:"ledger-api/#reading-entries-from-ledgers"},"normal ledgers"),"."))}g.isMDXComponent=!0}}]);