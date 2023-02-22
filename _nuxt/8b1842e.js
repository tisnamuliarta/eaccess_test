(window.webpackJsonp=window.webpackJsonp||[]).push([[45,22],{1014:function(t,e,n){"use strict";n.r(e);var r=n(668),o=n(108),l=n(125),c=n(413),d=n(643),h=n(659),m=n(134),f=n(414),v=n(665),y=n(630),I=n(632),x=n(631),_=n(300),S=n(196),D=(n(34),n(6),n(45),n(194),n(53),{name:"FormDocument",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},url:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{buttonKey:1,dialog:!1,submitLoad:!1,form:this.formData,defaultItem:this.formData,selectedItem:[],documentType:[],itemCategory:[],itemBank:[],entries:[],itemTax:[],items:[],menu:"",tabs:null,statusProcessing:"insert",currentFile:void 0}},created:function(){this.getDataEmployee()},methods:{newData:function(form,t){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},t),this.buttonKey++},getDataEmployee:function(){var t=this;this.$axios.get("/api/master/users/by-company/IMIP",{params:{company:"IMIP"}}).then((function(e){t.entries=e.data.data})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(){return t.isLoading=!1}))},selectFile:function(t){this.currentFile=t},addLine:function(t){"rules"===t?this.form.rules.push({name:null,operator:null,value:null,id:null}):"approver"===t&&this.form.approver.push({user_id:null,sequence:null,types:null,id:null})},removeLine:function(t,e,n){"rules"===e?(this.form.rules.splice(t,1),void 0!==n.id&&this.$axios.delete("/api/master/approval/delete-rules/"+n.id)):"approver"===e&&(this.form.approver.splice(t,1),void 0!==n.id&&this.$axios.delete("/api/master/approval/delete-approver/"+n.id))},editItem:function(t,e){this.form=Object.assign({},t),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.buttonKey++},setDocumentType:function(t){this.documentType=t},returnData:function(data){"Banks"===data.type?this.itemBank=data.item:"Item Unit"===data.type&&(this.itemUnit=data.item)},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var t=this.statusProcessing,data=this.form;"insert"===t?(this.store("post",this.url,data),this.submitLoad=!1):"update"===t&&(this.store("put",this.url+"/"+this.form.id,data),this.submitLoad=!1)},store:function(t,e,data){var n=this,r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){n.$refs.dialogForm.closeDialog(),n.$emit("getDataFromApi")})).catch((function(t){n.buttonKey++,n.$swal({type:"error",title:"Error",text:t.response.data.message}),r.submitLoad=!1}))}}}),O=n(62),component=Object(O.a)(D,(function(){var t=this,e=t._self._c;return e("div",[e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"700px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[e(h.a,{staticClass:"pt-0"},[e(d.a,{attrs:{fluid:""}},[e(f.a,{attrs:{dense:""}},[e(c.a,{attrs:{cols:"12"}},[e(S.a,{attrs:{label:"Approval Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),e(c.a,{staticClass:"mt-2",attrs:{cols:"12"}},[e(S.a,{attrs:{label:"Callback URL",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.callback,callback:function(e){t.$set(t.form,"callback",e)},expression:"form.callback"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12"}},[e(x.a,{attrs:{color:"green"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[e(y.a,{attrs:{href:"#tab-2"}},[t._v("Approver")]),t._v(" "),e(y.a,{attrs:{href:"#tab-1"}},[t._v("Rules")])],1),t._v(" "),e(_.a,{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[e(I.a,{attrs:{value:"tab-1"}},[e(l.a,{attrs:{flat:""}},[t._l(t.form.rules,(function(n,l){return e(f.a,{key:l,staticClass:"mt-2",attrs:{dense:""}},[e(c.a,{attrs:{cols:"11"}},[e(f.a,{attrs:{dense:""}},[e(c.a,{attrs:{cols:"12",md:"4"}},[e(v.a,{attrs:{items:["Document Type"],label:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"item.name"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"2"}},[e(r.a,{attrs:{items:["IN"],label:"Operator",outlined:"",dense:"","hide-details":"auto"},model:{value:n.operator,callback:function(e){t.$set(n,"operator",e)},expression:"item.operator"}})],1),t._v(" "),e(c.a,{staticClass:"mt-2",attrs:{cols:"12",md:"12"}},[e(r.a,{attrs:{items:t.documentType,"item-text":"nama","item-value":"nama",multiple:"",label:"Value",outlined:"",dense:"",chips:"","small-chips":"","hide-details":"auto"},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"item.value"}})],1)],1)],1),t._v(" "),e(c.a,{attrs:{cols:"1"}},[e(o.a,{attrs:{color:"red darken-1",dark:"",small:"",icon:""},on:{click:function(e){return t.removeLine(l,"rules",n)}}},[e(m.a,[t._v(" mdi-delete ")])],1)],1)],1)})),t._v(" "),e(f.a,{attrs:{dense:""}},[e(c.a,{attrs:{cols:"12"}},[e(o.a,{attrs:{color:"green darken-1",dark:"",small:"",elevation:"0"},on:{click:function(e){return t.addLine("rules")}}},[t._v("\n                          Add Rules\n                        ")])],1)],1)],2)],1),t._v(" "),e(I.a,{attrs:{value:"tab-2"}},[e(l.a,{attrs:{flat:""}},[t._l(t.form.approver,(function(n,l){return e(f.a,{key:l,staticClass:"mt-2",attrs:{dense:""}},[e(c.a,{attrs:{cols:"11"}},[e(f.a,{attrs:{dense:""}},[e(c.a,{attrs:{cols:"12",md:"2"}},[e(S.a,{attrs:{label:"sequence",outlined:"",dense:"","hide-details":"auto"},model:{value:n.sequence,callback:function(e){t.$set(n,"sequence",e)},expression:"item.sequence"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"6"}},[e(r.a,{attrs:{items:t.entries,"item-text":"name","item-value":"id",label:"Approver",outlined:"",dense:"","hide-details":"auto"},model:{value:n.user_id,callback:function(e){t.$set(n,"user_id",e)},expression:"item.user_id"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"4"}},[e(v.a,{attrs:{items:["Any","All"],label:"Type",outlined:"",dense:"","hide-details":"auto"},model:{value:n.types,callback:function(e){t.$set(n,"types",e)},expression:"item.types"}})],1)],1)],1),t._v(" "),e(c.a,{attrs:{cols:"1"}},[e(o.a,{attrs:{color:"red darken-1",dark:"",small:"",icon:""},on:{click:function(e){return t.removeLine(l,"approver",n)}}},[e(m.a,[t._v(" mdi-delete ")])],1)],1)],1)})),t._v(" "),e(f.a,{attrs:{dense:""}},[e(c.a,{attrs:{cols:"12"}},[e(o.a,{attrs:{color:"green darken-1",dark:"",small:"",elevation:"0"},on:{click:function(e){return t.addLine("approver")}}},[t._v("\n                          Add Approver\n                        ")])],1)],1)],2)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[e(o.a,{key:t.buttonKey,attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{"~click":function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogForm:n(666).default})},659:function(t,e,n){"use strict";var r=n(4),o=(n(48),n(64),n(305),n(13),n(6),n(12),n(53),n(100),n(14),n(11),n(16),n(17),n(8)),l=n(111),c=n(136);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},660:function(t,e,n){var content=n(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("c6bd0f6a",content,!0,{sourceMap:!1})},661:function(t,e,n){var r=n(18)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},666:function(t,e,n){"use strict";n.r(e);var r=n(108),o=n(125),l=n(52),c=n(643),d=n(302),h=n(634),m=n(134),f=n(301),v={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},y=n(62),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.a,[e(l.d,[e("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),e(f.a),t._v(" "),e(r.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[e(m.a,[t._v("mdi-close-circle")])],1)],1),t._v(" "),e(h.a),t._v(" "),e(l.c,{staticClass:"pl-0 pr-0"},[e(c.a,{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),e(h.a),t._v(" "),e(l.a,[e(f.a),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},668:function(t,e,n){"use strict";n(14),n(11),n(16),n(12),n(17);var r=n(4),o=(n(82),n(6),n(13),n(83),n(100),n(193),n(48),n(64),n(660),n(665)),l=n(196),c=n(73),d=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.y.backspace&&t!==d.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.y.home,d.y.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})}}]);