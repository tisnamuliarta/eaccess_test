(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{593:function(e,t,o){"use strict";o(280);var n=o(281);t.a=Object(n.a)("layout")},595:function(e,t,o){"use strict";o(280);var n=o(281);t.a=Object(n.a)("flex")},625:function(e,t){function o(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id=625},887:function(e,t,o){"use strict";o.r(t);o(12),o(27),o(37),o(44),o(285),o(55),o(626);var n=o(624),r=o(703),l=r.a.helper.debounce((function(e,t){var o=window.report.$refs.preview.hotInstance.getPlugin("filters");o.removeConditions(e),o.addCondition(e,"contains",[t.target.value]),o.filter()}),400),d=function(e){var div=document.createElement("div"),input=document.createElement("input");return div.className="filterHeader",function(input,e){input.addEventListener("keydown",(function(t){l(e,t)}))}(input,e),div.appendChild(input),div},c=function(e,t){-1===t.row&&"INPUT"===e.target.nodeName&&(e.stopImmediatePropagation(),this.deselectCell())},m={name:"Report",components:{HotTable:n.a},detailsRoot:"detailsRoot",data:function(){return{detailsRoot:"detailsRoot",form:{dateFrom:null,dateTo:null,itemType:null,requestType:null},itemType:[],requestType:[],loading:!1,showLoading:!1,loading1:!1,dialogPrevDoc:!1,KBType:null,prevTitle:"",params:{},itmTenant:[],itmTransName:[],itmTipeBc:[],editedIndex:-1,menu1:"",menu2:"",settings:{licenseKey:"non-commercial-and-evaluation",height:"70vh",afterGetColHeader:function(col,e){if("number"!=typeof col)return col;col>=0&&e.childElementCount<2&&e.appendChild(d(col));var t=e.parentNode,o=t.parentNode;o.childNodes.length,Array.prototype.indexOf.call(o.childNodes,t)},beforeOnCellMouseDown:c,manualColumnResize:!0,manualRowResize:!0,rowHeaders:!0,stretchH:"all",wordWrap:!1,filters:!0,autoRowSize:!1,autoColumnSize:!1,persistentState:!0,rowHeights:23}}},computed:{formTitle:function(){return-1===this.editedIndex?"Reservation Summary":2===this.editedIndex?"Find Document":"Edit Document"},btnTitle:function(){return-1===this.editedIndex?"Save":2===this.editedIndex?"Find":"Edit"}},created:function(){this.reportType()},methods:{reportType:function(){var e=this;window.report=this,this.$axios.get("/api/report/params").then((function(t){e.itemType=t.data.data.item_type,e.requestType=t.data.data.request_type})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})}))},clear:function(){this.form.tenant="",this.form.kb_type="",this.form.dateType="",this.form.firstDateType="",this.form.secondDateType="",this.form.numType="",this.form.firstNumType="",this.form.secondNumType=""},close:function(){this.dialogPrevDoc=!1},exportPrev:function(e){var t=this;this.loading1=!0;var o=this.form.itemType,n=this.form.requestType,r=this.form.dateFrom,l=this.form.dateTo;this.$axios.get("/api/report/export",{params:{itemType:o,requestType:n,dateFrom:r,dateTo:l},responseType:"arraybuffer"}).then((function(e){t.loading1=!1;var d=new Blob([e.data],{type:"application/vnd.ms-excel"}),c=window.URL.createObjectURL(d),link=document.createElement("a");link.href=window.URL.createObjectURL(d),link.download="Reservation "+o+" - "+n+" -"+r+" - "+l+".xlsx",document.body.appendChild(link),link.click(),setTimeout((function(){document.body.removeChild(link),window.URL.revokeObjectURL(c)}),100)})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message}),t.loading1=!1}))},preview:function(){var e=this;this.loading=!0,this.showLoading=!0;var t=this.form.itemType,o=this.form.requestType,n=this.form.dateFrom,r=this.form.dateTo;try{this.$axios.get("/api/report/preview",{params:{itemType:t,requestType:o,dateFrom:n,dateTo:r}}).then((function(t){e.loading=!1,e.showLoading=!1,e.updateSettingSummary(t.data.data.header),setTimeout((function(){e.$refs.preview.hotInstance.loadData(t.data.data.rows),e.showLoading=!1,e.loading=!1}),500)})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message}),e.loading=!1,e.showLoading=!1}))}catch(e){this.loading=!1,this.showLoading=!1}},updateSettingSummary:function(header){this.$refs.preview.hotInstance.updateSettings({colHeaders:header,licenseKey:"non-commercial-and-evaluation",fixedRowsBottom:1,manualColumnResize:!0,manualRowResize:!0,rowHeaders:!0,filters:!0,autoRowSize:!1,autoColumnSize:!1,persistentState:!0,rowHeights:23,colWidths:[100,100,100,100,100,150,100,100,80,80,100,100,130,100,100,100,100,100,100,100,100]})}}},f=o(81),v=o(89),h=o.n(v),y=o(106),T=o(123),x=o(54),w=o(859),k=o(595),C=o(593),_=o(571),R=o(605),F=o(186),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-layout",[o("v-flex",{attrs:{sm12:""}},[o("v-card",[o("form",[o("v-card-title",[o("span",{staticClass:"text-subtitle-2"},[e._v(e._s(e.formTitle))])]),e._v(" "),o("v-card-text",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md2:""}},[o("v-select",{attrs:{outlined:"",dense:"","hide-details":"auto","return-object":"",loading:e.loading,items:e.itemType,label:"Item Type"},model:{value:e.form.itemType,callback:function(t){e.$set(e.form,"itemType",t)},expression:"form.itemType"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md2:""}},[o("v-select",{attrs:{outlined:"",dense:"","hide-details":"auto","return-object":"",loading:e.loading,items:e.requestType,label:"Request Type"},model:{value:e.form.requestType,callback:function(t){e.$set(e.form,"requestType",t)},expression:"form.requestType"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md2:""}},[o("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-text-field",e._g(e._b({attrs:{outlined:"",dense:"","hide-details":"auto",label:"Date From","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.form.dateFrom,callback:function(t){e.$set(e.form,"dateFrom",t)},expression:"form.dateFrom"}},"v-text-field",r,!1),n))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[e._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.menu1=!1}},model:{value:e.form.dateFrom,callback:function(t){e.$set(e.form,"dateFrom",t)},expression:"form.dateFrom"}})],1)],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md2:""}},[o("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-text-field",e._g(e._b({attrs:{outlined:"",dense:"","hide-details":"auto",label:"Date To","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.form.dateTo,callback:function(t){e.$set(e.form,"dateTo",t)},expression:"form.dateTo"}},"v-text-field",r,!1),n))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.menu2=!1}},model:{value:e.form.dateTo,callback:function(t){e.$set(e.form,"dateTo",t)},expression:"form.dateTo"}})],1)],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md2:""}},[o("v-btn",{attrs:{small:"",loading:e.loading,color:"green darken-1",dark:""},on:{click:function(t){return e.preview()}}},[e._v("Preview\n              ")])],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md2:""}},[o("v-btn",{attrs:{small:"",loading:e.loading1,size:"mini",color:"blue darken-1",dark:""},on:{click:function(t){return e.exportPrev()}}},[e._v("\n                Export\n              ")])],1),e._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[o("div",{staticClass:"scroll-container-height"},[o("hot-table",{ref:"preview",attrs:{root:e.detailsRoot,settings:e.settings}})],1)])],1)],1)],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:y.a,VCard:T.a,VCardText:x.c,VCardTitle:x.d,VDatePicker:w.a,VFlex:k.a,VLayout:C.a,VMenu:_.a,VSelect:R.a,VTextField:F.a})}}]);