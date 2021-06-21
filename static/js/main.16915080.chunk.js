(this["webpackJsonpcarcassone-scorer"]=this["webpackJsonpcarcassone-scorer"]||[]).push([[0],{17:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(2),l=c.n(n),s=c(11),a=c.n(s),r=(c(17),c(3)),i=c.p+"static/media/carcascore.ae397ce1.png",o=c(10),u=c(5),j=c(0),b=function(e){var t=e.setShowQuitModal;return Object(j.jsxs)("div",{className:"w-full pt-6 md:pt-0 h-24 bg-gray-800 flex  items-center justify-evenly text-yellow-300",children:[Object(j.jsx)(u.a,{icon:o.a,className:" fill-current hidden md:block",size:"5x"}),Object(j.jsx)("button",{onClick:function(){return t(!0)},className:"ring-0 fill-current focus:outline-none",children:Object(j.jsx)("img",{src:i,alt:"carcascore title"})}),Object(j.jsx)(u.a,{icon:o.a,size:"5x",className:" fill-current hidden md:block"})]})},d=function(e){var t=e.outline,c=e.name,n=e.func,l=e.alternate;return l&&t?Object(j.jsx)("button",{onClick:function(){return n()},className:"w-1/2 border-2 border-yellow-300 py-4  md:w-1/3 rounded-lg text-yellow-300  text-center bg-black ",children:c}):l&&!t?Object(j.jsx)("button",{onClick:function(){return n()},className:" text-black w-1/2 border-none outline-none py-4 md:w-1/3 rounded-lg  text-center bg-yellow-300",children:c}):l||t?Object(j.jsx)("button",{onClick:function(){return n()},className:"w-1/2 border-2 border-red-800 py-4 md:w-32 rounded-lg text-red-800  text-center bg-gray-100 ",children:c}):Object(j.jsx)("button",{onClick:function(){return n()},className:"w-1/2 border-none outline-none py-4 md:w-32 rounded-lg text-white  text-center bg-red-800 ",children:c})},m=function(e){var t=e.setShowQuitModal;return Object(j.jsxs)("div",{className:"absolute bg-indigo-200 text-black border-2 border-gray-700 mt-40 object-center p-4 sm:p-10  z-50",children:[Object(j.jsx)("h3",{children:"Are you sure you want to quit? all data will be lost"}),Object(j.jsxs)("div",{className:"flex w-full flex-col md:flex-row items-center justify-between mt-8",children:[Object(j.jsx)("a",{href:"/about",className:"w-full md:w-auto flex justify-center mb-8 md:mb-0",children:Object(j.jsx)(d,{name:"Quit"})}),Object(j.jsx)(d,{outline:!0,name:"Cancel",func:function(){return t(!1)}})]})]})},x=function(e){var t=e.setPage;return Object(j.jsx)("div",{className:"w-full flex items-center h-24 font-semibold text-3xl",children:[{name:"New Game",value:"newGame"},{name:"History",value:"history"}].map((function(e){return Object(j.jsx)("nav",{className:"cursor-pointer pl-8",onClick:function(){t(e.value)},children:e.name},e.name)}))})},f=function(e){var t=e.setNumberOfPlayers,c=e.setPage,l=Object(n.useState)(!1),s=Object(r.a)(l,2),a=s[0],i=s[1];return Object(j.jsxs)("div",{className:"flex flex-col w-full h-full items-center text-2xl mt-24",children:[!a&&Object(j.jsxs)("div",{className:"w-full flex justify-center flex-col items-center",children:[Object(j.jsx)("h1",{className:"my-12",children:"Start a new game??"}),Object(j.jsx)(d,{outline:!0,alternate:!0,func:function(){i(!0)},name:"Click here"})]}),a&&Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("h3",{className:"mb-6",children:"How many Players?"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"bg-red-600 mx-4 w-16 h-16 rounded-lg text-white",onClick:function(){c("scoreBoard"),t(2)},children:"2"}),Object(j.jsx)("button",{className:"bg-yellow-300 mx-4 w-16 h-16 rounded-lg text-white",onClick:function(){c("scoreBoard"),t(3)},children:"3"}),Object(j.jsx)("button",{className:"bg-blue-600 mx-4 w-16 h-16 rounded-lg text-white",onClick:function(){c("scoreBoard"),t(4)},children:"4"})]})]})]})},O=c(4),h=c(7),w=c.n(h),y=c(12),g=function(e){var t,c=e.players.sort((function(e,t){return e.score<t.score?1:-1}));return console.log(c),c[0].score===c[1].score&&(t=!0),Object(j.jsx)("div",{className:"w-full mt-12 flex flex-col items-center justify-center",children:Object(j.jsxs)("div",{className:"w-3/4 bg-indigo-200 text-black font-bold text-5xl py-10 px-4 text-center rounded-2xl",children:[t&&Object(j.jsx)("div",{children:"Its a draw"}),!t&&Object(j.jsxs)("div",{children:[c[0].name," is the winner!!"]}),Object(j.jsx)("div",{className:"my-6 flex w-full justify-evenly flex-col ",children:c.map((function(e){return Object(j.jsxs)("div",{className:w()(" w-full  text-gray-800 text-lg flex items-stretch  md:text-4xl  p-8  justify-evenly ",{"bg-yellow-300":"Anne"===e.name,"bg-red-600":"Nick"===e.name,"bg-green-600":"Amanda"===e.name,"bg-blue-600":"Matt"===e.name}),children:[Object(j.jsxs)("div",{className:"w-1/3",children:[e.name,": "]})," ",Object(j.jsx)("div",{children:e.score})]})}))}),Object(j.jsx)(u.a,{icon:y.a,size:"7x",className:"text-indigo-200 fill-current mt-4 md:mt-20"})]})})},v=function(e){var t=e.player,c=e.changePlayerScore,l=Object(n.useState)(""),s=Object(r.a)(l,2),a=s[0],i=s[1];return Object(j.jsxs)("div",{className:w()("md:w-1/3 w-full  text-gray-800 text-lg md:items-stretch md:mx-10 md:text-4xl  p-8 md:rounded-lg flex flex-col justify-evenly relative",{"bg-yellow-300":"Anne"===t.name,"bg-red-600":"Nick"===t.name,"bg-green-600":"Amanda"===t.name,"bg-blue-600":"Matt"===t.name}),children:[Object(j.jsxs)("div",{className:"w-full text-3xl md:text-4xl flex justify-evenly",children:[Object(j.jsx)("p",{children:t.name}),Object(j.jsxs)("p",{children:[t.score," pts"]})," "]}),Object(j.jsx)("input",{type:"numeric",min:"1",max:"99",pattern:"[0-9]*",className:"text-black my-2 md:my-6 outline-none md:py-3  text-center",value:a,maxLength:2,onKeyUp:function(e){"Enter"===e.key&&(c(t,a),i(""))},onChange:function(e){return function(e){e.preventDefault(),i(e.target.value)}(e)}}),Object(j.jsxs)("div",{className:"w-full flex justify-between text-white ",children:[Object(j.jsx)(d,{func:function(){c(t,a),i("")},name:"Add"}),Object(j.jsx)(d,{func:function(){c(t,a-2*a),i("")},name:"Minus",outline:!0})]})]})},N=function(e){var t=e.setShowQuitModal,c=e.numberOfPlayers,l=Object(n.useState)({name:"Nick",score:0}),s=Object(r.a)(l,2),a=s[0],i=s[1],o=Object(n.useState)({name:"Anne",score:0}),u=Object(r.a)(o,2),b=u[0],m=u[1],x=Object(n.useState)({name:"Amanda",score:0}),f=Object(r.a)(x,2),h=f[0],w=f[1],y=Object(n.useState)({name:"Matt",score:0}),N=Object(r.a)(y,2),p=N[0],k=N[1],S=Object(n.useState)(!1),C=Object(r.a)(S,2),M=C[0],P=C[1],A=[a,b];4===c&&A.push(h,p),3===c&&A.push(h);var Q=function(e,t){var c=Number(e.score)+Number(t);e===a&&i(Object(O.a)(Object(O.a)({},e),{},{score:c})),e===b&&m(Object(O.a)(Object(O.a)({},e),{},{score:c})),e===h&&w(Object(O.a)(Object(O.a)({},e),{},{score:c})),e===p&&k(Object(O.a)(Object(O.a)({},e),{},{score:c}))};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mb-12",children:[!M&&Object(j.jsx)("div",{className:"w-full justify-evenly flex flex-col md:flex-row flex-wrap",children:A.map((function(e){return Object(j.jsx)(v,{player:e,changePlayerScore:Q},e.name)}))}),M&&Object(j.jsx)(g,{players:A})]}),Object(j.jsxs)("footer",{className:"w-full flex justify-evenly fixed bottom-0 items-center text-3xl md:mb-4",children:[Object(j.jsx)(d,{func:function(){P(!M)},outline:!0,alternate:!0,name:M?"Return to game?":"Game over?"}),Object(j.jsx)(d,{func:function(){t(!0)},alternate:!0,name:"Quit game"})]})]})};c(24);var p=function(){var e=Object(n.useState)("newGame"),t=Object(r.a)(e,2),c=t[0],l=t[1],s=Object(n.useState)(!1),a=Object(r.a)(s,2),i=a[0],o=a[1],u=Object(n.useState)(),d=Object(r.a)(u,2),O=d[0],h=d[1];return Object(j.jsxs)("div",{className:"bg-black flex flex-col items-center w-full h-screen text-yellow-300",children:[Object(j.jsx)(b,{setShowQuitModal:o}),i&&Object(j.jsx)(m,{setShowQuitModal:o}),"scoreBoard"!==c&&Object(j.jsx)(x,{setPage:l}),Object(j.jsxs)("div",{className:"w-full h-auto",children:["newGame"===c&&Object(j.jsx)(f,{setPage:l,setNumberOfPlayers:h}),"scoreBoard"===c&&Object(j.jsx)("div",{className:"md:mt-12",children:Object(j.jsx)(N,{numberOfPlayers:O,setShowQuitModal:o})}),"history"===c&&Object(j.jsx)("div",{children:"Game history coming soon"})]})]})};a.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.16915080.chunk.js.map