(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1097:function(t,r,e){t.exports=e.p+"img/crossref-logo-200.85a5f41.svg"},1146:function(t,r,e){"use strict";e.r(r);var n={},o=e(98),c=e(138),l=e.n(c),d=e(708),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-container",{attrs:{"text-center":""}},[n("h1",{staticClass:"display-4 my-4 primary--text"},[t._v("\n    vjsf\n  ")]),t._v(" "),n("p",{staticClass:"subtitle-2 font-italic"},[t._v("\n    vuetify-jsonschema-form (2.x branch)\n  ")]),t._v(" "),n("p",{staticClass:"mt-2 text-center"},[t._v("\n    Create beautiful and low-effort forms that output valid data.\n  ")]),t._v(" "),n("p",{staticClass:"mt-2 text-center"},[t._v("\n    Based on "),n("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js 2")]),t._v(" / "),n("a",{attrs:{href:"https://vuetifyjs.com/"}},[t._v("Vuetify 2")]),t._v(" / "),n("a",{attrs:{href:"https://json-schema.org/"}},[t._v("JSON Schema")]),t._v(".\n  ")]),t._v(" "),n("iframe",{attrs:{width:"560",height:"463",sandbox:"allow-same-origin allow-scripts allow-popups",src:"https://videos.koumoul.com/videos/embed/29d12ba2-f694-4659-8027-e9386692d8b5?title=0&warningTitle=0&peertubeLink=0&autoplay=1",frameborder:"0",allowfullscreen:""}}),t._v(" "),n("h2",{staticClass:"title mt-6 mb-4 primary--text"},[t._v("\n    Sponsors\n  ")]),t._v(" "),n("a",{attrs:{href:"https://www.crossref.org/",target:"_blank"}},[n("img",{staticStyle:{"max-width":"120px"},attrs:{src:e(1097),title:"Crossref"}})])])}),[],!1,null,"436ab202",null);r.default=component.exports;l()(component,{VContainer:d.a})},708:function(t,r,e){"use strict";e(13),e(5),e(11),e(103),e(31),e(381),e(293),e(71),e(70);var n=e(3);var o,c=e(93);r.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,r){var e=r.props,data=r.data,n=r.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var r=c[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,r){var e,n=r.props,data=r.data,o=r.children,l=data.attrs;return l&&(data.attrs={},e=Object.keys(l).filter((function(t){if("slot"===t)return!1;var r=l[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),o)}})}}]);