(this["webpackJsonphome-work-ignat"]=this["webpackJsonphome-work-ignat"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={link:"Header_link__2R6qe",active_link:"Header_active_link__3AdIu",dropdown:"Header_dropdown__3A4xY",dropBtn:"Header_dropBtn__3tpdB",dropdown_content:"Header_dropdown_content__3yUx0"}},,,function(e,t,n){e.exports={someClass:"Affairs_someClass__184b9",btnFilter:"Affairs_btnFilter__gOjT5",btnActive:"Affairs_btnActive__l75ro",low:"Affairs_low__30b_J",middle:"Affairs_middle__1FjQq",high:"Affairs_high__WkYyE",nameAffair:"Affairs_nameAffair__2GZ2q",btnDel:"Affairs_btnDel__2nwTt"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__1W1zy",error:"Greeting_error__3u6Hx",errorItem:"Greeting_errorItem__3b3pS",btn_add:"Greeting_btn_add__2yBlD",btn_block:"Greeting_btn_block__2u1LW",counter:"Greeting_counter__2Kr_-",text_container:"Greeting_text_container__TrCST"}},,function(e,t,n){e.exports={message:"Message_message__1pYz0",img_icon:"Message_img_icon__16oQc",message_item:"Message_message_item__3SNWT",name:"Message_name__WD98L",text:"Message_text__OyyEn",time:"Message_time__1UWnX"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2qyeV",errorInput:"SuperInputText_errorInput__1gKL3",error:"SuperInputText_error__3TJcK",inp:"SuperInputText_inp__VlSJz"}},,,function(e,t,n){e.exports={blue:"HW4_blue__svwkS",column:"HW4_column__3L4XH",testSpanError:"HW4_testSpanError__2kawt"}},function(e,t,n){e.exports={default:"SuperButton_default__3a8TN",red:"SuperButton_red__sicyb",button:"SuperButton_button__3gTf6",blink:"SuperButton_blink__11uJ_"}},,function(e,t,n){e.exports={App:"App_App__wiWT9",focus:"App_focus__1RLLP"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2plA2",spanClassName:"SuperCheckbox_spanClassName__LiGGV"}},,,,function(e,t,n){e.exports={container:"Error404_container__VJeeb"}},,,function(e,t,n){e.exports={border_text:"SuperEditableSpan_border_text__3sdww"}},function(e,t,n){e.exports={wrapper_HW6:"HW6_wrapper_HW6__3vyAP"}},,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(18),s=n.n(c),i=(n(39),n(22)),o=n.n(i),l=n(12),j=n(6),u=n.n(j),b=n(3),d=n(27),_=n.n(d),h=n(0),x={color:"white",fontWeight:"700",fontSize:"24px"};var O=function(){return Object(h.jsxs)("div",{className:_.a.container,children:[Object(h.jsx)("div",{style:x,children:"404"}),Object(h.jsx)("div",{style:x,children:"Page not found!"}),Object(h.jsx)("div",{children:"Please use the navigation."}),Object(h.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},m=n(13),p=n.n(m);var f=function(e){return Object(h.jsxs)("div",{className:p.a.message,children:[Object(h.jsx)("div",{className:p.a.img_icon,children:Object(h.jsx)("img",{width:50,height:50,src:e.avatar,alt:"Icon Avatars"})}),Object(h.jsxs)("div",{className:p.a.message_item,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:p.a.name,children:e.name}),Object(h.jsx)("div",{className:p.a.text,children:e.message})]}),Object(h.jsx)("div",{className:p.a.time,children:e.time})]})]})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Some Name",k="some text",N="22:00";var C=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 1"}),Object(h.jsx)(f,{avatar:v,name:g,message:k,time:N}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},S=n(4),w=n(9),A=n.n(w),y=n(28),T=n.n(y);var H=function(e){return Object(h.jsxs)("div",{className:A.a.nameAffair,children:[Object(h.jsx)("p",{className:A.a[e.affair.priority],children:e.affair.name}),Object(h.jsx)(T.a,{className:A.a.btnDel,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var I=function(e){var t=e.data.map((function(t){return Object(h.jsx)(H,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return e.filter===t?A.a.btnFilter+" "+A.a.btnActive:A.a.btnFilter};return Object(h.jsxs)("div",{children:[t,Object(h.jsx)("button",{className:n("all"),onClick:function(){return e.setFilter("all")},children:"All"}),Object(h.jsx)("button",{className:n("low"),onClick:function(){return e.setFilter("low")},children:"Low"}),Object(h.jsx)("button",{className:n("middle"),onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(h.jsx)("button",{className:n("high"),onClick:function(){return e.setFilter("high")},children:"High"})]})},W=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(r.useState)(W),t=Object(S.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(S.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(h.jsxs)("div",{className:A.a.someClass,children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 2"}),Object(h.jsx)(I,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},F=n(33),P=n(11),B=n.n(P),J=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.onKeyDownAddName,i=""===a?"":B.a.error,o=""===a?B.a.btn_add:B.a.btn_add+" "+B.a.btn_block,l=""!==a;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:B.a.text_container,children:[Object(h.jsx)("input",{value:t,onChange:n,onKeyPress:s,className:i}),Object(h.jsx)("button",{disabled:l,className:o,onClick:r,children:"Add"})]}),Object(h.jsxs)("div",{className:B.a.counter,children:["Count Users: ",c]}),Object(h.jsx)("div",{className:B.a.errorItem,children:a})]})},G=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(S.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(S.a)(o,2),j=l[0],u=l[1],b=function(){alert("Hello  ".concat(s,"!")),n(s),i("")},d=t.length;return Object(h.jsx)(J,{name:s,setNameCallback:function(e){return i(e.currentTarget.value),/[1-9]/g.test(e.currentTarget.value)?u("Name must contain only letters."):e.currentTarget.value.length<=1?u("Name is short. Please enter a valid name."):u("")},addUser:b,error:j,totalUsers:d,onKeyDownAddName:function(e){"Enter"===e.key&&b()}})},D=n(60);var K=function(){var e=Object(r.useState)([]),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 3"}),Object(h.jsx)(G,{users:n,addUserCallback:function(e){var t={_id:Object(D.a)(),name:e};a([t].concat(Object(F.a)(n)))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},U=n(8),L=n(10),M=n(16),q=n.n(M),z=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(L.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(q.a.error," ").concat(i||""),j="".concat(q.a.inp," ").concat(c?q.a.errorInput:q.a.superInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(U.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},o)),c&&Object(h.jsx)("span",{className:l,children:c})]})},V=n(19),R=n.n(V),X=n(20),Y=n.n(X),Q=function(e){var t=e.red,n=e.className,r=Object(L.a)(e,["red","className"]),a="".concat(Y.a.button," ").concat(t?Y.a.red:Y.a.default," ").concat(n);return Object(h.jsx)("button",Object(U.a)({className:a},r))},Z=n(23),$=n.n(Z),ee=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(L.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat($.a.checkbox," ").concat(r||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(U.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(h.jsx)("span",{className:$.a.spanClassName,children:a})]})};var te=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(S.a)(i,2),l=o[0],j=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 4"}),Object(h.jsxs)("div",{className:R.a.column,children:[Object(h.jsx)(z,{value:n,onChangeText:a,onEnter:s,error:c,spanClassName:R.a.testSpanError}),Object(h.jsx)(z,{className:R.a.blue}),Object(h.jsx)(Q,{children:"default"}),Object(h.jsx)(Q,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(Q,{disabled:!0,children:"disabled"}),Object(h.jsx)(ee,{checked:l,onChangeChecked:j,children:"Touch me! "}),Object(h.jsx)(ee,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},ne=n(30),re=n.n(ne),ae=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(L.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(S.a)(s,2),o=i[0],l=i[1],j=a||{},u=j.children,b=j.onDoubleClick,d=j.className,_=Object(L.a)(j,["children","onDoubleClick","className"]),x="".concat(re.a.border_text," ").concat(d);return Object(h.jsx)(h.Fragment,{children:o?Object(h.jsx)(z,Object(U.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(h.jsx)("span",Object(U.a)(Object(U.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:x},_),{},{children:u||c.value}))})};function ce(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function se(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}ce("test",{x:"A",y:1});se("test",{x:"",y:0});var ie=n(31),oe=n.n(ie),le=n(32),je=n.n(le);var ue=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 6"}),Object(h.jsxs)("div",{className:oe.a.wrapper_HW6,children:[Object(h.jsxs)("div",{children:[" ",Object(h.jsx)(ae,{value:n,onChangeText:a,spanProps:{children:n?void 0:"Please enter text..."}})," ",Object(h.jsx)(je.a,{fontSize:"small"})]}),Object(h.jsx)(Q,{onClick:function(){ce("editable-span-value",n)},children:"save"}),Object(h.jsx)(Q,{onClick:function(){a(se("editable-span-value",n))},children:"restore"})]})]})};var be=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{}),Object(h.jsx)(E,{}),Object(h.jsx)(K,{}),Object(h.jsx)(te,{}),Object(h.jsx)(ue,{})]})};var de=function(){return Object(h.jsx)("div",{children:"Something will be here soon"})};var _e=function(){return Object(h.jsx)("div",{children:"Something will be here soon"})},he="/pre-junior",xe="/junior",Oe="/junior+";var me=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",element:Object(h.jsx)(b.a,{to:he})}),Object(h.jsx)(b.b,{path:he,element:Object(h.jsx)(be,{})}),Object(h.jsx)(b.b,{path:xe,element:function(){return Object(h.jsx)(de,{})}}),Object(h.jsx)(b.b,{path:Oe,element:function(){return Object(h.jsx)(_e,{})}}),Object(h.jsx)(b.b,{path:"*",element:Object(h.jsx)(O,{})})]})})};var pe=function(){return Object(h.jsxs)("div",{className:u.a.dropdown,children:[Object(h.jsx)("button",{className:u.a.dropBtn,children:"View All HomeWorks"}),Object(h.jsxs)("div",{className:u.a.dropdown_content,children:[Object(h.jsx)(l.b,{to:he,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Pre Junior"}),Object(h.jsx)(l.b,{to:xe,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Junior"}),Object(h.jsx)(l.b,{to:Oe,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Junior+"})]})]})};var fe=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(pe,{}),Object(h.jsx)(me,{})]})})};var ve=function(){return Object(h.jsx)("div",{className:o.a.App,children:Object(h.jsxs)("div",{className:o.a.focus,children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"React homeworks:"})}),Object(h.jsx)(fe,{})]})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(ve,{})}),document.getElementById("root"))}],[[47,1,2]]]);
//# sourceMappingURL=main.30a39731.chunk.js.map