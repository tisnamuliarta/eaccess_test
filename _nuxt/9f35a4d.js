(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{604:function(t,e,r){"use strict";r(286);var o=r(287);e.a=Object(o.a)("layout")},606:function(t,e,r){"use strict";r(286);var o=r(287);e.a=Object(o.a)("flex")},607:function(t,e,r){"use strict";var o=r(3),n=(r(47),r(67),r(288),r(12),r(11),r(56),r(101),r(13),r(10),r(16),r(17),r(6)),l=r(111),d=r(134);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},638:function(t,e,r){"use strict";r.r(e);r(47),r(67),r(112),r(28),r(46),r(600),r(37),r(56),r(11);var o={name:"FormIn",props:{formTitle:{type:String,default:""},alias:{type:String,default:""},itemYesNo:{type:Array,default:function(){return[]}},itemBilling:{type:Array,default:function(){return[]}},employee:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!1,submitLoad:!1,menu3:"",menu2:"",menu1:"",url:"",httpMethod:"get",form:{},attachment:"",defaultForm:{},entries:this.employee,isLoading:!1,model:null,model2:null,search:null,disabled:!0,leaveLists:[],dataVisitArea:this.$auth.$storage.getLocalStorage("visitArea"),dataFacilities:this.$auth.$storage.getLocalStorage("facilities")}},methods:{changeSelect:function(){"Karyawan"===this.form.for_self&&(this.disabled=!1),this.$gates.hasAnyRole("I-Tracc")&&(this.disabled=!1)},checkFacilities:function(){if(this.form.facilities)return!!this.form.facilities.includes("Other")},changeFieldDetail:function(){this.$refs.childDetails.insertRow(0,this.form)},changeDate:function(){Date.prototype.addDays=function(t){var e=new Date(this.valueOf());return e.setDate(e.getDate()+t),e};var t=new Date(this.form.date_in);this.form.date_out||(this.form.date_out=this.formatDate(t.addDays(2)))},formatDate:function(t){var e=new Date(t),r=""+(e.getMonth()+1),o=""+e.getDate(),n=e.getFullYear();return r.length<2&&(r="0"+r),o.length<2&&(o="0"+o),[n,r,o].join("-")},getDataEmployee:function(){var t=this;this.isLoading=!0,this.$axios.get("/api/master/employees",{params:{alias:this.alias}}).then((function(e){t.entries=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(){return t.isLoading=!1}))},changeData:function(){this.form.user_name=this.model.Name,this.form.id_card=this.model.Nik,this.form.occupation=this.model.JobPosition,this.form.company=this.model.Company,this.form.address=this.model.AlamatKTP,this.form.department=this.model.Department,this.form.company_email=this.model.OfficeEmailAddress,this.form.no_hp=this.model.MobilePhone,this.form.work_location=this.model.WorkLocation},changeDataLeave:function(){this.form.leave_from_to=this.model2.date_from_to,this.form.reference_number=this.model2.DocumentReferenceNumber},setLeaveList:function(data){this.leaveLists=data},setForm:function(form,t,e,r){var o=this;if(this.httpMethod=t,this.disabled=!0,this.form=Object.assign({},form),"post"===t){this.disabled=!1,this.form.for_self=e;var n=new Date,dd=String(n.getDate()).padStart(2,"0"),l=String(n.getMonth()+1).padStart(2,"0"),d=n.getFullYear();n=d+"-"+l+"-"+dd,this.form.paper_date=n,this.form.user_name=this.$auth.user.name,this.$refs.childDetails.setDataToDetails([]),this.$refs.childDetails.setDataToHttpMethod(t)}else this.$refs.childDetails.setDataToDetails(r),this.$refs.childDetails.setDataToHttpMethod(t),setTimeout((function(){o.form=Object.assign({},form),o.form.for_self=e}),300)},close:function(){this.$emit("close")},selectFile:function(){this.attachment=this.$refs.files.files},save:function(){var t=this,e={},details=this.$refs.childDetails.getDetailSourceData();details.forEach((function(r,o){t.$refs.childDetails.checkEmptyRow(o)||(e[o]=r)})),this.$emit("save",{form:this.form,defaultForm:this.defaultForm,details:details})}}},n=r(65),l=r(83),d=r.n(l),c=r(108),f=r(126),m=r(52),h=r(874),v=r(582),_=r(606),y=r(607),x=r(132),D=r(604),$=r(583),w=r(616),k=r(284),O=r(190),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.formTitle)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",dark:"",color:"red"},on:{click:t.close}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),r("v-card-text",[r("v-form",[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"pl-1 pr-1 pb-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("No")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"No",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.paper_no,callback:function(e){t.$set(t.form,"paper_no",e)},expression:"form.paper_no"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1 pb-1",attrs:{md3:"",xs12:""}},[r("label",[t._v("Company")]),t._v(" "),r("v-text-field",{attrs:{label:"Company",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.host_company,callback:function(e){t.$set(t.form,"host_company",e)},expression:"form.host_company"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1 pb-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("From Date")]),t._v(" "),r("v-text-field",{attrs:{label:"From Date","persistent-hint":"",solo:"",dense:"","hide-details":"auto",type:"date"},on:{change:t.changeDate},model:{value:t.form.date_in,callback:function(e){t.$set(t.form,"date_in",e)},expression:"form.date_in"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1 pb-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("To Date")]),t._v(" "),r("v-text-field",{attrs:{label:"To Date","persistent-hint":"",solo:"",dense:"","hide-details":"auto",type:"date"},model:{value:t.form.date_out,callback:function(e){t.$set(t.form,"date_out",e)},expression:"form.date_out"}})],1),t._v(" "),"post"===t.httpMethod?r("v-flex",{staticClass:"pl-1 pr-1 pb-1",attrs:{md3:"",xs12:""}},[r("label",[t._v("Plan Visit Area")]),t._v(" "),r("v-select",{attrs:{items:["Rumah Kayu (RK)","Mess Kendari (MK)"],readonly:t.disabled,label:"Plan Visit Area",solo:"",dense:"","persistent-hint":"","hide-details":"auto"},model:{value:t.form.plan_visit_area,callback:function(e){t.$set(t.form,"plan_visit_area",e)},expression:"form.plan_visit_area"}})],1):t._e(),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1 pb-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Total Guest")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Total Guest",solo:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.changeFieldDetail()},mouseup:function(e){return t.changeFieldDetail()}},model:{value:t.form.total_guest,callback:function(e){t.$set(t.form,"total_guest",e)},expression:"form.total_guest"}})],1),t._v(" "),r("v-flex",{staticClass:"pl-1 pr-1 pb-1",attrs:{md2:"",xs12:""}},[r("label",[t._v("Reservation Date")]),t._v(" "),r("v-menu",{ref:"menu3",attrs:{readonly:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Reservation Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}},"v-text-field",n,!1),o))]}}]),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[t._v(" "),r("v-date-picker",{attrs:{readonly:"","no-title":""},on:{input:function(e){t.menu3=!1}},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}})],1)],1),t._v(" "),r("div",{staticClass:"scroll-container-mini"},[r("LazyPaperBookingRequest",{ref:"childDetails"})],1),t._v(" "),r("v-flex",{staticClass:"pr-1 pb-1 mt-2",attrs:{md6:"",xs12:""}},[r("v-flex",{staticClass:"pr-1 pb-1 mt-2",attrs:{xs12:""}},[r("label",[t._v("Notes")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Notes",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.notes,callback:function(e){t.$set(t.form,"notes",e)},expression:"form.notes"}})],1),t._v(" "),r("v-flex",{staticClass:"pr-1 pb-1",attrs:{xs12:""}},[r("label",[t._v("Booking Remark")]),t._v(" "),r("v-text-field",{attrs:{readonly:t.disabled,label:"Booking Remark",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",disabled:t.disabled,loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDatePicker:h.a,VDivider:v.a,VFlex:_.a,VForm:y.a,VIcon:x.a,VLayout:D.a,VMenu:$.a,VSelect:w.a,VSpacer:k.a,VTextField:O.a})}}]);