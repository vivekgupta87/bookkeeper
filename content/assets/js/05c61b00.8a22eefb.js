"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[1080],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86442:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={},i="BP-22: Separate closing ledgers from opening ledgers",l={type:"mdx",permalink:"/bps/BP-22-separate-closing-ledgers-from-opening-ledgers",source:"@site/src/pages/bps/BP-22-separate-closing-ledgers-from-opening-ledgers.md",title:"BP-22: Separate closing ledgers from opening ledgers",description:"Rejected due to lack of agreement that the issues raised in the motivation are valid.",frontMatter:{}},s=[{value:"Motivation",id:"motivation",level:3},{value:"Public Interfaces",id:"public-interfaces",level:3},{value:"Proposed Changes",id:"proposed-changes",level:3},{value:"Compatibility, Deprecation, and Migration Plan",id:"compatibility-deprecation-and-migration-plan",level:3},{value:"Test Plan",id:"test-plan",level:3},{value:"Rejected Alternatives",id:"rejected-alternatives",level:3}],d={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bp-22-separate-closing-ledgers-from-opening-ledgers"},"BP-22: Separate closing ledgers from opening ledgers"),(0,a.kt)("p",null,"Rejected due to lack of agreement that the issues raised in the motivation are valid."),(0,a.kt)("h3",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"In the beginning there was openLedger. Opening a ledger meant also figuring out what the last entry of a ledger should be, and writing it to ZooKeeper. For a long time this was the only way to read a ledger. If a writer was writing to the ledger, then anything it wrote after this point would be lost (fencing was added later). The open operation was the natural place to put recovery, as at this point it was only possible to read a recovered ledger."),(0,a.kt)("p",null,"openLedgerNoRecovery was added in 2011. This allowed users to read from a ledger as it was being written to, which opened up a bunch of tailing uses cases. Recovery was still the default, because that was what it had always been, and tailing was still considered a secondary usecase. If the user wanted to skip recovery, they'd have to explicitly call the no recovery method."),(0,a.kt)("p",null,"Then the new API arrived. In the new API, tailing is the primary read use case, and recovery has been demoted to a boolean flag on a builder for the open operation. The user is for the most part unaware of recovery."),(0,a.kt)("p",null,"However, recovery is still one of the most important aspects of BookKeeper. It is the mechanism on which our Total Order Atomic Broadcast guarantees are built. It deserves to be a bit more prominent than a boolean flag in a builder. It also doesn't help that the terminology is inconsistent. The flag is called withRecovery, while the to check if recovery is needed, we call isClosed. Closed itself is ambiguous because it may refer to the local handle, or it may refer to the state of the ledger."),(0,a.kt)("p",null,"As tailing is now the primary usecase, we expect that if a writer fails, then whichever node takes over as writer already has a non-recovered ReadHandle open. It would be nice to be able to continue using this Handle to read to the end of the ledger."),(0,a.kt)("h3",{id:"public-interfaces"},"Public Interfaces"),(0,a.kt)("p",null,"I proposes the removal of OpenOpBuilder#withRecovery()"),(0,a.kt)("p",null,"A new method on BookKeeper:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"interface BookKeeper {\n\n    ...\n\n    CompletableFuture<Void> seal(ReadHandle handle);\n}\n")),(0,a.kt)("h3",{id:"proposed-changes"},"Proposed Changes"),(0,a.kt)("p",null,"With the proposed interface changes, every ReadHandle will be opened without recovery. For the tailing usecase, usage will look like."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ReadHandle reader = bk.newOpenLedgerOp().withLedgerId(X).execute().get();\nlong lastReadEntry = -1;\nwhile (!leader) {\n    long lac = reader.getLastAddConfirmed();\n    if (lac > lastReadEntry) {\n        LedgerEntries entries = reader.read(lastReadEntry+1, lac).get();\n        doSomethingWithEntries(entries);\n        lastReadEntry = lac;\n    }\n}\nassert (leader);\nbk.seal(reader).get();\nlong lac = reader.readLastAddConfirmed().get();\nif (lac > lastReadEntry) {\n    LedgerEntries entries = reader.read(lastReadEntry+1, lac).get();\n    doSomethingWithEntries(entries);\n}\nWriteHandle writer = bk.newCreateLedgerOp().execute().get();\n")),(0,a.kt)("p",null,"Constrast this with how it is with the current recovery on open mechanism."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ReadHandle reader = bk.newOpenLedgerOp().withLedgerId(X).execute().get();\nlong lastReadEntry = -1;\nwhile (!leader) {\n    long lac = reader.getLastAddConfirmed();\n    if (lac > lastReadEntry) {\n        LedgerEntries entries = reader.read(lastReadEntry+1, lac).get();\n        doSomethingWithEntries(entries);\n        lastReadEntry = lac;\n    }\n}\nassert (leader);\nreader.close();\nreader = bk.newOpenLedgerOp().withLedgerId(reader.getId()).withRecovery(true).execute.get();\nlong lac = reader.readLastAddConfirmed().get();\nif (lac > lastReadEntry) {\n    LedgerEntries entries = reader.read(lastReadEntry+1, lac).get();\n    doSomethingWithEntries(entries);\n}\nWriteHandle writer = bk.newCreateLedgerOp().execute().get();\n")),(0,a.kt)("p",null,"The second one is more code, you need to remember to close the previous handle, and the intent of the operation is less clear."),(0,a.kt)("h3",{id:"compatibility-deprecation-and-migration-plan"},"Compatibility, Deprecation, and Migration Plan"),(0,a.kt)("p",null,"This change is only on the new API, so there's no promise of compatibility."),(0,a.kt)("h3",{id:"test-plan"},"Test Plan"),(0,a.kt)("p",null,"This change replaces #withRecovery() with #seal(), so anyplace withRecovery was tested, should be replaced with #seal()."),(0,a.kt)("h3",{id:"rejected-alternatives"},"Rejected Alternatives"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ReadHandle#seal: Rejected as ReadHandle should be side effect free"),(0,a.kt)("li",{parentName:"ul"},"OpenOpBuilder#withRecovery(true): Rejected as we want tailing to be default usecase."),(0,a.kt)("li",{parentName:"ul"},"ReadHandle#forceClosed() or BookKeeper#forceClosed(ReadHandle): Rejected as unclear what the state of handle would be after (has ReadHandle#close been called).")))}p.isMDXComponent=!0}}]);