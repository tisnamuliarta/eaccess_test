(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{715:function(e,t,n){var content=n(748);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("0da5a3e5",content,!0,{sourceMap:!1})},747:function(e,t,n){"use strict";n(715)},748:function(e,t,n){var o=n(19)(!1);o.push([e.i,".logo[data-v-91731a80]{max-width:180px;margin:0 auto;text-align:center}",""]),e.exports=o},868:function(e,t,n){"use strict";n.r(t);var o=n(34),r=(n(100),n(43),n(74),n(359)),c={name:"LoginPage",layout:"auth",middleware:"guest",created:function(){this.cekSession()},methods:{cekSession:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c,d,l,h,m,v,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$auth,e.$auth.$storage.removeState("sessions_key"),o=r.a.load({monitoring:!1}),t.next=5,o;case 5:return c=t.sent,t.next=8,c.get();case 8:return d=t.sent,l=d.visitorId,h=l,e.$auth.$storage.setState("sessions_key",h),e.$auth.$storage.setLocalStorage("app.default_name","E-FORM"),e.$route.query.sessions_key?(h=e.$route.query.sessions_key,e.$router.replace("/")):e.$auth.$storage.getState("sessions_key")?"false"===(h=e.$auth.$storage.getState("sessions_key"))&&(window.location.href="https://appdev.imip.co.id/e-portal/login?service=https://appdev.imip.co.id/eaccess_test"):window.location.href="https://appdev.imip.co.id/e-portal/login?service=https://appdev.imip.co.id/eaccess_test",t.next=16,e.$axios.get("https://appdev.imip.co.id/e-portalapi/api/auth/session",{params:{sessions_key:h,base_url:"https://appdev.imip.co.id/eaccess_test"}});case 16:if(!(m=t.sent).data.session){t.next=27;break}return t.next=20,e.$axios.get("https://appdev.imip.co.id/e-portalapi/api/auth/me",{headers:{Authorization:"Bearer "+m.data.session.bearer_token}});case 20:return v=t.sent,t.next=23,n.loginWith("local",{data:{username:v.data.user.username,sessions_key:h,language:"en",app_name:"E-FORM"}});case 23:(f=t.sent).data.token||e.$swal({type:"error",title:f.data.auth.MessageTitle,text:f.data.auth.Message}),t.next=28;break;case 27:window.location.href="https://appdev.imip.co.id/e-portal/login?service=https://appdev.imip.co.id/eaccess_test";case 28:case"end":return t.stop()}}),t)})))()}}},d=(n(747),n(82)),l=n(90),h=n.n(l),m=n(583),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h5",{staticClass:"v-heading font-weight-medium text-center text-h5 text-sm-h6 my-5"},[e._v("\n    Redirecting...\n  ")])])}),[],!1,null,"91731a80",null);t.default=component.exports;h()(component,{VContainer:m.a})}}]);