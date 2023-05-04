"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[527],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=m(a),c=r,u=k["".concat(p,".").concat(c)]||k[c]||s[c]||o;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51093:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return m}});var n=a(83117),r=(a(67294),a(3905));const o={id:"installation",title:"BookKeeper installation"},l=void 0,i={unversionedId:"getting-started/installation",id:"version-4.14.7/getting-started/installation",title:"BookKeeper installation",description:"You can install BookKeeper either by downloading a GZipped tarball package or cloning the BookKeeper repository.",source:"@site/versioned_docs/version-4.14.7/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/4.14.7/getting-started/installation",draft:!1,tags:[],version:"4.14.7",frontMatter:{id:"installation",title:"BookKeeper installation"},sidebar:"version-4.14.7/docsSidebar",previous:{title:"Apache BookKeeper 4.14.7",permalink:"/docs/4.14.7/overview/"},next:{title:"Run bookies locally",permalink:"/docs/4.14.7/getting-started/run-locally"}},p={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Download",id:"download",level:2},{value:"Clone",id:"clone",level:2},{value:"Build using Maven",id:"build-using-maven",level:2},{value:"Useful Maven commands",id:"useful-maven-commands",level:3},{value:"Package directory",id:"package-directory",level:2}],d={toc:m},k="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can install BookKeeper either by ",(0,r.kt)("a",{parentName:"p",href:"#download"},"downloading")," a ",(0,r.kt)("a",{parentName:"p",href:"http://www.gzip.org/"},"GZipped")," tarball package or ",(0,r.kt)("a",{parentName:"p",href:"#clone"},"cloning")," the BookKeeper repository."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.opengroup.org/membership/forums/platform/unix"},"Unix environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"Java Development Kit 1.8")," or later"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/install.html"},"Maven 3.0")," or later")),(0,r.kt)("h2",{id:"download"},"Download"),(0,r.kt)("p",null,"You can download Apache BookKeeper releases from one of many ",(0,r.kt)("a",{parentName:"p",href:"http://www.apache.org/dyn/closer.cgi/bookkeeper"},"Apache mirrors"),"."),(0,r.kt)("h2",{id:"clone"},"Clone"),(0,r.kt)("p",null,"To build BookKeeper from source, clone the repository, either from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/bookkeeper"},"GitHub mirror")," or from the ",(0,r.kt)("a",{parentName:"p",href:"https://git.apache.org/bookkeeper.git"},"Apache repository"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# From the GitHub mirror\n$ git clone https://github.com/apache/bookkeeper\n\n# From Apache directly\n$ git clone git://git.apache.org/bookkeeper.git/\n")),(0,r.kt)("h2",{id:"build-using-maven"},"Build using Maven"),(0,r.kt)("p",null,"Once you have the BookKeeper on your local machine, either by ",(0,r.kt)("a",{parentName:"p",href:"#download"},"downloading")," or ",(0,r.kt)("a",{parentName:"p",href:"#clone"},"cloning")," it, you can then build BookKeeper from source using Maven:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvn package\n")),(0,r.kt)("p",null,"Since 4.8.0, bookkeeper introduces ",(0,r.kt)("inlineCode",{parentName:"p"},"table service"),". If you would like to build and tryout table service, you can build it with ",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvn package -Dstream\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can skip tests by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"-DskipTests")," flag when running ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn package"),".")),(0,r.kt)("h3",{id:"useful-maven-commands"},"Useful Maven commands"),(0,r.kt)("p",null,"Some other useful Maven commands beyond ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn package"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mvn clean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Removes build artifacts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mvn compile")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Compiles JAR files from Java sources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mvn compile spotbugs:spotbugs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Compile using the Maven ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/spotbugs/spotbugs-maven-plugin"},"SpotBugs")," plugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mvn install")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Install the BookKeeper JAR locally in your local Maven cache (usually in the ",(0,r.kt)("inlineCode",{parentName:"td"},"~/.m2")," directory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mvn deploy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deploy the BookKeeper JAR to the Maven repo (if you have the proper credentials)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mvn verify")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Performs a wide variety of verification and validation tasks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mvn apache-rat:check")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Run Maven using the ",(0,r.kt)("a",{parentName:"td",href:"http://creadur.apache.org/rat/apache-rat-plugin/"},"Apache Rat")," plugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mvn compile javadoc:aggregate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Build Javadocs locally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mvn -am -pl bookkeeper-dist/server package")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Build a server distribution using the Maven ",(0,r.kt)("a",{parentName:"td",href:"http://maven.apache.org/plugins/maven-assembly-plugin/"},"Assembly")," plugin")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can enable ",(0,r.kt)("inlineCode",{parentName:"p"},"table service")," by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dstream")," flag when running above commands.")),(0,r.kt)("h2",{id:"package-directory"},"Package directory"),(0,r.kt)("p",null,"The BookKeeper project contains several subfolders that you should be aware of:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Subfolder"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-server"},(0,r.kt)("inlineCode",{parentName:"a"},"bookkeeper-server"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The BookKeeper server and client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-benchmark"},(0,r.kt)("inlineCode",{parentName:"a"},"bookkeeper-benchmark"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"A benchmarking suite for measuring BookKeeper performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"bookkeeper-stats"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"A BookKeeper stats library")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-stats-providers"},(0,r.kt)("inlineCode",{parentName:"a"},"bookkeeper-stats-providers"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"BookKeeper stats providers")))))}s.isMDXComponent=!0}}]);