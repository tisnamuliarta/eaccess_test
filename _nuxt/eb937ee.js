(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{609:function(t,e,o){"use strict";var r=o(7),n=o(619).start;r({target:"String",proto:!0,forced:o(620)},{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},619:function(t,e,o){var r=o(22),n=o(135),d=o(48),h=o(292),l=o(77),c=r(h),m=r("".slice),w=Math.ceil,f=function(t){return function(e,o,r){var h,f,R=d(l(e)),D=n(o),y=R.length,I=void 0===r?" ":d(r);return D<=y||""==I?R:((f=c(I,w((h=D-y)/I.length))).length>h&&(f=m(f,0,h)),t?R+f:f+R)}};t.exports={start:f(!1),end:f(!0)}},620:function(t,e,o){var r=o(113);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},636:function(t,e){function o(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=636},957:function(t,e,o){"use strict";o.r(e);o(11),o(56);var r=o(635),n=o(700),d=(o(638),{name:"ReservationDetailRow",components:{HotTable:r.a},props:{form:{type:Object,default:!1},isDataSet:{type:Boolean,default:!1}},data:function(){return{countAttachment:0,detailsRoot:"detailsRoot",settings:{licenseKey:"non-commercial-and-evaluation",startRows:0}}},computed:{checkIsDataSet:function(){return this.isDataSet}},watch:{checkIsDataSet:function(){if(this.checkIsDataSet){var data=JSON.parse(localStorage.getItem("approvalDetails"));this.setDataToDetails(data)}}},created:function(){this.instance()},methods:{instance:function(){window.details=this},countDetailsRows:function(){return this.$refs.details.hotInstance.countRows()},render:function(){this.$refs.details.hotInstance.render()},exportCsv:function(){this.$refs.details.hotInstance.getPlugin("exportFile").downloadFile("csv",{bom:!1,columnDelimiter:",",columnHeaders:!0,exportHiddenColumns:!1,exportHiddenRows:!1,fileExtension:"csv",filename:"export-file_[YYYY]-[MM]-[DD]",mimeType:"text/csv",rowDelimiter:"\r\n",rowHeaders:!0})},addLine:function(){var t=this.$refs.details.hotInstance.countRows(),e=this.form.DocumentType;this.$refs.details.hotInstance.alter("insert_row",t+1),this.$refs.details.hotInstance.setDataAtRowProp([[t,"ReqDate",this.form.DocDate],[t,"WhsCode",this.form.WhsCode]]),"Service"===e&&this.$refs.details.hotInstance.setDataAtRowProp([[t,"SPB","Y"]])},changeWhsDetails:function(){for(var t=this,e=this.$refs.details.hotInstance.countRows(),o=0;o<e;o++)t.$refs.details.hotInstance.setDataAtRowProp([[o,"WhsCode",t.form.WhsCode],[o,"ReqDate",t.form.DocDate]])},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()},checkIfEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},fillCheckboxDetails:function(){for(var t=this,e=this.$refs.details.hotInstance.countRows(),o=t.form.RequestType,r="N",n="N",d=0;d<e;d++)t.$refs.details.hotInstance.setDataAtRowProp([[d,"NPB","N"],[d,"SPB","N"]]);for(var h=0;h<e;h++){var l=this.$refs.details.hotInstance.getDataAtRowProp(h,"ItemCategory");"Normal"===o&&"RS"===l?(n="Y",r="N"):"Normal"===o&&"NRS"===l?(r="Y",n="N"):"For Restock SubWH"===o&&"RS"===l?(n="Y",r="N"):"For Restock SubWH"===o&&"NRS"===l&&(r="Y",n="N"),t.$refs.details.hotInstance.setDataAtRowProp([[h,"NPB",n],[h,"SPB",r]])}},getDataAtRowPropDetails:function(t,e){return this.$refs.details.hotInstance.getDataAtRowProp(t,e)},insertDataAssetToDetails:function(t,e){var o=t.row,r=this;e.forEach((function(t,e){r.$refs.details.hotInstance.setDataAtRowProp([[o,"AssetCode",t.ItemCode],[o,"AssetName",t.ItemName]]),o++}))},insertDataToDetails:function(t,e){var o=t.row,r=this;e.forEach((function(t,e){r.$axios.get("/api/latest-req-item",{params:{ReqDate:r.form.DocDate,WhsCode:r.form.WhsCode,ItemCode:t.ItemCode}}).then((function(e){var n=t.U_ItemType?t.U_ItemType:"RS",d=r.form.RequestType,h="N",l="N";"Normal"===d&&"RS"===n||"Urgent"===d&&"RS"===n||"Normal"===d&&"CRC"===n?l="Y":"Normal"===d&&"NRS"===n||"Urgent"===d&&"NRS"===n?h="Y":"For Restock SubWH"===d&&"RS"===n||"For Restock SubWH"===d&&"CRC"===n?l="Y":("For Restock SubWH"===d&&"NRS"===n||"Restock"===d&&"RS"===n)&&(h="Y"),r.$emit("checkCount"),r.$refs.details.hotInstance.setDataAtRowProp([[o,"ItemCode",t.ItemCode],[o,"ItemGroup",t.ItmsGrpCod],[o,"SubGroup",t.U_SubGroup],[o,"ItemName",t.ItemName],[o,"UoMCode",t.InvntryUom],[o,"WhsCode",r.form.WhsCode],[o,"ReqDate",r.form.DocDate],[o,"OnHand",t.OnHand],[o,"AvailableQty",t.Available],[o,"ItemCategory",n],[o,"InvntItem",t.InvntItem],[o,"NPB",l],[o,"SPB",h],[o,"LastReqBy",e.data.rows?e.data.rows.U_UserName:""],[o,"U_Period",null!=t.U_Period?t.U_Period:"-"],[o,"U_Category",null!=t.U_Category?t.U_Category:"-"],[o,"U_AppResBy",null!=t.U_AppResBy?t.U_AppResBy:"-"]]),o++}))}))},setDataToDetails:function(data){var t=this;setTimeout((function(){t.$refs.details.hotInstance.render(),t.$refs.details.hotInstance.loadData(data);var e=[];if("Service"===t.form.DocumentType)e=[0,1,3,4,5,6,12,13,14,16,17,18,19,20,21,22,23,24,25,27,28,29,30,31,32,33,34,35];else e=[20,21,22,23,24,25,27,28,29,30,31,32];t.updateTableSettings(e),t.showLoadingInvDetail=!1}),300)},removeData:function(t){var e=this;this.$axios.delete("/api/reservation/master/1",{params:{doc_entry:t}}).then((function(t){e.$swal({type:"success",title:"Success!",text:t.data.message}),e.$emit("getData")})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message}),e.$emit("getData")}))},setCountAttachment:function(t,e){this.$refs.details.hotInstance.setDataAtRowProp(e,"CountAttachment",t)},changeTable:function(t){var e=[];if("Service"===t)e=[0,1,3,4,5,6,12,13,14,16,17,18,19,20,21,22,23,24,25,27,28,29,30,31,32,33,34,35];else e=[20,21,22,23,24,25,27,28,29,30,31,32];this.updateTableSettings(e)},updateTableSettings:function(t){this.$refs.details.hotInstance;this.$refs.details.hotInstance.render(),this.$refs.details.hotInstance.updateSettings({colHeaders:["","Item Code","Item Name","","Asset Code","Asset Name","Category","UoM","WH","Req. Qty","Req. Date","Notes","OnHand","Available","Other Resv. No ","SPB","NPB","Last Res. By","Vehicle No","Mileage","Delete","DocEntry","LineStatus","OIGRDocNum","InvntItem","GIR Status","Attachment","CountAttachment","ItemGroup","SubGroup","U_Period","U_Category","U_AppResBy","Employee NIK","Employee NAme","Department"],copyable:!0,copyPaste:!0,columns:[{data:"ItemCodeRender",width:30,height:26,wordWrap:!1},{data:"ItemCode",width:100,height:26,wordWrap:!1,readOnly:!0},{data:"ItemName",width:200,height:26,wordWrap:!1},{data:"AssetCodeRender",width:30,height:26,wordWrap:!1,renderer:function(t,td,e,col,o,r,d){var button=null,h=window.details;if(155===parseInt(h.$refs.details.hotInstance.getDataAtRowProp(e,"ItemGroup")))return(button=document.createElement("button")).type="button",button.innerText=">",button.className="btnSPB",button.value="Details",n.a.dom.addEvent(button,"mousedown",(function(t){t.preventDefault(),h.$emit("openDialogAsset",{row:e})})),n.a.dom.empty(td),td.appendChild(button),td}},{data:"AssetCode",width:100,height:26,wordWrap:!1,readOnly:!0},{data:"AssetName",width:200,height:26,wordWrap:!1,readOnly:!0},{data:"ItemCategory",width:70,height:26,wordWrap:!1,readOnly:!0},{data:"UoMCode",width:60,height:26,wordWrap:!1},{data:"WhsCode",width:60,height:26,wordWrap:!1,readOnly:!0},{data:"ReqQty",width:80,height:26,wordWrap:!1,type:"numeric",numericFormat:{pattern:"0,0.00"}},{data:"ReqDate",type:"date",width:100,height:26,wordWrap:!1,dateFormat:"YYYY-MM-DD",correctFormat:!0,datePickerConfig:{firstDay:0,showWeekNumber:!0,numberOfMonths:1}},{data:"ReqNotes",width:200,height:26,wordWrap:!1},{data:"OnHand",width:80,height:26,wordWrap:!1,readOnly:!0,type:"numeric",numericFormat:{pattern:"0,0.00"}},{data:"AvailableQty",width:80,height:26,wordWrap:!1,readOnly:!0,type:"numeric",numericFormat:{pattern:"0,0.00"}},{data:"OtherResvNo",width:150,height:26,wordWrap:!1},{data:"SPB",width:50,height:26,wordWrap:!1,className:"htCenter ",type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"NPB",width:50,height:26,wordWrap:!1,className:"htCenter ",type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"LastReqBy",width:150,height:26,readOnly:!0,wordWrap:!1},{data:"VehicleNo",width:100,height:26,wordWrap:!1,type:"dropdown",source:function(t,e){e(window.details.$auth.$storage.getState("vehicle"))}},{data:"Mileage",width:100,height:26,wordWrap:!1,type:"numeric",numericFormat:{pattern:"0,0.00"}},{data:"Delete",width:100,height:26,wordWrap:!1},{data:"LineEntry",width:100,height:26,wordWrap:!1},{data:"LineStatus",width:100,height:26,wordWrap:!1},{data:"OIGRDocNum",width:100,height:26,wordWrap:!1},{data:"InvntItem",width:100,height:26,wordWrap:!1},{data:"SAPGIRStatus",width:100,height:26,wordWrap:!1},{data:"Attachment",width:120,height:26,wordWrap:!1,renderer:function(t,td,e,col,o,r,d){var button=null,h=window.details,l=h.$refs.details.hotInstance.getDataAtRowProp(e,"LineEntry");if(l){var c=parseInt(h.countAttachment),m=parseInt(h.$refs.details.hotInstance.getDataAtRowProp(e,"CountAttachment"));c>0&&(m=c),(button=document.createElement("button")).type="button",button.innerText=l&&m>0?"✅ Attachment ("+m+")":m>0?"👍 Attachment ("+m+")":"⌛ Attachment",button.className=l&&m>0||m>0?"btnSPB row-"+e:"myBtRed",button.value="Attachment","test value attachment",n.a.dom.addEvent(button,"mousedown",(function(t){t.preventDefault();var o=h.$refs.details.hotInstance.getDataAtRowProp(e,"LineEntry");h.$emit("openAttachmentDetails",{lineEntry:o,row:e})})),n.a.dom.empty(td),td.appendChild(button)}return td}},{data:"CountAttachment",width:100,height:26,wordWrap:!1},{data:"ItemGroup",width:100,height:26,wordWrap:!1},{data:"SubGroup",width:100,height:26,wordWrap:!1},{data:"U_Period",width:100,height:26,wordWrap:!1,type:"text"},{data:"U_Category",width:100,height:26,wordWrap:!1,type:"text"},{data:"U_AppResBy",width:100,height:26,wordWrap:!1,type:"text"},{data:"EmployeeId",width:100,height:26,wordWrap:!1,type:"text"},{data:"EmployeeName",width:170,height:26,wordWrap:!1,readOnly:!0,type:"text"},{data:"U_Department",width:200,height:26,wordWrap:!1,type:"dropdown",source:function(t,e){e(window.details.$auth.$storage.getLocalStorage("department"))},strict:!0,filter:!1,allowInvalid:!1}],currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:0,manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,rowHeights:23,persistentState:!0,width:"100%",stretchH:"all",beforeRemoveRow:function(t,e,o,source){var r=window.details,n=prompt("Do you want to delete a row? Type y to remove"),d=[];return"y"===n&&(o.forEach((function(t,e){var o=r.$refs.details.hotInstance.getDataAtRowProp(t,"LineEntry");o&&d.push(o)})),d.length>0&&r.removeData(d),!0)},afterOnCellMouseDown:function(t,e,o,r){var n=window.details,d=n.$refs.details.hotInstance.propToCol,h=n.$refs.details.hotInstance.getDataAtRowProp(e.row,"LineEntry");e.col===d("ItemCodeRender")&&n.$emit("openDialog",{row:e.row,form:n.form}),e.col===d("LastReqBy")&&n.$emit("openDialogLastResv",{row:e.row,itemCode:n.$refs.details.hotInstance.getDataAtRowProp(e.row,"ItemCode"),itemName:n.$refs.details.hotInstance.getDataAtRowProp(e.row,"ItemName"),reqDate:n.$refs.details.hotInstance.getDataAtRowProp(e.row,"ReqDate"),whsCode:n.$refs.details.hotInstance.getDataAtRowProp(e.row,"WhsCode")}),e.col===d("Delete")&&n.$emit("openDeleteRow",{url:"/api/reservation/"+h,row:e.row})},afterOnCellMouseOut:function(t,e,o,r){var n=window.details,d=n.$refs.details.hotInstance.propToCol;e.col===d("NPB")&&("Y"===n.$refs.details.hotInstance.getDataAtRowProp(e.row,"NPB")&&n.$refs.details.hotInstance.setDataAtRowProp(e.row,"SPB","N"));e.col===d("SPB")&&("Y"===n.$refs.details.hotInstance.getDataAtRowProp(e.row,"SPB")&&n.$refs.details.hotInstance.setDataAtRowProp([[e.row,"NPB","N"],[e.row,"OtherResvNo",null]]))},afterGetColHeader:function(col,t){if("number"!=typeof col)return col;var e=t.parentNode,o=e.parentNode;o.childNodes.length,Array.prototype.indexOf.call(o.childNodes,e)},contextMenu:{callback:function(t,e){var o=window.details;"remove_row"===t&&(o.isInvDetailChanges=!0,o.isInvChanges=!0)}},hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:t},cells:function(t,col,e){var o={},r=window.details,d=this.instance.getDataAtRowProp(t,"ItemCategory"),h=this.instance.getDataAtRowProp(t,"LineStatus"),l=this.instance.getDataAtRowProp(t,"InvntItem"),c=this.instance.getDataAtRowProp(t,"ItemGroup"),m=this.instance.getDataAtRowProp(t,"NPB"),w=r.form.ApprovalStatus,f=r.form.DocumentType,R=r.form.RequestType;if("Closed"===h)for(var i=0;i<=22;i++)col===i&&(o.readOnly=!0);else if("-"!==w&&"N"!==w)for(var D=0;D<=22;D++)col===D&&(o.readOnly=!0);else if("ItemName"===e&&(o.readOnly="Item"===f&&"Y"===l),"UoMCode"===e&&(o.readOnly=!("102"===c||"152"===c||"Item"!==f)),"SPB"===e&&("Item"!==f||"Normal"===R&&"RS"===d||"For Restock SubWH"===R&&"RS"===d||"Normal"===R&&"CRC"===d||"For Restock SubWH"===R&&"CRC"===d?o.readOnly=!0:"Restock"===R&&"RS"===d&&(o.readOnly=!1)),"NPB"===e&&("Normal"===R&&"NRS"===d||"For Restock SubWH"===R&&"NRS"===d?(o.readOnly=!1,!0):("Restock"===R&&"NRS"===d||"Restock"===R&&"RS"===d)&&(o.readOnly=!0)),"OtherResvNo"===e&&(o.readOnly=!("Y"===m&&("Normal"===R||"Urgent"===R))),"ItemCodeRender"===e||"LastReqBy"===e||"Delete"===e){var button=null;o.readOnly=!0,o.renderer=function(t,td,e,col,o,r,d){return"LastReqBy"===o&&((button=document.createElement("a")).innerHTML=r),"ItemCodeRender"!==o&&"Delete"!==o||((button=document.createElement("button")).type="button","ItemCodeRender"===o&&(button.innerText=">",button.className="btnSPB"),"Delete"===o&&(button.innerText="Delete",button.className="btnDelete")),n.a.dom.empty(td),td.appendChild(button),td}}return o}})}}}),h=o(65),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("HotTable",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);