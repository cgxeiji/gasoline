(this.webpackJsonpgasoline=this.webpackJsonpgasoline||[]).push([[0],{83:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(15),r=n.n(c),s=(n(83),n(27)),o=n(8),u=(n(84),n(54),n(36)),d=n(55),l=(n(92),n(10));function j(){return(d.a.AuthUI.getInstance()||new d.a.AuthUI(u.a.auth())).start("#firebaseui-auth-container",{callbacks:{signInSuccessWithAuthResult:function(e,t){return console.log("logged"),!1},uiShown:function(){document.getElementById("loader").style.display="none"}},signInOptions:[{provider:u.a.auth.EmailAuthProvider.PROVIDER_ID},{provider:u.a.auth.GoogleAuthProvider.PROVIDER_ID}]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{id:"firebaseui-auth-container"}),Object(l.jsx)("div",{id:"loader",children:"Loading"})]})}var b=n(46),p=n(56),h=n(71),O=n(137),g=n(133),m=n(40),f=n(134),x=n(138),v=n(139),I=n(128),y=n(131),k=n(142),S=n(135),w=n(136);function A(e){var t=Object(I.a)((function(e){return{root:{padding:e.spacing(3)},button:{marginTop:e.spacing(2)}}}))(),n=Object(a.useState)(""),i=Object(s.a)(n,2),c=i[0],r=i[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),d=u[0],j=u[1];return Object(l.jsxs)(y.a,{className:t.root,children:[Object(l.jsx)(k.a,{variant:"outlined",fullWidth:!0,margin:"normal",id:"gas",label:"Gasoline",placeholder:"0.00",InputProps:{endAdornment:Object(l.jsx)(S.a,{position:"end",children:"L"})},InputLabelProps:{shrink:!0},value:c,type:"number",autoComplete:"off",onChange:function(e){r(e.target.value)}}),Object(l.jsx)(k.a,{variant:"outlined",fullWidth:!0,margin:"normal",id:"distance",label:"Distance",InputProps:{endAdornment:Object(l.jsx)(S.a,{position:"end",children:"km"})},InputLabelProps:{shrink:!0},placeholder:"0.0",type:"number",autoComplete:"off",value:d,onChange:function(e){j(e.target.value)}}),Object(l.jsxs)(m.a,{variant:"h2",component:"p",color:"secondary",children:[(0!==c&&""!==c?d/c:0).toFixed(2)," km/L"]}),Object(l.jsx)(w.a,{className:t.button,variant:"contained",size:"large",fullWidth:!0,onClick:function(t){0!==c&&""!==c&&0!==d&&""!==d&&(e.newEntry({gas:c,distance:d}),r(""),j(""))},children:"Add!"})]})}function D(e){var t=Object(I.a)((function(e){return{root:{}}}))();return Object(l.jsx)("div",{className:t.root,children:Object(l.jsx)(g.a,{children:Object(l.jsx)(A,{newEntry:e.newEntry})})})}n(97);function P(e){var t=u.a.database(),n=t.ref("entries"),i=t.ref("users"),c=Object(I.a)((function(e){return{root:{marginTop:e.spacing(2)},paper:{marginTop:e.spacing(2),padding:e.spacing(2)}}}))(),r=Object(a.useState)([]),o=Object(s.a)(r,2),d=o[0],j=o[1];return Object(a.useEffect)((function(){""!==e.userId&&i.child(e.userId).on("child_added",(function(e){e.exists()&&n.child(e.key).once("value").then((function(e){j((function(t){return[e.val()].concat(Object(h.a)(t))}))}))}))}),[e.userId]),Object(l.jsx)("div",{className:c.root,children:Object(l.jsxs)(O.a,{container:!0,spacing:1,children:[Object(l.jsx)(O.a,{item:!0,xs:12,children:Object(l.jsx)(D,{newEntry:function(t){var a=Object(p.a)(Object(p.a)({},t),{},{timestamp:Date.now()}),c=n.push(a).key;i.child(e.userId).update(Object(b.a)({},c,!0))}})}),Object(l.jsx)(O.a,{item:!0,xs:12,children:Object(l.jsxs)(g.a,{className:c.paper,children:[Object(l.jsx)(m.a,{variant:"h4",component:"h2",children:"History"}),Object(l.jsx)(f.a,{children:d.map((function(e,t){return Object(l.jsx)(x.a,{children:Object(l.jsx)(v.a,{primary:(e.distance/e.gas).toFixed(2)+" km/L",secondary:new Date(e.timestamp).toDateString()+": "+parseFloat(e.gas).toFixed(2)+" L  "+parseFloat(e.distance).toFixed(1)+" km"})},t)}))})]})})]})})}var E=n(70),F=n(140),L=n(141);o.a.apps.length?o.a.app():o.a.initializeApp({apiKey:"AIzaSyD2Rcw4A9HY75t31I6gRJ5NRPuKQI8i5qM",authDomain:"gasoline-74552.firebaseapp.com",databaseURL:"https://gasoline-74552-default-rtdb.firebaseio.com",projectId:"gasoline-74552",storageBucket:"gasoline-74552.appspot.com",messagingSenderId:"150789751948",appId:"1:150789751948:web:067408953b959b593227a9",measurementId:"G-H96X7QRV82"});var R=function(){var e=i.a.useMemo((function(){return Object(E.a)({palette:{type:"dark"}})}),[true]),t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(""),d=Object(s.a)(u,2),b=d[0],p=d[1];return o.a.auth().onAuthStateChanged((function(e){e?(r(!0),p(e.uid)):r(!1)}),(function(e){console.log(e)})),Object(l.jsxs)(F.a,{theme:e,children:[Object(l.jsx)(L.a,{}),Object(l.jsx)(y.a,{maxWidth:"sm",children:c?Object(l.jsx)(P,{userId:b}):Object(l.jsx)(j,{})})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root")),C()}},[[98,1,2]]]);
//# sourceMappingURL=main.3e0f4976.chunk.js.map