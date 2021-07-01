(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{462:function(module,exports,__webpack_require__){__webpack_require__(463),__webpack_require__(620),__webpack_require__(621),__webpack_require__(818),__webpack_require__(819),__webpack_require__(824),__webpack_require__(825),__webpack_require__(823),__webpack_require__(820),__webpack_require__(826),__webpack_require__(821),__webpack_require__(822),__webpack_require__(827),module.exports=__webpack_require__(814)},530:function(module,exports){},621:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(327)},814:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(327).configure)([__webpack_require__(815),__webpack_require__(816)],module,!1)}).call(this,__webpack_require__(187)(module))},815:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=815},816:function(module,exports,__webpack_require__){var map={"./components/CircularProgressBar.stories.js":828};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=816},827:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(836),types=__webpack_require__(834),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},828:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"linearGradient",(function(){return CircularProgressBar_stories_linearGradient})),__webpack_require__.d(__webpack_exports__,"Simple",(function(){return Simple})),__webpack_require__.d(__webpack_exports__,"WithoutNumber",(function(){return WithoutNumber}));var objectSpread2=__webpack_require__(88),react=__webpack_require__(0),slicedToArray=__webpack_require__(442),jsx_runtime=__webpack_require__(42),CircularProgressBar_Text=function Text(_ref){var counter=_ref.counter,fontSize=_ref.fontSize,fontWeight=_ref.fontWeight;return Object(jsx_runtime.jsxs)("text",{x:"50%",y:"50%",fontSize:fontSize,fontWeight:fontWeight,fill:"#365b74",textAnchor:"middle",dominantBaseline:"central",children:[counter,"%"]})},CircularProgressBar_CircleBackground=function CircleBackground(_ref2){var stroke=_ref2.stroke,colorCircle=_ref2.colorCircle;return Object(jsx_runtime.jsx)("circle",{cx:"50",cy:"50",r:"42",shapeRendering:"geometricPrecision",fill:"none",stroke:colorCircle,strokeWidth:stroke})},CircularProgressBar_CircleTop=function CircleTop(props){var linearGradient=props.linearGradient,counter=props.counter,stroke=props.stroke,round=props.round,colorSlice=props.colorSlice,dasharray=2.64*counter+", 20000",gradient=void 0!==linearGradient?"url(#linear-gradient)":colorSlice;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[linearGradient&&Object(jsx_runtime.jsx)(CircularProgressBar_GradientLinear,{linearGradient:linearGradient}),Object(jsx_runtime.jsx)("circle",{cx:"50",cy:"50",r:"42",shapeRendering:"geometricPrecision",fill:"none",transform:"rotate(-90, 50, 50)",stroke:gradient,strokeWidth:stroke,strokeLinecap:round?"round":"",strokeDasharray:dasharray,"data-angel":counter})]})},CircularProgressBar_GradientLinear=function GradientLinear(_ref3){var linearGradient=_ref3.linearGradient,number=-100;return Object(jsx_runtime.jsx)("defs",{children:Object(jsx_runtime.jsx)("linearGradient",{id:"linear-gradient",children:linearGradient.map((function(gradient,index){return number+=100,Object(jsx_runtime.jsx)("stop",{offset:number/(linearGradient.length-1)+"%",stopColor:gradient},index)}))})})},CircularProgressBar_CircularProgressBar=function CircularProgressBar(props){var percent=props.percent,number=props.number,stroke=props.stroke,colorSlice=props.colorSlice,colorCircle=props.colorCircle,opacity=props.opacity,size=props.size,_useState=Object(react.useState)(0),_useState2=Object(slicedToArray.a)(_useState,2),counter=_useState2[0],setCounter=_useState2[1];Object(react.useEffect)((function(){var request;return request=requestAnimationFrame((function performAnimation(){counter>=percent||(setCounter((function(x){return x+1})),request=requestAnimationFrame(performAnimation))})),function(){return cancelAnimationFrame(request)}}));return Object(jsx_runtime.jsx)("div",{style:function styleObj(colorCircle){var boxShadow=void 0===colorCircle?"inset 0px 0px ".concat(stroke,"px ").concat(stroke,"px ").concat(function hex2rgb(hex){var opacity=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,c="string"==typeof hex?parseInt(hex.replace("#",""),16):hex;return"rgba(".concat(c>>16,", ").concat((65280&c)>>8,", ").concat(255&c,", ").concat(opacity/100,")")}(colorSlice,opacity)):"";return{width:size,height:size,borderRadius:"50%",boxShadow:boxShadow}}(colorCircle),children:Object(jsx_runtime.jsxs)("svg",{width:size,height:size,viewBox:"0 0 100 100",children:[number&&Object(jsx_runtime.jsx)(CircularProgressBar_Text,Object(objectSpread2.a)({counter:counter},props)),Object(jsx_runtime.jsx)(CircularProgressBar_CircleBackground,Object(objectSpread2.a)({counter:counter},props)),Object(jsx_runtime.jsx)(CircularProgressBar_CircleTop,Object(objectSpread2.a)({counter:counter},props))]})})};CircularProgressBar_CircularProgressBar.defaultProps={colorSlice:"#00a1ff",round:!1,number:!0,stroke:10,opacity:10,size:200,fontSize:"1.6rem",fontColor:"#365b74",fontWeight:400},CircularProgressBar_CircularProgressBar.__docgenInfo={description:"",methods:[],displayName:"CircularProgressBar",props:{colorSlice:{defaultValue:{value:"'#00a1ff'",computed:!1},type:{name:"string"},required:!1,description:""},round:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},number:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},stroke:{defaultValue:{value:"10",computed:!1},type:{name:"number"},required:!1,description:""},opacity:{defaultValue:{value:"10",computed:!1},type:{name:"number"},required:!1,description:""},size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},fontSize:{defaultValue:{value:"'1.6rem'",computed:!1},type:{name:"string"},required:!1,description:""},fontColor:{defaultValue:{value:"'#365b74'",computed:!1},type:{name:"string"},required:!1,description:""},fontWeight:{defaultValue:{value:"400",computed:!1},type:{name:"number"},required:!1,description:""},percent:{type:{name:"number"},required:!0,description:""},colorCircle:{type:{name:"string"},required:!1,description:""},linearGradient:{type:{name:"array"},required:!1,description:""}}};var components_CircularProgressBar=CircularProgressBar_CircularProgressBar;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\CircularProgressBar.js"]={name:"CircularProgressBar",docgenInfo:CircularProgressBar_CircularProgressBar.__docgenInfo,path:"src\\components\\CircularProgressBar.js"});var CircularProgressBar_stories_styleObj={display:"flex",justifyContent:"center",padding:"40px",fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"},CircularProgressBar_stories_Template=(__webpack_exports__.default={title:"Example/CircularProgressBar",component:components_CircularProgressBar,decorators:[function(Story){return Object(jsx_runtime.jsx)("div",{style:CircularProgressBar_stories_styleObj,children:Object(jsx_runtime.jsx)(Story,{})})}]},function Template(args){return Object(jsx_runtime.jsx)(components_CircularProgressBar,Object(objectSpread2.a)({},args))}),Default=CircularProgressBar_stories_Template.bind({});Default.args={percent:73,colorSlice:"#E91E63"};var CircularProgressBar_stories_linearGradient=CircularProgressBar_stories_Template.bind({});CircularProgressBar_stories_linearGradient.args={percent:70,round:!0,colorSlice:"#4CAF50",colorCircle:"#e6e6e6",linearGradient:["yellow","#ff0000"]};var Simple=CircularProgressBar_stories_Template.bind({});Simple.args={percent:55,colorSlice:"#CDDC39",colorCircle:"#f1f1f1",fontWeight:100};var WithoutNumber=CircularProgressBar_stories_Template.bind({});WithoutNumber.args={percent:60,colorSlice:"#000",colorCircle:"#e6e6e6",number:!1},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <CircularProgressBar {...args} />"}},Default.parameters),CircularProgressBar_stories_linearGradient.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <CircularProgressBar {...args} />"}},CircularProgressBar_stories_linearGradient.parameters),Simple.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <CircularProgressBar {...args} />"}},Simple.parameters),WithoutNumber.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <CircularProgressBar {...args} />"}},WithoutNumber.parameters)}},[[462,2,3]]]);