(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{930:function(e,t,l){"use strict";l.r(t);l(591),l(27),l(44),l(45),l(65),l(55);var o={name:"FormRapidIn",props:{formTitle:{type:String,default:""},alias:{type:String,default:""},itemYesNo:{type:Array,default:function(){return[]}},itemBilling:{type:Array,default:function(){return[]}},employee:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!1,submitLoad:!1,menu3:"",menu2:"",menu1:"",url:"",httpMethod:"get",form:{},attachment:[],defaultForm:{},entries:this.employee,isLoading:!1,model:null,model2:null,search:null,disabled:!0,display:!1,leaveLists:[]}},methods:{checkClinic:function(e){return this.$gates.hasAnyRole("Superuser|Admin Klinik")},formatCurrentDate:function(e){return new Date(e).getTime()},checkSwabDate:function(e){var t=new Date,dd=String(t.getDate()).padStart(2,"0"),l=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear();t=o+"-"+l+"-"+dd;var n=new Date(t);return new Date(e)<=n},checkDisabled:function(){return!this.$gates.hasAnyRole("Superuser|Admin Klinik")&&this.disabled},changeSelect:function(e){e?(this.disabled=!1,this.display=!0):this.display=!1},getDataEmployee:function(){var e=this;this.isLoading=!0,this.$axios.get("/api/employees",{params:{alias:this.alias}}).then((function(t){e.entries=t.data.rows})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})})).finally((function(){return e.isLoading=!1}))},changeData:function(){this.form.user_name=this.model.Name,this.form.id_card=this.model.Nik,this.form.ktp=this.model.IdNumber,this.form.occupation=this.model.JobPosition,this.form.department=this.model.Department,this.form.company=this.model.Company,this.form.no_hp=this.model.MobilePhone,this.form.address=this.model.AlamatKTP,this.form.name_boss=this.model.DirectSuperiorName,this.form.nik_boss=this.model.DirectSuperiorNIK,this.form.position_boss=this.model.DirectSuperiorPosition,this.form.work_location=this.model.WorkLocation,this.$emit("leaveList",this.form.id_card)},changeDataLeave:function(){this.form.leave_from_to=this.model2.date_from_to,this.form.reference_number=this.model2.DocumentReferenceNumber,this.model2.jenisCuti.includes("Cuti Family Visit")?this.form.payment="Ditagihkan kepada User/Departemen/Perusahaan":this.form.payment="Dibayar Tunai"},setLeaveList:function(data){this.leaveLists=data},setForm:function(form,e,t){var l=this;if(this.httpMethod=e,this.disabled=!0,this.form=Object.assign({},form),"post"===e){var o=new Date,dd=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),r=o.getFullYear();o=r+"-"+n+"-"+dd,this.form.paper_date=o,this.display=!0,this.form.payment="Dibayar Tunai",this.form.for_self=t}else this.display=!0,this.$emit("leaveList",this.form.id_card),setTimeout((function(){l.form=Object.assign({},form),l.form.for_self=t}),300)},close:function(){this.$emit("close")},save:function(){this.$emit("save",{form:this.form,defaultForm:this.defaultForm})}}},n=l(81),r=l(89),d=l.n(r),m=l(609),c=l(106),f=l(123),v=l(54),_=l(861),h=l(597),x=l(598),k=l(595),y=l(50),C=l(573),w=l(607),$=l(279),D=l(186),S=l(796),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-card",[l("v-card-title",[l("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.formTitle)}})]),e._v(" "),l("v-card-text",[l("v-form",[l("v-layout",{attrs:{wrap:""}},[l("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[l("v-layout",{attrs:{wrap:""}},["patch"!==e.httpMethod?l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-select",{attrs:{items:e.itemYesNo,label:"Apakah Form Ini Untuk Karyawan?","item-text":"text","item-value":"Value",outlined:"",dense:"","hide-details":"auto"},on:{change:e.changeSelect},model:{value:e.form.for_self,callback:function(t){e.$set(e.form,"for_self",t)},expression:"form.for_self"}})],1):e._e(),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-menu",{ref:"menu2",attrs:{disabled:e.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[l("v-text-field",e._g(e._b({attrs:{label:"Tanggal Surat","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.paper_date,callback:function(t){e.$set(e.form,"paper_date",t)},expression:"form.paper_date"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),l("v-date-picker",{attrs:{readonly:"","no-title":""},on:{input:function(t){e.menu2=!1}},model:{value:e.form.paper_date,callback:function(t){e.$set(e.form,"paper_date",t)},expression:"form.paper_date"}})],1)],1),e._v(" "),"Non Karyawan"===e.form.for_self?l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{xs12:""}},[l("v-text-field",{attrs:{label:"Nama",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.user_name,callback:function(t){e.$set(e.form,"user_name",t)},expression:"form.user_name"}})],1):e._e(),e._v(" "),"Karyawan"===e.form.for_self?l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{xs12:""}},[l("v-autocomplete",{attrs:{items:e.entries,loading:e.isLoading,"item-text":"Name","item-value":"Nik","hide-no-data":"","hide-selected":"",label:"Nama Karyawan",placeholder:"Nama Karyawan",outlined:"",dense:"","hide-details":"auto","return-object":""},on:{change:e.changeData},scopedSlots:e._u([{key:"item",fn:function(t){var o=t.item;return[l("v-list-item-content",[l("v-list-item-title",{domProps:{textContent:e._s(o.Name)}}),e._v(" "),l("v-list-item-subtitle",{domProps:{textContent:e._s(o.Nik)}})],1)]}}],null,!1,2545025527),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1):e._e(),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"No. ID Card",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.id_card,callback:function(t){e.$set(e.form,"id_card",t)},expression:"form.id_card"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"NIK KTP",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.ktp,callback:function(t){e.$set(e.form,"ktp",t)},expression:"form.ktp"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Departemen",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Perusahaan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Jabatan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.occupation,callback:function(t){e.$set(e.form,"occupation",t)},expression:"form.occupation"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Nomor Telepon Aktif",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.no_hp,callback:function(t){e.$set(e.form,"no_hp",t)},expression:"form.no_hp"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[l("v-textarea",{attrs:{disabled:e.disabled,label:"Alamat Domisili",rows:"2",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),"Karyawan"===e.form.for_self?l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[l("v-autocomplete",{attrs:{disabled:e.disabled,items:e.leaveLists,loading:e.isLoading,"item-text":"date_from_to","item-value":"date_from_to","hide-no-data":"","hide-selected":"",label:"Tanggal Cuti / Perjalanan Dinas",placeholder:"Tanggal Cuti / Perjalanan Dinas",outlined:"",dense:"","return-object":"","hide-details":"auto"},on:{change:e.changeDataLeave},scopedSlots:e._u([{key:"item",fn:function(t){var o=t.item;return[l("v-list-item-content",[l("v-list-item-title",{domProps:{textContent:e._s(o.date_from_to)}}),e._v(" "),l("v-list-item-subtitle",{domProps:{textContent:e._s(o.jenisCuti)}})],1)]}}],null,!1,2081300981),model:{value:e.model2,callback:function(t){e.model2=t},expression:"model2"}})],1):e._e(),e._v(" "),"Karyawan"===e.form.for_self?l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"No Cuti / Perjalanan Dinas",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.reference_number,callback:function(t){e.$set(e.form,"reference_number",t)},expression:"form.reference_number"}})],1):e._e(),e._v(" "),"Non Karyawan"===e.form.for_self?l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Tanggal Cuti / Perjalanan Dinas",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.leave_from_to,callback:function(t){e.$set(e.form,"leave_from_to",t)},expression:"form.leave_from_to"}})],1):e._e(),e._v(" "),"Non Karyawan"===e.form.for_self?l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",sm12:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"No Cuti / Perjalanan Dinas",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.reference_number,callback:function(t){e.$set(e.form,"reference_number",t)},expression:"form.reference_number"}})],1):e._e(),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[l("v-select",{attrs:{disabled:e.disabled,items:e.itemBilling,label:"Penagihan dilakukan melalui ?","item-text":"text","item-value":"Value",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.payment,callback:function(t){e.$set(e.form,"payment",t)},expression:"form.payment"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[l("span",{staticClass:"font-weight-bold"},[e._v("Form Masuk Kawasan")])]),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Keperluan Masuk Kawasan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Periode Tinggal di Kawasan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.period_stay,callback:function(t){e.$set(e.form,"period_stay",t)},expression:"form.period_stay"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-menu",{ref:"menu1",attrs:{disabled:e.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[l("v-text-field",e._g(e._b({attrs:{label:"Jadwal Masuk Kawasan","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.date_in,callback:function(t){e.$set(e.form,"date_in",t)},expression:"form.date_in"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[e._v(" "),l("v-date-picker",{attrs:{"no-title":"",readonly:e.disabled},on:{input:function(t){e.menu1=!1}},model:{value:e.form.date_in,callback:function(t){e.$set(e.form,"date_in",t)},expression:"form.date_in"}})],1)],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Transportasi",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.transportation,callback:function(t){e.$set(e.form,"transportation",t)},expression:"form.transportation"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Jalur",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.route,callback:function(t){e.$set(e.form,"route",t)},expression:"form.route"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Nama Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.name_boss,callback:function(t){e.$set(e.form,"name_boss",t)},expression:"form.name_boss"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Jabatan Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.position_boss,callback:function(t){e.$set(e.form,"position_boss",t)},expression:"form.position_boss"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"NIK Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.nik_boss,callback:function(t){e.$set(e.form,"nik_boss",t)},expression:"form.nik_boss"}})],1),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-menu",{ref:"menu3",attrs:{disabled:e.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[l("v-text-field",e._g(e._b({attrs:{label:"Tanggal Swab","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.swab_date,callback:function(t){e.$set(e.form,"swab_date",t)},expression:"form.swab_date"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu3,callback:function(t){e.menu3=t},expression:"menu3"}},[e._v(" "),l("v-date-picker",{attrs:{readonly:e.disabled,"no-title":""},on:{input:function(t){e.menu3=!1}},model:{value:e.form.swab_date,callback:function(t){e.$set(e.form,"swab_date",t)},expression:"form.swab_date"}})],1)],1),e._v(" "),e.checkSwabDate(e.form.swab_date)?l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-text-field",{attrs:{disabled:e.disabled,label:"Keterangan",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.reason_swab,callback:function(t){e.$set(e.form,"reason_swab",t)},expression:"form.reason_swab"}})],1):e._e(),e._v(" "),"active"===e.form.status?l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e.checkClinic()?l("v-select",{attrs:{items:["Positif","Negatif"],label:"Response Dari Klinik",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.clinic_response,callback:function(t){e.$set(e.form,"clinic_response",t)},expression:"form.clinic_response"}}):e._e()],1):e._e(),e._v(" "),l("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[l("v-btn",{staticClass:"white--text",attrs:{color:"orange darken-1",small:""},on:{click:function(t){return e.$emit("openAttachment",e.form)}}},[e._v("\n                Upload Attachment\n              ")])],1)],1)],1)],1)],1)],1),e._v(" "),l("v-card-actions",[l("v-spacer"),e._v(" "),l("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(t){return e.close()}}},[e._v("\n      Close\n    ")]),e._v(" "),l("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",disabled:e.checkDisabled(),loading:e.submitLoad},on:{click:function(t){return e.save()}}},[e._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAutocomplete:m.a,VBtn:c.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VDatePicker:_.a,VFlex:h.a,VForm:x.a,VLayout:k.a,VListItemContent:y.a,VListItemSubtitle:y.b,VListItemTitle:y.c,VMenu:C.a,VSelect:w.a,VSpacer:$.a,VTextField:D.a,VTextarea:S.a})}}]);