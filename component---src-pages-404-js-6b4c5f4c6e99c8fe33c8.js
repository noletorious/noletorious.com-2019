(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(246),i=n(236);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},236:function(e,t,n){"use strict";var a=n(241),r=n(0),o=n.n(r),i=n(1),l=n.n(i),c=n(255),s=n.n(c);function m(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,l=a.data.site,c=t||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=m},238:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),r=n.n(a),o=n(235),i=n.n(o),l=function(e){var t=e.to,n=e.children;return r.a.createElement(i.a,{to:t,exit:{length:.75},entry:{delay:.75,length:.75}},n)}},240:function(e,t,n){"use strict";n(40);var a=n(0),r=n.n(a),o=n(233),i=n.n(o),l=n(232),c=n.n(l),s=n(231),m=n.n(s),u=n(217),d=n.n(u),f=n(234),p=n(253),g=n(254),y=n.n(g);t.a=function(){var e=Object(a.useState)(null),t=e[0],n=e[1];return Object(a.useEffect)(function(){console.log("======useEffect======"),y.a.get("https://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&appid=9ff3b3252f2b747c427a1c0be7eecc50").then(function(e){n(e.data)}).catch(function(e){console.log(e)})},[]),r.a.createElement("footer",{className:["bg-footer"].join(" ")},r.a.createElement(m.a,null,r.a.createElement(c.a,{className:["d-flex","align-items-center","justify-content-center"].join(" "),style:{height:"200px"}},r.a.createElement(i.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("ul",{className:["mb-0","ml-0","list-group","list-group-horizontal"].join(" ")},r.a.createElement("li",{className:["list-group-item",d.a.footerItem].join(" ")},r.a.createElement("a",{href:"//dribbble.com/noletorious"},r.a.createElement(f.a,{icon:p.a,size:"lg"}))),r.a.createElement("li",{className:["list-group-item",d.a.footerItem].join(" ")},r.a.createElement("a",{href:"//github.com/noletorious"},r.a.createElement(f.a,{icon:p.b,size:"lg"}))),r.a.createElement("li",{className:["list-group-item",d.a.footerItem].join(" ")},r.a.createElement("a",{href:"//linkedin.com/noletorious"},r.a.createElement(f.a,{icon:p.c,size:"lg"})))))),r.a.createElement(i.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("p",{className:["mb-0","text-white"].join(" ")},"Get in touch? ",r.a.createElement("a",{href:"mailto:hello@noletorious.com"},"Email")," is a quick way."))),r.a.createElement(i.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("h6",{className:["mb-0","text-white","text-mute"].join(" ")},t?t.name+", OR "+Math.round(t.main.temp)+"°F":"Loading weather data..."),r.a.createElement("img",{src:t?"http://openweathermap.org/img/w/"+t.weather[0].icon+".png":null,alt:"weather icon",style:{width:"30px",marginBottom:"0"}}))))))}},241:function(e){e.exports={data:{site:{siteMetadata:{title:"Noletorious",description:"Portland's Favorite Web Designer",author:"@gatsbyjs"}}}}},242:function(e,t,n){"use strict";n(20),n(135),n(14),n(73),n(54),n(18),Object.defineProperty(t,"__esModule",{value:!0});var a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(c){r=!0,o=c}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=s(n(0)),l=s(n(1)),c=n(247);function s(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleClick=function(e){n.state.beforeAnimate(e),e&&e.preventDefault(),(0,c.animateScroll)(n.state.to,n.state.target,n.state.animate).then(function(t){t&&(n.state.disableHistory||(0,c.updateHistory)(t),n.state.afterAnimate(e))})},n.state=t._stateHelper(e),n.simulateClick=n._handleClick,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(t._stateHelper(e))}},{key:"render",value:function(){var e=this.props,t=(e.to,e.target,e.animate,e.beforeAnimate,e.afterAnimate,e.disableHistory,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["to","target","animate","beforeAnimate","afterAnimate","disableHistory"]));return this.props.children?i.default.createElement("a",r({},t,{href:"#"+this.state.to,onClick:this._handleClick})):null}}],[{key:"_normalizeId",value:function(e){return e&&e.replace(/^#/,"")||""}},{key:"_stateHelper",value:function(e){var n=e.animate||{},a=n.offset,r=void 0===a?0:a,o=n.duration,i=void 0===o?400:o,l=n.easing,c=void 0===l?u:l;return{to:t._normalizeId(e.to),target:t._normalizeId(e.target),animate:{offset:r,duration:i,easing:c},beforeAnimate:e.beforeAnimate||function(){},afterAnimate:e.afterAnimate||function(){},disableHistory:e.disableHistory}}},{key:"getDerivedStateFromProps",value:function(e){return t._stateHelper(e)}}]),t}();function u(e,t,n,a,r){return-a*(t/=r)*(t-2)+n}m.propTypes={to:l.default.string.isRequired,target:l.default.string,animate:l.default.shape({offset:l.default.number,duration:l.default.number,easing:l.default.func}),beforeAnimate:l.default.func,afterAnimate:l.default.func,disableHistory:l.default.bool,children:l.default.node},t.default=m;var d=a(/^v?((\d+)\.(\d+)\.(\d+))(?:-([\dA-Za-z\-]+(?:\.[\dA-Za-z\-]+)*))?(?:\+([\dA-Za-z\-]+(?:\.[\dA-Za-z\-]+)*))?$/.exec(i.default.version),4),f=d[2],p=d[3];f>=16&&p>=3&&delete m.prototype.componentWillReceiveProps},243:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjYsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAgMjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRjQ0MzMxO30NCgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6OTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjE4O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGc+DQoJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTAwIiBjeT0iMTAwIiByPSI5OS41Ii8+DQo8L2c+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOTAuNyw5MyIvPg0KPHBhdGggY2xhc3M9InN0MiIgZD0iTTkwLjcsNTZoNDYuMnY4OS40TDYzLjEsNTkuNVYxNDZoMjguMyIvPg0KPC9zdmc+DQo="},244:function(e,t,n){e.exports=n.p+"static/home-animation-9254966d86ed557b931518b03719e7a5.mp4"},245:function(e,t,n){e.exports=n.p+"static/home-animation-3660625ff13076bf79df4aae97e87c46.webm"},246:function(e,t,n){"use strict";n(71),n(72);var a=n(0),r=n.n(a),o=n(1),i=n.n(o),l=n(238),c=n(239),s=n(134),m=n(235),u=n(231),d=n.n(u),f=n(232),p=n.n(f),g=n(233),y=n.n(g),h=n(234),b=n(237),v=n(243),E=n.n(v),w=function(){return r.a.createElement("img",{alt:"Noel Torres Logo",src:E.a,style:{minWidth:"70px"}})},x=n(219),j=n.n(x),N=function(e){var t=e.isHome;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.TransitionState,null,function(n){var a=n.transitionStatus,o=(n.exit,n.entry,["entering","entered"].includes(a));return r.a.createElement(c.Spring,{from:{paddingTop:e.isHome&&o?"8vh":"2vh",paddingBottom:e.isHome&&o?"15vh":"2vh"},to:{paddingTop:e.isHome&&o?"8vh":(e.isHome,"2vh"),paddingBottom:e.isHome&&o?"15vh":(e.isHome,"2vh")}},function(e){return r.a.createElement("div",{id:"nav",className:["bg-white","d-flex","d-flex-row","flex-wrap","align-items-center",t?null:"border-bottom"].join(" "),style:e},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(y.a,{className:"d-flex flex-row align-items-center pl-0 flex-xs-column justify-content-center justify-content-sm-start",xs:{span:12},sm:{span:8}},r.a.createElement(c.Spring,{from:{display:"block",opacity:1},to:{display:o&&t?"none":"block",opacity:o&&t?0:1}},function(e){return r.a.createElement("div",{className:"p-2",style:e},r.a.createElement("button",{title:"Go back",onClick:function(){return window.history.go(-1)},className:["align-items-center","d-flex","px-0",j.a.backBtn].join(" ")},r.a.createElement(h.a,{icon:b.b,size:"lg"})))}),r.a.createElement(c.Spring,{from:{fontSize:o&&t?"2em":"1em"},to:{fontSize:o&&t?"2em":"1em"}},function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-2",style:e},r.a.createElement(l.a,{to:"/"},r.a.createElement(w,null))),r.a.createElement("div",{className:"p-2",style:e},r.a.createElement("span",{className:"mb-0 font-weight-bold",style:{color:"#fff"}},"Noel Torres"),r.a.createElement("h6",{className:"my-0 text-light"},"Full-stack Designer")))})),r.a.createElement(y.a,{className:"d-flex align-items-center nav-items justify-content-center justify-content-sm-start",xs:{span:12},sm:{span:4},style:{fontSize:"120%"}},r.a.createElement("div",{className:"ml-sm-auto py-2"},r.a.createElement(l.a,{to:"/about"},"About")),r.a.createElement("div",{className:"py-2 pl-4"},r.a.createElement(s.Link,{to:"/#work"},"Work"))))))})}))},I=n(242),M=n.n(I),A=n(244),H=n.n(A),T=n(245),z=n.n(T),O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{fluid:"true",className:["flex-grow-1"].join(" ")},r.a.createElement(p.a,{className:"h-100 d-flex"},r.a.createElement(y.a,{xs:{span:12},sm:{span:8,offset:2},md:{span:10,offset:1},lg:{span:6,offset:3},className:["d-flex","align-items-center"].join(" ")},r.a.createElement("div",{className:["img-fluid","w-100"].join(" "),style:{marginTop:"-6em"}},r.a.createElement("video",{controls:!0,loop:!0,muted:!0,autoPlay:!0,className:"w-100 h-100"},r.a.createElement("source",{src:z.a,type:"video/webm"}),r.a.createElement("source",{src:H.a,type:"video/mp4"}),r.a.createElement("span",{className:"text-light"},"Your browser does not support HTML5 video.")))),r.a.createElement(y.a,{xs:{span:12},className:["d-flex","justify-content-center","align-items-center","flex-column","text-center","text-light"].join(" ")},r.a.createElement("div",{className:"d-sm-none"},r.a.createElement("h4",null,"Enriching digital experiences with thoughtful design.",r.a.createElement("br",null),"Hi, I'm Noel.")),r.a.createElement("div",{className:"d-none d-sm-block"},r.a.createElement("h2",null,"Enriching digital experiences with thoughtful design.",r.a.createElement("br",null),"Hi, I'm Noel.")),r.a.createElement("p",null,r.a.createElement(M.a,{to:"#work"},r.a.createElement(h.a,{icon:b.d,size:"lg"})))))))},D=n(240),S=n(236);n(218);var k=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={checkIsHomePage:!!n.props.page},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{title:"Noel Torres Portfolio"}),r.a.createElement(m.TransitionState,null,function(t){var n=t.transitionStatus,a=["entering","entered"].includes(n),o=["exiting","exited"].includes(n),i="POP"===n;return r.a.createElement(c.Spring,{from:{opacity:0,transform:"translateY("+(o?"10px":0)+")"},to:{opacity:a||i?1:0,transform:"translateY("+(a?0:"10px")+")"}},function(t){return r.a.createElement("div",null,e.state.checkIsHomePage?r.a.createElement("div",{className:"vh-100 d-flex flex-column"},r.a.createElement(N,{isHome:e.state.checkIsHomePage}),r.a.createElement(O,{style:t})):r.a.createElement(N,{isHome:e.state.checkIsHomePage}),r.a.createElement("main",{className:["d-flex","flex-column"].join(" "),style:t},e.props.children))})}),r.a.createElement(D.a,null))},a}(a.Component);k.propTypes={children:i.a.node.isRequired};t.a=k},247:function(e,t,n){"use strict";n(30),n(5),Object.defineProperty(t,"__esModule",{value:!0}),t.animateScroll=void 0,t.updateHistory=function(e){e="#"+e,history.pushState?history.pushState(null,null,e):location.hash=e};var a,r,o=n(75);t.animateScroll=(a=void 0,r=void 0,function(e,t,n){var i=document.getElementById(t);function l(){return i?i.scrollTop:document.documentElement.scrollTop||document.body.scrollTop}return new Promise(function(t,c){var s=e?document.getElementById(e):document.body;if(!s)return c(new Error("Cannot find element: #"+e));var m,u=n.offset,d=n.duration,f=n.easing,p=l(),g=(m=i?i.getBoundingClientRect().top:0,s.getBoundingClientRect().top-m+l()+u-p);a&&((0,o.clearTimeout)(a),r()),r=t,function n(){var r=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+20;if(function(e){i?i.scrollTop=e:document.documentElement.scrollTop=document.body.scrollTop=e}(f(null,r,p,g,d)),!(r<d))return a=void 0,t(e);a=(0,o.setTimeout)(function(){n(r)},20)}()})})}}]);
//# sourceMappingURL=component---src-pages-404-js-6b4c5f4c6e99c8fe33c8.js.map