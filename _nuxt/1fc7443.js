(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{604:function(t,e,o){"use strict";o(286);var n=o(287);e.a=Object(n.a)("layout")},606:function(t,e,o){"use strict";o(286);var n=o(287);e.a=Object(n.a)("flex")},655:function(t,e,o){var content=o(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("2949a978",content,!0,{sourceMap:!1})},656:function(t,e,o){var n=o(19)(!1);n.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=n},720:function(t,e,o){"use strict";o(13),o(10),o(12),o(16),o(11),o(17);var n=o(102),l=o(3),r=(o(26),o(655),o(132)),c=o(29),d=o(24),m=o(55),v=o(2).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=o(115),f=o(6),_=o(0),y=["aria-atomic","aria-label","aria-live","role","title"];function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}e.a=Object(f.a)(c.a,Object(h.b)(["left","bottom"]),d.a,m.a,v).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(_.i)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(_.u)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(r.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],o=[Object(_.u)(this)],l=this.$attrs,r=(l["aria-atomic"],l["aria-label"],l["aria-live"],l.role,l.title,Object(n.a)(l,y));return this.inline&&this.left?o.unshift(e):o.push(e),t("span",{staticClass:"v-badge",attrs:r,class:this.classes},o)}})},939:function(t,e,o){"use strict";o.r(e);o(37),o(112),o(56),o(11);var n={name:"ReserVationForm",data:function(){return{buttonKey:1,buttonKey2:2,buttonKey3:3,count_attachment:0,menu1:"",menu:"",dialog:!1,date:null,urlDelete:null,dialogLoading:!1,dialogConfirm:!1,submitLoad:!1,submitLoad2:!1,submitLoad3:!1,loading:!1,loadingPrint:!1,isReadOnly:!1,loadingPrint2:!1,message:!1,success:!1,itemDivision:[],itemUserNIK:[],itemCompany:[],itemWhTo:[],itemUserWhs:[],userDivision:[],breadcrumb:[],itemReqType:["Normal","Restock"],itemUsageFor:["Internal","External"],itemCategoryType:["General","Fuel","APD"],ItemType:["Ready Stock","Non Ready Stock","Asset","Service"],itemCustomer:[],itemVehicleNo:[],isDisable:!1,isApprovalDisable:!1,isDataSet:!1,Division:{},U_NIK:{},title:"Reservation Request",status:null,docId:null,form:{Company:null,CompanyName:null,DocNum:null,UserName:null,U_NIK:this.$auth.user.username,RequesterName:this.$auth.user.name,Division:this.$auth.user.department,Department:null,DocDate:null,RequiredDate:null,WhsCode:null,RequestType:null,ApprovalStatus:"-",U_DocEntry:null,LastApproved:null,Memo:null,Token:null,WhTo:null,UrgentReason:null,ItemType:null,ItemTypeCheck:null,Is_Urgent:"No",CategoryType:"General",UsageFor:"External",VehicleNo:null,Mileage:null,Customer:null,Replacement:null},defaultForm:{Company:null,CompanyName:null,DocNum:null,UserName:null,U_NIK:this.$auth.user.username,RequesterName:this.$auth.user.name,Division:this.$auth.user.department,Department:null,DocDate:null,RequiredDate:null,WhsCode:null,RequestType:null,ApprovalStatus:"-",U_DocEntry:null,LastApproved:null,Memo:null,Token:null,WhTo:null,UrgentReason:null,ItemType:null,ItemTypeCheck:null,Is_Urgent:"No",CategoryType:"General",UsageFor:"External",VehicleNo:null,Mileage:null,Customer:null,Replacement:null}}},head:function(){return{title:this.title}},computed:{btnTitle:function(){return this.status,"Save As Draft"}},created:function(){},mounted:function(){this.getDivision(),this.getUserRelationship(),this.ItemType=["Ready Stock","Non Ready Stock","Asset","Service"],"N"===this.$auth.user.is_admin_subwh?(this.itemReqType=["Normal"],this.form.RequestType="Normal"):(this.itemReqType=["Normal","Restock"],this.form.RequestType=null)},methods:{openForm:function(title,t,e){this.status=t,this.docId=e,this.dialog=!0,this.form=Object.assign({},this.defaultForm),this.getData(e,t),this.title=title},enableClickOnce:function(){this.buttonKey++},close:function(){this.dialog=!1,this.isDisable=!1,this.$router.push({path:"/reservation/request"}),this.title="Reservation Request",this.form=Object.assign({},this.defaultForm)},changeDate:function(){Date.prototype.addDays=function(t){var e=new Date(this.valueOf());return e.setDate(e.getDate()+t),e};var t=new Date(this.form.DocDate);this.form.RequiredDate=this.formatDate(t.addDays(7))},formatDate:function(t){var e=new Date(t),o=""+(e.getMonth()+1),n=""+e.getDate(),l=e.getFullYear();return o.length<2&&(o="0"+o),n.length<2&&(n="0"+n),[l,o,n].join("-")},getUserRelationship:function(){var t=this;localStorage.setItem("request_type",JSON.stringify(["NPB","SPB"])),this.$axios.get("/api/master/users/relationship",{params:{form:this.form}}).then((function(e){t.itemCompany=e.data.items,t.itemUserNIK=e.data.userNik,t.itemUserWhs=e.data.itemUserWhs,t.userDivision=e.data.userDivision}))},getDivision:function(){var t=this;this.$axios.get("/api/master/division").then((function(e){t.itemDivision=e.data.all_division,t.itemCustomer=e.data.customer,t.itemVehicleNo=e.data.vehicle,t.$auth.$storage.setState("vehicle",t.itemVehicleNo)}))},getWhsTo:function(){var t=this;this.$axios.get("/api/master/users/whsto",{params:{form:this.form}}).then((function(e){t.itemWhTo=e.data.itemWhTo}))},openDeleteRow:function(data){this.urlDelete=data.url,this.$refs.dialogDelete.openDialog(data.url,data.row)},showMessage:function(t){var e=this;this.$refs.snackbar.display(1e4,t),this.success=t,this.getData(),setTimeout((function(){return e.success=!1}),8e3)},openDialog:function(t){this.form.CompanyName&&this.form.WhsCode?this.$refs.itemsMaster.openDialog(t,this.form):this.$refs.snackbar.display(1e4,"Company and WhsCode Cannot Empty!")},openDialogAsset:function(t){this.$refs.assetsMaster.openDialog(t)},openDialogLastResv:function(data){this.form.CompanyName&&this.form.WhsCode&&this.form.DocDate?this.$refs.lastResv.openDialog(data.row,data.itemCode,data.reqDate,data.whsCode,data.itemName):this.$refs.snackbar.display(1e4,"Company and WhsCode Cannot Empty!")},closeDialog:function(){this.$refs.itemsMaster.closeDialog()},selectItems:function(data){this.$refs.childDetails.insertDataToDetails(data.row,data.selected)},selectAssets:function(data){this.$refs.childDetails.insertDataAssetToDetails(data.row,data.selected)},changeWhs:function(){this.$refs.childDetails.changeWhsDetails()},changeDivision:function(){var t=this.form.U_NIK,e=this;this.userDivision.forEach((function(o){o.U_NIK===t&&(o.Division,e.form.RequesterName=o.U_UserName,e.form.Division=o.Division)}))},fillCheckbox:function(){this.$refs.childDetails.fillCheckboxDetails(),"Restock"===this.form.RequestType?this.ItemType=["Ready Stock"]:"Sales"===this.form.RequestType?this.ItemType=["Ready Stock","Non Ready Stock"]:this.ItemType=["Ready Stock","Non Ready Stock","Asset","Service"]},changeUsageFor:function(){"Internal"===this.form.UsageFor?this.form.Customer=null:"External"===this.form.UsageFor&&(this.form.Customer="SULAWESI MINING INVESTMENT,PT (IDR)")},refreshData:function(){this.getData()},eventCountAttachment:function(data){"reservation"===data.type?this.$refs.childDetails.setCountAttachment(data.total,data.row):this.count_attachment=data.total},openAttachmentDetails:function(t){this.$refs.attachment.openAttachment(t.lineEntry,"reservation",t.row)},openAttachment:function(){this.$refs.attachment.openAttachment(this.docId,"reservation_header",0)},addLine:function(){this.form.CompanyName&&this.form.WhsCode&&this.form.RequestType&&this.form.DocDate&&this.form.ItemType?(this.$refs.childDetails.addLine(),this.$refs.childDetails.countDetailsRows()>1&&(this.isReadOnly=!0)):this.$refs.snackbar.display(1e4,"Company, Request Type, Request Date, Item Type and WhsCode Cannot Empty!")},checkCount:function(){this.$refs.childDetails.countDetailsRows()>1&&(this.isReadOnly=!0)},deleteAll:function(){var t=this.docId;if("update"===this.status){var e="/api/reservation/delete-all/"+t;this.$refs.dialogDelete.openDialog(e)}},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this,form=this.form,n={},l=this.status;o.submitLoad=!0;var details=o.$refs.childDetails.getAddData();details.forEach((function(t,e){o.$refs.childDetails.checkIfEmptyRow(e)||(n[e]=t)}));var data={form:form,details:n,type:t,status:l,Division:this.Division,U_NIK:this.U_NIK,approval:e};"add"===l?(this.store("post","/api/reservation/master",data,"insert",t),o.submitLoad=!1):"update"===l&&(this.store("put","/api/reservation/master/"+this.form.U_DocEntry,data,"update",t),o.submitLoad=!1),o.submitLoad=!1},store:function(t,e,data,o){var n=this,l=this;l.submitLoad=!0,l.isDisable=!0,this.dialogLoading=!0,this.$axios({method:t,url:e,data:data}).then((function(t){n.dialogConfirm=!1,n.$swal({type:"success",title:"Success!",text:t.data.message}),n.success=t.data.message,l.$refs.snackbar.display(1800,t.data.message),l.submitLoad=!1,l.isDisable=!1,setTimeout((function(){return n.success=!1}),8e3),n.dialogLoading=!1,n.enableClickOnce(),setTimeout((function(){l.getData(t.data.data.U_DocEntry,"update"),n.status="update",l.$emit("getDataFromApi")}),500),n.$router.push({path:"/reservation/request",query:{id:t.data.data.U_DocEntry,status:"update"}})})).catch((function(t){n.dialogLoading=!1,n.enableClickOnce(),l.submitLoad=!1,l.isDisable=!1,n.$swal({type:"error",title:"Error",text:t.response.data.message})}))},getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e||this.docId,l=o||this.status,r=void 0!==this.$route.query.entry?this.$route.query.entry:0;this.isApprovalDisable="add"===this.status,"update"===l?(this.dialogLoading=!0,this.$axios.get("/api/reservation/master/".concat(n),{params:{entry:r}}).then((function(e){t.count_attachment=e.data.count_attachment,void 0!==e.data.header&&(t.form=Object.assign({},e.data.header),t.Division=Object.assign({},e.data.division),t.U_NIK=Object.assign({},e.data.user_nik),"-"!==t.form.ApprovalStatus&&"N"!==t.form.ApprovalStatus&&(t.isDisable=!0,t.isApprovalDisable=!0),parseInt(e.data.header.CreatedBy)!==parseInt(t.$auth.user.username)&&(t.isDisable=!0,t.isApprovalDisable=!0),"Reject"===e.data.header.AppStatus&&(t.isDisable=!0,t.isApprovalDisable=!0)),t.title="Edit Reservation #"+e.data.header.DocNum,t.docId=e.data.header.U_DocEntry,t.enableClickOnce(),void 0!==e.data.rows&&setTimeout((function(){t.$refs.childDetails.setDataToDetails(e.data.rows)}),200),t.dialogLoading=!1,t.$refs.snackbar.display(6e3,"Data loaded...")})).catch((function(e){t.dialogLoading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))):this.$axios.get("/api/reservation/fetch-docnum").then((function(e){t.enableClickOnce(),t.form.DocNum=e.data.DocNum,t.form.Token=e.data.token,setTimeout((function(){t.$refs.childDetails.setDataToDetails([])}),200)}))},printDocument:function(t){var e=this;"all"===t?this.loadingPrint2=!0:this.loadingPrint=!0,this.$axios.get("/api/reservation/print",{params:{form:this.form,type:t}}).then((function(o){window.open(o.data.message,"_blank"),"all"===t?e.loadingPrint2=!1:e.loadingPrint=!1})).catch((function(o){"all"===t?e.loadingPrint2=!1:e.loadingPrint=!1,e.$swal({type:"error",title:"Error",text:o.response.data.message})}))}}},l=n,r=o(65),c=o(83),d=o.n(c),m=o(620),v=o(720),h=o(108),f=o(126),_=o(52),y=o(393),D=o(390),C=o(873),x=o(874),R=o(285),k=o(582),T=o(606),w=o(607),$=o(132),N=o(604),S=o(33),U=o(583),I=o(392),O=o(284),A=o(190),L=o(110),V=o(577),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",persistent:"",transition:"dialog-top-transition",scrollable:"","no-click-animation":"","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{attrs:{tile:"",height:"100vh",width:"100vw"}},[o("v-card-title",[o("v-toolbar-title",[o("v-btn",{ref:"icon",attrs:{icon:""}},[o("v-icon",[t._v("mdi-progress-pencil")])],1),t._v(" "),o("span",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",dark:"",color:"red"},on:{click:t.close}},[o("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"pl-1 pr-1"},[o("v-form",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{staticClass:"pa-2",attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-0",attrs:{md6:"",sm12:""}},[o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Company")])]),t._v(" "),o("v-col",{staticClass:"pr-md-2 pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-autocomplete",{attrs:{items:t.itemCompany,placeholder:"Company",readonly:t.isReadOnly,solo:"",dense:"","hide-details":"auto"},model:{value:t.form.CompanyName,callback:function(e){t.$set(t.form,"CompanyName",e)},expression:"form.CompanyName"}})],1),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Warehouse")])]),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-autocomplete",{attrs:{items:t.itemUserWhs,placeholder:"Warehouse","item-text":"name","item-value":"code",readonly:t.isReadOnly,solo:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.changeWhs()}},model:{value:t.form.WhsCode,callback:function(e){t.$set(t.form,"WhsCode",e)},expression:"form.WhsCode"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Requester")])]),t._v(" "),o("v-col",{staticClass:"pr-md-2 pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-autocomplete",{attrs:{items:t.itemUserNIK,filled:"",placeholder:"Requester","item-text":"U_UserName","item-value":"U_NIK",readonly:t.isReadOnly,dense:"",solo:"","hide-details":"auto"},on:{change:function(e){return t.changeDivision()}},scopedSlots:t._u([{key:"item",fn:function(data){return["object"!=typeof data.item?[o("v-list-item-content",{domProps:{textContent:t._s(data.item)}})]:[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(data.item.U_NIK)}}),t._v(" "),o("v-list-item-subtitle",{domProps:{textContent:t._s(data.item.U_UserName)}})],1)]]}}]),model:{value:t.form.U_NIK,callback:function(e){t.$set(t.form,"U_NIK",e)},expression:"form.U_NIK"}})],1),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Division")])]),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-autocomplete",{attrs:{items:t.itemDivision,filled:"",placeholder:"Division",readonly:t.isReadOnly,dense:"",solo:"","hide-details":"auto"},model:{value:t.form.Division,callback:function(e){t.$set(t.form,"Division",e)},expression:"form.Division"}})],1)],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Request Type")])]),t._v(" "),o("v-col",{staticClass:"pr-md-2 pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-autocomplete",{attrs:{items:t.itemReqType,readonly:t.isReadOnly,placeholder:"Request Type",solo:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.fillCheckbox()}},model:{value:t.form.RequestType,callback:function(e){t.$set(t.form,"RequestType",e)},expression:"form.RequestType"}})],1),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Category Type")])]),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-autocomplete",{attrs:{items:t.itemCategoryType,readonly:t.isReadOnly,placeholder:"Category Type",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.CategoryType,callback:function(e){t.$set(t.form,"CategoryType",e)},expression:"form.CategoryType"}})],1),t._v(" "),"Restock wh"===t.form.RequestType?o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Wh Transfer To")])]):t._e(),t._v(" "),"Restock wh"===t.form.RequestType?o("v-col",{staticClass:"pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-autocomplete",{attrs:{items:t.itemUserWhs,readonly:t.isReadOnly,placeholder:"Wh Transfer To","item-text":"name","item-value":"code",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.WhTo,callback:function(e){t.$set(t.form,"WhTo",e)},expression:"form.WhTo"}})],1):t._e()],1),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},["Sales"===t.form.RequestType?o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Usage For")])]):t._e(),t._v(" "),"Sales"===t.form.RequestType?o("v-col",{staticClass:"pr-md-2 pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-autocomplete",{attrs:{items:t.itemUsageFor,readonly:t.isReadOnly,placeholder:"Usage For",solo:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.changeUsageFor()}},model:{value:t.form.UsageFor,callback:function(e){t.$set(t.form,"UsageFor",e)},expression:"form.UsageFor"}})],1):t._e(),t._v(" "),"External"===t.form.UsageFor&&"Sales"===t.form.RequestType?o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Customer")])]):t._e(),t._v(" "),"External"===t.form.UsageFor&&"Sales"===t.form.RequestType?o("v-col",{staticClass:"pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-autocomplete",{attrs:{items:t.itemCustomer,readonly:t.isReadOnly,placeholder:"Customer","item-text":"CardName","item-value":"CardName",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Customer,callback:function(e){t.$set(t.form,"Customer",e)},expression:"form.Customer"}})],1):t._e()],1),t._v(" "),"Non Ready Stock"===t.form.ItemType?o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Is Urgent?")])]),t._v(" "),o("v-col",{attrs:{cols:"8"}},[o("v-checkbox",{attrs:{value:"Yes",dense:"","hide-details":"auto"},model:{value:t.form.Is_Urgent,callback:function(e){t.$set(t.form,"Is_Urgent",e)},expression:"form.Is_Urgent"}})],1)],1):t._e(),t._v(" "),"Yes"===t.form.Is_Urgent?o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Urgent Reason")])]),t._v(" "),o("v-col",{attrs:{cols:"8",sm:"9",md:"10",lg:"10",xl:"10"}},[o("v-text-field",{attrs:{placeholder:"Urgent Reason",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.UrgentReason,callback:function(e){t.$set(t.form,"UrgentReason",e)},expression:"form.UrgentReason"}})],1)],1):t._e()],1),t._v(" "),o("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md1:"",sm12:""}}),t._v(" "),o("v-flex",{staticClass:"pa-0",attrs:{md5:"",sm12:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Item Type")])]),t._v(" "),o("v-col",{staticClass:"pr-md-2 pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-autocomplete",{attrs:{items:t.ItemType,placeholder:"Item Type",solo:"",dense:"","hide-details":"auto",readonly:"update"===t.status||t.isReadOnly},model:{value:t.form.ItemType,callback:function(e){t.$set(t.form,"ItemType",e)},expression:"form.ItemType"}})],1),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("No")])]),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-text-field",{attrs:{readonly:"",placeholder:"NO",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.DocNum,callback:function(e){t.$set(t.form,"DocNum",e)},expression:"form.DocNum"}})],1)],1),t._v(" "),"Fuel"===t.form.CategoryType?o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Vehicle No")])]),t._v(" "),o("v-col",{staticClass:"pr-md-2 pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-combobox",{attrs:{items:t.itemVehicleNo,placeholder:"Vehicle No",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.VehicleNo,callback:function(e){t.$set(t.form,"VehicleNo",e)},expression:"form.VehicleNo"}})],1),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Mileage")])]),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-text-field",{attrs:{placeholder:"Mileage",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Mileage,callback:function(e){t.$set(t.form,"Mileage",e)},expression:"form.Mileage"}})],1)],1):t._e(),t._v(" "),"APD"===t.form.CategoryType?o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Replacement")])]),t._v(" "),o("v-col",{staticClass:"pr-md-2 pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-combobox",{attrs:{items:["Normal","Loss","Damage"],placeholder:"Replacement",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Replacement,callback:function(e){t.$set(t.form,"Replacement",e)},expression:"form.Replacement"}})],1)],1):t._e(),t._v(" "),o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Request Date")])]),t._v(" "),o("v-col",{staticClass:"pr-md-2 pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{placeholder:"Request Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.DocDate,callback:function(e){t.$set(t.form,"DocDate",e)},expression:"form.DocDate"}},"v-text-field",l,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{change:t.changeDate,input:function(e){t.menu=!1}},model:{value:t.form.DocDate,callback:function(e){t.$set(t.form,"DocDate",e)},expression:"form.DocDate"}})],1)],1),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Required Date")])]),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{placeholder:"Required Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.RequiredDate,callback:function(e){t.$set(t.form,"RequiredDate",e)},expression:"form.RequiredDate"}},"v-text-field",l,!1),n))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.form.RequiredDate,callback:function(e){t.$set(t.form,"RequiredDate",e)},expression:"form.RequiredDate"}})],1)],1)],1),t._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Approval Status")])]),t._v(" "),o("v-col",{staticClass:"pr-2 pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("span",[t._v(": "+t._s(t.form.AppStatus))])]),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"4",sm:"3",md:"2"}},[o("label",[t._v("Last Approved By")])]),t._v(" "),o("v-col",{staticClass:"pt-1",attrs:{cols:"8",sm:"9",md:"4",lg:"4"}},[o("span",[t._v(": "+t._s(t.form.LastApproved))])])],1)],1)],1)],1),t._v(" "),o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{attrs:{wrap:""}})],1),t._v(" "),o("div",{staticClass:"scroll-container-dialog"},[o("LazyResvReservationDetails",{ref:"childDetails",attrs:{form:t.form,"is-data-set":t.isDataSet},on:{openDialog:t.openDialog,openDialogAsset:t.openDialogAsset,getData:t.getData,openDialogLastResv:t.openDialogLastResv,openDeleteRow:t.openDeleteRow,openAttachmentDetails:t.openAttachmentDetails,closeDialog:t.closeDialog,checkCount:t.checkCount}})],1),t._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{md10:""}},[o("v-row",{staticClass:"pt-1",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"1"}},[o("label",[t._v("Notes")])]),t._v(" "),o("v-col",{attrs:{cols:"11"}},[o("v-text-field",{attrs:{placeholder:"Notes",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.Memo,callback:function(e){t.$set(t.form,"Memo",e)},expression:"form.Memo"}})],1)],1)],1)],1)],1)],1),t._v(" "),o("v-card-actions",[o("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"white--text",attrs:{small:"",disabled:t.isDisable,color:"green darken-1"},on:{click:function(e){return t.addLine()}}},"v-btn",l,!1),n),[t._v("\n            Add Line\n          ")])]}}])},[t._v(" "),o("span",[t._v("Add Line")])]),t._v(" "),o("v-tooltip",{staticClass:"ml-2",staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("v-badge",{attrs:{disabled:"add"===t.status,content:t.count_attachment,color:"green",value:t.count_attachment,overlap:""}},[o("v-btn",t._g(t._b({staticClass:"white&#45;&#45;text ml-2",attrs:{small:"",dark:"",color:"orange darken-1"},on:{click:function(e){return t.openAttachment()}}},"v-btn",l,!1),n),[o("v-icon",{attrs:{small:""}},[t._v(" mdi-attachment ")])],1)],1)]}}])},[t._v(" "),o("span",[t._v("Add Attachment")])]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"white--text",attrs:{small:"",loading:t.submitLoad,elevation:"2",disabled:t.isDisable,color:"blue"},on:{click:function(e){return t.save("all",!1)}}},[o("v-icon",{attrs:{left:""}},[t._v(" mdi-file-document ")]),t._v("\n        "+t._s("add"===t.status?"Save As Draft":"Update Draft")+"\n      ")],1),t._v(" "),"update"===t.status?o("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return["update"===t.status?o("v-btn",t._g(t._b({staticClass:"white--text ml-1",attrs:{small:"",elevation:"3",disabled:t.isDisable,color:"success"},on:{click:function(e){t.dialogConfirm=!0}}},"v-btn",l,!1),n),[o("v-icon",{attrs:{small:""}},[t._v(" mdi-check ")]),t._v("\n            Submit\n          ")],1):t._e()]}}],null,!1,1132625135)},[t._v(" "),o("span",[t._v("Submit For Approval")])]):t._e(),t._v(" "),o("v-tooltip",{staticStyle:{"margin-top":"4px","margin-left":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"white--text ml-1",attrs:{icon:"",loading:t.submitLoad3,elevation:"0",disabled:t.isDisable,color:"red darken-1"},on:{click:function(e){return t.deleteAll()}}},"v-btn",l,!1),n),[o("v-icon",{attrs:{small:""}},[t._v(" mdi-delete ")])],1)]}}])},[t._v(" "),o("span",[t._v("Delete All")])])],1)],1),t._v(" "),o("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" Submit for approval? ")]),t._v(" "),o("v-card-text",[t._v("\n        Are you sure you want to submit for approval?\n      ")]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogConfirm=!1}}},[t._v("\n          No\n        ")]),t._v(" "),o("v-btn",{key:t.buttonKey,attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad3},on:{"~click":function(e){return t.save("all",!0)}}},[t._v("\n          Yes, Submit\n        ")])],1)],1)],1),t._v(" "),o("LazySnackbar",{ref:"snackbar"}),t._v(" "),o("LazyResvItemMasterData",{ref:"itemsMaster",attrs:{form:t.form},on:{selectItems:t.selectItems}}),t._v(" "),o("LazyResvAssetMasterData",{ref:"assetsMaster",attrs:{form:t.form},on:{selectAssets:t.selectAssets}}),t._v(" "),o("LazyResvLastResv",{ref:"lastResv",attrs:{form:t.form}}),t._v(" "),o("LazyResvDialogDelete",{ref:"dialogDelete",attrs:{url:t.urlDelete},on:{showMessage:t.showMessage}}),t._v(" "),t.dialogLoading?o("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),o("LazyAttachment",{ref:"attachment",on:{eventCountAttachment:t.eventCountAttachment}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAutocomplete:m.a,VBadge:v.a,VBtn:h.a,VCard:f.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VCheckbox:y.a,VCol:D.a,VCombobox:C.a,VDatePicker:x.a,VDialog:R.a,VDivider:k.a,VFlex:T.a,VForm:w.a,VIcon:$.a,VLayout:N.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VMenu:U.a,VRow:I.a,VSpacer:O.a,VTextField:A.a,VToolbarTitle:L.a,VTooltip:V.a})}}]);