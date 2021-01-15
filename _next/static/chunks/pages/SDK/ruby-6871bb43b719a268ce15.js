_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"7ljp":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return p}));var r=n("q1tI"),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){return function(t){var n=d(t.components);return a.a.createElement(e,s({},t,{components:n}))}},d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(s,".").concat(p)]||u[p]||f[p]||i;return n?a.a.createElement(m,c(c({ref:t},o),{},{components:n})):a.a.createElement(m,c({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"===typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},DFIu:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n("wx14"),a=n("Ff2n"),i=n("q1tI"),s=n.n(i),o=n("7ljp"),c=(s.a.createElement,{name:"Ruby",tableOfContents:{depth:0,children:[{depth:1,slug:"#ruby-sdk",title:"Ruby SDK",children:[{depth:2,slug:"#install",title:"Install"},{depth:2,slug:"#usage",title:"Usage",children:[{depth:3,slug:"#initialization",title:"Initialization"},{depth:3,slug:"#check-if-feature-is-active",title:"Check if feature is active"},{depth:3,slug:"#experiments",title:"Experiments"}]},{depth:2,slug:"#example",title:"Example"}]}]}}),l={meta:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"ruby-sdk"},"Ruby SDK"),Object(o.mdx)("p",null,"A Ruby SDK for Molasses. It allows you to evaluate a user's status for a feature. It also helps simplify logging events for A/B testing."),Object(o.mdx)("p",null,"Molasses uses polling to check if you have updated features. Once initialized, it takes microseconds to evaluate if a user is active."),Object(o.mdx)("h2",{id:"install"},"Install"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{}),"gem install molasses\n\nbundle add molasses\n")),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("h3",{id:"initialization"},"Initialization"),Object(o.mdx)("p",null,"Start by initializing the client with an ",Object(o.mdx)("inlineCode",{parentName:"p"},"APIKey"),". This begins the polling for any feature updates. The updates happen every 15 seconds."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"require 'molasses'\n\nclient = Molasses::Client.new(\"test_api_key\")\n\n")),Object(o.mdx)("p",null,"If you decide not to track analytics events (experiment started, experiment success) you can turn them off by setting the ",Object(o.mdx)("inlineCode",{parentName:"p"},"send_events")," field to ",Object(o.mdx)("inlineCode",{parentName:"p"},"false")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),'client = Molasses::Client.new("test_api_key", false)\n\n')),Object(o.mdx)("h3",{id:"check-if-feature-is-active"},"Check if feature is active"),Object(o.mdx)("p",null,"You can call ",Object(o.mdx)("inlineCode",{parentName:"p"},"is_active")," with the key name and optionally a user's information. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"id")," field is used to determine whether a user is part of a percentage of users. If you have other constraints based on user params you can pass those in the ",Object(o.mdx)("inlineCode",{parentName:"p"},"params")," field."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),' client.is_active("FOO_TEST", {\n   "id"=>"foo",\n   "params"=>{\n     "isBetaUser"=>"false",\n     "isScaredUser"=>"false"\n    }\n })\n\n')),Object(o.mdx)("p",null,"You can check if a feature is active for a user who is anonymous by just calling ",Object(o.mdx)("inlineCode",{parentName:"p"},"isActive")," with the key. You won't be able to do percentage roll outs or track that user's behavior."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),'client.is_active("TEST_FEATURE_FOR_USER")\n')),Object(o.mdx)("h3",{id:"experiments"},"Experiments"),Object(o.mdx)("p",null,"To track whether an experiment was successful you can call ",Object(o.mdx)("inlineCode",{parentName:"p"},"experiment_success"),". experiment_success takes the feature's name, any additional parameters for the event and the user."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),'client.experiment_success("GOOGLE_SSO",{\n        "version": "v2.3.0"\n    },{\n   "id"=>"foo",\n   "params"=>{\n     "isBetaUser"=>"false",\n     "isScaredUser"=>"false"\n    }\n })\n')),Object(o.mdx)("h2",{id:"example"},"Example"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),'require \'molasses\'\n\nclient = Molasses::Client.new("test_api_key")\n\nif client.is_active(\'NEW_CHECKOUT\') {\n  puts "we are a go"\nelse\n  puts "we are a no go"\nend\nfoo_test = client.is_active("FOO_TEST", {\n  "id"=>"foo",\n  "params"=>{\n    "isBetaUser"=>"false",\n    "isScaredUser"=>"false"\n  }\n})\nif foo_test\n  puts "we are a go"\nelse\n  puts "we are a no go"\nend\n')))}u.isMDXComponent=!0;var p={editThisPagePath:"pages/SDK/ruby.mdx"};for(var d in p)window[d]=p[d]},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("zLVn");function a(e,t){if(null==e)return{};var n,a,i=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},iWvk:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/SDK/ruby",function(){return n("DFIu")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[["iWvk",0,1]]]);