(window.webpackJsonpanagrams=window.webpackJsonpanagrams||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),o=n.n(c),u=(n(13),n(1)),l=n.n(u),s=n(4),i=n(3),f=n(2),p=n(7),b=function(e){for(var t=e.length,n={},r={},a=0;a<t;a++){var c=e[a],o=c.length;r=n;for(var u=0;u<o;u++){var l=c[u],s=u===o-1;r.hasOwnProperty(l)?!1===r[l].end&&!0===s&&(r[l].end=!0):r[l]={end:s},r=r[l]}}return n},m=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.split("\n").map((function(e){return e.toLowerCase()})),r=b(n),e.abrupt("return",[r,n]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var r,a,c,o,u,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.trim().toLowerCase(),console.log("inWord",r),a=Date.now(),c=r.length,o=r.split("").sort().join(""),u=[],n.forEach((function(e){e.length===Number(c)&&(e.split("").sort().join("")===o&&u.push(e))})),s=Date.now(),i=s-a,console.log("durationSearch",i),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var r,a,c,o,u,s,i,f,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),a={},n.forEach((function(e){if(e.length===Number(t)){var n=e.split("").sort().join("");a.hasOwnProperty(n)?a[n]=[].concat(Object(p.a)(a[n]),[e]):a[n]=[e]}})),c=[],Object.values(a).forEach((function(e){e.length>1&&c.push(e)})),o=Date.now(),u=o-r,s=Date.now(),i=c.sort((function(e,t){return t.length-e.length})),f=Date.now(),b=f-s,console.log("durationSearch",u),console.log("durationSort",b),e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=Object(r.useState)("small"),n=Object(f.a)(t,2),c=n[0],o=n[1],u=Object(r.useState)(""),p=Object(f.a)(u,2),b=p[0],O=p[1],j=Object(r.useState)(""),w=Object(f.a)(j,2),d=w[0],y=w[1],E=Object(r.useState)([]),x=Object(f.a)(E,2),S=x[0],k=x[1],D=Object(r.useState)(""),P=Object(f.a)(D,2),A=P[0],C=P[1],L=Object(r.useState)(""),I=Object(f.a)(L,2),N=I[0],q=I[1],J=Object(r.useState)([]),T=Object(f.a)(J,2),z=T[0],B=T[1],W=Object(r.useState)({}),F=Object(f.a)(W,2),G=F[0],H=F[1],K=Object(r.useState)({}),M=Object(f.a)(K,2),Q=M[0],R=M[1];Object(r.useEffect)((function(){var e=function(){switch(c){case"small":return"https://gist.githubusercontent.com/callumgrayson/452618a6cccc79dcfd5bcada74169d8f/raw/e2afcae22e0da19acafe94818fd237da855bbc2c/corncob.txt";case"large":return"https://gist.githubusercontent.com/callumgrayson/caf0f4f67ecbbd13579441a59facfefc/raw/61c2ce99798596bcf2203b91801e64d4ba0545c8/words.txt";default:return""}};(function(){var t=Object(i.a)(l.a.mark((function t(){var n,r,a,o,u,i,p,b,h,v,O,j;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={},!Q||!Q.hasOwnProperty(c)){t.next=3;break}return t.abrupt("return");case 3:if(localStorage.hasOwnProperty(c)){t.next=14;break}return r=e(),t.next=7,fetch(r);case 7:return a=t.sent,t.next=10,a.text();case 10:n=t.sent,localStorage.setItem(c,n),t.next=15;break;case 14:n=localStorage.getItem(c);case 15:return o=Date.now(),t.next=18,m(n);case 18:u=t.sent,i=Object(f.a)(u,2),p=i[0],b=i[1],h=Date.now(),v=h-o,console.log("Array preparation duration",v),O=g({},G,Object(s.a)({},c,p)),j=g({},Q,Object(s.a)({},c,b)),H(O),R(j);case 29:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[c,G,Q]),Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,Q[c]);case 2:n=e.sent,b&&!n.length&&(n=["There are no anagrams"]),k(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();b&&Q.hasOwnProperty(c)&&e(b)}),[b,Q,c]),Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,Q[c]);case 2:n=e.sent,A&&!n.length&&(n=[["There are no anagrams"]]),B(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();A&&Q.hasOwnProperty(c)&&e(A)}),[A,Q,c]);var U=function(e){e.preventDefault(),O(d)},V=function(e){e.preventDefault(),C(N)};return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("span",null,"Dictionary size: "),a.a.createElement("select",{value:c,onChange:function(e){o(e.target.value)}},a.a.createElement("option",{value:"small"},"Small (58k)"),a.a.createElement("option",{value:"large"},"Large (230k)"))),a.a.createElement("div",null,a.a.createElement("h3",null,"Anagrams by letters"),a.a.createElement("form",{onSubmit:U},a.a.createElement("input",{type:"text",value:d,onChange:function(e){y(e.target.value)},maxLength:29,placeholder:"enter word/letters",required:!0}),a.a.createElement("button",{onClick:U},"Search")),a.a.createElement("div",null,a.a.createElement("ul",null,S&&S.map((function(e,t){return a.a.createElement("li",{key:"".concat(t).concat(e)},e)}))))),a.a.createElement("div",null,a.a.createElement("h3",null,"Anagrams by length"),a.a.createElement("form",{onSubmit:V},a.a.createElement("input",{type:"number",min:2,max:29,value:N,onChange:function(e){q(e.target.value)},placeholder:"enter word length",required:!0,style:{width:"173px"}}),a.a.createElement("button",{onClick:V},"Search")),a.a.createElement("div",null,z.length>0&&function(e){if(e.length<1)return[{0:[""]}];var t={};return e.forEach((function(e){var n=e.length;t.hasOwnProperty(n)?t[n].push(e):t[n]=[e]})),Object.keys(t).sort((function(e,t){return t-e})).map((function(e){return Object(s.a)({},e,t[e])}))}(z).map((function(e){var t=e?Object.keys(e)[0]:0;return a.a.createElement("div",{key:t},a.a.createElement("h4",null,"1"===t?0:t," variations"),a.a.createElement("ul",null,e[t].map((function(e,t){return Array.isArray(e)&&e.length?a.a.createElement("li",{key:"".concat(t).concat(e[0])},e.join(" - ")):e}))))})))))};n(15);var w=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h2",null,"Anagrams"),a.a.createElement(j,null))};o.a.render(a.a.createElement(w,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.5741df37.chunk.js.map