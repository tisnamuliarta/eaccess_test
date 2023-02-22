(window.webpackJsonp=window.webpackJsonp||[]).push([[96,22],{655:function(t,e,r){"use strict";r(303);var o=r(304);e.a=Object(o.a)("layout")},656:function(t,e,r){"use strict";r(303);var o=r(304);e.a=Object(o.a)("flex")},659:function(t,e,r){"use strict";var o=r(4),n=(r(48),r(64),r(305),r(13),r(6),r(12),r(53),r(100),r(14),r(11),r(16),r(17),r(8)),l=r(111),c=r(136);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},666:function(t,e,r){"use strict";r.r(e);var o=r(108),n=r(125),l=r(52),c=r(643),d=r(302),f=r(634),m=r(134),h=r(301),v={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},y=r(62),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n.a,[e(l.d,[e("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),e(h.a),t._v(" "),e(o.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[e(m.a,[t._v("mdi-close-circle")])],1)],1),t._v(" "),e(f.a),t._v(" "),e(l.c,{staticClass:"pl-0 pr-0"},[e(c.a,{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),e(f.a),t._v(" "),e(l.a,[e(h.a),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},804:function(t,e,r){"use strict";r.r(e);var o=r(108),n=r(656),l=r(659),c=r(134),d=r(655),f=r(665),m=r(196),h=(r(11),r(63),r(53),r(328)),v={name:"FormTask",components:{TiptapVuetify:h.p},props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,submitLoad:!1,form:this.formData,statusProcessing:"insert",itemSubCategoy:[],extensions:[h.g,h.a,h.k,h.r,h.o,h.j,h.l,h.c,h.m,h.i,[h.f,{options:{levels:[1,2,3]}}],h.b,h.k,h.d,h.h,h.n,h.e]}},methods:{selectSubCategory:function(){var t=this,e=this.form.department;this.$axios.get("/api/master/department-sub-category/1",{params:{category:e}}).then((function(e){t.$auth.$storage.setState("subCategory",e.data.data),t.itemSubCategoy=t.$auth.$storage.getState("subCategory")}))},returnData:function(data){this.itemSubCategoy=data},newData:function(){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem)},editItem:function(t){this.form=Object.assign({},t),this.statusProcessing="update",this.$refs.dialogForm.openDialog()},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var form=this.form,t=this.statusProcessing,data={form:form,status:t};"insert"===t?(this.store("post","/api/tasks/task",data),this.submitLoad=!1):"update"===t&&(this.store("put","/api/tasks/task/"+this.form.id,data),this.submitLoad=!1)},getDataFromApi:function(){},store:function(t,e,data){var r=this,o=this;o.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){r.submitLoad=!1,r.$refs.dialogForm.closeDialog(),r.$emit("getDataFromApi")})).catch((function(t){r.$swal({type:"error",title:"Error",text:t.response.data.message}),o.submitLoad=!1}))}}},y=r(62),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"800px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[e(l.a,{staticClass:"pt-2"},[e(d.a,{attrs:{wrap:""}},[e(n.a,{staticClass:"d-flex",attrs:{md12:""}},[e(d.a,{attrs:{wrap:""}},[e(n.a,{staticClass:"pa-1 mb-1",attrs:{md12:""}},[e(f.a,{attrs:{items:t.$auth.$storage.getLocalStorage("departments"),label:"Department",placeholder:"Department",outlined:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.selectSubCategory()}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e(o.a,{attrs:{small:"",icon:""}},[e(c.a,{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.formMaster.openForm("/api/products/category","Department","")}}},[t._v("\n                        mdi-arrow-right-bold\n                      ")])],1)]},proxy:!0}]),model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}})],1),t._v(" "),e(n.a,{staticClass:"pa-1 mb-1",attrs:{md12:""}},[e(f.a,{attrs:{items:t.itemSubCategoy,label:"Sub category",placeholder:"Sub category",outlined:"",dense:"","hide-details":"auto"},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e(o.a,{attrs:{small:"",icon:""}},[e(c.a,{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.formMaster.openForm("/api/master/department-sub-category","Sub category "+t.form.department,t.form.department)}}},[t._v("\n                        mdi-arrow-right-bold\n                      ")])],1)]},proxy:!0}]),model:{value:t.form.sub_category,callback:function(e){t.$set(t.form,"sub_category",e)},expression:"form.sub_category"}})],1),t._v(" "),e(n.a,{staticClass:"pa-1 mb-1",attrs:{md12:""}},[e(m.a,{attrs:{label:"Title",placeholder:"Title",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),e(n.a,{staticClass:"pa-1 mb-1",attrs:{md12:""}},[e("span",[t._v("Description")]),t._v(" "),e("client-only",{scopedSlots:t._u([{key:"placeholder",fn:function(){return[t._v(" Loading... ")]},proxy:!0}])},[e("tiptap-vuetify",{attrs:{extensions:t.extensions},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[e(o.a,{attrs:{color:"blue darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])}),t._v(" "),e("LazyFormMaster",{ref:"formMaster",on:{returnData:t.returnData}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogForm:r(666).default})}}]);