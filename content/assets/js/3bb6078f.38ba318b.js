"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[7374],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,m=c["".concat(s,".").concat(p)]||c[p]||h[p]||a;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92417:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var o=n(83117),i=(n(67294),n(3905));const a={},r="BP-46: Running without the journal",l={type:"mdx",permalink:"/bps/BP-46-run-without-journal",source:"@site/src/pages/bps/BP-46-run-without-journal.md",title:"BP-46: Running without the journal",description:"Motivation",frontMatter:{}},s=[{value:"Motivation",id:"motivation",level:3},{value:"A note on Response Codes",id:"a-note-on-response-codes",level:3},{value:"A note on Quorums",id:"a-note-on-quorums",level:3},{value:"Impact of Undetected Data Loss on Consistency",id:"impact-of-undetected-data-loss-on-consistency",level:3},{value:"Scenario 1 - Lost Fenced Status Allows Writes After Ledger Close",id:"scenario-1---lost-fenced-status-allows-writes-after-ledger-close",level:3},{value:"Scenario 2 - Recovery Truncates Previously Acknowledged Entries",id:"scenario-2---recovery-truncates-previously-acknowledged-entries",level:3},{value:"A note on cookies",id:"a-note-on-cookies",level:3},{value:"Proposed Changes",id:"proposed-changes",level:3},{value:"Detecting Data Loss On Boot",id:"detecting-data-loss-on-boot",level:3},{value:"Protection Mechanism",id:"protection-mechanism",level:3},{value:"The Full Boot-Up Sequence",id:"the-full-boot-up-sequence",level:3},{value:"Formal Verification of Proposed Changes",id:"formal-verification-of-proposed-changes",level:3},{value:"Public Interfaces",id:"public-interfaces",level:3},{value:"Compatibility, Deprecation, and Migration Plan",id:"compatibility-deprecation-and-migration-plan",level:3},{value:"Test Plan",id:"test-plan",level:3},{value:"Rejected Alternatives",id:"rejected-alternatives",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bp-46-running-without-the-journal"},"BP-46: Running without the journal"),(0,i.kt)("h3",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"The journal allows for fast add operations that provide strong data safety guarantees. An add operation is only acked to a client once written to the journal and an fsync performed. This however means that every entry must be written twice: once to the journal and once to an entry log file."),(0,i.kt)("p",null,"This double write increases the cost of ownership as more disks must be provisioned to service requests and makes disk provisioning more complex (separating journal from entry log writes onto separate disks). Running without the journal would halve the disk IO required (ignoring indexes) thereby reducing costs and simplifying provisioning."),(0,i.kt)("p",null,"However, running without the journal would introduce data consistency problems as the BookKeeper Replication Protocol requires that all writes are persistent for correctness. Running without the journal introduces the possibility of lost writes. In order to continue to offer strong data safety and support running without the journal, changes to the protocol are required."),(0,i.kt)("h3",{id:"a-note-on-response-codes"},"A note on Response Codes"),(0,i.kt)("p",null,"The following categories are relevant:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Positive: OK"),(0,i.kt)("li",{parentName:"ul"},"Explicit Negative: NoSuchEntry/NoSuchLedger"),(0,i.kt)("li",{parentName:"ul"},"Unknown: Any other non-success response that is not an explicit negative.")),(0,i.kt)("p",null,"For correctness explicit negatives must be treated differently than other errors."),(0,i.kt)("h3",{id:"a-note-on-quorums"},"A note on Quorums"),(0,i.kt)("p",null,"In order to explain the protocol changes, it is useful to first consider how quorums are used for safety. We have the following relevant quorums:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single bookie (S)"),(0,i.kt)("li",{parentName:"ul"},"Ack quorum (AQ)"),(0,i.kt)("li",{parentName:"ul"},"Write quorum (WQ)"),(0,i.kt)("li",{parentName:"ul"},"Quorum Coverage (QC) where QC = (WQ - AQ) + 1"),(0,i.kt)("li",{parentName:"ul"},"Ensemble Coverage (EC) where EC = (E - AQ) + 1"),(0,i.kt)("li",{parentName:"ul"},"Whole Ensemble")),(0,i.kt)("p",null,"Quorum Coverage (QC) and Ensemble Coverage (EC) are both defined by the following, only the cohorts differ: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A given property is satisfied by at least one bookie from every possible ack quorum within the cohort."),(0,i.kt)("li",{parentName:"ul"},"There exists no ack quorum of bookies that do not satisfy the property within the cohort.")),(0,i.kt)("p",null,"For QC, the cohort is the writeset of a given entry, and therefore QC is only used when we need guarantees regarding a single entry. For EC, the cohort is the ensemble of bookies of the current fragment. EC is required when we need a guarantee across an entire fragment."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For fencing, we need to ensure that no AQ of bookies is unfenced before starting the read/write phase of recovery. This is true once EC successful fencing responses have been received."),(0,i.kt)("li",{parentName:"ul"},"For a recovery read, a read is only negative once we know that no AQ of bookies could exist that might have the entry. Doing otherwise could truncate committed entries from a ledger. A read is negative once NoSuchEntry responses reach QC.")),(0,i.kt)("p",null,"Different protocol actions require different quorums:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add entry: AQ success responses"),(0,i.kt)("li",{parentName:"ul"},"Read entry:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Positive when positive response from a single bookie"),(0,i.kt)("li",{parentName:"ul"},"Negative when explicit negative from all bookies"),(0,i.kt)("li",{parentName:"ul"},"Unknown: when at least one unknown and no positive from all bookies"))),(0,i.kt)("li",{parentName:"ul"},"Fencing phase, LAC read (sent to ensemble of current fragment):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Complete when EC positive responses"),(0,i.kt)("li",{parentName:"ul"},"Unknown (cannot make progress) when AQ unknown responses (fencing LAC reads cannot cause an explicit negative as fencing creates the ledger on the bookie if it doesn\u2019t exist)"))),(0,i.kt)("li",{parentName:"ul"},"Recovery read (sent to writeset of entry):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Entry recoverable: AQ positive read responses"),(0,i.kt)("li",{parentName:"ul"},"Entry Unrecoverable: QC negative read responses"),(0,i.kt)("li",{parentName:"ul"},"Unknown (cannot make progress):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"QC unknown responses or"),(0,i.kt)("li",{parentName:"ul"},"All responses received, but not enough for either a positive or negative")))))),(0,i.kt)("h3",{id:"impact-of-undetected-data-loss-on-consistency"},"Impact of Undetected Data Loss on Consistency"),(0,i.kt)("p",null,"The ledger recovery process assumes that ledger entries are never arbitrarily lost. In the event of the loss of an entry, the recovery process can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"allow the original client to keep writing entries to a ledger that has just been fenced and closed, thus losing those entries "),(0,i.kt)("li",{parentName:"ul"},"allow the recovery client to truncate the ledger too soon, closing it with a last entry id lower than that of previously acknowledged entries - thus losing data.")),(0,i.kt)("p",null,"The following scenarios assume existing behaviour but simply skipping the writing of entries and fencing ops to the journal."),(0,i.kt)("h3",{id:"scenario-1---lost-fenced-status-allows-writes-after-ledger-close"},"Scenario 1 - Lost Fenced Status Allows Writes After Ledger Close"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"3 bookies, B1, B2 & B3"),(0,i.kt)("li",{parentName:"ol"},"2 clients, C1 & C2"),(0,i.kt)("li",{parentName:"ol"},"1 ledger, L1, with e3:w3:a2 configuration."),(0,i.kt)("li",{parentName:"ol"},"C1 writes entry E1 to L1. The write hits all three bookies."),(0,i.kt)("li",{parentName:"ol"},"C1 hangs for an indeterminate length of time. "),(0,i.kt)("li",{parentName:"ol"},"C2 sees that C1 is unresponsive, and assumes it has failed. C2 tries to recover the ledger L1."),(0,i.kt)("li",{parentName:"ol"},"L1 sends a fencing message to all bookies in the ensemble."),(0,i.kt)("li",{parentName:"ol"},"The fencing message succeeds in arriving at B1 & B2 and is acknowledged by both. The message to B3 is lost. "),(0,i.kt)("li",{parentName:"ol"},"C2 sees that at least one bookie in each possible ack quorum has acknowledged the fencing message (EC threshold reached), so continues with the read/write phase of recovery, finding that E1 is the last entry of the ledger, and committing the endpoint of the ledger in the ZK."),(0,i.kt)("li",{parentName:"ol"},"B2 crashes and boots again with all unflushed operations lost. "),(0,i.kt)("li",{parentName:"ol"},"C1 wakes up and writes entry E2 to all bookies. B2 & B3 acknowledge positively, so C1 considers E2 as persisted. B1 rejects the message as the ledger is fenced, but since ack quorum is 2, B2 & B3 are enough to consider the entry written.")),(0,i.kt)("h3",{id:"scenario-2---recovery-truncates-previously-acknowledged-entries"},"Scenario 2 - Recovery Truncates Previously Acknowledged Entries"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"C1 adds E0 to B1, B2, B3"),(0,i.kt)("li",{parentName:"ol"},"B1 and B3 confirms. C1 confirms the write to its client."),(0,i.kt)("li",{parentName:"ol"},"C2 starts recovery"),(0,i.kt)("li",{parentName:"ol"},"B2 fails to respond. C1 tries to change ensemble but gets a metadata version conflict."),(0,i.kt)("li",{parentName:"ol"},"B1 crashes and restarts, has lost E0 (undetected)"),(0,i.kt)("li",{parentName:"ol"},"C2 fences the ledger on B1, B2, B3"),(0,i.kt)("li",{parentName:"ol"},"C2 sends Read E0 to B1, B2, B3"),(0,i.kt)("li",{parentName:"ol"},"B1 responds with NoSuchEntry"),(0,i.kt)("li",{parentName:"ol"},"B2 responds with NoSuchEntry"),(0,i.kt)("li",{parentName:"ol"},"QC negative response threshold reached. C2 closes the ledger as empty. Losing E0.")),(0,i.kt)("p",null,"The problem is that without the journal (and syncing to entry log files before acknowledgement) a bookie can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lose the fenced status of a previously existing ledger"),(0,i.kt)("li",{parentName:"ul"},"respond with an explicit negative even though it had previously seen an entry. ")),(0,i.kt)("p",null,"Undetected data loss could occur when running without the journal. Bookie crashes and loses most recent entries and fence statuses that had not yet been written and synced to disk."),(0,i.kt)("h3",{id:"a-note-on-cookies"},"A note on cookies"),(0,i.kt)("p",null,"Cookies play an essential part in the bookkeeper replication protocol, but their purpose is often unclear. "),(0,i.kt)("p",null,"When a bookie boots for the first time, it generates a cookie. The cookie encapsulates the identity of the bookie and should be considered immutable. This identity contains the advertised address of the bookie, the disks used for the journal, index, and ledger storage, and a unique ID. The bookie writes the cookie to ZK and each of the disks in use. On all subsequent boots, if the cookie is missing from any of these places, the bookie fails to boot."),(0,i.kt)("p",null,"The absence of a disk's cookie implies that the rest of the disk's data is also missing. Cookie validation is performed on boot-up and prevents the boot from succeeding if the validation fails, thus preventing the bookie starting with undetected data loss. "),(0,i.kt)("p",null,"This proposal improves the cookie mechanism by automating the resolution of a cookie validation error which currently requires human intervention to resolve. This automated feature will be configurable (enabled or disabled) and additionally a CLI command will be made available so an admin can manually run the operation (for when this feature is disabled - likely to be the default). "),(0,i.kt)("h3",{id:"proposed-changes"},"Proposed Changes"),(0,i.kt)("p",null,"The proposed changes involve:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A new config that controls whether add operations go into the journal"),(0,i.kt)("li",{parentName:"ul"},"Detecting possible data loss on boot"),(0,i.kt)("li",{parentName:"ul"},"Prevent explicit negative responses when data loss may have occurred, instead reply with unknown code, until data is repaired."),(0,i.kt)("li",{parentName:"ul"},"Repair data loss"),(0,i.kt)("li",{parentName:"ul"},"Auto fix cookies (with new config to enable or disable the feature)"),(0,i.kt)("li",{parentName:"ul"},"CLI command for admin to run fix cookie logic in the case that auto fix is disabled")),(0,i.kt)("p",null,'In these proposed changes, when running "without" the journal, the journal still exists, but add entry operations skip the addition to the journal. The boot-up sequence still replays the journal.'),(0,i.kt)("p",null,"Add operations can be configured to be written to the journal or not based on the config ",(0,i.kt)("inlineCode",{parentName:"p"},"journalWriteData"),". When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", add operations are not added to the journal."),(0,i.kt)("h3",{id:"detecting-data-loss-on-boot"},"Detecting Data Loss On Boot"),(0,i.kt)("p",null,"The new mechanism for data loss detection is checking for an unclean shutdown (aka a crash or abrupt termination of the bookie). When an unclean shutdown is detected further measures are taken to prevent data inconsistency."),(0,i.kt)("p",null,"The unclean shutdown detection will consist of setting a bit in the index on start-up and clearing it on shutdown. On subsequent start-up, the value will be checked and if it remains set, it knows that the prior shutdown was not clean."),(0,i.kt)("p",null,"Cookie validation will continue to be used to detect booting with one or more missing or empty disks (that once existed and contained a cookie)."),(0,i.kt)("h3",{id:"protection-mechanism"},"Protection Mechanism"),(0,i.kt)("p",null,"Once possible data loss has been detected the following protection mechanism is carried out during the boot:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fencing: Ledger metadata for all ledgers of the cluster are obtained and all those ledgers are fenced on this bookie. This prevents data loss scenario 1."),(0,i.kt)("li",{parentName:"ul"},"Limbo: All open ledgers are placed in the limbo status. Limbo ledgers can serve read requests, but never respond with an explicit negative, all explicit negatives are converted to unknowns (with the use of a new code EUNKNOWN)."),(0,i.kt)("li",{parentName:"ul"},"Recovery: All open ledgers are opened and recovered."),(0,i.kt)("li",{parentName:"ul"},"Repair: Each ledger is scanned and any missing entries are sourced from peers."),(0,i.kt)("li",{parentName:"ul"},"Limbo ledgers that have been repaired have their limbo status cleared.")),(0,i.kt)("h3",{id:"the-full-boot-up-sequence"},"The Full Boot-Up Sequence"),(0,i.kt)("p",null,"This mechanism of limbo ledgers and self-repair needs to work hand-in hand with the cookie validation check. Combining everything together:"),(0,i.kt)("p",null,"On boot:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check for unclean shutdown and validate cookies"),(0,i.kt)("li",{parentName:"ol"},"Fetch the metadata for all ledgers in the cluster from ZK where the bookie is a member of its ensemble."),(0,i.kt)("li",{parentName:"ol"},"Phase one:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the cookie check fails or unclean shutdown is detected:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For each non-closed ledger, mark the ledger as fenced and in-limbo in the index."),(0,i.kt)("li",{parentName:"ul"},"Update the cookie if it was a cookie failure"))))),(0,i.kt)("li",{parentName:"ol"},"Phase two",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For each ledger",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If the ledger is in-limbo, open and recover the ledger."),(0,i.kt)("li",{parentName:"ol"},"Check that all entries assigned to this bookie exist in the index."),(0,i.kt)("li",{parentName:"ol"},"For any entries that are missing, copy from another bookie."),(0,i.kt)("li",{parentName:"ol"},"Clear limbo status if set")))))),(0,i.kt)("p",null,"When booting a bookie with empty disks, only phase one needs to be complete before the bookie makes itself available for client requests. "),(0,i.kt)("p",null,"In phase one, if the cookie check fails, we mark all non-closed ledgers as \u201cfenced\u201d. This prevents any future writes to these ledgers on this bookie. This solves the problem of an empty bookie disk allowing writes to closed ledgers (Scenario 1)."),(0,i.kt)("p",null,"Given that the algorithm solves both the issues that cookies are designed to solve, we can now allow the bookie to update its cookie without operator intervention. "),(0,i.kt)("h3",{id:"formal-verification-of-proposed-changes"},"Formal Verification of Proposed Changes"),(0,i.kt)("p",null,"The use of the limbo status and fencing of all ledgers on boot-up when detecting an unclean shutdown has been modelled in TLA+. It does not model the whole boot-up sequence but a simplified version with only fencing and limbo status. "),(0,i.kt)("p",null,"The specification models the lifetime of a single ledger and includes a single bookie crashing, losing all data. The specification allows the testing of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"enabling/disabling the fencing"),(0,i.kt)("li",{parentName:"ul"},"enabling/disabling the limbo status.")),(0,i.kt)("p",null,"When running without limbo status, the model checker finds the counterexample of scenario 2. When running without fencing of all ledgers, the model checker finds the counterexample of scenario 1. When running with both enabled, the model checker finds no invariant violation."),(0,i.kt)("p",null,"The specification can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Vanlightly/bookkeeper-tlaplus"},"https://github.com/Vanlightly/bookkeeper-tlaplus")),(0,i.kt)("h3",{id:"public-interfaces"},"Public Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Return codes. Addition of a new return code: ",(0,i.kt)("inlineCode",{parentName:"li"},"EUNKNOWN")," which is returned when a read hits an in-limbo ledger and that ledger not contain the requested entry id."),(0,i.kt)("li",{parentName:"ul"},"Bookie ledger metadata format (LedgerData). Addition of the limbo status.")),(0,i.kt)("h3",{id:"compatibility-deprecation-and-migration-plan"},"Compatibility, Deprecation, and Migration Plan"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Because we only skip the journal for add operations, there is no impact on existing deployments. When a bookie is booted with the new version, and ",(0,i.kt)("inlineCode",{parentName:"li"},"journalWriteData")," is set to false, the journal is still replayed on boot-up causing no risk of data loss in the transition.")),(0,i.kt)("h3",{id:"test-plan"},"Test Plan"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is confidence in the design due to the modelling in TLA+ but this model does not include the full boot sequence."),(0,i.kt)("li",{parentName:"ul"},"The implementation will require aggressive chaos testing to ensure correctness.")),(0,i.kt)("h3",{id:"rejected-alternatives"},"Rejected Alternatives"),(0,i.kt)("p",null,"Entry Log Per Ledger (ELPL) without the journal. From our performance testing of ELPL, performance degrades significantly with a large number of active ledgers and syncing to disk multiple times a second (which is required to offer low latency writes)."),(0,i.kt)("p",null,"In the future this design could be extended to offer ledger level configuration of journal use. The scope of this BP is limited to cluster level."))}c.isMDXComponent=!0}}]);