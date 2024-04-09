"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[3937],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,k=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?i.createElement(k,r(r({ref:t},u),{},{components:n})):i.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33120:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var i=n(83117),a=(n(67294),n(3905));const o={id:"tls",title:"Encryption and Authentication using TLS"},r=void 0,s={unversionedId:"security/tls",id:"version-4.13.0/security/tls",title:"Encryption and Authentication using TLS",description:"Apache BookKeeper allows clients and autorecovery daemons to communicate over TLS, although this is not enabled by default.",source:"@site/versioned_docs/version-4.13.0/security/tls.md",sourceDirName:"security",slug:"/security/tls",permalink:"/docs/4.13.0/security/tls",draft:!1,tags:[],version:"4.13.0",frontMatter:{id:"tls",title:"Encryption and Authentication using TLS"},sidebar:"version-4.13.0/docsSidebar",previous:{title:"BookKeeper Security",permalink:"/docs/4.13.0/security/overview"},next:{title:"Authentication using SASL",permalink:"/docs/4.13.0/security/sasl"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Generate TLS key and certificate",id:"bookie-keystore",level:2},{value:"Creating your own CA",id:"creating-your-own-ca",level:2},{value:"Signing the certificate",id:"signing-the-certificate",level:2},{value:"Configuring Bookies",id:"configuring-bookies",level:2},{value:"Configuring Clients",id:"configuring-clients",level:2},{value:"Enabling TLS Logging",id:"enabling-tls-logging",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache BookKeeper allows clients and autorecovery daemons to communicate over TLS, although this is not enabled by default."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The bookies need their own key and certificate in order to use TLS. Clients can optionally provide a key and a certificate\nfor mutual authentication.  Each bookie or client can also be configured with a truststore, which is used to\ndetermine which certificates (bookie or client identities) to trust (authenticate)."),(0,a.kt)("p",null,"The truststore can be configured in many ways. To understand the truststore, consider the following two examples:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the truststore contains one or many certificates;"),(0,a.kt)("li",{parentName:"ol"},"it contains a certificate authority (CA).")),(0,a.kt)("p",null,"In (1), with a list of certificates, the bookie or client will trust any certificate listed in the truststore.\nIn (2), with a CA, the bookie or client will trust any certificate that was signed by the CA in the truststore."),(0,a.kt)("p",null,"(TBD: benefits)"),(0,a.kt)("h2",{id:"bookie-keystore"},"Generate TLS key and certificate"),(0,a.kt)("p",null,"The first step of deploying TLS is to generate the key and the certificate for each machine in the cluster.\nYou can use Java\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"keytool")," utility to accomplish this task. We will generate the key into a temporary keystore\ninitially so that we can export and sign it later with CA."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -keystore bookie.keystore.jks -alias localhost -validity {validity} -genkey\n")),(0,a.kt)("p",null,"You need to specify two parameters in the above command:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"keystore"),": the keystore file that stores the certificate. The ",(0,a.kt)("em",{parentName:"li"},"keystore")," file contains the private key of\nthe certificate; hence, it needs to be kept safely."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"validity"),": the valid time of the certificate in days.")),(0,a.kt)("div",{class:"alert alert-success"},"Ensure that common name (CN) matches exactly with the fully qualified domain name (FQDN) of the server. The client compares the CN with the DNS domain name to ensure that it is indeed connecting to the desired server, not a malicious one."),(0,a.kt)("h2",{id:"creating-your-own-ca"},"Creating your own CA"),(0,a.kt)("p",null,"After the first step, each machine in the cluster has a public-private key pair, and a certificate to identify the machine.\nThe certificate, however, is unsigned, which means that an attacker can create such a certificate to pretend to be any machine."),(0,a.kt)("p",null,"Therefore, it is important to prevent forged certificates by signing them for each machine in the cluster.\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"certificate authority (CA)")," is responsible for signing certificates. CA works likes a government that issues passports \u2014\nthe government stamps (signs) each passport so that the passport becomes difficult to forge. Other governments verify the stamps\nto ensure the passport is authentic. Similarly, the CA signs the certificates, and the cryptography guarantees that a signed\ncertificate is computationally difficult to forge. Thus, as long as the CA is a genuine and trusted authority, the clients have\nhigh assurance that they are connecting to the authentic machines."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"openssl req -new -x509 -keyout ca-key -out ca-cert -days 365\n")),(0,a.kt)("p",null,"The generated CA is simply a ",(0,a.kt)("em",{parentName:"p"},"public-private")," key pair and certificate, and it is intended to sign other certificates."),(0,a.kt)("p",null,"The next step is to add the generated CA to the clients' truststore so that the clients can trust this CA:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -keystore bookie.truststore.jks -alias CARoot -import -file ca-cert\n")),(0,a.kt)("p",null,"NOTE: If you configure the bookies to require client authentication by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"sslClientAuthentication")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," on the\n",(0,a.kt)("a",{parentName:"p",href:"../reference/config"},"bookie config"),", then you must also provide a truststore for the bookies and it should have all the CA\ncertificates that clients keys were signed by."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -keystore client.truststore.jks -alias CARoot -import -file ca-cert\n")),(0,a.kt)("p",null,"In contrast to the keystore, which stores each machine\u2019s own identity, the truststore of a client stores all the certificates\nthat the client should trust. Importing a certificate into one\u2019s truststore also means trusting all certificates that are signed\nby that certificate. As the analogy above, trusting the government (CA) also means trusting all passports (certificates) that\nit has issued. This attribute is called the chain of trust, and it is particularly useful when deploying TLS on a large BookKeeper cluster.\nYou can sign all certificates in the cluster with a single CA, and have all machines share the same truststore that trusts the CA.\nThat way all machines can authenticate all other machines."),(0,a.kt)("h2",{id:"signing-the-certificate"},"Signing the certificate"),(0,a.kt)("p",null,"The next step is to sign all certificates in the keystore with the CA we generated. First, you need to export the certificate from the keystore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -keystore bookie.keystore.jks -alias localhost -certreq -file cert-file\n")),(0,a.kt)("p",null,"Then sign it with the CA:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"openssl x509 -req -CA ca-cert -CAkey ca-key -in cert-file -out cert-signed -days {validity} -CAcreateserial -passin pass:{ca-password}\n")),(0,a.kt)("p",null,"Finally, you need to import both the certificate of the CA and the signed certificate into the keystore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -keystore bookie.keystore.jks -alias CARoot -import -file ca-cert\nkeytool -keystore bookie.keystore.jks -alias localhost -import -file cert-signed\n")),(0,a.kt)("p",null,"The definitions of the parameters are the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"keystore"),": the location of the keystore"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ca-cert"),": the certificate of the CA"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ca-key"),": the private key of the CA"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ca-password"),": the passphrase of the CA"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"cert-file"),": the exported, unsigned certificate of the bookie"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"cert-signed"),": the signed certificate of the bookie")),(0,a.kt)("p",null,"(TBD: add a script to automatically generate truststores and keystores.)"),(0,a.kt)("h2",{id:"configuring-bookies"},"Configuring Bookies"),(0,a.kt)("p",null,"Bookies support TLS for connections on the same service port. In order to enable TLS, you need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"tlsProvider")," to be either\n",(0,a.kt)("inlineCode",{parentName:"p"},"JDK")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenSSL"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenSSL")," is configured, it will use ",(0,a.kt)("inlineCode",{parentName:"p"},"netty-tcnative-boringssl-static"),", which loads a corresponding binding according\nto the platforms to run bookies."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Current ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenSSL")," implementation doesn't depend on the system installed OpenSSL library. If you want to leverage the OpenSSL installed on\nthe system, you can check ",(0,a.kt)("a",{parentName:"p",href:"http://netty.io/wiki/forked-tomcat-native.html"},"this example")," on how to replaces the JARs on the classpath with\nnetty bindings to leverage installed OpenSSL.")),(0,a.kt)("p",null,"The following TLS configs are needed on the bookie side:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tlsProvider=OpenSSL\ntlsProviderFactoryClass=org.apache.bookkeeper.tls.TLSContextFactory\n# key store\ntlsKeyStoreType=JKS\ntlsKeyStore=/var/private/tls/bookie.keystore.jks\ntlsKeyStorePasswordPath=/var/private/tls/bookie.keystore.passwd\n# trust store\ntlsTrustStoreType=JKS\ntlsTrustStore=/var/private/tls/bookie.truststore.jks\ntlsTrustStorePasswordPath=/var/private/tls/bookie.truststore.passwd\n")),(0,a.kt)("p",null,"NOTE: it is important to restrict access to the store files and corresponding password files via filesystem permissions."),(0,a.kt)("p",null,"Optional settings that are worth considering:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"tlsClientAuthentication=false: Enable/Disable using TLS for authentication. This config when enabled will authenticate the other end\nof the communication channel. It should be enabled on both bookies and clients for mutual TLS."),(0,a.kt)("li",{parentName:"ol"},"tlsEnabledCipherSuites= A cipher suite is a named combination of authentication, encryption, MAC and key exchange\nalgorithm used to negotiate the security settings for a network connection using TLS network protocol. By default,\nit is null. ",(0,a.kt)("a",{parentName:"li",href:"https://www.openssl.org/docs/man1.0.2/man1/ciphers.html"},"OpenSSL Ciphers"),(0,a.kt)("a",{parentName:"li",href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites"},"JDK Ciphers")),(0,a.kt)("li",{parentName:"ol"},"tlsEnabledProtocols = TLSv1.2,TLSv1.1,TLSv1 (list out the TLS protocols that you are going to accept from clients).\nBy default, it is not set.")),(0,a.kt)("p",null,"To verify the bookie's keystore and truststore are setup correctly you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"openssl s_client -debug -connect localhost:3181 -tls1\n")),(0,a.kt)("p",null,"NOTE: TLSv1 should be listed under ",(0,a.kt)("inlineCode",{parentName:"p"},"tlsEnabledProtocols"),"."),(0,a.kt)("p",null,"In the output of this command you should see the server's certificate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-----BEGIN CERTIFICATE-----\n{variable sized random bytes}\n-----END CERTIFICATE-----\n")),(0,a.kt)("p",null,"If the certificate does not show up or if there are any other error messages then your keystore is not setup correctly."),(0,a.kt)("h2",{id:"configuring-clients"},"Configuring Clients"),(0,a.kt)("p",null,"TLS is supported only for the new BookKeeper client (BookKeeper versions 4.5.0 and higher), the older clients are not\nsupported. The configs for TLS will be the same as bookies."),(0,a.kt)("p",null,"If client authentication is not required by the bookies, the following is a minimal configuration example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tlsProvider=OpenSSL\ntlsProviderFactoryClass=org.apache.bookkeeper.tls.TLSContextFactory\nclientTrustStore=/var/private/tls/client.truststore.jks\nclientTrustStorePasswordPath=/var/private/tls/client.truststore.passwd\n")),(0,a.kt)("p",null,"If client authentication is required, then a keystore must be created for each client, and the bookies' truststores must\ntrust the certificate in the client's keystore. This may be done using commands that are similar to what we used for\nthe ",(0,a.kt)("a",{parentName:"p",href:"#bookie-keystore"},"bookie keystore"),"."),(0,a.kt)("p",null,"And the following must also be configured:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tlsClientAuthentication=true\nclientKeyStore=/var/private/tls/client.keystore.jks\nclientKeyStorePasswordPath=/var/private/tls/client.keystore.passwd\n")),(0,a.kt)("p",null,"NOTE: it is important to restrict access to the store files and corresponding password files via filesystem permissions."),(0,a.kt)("p",null,"(TBD: add example to use tls in bin/bookkeeper script?)"),(0,a.kt)("h2",{id:"enabling-tls-logging"},"Enabling TLS Logging"),(0,a.kt)("p",null,"You can enable TLS debug logging at the JVM level by starting the bookies and/or clients with ",(0,a.kt)("inlineCode",{parentName:"p"},"javax.net.debug")," system property. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-Djavax.net.debug=all\n")),(0,a.kt)("p",null,"You can find more details on this in ",(0,a.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/ReadDebug.html"},"Oracle documentation")," on\n",(0,a.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/ReadDebug.html"},"debugging SSL/TLS connections"),"."))}h.isMDXComponent=!0}}]);