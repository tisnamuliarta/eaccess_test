(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{655:function(t,e,o){"use strict";o(303);var r=o(304);e.a=Object(r.a)("layout")},656:function(t,e,o){"use strict";o(303);var r=o(304);e.a=Object(r.a)("flex")},659:function(t,e,o){"use strict";var r=o(4),n=(o(48),o(64),o(305),o(13),o(6),o(12),o(53),o(100),o(14),o(11),o(16),o(17),o(8)),l=o(111),c=o(136);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},o={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?o.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(o.valid=e(input)))})):o.valid=e(input),o},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},714:function(t,e,o){"use strict";o.r(e);var r=o(108),n=o(125),l=o(52),c=o(415),d=o(413),m=o(953),f=o(302),v=o(634),h=o(656),_=o(659),y=o(134),D=o(655),C=o(635),R=o(414),k=o(301),N=o(196),$=o(69),x=o(629),w=(o(34),{name:"ViewResvDetails",data:function(){return{dialog:!1,buttonKey:1,buttonKey2:2,buttonKey3:3,count_attachment:0,menu1:"",menu:"",date:null,urlDelete:null,dialogLoading:!1,dialogConfirm:!1,submitLoad:!1,submitLoad2:!1,submitLoad3:!1,loading:!1,loadingPrint:!1,message:!1,success:!1,itemDivision:[],itemUserNIK:[],itemCompany:[],itemWhTo:[],itemUserWhs:[],userDivision:[],breadcrumb:[],itemReqType:["Normal","For Restock SubWH"],ItemType:["Ready Stock","Non Ready Stock","Asset","Service"],isDisable:!1,isApprovalDisable:!1,isDataSet:!1,Division:{},U_NIK:{},form:{Company:null,CompanyName:null,DocNum:null,UserName:null,U_NIK:this.$auth.user.username,RequesterName:this.$auth.user.name,Division:this.$auth.user.department,Department:null,DocDate:null,RequiredDate:null,WhsCode:null,RequestType:"Normal",ApprovalStatus:"-",U_DocEntry:null,LastApproved:null,Memo:null,Token:null,WhTo:null,UrgentReason:null,ItemType:null,ItemTypeCheck:null,Is_Urgent:"No"}}},methods:{openDialog:function(t){this.form.CompanyName&&this.form.WhsCode?this.$refs.itemsMaster.openDialog(t):this.$refs.snackbar.display(1e4,"Company and WhsCode Cannot Empty!")},openResvDetails:function(t){var e=this;this.dialog=!0,this.$axios.get("/api/reservation/document/"+t).then((function(t){e.getData(t.data.data.U_DocEntry,"update")})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})}))},openDialogLastResv:function(data){this.form.CompanyName&&this.form.WhsCode&&this.form.DocDate?this.$refs.lastResv.openDialog(data.row,data.itemCode,data.reqDate,data.whsCode,data.itemName):this.$refs.snackbar.display(1e4,"Company and WhsCode Cannot Empty!")},refreshData:function(){this.getData()},openAttachmentDetails:function(t){this.$refs.attachment.openAttachment(t.lineEntry,"reservation",t.row)},closeDialog:function(){this.$refs.itemsMaster.closeDialog()},getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e||this.$route.query.id,n=o||this.$route.query.status,l=void 0!==this.$route.query.entry?this.$route.query.entry:0;this.isApprovalDisable="add"===this.$route.query.status,"update"===n?(this.dialogLoading=!0,this.$axios.get("/api/reservation/master/".concat(r),{params:{entry:l}}).then((function(e){t.count_attachment=e.data.count_attachment,void 0!==e.data.header&&(t.form=Object.assign({},e.data.header),t.Division=Object.assign({},e.data.division),t.U_NIK=Object.assign({},e.data.user_nik),"-"!==t.form.ApprovalStatus&&"N"!==t.form.ApprovalStatus&&(t.isDisable=!0,t.isApprovalDisable=!0),parseInt(e.data.header.CreatedBy)!==parseInt(t.$auth.user.username)&&(t.isDisable=!0,t.isApprovalDisable=!0),"Reject"===e.data.header.AppStatus&&(t.isDisable=!0,t.isApprovalDisable=!0)),void 0!==e.data.rows&&t.$refs.childDetails.setDataToDetails(e.data.rows),t.dialogLoading=!1,t.$refs.snackbar.display(6e3,"Data loaded...")})).catch((function(e){t.dialogLoading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))):this.$axios.get("/api/reservation/fetch-docnum").then((function(e){t.form.DocNum=e.data.DocNum,t.form.Token=e.data.token,t.$refs.childDetails.updateTableSettings()}))}}}),O=w,S=o(62),component=Object(S.a)(O,(function(){var t=this,e=t._self._c;return e(f.a,{attrs:{persistent:"","max-width":"1200px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n.a,[e(l.d,[e("span",{staticClass:"text-subtitle-2"},[t._v("Reservation Details")])]),t._v(" "),e(l.c,[e(D.a,[e(h.a,{attrs:{xs12:"",sm12:""}},[e(n.a,[e($.a,{staticClass:"toolbar-content",staticStyle:{height:"32px"},attrs:{flat:"",color:"grey lighten-2",dense:""}},[e(v.a,{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),e(k.a,{staticClass:"hidden-xs-only"}),t._v(" "),e(r.a,{attrs:{loading:t.loading,icon:""},on:{click:t.refreshData}},[e(y.a,[t._v("mdi-refresh")])],1)],1),t._v(" "),e(_.a,[e(D.a,{attrs:{wrap:""}},[e(h.a,{staticClass:"d-flex",attrs:{md12:""}},[e(D.a,{attrs:{wrap:""}},[e(h.a,{staticClass:"pa-2",attrs:{md7:"",sm12:""}},[e(R.a,{staticClass:"pt-1",attrs:{"no-gutters":""}},[e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Company")])]),t._v(" "),e(d.a,{staticClass:"pr-2",attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.CompanyName,callback:function(e){t.$set(t.form,"CompanyName",e)},expression:"form.CompanyName"}})],1),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Warehouse")])]),t._v(" "),e(d.a,{attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.WhsCode,callback:function(e){t.$set(t.form,"WhsCode",e)},expression:"form.WhsCode"}})],1)],1),t._v(" "),e(R.a,{staticClass:"pt-1",attrs:{"no-gutters":""}},[e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("GIR NO")])]),t._v(" "),e(d.a,{staticClass:"pr-2",attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_GIRNo,callback:function(e){t.$set(t.form,"SAP_GIRNo",e)},expression:"form.SAP_GIRNo"}})],1),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("PR No")])]),t._v(" "),e(d.a,{attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_PRNo,callback:function(e){t.$set(t.form,"SAP_PRNo",e)},expression:"form.SAP_PRNo"}})],1)],1),t._v(" "),e(R.a,{staticClass:"pt-1",attrs:{"no-gutters":""}},[e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("PO NO")])]),t._v(" "),e(d.a,{staticClass:"pr-2",attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.PONum,callback:function(e){t.$set(t.form,"PONum",e)},expression:"form.PONum"}})],1),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("GRPO No")])]),t._v(" "),e(d.a,{attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.GRPONum,callback:function(e){t.$set(t.form,"GRPONum",e)},expression:"form.GRPONum"}})],1)],1),t._v(" "),e(R.a,{staticClass:"pt-1",attrs:{"no-gutters":""}},[e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("GI NO")])]),t._v(" "),e(d.a,{staticClass:"pr-2",attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_GINo,callback:function(e){t.$set(t.form,"SAP_GINo",e)},expression:"form.SAP_GINo"}})],1),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Transfer No")])]),t._v(" "),e(d.a,{attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.SAP_TrfNo,callback:function(e){t.$set(t.form,"SAP_TrfNo",e)},expression:"form.SAP_TrfNo"}})],1)],1),t._v(" "),e(R.a,{staticClass:"pt-1",attrs:{"no-gutters":""}},[e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Requester")])]),t._v(" "),e(d.a,{staticClass:"pr-2",attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequesterName,callback:function(e){t.$set(t.form,"RequesterName",e)},expression:"form.RequesterName"}})],1),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Division")])]),t._v(" "),e(d.a,{attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",placeholder:"Division",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Division,callback:function(e){t.$set(t.form,"Division",e)},expression:"form.Division"}})],1)],1),t._v(" "),e(R.a,{staticClass:"pt-1",attrs:{"no-gutters":""}},[e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Request Type")])]),t._v(" "),e(d.a,{staticClass:"pr-2",attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequestType,callback:function(e){t.$set(t.form,"RequestType",e)},expression:"form.RequestType"}})],1),t._v(" "),"For Restock SubWH"===t.form.RequestType?e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Wh Transfer To")])]):t._e(),t._v(" "),"For Restock SubWH"===t.form.RequestType?e(d.a,{attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.WhTo,callback:function(e){t.$set(t.form,"WhTo",e)},expression:"form.WhTo"}})],1):t._e(),t._v(" "),e(d.a,{staticClass:"pt-2",attrs:{cols:"2"}},[e("label",[t._v("Is Urgent?")])]),t._v(" "),e(d.a,{attrs:{cols:"4"}},[e(c.a,{attrs:{value:"Yes",dense:"",readonly:""},model:{value:t.form.Is_Urgent,callback:function(e){t.$set(t.form,"Is_Urgent",e)},expression:"form.Is_Urgent"}})],1),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Notes")])]),t._v(" "),e(d.a,{attrs:{cols:"8"}},[e(N.a,{attrs:{placeholder:"Notes",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Memo,callback:function(e){t.$set(t.form,"Memo",e)},expression:"form.Memo"}})],1)],1),t._v(" "),"Yes"===t.form.Is_Urgent?e(R.a,{staticClass:"pt-1",attrs:{"no-gutters":""}},[e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Urgent Reason")])]),t._v(" "),e(d.a,{attrs:{cols:"10"}},[e(N.a,{attrs:{placeholder:"Urgent Reason",solo:"",dense:"","hide-details":"auto",readonly:""},model:{value:t.form.UrgentReason,callback:function(e){t.$set(t.form,"UrgentReason",e)},expression:"form.UrgentReason"}})],1)],1):t._e()],1),t._v(" "),e(h.a,{staticClass:"pa-2",attrs:{md5:"",sm12:""}},[e(R.a,{attrs:{"no-gutters":""}},[e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Item Type")])]),t._v(" "),e(d.a,{staticClass:"pr-2",attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.ItemType,callback:function(e){t.$set(t.form,"ItemType",e)},expression:"form.ItemType"}})],1),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("No")])]),t._v(" "),e(d.a,{attrs:{cols:"4"}},[e(N.a,{attrs:{readonly:"",placeholder:"NO",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.DocNum,callback:function(e){t.$set(t.form,"DocNum",e)},expression:"form.DocNum"}})],1)],1),t._v(" "),e(R.a,{staticClass:"pt-1",attrs:{"no-gutters":""}},[e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Request Date")])]),t._v(" "),e(d.a,{staticClass:"pr-2",attrs:{cols:"4"}},[e(C.a,{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px",readonly:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,n=o.attrs;return[e(N.a,t._g(t._b({attrs:{placeholder:"Request Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.DocDate,callback:function(e){t.$set(t.form,"DocDate",e)},expression:"form.DocDate"}},"v-text-field",n,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),e(m.a,{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.DocDate,callback:function(e){t.$set(t.form,"DocDate",e)},expression:"form.DocDate"}})],1)],1),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("label",[t._v("Required Date")])]),t._v(" "),e(d.a,{attrs:{cols:"4"}},[e(C.a,{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px",readonly:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,n=o.attrs;return[e(N.a,t._g(t._b({attrs:{placeholder:"Required Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequiredDate,callback:function(e){t.$set(t.form,"RequiredDate",e)},expression:"form.RequiredDate"}},"v-text-field",n,!1),r))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),e(m.a,{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.form.RequiredDate,callback:function(e){t.$set(t.form,"RequiredDate",e)},expression:"form.RequiredDate"}})],1)],1)],1),t._v(" "),e(R.a,{attrs:{"no-gutters":""}},[e(d.a,{attrs:{cols:"3"}},[e("label",[t._v("Approval Status")])]),t._v(" "),e(d.a,{staticClass:"pr-2",attrs:{cols:"3"}},[e("span",[t._v(": "+t._s(t.form.AppStatus))])]),t._v(" "),e(d.a,{attrs:{cols:"4"}},[e("label",[t._v("Approval Details")])]),t._v(" "),e(d.a,{staticClass:"pr-2",attrs:{cols:"2"}},[e(x.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,l=o.attrs;return[e(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),n),[e(y.a,{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.approvalStages.openApprovalStages(t.form)}}},[t._v("\n                                  mdi-format-line-weight\n                                ")])],1)]}}])},[t._v(" "),e("span",[t._v("Approval Details")])])],1)],1)],1)],1)],1),t._v(" "),e(h.a,{staticClass:"d-flex",attrs:{md12:""}},[e(D.a,{attrs:{wrap:""}})],1),t._v(" "),e("div",{staticClass:"scroll-container"},[e("LazyResvReservationDetails",{ref:"childDetails",attrs:{form:t.form,"is-data-set":t.isDataSet},on:{openDialog:t.openDialog,getData:t.getData,openDialogLastResv:t.openDialogLastResv,openAttachmentDetails:t.openAttachmentDetails,closeDialog:t.closeDialog}})],1)],1)],1)],1),t._v(" "),e(f.a,{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[e(n.a,[e(l.d,{staticClass:"headline"},[t._v("\n                Submit for approval?\n              ")]),t._v(" "),e(l.c,[t._v("\n                Are you sure you want to submit for approval?\n              ")]),t._v(" "),e(l.a,[e(k.a),t._v(" "),e(r.a,{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogConfirm=!1}}},[t._v("\n                  No\n                ")]),t._v(" "),e(r.a,{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad3},on:{click:function(e){return t.save("all",!0)}}},[t._v("\n                  Yes, Submit\n                ")])],1)],1)],1)],1),t._v(" "),e("LazyResvApprovalDetails",{ref:"approvalStages"}),t._v(" "),e("LazySnackbar",{ref:"snackbar"}),t._v(" "),e("LazyResvItemMasterData",{ref:"itemsMaster",attrs:{form:t.form}}),t._v(" "),e("LazyResvLastResv",{ref:"lastResv",attrs:{form:t.form}}),t._v(" "),t.dialogLoading?e("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),e("LazyAttachment",{ref:"attachment"})],1)],1),t._v(" "),e(l.a,[e(k.a),t._v(" "),e(r.a,{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);