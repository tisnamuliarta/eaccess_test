(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{607:function(t,e,n){"use strict";n(287);var r=n(288);e.a=Object(r.a)("flex")},885:function(t,e,n){"use strict";n.r(e);var r={name:"Verification",layout:"auth",middleware:"verification",data:function(){return{verification:null}},created:function(){this.getData()},methods:{getData:function(){var t=this,e=this.$route.query.ref;this.$axios.get("/api/verification-document/null",{params:{ref:e}}).then((function(e){t.verification=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},o=n(65),c=n(83),l=n.n(c),d=n(126),f=n(52),v=n(591),m=n(607),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-flex",{attrs:{md6:"","offset-md3":"",xs12:""}},[n("v-card",[n("v-card-title",{staticStyle:{"background-color":"green",color:"white"}},[t._v("\n        Verifikasi Dokumen\n      ")]),t._v(" "),n("v-card-text",[t.verification?n("span",{domProps:{innerHTML:t._s(t.verification)}}):n("span",[t._v("Dokumen tidak ditemukan")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:f.c,VCardTitle:f.d,VContainer:v.a,VFlex:m.a})}}]);