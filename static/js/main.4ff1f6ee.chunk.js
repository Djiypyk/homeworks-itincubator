(this["webpackJsonphome-work-ignat"]=this["webpackJsonphome-work-ignat"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={link:"Header_link__2R6qe",active_link:"Header_active_link__3AdIu",dropdown:"Header_dropdown__3A4xY",dropBtn:"Header_dropBtn__3tpdB",dropdown_content:"Header_dropdown_content__3yUx0"}},,function(e,t,n){e.exports={someClass:"Affairs_someClass__184b9",btnFilter:"Affairs_btnFilter__gOjT5",btnActive:"Affairs_btnActive__l75ro",low:"Affairs_low__30b_J",middle:"Affairs_middle__1FjQq",high:"Affairs_high__WkYyE",nameAffair:"Affairs_nameAffair__2GZ2q",btnDel:"Affairs_btnDel__2nwTt"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__1W1zy",error:"Greeting_error__3u6Hx",errorItem:"Greeting_errorItem__3b3pS",btn_add:"Greeting_btn_add__2yBlD",btn_block:"Greeting_btn_block__2u1LW",counter:"Greeting_counter__2Kr_-",text_container:"Greeting_text_container__TrCST"}},,function(e,t,n){e.exports={message:"Message_message__1pYz0",img_icon:"Message_img_icon__16oQc",message_item:"Message_message_item__3SNWT",name:"Message_name__WD98L",text:"Message_text__OyyEn",time:"Message_time__1UWnX"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2qyeV",errorInput:"SuperInputText_errorInput__1gKL3",error:"SuperInputText_error__3TJcK",inp:"SuperInputText_inp__VlSJz"}},,,,function(e,t,n){e.exports={blue:"HW4_blue__svwkS",column:"HW4_column__3L4XH",testSpanError:"HW4_testSpanError__2kawt"}},function(e,t,n){e.exports={default:"SuperButton_default__3a8TN",red:"SuperButton_red__sicyb",button:"SuperButton_button__3gTf6",blink:"SuperButton_blink__11uJ_"}},,function(e,t,n){e.exports={App:"App_App__wiWT9",focus:"App_focus__1RLLP"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2plA2",spanClassName:"SuperCheckbox_spanClassName__LiGGV"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__3OtEN",label:"SuperRadio_label__3pj6b"}},,,,function(e,t,n){e.exports={container:"Error404_container__VJeeb"}},,,function(e,t,n){e.exports={border_text:"SuperEditableSpan_border_text__3sdww"}},function(e,t,n){e.exports={wrapper_HW6:"HW6_wrapper_HW6__3vyAP"}},,function(e,t,n){e.exports={select:"SuperSelect_select__1Xvm5"}},function(e,t,n){e.exports={wrapper:"HW7_wrapper__2oTnL"}},function(e,t,n){e.exports={items:"HW8_items__1Yuqb"}},,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),s=n.n(c),i=(n(43),n(23)),o=n.n(i),l=n(12),j=n(8),u=n.n(j),b=n(3),d=n(29),h=n.n(d),O=n(0),x={color:"white",fontWeight:"700",fontSize:"24px"};var _=function(){return Object(O.jsxs)("div",{className:h.a.container,children:[Object(O.jsx)("div",{style:x,children:"404"}),Object(O.jsx)("div",{style:x,children:"Page not found!"}),Object(O.jsx)("div",{children:"Please use the navigation."}),Object(O.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},m=n(13),p=n.n(m);var f=function(e){return Object(O.jsxs)("div",{className:p.a.message,children:[Object(O.jsx)("div",{className:p.a.img_icon,children:Object(O.jsx)("img",{width:50,height:50,src:e.avatar,alt:"Icon Avatars"})}),Object(O.jsxs)("div",{className:p.a.message_item,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:p.a.name,children:e.name}),Object(O.jsx)("div",{className:p.a.text,children:e.message})]}),Object(O.jsx)("div",{className:p.a.time,children:e.time})]})]})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Some Name",k="some text",N="22:00";var C=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"Homeworks 1"}),Object(O.jsx)(f,{avatar:v,name:g,message:k,time:N}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},y=n(4),w=n(10),S=n.n(w),A=n(30),T=n.n(A);var H=function(e){return Object(O.jsxs)("div",{className:S.a.nameAffair,children:[Object(O.jsx)("p",{className:S.a[e.affair.priority],children:e.affair.name}),Object(O.jsx)(T.a,{className:S.a.btnDel,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var W=function(e){var t=e.data.map((function(t){return Object(O.jsx)(H,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return e.filter===t?S.a.btnFilter+" "+S.a.btnActive:S.a.btnFilter};return Object(O.jsxs)("div",{children:[t,Object(O.jsx)("button",{className:n("all"),onClick:function(){return e.setFilter("all")},children:"All"}),Object(O.jsx)("button",{className:n("low"),onClick:function(){return e.setFilter("low")},children:"Low"}),Object(O.jsx)("button",{className:n("middle"),onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(O.jsx)("button",{className:n("high"),onClick:function(){return e.setFilter("high")},children:"High"})]})},E=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(a.useState)(E),t=Object(y.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(y.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(O.jsxs)("div",{className:S.a.someClass,children:[Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"Homeworks 2"}),Object(O.jsx)(W,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},F=n(19),P=n(11),B=n.n(P),J=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onKeyDownAddName,i=""===r?"":B.a.error,o=""===r?B.a.btn_add:B.a.btn_add+" "+B.a.btn_block,l=""!==r;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:B.a.text_container,children:[Object(O.jsx)("input",{value:t,onChange:n,onKeyPress:s,className:i}),Object(O.jsx)("button",{disabled:l,className:o,onClick:a,children:"Add"})]}),Object(O.jsxs)("div",{className:B.a.counter,children:["Count Users: ",c]}),Object(O.jsx)("div",{className:B.a.errorItem,children:r})]})},G=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(y.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(y.a)(o,2),j=l[0],u=l[1],b=function(){alert("Hello  ".concat(s,"!")),n(s),i("")},d=t.length;return Object(O.jsx)(J,{name:s,setNameCallback:function(e){return i(e.currentTarget.value),/[1-9]/g.test(e.currentTarget.value)?u("Name must contain only letters."):e.currentTarget.value.length<=1?u("Name is short. Please enter a valid name."):u("")},addUser:b,error:j,totalUsers:d,onKeyDownAddName:function(e){"Enter"===e.key&&b()}})},D=n(64);var K=function(){var e=Object(a.useState)([]),t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"Homeworks 3"}),Object(O.jsx)(G,{users:n,addUserCallback:function(e){var t={_id:Object(D.a)(),name:e};r([t].concat(Object(F.a)(n)))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},L=n(7),U=n(6),M=n(16),q=n.n(M),z=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(q.a.error," ").concat(i||""),j="".concat(q.a.inp," ").concat(c?q.a.errorInput:q.a.superInput," ").concat(s);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(L.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(O.jsx)("span",{className:l,children:c})]})},R=n(20),V=n.n(R),X=n(21),Y=n.n(X),Q=function(e){var t=e.red,n=e.className,a=Object(U.a)(e,["red","className"]),r="".concat(Y.a.button," ").concat(t?Y.a.red:Y.a.default," ").concat(n);return Object(O.jsx)("button",Object(L.a)({className:r},a))},Z=n(24),$=n.n(Z),ee=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat($.a.checkbox," ").concat(a||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(L.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(O.jsx)("span",{className:$.a.spanClassName,children:r})]})};var te=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(y.a)(i,2),l=o[0],j=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"Homeworks 4"}),Object(O.jsxs)("div",{className:V.a.column,children:[Object(O.jsx)(z,{value:n,onChangeText:r,onEnter:s,error:c,spanClassName:V.a.testSpanError}),Object(O.jsx)(z,{className:V.a.blue}),Object(O.jsx)(Q,{children:"default"}),Object(O.jsx)(Q,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(Q,{disabled:!0,children:"disabled"}),Object(O.jsx)(ee,{checked:l,onChangeChecked:j,children:"Touch me! "}),Object(O.jsx)(ee,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},ne=n(32),ae=n.n(ne),re=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(U.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(y.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,b=j.onDoubleClick,d=j.className,h=Object(U.a)(j,["children","onDoubleClick","className"]),x="".concat(ae.a.border_text," ").concat(d);return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(z,Object(L.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(O.jsx)("span",Object(L.a)(Object(L.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:x},h),{},{children:u||c.value}))})};function ce(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function se(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ce("test",{x:"A",y:1});se("test",{x:"",y:0});var ie=n(33),oe=n.n(ie),le=n(34),je=n.n(le);var ue=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"Homeworks 6"}),Object(O.jsxs)("div",{className:oe.a.wrapper_HW6,children:[Object(O.jsxs)("div",{children:[" ",Object(O.jsx)(re,{value:n,onChangeText:r,spanProps:{children:n?void 0:"Please enter text..."}})," ",Object(O.jsx)(je.a,{fontSize:"small"})]}),Object(O.jsx)(Q,{onClick:function(){ce("editable-span-value",n)},children:"save"}),Object(O.jsx)(Q,{onClick:function(){r(se("editable-span-value",n))},children:"restore"})]})]})};var be=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{}),Object(O.jsx)(I,{}),Object(O.jsx)(K,{}),Object(O.jsx)(te,{}),Object(O.jsx)(ue,{})]})},de=n(35),he=n.n(de),Oe=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(U.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)})):t;return Object(O.jsx)("select",Object(L.a)(Object(L.a)({className:he.a.select,onChange:function(e){var t=e.currentTarget.value;n&&n(e),a&&a(t)}},r),{},{children:c}))},xe=n(25),_e=n.n(xe),me=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(U.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){var t=e.currentTarget.value;r&&r(e),c&&c(t)}),i=n?n.map((function(e,n){return Object(O.jsxs)("label",{className:_e.a.label,children:[Object(O.jsx)("input",{className:_e.a.radio,type:"radio",name:t,value:e,checked:e===a,onChange:s}),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:i})},pe=n(36),fe=n.n(pe),ve=["x","y","z"];var ge=function(){var e=Object(a.useState)(ve[1]),t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"Homeworks 7"}),Object(O.jsxs)("div",{className:fe.a.wrapper,children:[Object(O.jsx)("div",{children:Object(O.jsx)(Oe,{options:ve,value:n,onChangeOption:r})}),Object(O.jsx)("div",{children:Object(O.jsx)(me,{name:"radio",options:ve,value:n,onChangeOption:r})})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},ke=function(e,t){switch(t.type){case"sort":var n=Object(F.a)(e);return"up"===t.payload?n.sort((function(e,t){return e.name>t.name?1:-1})):"down"===t.payload?n.sort((function(e,t){return e.name<t.name?1:-1})):n;case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},Ne=n(37),Ce=n.n(Ne),ye=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var we=function(){var e=Object(a.useState)(ye),t=Object(y.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(O.jsxs)("div",{className:Ce.a.items,children:[Object(O.jsxs)("span",{children:["Name: ",e.name]})," ",Object(O.jsxs)("span",{children:["Age: ",e.age]})]},e._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"Homeworks 8"}),c,Object(O.jsxs)("div",{children:[Object(O.jsx)(Q,{onClick:function(){return r(ke(ye,{type:"sort",payload:"up"}))},children:"sort up"}),Object(O.jsx)(Q,{onClick:function(){return r(ke(ye,{type:"sort",payload:"down"}))},children:"sort down"}),Object(O.jsx)(Q,{onClick:function(){return r(ke(ye,{type:"check",payload:18}))},children:" check 18 "})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var Se=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(ge,{}),Object(O.jsx)(we,{})]})};var Ae=function(){return Object(O.jsx)("div",{children:"Something will be here soon"})},Te="/pre-junior",He="/junior",We="/junior+";var Ee=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/",element:Object(O.jsx)(b.a,{to:Te})}),Object(O.jsx)(b.b,{path:Te,element:Object(O.jsx)(be,{})}),Object(O.jsx)(b.b,{path:He,element:Object(O.jsx)(Se,{})}),Object(O.jsx)(b.b,{path:We,element:Object(O.jsx)(Ae,{})}),Object(O.jsx)(b.b,{path:"*",element:Object(O.jsx)(_,{})})]})})};var Ie=function(){return Object(O.jsxs)("div",{className:u.a.dropdown,children:[Object(O.jsx)("button",{className:u.a.dropBtn,children:"View All HomeWorks"}),Object(O.jsxs)("div",{className:u.a.dropdown_content,children:[Object(O.jsx)(l.b,{to:Te,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Pre Junior"}),Object(O.jsx)(l.b,{to:He,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Junior"}),Object(O.jsx)(l.b,{to:We,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Junior+"})]})]})};var Fe=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(Ie,{}),Object(O.jsx)(Ee,{})]})})};var Pe=function(){return Object(O.jsx)("div",{className:o.a.App,children:Object(O.jsxs)("div",{className:o.a.focus,children:[Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"React homeworks:"})}),Object(O.jsx)(Fe,{})]})})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(Pe,{})}),document.getElementById("root"))}],[[51,1,2]]]);
//# sourceMappingURL=main.4ff1f6ee.chunk.js.map