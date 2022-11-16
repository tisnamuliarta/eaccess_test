(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{605:function(e,t,n){"use strict";n(287);var o=n(288);t.a=Object(o.a)("layout")},607:function(e,t,n){"use strict";n(287);var o=n(288);t.a=Object(o.a)("flex")},608:function(e,t,n){"use strict";var o=n(3),r=(n(47),n(67),n(289),n(12),n(11),n(56),n(101),n(13),n(10),n(16),n(17),n(6)),l=n(111),d=n(134);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(r.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},609:function(e,t,n){var content=n(610);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("c6bd0f6a",content,!0,{sourceMap:!1})},610:function(e,t,n){var o=n(19)(!1);o.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),e.exports=o},619:function(e,t,n){"use strict";n(13),n(10),n(16),n(11),n(17);var o=n(3),r=(n(84),n(12),n(86),n(101),n(189),n(47),n(67),n(609),n(617)),l=n(190),d=n(76),c=n(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=m(m({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=r.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return h}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(c.t)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=r.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},h),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var o=t[this.$refs.menu.listIndex];o?this.setMenuIndex(e.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===c.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===c.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==c.z.backspace&&e!==c.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[o]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(d.a)(input.data,{attrs:{"aria-activedescendant":Object(c.r)(this.$refs.menu,"activeTile.id"),autocomplete:Object(c.r)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[c.z.home,c.z.end].includes(t)||r.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){r.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){r.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null==(t=e.clipboardData)||t.setData("text/plain",r),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),e.preventDefault()}}}})},631:function(e,t,n){"use strict";n.r(t);n(28),n(46),n(601),n(56);var o={name:"FormIn",props:{formTitle:{type:String,default:""},alias:{type:String,default:""},itemYesNo:{type:Array,default:function(){return[]}},itemBilling:{type:Array,default:function(){return[]}},employee:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!1,submitLoad:!1,menu2:"",menu1:"",url:"",httpMethod:"get",form:{},attachment:"",defaultForm:{},entries:this.employee,isLoading:!1,model:null,model2:null,model3:null,search:null,disabled:!0,leaveLists:[],referenceNoList:[]}},methods:{changeSelect:function(e){e&&(this.disabled=!1)},getDataEmployee:function(){var e=this;this.isLoading=!0,this.$axios.get("/api/master/employees",{params:{alias:this.alias}}).then((function(t){e.entries=t.data.rows})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})})).finally((function(){return e.isLoading=!1}))},changeData:function(){this.form.user_name=this.model.Name,this.form.id_card=this.model.Nik,this.form.occupation=this.model.JobPosition,this.form.company=this.model.Company,this.form.address=this.model.AlamatKTP,this.form.department=this.model.Department,this.form.no_hp=this.model.MobilePhone,this.form.work_location=this.model.WorkLocation,this.$emit("leaveList",this.form.id_card),this.$emit("referenceNoList",this.model.Nik)},changeDataLeave:function(){this.form.leave_from_to=this.model2.date_from_to,this.form.reference_number=this.model2.DocumentReferenceNumber},changeDataReferenceNo:function(){this.form.reference_no=this.model3.paper_no},setLeaveList:function(data){this.leaveLists=data},setReferenceNoList:function(data){this.referenceNoList=data},setForm:function(form,e,t){var n=this;if(this.httpMethod=e,this.disabled=!0,this.form=Object.assign({},form),"post"===e){this.form.for_self=t;var o=new Date,dd=String(o.getDate()).padStart(2,"0"),r=String(o.getMonth()+1).padStart(2,"0"),l=o.getFullYear();o=l+"-"+r+"-"+dd,this.form.paper_date=o}else this.$emit("leaveList",this.form.id_card),setTimeout((function(){n.form=Object.assign({},form),n.form.for_self=t}),300)},close:function(){this.$emit("close")},selectFile:function(){this.attachment=this.$refs.files.files},save:function(){this.$emit("save",{form:this.form,defaultForm:this.defaultForm})}}},r=n(65),l=n(83),d=n.n(l),c=n(619),f=n(108),m=n(126),h=n(52),v=n(875),_=n(607),x=n(608),y=n(132),I=n(605),S=n(33),w=n(584),k=n(617),C=n(285),D=n(190),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.formTitle)}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:"",dark:"",color:"red"},on:{click:e.close}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",[n("v-form",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[n("v-layout",{attrs:{wrap:""}},["patch"!==e.httpMethod?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-select",{attrs:{items:e.itemYesNo,label:"Apakah Form Ini Untuk Karyawan?","item-text":"text","item-value":"Value",outlined:"",dense:"","hide-details":"auto"},on:{change:e.changeSelect},model:{value:e.form.for_self,callback:function(t){e.$set(e.form,"for_self",t)},expression:"form.for_self"}})],1):e._e(),e._v(" "),"Non Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Nama",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.user_name,callback:function(t){e.$set(e.form,"user_name",t)},expression:"form.user_name"}})],1):e._e(),e._v(" "),"Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:e.entries,loading:e.isLoading,"item-text":"Name","item-value":"Nik","hide-no-data":"","hide-selected":"",label:"Nama Karyawan",placeholder:"Nama Karyawan",outlined:"",dense:"","hide-details":"auto","return-object":""},on:{change:e.changeData},scopedSlots:e._u([{key:"item",fn:function(t){var o=t.item;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(o.Name)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(o.Nik)}})],1)]}}],null,!1,2545025527),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1):e._e(),e._v(" "),"Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[n("v-autocomplete",{attrs:{disabled:e.disabled,items:["1","2","3"],loading:e.isLoading,"hide-no-data":"","hide-selected":"",label:"Sertifikat Vaksin",placeholder:"Sertifikat Vaksin",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.swab_type,callback:function(t){e.$set(e.form,"swab_type",t)},expression:"form.swab_type"}})],1):e._e(),e._v(" "),"Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},["1"===e.form.swab_type||"2"===e.form.swab_type?n("v-autocomplete",{attrs:{disabled:e.disabled,items:e.referenceNoList,loading:e.isLoading,"item-text":"paper_no","item-value":"paper_no","hide-no-data":"","hide-selected":"",label:"Nomor Surat Rapid",placeholder:"Nomor Surat Rapid",outlined:"",dense:"","return-object":"","hide-details":"auto"},on:{change:e.changeDataReferenceNo},scopedSlots:e._u([{key:"item",fn:function(t){var o=t.item;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(o.paper_no)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(o.reference_no)}})],1)]}}],null,!1,888426113),model:{value:e.model3,callback:function(t){e.model3=t},expression:"model3"}}):e._e()],1):e._e(),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"NIK",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.id_card,callback:function(t){e.$set(e.form,"id_card",t)},expression:"form.id_card"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Divisi",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Jabatan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.occupation,callback:function(t){e.$set(e.form,"occupation",t)},expression:"form.occupation"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"No Handphone",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.no_hp,callback:function(t){e.$set(e.form,"no_hp",t)},expression:"form.no_hp"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Alamat Lengkap",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),"Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[n("v-autocomplete",{attrs:{disabled:e.disabled,items:e.leaveLists,loading:e.isLoading,"item-text":"date_from_to","item-value":"date_from_to","hide-no-data":"","hide-selected":"",label:"Tanggal Cuti / Perjalanan Dinas",placeholder:"Tanggal Cuti / Perjalanan Dinas",outlined:"",dense:"","return-object":"","hide-details":"auto"},on:{change:e.changeDataLeave},scopedSlots:e._u([{key:"item",fn:function(t){var o=t.item;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(o.date_from_to)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(o.jenisCuti)}})],1)]}}],null,!1,2081300981),model:{value:e.model2,callback:function(t){e.model2=t},expression:"model2"}})],1):e._e(),e._v(" "),"Non Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Tanggal Cuti / Perjalanan Dinas",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.leave_from_to,callback:function(t){e.$set(e.form,"leave_from_to",t)},expression:"form.leave_from_to"}})],1):e._e(),e._v(" "),"Non Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"No Cuti / Perjalanan Dinas",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.reference_number,callback:function(t){e.$set(e.form,"reference_number",t)},expression:"form.reference_number"}})],1):e._e(),e._v(" "),"Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"No Cuti / Perjalanan Dinas",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.reference_number,callback:function(t){e.$set(e.form,"reference_number",t)},expression:"form.reference_number"}})],1):e._e(),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Keperluan Masuk Kawasan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Periode Tinggal di Kawasan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.period_stay,callback:function(t){e.$set(e.form,"period_stay",t)},expression:"form.period_stay"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-menu",{ref:"menu1",attrs:{disabled:e.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Jadwal Masuk Kawasan","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.date_in,callback:function(t){e.$set(e.form,"date_in",t)},expression:"form.date_in"}},"v-text-field",r,!1),o))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",readonly:e.disabled},on:{input:function(t){e.menu1=!1}},model:{value:e.form.date_in,callback:function(t){e.$set(e.form,"date_in",t)},expression:"form.date_in"}})],1)],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Transportasi",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.transportation,callback:function(t){e.$set(e.form,"transportation",t)},expression:"form.transportation"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Jalur",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.route,callback:function(t){e.$set(e.form,"route",t)},expression:"form.route"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-menu",{ref:"menu2",attrs:{disabled:e.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Tanggal Surat","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.paper_date,callback:function(t){e.$set(e.form,"paper_date",t)},expression:"form.paper_date"}},"v-text-field",r,!1),o))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),n("v-date-picker",{attrs:{readonly:"","no-title":""},on:{input:function(t){e.menu2=!1}},model:{value:e.form.paper_date,callback:function(t){e.$set(e.form,"paper_date",t)},expression:"form.paper_date"}})],1)],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-btn",{staticClass:"white--text",attrs:{color:"orange darken-1",small:""},on:{click:function(t){return e.$emit("openAttachment",e.form)}}},[e._v("\n                Upload Attachment\n              ")])],1)],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",disabled:e.disabled,loading:e.submitLoad},on:{click:function(t){return e.save()}}},[e._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAutocomplete:c.a,VBtn:f.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDatePicker:v.a,VFlex:_.a,VForm:x.a,VIcon:y.a,VLayout:I.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VMenu:w.a,VSelect:k.a,VSpacer:C.a,VTextField:D.a})}}]);