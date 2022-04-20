(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1100:function(t,e,n){"use strict";n(827)},1101:function(t,e,n){var o=n(21)(!1);o.push([t.i,'.v-sheet.codeblock[data-v-154cb45a]{margin-top:6px;margin-bottom:18px;padding:8px 8px 2px}.v-sheet.codeblock code[data-v-154cb45a]{background:none;box-shadow:none}.v-sheet.codeblock code[data-v-154cb45a]:before{content:""}',""]),t.exports=o},1121:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{title:"Getting started"}},head:function(){return{title:"vjsf - "+this.title}}},r=(n(1100),n(97)),l=n(138),c=n.n(l),d=n(705),v=n(86),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",{staticClass:"display-1 mb-4"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("h2",{staticClass:"headline my-4"},[t._v("\n      Load from CDN\n    ")]),t._v(" "),n("v-sheet",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"codeblock",attrs:{dark:""}},[n("pre",[n("code",{staticClass:"html"},[t._v('<script src="https://cdn.jsdelivr.net/npm/@koumoul/vjsf@latest/dist/main.js"><\/script>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@koumoul/vjsf@latest/dist/main.css">\n\x3c!-- load third-party dependencies (markdown-it, vuedraggable) --\x3e\n\x3c!-- you can also load them separately based on your needs --\x3e\n<script src="https://cdn.jsdelivr.net/npm/@koumoul/vjsf@latest/dist/third-party.js"><\/script>')])])]),t._v(" "),n("v-sheet",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"codeblock",attrs:{dark:""}},[n("pre",[n("code",{staticClass:"javascript"},[t._v("Vue.component('VJsf', VJsf.default)")])])]),t._v(" "),n("h2",{staticClass:"headline my-4"},[t._v("\n      Load from NPM\n    ")]),t._v(" "),n("v-sheet",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"codeblock",attrs:{dark:""}},[n("pre",[n("code",{staticClass:"bash"},[t._v("npm install --save @koumoul/vjsf")])])]),t._v(" "),n("h3",{staticClass:"title my-4"},[t._v("\n      Import built version of the module\n    ")]),t._v(" "),n("v-sheet",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"codeblock",attrs:{dark:""}},[n("pre",[n("code",{staticClass:"javascript"},[t._v("import VJsf from '@koumoul/vjsf'\nimport '@koumoul/vjsf/dist/main.css'\n// load third-party dependencies (markdown-it, vuedraggable)\n// you can also load them separately based on your needs\nimport '@koumoul/vjsf/dist/third-party.js'\n\nVue.component('VJsf', VJsf)")])])]),t._v(" "),n("h3",{staticClass:"title my-4"},[t._v("\n      Import module from source\n    ")]),t._v(" "),n("p",[t._v("\n      This is useful if you wish to let your build tool analyze the source code of vjsf. Particularily interesting if you use vuetify-loader.\n    ")]),t._v(" "),n("v-sheet",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"codeblock",attrs:{dark:""}},[n("pre",[n("code",{staticClass:"javascript"},[t._v("import VJsf from '@koumoul/vjsf/lib/VJsf.js'\nimport '@koumoul/vjsf/lib/VJsf.css'\n// load third-party dependencies (markdown-it, vuedraggable)\n// you can also load them separately based on your needs\nimport '@koumoul/vjsf/lib/deps/third-party.js'\n\nVue.component('VJsf', VJsf)")])])]),t._v(" "),n("v-sheet",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"codeblock",attrs:{dark:""}},[n("pre",[n("code",{staticClass:"javascript"},[t._v("// you should have something like the following somewhere in webpack.config.js or nuxt.config.js, etc.\nbuild: {\n  transpile: ['vuetify/lib', /@koumoul/], // necessary for \"à la carte\" import of vuetify components\n}\n")])])]),t._v(" "),n("h2",{staticClass:"headline my-4"},[t._v("\n      Usage\n    ")]),t._v(" "),n("v-sheet",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"codeblock",attrs:{dark:""}},[n("pre",[n("code",{staticClass:"html"},[t._v('<v-form v-model="valid">\n  <v-jsf v-model="model" :schema="schema" :options="options" />\n</ v-form>')])])]),t._v(" "),n("h2",{staticClass:"headline my-4"},[t._v("\n      Vue CLI setup\n    ")]),t._v(" "),n("p",[t._v("\n      This is an example of getting started with vjsf in a new Vue CLI project. First run these commands:\n    ")]),t._v(" "),n("v-sheet",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"codeblock",attrs:{dark:""}},[n("pre",[n("code",{staticClass:"bash"},[t._v("npm install -g @vue/cli\nvue create my-app\ncd my-app\nvue add vuetify\nnpm install -g @koumoul/vjsf\n")])])]),t._v(" "),n("p",[t._v("Edit vue.config.js to look like this:")]),t._v(" "),n("v-sheet",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"codeblock",attrs:{dark:""}},[n("pre",[n("code",{staticClass:"javascript"},[t._v('module.exports = {\n  "transpileDependencies": [\n    "vuetify", "@koumoul/vjsf"\n  ]\n}')])])]),t._v(" "),n("p",[t._v("Then replace the content of src/App.vue with this code:")]),t._v(" "),n("v-sheet",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"codeblock",attrs:{dark:""}},[n("pre",[n("code",{staticClass:"html"},[t._v('<template>\n  <v-app>\n    <v-main>\n      <v-form v-model="valid">\n        <v-jsf v-model="model" :schema="schema"/>\n      </v-form>\n      <p>valid='+t._s(t.valid)+"</p>\n      <pre>"+t._s(t.model)+"</pre>\n    </v-main>\n  </v-app>\n</template>\n\n<script>\nimport VJsf from '@koumoul/vjsf/lib/VJsf.js'\nimport '@koumoul/vjsf/lib/VJsf.css'\nimport '@koumoul/vjsf/lib/deps/third-party.js'\n\nexport default {\n  name: 'App',\n  components: { VJsf },\n  data: () => ({\n    valid: false,\n    model: {},\n    schema: {\n      type: 'object',\n      properties: {\n        stringProp: { type: 'string' },\n        colorProp: { type: 'string', 'x-display': 'color-picker' },\n      }\n    }\n  }),\n};\n<\/script>\n  ")])])]),t._v(" "),n("p",[t._v("\n      Finally check that everything is working with "),n("code",[t._v("npm run serve")]),t._v(".\n    ")])],1)}),[],!1,null,"154cb45a",null);e.default=component.exports;c()(component,{VContainer:d.a,VSheet:v.a})},705:function(t,e,n){"use strict";n(13),n(5),n(11),n(103),n(31),n(380),n(291),n(71),n(70);var o=n(3);var r,l=n(93);e.a=(r="container",o.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,r=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},827:function(t,e,n){var content=n(1101);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("b3fc68fa",content,!0,{sourceMap:!1})}}]);