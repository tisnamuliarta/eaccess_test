(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{605:function(e,t,n){"use strict";n(287);var r=n(288);t.a=Object(r.a)("layout")},607:function(e,t,n){"use strict";n(287);var r=n(288);t.a=Object(r.a)("flex")},608:function(e,t,n){"use strict";var r=n(3),o=(n(47),n(67),n(289),n(12),n(11),n(56),n(101),n(13),n(10),n(16),n(17),n(6)),l=n(111),d=n(134);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},609:function(e,t,n){var content=n(610);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("c6bd0f6a",content,!0,{sourceMap:!1})},610:function(e,t,n){var r=n(19)(!1);r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),e.exports=r},619:function(e,t,n){"use strict";n(13),n(10),n(16),n(11),n(17);var r=n(3),o=(n(84),n(12),n(86),n(101),n(189),n(47),n(67),n(609),n(617)),l=n(190),d=n(76),c=n(0);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=f(f({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return h}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(c.t)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),f(f({},h),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===c.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===c.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==c.z.backspace&&e!==c.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(d.a)(input.data,{attrs:{"aria-activedescendant":Object(c.r)(this.$refs.menu,"activeTile.id"),autocomplete:Object(c.r)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[c.z.home,c.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(t=e.clipboardData)||t.setData("text/plain",o),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},634:function(e,t,n){"use strict";n.r(t);n(601),n(28),n(46),n(47),n(67),n(56);var r={name:"FormRapidOut",props:{formTitle:{type:String,default:""},alias:{type:String,default:""},itemYesNo:{type:Array,default:function(){return[]}},itemBilling:{type:Array,default:function(){return[]}},employee:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!1,submitLoad:!1,menu3:"",menu2:"",menu1:"",url:"",httpMethod:"get",form:{},attachment:[],defaultForm:{},isLoading:!1,model:null,model2:null,search:null,entries:this.employee,disabled:!0,display:!1,leaveLists:[]}},methods:{formatCurrentDate:function(e){var t=new Date(e),dd=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return t=r+"-"+n+"-"+dd},checkSwabDate:function(e){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();t=r+"-"+n+"-"+dd;var o=new Date(t);return new Date(e)<=o},changeSelect:function(e){e?(this.disabled=!1,this.display=!0):this.display=!1},checkClinic:function(e){return this.$gates.hasAnyRole("Superuser|Admin Klinik")},checkDisabled:function(){return!this.$gates.hasAnyRole("Superuser|Admin Klinik")&&this.disabled},getDataEmployee:function(){var e=this;this.isLoading=!0,this.$axios.get("/api/employees",{params:{alias:this.alias}}).then((function(t){e.entries=t.data.rows})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})})).finally((function(){return e.isLoading=!1}))},changeData:function(){this.form.user_name=this.model.Name,this.form.id_card=this.model.Nik,this.form.ktp=this.model.IdNumber,this.form.occupation=this.model.JobPosition,this.form.department=this.model.Department,this.form.company=this.model.Company,this.form.no_hp=this.model.MobilePhone,this.form.address=this.model.AlamatKTP,this.form.name_boss=this.model.DirectSuperiorName,this.form.nik_boss=this.model.DirectSuperiorNIK,this.form.position_boss=this.model.DirectSuperiorPosition,this.form.work_location=this.model.WorkLocation,this.$emit("leaveList",this.form.id_card)},changeDataLeave:function(){this.form.leave_from_to=this.model2.date_from_to,this.form.reference_number=this.model2.DocumentReferenceNumber,this.model2.jenisCuti.includes("Cuti Family Visit")?this.form.payment="Ditagihkan kepada User/Departemen/Perusahaan":this.form.payment="Dibayar Tunai"},setLeaveList:function(data){this.leaveLists=data},setForm:function(form,e,t){var n=this;if(this.httpMethod=e,this.disabled=!0,this.form=Object.assign({},form),"post"===e){this.display=!0,this.form.payment="Dibayar Tunai";var r=new Date,dd=String(r.getDate()).padStart(2,"0"),o=String(r.getMonth()+1).padStart(2,"0"),l=r.getFullYear();r=l+"-"+o+"-"+dd,this.form.paper_date=r,this.form.for_self=t}else this.display=!0,this.$emit("leaveList",this.form.id_card),setTimeout((function(){n.form=Object.assign({},form),n.form.for_self=t}),300)},close:function(){this.$emit("close")},save:function(){this.$emit("save",{form:this.form,defaultForm:this.defaultForm})}}},o=n(65),l=n(83),d=n.n(l),c=n(619),m=n(108),f=n(126),h=n(52),v=n(875),x=n(607),_=n(608),y=n(132),I=n(605),S=n(33),k=n(584),w=n(617),D=n(285),C=n(190),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.formTitle)}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:"",dark:"",color:"red"},on:{click:e.close}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",[n("v-form",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[n("v-layout",{attrs:{wrap:""}},["patch"!==e.httpMethod?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-select",{attrs:{items:e.itemYesNo,label:"Apakah Form Ini Untuk Karyawan?","item-text":"text","item-value":"Value",outlined:"",dense:"","hide-details":"auto"},on:{change:e.changeSelect},model:{value:e.form.for_self,callback:function(t){e.$set(e.form,"for_self",t)},expression:"form.for_self"}})],1):e._e(),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-menu",{ref:"menu2",attrs:{disabled:e.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Tanggal Surat","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.paper_date,callback:function(t){e.$set(e.form,"paper_date",t)},expression:"form.paper_date"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),n("v-date-picker",{attrs:{readonly:"","no-title":""},on:{input:function(t){e.menu2=!1}},model:{value:e.form.paper_date,callback:function(t){e.$set(e.form,"paper_date",t)},expression:"form.paper_date"}})],1)],1),e._v(" "),"Non Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Nama",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.user_name,callback:function(t){e.$set(e.form,"user_name",t)},expression:"form.user_name"}})],1):e._e(),e._v(" "),"Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:e.entries,loading:e.isLoading,"item-text":"Name","item-value":"Nik","hide-no-data":"","hide-selected":"",label:"Nama Karyawan",placeholder:"Nama Karyawan",outlined:"",dense:"","hide-details":"auto","return-object":""},on:{change:e.changeData},scopedSlots:e._u([{key:"item",fn:function(t){var r=t.item;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(r.Name)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(r.Nik)}})],1)]}}],null,!1,2545025527),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1):e._e(),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"No. ID Card",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.id_card,callback:function(t){e.$set(e.form,"id_card",t)},expression:"form.id_card"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"NIK KTP",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.ktp,callback:function(t){e.$set(e.form,"ktp",t)},expression:"form.ktp"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Departemen",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Perusahaan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Jabatan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.occupation,callback:function(t){e.$set(e.form,"occupation",t)},expression:"form.occupation"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Nomor Telepon Aktif",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.no_hp,callback:function(t){e.$set(e.form,"no_hp",t)},expression:"form.no_hp"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Alamat Domisili",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),"Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[n("v-autocomplete",{attrs:{disabled:e.disabled,items:e.leaveLists,loading:e.isLoading,"item-text":"date_from_to","item-value":"date_from_to","hide-no-data":"","hide-selected":"",label:"Tanggal Cuti / Perjalanan Dinas",placeholder:"Tanggal Cuti / Perjalanan Dinas",outlined:"",dense:"","return-object":"","hide-details":"auto"},on:{change:e.changeDataLeave},scopedSlots:e._u([{key:"item",fn:function(t){var r=t.item;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(r.date_from_to)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(r.jenisCuti)}})],1)]}}],null,!1,2081300981),model:{value:e.model2,callback:function(t){e.model2=t},expression:"model2"}})],1):e._e(),e._v(" "),"Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"No Cuti / Perjalanan Dinas",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.reference_number,callback:function(t){e.$set(e.form,"reference_number",t)},expression:"form.reference_number"}})],1):e._e(),e._v(" "),"Non Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Tanggal Cuti / Perjalanan Dinas",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.leave_from_to,callback:function(t){e.$set(e.form,"leave_from_to",t)},expression:"form.leave_from_to"}})],1):e._e(),e._v(" "),"Non Karyawan"===e.form.for_self?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"No Cuti / Perjalanan Dinas",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.reference_number,callback:function(t){e.$set(e.form,"reference_number",t)},expression:"form.reference_number"}})],1):e._e(),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[n("v-select",{attrs:{disabled:e.disabled,items:e.itemBilling,label:"Penagihan dilakukan melalui ?","item-text":"text","item-value":"Value",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.payment,callback:function(t){e.$set(e.form,"payment",t)},expression:"form.payment"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Nama Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.name_boss,callback:function(t){e.$set(e.form,"name_boss",t)},expression:"form.name_boss"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Jabatan Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.position_boss,callback:function(t){e.$set(e.form,"position_boss",t)},expression:"form.position_boss"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"NIK Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.nik_boss,callback:function(t){e.$set(e.form,"nik_boss",t)},expression:"form.nik_boss"}})],1),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-menu",{ref:"menu3",attrs:{disabled:e.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Tanggal Swab","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.swab_date,callback:function(t){e.$set(e.form,"swab_date",t)},expression:"form.swab_date"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu3,callback:function(t){e.menu3=t},expression:"menu3"}},[e._v(" "),n("v-date-picker",{attrs:{readonly:e.disabled,"no-title":""},on:{input:function(t){e.menu3=!1}},model:{value:e.form.swab_date,callback:function(t){e.$set(e.form,"swab_date",t)},expression:"form.swab_date"}})],1)],1),e._v(" "),e.checkSwabDate(e.form.swab_date)?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{disabled:e.disabled,label:"Keterangan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.reason_swab,callback:function(t){e.$set(e.form,"reason_swab",t)},expression:"form.reason_swab"}})],1):e._e(),e._v(" "),"active"===e.form.status?n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e.checkClinic()?n("v-select",{attrs:{items:["Positif","Negatif"],label:"Response Dari Klinik",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.clinic_response,callback:function(t){e.$set(e.form,"clinic_response",t)},expression:"form.clinic_response"}}):e._e()],1):e._e(),e._v(" "),n("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[n("v-btn",{staticClass:"white--text",attrs:{color:"orange darken-1",small:""},on:{click:function(t){return e.$emit("openAttachment",e.form)}}},[e._v("\n                Upload Attachment\n              ")])],1)],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",disabled:e.checkDisabled(),loading:e.submitLoad},on:{click:function(t){return e.save()}}},[e._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAutocomplete:c.a,VBtn:m.a,VCard:f.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDatePicker:v.a,VFlex:x.a,VForm:_.a,VIcon:y.a,VLayout:I.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VMenu:k.a,VSelect:w.a,VSpacer:D.a,VTextField:C.a})}}]);