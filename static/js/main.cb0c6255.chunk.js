(this["webpackJsonppdftron-sign-app"]=this["webpackJsonppdftron-sign-app"]||[]).push([[0],{38:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),l=n.n(c),o=(n(38),n(5)),i=n.n(o),u=n(9),s=n(8),d=n(10),m=n(7),p=n(3),f=(n(15),n(25)),g=n(17),b=Object(g.b)({name:"assign",initialState:{signees:[]},reducers:{addSignee:function(e,t){e.signees=[].concat(Object(f.a)(e.signees),[{key:t.payload.key,name:t.payload.name,email:t.payload.email}])},resetSignee:function(e,t){console.log("resetSignee"),e.signees=[]}}}),E=b.actions,h=E.addSignee,v=E.resetSignee,w=function(e){return e.assign.signees},x=b.reducer,y=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(m.a)(l,2),i=o[0],u=o[1],f=Object(a.useState)(!1),g=Object(m.a)(f,2),b=g[0],E=g[1],v=Object(d.c)(w),x=Object(d.b)();return r.a.createElement("div",null,r.a.createElement(p.b,{padding:3},r.a.createElement(p.e,null,r.a.createElement(p.b,{padding:3},r.a.createElement(p.f,{size:"md"},"Who needs to sign?")),r.a.createElement(p.b,{padding:2},r.a.createElement(p.m,{id:"displayName",onChange:function(e){return u(e.value)},placeholder:"Enter recipient's name",label:"Name",value:i,type:"text"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.m,{id:"email",onChange:function(e){return c(e.value)},placeholder:"Enter recipient's email",label:"Email",value:n,type:"email"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:function(e){!function(e,t){var n="".concat((new Date).getTime()).concat(t);""!==e&&""!==t&&(x(h({key:n,name:e,email:t})),c(""),u(""))}(i,n)},text:"Add user",color:"blue",inline:!0})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.k,null,r.a.createElement(p.k.Header,null,r.a.createElement(p.k.Row,null,r.a.createElement(p.k.HeaderCell,null,r.a.createElement(p.l,{weight:"bold"},"Name")),r.a.createElement(p.k.HeaderCell,null,r.a.createElement(p.l,{weight:"bold"},"Email")))),r.a.createElement(p.k.Body,null,v.map((function(e){return r.a.createElement(p.k.Row,{key:e.key},r.a.createElement(p.k.Cell,null,r.a.createElement(p.l,null,e.name)),r.a.createElement(p.k.Cell,null,r.a.createElement(p.l,null,e.email)))}))))),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:function(){v.length>0?Object(s.c)("/prepareDocument"):(E(!0),setTimeout((function(){return E(!1)}),1e3))},text:"Continue",color:"blue",inline:!0})),r.a.createElement(p.b,{fit:!0,dangerouslySetInlineStyle:{__style:{bottom:50,left:"50%",transform:"translateX(-50%)"}},paddingX:1,position:"fixed"},b&&r.a.createElement(p.n,{color:"red",text:r.a.createElement(r.a.Fragment,null,"Please add at least one user")})))))},j=n(30),A=n(22),O=(n(47),n(56),n(57),function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,r,c,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.Core,r=window.PDFNet,a.setWorkerPath("./webviewer/core"),c=D.ref(),e.next=6,c.child(t).getDownloadURL();case 6:return l=e.sent,o=function(){var e=Object(u.a)(i.a.mark((function e(){var a,o,u,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.PDFDoc.createFromURL(l);case 2:(a=e.sent).initSecurityHandler(),o=0;case 5:if(!(o<n.length)){e.next=17;break}return console.log(n[o]),e.next=9,r.FDFDoc.createFromXFDF(n[o]);case 9:return u=e.sent,e.next=12,a.fdfMerge(u);case 12:return e.next=14,a.flattenAnnotations();case 14:o++,e.next=5;break;case 17:return e.next=19,a.saveMemoryBuffer(r.SDFDoc.SaveOptions.e_linearized);case 19:s=e.sent,d=new Blob([s],{type:"application/pdf"}),c.child(t).put(d).then((function(e){console.log("Uploaded the blob")}));case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=10,r.runWithCleanup(o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());A.a.initializeApp({apiKey:"AIzaSyBlV3EE6N_jVk6h85V6fPVfV5-Il3utd8o",authDomain:"pdf-signdocs.firebaseapp.com",databaseURL:"https://pdf-signdocs.firebaseio.com",projectId:"pdf-signdocs",storageBucket:"pdf-signdocs.appspot.com",messagingSenderId:"35892522614",appId:"1:35892522614:web:8cfc75d8427c5aafd9f957"});var k=A.a.auth(),S=A.a.firestore(),D=A.a.storage(),C=new A.a.auth.GoogleAuthProvider,T=function(){k.signInWithPopup(C)},R=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=S.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=16;break}return r=t.email,c=t.displayName,l=t.photoURL,e.prev=8,e.next=11,a.set(Object(j.a)({displayName:c,email:r,photoURL:l},n));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 16:return e.abrupt("return",N(t.uid));case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,S.doc("users/".concat(t)).get();case 5:return n=e.sent,e.abrupt("return",Object(j.a)({uid:t},n.data()));case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a,r){var c,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:!1,c=[],l=[],o=new Date,"",S.collection("documentsToSign").add({uid:t,email:n,docRef:a,emails:r,xfdf:c,signedBy:l,signed:false,requestedTime:o,signedTime:""}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=S.collection("documentsToSign").doc(t)).get().then(function(){var e=Object(u.a)(i.a.mark((function e(t){var c,l,o,u,s,d,m,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.exists){e.next=14;break}if(c=t.data(),l=c.signedBy,o=c.emails,u=c.xfdf,s=c.docRef,l.includes(n)){e.next=12;break}return d=[].concat(Object(f.a)(l),[n]),m=[].concat(Object(f.a)(u),[a]),e.next=7,r.update({xfdf:m,signedBy:d});case 7:if(d.length!==o.length){e.next=12;break}return p=new Date,e.next=11,r.update({signed:!0,signedTime:p});case 11:O(s,m);case 12:e.next=15;break;case 14:console.log("No such document!");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Error getting document:",e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S.collection("documentsToSign"),a=n.where("emails","array-contains",t).where("signed","==",!1),r=n.where("signedBy","array-contains",t),c=[],l=[],e.next=7,r.get().then((function(e){e.forEach((function(e){var t=e.id;l.push(t)}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 7:return e.next=9,a.get().then((function(e){e.forEach((function(e){var t=e.data(),n=t.docRef,a=t.email,r=t.requestedTime,o=e.id;l.includes(o)||c.push({docRef:n,email:a,requestedTime:r,docId:o})}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S.collection("documentsToSign"),a=[],r=n.where("email","==",t).where("signed","==",!0),e.next=5,r.get().then((function(e){e.forEach((function(e){var t=e.data(),n=t.docRef,r=t.emails,c=t.signedTime,l=e.id;a.push({docRef:n,emails:r,signedTime:c,docId:l})}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=Object(g.b)({name:"firebase",initialState:{user:null,docs:[],docsSigned:[]},reducers:{setUser:function(e,t){e.user=t.payload}}}),I=P.actions.setUser,W=function(e){return e.firebase.user},V=P.reducer,G=(n(50),function(){var e=Object(d.b)(),t=Object(d.c)(W),n=t.displayName,a=t.photoURL,c=t.email;return r.a.createElement(p.b,{display:"flex",direction:"row",paddingY:2,color:"lightGray"},r.a.createElement(p.d,{span:9},r.a.createElement(p.b,{padding:3},r.a.createElement(s.a,{to:"/",className:"profileLink"},r.a.createElement(p.f,{size:"lg"},"PDFTron Sign App")))),r.a.createElement(p.d,{span:3},r.a.createElement(p.b,{padding:1},r.a.createElement(p.g,null,r.a.createElement(p.b,{padding:1},r.a.createElement(p.a,{name:n,size:"md",src:a})),r.a.createElement(p.j,null,r.a.createElement(p.l,{weight:"bold"},n),r.a.createElement(p.l,null,c)),r.a.createElement(p.b,{padding:1},r.a.createElement(p.c,{onClick:function(){k.signOut(),e(I(null)),e(v()),Object(s.c)("/")},accessibilityLabel:"Sign out of your account",text:"Sign out"}))))))}),H=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(y,null))},z=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(m.a)(l,2),i=o[0],u=o[1],d=Object(a.useState)(null),f=Object(m.a)(d,2),g=f[0],b=f[1];return r.a.createElement("div",null,r.a.createElement(p.b,{padding:3},r.a.createElement(p.e,null,r.a.createElement(p.b,{padding:3},null!==g&&r.a.createElement(p.n,{text:g}),r.a.createElement(p.f,{size:"md"},"Sign in")),r.a.createElement(p.b,{padding:2},r.a.createElement(p.m,{id:"email",onChange:function(e){return c(e.value)},placeholder:"Enter your email",label:"Email",value:n,type:"email"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.m,{id:"password",onChange:function(e){return u(e.value)},placeholder:"Enter your password",label:"Password",value:i,type:"password"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:function(e){!function(e,t,n){k.signInWithEmailAndPassword(t,n).catch((function(e){b("Error signing in with password and email!"),console.error("Error signing in with password and email",e)}))}(0,n,i),Object(s.c)("/")},text:"Sign in",color:"blue",inline:!0})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.l,null,"or")),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:T,text:"Sign in with Google",color:"red",inline:!0})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.l,null,"Don't have an account?")),r.a.createElement(p.b,{padding:2},r.a.createElement(s.a,{to:"signUp",className:"text-blue-500 hover:text-blue-600"},"Sign up here")),r.a.createElement(p.b,{padding:2},r.a.createElement(s.a,{to:"passwordReset",className:"text-blue-500 hover:text-blue-600"},"Forgot Password?")))))},M=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(m.a)(l,2),d=o[0],f=o[1],g=Object(a.useState)(""),b=Object(m.a)(g,2),E=b[0],h=b[1],v=Object(a.useState)(null),w=Object(m.a)(v,2),x=w[0],y=w[1],j=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a){var r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.createUserWithEmailAndPassword(n,a);case 3:r=e.sent,l=r.user,R(l,{displayName:E}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y("Error Signing up with email and password");case 11:c(""),f(""),h("");case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(p.b,{padding:3},r.a.createElement(p.e,null,r.a.createElement(p.b,{padding:3},null!==x&&r.a.createElement(p.n,{text:x}),r.a.createElement(p.f,{size:"md"},"Sign up")),r.a.createElement(p.b,{padding:2},r.a.createElement(p.m,{id:"displayName",onChange:function(e){return h(e.value)},placeholder:"Enter your name",label:"Name",value:E,type:"text"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.m,{id:"email",onChange:function(e){return c(e.value)},placeholder:"Enter your email",label:"Email",value:n,type:"email"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.m,{id:"password",onChange:function(e){return f(e.value)},placeholder:"Enter your password",label:"Password",value:d,type:"password"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:function(e){j(e,n,d),Object(s.c)("/")},text:"Sign up",color:"blue",inline:!0})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.l,null,"or")),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:T,text:"Sign in with Google",color:"red",inline:!0})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.l,null,"Already have an account?")),r.a.createElement(p.b,{padding:2},r.a.createElement(s.a,{to:"/",className:"text-blue-500 hover:text-blue-600"},"Sign in here")))))},X=n(20),Y=n.n(X),_=(n(51),function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),o=Object(m.a)(l,2),f=o[0],g=o[1],b=Object(d.b)(),E=Object(d.c)(w),h=E.map((function(e){return{value:e.email,label:e.name}})),x=h.length>0?h[0].value:"",y=Object(a.useState)(x),j=Object(m.a)(y,2),A=j[0],O=j[1],k=Object(d.c)(W),S=k.uid,C=k.email,T=Object(a.useRef)(null),R=Object(a.useRef)(null);Object(a.useEffect)((function(){Y()({path:"webviewer",disabledElements:["ribbons","toggleNotesButton","searchButton","menuButton"]},T.current).then((function(e){var t=e.iframeWindow;e.UI.setToolbarGroup("toolbarGroup-View"),c(e);var n=t.document.body;n.addEventListener("dragover",B),n.addEventListener("drop",(function(t){P(t,e)})),R.current.onchange=function(t){var n=t.target.files[0];n&&e.UI.loadDocument(n)}}))}),[]);var N=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r,c,l,o,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.Core,a=t.Annotations,r=t.documentViewer,c=r.getAnnotationManager(),l=c.getFieldManager(),o=c.getAnnotationsList(),s=[],d=[],e.next=8,Promise.all(o.map(function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof t.custom){e.next=20;break}if("TEXT"!==t.custom.type){e.next=6;break}o=new a.Forms.Field(t.getContents()+Date.now()+n,{type:"Tx",value:t.custom.value}),r=new a.TextWidgetAnnotation(o),e.next=18;break;case 6:if("SIGNATURE"!==t.custom.type){e.next=11;break}o=new a.Forms.Field(t.getContents()+Date.now()+n,{type:"Sig"}),r=new a.SignatureWidgetAnnotation(o,{appearance:"_DEFAULT",appearances:{_DEFAULT:{Normal:{data:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuMWMqnEsAAAANSURBVBhXY/j//z8DAAj8Av6IXwbgAAAAAElFTkSuQmCC",offset:{x:100,y:100}}}}}),e.next=18;break;case 11:if("DATE"!==t.custom.type){e.next=16;break}o=new a.Forms.Field(t.getContents()+Date.now()+n,{type:"Tx",value:"m-d-yyyy",actions:{F:[{name:"JavaScript",javascript:'AFDate_FormatEx("mmm d, yyyy");'}],K:[{name:"JavaScript",javascript:'AFDate_FormatEx("mmm d, yyyy");'}]}}),r=new a.DatePickerWidgetAnnotation(o),e.next=18;break;case 16:return c.deleteAnnotation(t,!1,!0),e.abrupt("return");case 18:e.next=21;break;case 20:return e.abrupt("return");case 21:r.PageNumber=t.getPageNumber(),r.X=t.getX(),r.Y=t.getY(),r.rotation=t.Rotation,0===t.Rotation||180===t.Rotation?(r.Width=t.getWidth(),r.Height=t.getHeight()):(r.Width=t.getHeight(),r.Height=t.getWidth()),s.push(t),a.WidgetAnnotation.getCustomStyles=function(e){if(e instanceof a.SignatureWidgetAnnotation)return{border:"1px solid #a5c7ff"}},a.WidgetAnnotation.getCustomStyles(r),c.addAnnotation(r),l.addField(o),d.push(r);case 32:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 8:return c.deleteAnnotations(s,null,!0),e.next=11,c.drawAnnotationsFromList(d);case 11:return e.next=13,L();case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=n.Core,l=c.documentViewer,o=c.Annotations,i=l.getAnnotationManager(),u=l.getDocument(),s=l.getDisplayModeManager().getDisplayMode(),d=s.getSelectedPages(t,t);if(!t.x||null!=d.first){var m=null!==d.first?d.first:l.getCurrentPage(),p=u.getPageInfo(m),f=s.windowToPage(t,m),g=l.getZoom(),b=new o.FreeTextAnnotation;b.PageNumber=m;var E=90*l.getCompleteRotation(m);b.Rotation=E,270===E||90===E?(b.Width=50/g,b.Height=250/g):(b.Width=250/g,b.Height=50/g),b.X=(f.x||p.width/2)-b.Width/2,b.Y=(f.y||p.height/2)-b.Height/2,b.setPadding(new o.Rect(0,0,0,0)),b.custom={type:e,value:a,flag:r,name:"".concat(A,"_").concat(e,"_")},b.setContents(b.custom.name),b.FontSize=20/g+"px",b.FillColor=new o.Color(211,211,211,.5),b.TextColor=new o.Color(0,165,228),b.StrokeThickness=1,b.StrokeColor=new o.Color(0,165,228),b.TextAlign="center",b.Author=i.getCurrentUser(),i.deselectAllAnnotations(),i.addAnnotation(b,!0),i.redrawAnnotation(b),i.selectAnnotation(b)}},L=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r,c,l,o,u,d,m,p,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=D.ref(),a="docToSign/".concat(S).concat(Date.now(),".pdf"),r=t.child(a),c=n.docViewer,l=n.annotManager,o=c.getDocument(),e.next=7,l.exportAnnotations({widgets:!0,fields:!0});case 7:return u=e.sent,e.next=10,o.getFileData({xfdfString:u});case 10:return d=e.sent,m=new Uint8Array(d),p=new Blob([m],{type:"application/pdf"}),r.put(p).then((function(e){console.log("Uploaded the blob")})),f=E.map((function(e){return e.email})),e.next=17,F(S,C,a,f);case 17:b(v()),Object(s.c)("/");case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(e){return e.preventDefault(),!1},P=function(e,t){var n=t.docViewer.getScrollViewElement(),a=n.scrollLeft||0,r=n.scrollTop||0;return g({x:e.pageX+a,y:e.pageY+r}),e.preventDefault(),!1},I=function(e){e.target.style.opacity=.5;var t=e.target.cloneNode(!0);t.id="form-build-drag-image-copy",t.style.width="250px",document.body.appendChild(t),e.dataTransfer.setDragImage(t,125,25),e.dataTransfer.setData("text","")},V=function(e,t){U(t,f),e.target.style.opacity=1,document.body.removeChild(document.getElementById("form-build-drag-image-copy")),e.preventDefault()};return r.a.createElement("div",{className:"prepareDocument"},r.a.createElement(p.b,{display:"flex",direction:"row",flex:"grow"},r.a.createElement(p.d,{span:2},r.a.createElement(p.b,{padding:3},r.a.createElement(p.f,{size:"md"},"Prepare Document")),r.a.createElement(p.b,{padding:3},r.a.createElement(p.g,{gap:1},r.a.createElement(p.j,null,r.a.createElement(p.b,{padding:2},r.a.createElement(p.l,null,"Step 1")),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:function(){R&&R.current.click()},accessibilityLabel:"upload a document",text:"Upload a document",iconEnd:"add-circle"})))),r.a.createElement(p.g,null,r.a.createElement(p.j,null,r.a.createElement(p.b,{padding:2},r.a.createElement(p.l,null,"Step 2")),r.a.createElement(p.b,{padding:2},r.a.createElement(p.h,{id:"assigningFor",name:"assign",onChange:function(e){var t=e.value;return O(t)},options:h,placeholder:"Select recipient",label:"Adding signature for",value:A})),r.a.createElement(p.b,{padding:2},r.a.createElement("div",{draggable:!0,onDragStart:function(e){return I(e)},onDragEnd:function(e){return V(e,"SIGNATURE")}},r.a.createElement(p.c,{onClick:function(){return U("SIGNATURE")},accessibilityLabel:"add signature",text:"Add signature",iconEnd:"compose"}))),r.a.createElement(p.b,{padding:2},r.a.createElement("div",{draggable:!0,onDragStart:function(e){return I(e)},onDragEnd:function(e){return V(e,"TEXT")}},r.a.createElement(p.c,{onClick:function(){return U("TEXT")},accessibilityLabel:"add text",text:"Add text",iconEnd:"text-sentence-case"}))),r.a.createElement(p.b,{padding:2},r.a.createElement("div",{draggable:!0,onDragStart:function(e){return I(e)},onDragEnd:function(e){return V(e,"DATE")}},r.a.createElement(p.c,{onClick:function(){return U("DATE")},accessibilityLabel:"add date field",text:"Add date",iconEnd:"calendar"}))))),r.a.createElement(p.g,{gap:1},r.a.createElement(p.j,null,r.a.createElement(p.b,{padding:2},r.a.createElement(p.l,null,"Step 3")),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:N,accessibilityLabel:"Send for signing",text:"Send",iconEnd:"send"})))))),r.a.createElement(p.d,{span:10},r.a.createElement("div",{className:"webviewer",ref:T}))),r.a.createElement("input",{type:"file",ref:R,style:{display:"none"}}))}),q=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(_,null))},J=Object(g.b)({name:"signDoc",initialState:{docToSign:null},reducers:{setDocToSign:function(e,t){e.docToSign=t.payload},resetDocToSign:function(e,t){e.docToSign=null}}}),Q=J.actions,K=Q.setDocToSign,Z=Q.resetDocToSign,$=function(e){return e.signDoc.docToSign},ee=J.reducer,te=(n(52),function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),o=Object(m.a)(l,2),f=o[0],g=o[1],b=Object(d.c)($),E=Object(d.c)(W),h=b.docRef,v=b.docId,w=E.email,x=Object(a.useRef)(null);Object(a.useEffect)((function(){Y()({path:"webviewer",disabledElements:["ribbons","toggleNotesButton","searchButton","menuButton","rubberStampToolGroupButton","stampToolGroupButton","fileAttachmentToolGroupButton","calloutToolGroupButton","undo","redo","eraserToolButton"]},x.current).then(function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,l,o,u,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Core,a=n.documentViewer,r=n.annotationManager,l=n.Annotations,c(r),t.UI.setToolbarGroup("toolbarGroup-Insert"),o=D.ref(),e.next=6,o.child(h).getDownloadURL();case 6:u=e.sent,a.loadDocument(u),s=function(e){return e instanceof l.TextWidgetAnnotation?{"background-color":"#a5c7ff",color:"white"}:e instanceof l.SignatureWidgetAnnotation?{border:"1px solid #a5c7ff"}:void 0},r.on("annotationChanged",(function(e,t,n){n.imported&&"add"===t&&e.forEach((function(e){e instanceof l.WidgetAnnotation&&(l.WidgetAnnotation.getCustomStyles=s,e.fieldName.startsWith(w)||(e.Hidden=!0,e.Listable=!1))}))}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[h,w]);var y=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.exportAnnotations({widgets:!1,links:!1});case 2:return t=e.sent,e.next=5,U(v,w,t);case 5:Object(s.c)("/");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"prepareDocument"},r.a.createElement(p.b,{display:"flex",direction:"row",flex:"grow"},r.a.createElement(p.d,{span:2},r.a.createElement(p.b,{padding:3},r.a.createElement(p.f,{size:"md"},"Sign Document")),r.a.createElement(p.b,{padding:3},r.a.createElement(p.g,{gap:1},r.a.createElement(p.j,null,r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:function(){var e=n.getAnnotationsList();e[f]&&(n.jumpToAnnotation(e[f]),e[f+1]&&g(f+1))},accessibilityLabel:"next field",text:"Next field",iconEnd:"arrow-forward"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:function(){var e=n.getAnnotationsList();e[f]&&(n.jumpToAnnotation(e[f]),e[f-1]&&g(f-1))},accessibilityLabel:"Previous field",text:"Previous field",iconEnd:"arrow-back"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:y,accessibilityLabel:"complete signing",text:"Complete signing",iconEnd:"compose"})))))),r.a.createElement(p.d,{span:10},r.a.createElement("div",{className:"webviewer",ref:x}))))}),ne=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(te,null))},ae=Object(g.b)({name:"viewDoc",initialState:{docToView:null},reducers:{setDocToView:function(e,t){e.docToView=t.payload},resetDocToView:function(e,t){e.docToView=null}}}),re=ae.actions,ce=re.setDocToView,le=re.resetDocToView,oe=function(e){return e.viewDoc.docToView},ie=ae.reducer,ue=(n(53),function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(d.c)(oe).docRef,o=Object(a.useRef)(null);Object(a.useEffect)((function(){Y()({path:"webviewer",disabledElements:["ribbons","toggleNotesButton","contextMenuPopup"]},o.current).then(function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.UI.setToolbarGroup("toolbarGroup-View"),c(t),n=D.ref(),e.next=5,n.child(l).getDownloadURL();case 5:a=e.sent,console.log(a),t.Core.documentViewer.loadDocument(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[l]);var f=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(s.c)("/");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"prepareDocument"},r.a.createElement(p.b,{display:"flex",direction:"row",flex:"grow"},r.a.createElement(p.d,{span:2},r.a.createElement(p.b,{padding:3},r.a.createElement(p.f,{size:"md"},"View Document")),r.a.createElement(p.b,{padding:3},r.a.createElement(p.g,{gap:1},r.a.createElement(p.j,null,r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:function(){n.UI.downloadPdf(!0)},accessibilityLabel:"download signed document",text:"Download",iconEnd:"download"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:f,accessibilityLabel:"complete signing",text:"Done viewing",iconEnd:"check"})))))),r.a.createElement(p.d,{span:10},r.a.createElement("div",{className:"webviewer",ref:o}))))}),se=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(ue,null))},de=function(){return r.a.createElement(p.b,{display:"flex",direction:"row",paddingY:2,color:"lightGray"},r.a.createElement(p.d,{span:10},r.a.createElement(p.b,{padding:3},r.a.createElement(p.f,{size:"lg"},"PDFTron Sign App"))))},me=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),o=Object(m.a)(l,2),i=o[0],u=o[1],d=Object(a.useState)(null),f=Object(m.a)(d,2),g=f[0],b=f[1];return r.a.createElement("div",null,r.a.createElement(p.b,{padding:3},r.a.createElement(p.e,null,r.a.createElement(p.b,{padding:3},r.a.createElement(p.f,{size:"md"},"Reset your password")),null!==g&&r.a.createElement(p.n,{text:g}),!1!==i&&r.a.createElement(p.n,{text:"An email with reset info is on the way"}),r.a.createElement(p.b,{padding:2},r.a.createElement(p.m,{id:"email",onChange:function(e){return c(e.value)},placeholder:"Enter your email",label:"Email",value:n,type:"email"})),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:function(e){k.sendPasswordResetEmail(n).then((function(){u(!0),setTimeout((function(){u(!1)}),3e3)})).catch((function(){b("Error resetting password")})),Object(s.c)("/")},text:"Reset",color:"blue",inline:!0})),r.a.createElement(p.b,{padding:2},r.a.createElement(s.a,{to:"/",className:"text-blue-500 hover:text-blue-600"},"Back to the Sign in")))))},pe=function(){var e=Object(d.c)(W).email,t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(!0),f=Object(m.a)(o,2),g=f[0],b=f[1],E=Object(d.b)();return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:n=t.sent,l(n),b(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}setTimeout((function(){return t.apply(this,arguments)}),1e3)}),[e]),r.a.createElement("div",null,g?r.a.createElement(p.i,{show:g,accessibilityLabel:"spinner"}):r.a.createElement("div",null,c.length>0?r.a.createElement(p.k,null,r.a.createElement(p.k.Header,null,r.a.createElement(p.k.Row,null,r.a.createElement(p.k.HeaderCell,null,r.a.createElement(p.l,{weight:"bold"},"From")),r.a.createElement(p.k.HeaderCell,null,r.a.createElement(p.l,{weight:"bold"},"When")))),r.a.createElement(p.k.Body,null,c.map((function(e){return r.a.createElement(p.k.Row,{key:e.docRef},r.a.createElement(p.k.Cell,null,r.a.createElement(p.l,null,e.email)),r.a.createElement(p.k.Cell,null,r.a.createElement(p.l,null,e.requestedTime?new Date(1e3*e.requestedTime.seconds).toDateString():"")),r.a.createElement(p.k.Cell,null,r.a.createElement(p.c,{onClick:function(t){var n=e.docRef,a=e.docId;E(K({docRef:n,docId:a})),Object(s.c)("/signDocument")},text:"Sign",color:"blue",inline:!0})))})))):"You do not have any documents to sign"))},fe=function(){var e=Object(d.c)(W).email,t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(!0),f=Object(m.a)(o,2),g=f[0],b=f[1],E=Object(d.b)();return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e);case 2:n=t.sent,l(n),b(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}setTimeout((function(){return t.apply(this,arguments)}),1e3)}),[e]),r.a.createElement("div",null,g?r.a.createElement(p.i,{show:g,accessibilityLabel:"spinner"}):r.a.createElement("div",null,c.length>0?r.a.createElement(p.k,null,r.a.createElement(p.k.Header,null,r.a.createElement(p.k.Row,null,r.a.createElement(p.k.HeaderCell,null,r.a.createElement(p.l,{weight:"bold"},"From")),r.a.createElement(p.k.HeaderCell,null,r.a.createElement(p.l,{weight:"bold"},"When")))),r.a.createElement(p.k.Body,null,c.map((function(e){return r.a.createElement(p.k.Row,{key:e.docRef},r.a.createElement(p.k.Cell,null,e.emails.map((function(e){return r.a.createElement(p.l,{key:e},e)}))),r.a.createElement(p.k.Cell,null,r.a.createElement(p.l,null,e.signedTime?new Date(1e3*e.signedTime.seconds).toDateString():"")),r.a.createElement(p.k.Cell,null,r.a.createElement(p.c,{onClick:function(t){var n=e.docRef,a=e.docId;E(ce({docRef:n,docId:a})),Object(s.c)("/viewDocument")},text:"View",color:"blue",inline:!0})))})))):"You do not have any documents to review"))},ge=function(){var e=Object(d.b)();return Object(a.useEffect)((function(){e(le()),e(Z())}),[e]),r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(p.e,null,r.a.createElement(p.b,{padding:3},r.a.createElement(p.f,{size:"md"},"Sign Documents")),r.a.createElement(p.b,{padding:3},r.a.createElement(pe,null)),r.a.createElement(p.b,{padding:3},r.a.createElement(p.f,{size:"md"},"Prepare Document")),r.a.createElement(p.b,{padding:2},r.a.createElement(p.c,{onClick:function(e){Object(s.c)("/assignUsers")},text:"Prepare Document for Signing",color:"blue",inline:!0})),r.a.createElement(p.b,{padding:3},r.a.createElement(p.f,{size:"md"},"Review Signed Documents")),r.a.createElement(p.b,{padding:3},r.a.createElement(fe,null))))},be=(n(54),function(){var e=Object(d.c)(W),t=Object(d.b)();return Object(a.useEffect)((function(){k.onAuthStateChanged(function(){var e=Object(u.a)(i.a.mark((function e(n){var a,r,c,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return e.next=3,R(n);case 3:a=e.sent,r=a.uid,c=a.displayName,l=a.email,o=a.photoURL,t(I({uid:r,displayName:c,email:l,photoURL:o}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),e?r.a.createElement("div",null,r.a.createElement(s.b,null,r.a.createElement(ge,{path:"/"}),r.a.createElement(H,{path:"/assignUsers"}),r.a.createElement(q,{path:"/prepareDocument"}),r.a.createElement(ne,{path:"/signDocument"}),r.a.createElement(se,{path:"/viewDocument"}))):r.a.createElement("div",null,r.a.createElement(de,null),r.a.createElement(s.b,null,r.a.createElement(z,{path:"/"}),r.a.createElement(M,{path:"signUp"}),r.a.createElement(me,{path:"passwordReset"})))}),Ee=Object(g.a)({reducer:{firebase:V,assign:x,signDoc:ee,viewDoc:ie}});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:Ee},r.a.createElement(be,null))),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.cb0c6255.chunk.js.map