(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{235:function(e,t,a){"use strict";var n=a(242),r=a(0),i=a.n(r),s=a(1),o=a.n(s),l=a(252),c=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,o=n.data.site,l=t||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=d},237:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),i=a(234),s=a.n(i),o=function(e){var t=e.to,a=e.children;return r.a.createElement(s.a,{to:t,exit:{length:.75},entry:{delay:.75,length:.75}},a)}},239:function(e,t,a){"use strict";a(71),a(72);var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(237),l=a(238),c=a(134),d=a(234),u=a(230),f=a.n(u),m=a(231),p=a.n(m),g=a(232),h=a.n(g),b=a(233),E=a(236),y=a(217),v=a.n(y),S=function(e){var t=e.isHome;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.TransitionState,null,function(a){var n=a.transitionStatus,i=(a.exit,a.entry,["entering","entered"].includes(n));return r.a.createElement(l.Spring,{from:{paddingTop:e.isHome&&i?"8vh":"2vh",paddingBottom:e.isHome&&i?"15vh":"2vh"},to:{paddingTop:e.isHome&&i?"8vh":(e.isHome,"2vh"),paddingBottom:e.isHome&&i?"15vh":(e.isHome,"2vh")}},function(e){return r.a.createElement("div",{id:"nav",className:["bg-white","d-flex","d-flex-row","flex-wrap","align-items-center",t?null:"border-bottom"].join(" "),style:e},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(h.a,{className:"d-flex flex-row align-items-center pl-0 flex-xs-column justify-content-center justify-content-sm-start",xs:{span:12},sm:{span:8}},r.a.createElement(l.Spring,{from:{display:"block",opacity:1},to:{display:i&&t?"none":"block",opacity:i&&t?0:1}},function(e){return r.a.createElement("div",{className:"p-2",style:e},r.a.createElement("button",{title:"Go back",onClick:function(){return window.history.go(-1)},className:["align-items-center","d-flex","px-0",v.a.backBtn].join(" ")},r.a.createElement(b.a,{icon:E.b,size:"lg"})))}),r.a.createElement(l.Spring,{from:{fontSize:i&&t?"2em":"1em"},to:{fontSize:i&&t?"2em":"1em"}},function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-2",style:e},r.a.createElement(o.a,{to:"/"},r.a.createElement("span",{"aria-label":"noletorious",role:"img",className:v.a.n},"🏌️"))),r.a.createElement("div",{className:"p-2",style:e},r.a.createElement("p",{className:"mb-0 text-light font-weight-bold"},"Noel Torres"),r.a.createElement("h6",{className:"mb-0 text-light"},"Full-stack Designer")))})),r.a.createElement(h.a,{className:"d-flex align-items-center nav-items justify-content-center justify-content-sm-start",xs:{span:12},sm:{span:4},style:{fontSize:"120%"}},r.a.createElement("div",{className:"ml-sm-auto p-2"},r.a.createElement(o.a,{to:"/about"},"About")),r.a.createElement("div",{className:"p-2"},r.a.createElement(c.Link,{to:"/#work"},"Work"))))))})}))},w=a(245),x=a.n(w),N=a(240),j=a.n(N),L=a(241),I=a.n(L),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{fluid:"true",className:["flex-grow-1"].join(" ")},r.a.createElement(p.a,{className:"h-100 d-flex"},r.a.createElement(h.a,{xs:{span:12},sm:{span:8,offset:2},md:{span:10,offset:1},lg:{span:8,offset:2},className:["d-flex","align-items-center"].join(" ")},r.a.createElement("div",{className:["img-fluid","w-100"].join(" "),style:{marginTop:"-6em"}},r.a.createElement("video",{controls:!0,loop:!0,muted:!0,autoPlay:"true",className:"w-100 h-100"},r.a.createElement("source",{src:I.a,type:"video/webm"}),r.a.createElement("source",{src:j.a,type:"video/mp4"}),r.a.createElement("span",{className:"text-light"},"Your browser does not support this video.")))),r.a.createElement(h.a,{xs:{span:12},className:["d-flex","justify-content-center","align-items-center","flex-column","text-center","text-light"].join(" ")},r.a.createElement("h3",null,"My name is Noel, ",r.a.createElement("br",null),"I create digital experiences for people."),r.a.createElement("p",null,r.a.createElement(x.a,{to:"#work"},r.a.createElement(b.a,{icon:E.d,size:"lg"})))))))},O=(a(40),a(218)),k=a.n(O),R=a(250),P=a(251),T=a.n(P),V=function(){var e=Object(n.useState)(null),t=e[0],a=e[1];return Object(n.useEffect)(function(){console.log("======useEffect======"),T.a.get("https://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&appid=9ff3b3252f2b747c427a1c0be7eecc50").then(function(e){a(e.data)}).catch(function(e){console.log(e)})},[]),r.a.createElement("footer",{className:["bg-footer"].join(" ")},r.a.createElement(f.a,null,r.a.createElement(p.a,{className:["d-flex","align-items-center","justify-content-center"].join(" "),style:{height:"200px"}},r.a.createElement(h.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("ul",{className:["mb-0","ml-0","list-group","list-group-horizontal"].join(" ")},r.a.createElement("li",{className:["list-group-item",k.a.footerItem].join(" ")},r.a.createElement("a",{href:"//dribbble.com/noletorious"},r.a.createElement(b.a,{icon:R.a,size:"lg"}))),r.a.createElement("li",{className:["list-group-item",k.a.footerItem].join(" ")},r.a.createElement("a",{href:"//github.com/noletorious"},r.a.createElement(b.a,{icon:R.b,size:"lg"}))),r.a.createElement("li",{className:["list-group-item",k.a.footerItem].join(" ")},r.a.createElement("a",{href:"//linkedin.com/noletorious"},r.a.createElement(b.a,{icon:R.c,size:"lg"})))))),r.a.createElement(h.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("p",{className:["mb-0","text-white"].join(" ")},"Get in touch? ",r.a.createElement("a",{href:"mailto:hello@noletorious.com"},"Email")," is a quick way."))),r.a.createElement(h.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("h6",{className:["mb-0","text-white","text-mute"].join(" ")},t?t.name+", OR "+Math.round(t.main.temp)+"°F":"Loading weather data..."),r.a.createElement("img",{src:t?"http://openweathermap.org/img/w/"+t.weather[0].icon+".png":null,alt:"weather icon",style:{width:"30px",marginBottom:"0"}}))))))},C=a(235);a(219);var H=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={checkIsHomePage:!!a.props.page},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{title:"Noel Torres Portfolio"}),r.a.createElement(d.TransitionState,null,function(t){var a=t.transitionStatus,n=["entering","entered"].includes(a),i=["exiting","exited"].includes(a),s="POP"===a;return r.a.createElement(l.Spring,{from:{opacity:0,transform:"translateY("+(i?"10px":0)+")"},to:{opacity:n||s?1:0,transform:"translateY("+(n?0:"10px")+")"}},function(t){return r.a.createElement("div",null,e.state.checkIsHomePage?r.a.createElement("div",{className:"vh-100 d-flex flex-column"},r.a.createElement(S,{isHome:e.state.checkIsHomePage}),r.a.createElement(z,{style:t})):r.a.createElement(S,{isHome:e.state.checkIsHomePage}),r.a.createElement("main",{className:["d-flex","flex-column"].join(" "),style:t},e.props.children))})}),r.a.createElement(V,null))},n}(n.Component);H.propTypes={children:s.a.node.isRequired};t.a=H},240:function(e,t,a){e.exports=a.p+"static/home-animation-ba8a50e69aaedcf719a702c81eb8d344.mp4"},241:function(e,t,a){e.exports=a.p+"static/home-animation-08dbaefec1b1f7b8ff3de7d148798602.webm"},242:function(e){e.exports={data:{site:{siteMetadata:{title:"Noletorious",description:"Portland's Favorite Web Designer",author:"@gatsbyjs"}}}}},246:function(e,t,a){"use strict";a(18),a(13),a(5),a(54),a(135),a(248);var n=a(4);t.__esModule=!0,t.default=void 0;var r,i=n(a(30)),s=n(a(42)),o=n(a(41)),l=n(a(22)),c=n(a(0)),d=n(a(1)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,E=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),c.default.createElement("source",{media:r,srcSet:a,sizes:i}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})})}function x(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)}).join("")+"<img "+c+s+o+a+n+t+i+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=c.default.createElement(I,(0,l.default)({src:t},r));return a.length>1?c.default.createElement("picture",null,n(a),i):i},I=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var n=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,v=e.itemProp,x=e.loading,N=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,l.default)({opacity:z?1:0,transition:O?"opacity "+b+"ms":"none"},o),R="boolean"==typeof h?"lightgray":h,P={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&P,o,f),V={title:t,alt:this.state.isVisible?"":a,style:T,className:m};if(p){var C=p,H=C[0];return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),R&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&P)}),H.base64&&c.default.createElement(L,{src:H.base64,spreadProps:V,imageVariants:C,generateSources:w}),H.tracedSVG&&c.default.createElement(L,{src:H.tracedSVG,spreadProps:V,imageVariants:C,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(C),c.default.createElement(I,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:x},H,{imageVariants:C}))}}))}if(g){var M=g,F=M[0],q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},i);return"inherit"===i.display&&delete q.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},R&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:R,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},O&&P)}),F.base64&&c.default.createElement(L,{src:F.base64,spreadProps:V,imageVariants:M,generateSources:w}),F.tracedSVG&&c.default.createElement(L,{src:F.tracedSVG,spreadProps:V,imageVariants:M,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(M),c.default.createElement(I,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:x},F,{imageVariants:M}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),k=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});z.propTypes={resolutions:O,sizes:k,fixed:d.default.oneOfType([O,d.default.arrayOf(O)]),fluid:d.default.oneOfType([k,d.default.arrayOf(k)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=z;t.default=R},248:function(e,t,a){"use strict";a(249)("fixed",function(e){return function(){return e(this,"tt","","")}})},249:function(e,t,a){var n=a(7),r=a(11),i=a(43),s=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},272:function(e,t,a){"use strict";var n=a(4);t.__esModule=!0,t.default=void 0;var r=n(a(22)),i=n(a(41)),s=n(a(30)),o=n(a(244)),l=n(a(0)),c=a(247),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,s.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,n=e.striped,s=e.bordered,c=e.borderless,d=e.hover,u=e.size,f=e.variant,m=e.responsive,p=(0,i.default)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),g=(0,o.default)(t,a,f&&t+"-"+f,u&&t+"-"+u,n&&t+"-striped",s&&t+"-bordered",c&&t+"-borderless",d&&t+"-hover"),h=l.default.createElement("table",(0,r.default)({},p,{className:g}));if(m){var b=t+"-responsive";return"string"==typeof m&&(b=b+"-"+m),l.default.createElement("div",{className:b},h)}return h},t}(l.default.Component),u=(0,c.createBootstrapComponent)(d,"table");t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=2-04065513c763175e0fcc.js.map