(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1020:function(t,e,n){"use strict";n.r(e);var o=n(31),r=(n(6),n(12),n(53),n(671)),c=(n(673),{name:"FlightReservation",components:{HotTable:r.a},data:function(){return{httpMethod:"",countAttachment:0,detailsRoot:"detailsRoot",settings:{licenseKey:"non-commercial-and-evaluation",startRows:1,colHeaders:["Item/Material/Equipment Name","Unit","Quantity","Notes","ID"],columns:[{data:"item_name",width:180,height:26,wordWrap:!1},{data:"uom",width:30,height:26,wordWrap:!1},{data:"qty",width:100,height:26,wordWrap:!1,type:"numeric"},{data:"notes",width:120,height:26,wordWrap:!1},{data:"id",width:50,height:26,wordWrap:!1}],currentRowClassName:"currentRow",currentColClassName:"currentCol",manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!0,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!1,columnSorting:!0,rowHeights:23,persistentState:!0,width:"100%",stretchH:"all",beforeRemoveRow:function(t,e,n,source){var o=window.details,r=prompt("Do you want to delete a row? Type y to remove"),c=[];return"y"===r&&(n.forEach((function(t,e){var n=o.$refs.details.hotInstance.getDataAtRowProp(t,"LineEntry");n&&c.push(n)})),c.length>0&&o.removeData(c),!0)},dataSchema:{employee_type:"Employee",nationality:"Indonesia",name_title:"Mr."},afterChange:function(t,source){var e=window.details;t&&("edit"!==source&&"autofill"!==source&&"paste"!==source||t.forEach((function(t){var n=Object(o.a)(t,4),r=n[0],c=n[1],d=(n[2],n[3]);"name"===c&&e.$axios.get("/api/master/employee-by-name",{params:{name:d}}).then((function(t){t.data&&(e.$refs.details.hotInstance.setDataAtRowProp(r,"id_card",t.data.IdNumber),e.$refs.details.hotInstance.setDataAtRowProp(r,"company",t.data.Company))}))})))},contextMenu:{callback:function(t,e){var n=window.details;"remove_row"===t&&(n.isInvDetailChanges=!0,n.isInvChanges=!0)}},hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[4]}}}},computed:{checkIsDataSet:function(){return this.isDataSet}},watch:{checkIsDataSet:function(){if(this.checkIsDataSet){var data=JSON.parse(localStorage.getItem("approvalDetails"));this.setDataToDetails(data)}}},created:function(){this.instance()},methods:{getDetailSourceData:function(){return this.$refs.details.hotInstance.getSourceData()},checkEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},insertRow:function(t,e){this.$refs.details.hotInstance.loadData([]),this.$refs.details.hotInstance.alter("insert_row",t,e)},instance:function(){window.details=this},countDetailsRows:function(){return this.$refs.details.hotInstance.countRows()},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1),this.$refs.details.hotInstance.setDataAtRowProp([[t,"ReqDate",this.form.DocDate],[t,"WhsCode",this.form.WhsCode]])},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()},checkIfEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},getDataAtRowPropDetails:function(t,e){return this.$refs.details.hotInstance.getDataAtRowProp(t,e)},setDataToHttpMethod:function(t){this.httpMethod=t},setDataToDetails:function(data){var t=this;setTimeout((function(){t.$refs.details.hotInstance.loadData(data)}),300)},removeData:function(t){var e=this;this.$axios.delete("/api/reservation/master/1",{params:{doc_entry:t}}).then((function(t){e.$swal({type:"success",title:"Success!",text:t.data.message}),e.$emit("getData")})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message}),e.$emit("getData")}))},setCountAttachment:function(t,e){this.$refs.details.hotInstance.setDataAtRowProp(e,"CountAttachment",t)},updateTableSettings:function(){this.$refs.details.hotInstance.updateSettings({})}}}),d=n(62),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("HotTable",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1)}),[],!1,null,null,null);e.default=component.exports},652:function(t,e,n){"use strict";var o=n(7),r=n(662).start;o({target:"String",proto:!0,forced:n(663)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},662:function(t,e,n){var o=n(23),r=n(137),c=n(46),d=n(307),l=n(74),h=o(d),f=o("".slice),w=Math.ceil,m=function(t){return function(e,n,o){var d,m,D=c(l(e)),v=r(n),R=D.length,I=void 0===o?" ":c(o);return v<=R||""==I?D:((m=h(I,w((d=v-R)/I.length))).length>d&&(m=f(m,0,d)),t?D+m:m+D)}};t.exports={start:m(!1),end:m(!0)}},663:function(t,e,n){var o=n(113);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},672:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=672}}]);