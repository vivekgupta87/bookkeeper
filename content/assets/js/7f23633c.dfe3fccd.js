"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[5638],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return u}});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=d(o),h=n,u=k["".concat(l,".").concat(h)]||k[h]||p[h]||a;return o?i.createElement(u,r(r({ref:t},c),{},{components:o})):i.createElement(u,r({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[k]="string"==typeof e?e:n,r[1]=s;for(var d=2;d<a;d++)r[d]=o[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},84609:function(e,t,o){o.r(t),o.d(t,{contentTitle:function(){return r},default:function(){return k},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var i=o(83117),n=(o(67294),o(3905));const a={},r="BP-41: Separate BookieId from Bookie Network Address",s={type:"mdx",permalink:"/bps/BP-41-bookieid",source:"@site/src/pages/bps/BP-41-bookieid.md",title:"BP-41: Separate BookieId from Bookie Network Address",description:"Motivation",frontMatter:{}},l=[{value:"Motivation",id:"motivation",level:3},{value:"Public Interfaces",id:"public-interfaces",level:3},{value:"Details on the proposed Changes",id:"details-on-the-proposed-changes",level:3},{value:"BookieId validation",id:"bookieid-validation",level:4},{value:"BookKeeper Client Side Changes",id:"bookkeeper-client-side-changes",level:4},{value:"Disabling BookieAddressResolver",id:"disabling-bookieaddressresolver",level:4},{value:"Handling the Local Bookie Node in EnsemblePlacementPolicy",id:"handling-the-local-bookie-node-in-ensembleplacementpolicy",level:4},{value:"Bookie Side Changes",id:"bookie-side-changes",level:4},{value:"Auditor and Replication Changes",id:"auditor-and-replication-changes",level:4},{value:"Bookie Garbage Collection Changes",id:"bookie-garbage-collection-changes",level:4},{value:"Tools changes",id:"tools-changes",level:4},{value:"REST API Changes",id:"rest-api-changes",level:4},{value:"Compatibility, Deprecation, and Migration Plan",id:"compatibility-deprecation-and-migration-plan",level:3},{value:"Test Plan",id:"test-plan",level:3},{value:"Rejected Alternatives",id:"rejected-alternatives",level:3},{value:"Make BookieSocketAddress an abstract class",id:"make-bookiesocketaddress-an-abstract-class",level:4},{value:"Force a specific format (like UUID) to custom BookieId",id:"force-a-specific-format-like-uuid-to-custom-bookieid",level:4}],d={toc:l},c="wrapper";function k(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bp-41-separate-bookieid-from-bookie-network-address"},"BP-41: Separate BookieId from Bookie Network Address"),(0,n.kt)("h3",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"We want to separate the concepts of ",(0,n.kt)("strong",{parentName:"p"},"BookieId")," from ",(0,n.kt)("strong",{parentName:"p"},"BookieSocketAddress"),"."),(0,n.kt)("p",null,"Currently (up to 4.11.x) there is a too strict coupling from the ID of a Bookie (",(0,n.kt)("strong",{parentName:"p"},"BookieId"),") and its network location (",(0,n.kt)("strong",{parentName:"p"},"BookieSocketAddress"),")."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"LedgerMetadata")," structure contains the location of the entries of a ledger, and it stores BookieSocketAddresses (simply a hostname:port or ip:port pair).\nThe client uses this information to connect to the bookies and retrieve ledger data."),(0,n.kt)("p",null,"So ",(0,n.kt)("em",{parentName:"p"},"the identity of a bookie is bound to the network address")," of the primary endpoint of the Bookie: the '",(0,n.kt)("strong",{parentName:"p"},"bookie-rpc"),"' endpoint in terms of ",(0,n.kt)("a",{parentName:"p",href:"BP-38-bookie-endpoint-discovery/"},"BP-38")),(0,n.kt)("p",null,"Limits of current version, because:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You cannot easily change the network address of a Bookie: a manual intervention is needed."),(0,n.kt)("li",{parentName:"ul"},"The Bookie cannot have a ",(0,n.kt)("strong",{parentName:"li"},"dynamic network address")," or DNS name."),(0,n.kt)("li",{parentName:"ul"},"You cannot use a custom Id for the bookie, something that is ",(0,n.kt)("strong",{parentName:"li"},"meaningful")," in the context of the deployment of the bookie."),(0,n.kt)("li",{parentName:"ul"},"In case of future implementations that will open ",(0,n.kt)("strong",{parentName:"li"},"multiple endpoints")," on the bookie it is not possible to decide which endpoint should be used as BookieId. ")),(0,n.kt)("p",null,"This proposal addresses these problems by proposing to separate the concept of ",(0,n.kt)("strong",{parentName:"p"},"BookieId")," from ",(0,n.kt)("strong",{parentName:"p"},"BookieSocketAddress"),"."),(0,n.kt)("p",null,"We will have to introduce a little break in the Client API, in order to switch from using BookieSocketAddress to a more opaque BookieId."),(0,n.kt)("p",null,"Fortunately we will be able to keep compatibility with old clients and old bookies are far as the Bookie continues to use a BookieId that looks like a BookieSocketAddress.\nSee the paragraphs below for the details. "),(0,n.kt)("h3",{id:"public-interfaces"},"Public Interfaces"),(0,n.kt)("p",null,"We are introducing a new class BookieId that is simply a wrapper for a String."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"final class BookieId {\n    private final String bookieId;\n    public String toString() {\n         return bookieId;\n    }\n    public static BookieId parse(String bookieId) {\n         // validation omitted...\n         return new BookieId(bookieId);\n    }\n}\n")),(0,n.kt)("p",null,"Having a class instead of a simple String is better because it provides a strongly typed API."),(0,n.kt)("p",null,"The LedgerMetadata class will be changed to use BookieId instead of BookieSocketAddress.\nThis will break source and binary compatibility for Java clients, applications that use LedgerMetadata (usually for debug or for tools) will have to be recompiled."),(0,n.kt)("p",null,"The serialized representation of a BookieSocketAddress, both for LedgerMetadata and Bookie Registration, is a simple String on ZooKeeper: this change is not about the format of data stored on Metadata Service."),(0,n.kt)("p",null,"It is simply a pure refactor of Java interfaces."),(0,n.kt)("p",null,"We have to introduce an internal API, ",(0,n.kt)("strong",{parentName:"p"},"BookieAddressResolver"),", that maps a ",(0,n.kt)("em",{parentName:"p"},"BookieId")," to a ",(0,n.kt)("em",{parentName:"p"},"BookieSocketAddress"),": the client connectes to a Bookie it looks up the ",(0,n.kt)("strong",{parentName:"p"},"current network address")," using BookieAddressResolver."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"interface BookieAddressResolver {\n    BookieSocketAddress resolve(BookieId id);\n}\n")),(0,n.kt)("p",null,"Initially it is not expected that the user provides a custom implementation of BookieAddressResolver."),(0,n.kt)("p",null,"It is expected that the implementation of this interface coordinates with the BookieWatcher and the RegistrationDriver in order to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"map BookieId to BookieSocketAddress using ",(0,n.kt)("inlineCode",{parentName:"li"},"getBookieServiceInfo(BookieId id)")," API"),(0,n.kt)("li",{parentName:"ul"},"cache efficiently this mapping in order to do not have a significant impact on the hot paths (reads and writes), and to save resources on the Metadata Service")),(0,n.kt)("p",null,"We provide an utility method BookieSocketAddress#toBookieId that helps particularly in test cases, this method simply returns a BookieId\nbuilt by the serialized representation of the BookieSocketAddress (hostname:port or ip:port)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"final class BookieSocketAddress {\n    ....\n    BookieId toBookieId() {\n        return BookieId.parse(this.toString());\n    }\n}\n")),(0,n.kt)("p",null,"The RegistrationClient and RegistrationManager interfaces will be refactored to use BookiId instead of String and BookieSocketAddress."),(0,n.kt)("p",null,"The Bookie itself will expose an API to return the current BookieSocketAddress and current BookieId, this is useful for tests and for the RegistrationManager."),(0,n.kt)("p",null,"The EnsemblePlacementPolicy and the BookieWatcher will deal with BookieIds and not with BookieSocketAddresses."),(0,n.kt)("p",null,"The implementations of EnsemblePlacementPolicy that are aware of the network location of the Bookies will need to have access to the\nBookieAddressResolver, in order to map a BookieId to the BookieSocketAddress and the BookieSocketAddress to the network location."),(0,n.kt)("h3",{id:"details-on-the-proposed-changes"},"Details on the proposed Changes"),(0,n.kt)("h4",{id:"bookieid-validation"},"BookieId validation"),(0,n.kt)("p",null,"The BookieId is a non empty string that can contain:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ASCII digits and letters (","[a-zA-Z9-0]",")"),(0,n.kt)("li",{parentName:"ul"},"the colon character (':')"),(0,n.kt)("li",{parentName:"ul"},"the dash character ('-')"),(0,n.kt)("li",{parentName:"ul"},"the dot character ('.') ")),(0,n.kt)("h4",{id:"bookkeeper-client-side-changes"},"BookKeeper Client Side Changes"),(0,n.kt)("p",null,"See the 'Public interfaces' section."),(0,n.kt)("p",null,"On the client side code it will be clearer when we are dealing with BookieId, and basically the client API won't deal with network addresses anymore.\nThis change will be visible both on the legacy LedgerHandle API and on the new WriteHandle/ReadHandle API, basically because the new API is only a wrapper over the LedgerHandle API."),(0,n.kt)("p",null,"When the BookKeeper client connects to a bookie (see ",(0,n.kt)("strong",{parentName:"p"},"PerChannelBookieClient"),") it uses the BookieAddressResolver interface to get the current BookieSocketAddress of the Bookie.\nThe key of the Connection Pool inside the BookieClient will be BookieId and no more BookieSocketAddress. "),(0,n.kt)("h4",{id:"disabling-bookieaddressresolver"},"Disabling BookieAddressResolver"),(0,n.kt)("p",null,"Using the BookieServiceInfo abstraction needs additional accesses to the Metadata Service (usually ZooKeeper) and this comes with a cost especially during the bootstrap of the client, because you have to resolve the address of every Bookie you are going to write to or to read from."),(0,n.kt)("p",null,"We add a flag to disable the BookieAddressResolver, without this feature the client will be able only to connect to Bookies with the legacy BookieId.\nIn this case the BookieAddressResolver implementation will be a simple conversion from the BookieId, assuming the 4.11 format hostname:port."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"enableBookieAddressResolver=true\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"enableBookieAddressResolver")," flag is used by the Client, by the Auditor and by all of the tools and it is enabled by default. "),(0,n.kt)("h4",{id:"handling-the-local-bookie-node-in-ensembleplacementpolicy"},"Handling the Local Bookie Node in EnsemblePlacementPolicy"),(0,n.kt)("p",null,"Unfortunately thru the codebase we used sometimes dummy BookieId that are not mapped to real Bookies, this happens in the EnsamblePlacementPolicies in which we create a BookieId for the 'local node' and using TCP port 0. In this case we have to implement a fallback dummy resolution that created a BookieSocketAddress without using the MetadataService"),(0,n.kt)("h4",{id:"bookie-side-changes"},"Bookie Side Changes"),(0,n.kt)("p",null,"On the Bookie we introduce ",(0,n.kt)("strong",{parentName:"p"},"a configuration option")," (bookieid) to set a custom bookie id.\nIf you set this option then the Bookie will advertise itself on MetadataService using the configured id, and publish the 'bookie-rpc' endpoint as configured by\nthe ",(0,n.kt)("strong",{parentName:"p"},"advertisedAddress")," configuration option and the other network related options.\nThis BookieId will be present only in the configuration file and it is the key to lookup the ",(0,n.kt)("em",{parentName:"p"},"Cookie")," on the MetadataService.\nInadvertently changing the BookieId will prevent the Bookie to boot as it won't find a matching Cookie.\nThere is no need to store the BookieId on the cookie or persist it on the local storage (ledgers, indexes or journal directories)."),(0,n.kt)("h4",{id:"auditor-and-replication-changes"},"Auditor and Replication Changes"),(0,n.kt)("p",null,"The Auditor deals with LedgerMetadata and so it will simply work with BookieIds and not with BookieSocketAddress.\nWhen the Auditor needs to connect to a Bookie it will use the BookieAddressResolver to get the current address of the Bookie. "),(0,n.kt)("h4",{id:"bookie-garbage-collection-changes"},"Bookie Garbage Collection Changes"),(0,n.kt)("p",null,"The Bookie decides to reclaim space by looking into LedgerMetadata and checking that a given ledger does not exist anymore.\nIt will use its own local BookieId instead of the BookieSocketAddress as expected."),(0,n.kt)("h4",{id:"tools-changes"},"Tools changes"),(0,n.kt)("p",null,"All of the tools that deal with LedgerMetadata will use BookieId instead of BookieSocketAddress, in general this fact will allow to use free forn BookieIDs,\ninstead of hostname:port pairs (we had validations on tools that helped the user to use always BookieIds in hostname:port form)."),(0,n.kt)("h4",{id:"rest-api-changes"},"REST API Changes"),(0,n.kt)("p",null,"In the REST API we will deal with BookieIds and not with BookieSocketAddresses anymore, the change will be straighforward and compatible with current API.\nWhen new custom BookieIDs will be used then they will appear on the REST API as well, but this will be expected by users."),(0,n.kt)("h3",{id:"compatibility-deprecation-and-migration-plan"},"Compatibility, Deprecation, and Migration Plan"),(0,n.kt)("p",null,"The proposed change will be compatible with all existing clients and bookies as far as you still use BookieIds in the hostname:port form and to not use a custom BookieId.\nThe Bookie by default will continue to use as BookieID a compatible value computed exactly as in version 4.11.\nIncompatibility will start as soon as you enable custom BookieIDs on the bookies, from that point clients and old Auditors won't be able to deal with new bookies.\nNew clients will always be able to connect and use legacy bookies."),(0,n.kt)("p",null,"Custom EnsemblePlacementPolicies must be adapted to the new interfaces but the change will usually as simple as just replacing BookieSocketAdress with BookieId.\nNo need to change address to rack mapping scripts, as they will still deal with raw DNS hostnames and not with BookieIds."),(0,n.kt)("h3",{id:"test-plan"},"Test Plan"),(0,n.kt)("p",null,"New unit tests will be added to cover all of the code changes.\nNo need for additional integration tests."),(0,n.kt)("h3",{id:"rejected-alternatives"},"Rejected Alternatives"),(0,n.kt)("h4",{id:"make-bookiesocketaddress-an-abstract-class"},"Make BookieSocketAddress an abstract class"),(0,n.kt)("p",null,'In order to preserve most of the binary compatibility in the Java client we could still keep BookieSocketAddress class in LedgerMetadata and have some "GenericBookieSocketAddress" and "PhysicalBookieSocketAddress" implementations.\nBut this way it won\'t be easy to understand where we are using a "bookie id" and when we are referring to a network address.\nThe BookieAddressResolver interface would be needed anyway and it should deal with pure BookieIds and BookieSocketAddress instance that are already resolved to\na network address.'),(0,n.kt)("h4",{id:"force-a-specific-format-like-uuid-to-custom-bookieid"},"Force a specific format (like UUID) to custom BookieId"),(0,n.kt)("p",null,"The is no need to force the BookieId to use a fixed format, like a UUID or other form of standard ID scheme.\nProbably new IDs will include the region/availability zone information in order to simplify EnsemblePlacement policies (no more need to pass from DNS to switch mappers) and we cannot know now all of the usages of this parameter."))}k.isMDXComponent=!0}}]);