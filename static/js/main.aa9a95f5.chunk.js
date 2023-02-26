(this["webpackJsonppdftron-sign-app"]=this["webpackJsonppdftron-sign-app"]||[]).push([[0],{50:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),l=n.n(c),o=(n(50),n(4)),i=n.n(o),u=n(9),s=n(15),d=n(6),m=n(11),p=n(7),f=n(3),g=(n(19),n(16)),b=n(22),E=Object(b.b)({name:"assign",initialState:{signees:[]},reducers:{addSignee:function(e,t){e.signees=[].concat(Object(g.a)(e.signees),[{key:t.payload.key,name:t.payload.name,email:t.payload.email}])},resetSignee:function(e,t){console.log("resetSignee"),e.signees=[]}}}),h=E.actions,v=h.addSignee,w=h.resetSignee,x=function(e){return e.assign.signees},y=E.reducer,j=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(p.a)(l,2),i=o[0],u=o[1],s=Object(a.useState)(!1),g=Object(p.a)(s,2),b=g[0],E=g[1],h=Object(m.c)(x),w=Object(m.b)(),y=Object(d.n)();return r.a.createElement("div",null,r.a.createElement(f.b,{padding:3},r.a.createElement(f.e,null,r.a.createElement(f.b,{padding:3},r.a.createElement(f.f,{size:"md"},"Who needs to sign?")),r.a.createElement(f.b,{padding:2},r.a.createElement(f.m,{id:"displayName",onChange:function(e){return u(e.value)},placeholder:"Enter recipient's name",label:"Name",value:i,type:"text"})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.m,{id:"email",onChange:function(e){return c(e.value)},placeholder:"Enter recipient's email",label:"Email",value:n,type:"email"})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:function(e){!function(e,t){var n="".concat((new Date).getTime()).concat(t);""!==e&&""!==t&&(w(v({key:n,name:e,email:t})),c(""),u(""))}(i,n)},text:"Add user",color:"blue",inline:!0})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.k,null,r.a.createElement(f.k.Header,null,r.a.createElement(f.k.Row,null,r.a.createElement(f.k.HeaderCell,null,r.a.createElement(f.l,{weight:"bold"},"Name")),r.a.createElement(f.k.HeaderCell,null,r.a.createElement(f.l,{weight:"bold"},"Email")))),r.a.createElement(f.k.Body,null,h.map((function(e){return r.a.createElement(f.k.Row,{key:e.key},r.a.createElement(f.k.Cell,null,r.a.createElement(f.l,null,e.name)),r.a.createElement(f.k.Cell,null,r.a.createElement(f.l,null,e.email)))}))))),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:function(){h.length>0?y("/prepareDocument"):(E(!0),setTimeout((function(){return E(!1)}),1e3))},text:"Continue",color:"blue",inline:!0})),r.a.createElement(f.b,{fit:!0,dangerouslySetInlineStyle:{__style:{bottom:50,left:"50%",transform:"translateX(-50%)"}},paddingX:1,position:"fixed"},b&&r.a.createElement(f.n,{color:"red",text:r.a.createElement(r.a.Fragment,null,"Please add at least one user")})))))},A=n(43),k=n(29),O=(n(56),n(65),n(66),function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,r,c,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.Core,r=window.PDFNet,a.setWorkerPath("./webviewer/core"),c=T.ref(),e.next=6,c.child(t).getDownloadURL();case 6:return l=e.sent,o=function(){var e=Object(u.a)(i.a.mark((function e(){var a,o,u,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.PDFDoc.createFromURL(l);case 2:(a=e.sent).initSecurityHandler(),o=0;case 5:if(!(o<n.length)){e.next=17;break}return console.log(n[o]),e.next=9,r.FDFDoc.createFromXFDF(n[o]);case 9:return u=e.sent,e.next=12,a.fdfMerge(u);case 12:return e.next=14,a.flattenAnnotations();case 14:o++,e.next=5;break;case 17:return e.next=19,a.saveMemoryBuffer(r.SDFDoc.SaveOptions.e_linearized);case 19:s=e.sent,d=new Blob([s],{type:"application/pdf"}),c.child(t).put(d).then((function(e){console.log("Uploaded the blob")}));case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=10,r.runWithCleanup(o);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());k.a.initializeApp({apiKey:"AIzaSyBlV3EE6N_jVk6h85V6fPVfV5-Il3utd8o",authDomain:"pdf-signdocs.firebaseapp.com",databaseURL:"https://pdf-signdocs.firebaseio.com",projectId:"pdf-signdocs",storageBucket:"pdf-signdocs.appspot.com",messagingSenderId:"35892522614",appId:"1:35892522614:web:8cfc75d8427c5aafd9f957"});var S=k.a.auth(),D=k.a.firestore(),T=k.a.storage(),C=new k.a.auth.GoogleAuthProvider,R=function(){S.signInWithPopup(C)},N=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=D.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=16;break}return r=t.email,c=t.displayName,l=t.photoURL,e.prev=8,e.next=11,a.set(Object(A.a)({displayName:c,email:r,photoURL:l},n));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 16:return e.abrupt("return",F(t.uid));case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,D.doc("users/".concat(t)).get();case 5:return n=e.sent,e.abrupt("return",Object(A.a)({uid:t},n.data()));case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a,r){var c,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:!1,c=[],l=[],o=new Date,"",D.collection("documentsToSign").add({uid:t,email:n,docRef:a,emails:r,xfdf:c,signedBy:l,signed:false,requestedTime:o,signedTime:""}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=D.collection("documentsToSign").doc(t)).get().then(function(){var e=Object(u.a)(i.a.mark((function e(t){var c,l,o,u,s,d,m,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.exists){e.next=14;break}if(c=t.data(),l=c.signedBy,o=c.emails,u=c.xfdf,s=c.docRef,l.includes(n)){e.next=12;break}return d=[].concat(Object(g.a)(l),[n]),m=[].concat(Object(g.a)(u),[a]),e.next=7,r.update({xfdf:m,signedBy:d});case 7:if(d.length!==o.length){e.next=12;break}return p=new Date,e.next=11,r.update({signed:!0,signedTime:p});case 11:O(s,m);case 12:e.next=15;break;case 14:console.log("No such document!");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Error getting document:",e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=D.collection("documentsToSign"),a=n.where("emails","array-contains",t).where("signed","==",!1),r=n.where("signedBy","array-contains",t),c=[],l=[],e.next=7,r.get().then((function(e){e.forEach((function(e){var t=e.id;l.push(t)}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 7:return e.next=9,a.get().then((function(e){e.forEach((function(e){var t=e.data(),n=t.docRef,a=t.email,r=t.requestedTime,o=e.id;l.includes(o)||c.push({docRef:n,email:a,requestedTime:r,docId:o})}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=D.collection("documentsToSign"),a=[],r=n.where("email","==",t).where("signed","==",!0),e.next=5,r.get().then((function(e){e.forEach((function(e){var t=e.data(),n=t.docRef,r=t.emails,c=t.signedTime,l=e.id;a.push({docRef:n,emails:r,signedTime:c,docId:l})}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=Object(b.b)({name:"firebase",initialState:{user:null,docs:[],docsSigned:[]},reducers:{setUser:function(e,t){e.user=t.payload}}}),W=P.actions.setUser,V=function(e){return e.firebase.user},H=P.reducer,G=(n(59),function(){var e=Object(m.b)(),t=Object(d.n)(),n=Object(m.c)(V);if(!n)return null;var a=n.displayName,c=n.photoURL,l=n.email;return r.a.createElement(f.b,{display:"flex",direction:"row",paddingY:2,color:"lightGray"},r.a.createElement(f.d,{span:9},r.a.createElement(f.b,{padding:3},r.a.createElement(s.b,{to:"/",className:"profileLink"},r.a.createElement(f.f,{size:"lg"},"PDFTron Sign App")))),r.a.createElement(f.d,{span:3},r.a.createElement(f.b,{padding:1},r.a.createElement(f.g,null,r.a.createElement(f.b,{padding:1},r.a.createElement(f.a,{name:a,size:"md",src:c})),r.a.createElement(f.j,null,r.a.createElement(f.l,{weight:"bold"},a),r.a.createElement(f.l,null,l)),r.a.createElement(f.b,{padding:1},r.a.createElement(f.c,{onClick:function(){S.signOut(),e(W(null)),e(w()),t("/")},accessibilityLabel:"Sign out of your account",text:"Sign out"}))))))}),z=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(j,null))},M=function(){var e=Object(m.c)(V),t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),g=Object(p.a)(o,2),b=g[0],E=g[1],h=Object(a.useState)(""),v=Object(p.a)(h,2),w=v[0],x=v[1],y=Object(a.useState)(null),j=Object(p.a)(y,2),A=j[0],k=j[1],O=Object(d.n)(),D=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.createUserWithEmailAndPassword(n,a);case 3:r=e.sent,c=r.user,N(c,{displayName:w}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k("Error Signing up with email and password");case 11:l(""),E(""),x("");case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,a){return e.apply(this,arguments)}}();return e?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(f.b,{padding:3},r.a.createElement(f.e,null,r.a.createElement(f.b,{padding:3},null!==A&&r.a.createElement(f.n,{text:A}),r.a.createElement(f.f,{size:"md"},"Sign up")),r.a.createElement(f.b,{padding:2},r.a.createElement(f.m,{id:"displayName",onChange:function(e){return x(e.value)},placeholder:"Enter your name",label:"Name",value:w,type:"text"})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.m,{id:"email",onChange:function(e){return l(e.value)},placeholder:"Enter your email",label:"Email",value:c,type:"email"})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.m,{id:"password",onChange:function(e){return E(e.value)},placeholder:"Enter your password",label:"Password",value:b,type:"password"})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:function(e){D(e,c,b),O("/")},text:"Sign up",color:"blue",inline:!0})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.l,null,"or")),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:R,text:"Sign in with Google",color:"red",inline:!0})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.l,null,"Already have an account?")),r.a.createElement(f.b,{padding:2},r.a.createElement(s.b,{to:"/",className:"text-blue-500 hover:text-blue-600"},"Sign in here")))))},X=n(28),Y=n.n(X),_=(n(60),function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),o=Object(p.a)(l,2),s=o[0],g=o[1],b=Object(d.n)(),E=Object(m.b)(),h=Object(m.c)(x),v=h.map((function(e){return{value:e.email,label:e.name}})),y=v.length>0?v[0].value:"",j=Object(a.useState)(y),A=Object(p.a)(j,2),k=A[0],O=A[1],S=Object(m.c)(V),D=S.uid,C=S.email,R=Object(a.useRef)(null),N=Object(a.useRef)(null);Object(a.useEffect)((function(){Y()({path:"webviewer",disabledElements:["ribbons","toggleNotesButton","searchButton","menuButton"]},R.current).then((function(e){var t=e.iframeWindow;e.UI.setToolbarGroup("toolbarGroup-View"),c(e);var n=t.document.body;n.addEventListener("dragover",I),n.addEventListener("drop",(function(t){P(t,e)})),N.current.onchange=function(t){var n=t.target.files[0];n&&e.UI.loadDocument(n)}}))}),[]);var F=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r,c,l,o,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.Core,a=t.Annotations,r=t.documentViewer,c=r.getAnnotationManager(),l=c.getFieldManager(),o=c.getAnnotationsList(),s=[],d=[],e.next=8,Promise.all(o.map(function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof t.custom){e.next=20;break}if("TEXT"!==t.custom.type){e.next=6;break}o=new a.Forms.Field(t.getContents()+Date.now()+n,{type:"Tx",value:t.custom.value}),r=new a.TextWidgetAnnotation(o),e.next=18;break;case 6:if("SIGNATURE"!==t.custom.type){e.next=11;break}o=new a.Forms.Field(t.getContents()+Date.now()+n,{type:"Sig"}),r=new a.SignatureWidgetAnnotation(o,{appearance:"_DEFAULT",appearances:{_DEFAULT:{Normal:{data:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuMWMqnEsAAAANSURBVBhXY/j//z8DAAj8Av6IXwbgAAAAAElFTkSuQmCC",offset:{x:100,y:100}}}}}),e.next=18;break;case 11:if("DATE"!==t.custom.type){e.next=16;break}o=new a.Forms.Field(t.getContents()+Date.now()+n,{type:"Tx",value:"m-d-yyyy",actions:{F:[{name:"JavaScript",javascript:'AFDate_FormatEx("mmm d, yyyy");'}],K:[{name:"JavaScript",javascript:'AFDate_FormatEx("mmm d, yyyy");'}]}}),r=new a.DatePickerWidgetAnnotation(o),e.next=18;break;case 16:return c.deleteAnnotation(t,!1,!0),e.abrupt("return");case 18:e.next=21;break;case 20:return e.abrupt("return");case 21:r.PageNumber=t.getPageNumber(),r.X=t.getX(),r.Y=t.getY(),r.rotation=t.Rotation,0===t.Rotation||180===t.Rotation?(r.Width=t.getWidth(),r.Height=t.getHeight()):(r.Width=t.getHeight(),r.Height=t.getWidth()),s.push(t),a.WidgetAnnotation.getCustomStyles=function(e){if(e instanceof a.SignatureWidgetAnnotation)return{border:"1px solid #a5c7ff"}},a.WidgetAnnotation.getCustomStyles(r),c.addAnnotation(r),l.addField(o),d.push(r);case 32:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 8:return c.deleteAnnotations(s,null,!0),e.next=11,c.drawAnnotationsFromList(d);case 11:return e.next=13,B();case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=n.Core,l=c.documentViewer,o=c.Annotations,i=l.getAnnotationManager(),u=l.getDocument(),s=l.getDisplayModeManager().getDisplayMode(),d=s.getSelectedPages(t,t);if(!t.x||null!=d.first){var m=null!==d.first?d.first:l.getCurrentPage(),p=u.getPageInfo(m),f=s.windowToPage(t,m),g=l.getZoom(),b=new o.FreeTextAnnotation;b.PageNumber=m;var E=90*l.getCompleteRotation(m);b.Rotation=E,270===E||90===E?(b.Width=50/g,b.Height=250/g):(b.Width=250/g,b.Height=50/g),b.X=(f.x||p.width/2)-b.Width/2,b.Y=(f.y||p.height/2)-b.Height/2,b.setPadding(new o.Rect(0,0,0,0)),b.custom={type:e,value:a,flag:r,name:"".concat(k,"_").concat(e,"_")},b.setContents(b.custom.name),b.FontSize=20/g+"px",b.FillColor=new o.Color(211,211,211,.5),b.TextColor=new o.Color(0,165,228),b.StrokeThickness=1,b.StrokeColor=new o.Color(0,165,228),b.TextAlign="center",b.Author=i.getCurrentUser(),i.deselectAllAnnotations(),i.addAnnotation(b,!0),i.redrawAnnotation(b),i.selectAnnotation(b)}},B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r,c,l,o,u,s,d,m,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=T.ref(),a="docToSign/".concat(D).concat(Date.now(),".pdf"),r=t.child(a),c=n.docViewer,l=n.annotManager,o=c.getDocument(),e.next=7,l.exportAnnotations({widgets:!0,fields:!0});case 7:return u=e.sent,e.next=10,o.getFileData({xfdfString:u});case 10:return s=e.sent,d=new Uint8Array(s),m=new Blob([d],{type:"application/pdf"}),r.put(m).then((function(e){console.log("Uploaded the blob")})),p=h.map((function(e){return e.email})),e.next=17,U(D,C,a,p);case 17:E(w()),b("/");case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){return e.preventDefault(),!1},P=function(e,t){var n=t.docViewer.getScrollViewElement(),a=n.scrollLeft||0,r=n.scrollTop||0;return g({x:e.pageX+a,y:e.pageY+r}),e.preventDefault(),!1},W=function(e){e.target.style.opacity=.5;var t=e.target.cloneNode(!0);t.id="form-build-drag-image-copy",t.style.width="250px",document.body.appendChild(t),e.dataTransfer.setDragImage(t,125,25),e.dataTransfer.setData("text","")},H=function(e,t){L(t,s),e.target.style.opacity=1,document.body.removeChild(document.getElementById("form-build-drag-image-copy")),e.preventDefault()};return r.a.createElement("div",{className:"prepareDocument"},r.a.createElement(f.b,{display:"flex",direction:"row",flex:"grow"},r.a.createElement(f.d,{span:2},r.a.createElement(f.b,{padding:3},r.a.createElement(f.f,{size:"md"},"Prepare Document")),r.a.createElement(f.b,{padding:3},r.a.createElement(f.g,{gap:1},r.a.createElement(f.j,null,r.a.createElement(f.b,{padding:2},r.a.createElement(f.l,null,"Step 1")),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:function(){N&&N.current.click()},accessibilityLabel:"upload a document",text:"Upload a document",iconEnd:"add-circle"})))),r.a.createElement(f.g,null,r.a.createElement(f.j,null,r.a.createElement(f.b,{padding:2},r.a.createElement(f.l,null,"Step 2")),r.a.createElement(f.b,{padding:2},r.a.createElement(f.h,{id:"assigningFor",name:"assign",onChange:function(e){var t=e.value;return O(t)},options:v,placeholder:"Select recipient",label:"Adding signature for",value:k})),r.a.createElement(f.b,{padding:2},r.a.createElement("div",{draggable:!0,onDragStart:function(e){return W(e)},onDragEnd:function(e){return H(e,"SIGNATURE")}},r.a.createElement(f.c,{onClick:function(){return L("SIGNATURE")},accessibilityLabel:"add signature",text:"Add signature",iconEnd:"compose"}))),r.a.createElement(f.b,{padding:2},r.a.createElement("div",{draggable:!0,onDragStart:function(e){return W(e)},onDragEnd:function(e){return H(e,"TEXT")}},r.a.createElement(f.c,{onClick:function(){return L("TEXT")},accessibilityLabel:"add text",text:"Add text",iconEnd:"text-sentence-case"}))),r.a.createElement(f.b,{padding:2},r.a.createElement("div",{draggable:!0,onDragStart:function(e){return W(e)},onDragEnd:function(e){return H(e,"DATE")}},r.a.createElement(f.c,{onClick:function(){return L("DATE")},accessibilityLabel:"add date field",text:"Add date",iconEnd:"calendar"}))))),r.a.createElement(f.g,{gap:1},r.a.createElement(f.j,null,r.a.createElement(f.b,{padding:2},r.a.createElement(f.l,null,"Step 3")),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:F,accessibilityLabel:"Send for signing",text:"Send",iconEnd:"send"})))))),r.a.createElement(f.d,{span:10},r.a.createElement("div",{className:"webviewer",ref:R}))),r.a.createElement("input",{type:"file",ref:N,style:{display:"none"}}))}),q=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(_,null))},J=Object(b.b)({name:"signDoc",initialState:{docToSign:null},reducers:{setDocToSign:function(e,t){e.docToSign=t.payload},resetDocToSign:function(e,t){e.docToSign=null}}}),Q=J.actions,K=Q.setDocToSign,Z=Q.resetDocToSign,$=function(e){return e.signDoc.docToSign},ee=J.reducer,te=(n(61),function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),o=Object(p.a)(l,2),s=o[0],g=o[1],b=Object(d.n)(),E=Object(m.c)($),h=Object(m.c)(V),v=E.docRef,w=E.docId,x=h.email,y=Object(a.useRef)(null);Object(a.useEffect)((function(){Y()({path:"webviewer",disabledElements:["ribbons","toggleNotesButton","searchButton","menuButton","rubberStampToolGroupButton","stampToolGroupButton","fileAttachmentToolGroupButton","calloutToolGroupButton","undo","redo","eraserToolButton"]},y.current).then(function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,l,o,u,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Core,a=n.documentViewer,r=n.annotationManager,l=n.Annotations,c(r),t.UI.setToolbarGroup("toolbarGroup-Insert"),o=T.ref(),e.next=6,o.child(v).getDownloadURL();case 6:u=e.sent,a.loadDocument(u),s=function(e){return e instanceof l.TextWidgetAnnotation?{"background-color":"#a5c7ff",color:"white"}:e instanceof l.SignatureWidgetAnnotation?{border:"1px solid #a5c7ff"}:void 0},r.on("annotationChanged",(function(e,t,n){n.imported&&"add"===t&&e.forEach((function(e){e instanceof l.WidgetAnnotation&&(l.WidgetAnnotation.getCustomStyles=s,e.fieldName.startsWith(x)||(e.Hidden=!0,e.Listable=!1))}))}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[v,x]);var j=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.exportAnnotations({widgets:!1,links:!1});case 2:return t=e.sent,e.next=5,L(w,x,t);case 5:b("/");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"prepareDocument"},r.a.createElement(f.b,{display:"flex",direction:"row",flex:"grow"},r.a.createElement(f.d,{span:2},r.a.createElement(f.b,{padding:3},r.a.createElement(f.f,{size:"md"},"Sign Document")),r.a.createElement(f.b,{padding:3},r.a.createElement(f.g,{gap:1},r.a.createElement(f.j,null,r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:function(){var e=n.getAnnotationsList();e[s]&&(n.jumpToAnnotation(e[s]),e[s+1]&&g(s+1))},accessibilityLabel:"next field",text:"Next field",iconEnd:"arrow-forward"})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:function(){var e=n.getAnnotationsList();e[s]&&(n.jumpToAnnotation(e[s]),e[s-1]&&g(s-1))},accessibilityLabel:"Previous field",text:"Previous field",iconEnd:"arrow-back"})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:j,accessibilityLabel:"complete signing",text:"Complete signing",iconEnd:"compose"})))))),r.a.createElement(f.d,{span:10},r.a.createElement("div",{className:"webviewer",ref:y}))))}),ne=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(te,null))},ae=Object(b.b)({name:"viewDoc",initialState:{docToView:null},reducers:{setDocToView:function(e,t){e.docToView=t.payload},resetDocToView:function(e,t){e.docToView=null}}}),re=ae.actions,ce=re.setDocToView,le=re.resetDocToView,oe=function(e){return e.viewDoc.docToView},ie=ae.reducer,ue=(n(62),function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(d.n)(),o=Object(m.c)(oe).docRef,s=Object(a.useRef)(null);Object(a.useEffect)((function(){Y()({path:"webviewer",disabledElements:["ribbons","toggleNotesButton","contextMenuPopup"]},s.current).then(function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.UI.setToolbarGroup("toolbarGroup-View"),c(t),n=T.ref(),e.next=5,n.child(o).getDownloadURL();case 5:a=e.sent,console.log(a),t.Core.documentViewer.loadDocument(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[o]);var g=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l("/");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"prepareDocument"},r.a.createElement(f.b,{display:"flex",direction:"row",flex:"grow"},r.a.createElement(f.d,{span:2},r.a.createElement(f.b,{padding:3},r.a.createElement(f.f,{size:"md"},"View Document")),r.a.createElement(f.b,{padding:3},r.a.createElement(f.g,{gap:1},r.a.createElement(f.j,null,r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:function(){n.UI.downloadPdf(!0)},accessibilityLabel:"download signed document",text:"Download",iconEnd:"download"})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:g,accessibilityLabel:"complete signing",text:"Done viewing",iconEnd:"check"})))))),r.a.createElement(f.d,{span:10},r.a.createElement("div",{className:"webviewer",ref:s}))))}),se=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(ue,null))},de=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),o=Object(p.a)(l,2),i=o[0],u=o[1],m=Object(a.useState)(null),g=Object(p.a)(m,2),b=g[0],E=g[1],h=Object(d.n)();return r.a.createElement("div",null,r.a.createElement(f.b,{padding:3},r.a.createElement(f.e,null,r.a.createElement(f.b,{padding:3},r.a.createElement(f.f,{size:"md"},"Reset your password")),null!==b&&r.a.createElement(f.n,{text:b}),!1!==i&&r.a.createElement(f.n,{text:"An email with reset info is on the way"}),r.a.createElement(f.b,{padding:2},r.a.createElement(f.m,{id:"email",onChange:function(e){return c(e.value)},placeholder:"Enter your email",label:"Email",value:n,type:"email"})),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:function(e){S.sendPasswordResetEmail(n).then((function(){u(!0),setTimeout((function(){u(!1)}),3e3)})).catch((function(){E("Error resetting password")})),h("/")},text:"Reset",color:"blue",inline:!0})),r.a.createElement(f.b,{padding:2},r.a.createElement(s.b,{to:"/",className:"text-blue-500 hover:text-blue-600"},"Back to the Sign in")))))},me=function(){var e=Object(m.c)(V).email,t=Object(d.n)(),n=Object(a.useState)([]),c=Object(p.a)(n,2),l=c[0],o=c[1],s=Object(a.useState)(!0),g=Object(p.a)(s,2),b=g[0],E=g[1],h=Object(m.b)();return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e);case 2:n=t.sent,o(n),E(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}setTimeout((function(){return t.apply(this,arguments)}),1e3)}),[e]),r.a.createElement("div",null,b?r.a.createElement(f.i,{show:b,accessibilityLabel:"spinner"}):r.a.createElement("div",null,l.length>0?r.a.createElement(f.k,null,r.a.createElement(f.k.Header,null,r.a.createElement(f.k.Row,null,r.a.createElement(f.k.HeaderCell,null,r.a.createElement(f.l,{weight:"bold"},"From")),r.a.createElement(f.k.HeaderCell,null,r.a.createElement(f.l,{weight:"bold"},"When")))),r.a.createElement(f.k.Body,null,l.map((function(e){return r.a.createElement(f.k.Row,{key:e.docRef},r.a.createElement(f.k.Cell,null,r.a.createElement(f.l,null,e.email)),r.a.createElement(f.k.Cell,null,r.a.createElement(f.l,null,e.requestedTime?new Date(1e3*e.requestedTime.seconds).toDateString():"")),r.a.createElement(f.k.Cell,null,r.a.createElement(f.c,{onClick:function(n){var a=e.docRef,r=e.docId;h(K({docRef:a,docId:r})),t("/signDocument")},text:"Sign",color:"blue",inline:!0})))})))):"You do not have any documents to sign"))},pe=function(){var e=Object(m.c)(V).email,t=Object(a.useState)([]),n=Object(p.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(!0),s=Object(p.a)(o,2),g=s[0],b=s[1],E=Object(d.n)(),h=Object(m.b)();return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:n=t.sent,l(n),b(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}setTimeout((function(){return t.apply(this,arguments)}),1e3)}),[e]),r.a.createElement("div",null,g?r.a.createElement(f.i,{show:g,accessibilityLabel:"spinner"}):r.a.createElement("div",null,c.length>0?r.a.createElement(f.k,null,r.a.createElement(f.k.Header,null,r.a.createElement(f.k.Row,null,r.a.createElement(f.k.HeaderCell,null,r.a.createElement(f.l,{weight:"bold"},"From")),r.a.createElement(f.k.HeaderCell,null,r.a.createElement(f.l,{weight:"bold"},"When")))),r.a.createElement(f.k.Body,null,c.map((function(e){return r.a.createElement(f.k.Row,{key:e.docRef},r.a.createElement(f.k.Cell,null,e.emails.map((function(e){return r.a.createElement(f.l,{key:e},e)}))),r.a.createElement(f.k.Cell,null,r.a.createElement(f.l,null,e.signedTime?new Date(1e3*e.signedTime.seconds).toDateString():"")),r.a.createElement(f.k.Cell,null,r.a.createElement(f.c,{onClick:function(t){var n=e.docRef,a=e.docId;h(ce({docRef:n,docId:a})),E("/viewDocument")},text:"View",color:"blue",inline:!0})))})))):"You do not have any documents to review"))},fe=function(){var e=Object(m.b)(),t=Object(d.n)();return Object(a.useEffect)((function(){e(le()),e(Z())}),[e]),r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(f.e,null,r.a.createElement(f.b,{padding:3},r.a.createElement(f.f,{size:"md"},"Sign Documents")),r.a.createElement(f.b,{padding:3},r.a.createElement(me,null)),r.a.createElement(f.b,{padding:3},r.a.createElement(f.f,{size:"md"},"Prepare Document")),r.a.createElement(f.b,{padding:2},r.a.createElement(f.c,{onClick:function(e){t("/assignUsers")},text:"Prepare Document for Signing",color:"blue",inline:!0})),r.a.createElement(f.b,{padding:3},r.a.createElement(f.f,{size:"md"},"Review Signed Documents")),r.a.createElement(f.b,{padding:3},r.a.createElement(pe,null))))};n(63);function ge(){Object(m.c)(V);var e=Object(m.b)();return Object(a.useEffect)((function(){S.onAuthStateChanged(function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r,c,l,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=6;break}return t.next=3,N(n);case 3:a=t.sent,r=a.uid,c=a.displayName,l=a.email,o=a.photoURL,e(W({uid:r,displayName:c,email:l,photoURL:o}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e]),r.a.createElement(s.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",element:r.a.createElement(be,null,r.a.createElement(fe,null))}),r.a.createElement(d.b,{path:"/signUp",element:r.a.createElement(M,null)}),r.a.createElement(d.b,{path:"/passwordReset",element:r.a.createElement(de,null)}),r.a.createElement(d.b,{path:"/assignUsers",element:r.a.createElement(be,null,r.a.createElement(z,null))}),r.a.createElement(d.b,{path:"/prepareDocument",element:r.a.createElement(be,null,r.a.createElement(q,null))}),r.a.createElement(d.b,{path:"/signDocument",element:r.a.createElement(be,null,r.a.createElement(ne,null))}),r.a.createElement(d.b,{path:"/viewDocument",element:r.a.createElement(be,null,r.a.createElement(se,null))})))}function be(e){var t=e.children,n=Object(m.c)(V),a=Object(d.l)();return console.log({user:n,children:t}),n?t:r.a.createElement(d.a,{to:"/signUp",state:{from:a},replace:!0})}var Ee=Object(b.a)({reducer:{firebase:H,assign:y,signDoc:ee,viewDoc:ie}});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:Ee},r.a.createElement(ge,null))),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.aa9a95f5.chunk.js.map