(this["webpackJsonp@tomik23/react-circular-progress-bar"]=this["webpackJsonp@tomik23/react-circular-progress-bar"]||[]).push([[0],{10:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),o=r(5),i=r.n(o),a=(r(10),r(2)),l=r(3),s=r(0),u=function(e){var t=e.stroke,r=e.colorCircle;return Object(s.jsx)("circle",{cx:"50",cy:"50",r:"42",shapeRendering:"geometricPrecision",fill:"none",stroke:r,strokeWidth:t})},j=function(e){var t=e.counter,r=e.fontSize,n=e.fontWeight,c=e.fontColor;return Object(s.jsxs)("text",{x:"50%",y:"50%",fontSize:r,fontWeight:n,fill:c,textAnchor:"middle",dominantBaseline:"central",children:[t,"%"]})},f=function(e){var t=e.linearGradient,r=-100;return Object(s.jsx)("defs",{children:Object(s.jsx)("linearGradient",{id:"linear-gradient",children:t.map((function(e,n){return r+=100,Object(s.jsx)("stop",{offset:r/(t.length-1)+"%",stopColor:e},n)}))})})},d=function(e){var t=e.linearGradient,r=e.counter,n=e.stroke,c=e.round,o=e.colorSlice,i=2.64*r+", 20000",a=void 0!==t?"url(#linear-gradient)":o;return Object(s.jsxs)(s.Fragment,{children:[t&&Object(s.jsx)(f,{linearGradient:t}),Object(s.jsx)("circle",{cx:"50",cy:"50",r:"42",shapeRendering:"geometricPrecision",fill:"none",transform:"rotate(-90, 50, 50)",stroke:a,strokeWidth:n,strokeLinecap:c?"round":"",strokeDasharray:i})]})},b=function(e){var t=e.percent,r=e.number,c=e.stroke,o=e.colorSlice,i=e.colorCircle,f=e.opacity,b=e.size,O=Object(n.useState)(0),h=Object(l.a)(O,2),x=h[0],p=h[1],v=Object(n.useRef)(null);Object(n.useEffect)((function(){var e,r,n=null===(e=v.current)||void 0===e||null===(r=e.dataset)||void 0===r?void 0:r.angel;if(!(t>100||t<=0||n===t)){var c;return c=requestAnimationFrame((function(){n>t?p((function(e){return e-1})):n<t&&p((function(e){return e+1}))})),function(){return cancelAnimationFrame(c)}}}),[x,t]);return Object(s.jsx)("div",{style:function(e){var t=void 0===e?"inset 0px 0px ".concat(c,"px ").concat(c,"px ").concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="string"===typeof e?parseInt(e.replace("#",""),16):e;return"rgba(".concat(r>>16,", ").concat((65280&r)>>8,", ").concat(255&r,", ").concat(t/100,")")}(o,f)):"";return{width:b,height:b,borderRadius:"50%",boxShadow:t}}(i),children:Object(s.jsxs)("svg",{ref:v,width:b,height:b,viewBox:"0 0 100 100","data-angel":x,children:[r&&Object(s.jsx)(j,Object(a.a)({counter:x},e)),Object(s.jsx)(u,Object(a.a)({counter:x},e)),Object(s.jsx)(d,Object(a.a)({counter:x},e))]})})};b.defaultProps={colorSlice:"#00a1ff",round:!1,number:!0,stroke:10,opacity:10,size:200,fontSize:"1.6rem",fontColor:"#365b74",fontWeight:400};var O=b,h={percent:70,colorSlice:"#E91E63"},x={linearGradient:["yellow","#ff0000"],round:!0,percent:66,colorSlice:"#4CAF50",colorCircle:"#e6e6e6"},p={percent:55,colorSlice:"#CDDC39",colorCircle:"#f1f1f1"},v={percent:60,colorSlice:"#000",colorCircle:"#e6e6e6",number:!1};var g=function(){var e=Object(n.useState)(h),t=Object(l.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c(Object(a.a)(Object(a.a)({},h),{},{percent:Math.floor(100*Math.random()+1)}))}),3e3);return function(){return clearInterval(e)}}),[]),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(O,Object(a.a)({},r)),Object(s.jsx)(O,Object(a.a)({},x)),Object(s.jsx)(O,Object(a.a)({},p)),Object(s.jsx)(O,Object(a.a)({},v))]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d9263f1f.chunk.js.map