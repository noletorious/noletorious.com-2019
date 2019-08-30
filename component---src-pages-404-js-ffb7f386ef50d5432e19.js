(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(239),o=a(235);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},235:function(e,t,a){"use strict";var n=a(242),r=a(0),l=a.n(r),o=a(1),i=a.n(o),s=a(252),c=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,i=n.data.site,s=t||i.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},237:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n),l=a(234),o=a.n(l),i=function(e){var t=e.to,a=e.children;return r.a.createElement(o.a,{to:t,exit:{length:.75},entry:{delay:.75,length:.75}},a)}},239:function(e,t,a){"use strict";a(71),a(72);var n=a(0),r=a.n(n),l=a(1),o=a.n(l),i=a(237),s=a(238),c=a(134),m=a(234),u=a(230),p=a.n(u),d=a(231),f=a.n(d),E=a(232),g=a.n(E),h=a(233),x=a(236),y=a(217),b=a.n(y),v=function(e){var t=e.isHome;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.TransitionState,null,function(a){var n=a.transitionStatus,l=(a.exit,a.entry,["entering","entered"].includes(n));return r.a.createElement(s.Spring,{from:{paddingTop:e.isHome&&l?"8vh":"2vh",paddingBottom:e.isHome&&l?"15vh":"2vh"},to:{paddingTop:e.isHome&&l?"8vh":(e.isHome,"2vh"),paddingBottom:e.isHome&&l?"15vh":(e.isHome,"2vh")}},function(e){return r.a.createElement("div",{id:"nav",className:["bg-white","d-flex","d-flex-row","flex-wrap","align-items-center",t?null:"border-bottom"].join(" "),style:e},r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{className:"d-flex flex-row align-items-center pl-0 flex-xs-column justify-content-center justify-content-sm-start",xs:{span:12},sm:{span:8}},r.a.createElement(s.Spring,{from:{display:"block",opacity:1},to:{display:l&&t?"none":"block",opacity:l&&t?0:1}},function(e){return r.a.createElement("div",{className:"p-2",style:e},r.a.createElement("button",{title:"Go back",onClick:function(){return window.history.go(-1)},className:["align-items-center","d-flex","px-0",b.a.backBtn].join(" ")},r.a.createElement(h.a,{icon:x.b,size:"lg"})))}),r.a.createElement(s.Spring,{from:{fontSize:l&&t?"2em":"1em"},to:{fontSize:l&&t?"2em":"1em"}},function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-2",style:e},r.a.createElement(i.a,{to:"/"},r.a.createElement("span",{"aria-label":"noletorious",role:"img",className:b.a.n},"🏌️"))),r.a.createElement("div",{className:"p-2",style:e},r.a.createElement("p",{className:"mb-0 text-light font-weight-bold"},"Noel Torres"),r.a.createElement("h6",{className:"mb-0 text-light"},"Full-stack Designer")))})),r.a.createElement(g.a,{className:"d-flex align-items-center nav-items justify-content-center justify-content-sm-start",xs:{span:12},sm:{span:4},style:{fontSize:"120%"}},r.a.createElement("div",{className:"ml-sm-auto p-2"},r.a.createElement(i.a,{to:"/about"},"About")),r.a.createElement("div",{className:"p-2"},r.a.createElement(c.Link,{to:"/#work"},"Work"))))))})}))},N=a(245),w=a.n(N),j=a(240),k=a.n(j),H=a(241),S=a.n(H),T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{fluid:"true",className:["flex-grow-1"].join(" ")},r.a.createElement(f.a,{className:"h-100 d-flex"},r.a.createElement(g.a,{xs:{span:12},sm:{span:8,offset:2},md:{span:8,offset:2},lg:{span:6,offset:3},className:["d-flex","align-items-center"].join(" ")},r.a.createElement("div",{className:["img-fluid","w-100"].join(" "),style:{marginTop:"-6em"}},r.a.createElement("video",{controls:!0,loop:!0,muted:!0,autoPlay:"true",className:"w-100 h-100"},r.a.createElement("source",{src:S.a,type:"video/webm"}),r.a.createElement("source",{src:k.a,type:"video/mp4"}),r.a.createElement("span",{className:"text-light"},"Your browser does not support this video.")))),r.a.createElement(g.a,{xs:{span:12},className:["d-flex","justify-content-center","align-items-center","flex-column","text-center","text-light"].join(" ")},r.a.createElement("h3",null,"My name is Noel, ",r.a.createElement("br",null),"I create digital experiences for people."),r.a.createElement("p",null,r.a.createElement(w.a,{to:"#work"},r.a.createElement(h.a,{icon:x.d,size:"lg"})))))))},P=(a(40),a(218)),z=a.n(P),F=a(250),I=a(251),O=a.n(I),M=function(){var e=Object(n.useState)(null),t=e[0],a=e[1];return Object(n.useEffect)(function(){console.log("======useEffect======"),O.a.get("https://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&appid=9ff3b3252f2b747c427a1c0be7eecc50").then(function(e){a(e.data)}).catch(function(e){console.log(e)})},[]),r.a.createElement("footer",{className:["bg-footer"].join(" ")},r.a.createElement(p.a,null,r.a.createElement(f.a,{className:["d-flex","align-items-center","justify-content-center"].join(" "),style:{height:"200px"}},r.a.createElement(g.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("ul",{className:["mb-0","ml-0","list-group","list-group-horizontal"].join(" ")},r.a.createElement("li",{className:["list-group-item",z.a.footerItem].join(" ")},r.a.createElement("a",{href:"//dribbble.com/noletorious"},r.a.createElement(h.a,{icon:F.a,size:"lg"}))),r.a.createElement("li",{className:["list-group-item",z.a.footerItem].join(" ")},r.a.createElement("a",{href:"//github.com/noletorious"},r.a.createElement(h.a,{icon:F.b,size:"lg"}))),r.a.createElement("li",{className:["list-group-item",z.a.footerItem].join(" ")},r.a.createElement("a",{href:"//linkedin.com/noletorious"},r.a.createElement(h.a,{icon:F.c,size:"lg"})))))),r.a.createElement(g.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("p",{className:["mb-0","text-white"].join(" ")},"Get in touch? ",r.a.createElement("a",{href:"mailto:hello@noletorious.com"},"Email")," is a quick way."))),r.a.createElement(g.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("h6",{className:["mb-0","text-white","text-mute"].join(" ")},t?t.name+", OR "+Math.round(t.main.temp)+"°F":"Loading weather data..."),r.a.createElement("img",{src:t?"http://openweathermap.org/img/w/"+t.weather[0].icon+".png":null,alt:"weather icon",style:{width:"30px",marginBottom:"0"}}))))))},B=a(235);a(219);var Y=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={checkIsHomePage:!!a.props.page},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{title:"Noel Torres Portfolio"}),r.a.createElement(m.TransitionState,null,function(t){var a=t.transitionStatus,n=["entering","entered"].includes(a),l=["exiting","exited"].includes(a),o="POP"===a;return r.a.createElement(s.Spring,{from:{opacity:0,transform:"translateY("+(l?"10px":0)+")"},to:{opacity:n||o?1:0,transform:"translateY("+(n?0:"10px")+")"}},function(t){return r.a.createElement("div",null,e.state.checkIsHomePage?r.a.createElement("div",{className:"vh-100 d-flex flex-column"},r.a.createElement(v,{isHome:e.state.checkIsHomePage}),r.a.createElement(T,{style:t})):r.a.createElement(v,{isHome:e.state.checkIsHomePage}),r.a.createElement("main",{className:["d-flex","flex-column"].join(" "),style:t},e.props.children))})}),r.a.createElement(M,null))},n}(n.Component);Y.propTypes={children:o.a.node.isRequired};t.a=Y},240:function(e,t,a){e.exports=a.p+"static/home-animation-82a690b10a8f80d01e2d7f43b3ec60ae.mp4"},241:function(e,t,a){e.exports=a.p+"static/home-animation-6074193a310d87c37592a736ee767b6d.webm"},242:function(e){e.exports={data:{site:{siteMetadata:{title:"Noletorious",description:"Portland's Favorite Web Designer",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-ffb7f386ef50d5432e19.js.map