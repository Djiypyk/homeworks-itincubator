(this["webpackJsonphome-work-ignat"]=this["webpackJsonphome-work-ignat"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={link:"Header_link__2R6qe",active_link:"Header_active_link__3AdIu",dropdown:"Header_dropdown__3A4xY",dropBtn:"Header_dropBtn__3tpdB",dropdown_content:"Header_dropdown_content__3yUx0"}},,function(e,t,n){e.exports={someClass:"Affairs_someClass__184b9",btnFilter:"Affairs_btnFilter__gOjT5",btnActive:"Affairs_btnActive__l75ro",low:"Affairs_low__30b_J",middle:"Affairs_middle__1FjQq",high:"Affairs_high__WkYyE",nameAffair:"Affairs_nameAffair__2GZ2q",btnDel:"Affairs_btnDel__2nwTt"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__1W1zy",error:"Greeting_error__3u6Hx",errorItem:"Greeting_errorItem__3b3pS",btn_add:"Greeting_btn_add__2yBlD",btn_block:"Greeting_btn_block__2u1LW",counter:"Greeting_counter__2Kr_-",text_container:"Greeting_text_container__TrCST"}},,function(e,t,n){e.exports={message:"Message_message__1pYz0",img_icon:"Message_img_icon__16oQc",message_item:"Message_message_item__3SNWT",name:"Message_name__WD98L",text:"Message_text__OyyEn",time:"Message_time__1UWnX"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2qyeV",errorInput:"SuperInputText_errorInput__1gKL3",error:"SuperInputText_error__3TJcK",inp:"SuperInputText_inp__VlSJz"}},function(e,t,n){e.exports={blue:"HW4_blue__svwkS",column:"HW4_column__3L4XH",testSpanError:"HW4_testSpanError__2kawt"}},function(e,t,n){e.exports={default:"SuperButton_default__3a8TN",red:"SuperButton_red__sicyb",button:"SuperButton_button__3gTf6",blink:"SuperButton_blink__11uJ_"}},,function(e,t,n){e.exports={App:"App_App__wiWT9",focus:"App_focus__1RLLP"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2plA2",spanClassName:"SuperCheckbox_spanClassName__LiGGV"}},,function(e,t,n){e.exports={container:"Error404_container__VJeeb"}},function(e,t,n){e.exports={border_text:"SuperEditableSpan_border_text__3sdww"}},function(e,t,n){e.exports={wrapper_HW6:"HW6_wrapper_HW6__3vyAP"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(20),s=n.n(c),i=(n(29),n(18)),o=n.n(i),l=n(10),j=n(5),u=n.n(j),b=n(2),d=n(21),_=n.n(d),h=n(0),x={color:"white",fontWeight:"700",fontSize:"24px"};var O=function(){return Object(h.jsxs)("div",{className:_.a.container,children:[Object(h.jsx)("div",{style:x,children:"404"}),Object(h.jsx)("div",{style:x,children:"Page not found!"}),Object(h.jsx)("div",{children:"Please use the navigation."}),Object(h.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},m=n(11),p=n.n(m);var f=function(e){return Object(h.jsxs)("div",{className:p.a.message,children:[Object(h.jsx)("div",{className:p.a.img_icon,children:Object(h.jsx)("img",{width:50,height:50,src:e.avatar,alt:"Icon Avatars"})}),Object(h.jsxs)("div",{className:p.a.message_item,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:p.a.name,children:e.name}),Object(h.jsx)("div",{className:p.a.text,children:e.message})]}),Object(h.jsx)("div",{className:p.a.time,children:e.time})]})]})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Some Name",k="some text",N="22:00";var C=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 1"}),Object(h.jsx)(f,{avatar:v,name:g,message:k,time:N}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},S=n(3),w=n(7),A=n.n(w);var y=function(e){return Object(h.jsxs)("div",{className:A.a.nameAffair,children:[Object(h.jsx)("p",{className:A.a[e.affair.priority],children:e.affair.name}),Object(h.jsx)("button",{className:A.a.btnDel,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var T=function(e){var t=e.data.map((function(t){return Object(h.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return e.filter===t?A.a.btnFilter+" "+A.a.btnActive:A.a.btnFilter};return Object(h.jsxs)("div",{children:[t,Object(h.jsx)("button",{className:n("all"),onClick:function(){return e.setFilter("all")},children:"All"}),Object(h.jsx)("button",{className:n("low"),onClick:function(){return e.setFilter("low")},children:"Low"}),Object(h.jsx)("button",{className:n("middle"),onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(h.jsx)("button",{className:n("high"),onClick:function(){return e.setFilter("high")},children:"High"})]})},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(r.useState)(H),t=Object(S.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(S.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(h.jsxs)("div",{className:A.a.someClass,children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 2"}),Object(h.jsx)(T,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},W=n(24),E=n(9),F=n.n(E),P=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.onKeyDownAddName,i=""===a?"":F.a.error,o=""===a?F.a.btn_add:F.a.btn_add+" "+F.a.btn_block,l=""!==a;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:F.a.text_container,children:[Object(h.jsx)("input",{value:t,onChange:n,onKeyPress:s,className:i}),Object(h.jsx)("button",{disabled:l,className:o,onClick:r,children:"Add"})]}),Object(h.jsxs)("div",{className:F.a.counter,children:["Count Users: ",c]}),Object(h.jsx)("div",{className:F.a.errorItem,children:a})]})},B=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(S.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(S.a)(o,2),j=l[0],u=l[1],b=function(){alert("Hello  ".concat(s,"!")),n(s),i("")},d=t.length;return Object(h.jsx)(P,{name:s,setNameCallback:function(e){return i(e.currentTarget.value),/[1-9]/g.test(e.currentTarget.value)?u("Name must contain only letters."):e.currentTarget.value.length<=1?u("Name is short. Please enter a valid name."):u("")},addUser:b,error:j,totalUsers:d,onKeyDownAddName:function(e){"Enter"===e.key&&b()}})},J=n(33);var G=function(){var e=Object(r.useState)([]),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 3"}),Object(h.jsx)(B,{users:n,addUserCallback:function(e){var t={_id:Object(J.a)(),name:e};a([t].concat(Object(W.a)(n)))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},D=n(6),K=n(8),U=n(14),L=n.n(U),M=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(K.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(L.a.error," ").concat(i||""),j="".concat(L.a.inp," ").concat(c?L.a.errorInput:L.a.superInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(D.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},o)),c&&Object(h.jsx)("span",{className:l,children:c})]})},q=n(15),V=n.n(q),z=n(16),R=n.n(z),X=function(e){var t=e.red,n=e.className,r=Object(K.a)(e,["red","className"]),a="".concat(R.a.button," ").concat(t?R.a.red:R.a.default," ").concat(n);return Object(h.jsx)("button",Object(D.a)({className:a},r))},Y=n(19),Q=n.n(Y),Z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(K.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(r||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(D.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(h.jsx)("span",{className:Q.a.spanClassName,children:a})]})};var $=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(S.a)(i,2),l=o[0],j=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 4"}),Object(h.jsxs)("div",{className:V.a.column,children:[Object(h.jsx)(M,{value:n,onChangeText:a,onEnter:s,error:c,spanClassName:V.a.testSpanError}),Object(h.jsx)(M,{className:V.a.blue}),Object(h.jsx)(X,{children:"default"}),Object(h.jsx)(X,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(X,{disabled:!0,children:"disabled"}),Object(h.jsx)(Z,{checked:l,onChangeChecked:j,children:"Touch me! "}),Object(h.jsx)(Z,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},ee=n(22),te=n.n(ee),ne=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(K.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(S.a)(s,2),o=i[0],l=i[1],j=a||{},u=j.children,b=j.onDoubleClick,d=j.className,_=Object(K.a)(j,["children","onDoubleClick","className"]),x="".concat(te.a.border_text," ").concat(d);return Object(h.jsx)(h.Fragment,{children:o?Object(h.jsx)(M,Object(D.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(h.jsx)("span",Object(D.a)(Object(D.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:x},_),{},{children:u||c.value}))})};function re(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ae(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}re("test",{x:"A",y:1});ae("test",{x:"",y:0});var ce=n(23),se=n.n(ce);var ie=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 6"}),Object(h.jsxs)("div",{className:se.a.wrapper_HW6,children:[Object(h.jsx)(ne,{value:n,onChangeText:a,spanProps:{children:n?void 0:"Please enter text..."}}),Object(h.jsx)(X,{onClick:function(){re("editable-span-value",n)},children:"save"}),Object(h.jsx)(X,{onClick:function(){a(ae("editable-span-value",n))},children:"restore"})]})]})};var oe=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{}),Object(h.jsx)(I,{}),Object(h.jsx)(G,{}),Object(h.jsx)($,{}),Object(h.jsx)(ie,{})]})};var le=function(){return Object(h.jsx)("div",{children:"Something will be here soon"})};var je=function(){return Object(h.jsx)("div",{children:"Something will be here soon"})},ue="/pre-junior",be="/junior",de="/junior+";var _e=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",element:Object(h.jsx)(b.a,{to:ue})}),Object(h.jsx)(b.b,{path:ue,element:Object(h.jsx)(oe,{})}),Object(h.jsx)(b.b,{path:be,element:function(){return Object(h.jsx)(le,{})}}),Object(h.jsx)(b.b,{path:de,element:function(){return Object(h.jsx)(je,{})}}),Object(h.jsx)(b.b,{path:"*",element:Object(h.jsx)(O,{})})]})})};var he=function(){return Object(h.jsxs)("div",{className:u.a.dropdown,children:[Object(h.jsx)("button",{className:u.a.dropBtn,children:"View All HomeWorks"}),Object(h.jsxs)("div",{className:u.a.dropdown_content,children:[Object(h.jsx)(l.b,{to:ue,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Pre Junior"}),Object(h.jsx)(l.b,{to:be,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Junior"}),Object(h.jsx)(l.b,{to:de,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Junior+"})]})]})};var xe=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(he,{}),Object(h.jsx)(_e,{})]})})};var Oe=function(){return Object(h.jsx)("div",{className:o.a.App,children:Object(h.jsxs)("div",{className:o.a.focus,children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"React homeworks:"})}),Object(h.jsx)(xe,{})]})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Oe,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.ef537397.chunk.js.map