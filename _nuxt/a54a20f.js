(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{424:function(e,t,o){var content=o(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("2065bca8",content,!0,{sourceMap:!1})},425:function(e,t,o){var n=o(12)(!1);n.push([e.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),e.exports=n},457:function(e,t,o){"use strict";var n=o(115),l=o(2),d=(o(24),o(59),o(55),o(46),o(54),o(114),o(9),o(5),o(7),o(14),o(8),o(15),o(424),o(694)),r=o(426),m=o(191),c=o(452),v=o(196),h=o(453),f=o(451),I=o(53),x=o(195),_=o(11),y=o(6),C=o(1);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S=Object(_.a)(r.a,m.a,c.a,v.a,h.a,f.a,I.a);t.a=S.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(l.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(l.a)(e,"v-dialog--active",this.isActive),Object(l.a)(e,"v-dialog--persistent",this.persistent),Object(l.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(l.a)(e,"v-dialog--scrollable",this.scrollable),Object(l.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.previousActiveElement=document.activeElement,e.$refs.content.focus(),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===C.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var o=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),l=Object(n.a)(o).find((function(e){return!e.hasAttribute("disabled")}));l&&l.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(d.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:k({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(C.h)(this.maxWidth),width:"auto"===this.width?void 0:Object(C.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},471:function(e,t,o){"use strict";o(193);var n=o(194);t.a=Object(n.a)("layout")},476:function(e,t,o){"use strict";o(193);var n=o(194);t.a=Object(n.a)("flex")},508:function(e,t,o){var content=o(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("8ca9b2be",content,!0,{sourceMap:!1})},532:function(e,t,o){"use strict";o(508)},533:function(e,t,o){var n=o(12)(!1);n.push([e.i,".card-title-style[data-v-09ed1f1d]{font-size:13px!important;margin-bottom:15px!important}",""]),e.exports=n},536:function(e,t,o){"use strict";o.r(t);var n={name:"SpinnerLoading",data:function(){return{SpinnerLoading:!0}},methods:{showLoadingSpinner:function(){this.SpinnerLoading=!0},hideLoadingSpinner:function(){this.SpinnerLoading=!1}}},l=(o(532),o(52)),d=o(70),r=o.n(d),m=o(199),c=o(430),v=o(415),h=o(457),f=o(403),I=o(476),x=o(471),_=o(180),y=o(413),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-dialog",{attrs:{"no-click-animation":"",persistent:"","max-width":"200px",transition:"dialog-bottom-transition"},model:{value:e.SpinnerLoading,callback:function(t){e.SpinnerLoading=t},expression:"SpinnerLoading"}},[o("v-card",[o("v-card-title",{staticClass:"headline grey lighten-2 card-title-style"},[e._v("\n      Processing, Please Wait!\n    ")]),e._v(" "),o("v-card-text",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-progress-circular",{attrs:{size:40,width:5,color:"blue",indeterminate:""}})],1)],1)],1),e._v(" "),o("v-divider"),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"primary",text:"",small:""},on:{click:function(t){e.SpinnerLoading=!1}}},[e._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,"09ed1f1d",null);t.default=component.exports;r()(component,{VBtn:m.a,VCard:c.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDialog:h.a,VDivider:f.a,VFlex:I.a,VLayout:x.a,VProgressCircular:_.a,VSpacer:y.a})},702:function(e,t,o){"use strict";o.r(t);o(7),o(151);var n={name:"Item",components:{SpinnerLoading:o(536).default},data:function(){return{ItemWarehouse:[],itemcodeFilterValue:"",itemgroupFilterValue:null,itemnameFilterValue:null,dialog:!1,dialogDelete:!1,totalData:0,allData:[],itemsdata:[],itemsdata_modal:[],editedIndex:-1,result:"",message:"",itemcodeapi:"",item_type:[{id:"RS",type_name:"Ready Stock"},{id:"NRS",type_name:"Not Ready Stock"}],dataFilter:[],counter:0,loading:!0,dialogLoading:!1,options:{},itemSearch:["Item No","Item Name"],search:"",loadNewBtn:!1,ItemCompany:[],companyItem:"",editedItem:{ItemCode:"",TypeName:"",GroupName:"",ItemName:"",ItemGroup:[],U_ItemType:"",ItemInventoryuom:"",ItemSalesuom_name:"",ItemPurchaseuom_name:"",Salesuom:1,ItemPurchaseuom:1,ItemWarehouseInfoCollection:[],DefaultWarehouse:[]},defaultItem:{ItemCode:"",TypeName:"",GroupName:"",ItemName:"",ItemGroup:[],U_ItemType:"",ItemInventoryuom:"",ItemSalesuom_name:"",ItemPurchaseuom_name:"",Salesuom:1,ItemPurchaseuom:1,ItemWarehouseInfoCollection:[],DefaultWarehouse:[]}}},head:function(){return{title:"Master Items"}},computed:{headers:function(){return[{text:"Item Code",align:"left",sortable:!1,value:"ItemCode",filter:this.itemcodeFilter},{text:"Item Name",value:"ItemName",filter:this.itemnameFilter,sortable:!1},{text:"Group Name",value:"GroupName",sortable:!1},{text:"Group Name Filter",value:"ItemGroup",filter:this.itemgroupFilter,align:" d-none",sortable:!1},{text:"Item Type",value:"TypeName",sortable:!1},{text:"Item Type ID",value:"U_ItemType",align:" d-none",sortable:!1},{text:"UOM",value:"ItemInventoryuom",sortable:!1},{text:"On Hand",value:"QuantityOnStock",sortable:!1},{text:"Reserved",value:"-",sortable:!1},{text:"Default WH",value:"def_wh",sortable:!1},{text:"Actions",value:"actions",sortable:!1,align:" d-none"}]},formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},headers_modal:function(){return[{text:"Warehouse Code",align:"left",sortable:!1},{text:"Locked",align:"center"},{text:"In Stock",value:"InStock"},{text:"Default Warehouse",align:"center"}]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},mounted:function(){this.getDataFromApi(),this.getUserRelationship()},methods:{getDataFromApi:function(){var e=this;this.loading=!0;var t=this;this.$axios.get("/api/items",{params:{options:t.options,itemcodeFilterValue:t.itemcodeFilterValue,itemnameFilterValue:t.itemnameFilterValue,itemgroupFilterValue:t.itemgroupFilterValue,WarehouseInfoCollection:this.ItemWarehouseInfoCollection,companyItem:this.companyItem}}).then((function(t){e.loading=!1,e.allData=t.data.all_items,e.itemsdata=t.data.items_data,e.totalData=t.data.total,e.dataFilter=t.data.filter,e.itemsdata_modal=t.data.items_data_modal,e.ItemWarehouse=t.data.items_warehouse,e.itemsdata.push({GroupID:null,GroupName:"ALL"})})).catch((function(t){e.loading=!1}))},getUserRelationship:function(){var e=this;this.$axios.get("/api/master/users/relationship").then((function(t){e.ItemCompany=t.data.items}))},getwhsRelationship:function(){var e=this;this.$axios.get("/api/master/users/getWarehousecmb").then((function(t){e.defaultItem.ItemWarehouseInfoCollection=t.data.result,e.editedItem.ItemWarehouseInfoCollection=t.data.result}))},editItem:function(e){this.editedIndex=this.allData.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.allData.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.itemsdata.splice(this.editedIndex,1),this.closeDelete()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},searchData:function(){this.getDataFromApi()},save:function(){var e=this;if(this.editedIndex>-1){this.dialogLoading=!0;this.$axios.patch("/api/items/update",{ItemCode:this.editedItem.ItemCode,TypeName:this.editedItem.TypeName,GroupName:this.editedItem.GroupName,ItemName:this.editedItem.ItemName,ItemGroup:this.editedItem.ItemGroup,U_ItemType:this.editedItem.U_ItemType,ItemInventoryuom:this.editedItem.ItemInventoryuom,ItemSalesuom_name:this.editedItem.ItemSalesuom_name,ItemPurchaseuom_name:this.editedItem.ItemPurchaseuom_name,Salesuom:this.editedItem.Salesuom,ItemPurchaseuom:this.editedItem.ItemPurchaseuom,ItemWarehouseInfoCollection:this.editedItem.ItemWarehouseInfoCollection,DefaultWarehouse:this.editedItem.DefaultWarehouse,companyItem:this.companyItem}).then((function(t){t.data.errors?e.$swal(t.data.message):(e.dialogLoading=!1,e.message=t.data.message,e.result=t.data.result,e.$swal(t.data.message),e.editedItem.GroupName=t.data.add_data.GroupName,e.editedItem.TypeName=t.data.add_data.TypeName,e.editedItem.def_wh=t.data.add_data.def_wh,Object.assign(e.allData[e.editedIndex],e.editedItem)),e.close()})).catch((function(t){e.dialogLoading=!1}))}else{this.dialogLoading=!0;this.$axios.post("/api/items/insert",{ItemCode:this.editedItem.ItemCode,TypeName:this.editedItem.TypeName,GroupName:this.editedItem.GroupName,ItemName:this.editedItem.ItemName,ItemGroup:this.editedItem.ItemGroup,U_ItemType:this.editedItem.U_ItemType,ItemInventoryuom:this.editedItem.ItemInventoryuom,ItemSalesuom_name:this.editedItem.ItemSalesuom_name,ItemPurchaseuom_name:this.editedItem.ItemPurchaseuom_name,Salesuom:this.editedItem.Salesuom,ItemPurchaseuom:this.editedItem.ItemPurchaseuom,ItemWarehouseInfoCollection:this.editedItem.ItemWarehouseInfoCollection,DefaultWarehouse:this.editedItem.DefaultWarehouse,companyItem:this.companyItem}).then((function(t){t.data.errors?(e.dialogLoading=!1,e.$swal(t.data.message)):(e.dialogLoading=!1,e.message=t.data.message,e.result=t.data.result,e.allData.push(e.editedItem),e.editedItem.ItemCode=t.data.add_data.itemcode,e.editedItem.GroupName=t.data.add_data.GroupName,e.editedItem.TypeName=t.data.add_data.TypeName,e.editedItem.def_wh=t.data.add_data.def_wh,e.defaultItem.ItemWarehouseInfoCollection=t.data.ItemWarehouseInfoCollection,e.editedItem.ItemWarehouseInfoCollection=t.data.ItemWarehouseInfoCollection,e.$swal(t.data.message),e.close())})).catch((function(t){e.dialogLoading=!1}))}}}},l=o(52),d=o(70),r=o.n(d),m=o(199),c=o(430),v=o(415),h=o(697),f=o(457),I=o(403),x=o(476),_=o(177),y=o(471),C=o(472),w=o(529),k=o(413),S=o(474),O=o(44),D=o(116),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-layout",[o("v-flex",{attrs:{sm12:""}},[o("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[o("v-toolbar-title",{staticClass:"hidden-xs-only"},[e._v("ITEM LIST")]),e._v(" "),o("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),e._v(" "),o("v-spacer",{staticClass:"hidden-xs-only"}),e._v(" "),o("v-flex",{staticClass:"d-flex"},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-2",attrs:{md3:"",sm4:"",xs12:""}},[o("v-select",{attrs:{dense:"",items:e.ItemCompany,"item-text":"items","item-value":"items",label:"Company*",required:"",solo:"","hide-details":"auto"},on:{change:function(t){return e.getDataFromApi()}},model:{value:e.companyItem,callback:function(t){e.companyItem=t},expression:"companyItem"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{md2:"",sm4:"",xs12:""}},[o("v-text-field",{attrs:{type:"text","hide-details":"auto",solo:"",dense:"",label:"Item Code"},model:{value:e.itemcodeFilterValue,callback:function(t){e.itemcodeFilterValue=t},expression:"itemcodeFilterValue"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{md4:"",sm4:"",xs12:""}},[o("v-text-field",{attrs:{type:"text","hide-details":"auto",solo:"",dense:"",label:"Item Name"},model:{value:e.itemnameFilterValue,callback:function(t){e.itemnameFilterValue=t},expression:"itemnameFilterValue"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{md3:"",sm4:"",xs12:""}},[o("v-select",{attrs:{items:e.itemsdata,"item-text":"GroupName","item-value":"GroupID",label:"Item Group","hide-details":"auto",solo:"",dense:""},model:{value:e.itemgroupFilterValue,callback:function(t){e.itemgroupFilterValue=t},expression:"itemgroupFilterValue"}})],1)],1)],1),e._v(" "),o("v-btn",{attrs:{loading:e.loading,icon:""},on:{click:e.searchData}},[o("v-icon",[e._v("mdi-refresh")])],1),e._v(" "),o("v-dialog",{attrs:{persistent:"","max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,l=t.attrs;return[o("v-card-actions",[o("v-btn",e._g(e._b({attrs:{icon:"",loading:e.loading,color:"green",dark:""},on:{click:e.searchData}},"v-btn",l,!1),n),[o("v-icon",[e._v("mdi-plus-circle")])],1)],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),o("v-card",[o("v-toolbar",{attrs:{flat:"",dense:"",color:"grey lighten-2"}},[o("v-spacer",[o("h2",[e._v(e._s(e.formTitle))])]),e._v(" "),o("v-btn",{attrs:{icon:"",dense:""},on:{click:function(t){e.dialog=!1}}},[o("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),o("v-card-text",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"d-flex",attrs:{md:""}},[o("v-flex",{staticClass:"pa-2",attrs:{xs10:"",sm6:"",md2:""}},[o("label",[e._v("Item Code")]),e._v(" "),o("v-text-field",{attrs:{label:"Item Code*",solo:"",dense:"","hide-details":"auto",disabled:""},model:{value:e.editedItem.ItemCode,callback:function(t){e.$set(e.editedItem,"ItemCode",t)},expression:"editedItem.ItemCode"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs10:"",sm6:"",md6:""}},[o("label",[e._v("Item Name")]),e._v(" "),o("v-text-field",{attrs:{label:"Item Name*",solo:"",dense:"","hide-details":"auto",required:""},model:{value:e.editedItem.ItemName,callback:function(t){e.$set(e.editedItem,"ItemName",t)},expression:"editedItem.ItemName"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs10:"",sm6:"",md4:""}},[o("label",[e._v("Item Group")]),e._v(" "),o("v-select",{attrs:{dense:"",items:e.itemsdata_modal,"item-text":"GroupName","item-value":"GroupID",label:"Item Group",required:"",solo:"","hide-details":"auto"},model:{value:e.editedItem.ItemGroup,callback:function(t){e.$set(e.editedItem,"ItemGroup",t)},expression:"editedItem.ItemGroup"}})],1)],1),e._v(" "),o("v-flex",{staticClass:"d-flex",attrs:{md:""}},[o("v-flex",{staticClass:"pa-2",attrs:{xs10:"",sm6:"",md4:""}},[o("label",[e._v("Warehouse")]),e._v(" "),o("v-select",{attrs:{dense:"",items:e.ItemWarehouse,"item-text":"WarehouseCode","item-value":"WarehouseCode",label:"Warehouse Default*","hide-details":"auto",required:"",solo:""},model:{value:e.editedItem.DefaultWarehouse,callback:function(t){e.$set(e.editedItem,"DefaultWarehouse",t)},expression:"editedItem.DefaultWarehouse"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs10:"",sm6:"",md4:""}},[o("label",[e._v("Item Type")]),e._v(" "),o("v-select",{attrs:{items:e.item_type,"item-text":"type_name","item-value":"id",label:"Item Type",required:"",solo:"",dense:"","hide-details":"auto"},model:{value:e.editedItem.U_ItemType,callback:function(t){e.$set(e.editedItem,"U_ItemType",t)},expression:"editedItem.U_ItemType"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs10:"",sm6:"",md4:""}},[o("label",[e._v("Inventory Uom")]),e._v(" "),o("v-text-field",{attrs:{label:"Inventory UoM*","hide-details":"auto",solo:"",dense:"",required:""},model:{value:e.editedItem.ItemInventoryuom,callback:function(t){e.$set(e.editedItem,"ItemInventoryuom",t)},expression:"editedItem.ItemInventoryuom"}})],1)],1),e._v(" "),o("v-flex",{staticClass:"d-flex",attrs:{md:""}},[o("v-flex",{staticClass:"pa-2",attrs:{xs10:"",sm6:"",md4:""}},[o("label",[e._v("Purchase Uom")]),e._v(" "),o("v-text-field",{attrs:{label:"Purchase Uom*","hide-details":"auto",solo:"",dense:""},model:{value:e.editedItem.ItemPurchaseuom_name,callback:function(t){e.$set(e.editedItem,"ItemPurchaseuom_name",t)},expression:"editedItem.ItemPurchaseuom_name"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs10:"",sm6:"",md2:""}},[o("label",[e._v("Purchase Unit")]),e._v(" "),o("v-text-field",{attrs:{label:"Purchase UoM*",type:"number","hide-details":"auto",solo:"",dense:"",required:""},model:{value:e.editedItem.ItemPurchaseuom,callback:function(t){e.$set(e.editedItem,"ItemPurchaseuom",t)},expression:"editedItem.ItemPurchaseuom"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs10:"",sm6:"",md4:""}},[o("label",[e._v("Sales Uom")]),e._v(" "),o("v-text-field",{attrs:{label:"Sales Uom*","hide-details":"auto",solo:"",dense:""},model:{value:e.editedItem.ItemSalesuom_name,callback:function(t){e.$set(e.editedItem,"ItemSalesuom_name",t)},expression:"editedItem.ItemSalesuom_name"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs10:"",sm6:"",md2:""}},[o("label",[e._v("Sales Unit")]),e._v(" "),o("v-text-field",{attrs:{label:"Sales UoM*",type:"number","hide-details":"auto",solo:"",dense:"",required:""},model:{value:e.editedItem.Salesuom,callback:function(t){e.$set(e.editedItem,"Salesuom",t)},expression:"editedItem.Salesuom"}})],1)],1)],1)],1),e._v(" "),e.editedIndex>-1?o("v-card",{staticClass:"mx-auto"},[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers_modal,items:e.editedItem.ItemWarehouseInfoCollection},scopedSlots:e._u([{key:"body",fn:function(t){var n=t.items;return[o("tbody",e._l(n,(function(t){return o("tr",{key:t,staticClass:"test-tr",style:{backgroundColor:t.Color}},[o("td",{attrs:{width:"20%"}},[e._v("\n                    "+e._s(t.WarehouseCode)+"\n                  ")]),e._v(" "),o("td",{staticStyle:{"text-align":"center","vertical-align":"middle"},attrs:{width:"10%"}},[o("v-simple-checkbox",{attrs:{"item-value":"item.Locked","hide-details":"auto",disabled:""},model:{value:t.Locked,callback:function(o){e.$set(t,"Locked",o)},expression:"item.Locked"}})],1),e._v(" "),o("td",{attrs:{width:"20%"}},[o("v-text-field",{attrs:{type:"number","hide-details":"auto",solo:"",dense:"",disabled:""},model:{value:t.InStock,callback:function(o){e.$set(t,"InStock",e._n(o))},expression:"item.InStock"}})],1)])})),0)]}}],null,!1,2339527377)})],1):e._e(),e._v(" "),o("v-card-actions",[o("v-btn",{staticClass:"ma-2",attrs:{small:"",color:"red",dark:"",loading:e.loading},on:{click:e.save}},[e._v("\n              Save\n              "),o("v-icon",{attrs:{dark:"",right:""}},[e._v("\n                mdi-checkbox-marked-circle\n              ")])],1),e._v(" "),o("v-spacer")],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"mt-2"},[o("v-flex",{staticClass:"d-flex",attrs:{md:""}},[o("v-flex",{attrs:{md12:"",xs12:""}},[o("v-card",{staticClass:"mx-auto"},[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.allData,"items-per-page":10,options:e.options,"server-items-length":e.totalData,loading:e.loading},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"body",fn:function(t){var n=t.items;return[o("tbody",e._l(n,(function(t){return o("tr",{key:t.ItemCode,staticClass:"test-tr",style:{backgroundColor:t.Color},on:{click:function(o){return e.editItem(t)}}},[o("td",{attrs:{width:"8%"}},[e._v("\n                    "+e._s(t.ItemCode)+"\n                  ")]),e._v(" "),o("td",{staticStyle:{"text-align":"left","vertical-align":"middle"},attrs:{width:"30%"}},[e._v("\n                    "+e._s(t.ItemName)+"\n                  ")]),e._v(" "),o("td",{attrs:{width:"15%"}},[e._v("\n                    "+e._s(t.GroupName)+"\n                  ")]),e._v(" "),o("td",{staticStyle:{"text-align":"left","vertical-align":"middle"},attrs:{width:"8%"}},[e._v("\n                    "+e._s(t.TypeName)+"\n                  ")]),e._v(" "),o("td",{staticStyle:{"text-align":"left","vertical-align":"middle"},attrs:{width:"5%"}},[e._v("\n                    "+e._s(t.ItemInventoryuom)+"\n                  ")]),e._v(" "),o("td",{staticStyle:{"text-align":"right","vertical-align":"middle"},attrs:{width:"5%"}},[e._v("\n                    "+e._s(t.QuantityOnStock)+"\n                  ")]),e._v(" "),o("td",{staticStyle:{"text-align":"center","vertical-align":"middle"},attrs:{width:"5%"}},[e._v("\n                    -\n                  ")]),e._v(" "),o("td",{staticStyle:{"text-align":"left","vertical-align":"middle"},attrs:{width:"7%"}},[e._v("\n                    "+e._s(t.def_wh)+"\n                  ")])])})),0)]}}])})],1)],1)],1)],1)],1),e._v(" "),e.dialogLoading?o("spinner-loading",{ref:"spinnerLoadingImport"}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;r()(component,{SpinnerLoading:o(536).default}),r()(component,{VBtn:m.a,VCard:c.a,VCardActions:v.a,VCardText:v.b,VDataTable:h.a,VDialog:f.a,VDivider:I.a,VFlex:x.a,VIcon:_.a,VLayout:y.a,VSelect:C.a,VSimpleCheckbox:w.a,VSpacer:k.a,VTextField:S.a,VToolbar:O.a,VToolbarTitle:D.a})}}]);