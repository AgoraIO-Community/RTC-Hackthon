(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/hx-navbar/hx-navbar"],{1197:function(t,o,r){"use strict";r.r(o);var a=r("394b"),n=r("874c");for(var e in n)"default"!==e&&function(t){r.d(o,t,function(){return n[t]})}(e);r("7cc6");var l,i=r("f0c5"),c=Object(i["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],l);o["default"]=c.exports},"139a":function(t,o,r){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-icons/uni-icons")]).then(r.bind(null,"e406"))},n=t.getSystemInfoSync().statusBarHeight+"px",e={name:"hx-navbar",components:{uniIcons:a},data:function(){return{statusBarHeight:n,transparentValue:0,navTransparentFixedFontColor:"#fff",statusBarFontColorInfo:[],backgroundColorRgba:"rgba(255,255,255,1)",backgroundColorRgb:"rgb(222,222,222)",colorInfo:"#000000",placeholder:!1,colorContainer:null,slotSlidiSwitch:0}},props:{height:{type:String,default:"44px"},barPlaceholder:{type:String,default:"auto"},back:{type:[Boolean,String],default:!0},title:{type:String,default:""},leftSlot:{type:[Boolean,String],default:!0},rightSlot:{type:[Boolean,String],default:!0},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:[Array,String],default:"#000000"},backgroundColor:{type:Array,default:function(){return new Array([255,255,255],[255,255,255])}},backgroundColorLinearDeg:{type:String,default:"45"},backgroundImg:{type:String,default:""},transparent:{type:String,default:"show"},statusBarFontColor:{type:[Array,String],default:function(){return new Array("#000000","#000000")}},statusBar:{type:[Boolean,String],default:!0},statusBarBackground:{type:String,default:""},shadow:{type:[String,Boolean],default:!1},border:{type:[String,Boolean],default:!1},defaultBackUrl:{type:String,default:""},backTabbarUrl:{type:String,default:"/pages/index/index"},leftSlidiSwitch:{type:[Boolean,String],default:!1},centerSlidiSwitch:{type:[Boolean,String],default:!1},rightSlidiSwitch:{type:[Boolean,String],default:!1},pageScroll:{type:Object,default:function(){return{}}}},created:function(){var t=this;switch(t.barPlaceholder){case"show":t.placeholder=!0;break;case"hidden":t.placeholder=!1;break;case"auto":t.fixed&&(t.placeholder=!0);break}switch(t.setStatusBarFontColor(),t.colorContainer="object"==typeof t.color?t.color:[t.color,t.color],t.colorInfo=t.colorContainer[0],t.transparent){case"show":t.transparentValue=1;break;case"hidden":t.transparentValue=0;break;case"auto":t.setTVAuto(t.pageScroll);break}t.setBgColor(),t.fixed&&(t.leftSlidiSwitch||t.centerSlidiSwitch||t.rightSlidiSwitch)&&t.doScroll(t.pageScroll)},watch:{pageScroll:function(t,o){var r=this;switch(r.transparent){case"show":r.transparentValue=1;break;case"hidden":r.transparentValue=0;break;case"auto":this.setTVAuto(t);break}r.fixed&&(r.leftSlidiSwitch||r.centerSlidiSwitch||r.rightSlidiSwitch)&&r.doScroll(t)},transparentValue:function(t,o){var r=this;tt.setNavigationBarColor?o>.8?tt.setNavigationBarColor({frontColor:r.statusBarFontColorInfo[1],backgroundColor:r.backgroundColorRgb,success:function(t){},fail:function(t){}}):o<.2&&tt.setNavigationBarColor({frontColor:r.statusBarFontColorInfo[0],backgroundColor:r.backgroundColorRgb,success:function(t){},fail:function(t){}}):console.log("hx-navbar 提示：当前客户端版本过低，无法使用状态栏颜色修改功能，请升级（基础库1.40+）。")},backgroundColor:function(t,o){var r=this;r.setBgColor()},color:function(t,o){}},methods:{onClickLeft:function(){this.back?getCurrentPages().length>1?t.navigateBack():this.defaultBackUrl?t.redirectTo({url:this.defaultBackUrl}):this.backTabbarUrl&&t.reLaunch({url:this.backTabbarUrl}):this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")},doScroll:function(t){var o=this;o.$emit("scroll",t),t.scrollTop>100?o.slotSlidiSwitch=1:o.slotSlidiSwitch=0},setTVAuto:function(t){var o=this;o.$emit("scroll",t),t.scrollTop>100?(o.transparentValue=1,o.colorInfo=o.colorContainer[1]):(o.transparentValue=t.scrollTop/100,o.colorInfo=o.colorContainer[0]),o.setBgColor()},setBgColor:function(){var t=this;if("object"==typeof t.backgroundColor[0]){var o=t.backgroundColor.length;if(o>=2){var r="linear-gradient("+t.backgroundColorLinearDeg+"deg,",a=null;for(var n in t.backgroundColor)a=t.backgroundColor[n],r+="rgba("+a[0]+","+a[1]+","+a[2]+","+t.transparentValue+")",o!=1*n+1&&(r+=",");r+=")",t.backgroundColorRgba=r}}else{var e=t.backgroundColor[0]+","+t.backgroundColor[1]+","+t.backgroundColor[2];t.backgroundColorRgb="rgb("+e+")",t.backgroundColorRgba="rgba("+e+","+t.transparentValue+")"}},setStatusBarFontColor:function(){var t=this;"string"==typeof t.statusBarFontColor?t.statusBarFontColorInfo=[t.statusBarFontColor,t.statusBarFontColor]:"object"==typeof t.statusBarFontColor&&(1==t.statusBarFontColor.length?t.statusBarFontColorInfo=[t.statusBarFontColor[0],t.statusBarFontColor[0]]:t.statusBarFontColor.length>=2&&(t.statusBarFontColorInfo=[t.statusBarFontColor[0],t.statusBarFontColor[1]])),tt.setNavigationBarColor?tt.setNavigationBarColor({frontColor:t.statusBarFontColorInfo[0],backgroundColor:t.backgroundColorRgb}):console.log("hx-navbar 提示：当前客户端版本过低，无法使用状态栏颜色修改功能，请升级（基础库1.40+）。")}},destroyed:function(){}};o.default=e}).call(this,r("f266")["default"])},"2df8":function(t,o,r){},"394b":function(t,o,r){"use strict";var a={"uni-icons":()=>Promise.all([r.e("common/vendor"),r.e("components/uni-icons/uni-icons")]).then(r.bind(null,"e406"))},n=function(){var t=this,o=t.$createElement;t._self._c},e=[];r.d(o,"b",function(){return n}),r.d(o,"c",function(){return e}),r.d(o,"a",function(){return a})},"7cc6":function(t,o,r){"use strict";var a=r("2df8"),n=r.n(a);n.a},"874c":function(t,o,r){"use strict";r.r(o);var a=r("139a"),n=r.n(a);for(var e in a)"default"!==e&&function(t){r.d(o,t,function(){return a[t]})}(e);o["default"]=n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/hx-navbar/hx-navbar-create-component',
    {
        'components/hx-navbar/hx-navbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("1197"))
        })
    },
    [['components/hx-navbar/hx-navbar-create-component']]
]);
