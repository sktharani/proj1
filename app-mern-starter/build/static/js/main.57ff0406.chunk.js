(this["webpackJsonpdiscord-fronend"]=this["webpackJsonpdiscord-fronend"]||[]).push([[0],{116:function(e,a,n){},117:function(e,a,n){},118:function(e,a,n){},119:function(e,a,n){},120:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(19),r=n.n(l),s=(n(80),n(81),n(30)),o=(n(82),n(34)),i=n.n(o),m=n(56),u=n.n(m),d=n(12),p=n(22),h=Object(p.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:function(e,a){e.channelId=a.payload.channelId,e.channelName=a.payload.channelName}}}),E=h.actions.setChannelInfo,f=function(e){return e.app.channelId},g=function(e){return e.app.channelName},b=h.reducer,v=(n(87),function(e){var a=e.id,n=e.channelName,t=Object(d.b)();return c.a.createElement("div",{className:"sidebarChannel",onClick:function(){return t(E({channelId:a,channelName:n}))}},c.a.createElement("h4",null,c.a.createElement("span",{className:"sidebarChannel__hash"},"#"),n))}),_=n(57),N=n.n(_),w=n(58),I=n.n(w),j=n(59),O=n.n(j),S=n(134),C=n(60),y=n.n(C),k=n(61),H=n.n(k),z=n(62),D=n.n(z),x=Object(p.b)({name:"user",initialState:{user:null},reducers:{login:function(e,a){e.user=a.payload},logout:function(e){e.user=null}}}),A=x.actions,B=A.login,L=A.logout,M=function(e){return e.user.user},R=x.reducer,U=n(26),W=n.n(U),F=(W.a.initializeApp({apiKey:"AIzaSyD0-owHo0b4ooo6QEU4RYEFiZiH-rtHr4o",authDomain:"chat-app-a2c8e.firebaseapp.com",projectId:"chat-app-a2c8e",storageBucket:"chat-app-a2c8e.appspot.com",messagingSenderId:"76304976812",appId:"1:76304976812:web:d70481351c8cdfde1a4809"}).firestore(),W.a.auth()),J=new W.a.auth.GoogleAuthProvider,P=n(52),G=n.n(P).a.create({baseURL:"https://app-mern-chat.herokuapp.com"}),K=n(33),Q=n.n(K),T=new Q.a("cbfe61332f4cc7dc754f",{cluster:"ap2"}),V=function(){var e=Object(d.c)(M),a=Object(t.useState)([]),n=Object(s.a)(a,2),l=n[0],r=n[1],o=function(){G.get("/get/channelList").then((function(e){r(e.data)}))};Object(t.useEffect)((function(){o(),T.subscribe("channels").bind("newChannel",(function(e){o()}))}),[]);return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__top"},c.a.createElement("h3",null,"Chat Box"),c.a.createElement(i.a,null)),c.a.createElement("div",{className:"sidebar__channels"},c.a.createElement("div",{className:"sidebar__channelsHeader"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(i.a,null),c.a.createElement("h4",null,"Text Channels")),c.a.createElement(u.a,{onClick:function(e){e.preventDefault();var a=prompt("Enter a new channel name");a&&G.post("/new/channel",{channelName:a})},className:"sidebar__addChannel"})),c.a.createElement("div",{className:"sidebar__channelsList"},l.map((function(e){return c.a.createElement(v,{key:e.id,id:e.id,channelName:e.name})})))),c.a.createElement("div",{className:"sidebar__voice"},c.a.createElement(N.a,{className:"sidebar__voiceIcons",fontSize:"large"}),c.a.createElement("div",{className:"sidebar__voiceInfo"},c.a.createElement("h3",null,"Voice Connected"),c.a.createElement("p",null,"Audio")),c.a.createElement("div",{className:"sidebar__voiceIcons"},c.a.createElement(I.a,null),c.a.createElement(O.a,null))),c.a.createElement("div",{className:"sidebar__profile"},c.a.createElement(S.a,{src:e.photo,onClick:function(){return F.signOut()}}),c.a.createElement("div",{className:"sidebar__profileInfo"},c.a.createElement("h3",null,e.displayName),c.a.createElement("p",null,"#",e.uid.substring(0,5))),c.a.createElement("div",{className:"sidebar__profileIcons"},c.a.createElement(y.a,null),c.a.createElement(H.a,null),c.a.createElement(D.a,null))))},Y=(n(116),n(117),n(63)),Z=n.n(Y),$=n(64),q=n.n($),X=n(65),ee=n.n(X),ae=n(66),ne=n.n(ae),te=n(67),ce=n.n(te),le=n(68),re=n.n(le),se=function(e){var a=e.channelName;return c.a.createElement("div",{className:"chatHeader"},c.a.createElement("div",{className:"chatHeader__left"},c.a.createElement("h3",null,c.a.createElement("span",{className:"chatHeader__hash"},"#"),a)),c.a.createElement("div",{className:"chatHeader__right"},c.a.createElement(Z.a,null),c.a.createElement(q.a,null),c.a.createElement(ee.a,null),c.a.createElement("div",{className:"chatHeader__search"},c.a.createElement("input",{type:"text",placeholder:"Search"}),c.a.createElement(ne.a,null)),c.a.createElement(ce.a,null),c.a.createElement(re.a,null)))},oe=n(69),ie=n.n(oe),me=n(70),ue=n.n(me),de=n(71),pe=n.n(de),he=n(72),Ee=n.n(he),fe=(n(118),function(e){var a=e.timestamp,n=e.user,t=e.message;return c.a.createElement("div",{className:"message"},c.a.createElement(S.a,{src:n.photo}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,n.displayName,c.a.createElement("span",{className:"message__timestamp"},new Date(parseInt(a)).toDateString())),c.a.createElement("p",null,t)))}),ge=new Q.a("cbfe61332f4cc7dc754f",{cluster:"ap2"}),be=function(){var e=Object(d.c)(M),a=Object(d.c)(f),n=Object(d.c)(g),l=Object(t.useState)(""),r=Object(s.a)(l,2),o=r[0],i=r[1],m=Object(t.useState)([]),u=Object(s.a)(m,2),p=u[0],h=u[1],E=function(e){e&&G.get("/get/conversation?id=".concat(e)).then((function(e){h(e.data[0].conversation)}))};Object(t.useEffect)((function(){E(a),ge.subscribe("conversation").bind("newMessage",(function(e){E(a)}))}),[a]);return c.a.createElement("div",{className:"chat"},c.a.createElement(se,{channelName:n}),c.a.createElement("div",{className:"chat__messages"},p.map((function(e){console.log(e)})),p.map((function(e){return c.a.createElement(fe,{message:e.message,timestamp:e.timestamp,user:e.user})}))),c.a.createElement("div",{className:"chat__input"},c.a.createElement(ie.a,{fontSize:"large"}),c.a.createElement("form",null,c.a.createElement("input",{type:"text",disabled:!a,value:o,onChange:function(e){return i(e.target.value)},placeholder:"Message #".concat(n)}),c.a.createElement("button",{className:"chat__inputButton",onClick:function(n){n.preventDefault(),G.post("/new/message?id=".concat(a),{message:o,timestamp:Date.now(),user:e}),i("")},disabled:!a,type:"submit"},"Send Message")),c.a.createElement("div",{className:"chat__inputIcon"},c.a.createElement(ue.a,{fontSize:"large"}),c.a.createElement(pe.a,{fontSize:"large"}),c.a.createElement(Ee.a,{fontSize:"large"}))))},ve=n(133),_e=(n(119),function(){return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__logo"},c.a.createElement("img",{src:"https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png",alt:"discord logo"})),c.a.createElement(ve.a,{onClick:function(){F.signInWithPopup(J).catch((function(e){return alert(e.message)}))}},"Sign In"))});var Ne=function(){var e=Object(d.b)(),a=Object(d.c)(M);return Object(t.useEffect)((function(){F.onAuthStateChanged((function(a){console.log(a),e(a?B({uid:a.uid,photo:a.photoURL,email:a.email,displayName:a.displayName}):L())}))}),[e]),console.log(a),c.a.createElement("div",{className:"app"},a?c.a.createElement(c.a.Fragment,null,c.a.createElement(V,null),c.a.createElement(be,null)):c.a.createElement(_e,null))},we=Object(p.a)({reducer:{user:R,app:b}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,{store:we},c.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,a,n){e.exports=n(120)},80:function(e,a,n){},81:function(e,a,n){},82:function(e,a,n){},87:function(e,a,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.57ff0406.chunk.js.map