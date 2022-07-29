(window.webpackJsonp=window.webpackJsonp||[]).push([[43,21],{593:function(t,e,o){"use strict";o(280);var r=o(281);e.a=Object(r.a)("layout")},595:function(t,e,o){"use strict";o(280);var r=o(281);e.a=Object(r.a)("flex")},600:function(t,e,o){"use strict";o.r(e);var r={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},n=o(81),l=o(89),c=o.n(l),d=o(106),m=o(123),h=o(54),f=o(579),v=o(279),x=o(570),_=o(130),y=o(278),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[o("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"pl-0 pr-0"},[o("v-container",{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VContainer:f.a,VDialog:v.a,VDivider:x.a,VIcon:_.a,VSpacer:y.a})},662:function(t,e,o){var content=o(663);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("94d6cdda",content,!0,{sourceMap:!1})},663:function(t,e,o){var r=o(19)(!1);r.push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none;cursor:default}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),t.exports=r},664:function(t,e,o){var content=o(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("65877b2f",content,!0,{sourceMap:!1})},665:function(t,e,o){var r=o(19)(!1);r.push([t.i,".v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),t.exports=r},717:function(t,e,o){"use strict";o(13),o(10),o(12),o(16),o(11),o(17);var r=o(100),n=o(3),l=(o(36),o(662),o(193)),c=o(59),d=o(67),m=o(108),h=o(28),f=o(112),v=o(309),x=o(24),_=o(308),y=o(0),w=o(6),$=o(74),C=["title"];function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(w.a)(m.a,h.a,v.a,Object(f.a)("radioGroup"),x.a);e.a=S.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return k(k({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return _.a.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return d.a.options.computed.computedId.call(this)},hasLabel:d.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return _.a.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return _.a.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(l.a,{on:{click:_.b},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(y.u)(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,C));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(k({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){return t("div",{staticClass:"v-radio",class:this.classes,on:Object($.c)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}},[this.genRadio(),this.genLabel()])}})},718:function(t,e,o){"use strict";o(13),o(10),o(12),o(16),o(11),o(17);var r=o(3),n=(o(26),o(388),o(664),o(67)),l=o(87),c=o(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(c.a)(l.a,n.a);e.a=h.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return m(m({},n.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},n.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=n.a.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var label=n.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:l.a.options.methods.onClick},render:function(t){var e=n.a.options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}})},923:function(t,e,o){"use strict";o.r(e);o(55),o(27),o(44);var r={name:"FormDocument",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},url:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{buttonKey:1,dialog:!1,submitLoad:!1,form:this.formData,selectedItem:[],documentType:[],itemCategory:[],itemDivision:[],itemApps:[],itemRole:[],itemBank:[],itemTax:[],items:[],itemWhs:[],itemGroupCode:[],itemCompany:[],itemSapCompany:[],itemSubRole:[],entries:[],itemWorkLocation:[],menu:"",statusProcessing:"insert",currentFile:void 0,options:{url:"https://sbo2.imip.co.id:3001/backendcore_test/api/attachment",timeout:9e9,thumbnailWidth:50,thumbnailHeight:50,addRemoveLinks:!0,acceptedFiles:"application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getLocalStorage("_token.local")},parallelUploads:1,maxFilesize:1e3,autoProcessQueue:!1,autoQueue:!1,file:""}}},mounted:function(){this.getItemGroupCode(),this.getApps(),this.getDataEmployee(),this.getWhs()},methods:{newData:function(t,e){this.$refs.dialogForm.openDialog(),this.documentType=t,this.statusProcessing="insert",this.form=Object.assign({},e),this.buttonKey++},getApps:function(){var t=this;this.$axios.get("/api/master/apps").then((function(e){t.itemApps=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})),this.$axios.get("/api/master/users/division").then((function(e){t.itemDivision=e.data.division})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},selectFile:function(t){this.currentFile=t},editItem:function(t,e){this.documentType=e,this.form=Object.assign({},t),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.buttonKey++},setRole:function(t){this.itemRole=t},setCompany:function(t){this.itemCompany=t},setSapCompany:function(t){this.itemSapCompany=t},setSubRole:function(t){this.itemSubRole=t},setWorkLocation:function(t){this.itemWorkLocation=t},returnData:function(data){"Banks"===data.type?this.itemBank=data.item:"Item Unit"===data.type&&(this.itemUnit=data.item)},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},getItemGroupCode:function(){var t=this;this.$axios.get("/api/master/item-group-code").then((function(e){t.itemGroupCode=e.data.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getWhs:function(){var t=this;this.$axios.get("/api/master/whs").then((function(e){t.itemWhs=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getDataEmployee:function(){var t=this;this.$axios.get("/api/master/employees",{params:{company:""}}).then((function(e){t.entries=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(){return t.isLoading=!1}))},save:function(){var t=this.statusProcessing,data={form:this.form};if("insert"===t){this.submitLoad=!0,this.store("post",this.url,data),this.submitLoad=!1}else"update"===t&&(this.store("put",this.url+"/"+this.form.id,data),this.submitLoad=!1)},store:function(t,e,data){var o=this,r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(t){o.buttonKey++,o.$swal({type:"error",title:"Error",text:t.response.data.message}),r.submitLoad=!1}))},sendingParams:function(t,e,o){o.append("source_id",this.form.temp_id),o.append("type","peruri")},handleError:function(t,e,o){this.$swal({type:"error",title:"Oops...",text:e.message})},reloadAttachment:function(t,e){var o=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row}),setTimeout((function(){o.getAttachment()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},deleteFile:function(t){var e=this,o=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(r){r.value&&e.$axios.delete("/api/attachment",{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),o.getAttachment()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},getAttachment:function(){var t=this;this.showLoadingAttachment=!0;var e=this;this.$axios.get("/api/attachment",{params:{type:"peruri",source_id:e.form.temp_id}}).then((function(t){e.items=t.data.data.rows,e.showLoadingAttachment=!1})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:e.response.message})}))}}},n=o(81),l=o(89),c=o.n(l),d=o(607),m=o(106),h=o(858),f=o(595),v=o(596),x=o(593),_=o(50),y=o(717),w=o(718),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("DialogForm",{ref:"dialogForm",attrs:{"max-width":"700px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-form",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-combobox",{attrs:{items:t.entries,"item-text":"Name","item-value":"Nik","hide-no-data":"","hide-selected":"",label:"Username",placeholder:"Username",outlined:"",dense:"",clearable:"","hide-details":"auto"},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(r.Name)}}),t._v(" "),o("v-list-item-subtitle",{domProps:{textContent:t._s(r.Nik)}})],1)]}}]),model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemRole,chips:"","deletable-chips":"","hide-no-data":"","small-chips":"",label:"Role",multiple:"",outlined:"",dense:"","item-value":"id","item-text":"name","hide-details":"auto"},model:{value:t.form.role,callback:function(e){t.$set(t.form,"role",e)},expression:"form.role"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemWorkLocation,chips:"","deletable-chips":"","small-chips":"","hide-no-data":"",label:"Work Location Access",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.work_location,callback:function(e){t.$set(t.form,"work_location",e)},expression:"form.work_location"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemApps,chips:"","deletable-chips":"","small-chips":"","hide-no-data":"",label:"Apps Access",multiple:"",outlined:"",dense:"","item-value":"id","item-text":"name","hide-details":"auto"},model:{value:t.form.apps,callback:function(e){t.$set(t.form,"apps",e)},expression:"form.apps"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemDivision,chips:"","deletable-chips":"","small-chips":"",label:"Division Access",multiple:"",outlined:"",dense:"","hide-details":"auto","item-value":"name","item-text":"name"},model:{value:t.form.division,callback:function(e){t.$set(t.form,"division",e)},expression:"form.division"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemWhs,chips:"","deletable-chips":"","small-chips":"",label:"Whs Access",multiple:"",outlined:"",dense:"","hide-details":"auto","item-value":"name","item-text":"name"},model:{value:t.form.whs,callback:function(e){t.$set(t.form,"whs",e)},expression:"form.whs"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemGroupCode,chips:"","deletable-chips":"","small-chips":"",label:"Item Group Access",multiple:"",outlined:"",dense:"","hide-details":"auto","item-value":"item_group_code","item-text":"item_group_name"},model:{value:t.form.item_group,callback:function(e){t.$set(t.form,"item_group",e)},expression:"form.item_group"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemSapCompany,chips:"","deletable-chips":"","hide-no-data":"","small-chips":"",label:"SAP DB","item-text":"db_code","item-value":"id",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.user_sap_company,callback:function(e){t.$set(t.form,"user_sap_company",e)},expression:"form.user_sap_company"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Is Active"},model:{value:t.form.active,callback:function(e){t.$set(t.form,"active",e)},expression:"form.active"}},[o("v-radio",{attrs:{label:"Yes",value:"Y"}}),t._v(" "),o("v-radio",{attrs:{label:"No",value:"N"}})],1)],1),t._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Sales User"},model:{value:t.form.is_sales_user,callback:function(e){t.$set(t.form,"is_sales_user",e)},expression:"form.is_sales_user"}},[o("v-radio",{attrs:{label:"Yes",value:"Y"}}),t._v(" "),o("v-radio",{attrs:{label:"No",value:"N"}})],1)],1),t._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"SAP User?"},model:{value:t.form.is_sap_user,callback:function(e){t.$set(t.form,"is_sap_user",e)},expression:"form.is_sap_user"}},[o("v-radio",{attrs:{label:"Yes",value:"Y"}}),t._v(" "),o("v-radio",{attrs:{label:"No",value:"N"}})],1)],1),t._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Admin SubWh"},model:{value:t.form.is_admin_subwh,callback:function(e){t.$set(t.form,"is_admin_subwh",e)},expression:"form.is_admin_subwh"}},[o("v-radio",{attrs:{label:"Yes",value:"Y"}}),t._v(" "),o("v-radio",{attrs:{label:"No",value:"N"}})],1)],1),t._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Superuser"},model:{value:t.form.is_superuser,callback:function(e){t.$set(t.form,"is_superuser",e)},expression:"form.is_superuser"}},[o("v-radio",{attrs:{label:"Yes",value:"Yes"}}),t._v(" "),o("v-radio",{attrs:{label:"No",value:"No"}})],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[o("v-btn",{key:t.buttonKey,attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{"~click":function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DialogForm:o(600).default}),c()(component,{VAutocomplete:d.a,VBtn:m.a,VCombobox:h.a,VFlex:f.a,VForm:v.a,VLayout:x.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VRadio:y.a,VRadioGroup:w.a})}}]);