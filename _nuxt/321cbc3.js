(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{605:function(e,t,n){"use strict";n(287);var r=n(288);t.a=Object(r.a)("layout")},607:function(e,t,n){"use strict";n(287);var r=n(288);t.a=Object(r.a)("flex")},622:function(e,t,n){var content=n(623);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("8aba24de",content,!0,{sourceMap:!1})},623:function(e,t,n){var r=n(19)(!1);r.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=r},649:function(e,t,n){"use strict";n(13),n(10),n(12),n(16),n(11),n(17);var r=n(3),o=(n(112),n(622),n(79)),l=n(6);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return e("li",[e(n,c(c({},data),{},{attrs:c(c({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=n(0),f=Object(v.k)("v-breadcrumbs__divider","li"),h=n(24);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(l.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),t?e.push(this.$scopedSlots.item({item:r})):e.push(this.$createElement(m,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},890:function(e,t,n){"use strict";n.r(t);n(34),n(56);var r={name:"ViewGoodIssue",data:function(){return{breadcrumb:[],dialogLoading:!1,options:{},loading:!1,DocEntry:null,docsdatadetail:[],editedItem:{DocEntry:"",DocNum:"",DocDate:"",Comments:"",DocumentStatus:"",CancelStatus:"",U_INV_TYPE:"",U_INV_TYPE_name:"",ItemCompany:""},status:"",isDisable:!1,message:""}},head:function(){return{title:"View Goods Issue"}},computed:{headers:function(){return[{text:"Line",align:"center",sortable:!1,value:"LineNum"},{text:"ItemCode",align:"center",sortable:!1,value:"ItemCode"},{text:"ItemDescription",align:"center",sortable:!1,value:"ItemDescription"},{text:"Quantity",value:"Quantity",sortable:!1},{text:"Warehouse",value:"WarehouseCode",sortable:!1},{text:"Price",value:"Price",sortable:!1},{text:"CostingCode",value:"CostingCode",sortable:!1},{text:"CostingCode",value:"CostingCode2",sortable:!1}]}},watch:{options:{handler:function(){this.initialize()},deep:!0},isDisable:function(){this.initialize()},status:function(){this.initialize()}},mounted:function(){this.initialize()},methods:{initialize:function(){var e=this;this.loading=!0;var t=this.$route.query.id,n=this.$route.query.db_name;this.breadcrumb=[{text:"Dashboard",disabled:!1,to:{path:"index"}},{text:"Good Issue",disabled:!1,to:{path:"inventory/viewgi"}},{text:"View Goods Issue",disabled:!0}],this.$axios.get("/api/cancelgoodissues/showDetail/".concat(t,"/").concat(n),{params:{DocEntry:this.DocEntry,companyItem:n}}).then((function(t){e.loading=!1,e.editedItem=t.data.header,e.status=t.data.header.status,"Yes"===t.data.header.status&&(e.isDisable=!0),e.docsdatadetail=t.data.detail,e.editedItem.ItemCompany=n})).catch((function(t){e.loading=!1}))},cancelGI:function(){var e=this;this.$swal.fire({title:"Are you sure to Cancel Good Issue "+this.editedItem.DocNum+"?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"OK!"}).then((function(t){if(t.isConfirmed){e.dialogLoading=!0;var n=e;e.$axios.post("/api/cancelgoodissues/cancelGoodissues",{editedItem:n.editedItem,docsdatadetail:e.docsdatadetail}).then((function(t){t.data.errors?(e.dialogLoading=!1,e.message=t.data.message,e.$swal(t.data.message),setTimeout((function(){return e.message=!1}),8e3)):(e.dialogLoading=!1,e.$swal(t.data.message),e.initialize())})).catch((function(t){e.dialogLoading=!1}))}else e.$swal("Cancelled","You Have been Canceled for Cancelling Good Issue","info"),e.loading=!1}))}}},o=n(65),l=n(83),d=n.n(l),c=n(649),m=n(108),v=n(126),f=n(52),h=n(876),_=n(583),x=n(607),y=n(132),C=n(605),I=n(285),O=n(190),w=n(73),D=n(110),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",[n("v-flex",{attrs:{sm12:""}},[n("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[n("v-toolbar-title",{staticClass:"hidden-xs-only"},[e._v("Goods Issue")]),e._v(" "),n("v-divider",{staticClass:"mx-2 hidden-xs-only",attrs:{inset:"",vertical:""}}),e._v(" "),n("v-breadcrumbs",{attrs:{items:e.breadcrumb,divider:"/"}}),e._v(" "),n("v-spacer",{staticClass:"hidden-xs-only"})],1),e._v(" "),n("div",{staticClass:"mt-2"},[n("v-card",{staticClass:"mx-auto"},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"d-flex",attrs:{md:""}},[n("v-flex",{staticClass:"pa-2",attrs:{md2:"",sm4:"",xs12:""}},[n("label",[e._v("Company")]),e._v(" "),n("v-text-field",{attrs:{label:"ItemCompany*",solo:"",dense:"","hide-details":"auto",disabled:""},model:{value:e.editedItem.ItemCompany,callback:function(t){e.$set(e.editedItem,"ItemCompany",t)},expression:"editedItem.ItemCompany"}})],1),e._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md2:"",sm4:"",xs12:""}},[n("label",[e._v("DocNum")]),e._v(" "),n("v-text-field",{attrs:{label:"DocNum*",solo:"",dense:"","hide-details":"auto",disabled:""},model:{value:e.editedItem.DocNum,callback:function(t){e.$set(e.editedItem,"DocNum",t)},expression:"editedItem.DocNum"}})],1),e._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md2:"",sm4:"",xs12:""}},[n("label",[e._v("DocDate")]),e._v(" "),n("v-text-field",{attrs:{label:"U_DocNum*",solo:"",dense:"","hide-details":"auto",disabled:""},model:{value:e.editedItem.DocDate,callback:function(t){e.$set(e.editedItem,"DocDate",t)},expression:"editedItem.DocDate"}})],1),e._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md2:"",sm4:"",xs12:""}},[n("label",[e._v("Comments")]),e._v(" "),n("v-text-field",{attrs:{label:"Comments*",solo:"",dense:"","hide-details":"auto",disabled:""},model:{value:e.editedItem.Comments,callback:function(t){e.$set(e.editedItem,"Comments",t)},expression:"editedItem.Comments"}})],1),e._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md2:"",sm4:"",xs12:""}},[n("label",[e._v("U_INV_TYPE")]),e._v(" "),n("v-text-field",{attrs:{label:"U_INV_TYPE_name*",solo:"",dense:"","hide-details":"auto",disabled:""},model:{value:e.editedItem.U_INV_TYPE_name,callback:function(t){e.$set(e.editedItem,"U_INV_TYPE_name",t)},expression:"editedItem.U_INV_TYPE_name"}})],1),e._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md2:"",sm4:"",xs12:""}},[n("label",[e._v("Cancel")]),e._v(" "),n("v-text-field",{attrs:{label:"Status*",solo:"",dense:"","hide-details":"auto",disabled:""},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1)],1)],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{"item-key":"LineNum",headers:e.headers,items:e.docsdatadetail,"items-per-page":10,options:e.options,loading:e.loading},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"body",fn:function(t){var r=t.items;return[n("tbody",e._l(r,(function(t){return n("tr",{key:t.LineNum,staticClass:"test-tr",style:{backgroundColor:t.Color}},[n("td",{staticStyle:{"text-align":"left","vertical-align":"middle"},attrs:{width:"3%"}},[e._v("\n                "+e._s(t.LineNum)+"\n              ")]),e._v(" "),n("td",{staticStyle:{"text-align":"left","vertical-align":"middle"},attrs:{width:"6%"}},[e._v("\n                "+e._s(t.ItemCode)+"\n              ")]),e._v(" "),n("td",{staticStyle:{"text-align":"left","vertical-align":"middle"},attrs:{width:"25%"}},[e._v("\n                "+e._s(t.ItemDescription)+"\n              ")]),e._v(" "),n("td",{staticStyle:{"text-align":"right","vertical-align":"middle"},attrs:{width:"6%"}},[e._v("\n                "+e._s(t.Quantity)+"\n              ")]),e._v(" "),n("td",{staticStyle:{"text-align":"left","vertical-align":"middle"},attrs:{width:"5%"}},[e._v("\n                "+e._s(t.WarehouseCode)+"\n              ")]),e._v(" "),n("td",{staticStyle:{"text-align":"right","vertical-align":"middle"},attrs:{width:"8%"}},[e._v("\n                "+e._s(t.Price)+"\n              ")]),e._v(" "),n("td",{staticStyle:{"text-align":"left","vertical-align":"middle"},attrs:{width:"17%"}},[e._v("\n                "+e._s(t.factor_name1)+"\n              ")]),e._v(" "),n("td",{staticStyle:{"text-align":"left","vertical-align":"middle"},attrs:{width:"17%"}},[e._v("\n                "+e._s(t.factor_name2)+"\n              ")])])})),0)]}}])})],1),e._v(" "),!1===e.isDisable?n("v-card-actions",{staticClass:"padding-15"},[n("v-btn",{staticClass:"white--text",attrs:{small:"",loading:e.loading,elevation:"2",color:"red"},on:{click:e.cancelGI}},[n("v-icon",{attrs:{left:""}},[e._v("\n            mdi-block-helper\n          ")]),e._v("\n          Cancel\n        ")],1)],1):e._e()],1)],1),e._v(" "),e.dialogLoading?n("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBreadcrumbs:c.a,VBtn:m.a,VCard:v.a,VCardActions:f.a,VDataTable:h.a,VDivider:_.a,VFlex:x.a,VIcon:y.a,VLayout:C.a,VSpacer:I.a,VTextField:O.a,VToolbar:w.a,VToolbarTitle:D.a})}}]);