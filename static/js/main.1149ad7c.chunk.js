(this["webpackJsonphome-work-ignat"]=this["webpackJsonphome-work-ignat"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={link:"Header_link__2R6qe",active_link:"Header_active_link__3AdIu",dropdown:"Header_dropdown__3A4xY",dropBtn:"Header_dropBtn__3tpdB",dropdown_content:"Header_dropdown_content__3yUx0"}},,function(e,t,n){e.exports={someClass:"Affairs_someClass__184b9",btnFilter:"Affairs_btnFilter__gOjT5",btnActive:"Affairs_btnActive__l75ro",low:"Affairs_low__30b_J",middle:"Affairs_middle__1FjQq",high:"Affairs_high__WkYyE",nameAffair:"Affairs_nameAffair__2GZ2q",btnDel:"Affairs_btnDel__2nwTt"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__1W1zy",error:"Greeting_error__3u6Hx",errorItem:"Greeting_errorItem__3b3pS",btn_add:"Greeting_btn_add__2yBlD",btn_block:"Greeting_btn_block__2u1LW",counter:"Greeting_counter__2Kr_-",text_container:"Greeting_text_container__TrCST"}},,function(e,t,n){e.exports={message:"Message_message__1pYz0",img_icon:"Message_img_icon__16oQc",message_item:"Message_message_item__3SNWT",name:"Message_name__WD98L",text:"Message_text__OyyEn",time:"Message_time__1UWnX"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2qyeV",errorInput:"SuperInputText_errorInput__1gKL3",error:"SuperInputText_error__3TJcK",inp:"SuperInputText_inp__VlSJz"}},,,,function(e,t,n){e.exports={blue:"HW4_blue__svwkS",column:"HW4_column__3L4XH",testSpanError:"HW4_testSpanError__2kawt"}},function(e,t,n){e.exports={default:"SuperButton_default__3a8TN",red:"SuperButton_red__sicyb",button:"SuperButton_button__3gTf6",btn:"SuperButton_btn__3_JIV",blink:"SuperButton_blink__11uJ_"}},,function(e,t,n){e.exports={App:"App_App__wiWT9",focus:"App_focus__1RLLP"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2plA2",spanClassName:"SuperCheckbox_spanClassName__LiGGV"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__3OtEN",label:"SuperRadio_label__3pj6b"}},function(e,t,n){e.exports={items:"HW8_items__1Yuqb",items_button:"HW8_items_button__gW8TU"}},,,,function(e,t,n){e.exports={container:"Error404_container__VJeeb"}},,,function(e,t,n){e.exports={border_text:"SuperEditableSpan_border_text__3sdww"}},function(e,t,n){e.exports={wrapper_HW6:"HW6_wrapper_HW6__3vyAP"}},,function(e,t,n){e.exports={select:"SuperSelect_select__1Xvm5"}},function(e,t,n){e.exports={wrapper:"HW7_wrapper__2oTnL"}},function(e,t,n){e.exports={time_block:"Clock_time_block__56050"}},,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),s=n.n(r),i=(n(44),n(23)),o=n.n(i),l=n(12),j=n(8),u=n.n(j),b=n(3),d=n(30),O=n.n(d),h=n(0),_={color:"white",fontWeight:"700",fontSize:"24px"};var x=function(){return Object(h.jsxs)("div",{className:O.a.container,children:[Object(h.jsx)("div",{style:_,children:"404"}),Object(h.jsx)("div",{style:_,children:"Page not found!"}),Object(h.jsx)("div",{children:"Please use the navigation."}),Object(h.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},m=n(13),p=n.n(m);var f=function(e){return Object(h.jsxs)("div",{className:p.a.message,children:[Object(h.jsx)("div",{className:p.a.img_icon,children:Object(h.jsx)("img",{width:50,height:50,src:e.avatar,alt:"Icon Avatars"})}),Object(h.jsxs)("div",{className:p.a.message_item,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:p.a.name,children:e.name}),Object(h.jsx)("div",{className:p.a.text,children:e.message})]}),Object(h.jsx)("div",{className:p.a.time,children:e.time})]})]})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Some Name",k="some text",C="22:00";var N=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 1"}),Object(h.jsx)(f,{avatar:v,name:g,message:k,time:C}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},S=n(4),y=n(10),w=n.n(y),A=n(31),T=n.n(A);var H=function(e){return Object(h.jsxs)("div",{className:w.a.nameAffair,children:[Object(h.jsx)("p",{className:w.a[e.affair.priority],children:e.affair.name}),Object(h.jsx)(T.a,{className:w.a.btnDel,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var W=function(e){var t=e.data.map((function(t){return Object(h.jsx)(H,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return e.filter===t?w.a.btnFilter+" "+w.a.btnActive:w.a.btnFilter};return Object(h.jsxs)("div",{children:[t,Object(h.jsx)("button",{className:n("all"),onClick:function(){return e.setFilter("all")},children:"All"}),Object(h.jsx)("button",{className:n("low"),onClick:function(){return e.setFilter("low")},children:"Low"}),Object(h.jsx)("button",{className:n("middle"),onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(h.jsx)("button",{className:n("high"),onClick:function(){return e.setFilter("high")},children:"High"})]})},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(c.useState)(I),t=Object(S.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(S.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(h.jsxs)("div",{className:w.a.someClass,children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 2"}),Object(h.jsx)(W,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},F=n(19),B=n(11),P=n.n(B),J=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,a=e.error,r=e.totalUsers,s=e.onKeyDownAddName,i=""===a?"":P.a.error,o=""===a?P.a.btn_add:P.a.btn_add+" "+P.a.btn_block,l=""!==a;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:P.a.text_container,children:[Object(h.jsx)("input",{value:t,onChange:n,onKeyPress:s,className:i}),Object(h.jsx)("button",{disabled:l,className:o,onClick:c,children:"Add"})]}),Object(h.jsxs)("div",{className:P.a.counter,children:["Count Users: ",r]}),Object(h.jsx)("div",{className:P.a.errorItem,children:a})]})},D=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(S.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),l=Object(S.a)(o,2),j=l[0],u=l[1],b=function(){alert("Hello  ".concat(s,"!")),n(s),i("")},d=t.length;return Object(h.jsx)(J,{name:s,setNameCallback:function(e){return i(e.currentTarget.value),/[1-9]/g.test(e.currentTarget.value)?u("Name must contain only letters."):e.currentTarget.value.length<=1?u("Name is short. Please enter a valid name."):u("")},addUser:b,error:j,totalUsers:d,onKeyDownAddName:function(e){"Enter"===e.key&&b()}})},L=n(65);var G=function(){var e=Object(c.useState)([]),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 3"}),Object(h.jsx)(D,{users:n,addUserCallback:function(e){var t={_id:Object(L.a)(),name:e};a([t].concat(Object(F.a)(n)))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},M=n(7),U=n(6),K=n(16),q=n.n(K),z=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(q.a.error," ").concat(i||""),j="".concat(q.a.inp," ").concat(r?q.a.errorInput:q.a.superInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:j},o)),r&&Object(h.jsx)("span",{className:l,children:r})]})},R=n(20),V=n.n(R),X=n(21),Y=n.n(X),Q=function(e){var t=e.red,n=e.className,c=Object(U.a)(e,["red","className"]),a="".concat(Y.a.button," ").concat(t?Y.a.red:Y.a.default," ").concat(n);return Object(h.jsx)("button",Object(M.a)({className:a},c))},Z=n(24),$=n.n(Z),ee=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat($.a.checkbox," ").concat(c||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),a&&Object(h.jsx)("span",{className:$.a.spanClassName,children:a})]})};var te=function(){var e=Object(c.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(S.a)(i,2),l=o[0],j=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 4"}),Object(h.jsxs)("div",{className:V.a.column,children:[Object(h.jsx)(z,{value:n,onChangeText:a,onEnter:s,error:r,spanClassName:V.a.testSpanError}),Object(h.jsx)(z,{className:V.a.blue}),Object(h.jsx)(Q,{children:"default"}),Object(h.jsx)(Q,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(Q,{disabled:!0,children:"disabled"}),Object(h.jsx)(ee,{checked:l,onChangeChecked:j,children:"Touch me! "}),Object(h.jsx)(ee,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},ne=n(33),ce=n.n(ne),ae=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(U.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(S.a)(s,2),o=i[0],l=i[1],j=a||{},u=j.children,b=j.onDoubleClick,d=j.className,O=Object(U.a)(j,["children","onDoubleClick","className"]),_="".concat(ce.a.border_text," ").concat(d);return Object(h.jsx)(h.Fragment,{children:o?Object(h.jsx)(z,Object(M.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(h.jsx)("span",Object(M.a)(Object(M.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:_},O),{},{children:u||r.value}))})};function re(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function se(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}re("test",{x:"A",y:1});se("test",{x:"",y:0});var ie=n(34),oe=n.n(ie),le=n(35),je=n.n(le);var ue=function(){var e=Object(c.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 6"}),Object(h.jsxs)("div",{className:oe.a.wrapper_HW6,children:[Object(h.jsxs)("div",{children:[" ",Object(h.jsx)(ae,{value:n,onChangeText:a,spanProps:{children:n?void 0:"Please enter text..."}})," ",Object(h.jsx)(je.a,{fontSize:"small"})]}),Object(h.jsx)(Q,{onClick:function(){re("editable-span-value",n)},children:"save"}),Object(h.jsx)(Q,{onClick:function(){a(se("editable-span-value",n))},children:"restore"})]})]})};var be=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(N,{}),Object(h.jsx)(E,{}),Object(h.jsx)(G,{}),Object(h.jsx)(te,{}),Object(h.jsx)(ue,{})]})},de=n(36),Oe=n.n(de),he=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,a=Object(U.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)})):t;return Object(h.jsx)("select",Object(M.a)(Object(M.a)({className:Oe.a.select,onChange:function(e){var t=e.currentTarget.value;n&&n(e),c&&c(t)}},a),{},{children:r}))},_e=n(25),xe=n.n(_e),me=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=e.onChange,r=e.onChangeOption,s=(Object(U.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){var t=e.currentTarget.value;a&&a(e),r&&r(t)}),i=n?n.map((function(e,n){return Object(h.jsxs)("label",{className:xe.a.label,children:[Object(h.jsx)("input",{className:xe.a.radio,type:"radio",name:t,value:e,checked:e===c,onChange:s}),e]},t+"-"+n)})):[];return Object(h.jsx)(h.Fragment,{children:i})},pe=n(37),fe=n.n(pe),ve=["x","y","z"];var ge=function(){var e=Object(c.useState)(ve[1]),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 7"}),Object(h.jsxs)("div",{className:fe.a.wrapper,children:[Object(h.jsx)("div",{children:Object(h.jsx)(he,{options:ve,value:n,onChangeOption:a})}),Object(h.jsx)("div",{children:Object(h.jsx)(me,{name:"radio",options:ve,value:n,onChangeOption:a})})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},ke=function(e,t){switch(t.type){case"sort":var n=Object(F.a)(e);return"up"===t.payload?n.sort((function(e,t){return e.name>t.name?1:-1})):"down"===t.payload?n.sort((function(e,t){return e.name<t.name?1:-1})):n;case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},Ce=n(26),Ne=n.n(Ce),Se=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ye=function(){var e=Object(c.useState)(Se),t=Object(S.a)(e,2),n=t[0],a=t[1],r=n.map((function(e){return Object(h.jsxs)("div",{className:Ne.a.items,children:[Object(h.jsxs)("span",{children:["Name: ",e.name]})," ",Object(h.jsxs)("span",{children:["Age: ",e.age]})]},e._id)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 8"}),r,Object(h.jsxs)("div",{className:Ne.a.items_button,children:[Object(h.jsx)(Q,{onClick:function(){return a(ke(Se,{type:"sort",payload:"up"}))},children:"sort up"}),Object(h.jsx)(Q,{onClick:function(){return a(ke(Se,{type:"sort",payload:"down"}))},children:"sort down"}),Object(h.jsx)(Q,{onClick:function(){return a(ke(Se,{type:"check",payload:18}))},children:" check 18 "})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},we=n(38),Ae=n.n(we);var Te=function(){var e=Object(c.useState)(0),t=Object(S.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(!1),j=Object(S.a)(l,2),u=j[0],b=j[1],d=function(){clearInterval(n)},O=null===i||void 0===i?void 0:i.toLocaleTimeString(),_=null===i||void 0===i?void 0:i.toLocaleDateString();return Object(h.jsxs)("div",{className:Ae.a.time_block,children:[Object(h.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:O}),u?Object(h.jsxs)("div",{children:[" ",_]}):Object(h.jsx)("div",{children:"Time & Date"}),Object(h.jsx)(Q,{onClick:function(){d();var e=+setInterval((function(){o(new Date)}),1e3);a(e)},children:"start"}),Object(h.jsx)(Q,{onClick:d,children:"stop"})]})};var He=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Homeworks 9"}),Object(h.jsx)(Te,{}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var We=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(ge,{}),Object(h.jsx)(ye,{}),Object(h.jsx)(He,{})]})};var Ie=function(){return Object(h.jsx)("div",{children:"Something will be here soon"})},Ee="/pre-junior",Fe="/junior",Be="/junior+";var Pe=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",element:Object(h.jsx)(b.a,{to:Ee})}),Object(h.jsx)(b.b,{path:Ee,element:Object(h.jsx)(be,{})}),Object(h.jsx)(b.b,{path:Fe,element:Object(h.jsx)(We,{})}),Object(h.jsx)(b.b,{path:Be,element:Object(h.jsx)(Ie,{})}),Object(h.jsx)(b.b,{path:"*",element:Object(h.jsx)(x,{})})]})})};var Je=function(){return Object(h.jsxs)("div",{className:u.a.dropdown,children:[Object(h.jsx)("button",{className:u.a.dropBtn,children:"View All HomeWorks"}),Object(h.jsxs)("div",{className:u.a.dropdown_content,children:[Object(h.jsx)(l.b,{to:Ee,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Pre Junior"}),Object(h.jsx)(l.b,{to:Fe,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Junior"}),Object(h.jsx)(l.b,{to:Be,className:function(e){return e.isActive?u.a.active_link+" "+u.a.link:u.a.link},children:"Junior+"})]})]})};var De=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(Je,{}),Object(h.jsx)(Pe,{})]})})};var Le=function(){return Object(h.jsx)("div",{className:o.a.App,children:Object(h.jsxs)("div",{className:o.a.focus,children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"React homeworks:"})}),Object(h.jsx)(De,{})]})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Le,{})}),document.getElementById("root"))}],[[52,1,2]]]);
//# sourceMappingURL=main.1149ad7c.chunk.js.map