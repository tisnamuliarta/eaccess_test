(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{655:function(t,e,n){"use strict";n(303);var r=n(304);e.a=Object(r.a)("layout")},656:function(t,e,n){"use strict";n(303);var r=n(304);e.a=Object(r.a)("flex")},659:function(t,e,n){"use strict";var r=n(4),o=(n(48),n(64),n(305),n(13),n(6),n(12),n(53),n(100),n(14),n(11),n(16),n(17),n(8)),l=n(111),d=n(136);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},687:function(t,e,n){"use strict";n.r(e);var r=n(108),o=n(125),l=n(52),d=n(953),c=n(656),f=n(659),m=n(134),h=n(655),v=n(635),_=n(301),y=n(196),x=(n(6),n(45),n(652),n(53),{name:"FormOut",props:{formTitle:{type:String,default:""},alias:{type:String,default:""},itemYesNo:{type:Array,default:function(){return[]}},itemBilling:{type:Array,default:function(){return[]}},employee:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!1,submitLoad:!1,url:"",menu1:"",menu2:"",menu:"",httpMethod:"get",form:{},attachment:[],defaultForm:{},entries:this.employee,isLoading:!1,model:null,model2:null,search:null,disabled:!0,leaveLists:[]}},methods:{changeSelect:function(t){t&&(this.disabled=!1)},getDataEmployee:function(){var t=this;this.isLoading=!0,this.$axios.get("/api/employees",{params:{alias:this.alias}}).then((function(e){t.entries=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(){return t.isLoading=!1}))},changeData:function(){this.form.user_name=this.model.Name,this.form.id_card=this.model.Nik,this.form.occupation=this.model.JobPosition,this.form.company=this.model.Company,this.form.address=this.model.AlamatKTP,this.form.work_location=this.model.WorkLocation,this.$emit("leaveList",this.form.id_card)},changeDataLeave:function(){this.form.leave_from_to=this.model2.date_from_to,this.form.reference_number=this.model2.DocumentReferenceNumber},setLeaveList:function(data){this.leaveLists=data},setForm:function(form,t,e){var n=this;if(this.httpMethod=t,this.form=Object.assign({},form),this.disabled="patch"===t,"post"===t){var r=new Date,dd=String(r.getDate()).padStart(2,"0"),o=String(r.getMonth()+1).padStart(2,"0"),l=r.getFullYear();r=l+"-"+o+"-"+dd,this.form.paper_date=r,this.form.for_self=e}else this.$emit("leaveList",this.form.id_card),setTimeout((function(){n.form=Object.assign({},form),n.form.for_self=e}),300)},close:function(){this.$emit("close")},save:function(){this.$emit("save",{form:this.form,defaultForm:this.defaultForm})}}}),k=n(62),component=Object(k.a)(x,(function(){var t=this,e=t._self._c;return e(o.a,[e(l.d,[e("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.formTitle)}}),t._v(" "),e(_.a),t._v(" "),e(r.a,{attrs:{icon:"",dark:"",color:"red"},on:{click:t.close}},[e(m.a,[t._v("mdi-close")])],1)],1),t._v(" "),e(l.c,[e(f.a,[e(h.a,{attrs:{wrap:""}},[e(c.a,{staticClass:"d-flex",attrs:{md12:""}},[e(h.a,{attrs:{wrap:""}},[e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{xs12:""}},[e(y.a,{attrs:{label:"Nama",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.user_name,callback:function(e){t.$set(t.form,"user_name",e)},expression:"form.user_name"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"NIK",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.id_card,callback:function(e){t.$set(t.form,"id_card",e)},expression:"form.id_card"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"Pekerjaan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.occupation,callback:function(e){t.$set(t.form,"occupation",e)},expression:"form.occupation"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"Perusahaan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"Alamat Lengkap",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"Keperluan Meninggalkan Kawasan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(v.a,{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(y.a,t._g(t._b({attrs:{label:"Jadwal Keluar Kawasan","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.date_out,callback:function(e){t.$set(t.form,"date_out",e)},expression:"form.date_out"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),e(d.a,{attrs:{readonly:t.disabled,"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.date_out,callback:function(e){t.$set(t.form,"date_out",e)},expression:"form.date_out"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"Tujuan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.destination,callback:function(e){t.$set(t.form,"destination",e)},expression:"form.destination"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(v.a,{ref:"menu1",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(y.a,t._g(t._b({attrs:{label:"Jadwal Masuk Kawasan","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.date_in,callback:function(e){t.$set(t.form,"date_in",e)},expression:"form.date_in"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),e(d.a,{attrs:{readonly:t.disabled,"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.form.date_in,callback:function(e){t.$set(t.form,"date_in",e)},expression:"form.date_in"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm6:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"Transportasi",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.transportation,callback:function(e){t.$set(t.form,"transportation",e)},expression:"form.transportation"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm6:"",xs12:""}},[e(y.a,{attrs:{disabled:t.disabled,label:"Jalur",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.route,callback:function(e){t.$set(t.form,"route",e)},expression:"form.route"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(v.a,{ref:"menu2",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(y.a,t._g(t._b({attrs:{label:"Tanggal Surat","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),e(d.a,{attrs:{readonly:"","no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),e(l.a,[e(_.a),t._v(" "),e(r.a,{attrs:{color:"green darken-1",small:"",dark:"",disabled:t.disabled,loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);