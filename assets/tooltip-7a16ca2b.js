import{ao as ye,an as we,s as C,ar as Ve,aW as Qe,r as l,au as de,av as J,j as e,at as b,ay as xe,az as he,bo as Ze,b as Te,ax as Ye,bu as Je,c0 as Xe,c1 as We,x as De,c as G,e as et,i as z,P as M,u as tt,B as A,C as Le,d as Ue,a as r,O as ve,am as g,A as Y,l as nt,m as st,G as a,c2 as rt,q as Me,t as ne,v as Re,T as it,c3 as ot,bk as at,I as P,c4 as lt,c5 as ct,bl as dt,a6 as N,F as Ee,aK as _e,S as Ge,a8 as xt,aa as ht}from"./index-fe46112a.js";import{S as R}from"./Stack-1643198d.js";import{b as pt,g as ut,D as V,a as se}from"./DialogContent-73f6afda.js";import{L as re}from"./ListItemText-e2b61adf.js";import{A as Se}from"./Add-dcf4ee2d.js";import{D as ie}from"./DialogActions-08e7086f.js";import{F as mt}from"./FormControlLabel-8e6e2fd4.js";import{S as jt}from"./Switch-5d38919d.js";import{d as gt,e as ft,a as Ct,s as U,S as oe,b as ae,c as le}from"./Stepper-a934a116.js";import{c as h,T as ke,a as $,b as Ae}from"./TableRow-d71ac22c.js";import{T as He}from"./TableContainer-284c5a39.js";import{T as Ie}from"./TableHead-b40e861a.js";import{T as x,t as qe}from"./Tooltip-19c00876.js";import{D as Be}from"./Delete-d386abfe.js";import{S as Oe}from"./Search-b3fbb7fd.js";function bt(t){return ye("MuiDialogContentText",t)}we("MuiDialogContentText",["root"]);const vt=["children","className"],St=t=>{const{classes:n}=t,s=he({root:["root"]},bt,n);return b({},n,s)},yt=C(Ve,{shouldForwardProp:t=>Qe(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,n)=>n.root})({}),wt=l.forwardRef(function(n,o){const s=de({props:n,name:"MuiDialogContentText"}),{className:u}=s,c=J(s,vt),f=St(c);return e.jsx(yt,b({component:"p",variant:"body1",color:"text.secondary",ref:o,ownerState:c,className:xe(f.root,u)},s,{classes:f}))}),ce=wt,Tt=["className","id"],Dt=t=>{const{classes:n}=t;return he({root:["root"]},ut,n)},kt=C(Ve,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),At=l.forwardRef(function(n,o){const s=de({props:n,name:"MuiDialogTitle"}),{className:u,id:c}=s,f=J(s,Tt),m=s,v=Dt(m),{titleId:y=c}=l.useContext(pt);return e.jsx(kt,b({component:"h2",className:xe(v.root,u),ownerState:m,ref:o,variant:"h6",id:c??y},f))}),q=At;function It(t){return ye("MuiListItemAvatar",t)}we("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Ft=["className"],Wt=t=>{const{alignItems:n,classes:o}=t;return he({root:["root",n==="flex-start"&&"alignItemsFlexStart"]},It,o)},Lt=C("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,o.alignItems==="flex-start"&&n.alignItemsFlexStart]}})(({ownerState:t})=>b({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),Mt=l.forwardRef(function(n,o){const s=de({props:n,name:"MuiListItemAvatar"}),{className:u}=s,c=J(s,Ft),f=l.useContext(Ze),m=b({},s,{alignItems:f.alignItems}),v=Wt(m);return e.jsx(Lt,b({className:xe(v.root,u),ownerState:m,ref:o},c))}),Pe=Mt,Rt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Et={entering:{transform:"none"},entered:{transform:"none"}},Bt=l.forwardRef(function(n,o){const s=Te(),u={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{addEndListener:c,appear:f=!0,children:m,easing:v,in:y,onEnter:E,onEntered:D,onEntering:I,onExit:w,onExited:B,onExiting:k,style:F,timeout:i=u,TransitionComponent:j=Je}=n,W=J(n,Rt),T=l.useRef(null),ue=Ye(T,m.ref,o),O=d=>L=>{if(d){const H=T.current;L===void 0?d(H):d(H,L)}},X=O(I),ee=O((d,L)=>{Xe(d);const H=We({style:F,timeout:i,easing:v},{mode:"enter"});d.style.webkitTransition=s.transitions.create("transform",H),d.style.transition=s.transitions.create("transform",H),E&&E(d,L)}),me=O(D),te=O(k),je=O(d=>{const L=We({style:F,timeout:i,easing:v},{mode:"exit"});d.style.webkitTransition=s.transitions.create("transform",L),d.style.transition=s.transitions.create("transform",L),w&&w(d)}),ge=O(B),fe=d=>{c&&c(T.current,d)};return e.jsx(j,b({appear:f,in:y,nodeRef:T,onEnter:ee,onEntered:me,onEntering:X,onExit:je,onExited:ge,onExiting:te,addEndListener:fe,timeout:i},W,{children:(d,L)=>l.cloneElement(m,b({style:b({transform:"scale(0)",visibility:d==="exited"&&!y?"hidden":void 0},Et[d],F,m.props.style),ref:ue},L))}))}),Ot=Bt;function Pt(t){return ye("MuiStepContent",t)}we("MuiStepContent",["root","last","transition"]);const zt=["children","className","TransitionComponent","transitionDuration","TransitionProps"],$t=t=>{const{classes:n,last:o}=t;return he({root:["root",o&&"last"],transition:["transition"]},Pt,n)},Nt=C("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,o.last&&n.last]}})(({ownerState:t,theme:n})=>b({marginLeft:12,paddingLeft:8+12,paddingRight:8,borderLeft:n.vars?`1px solid ${n.vars.palette.StepContent.border}`:`1px solid ${n.palette.mode==="light"?n.palette.grey[400]:n.palette.grey[600]}`},t.last&&{borderLeft:"none"})),Vt=C(De,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,n)=>n.transition})({}),Ut=l.forwardRef(function(n,o){const s=de({props:n,name:"MuiStepContent"}),{children:u,className:c,TransitionComponent:f=De,transitionDuration:m="auto",TransitionProps:v}=s,y=J(s,zt);l.useContext(gt);const{active:E,last:D,expanded:I}=l.useContext(ft),w=b({},s,{last:D}),B=$t(w);let k=m;return m==="auto"&&!f.muiSupportAuto&&(k=void 0),e.jsx(Nt,b({className:xe(B.root,c),ref:o,ownerState:w},y,{children:e.jsx(Vt,b({as:f,in:E||I,className:B.transition,ownerState:w,timeout:k,unmountOnExit:!0},v,{children:u}))}))}),_t=Ut,Gt=G(e.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),Ht=G(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),qt=G(e.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"}),"InsertDriveFileOutlined"),Kt=G(e.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp"),Qt=G(e.jsx("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace"),Zt=G(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),Yt=C(et)(({theme:t,bg:n})=>({padding:32,borderRadius:12,boxShadow:t.shadows[0],border:`1px dashed ${t.palette.grey[z(t)?600:200]}`,backgroundColor:n?"transparent":t.palette.grey[z(t)?800:50]})),p=({title:t,children:n,bgTransparent:o=!1,...s})=>e.jsxs(Yt,{...s,bg:o?1:0,children:[e.jsx(M,{mb:3,fontSize:18,fontWeight:600,children:t}),n]}),pe=({title:t,children:n,fullLink:o})=>{const s=Te(),u=tt(),c=o??`https://mui.com/material-ui/react-${t.toLowerCase()}`;return e.jsxs(l.Fragment,{children:[e.jsx(A,{bgcolor:z(s)?"grey.800":"grey.100",py:{sm:10,xs:5},children:e.jsxs(Le,{children:[e.jsx(Ue,{fontSize:24,mb:2,children:t}),e.jsx(r,{onClick:()=>u("/components"),startIcon:e.jsx(Qt,{fontSize:"small"}),sx:{mr:2},children:"Go Back"}),e.jsxs(r,{href:c,target:"_blank",color:"secondary",variant:"outlined",startIcon:e.jsx(qt,{}),children:["Browse ",t," Doc"]})]})}),e.jsx(ve,{}),e.jsx(Le,{component:R,spacing:6,sx:{py:{sm:10,xs:5}},children:n}),e.jsx(ve,{})]})},Jt=C(g)(({theme:t})=>({"& .MuiBadge-badge":{backgroundColor:t.palette.success.main,color:t.palette.success.main,boxShadow:`0 0 0 2px ${t.palette.background.paper}`,"&::after":{top:0,left:0,content:'""',width:"100%",height:"100%",borderRadius:"50%",position:"absolute",border:"1px solid currentColor"}}})),Xt=C(Y)(({theme:t})=>({width:22,height:22,border:`2px solid ${t.palette.background.paper}`})),In=()=>e.jsxs(R,{direction:"row",spacing:2,justifyContent:"center",children:[e.jsx(Jt,{variant:"dot",overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(Y,{alt:"Remy Sharp",src:"/static/user/user-10.png"})}),e.jsx(g,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:e.jsx(Xt,{alt:"Travis Howard",src:"/static/user/user-11.png"}),children:e.jsx(Y,{alt:"Cindy Baker",src:"/static/user/user-13.png"})})]});var Fe={},en=st;Object.defineProperty(Fe,"__esModule",{value:!0});var S=Fe.default=void 0,tn=en(nt()),nn=e,sn=(0,tn.default)((0,nn.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");S=Fe.default=sn;const Ke={bgcolor:"grey.400",width:40,height:40},ze=e.jsx(A,{component:"span",sx:Ke}),$e=e.jsx(A,{component:"span",sx:{...Ke,borderRadius:"50%"}}),Fn=()=>e.jsx(pe,{title:"Badge",children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,lg:6,xs:12,children:e.jsx(p,{title:"Basic",children:e.jsxs(R,{direction:"row",spacing:2,justifyContent:"center",children:[e.jsx(g,{badgeContent:4,color:"default",children:e.jsx(S,{})}),e.jsx(g,{badgeContent:4,color:"error",children:e.jsx(S,{})}),e.jsx(g,{badgeContent:4,color:"info",children:e.jsx(S,{})}),e.jsx(g,{badgeContent:4,color:"primary",children:e.jsx(S,{})}),e.jsx(g,{badgeContent:4,color:"secondary",children:e.jsx(S,{})}),e.jsx(g,{badgeContent:4,color:"success",children:e.jsx(S,{})}),e.jsx(g,{badgeContent:4,color:"warning",children:e.jsx(S,{})})]})})}),e.jsx(a,{item:!0,lg:6,xs:12,children:e.jsx(p,{title:"Maximum Value",children:e.jsxs(R,{direction:"row",spacing:5,justifyContent:"center",children:[e.jsx(g,{badgeContent:100,max:99,color:"primary",children:e.jsx(S,{})}),e.jsx(g,{badgeContent:1e3,max:999,color:"primary",children:e.jsx(S,{})}),e.jsx(g,{badgeContent:1e4,max:9999,color:"primary",children:e.jsx(S,{})})]})})}),e.jsx(a,{item:!0,lg:6,xs:12,children:e.jsx(p,{title:"Dot Badge",children:e.jsxs(R,{direction:"row",spacing:5,justifyContent:"center",children:[e.jsx(g,{color:"primary",variant:"dot",children:e.jsx(S,{})}),e.jsx(g,{color:"primary",variant:"dot",children:"QuickFrame"})]})})}),e.jsx(a,{item:!0,lg:6,xs:12,children:e.jsx(p,{title:"Badge Overlap",children:e.jsxs(R,{direction:"row",spacing:5,justifyContent:"center",children:[e.jsx(g,{color:"primary",badgeContent:"",children:ze}),e.jsx(g,{color:"primary",variant:"dot",children:ze}),e.jsx(g,{color:"primary",overlap:"circular",badgeContent:"",children:$e}),e.jsx(g,{color:"primary",overlap:"circular",variant:"dot",children:$e})]})})})]})}),Ne=l.forwardRef((t,n)=>e.jsx(rt,{direction:"up",ref:n,...t})),rn=["username@gmail.com","user02@gmail.com"],Wn=()=>{const[t,n]=l.useState(!1),o=()=>n(!0),s=()=>n(!1),[u,c]=l.useState(!1),f=()=>c(!0),m=()=>c(!1),[v,y]=l.useState(!1),E=()=>y(!0),D=()=>y(!1),[I,w]=l.useState(!1),B=()=>w(!0),k=()=>w(!1),[F,i]=l.useState(!1),j=()=>i(!0),W=()=>i(!1),[T,ue]=l.useState(!0),[O,X]=l.useState(!1),[ee,me]=l.useState("sm"),te=()=>X(!1),je=()=>X(!0),ge=d=>{me(d.target.value)},fe=d=>{ue(d.target.checked)};return e.jsx(pe,{title:"Dialog",children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,md:4,xs:12,children:e.jsxs(p,{title:"Basic",children:[e.jsx(r,{fullWidth:!0,variant:"outlined",onClick:o,children:"Open simple dialog"}),e.jsxs(V,{onClose:s,open:t,children:[e.jsx(q,{children:"Set backup account"}),e.jsxs(Me,{sx:{pt:0},children:[rn.map(d=>e.jsx(ne,{disablePadding:!0,disableGutters:!0,children:e.jsxs(Re,{onClick:s,children:[e.jsx(Pe,{children:e.jsx(Y,{children:e.jsx(Zt,{})})}),e.jsx(re,{primary:d})]})},d)),e.jsx(ne,{disablePadding:!0,disableGutters:!0,children:e.jsxs(Re,{autoFocus:!0,onClick:s,children:[e.jsx(Pe,{children:e.jsx(Y,{children:e.jsx(Se,{})})}),e.jsx(re,{primary:"Add account"})]})})]})]})]})}),e.jsx(a,{item:!0,md:4,xs:12,children:e.jsxs(p,{title:"Alert",children:[e.jsx(r,{fullWidth:!0,onClick:f,children:"Open alert dialog"}),e.jsxs(V,{onClose:m,open:u,children:[e.jsx(q,{children:"Use Google's location service?"}),e.jsx(se,{children:e.jsx(ce,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(ie,{children:[e.jsx(r,{color:"warning",onClick:m,children:"Disagree"}),e.jsx(r,{onClick:m,autoFocus:!0,children:"Agree"})]})]})]})}),e.jsx(a,{item:!0,md:4,xs:12,children:e.jsxs(p,{title:"Transitions",children:[e.jsx(r,{fullWidth:!0,variant:"text",onClick:E,children:"Slide in alert dialog"}),e.jsxs(V,{keepMounted:!0,open:v,TransitionComponent:Ne,onClose:D,children:[e.jsx(q,{children:"Use Google's location service?"}),e.jsx(se,{children:e.jsx(ce,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(ie,{children:[e.jsx(r,{color:"warning",onClick:D,children:"Disagree"}),e.jsx(r,{onClick:D,autoFocus:!0,children:"Agree"})]})]})]})}),e.jsx(a,{item:!0,md:4,xs:12,children:e.jsxs(p,{title:"Form",children:[e.jsx(r,{fullWidth:!0,variant:"text",onClick:B,children:"Open form dialog"}),e.jsxs(V,{open:I,onClose:k,children:[e.jsx(q,{children:"Subscribe"}),e.jsxs(se,{children:[e.jsx(ce,{mb:1.5,children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.jsx(it,{fullWidth:!0,autoFocus:!0,id:"name",type:"email",margin:"dense",label:"Email Address"})]}),e.jsxs(ie,{children:[e.jsx(r,{color:"secondary",onClick:k,children:"Cancel"}),e.jsx(r,{onClick:k,children:"Subscribe"})]})]})]})}),e.jsx(a,{item:!0,md:4,xs:12,children:e.jsxs(p,{title:"Full-screen",children:[e.jsx(r,{fullWidth:!0,variant:"outlined",onClick:j,children:"Open full-screen dialog"}),e.jsxs(V,{fullScreen:!0,open:F,TransitionComponent:Ne,onClose:W,children:[e.jsx(ot,{sx:{position:"relative"},children:e.jsxs(at,{children:[e.jsx(P,{edge:"start",color:"inherit",onClick:W,children:e.jsx(Ht,{})}),e.jsx(Ue,{flex:1,children:"Sound"}),e.jsx(r,{color:"inherit",variant:"text",onClick:W,children:"Save"})]})}),e.jsxs(Me,{children:[e.jsx(ne,{children:e.jsx(re,{primary:"Phone ringtone",secondary:"Titania"})}),e.jsx(ve,{}),e.jsx(ne,{children:e.jsx(re,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}),e.jsx(a,{item:!0,md:4,xs:12,children:e.jsxs(p,{title:"Optional sizes",children:[e.jsx(r,{fullWidth:!0,onClick:je,children:"Open max-width dialog"}),e.jsxs(V,{maxWidth:ee,fullWidth:T,open:O,onClose:te,children:[e.jsx(q,{children:"Optional sizes"}),e.jsxs(se,{children:[e.jsx(ce,{children:"You can set my maximum width and whether to adapt or not."}),e.jsxs(A,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",width:"fit-content"},children:[e.jsxs(lt,{sx:{my:2,minWidth:120},children:[e.jsx(ct,{htmlFor:"max-width",children:"maxWidth"}),e.jsxs(dt,{autoFocus:!0,label:"maxWidth",value:ee,onChange:ge,inputProps:{name:"max-width",id:"max-width"},children:[e.jsx(N,{value:!1,children:"false"}),e.jsx(N,{value:"xs",children:"xs"}),e.jsx(N,{value:"sm",children:"sm"}),e.jsx(N,{value:"md",children:"md"}),e.jsx(N,{value:"lg",children:"lg"}),e.jsx(N,{value:"xl",children:"xl"})]})]}),e.jsx(mt,{label:"Full width",control:e.jsx(jt,{checked:T,onChange:fe})})]})]}),e.jsx(ie,{children:e.jsx(r,{onClick:te,children:"Close"})})]})]})})]})})},on=C(Ct)(({theme:t})=>({[`&.${U.alternativeLabel}`]:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},[`&.${U.active}`]:{[`& .${U.line}`]:{borderColor:t.palette.primary.main}},[`&.${U.completed}`]:{[`& .${U.line}`]:{borderColor:t.palette.primary.main}},[`& .${U.line}`]:{borderRadius:1,borderTopWidth:3,borderColor:t.palette.mode==="dark"?t.palette.grey[800]:"#eaeaf0"}})),an=C("div")(({theme:t,ownerState:n})=>({color:t.palette.mode==="dark"?t.palette.grey[700]:"#eaeaf0",display:"flex",height:22,alignItems:"center",...n.active&&{color:t.palette.primary.main},"& .QontoStepIcon-completedIcon":{zIndex:1,fontSize:18,color:t.palette.primary.main},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})),ln=({active:t,completed:n,className:o})=>e.jsx(an,{ownerState:{active:t},className:o,children:n?e.jsx(Gt,{className:"QontoStepIcon-completedIcon"}):e.jsx("div",{className:"QontoStepIcon-circle"})}),K=["Select campaign settings","Create an ad group","Create an ad"],Ce=[{label:"Select campaign settings",description:"For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:"Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues."}],Ln=()=>{const t=Te(),[n,o]=l.useState(0),[s,u]=l.useState(new Set),c=i=>i===1,f=i=>s.has(i),m=()=>o(0),v=()=>o(i=>i-1),y=()=>{let i=s;f(n)&&(i=new Set(i.values()),i.delete(n)),o(j=>j+1),u(i)},E=()=>{if(!c(n))throw new Error("You can't skip a step that isn't optional.");o(i=>i+1),u(i=>{const j=new Set(i.values());return j.add(n),j})},[D,I]=l.useState(0),w=()=>I(0),B=()=>I(i=>i+1),k=()=>I(i=>i-1),F=()=>n===K.length?e.jsxs(l.Fragment,{children:[e.jsx(A,{bgcolor:z(t)?"grey.800":"grey.50",borderRadius:3,p:3,mt:3,children:e.jsx(M,{fontWeight:500,children:"All steps completed - you're finished"})}),e.jsxs(Ee,{pt:2,children:[e.jsx(A,{flex:"1 1 auto"}),e.jsx(r,{onClick:m,children:"Reset"})]})]}):e.jsxs(l.Fragment,{children:[e.jsx(A,{bgcolor:z(t)?"grey.800":"grey.50",borderRadius:3,p:3,mt:3,children:e.jsxs(M,{fontWeight:500,children:["Step ",n+1]})}),e.jsxs(Ee,{pt:2,children:[e.jsx(r,{variant:"text",color:"inherit",onClick:v,disabled:n===0,children:"Back"}),e.jsx(A,{flex:"1 1 auto"}),c(n)&&e.jsx(r,{variant:"text",color:"inherit",onClick:E,sx:{mr:1},children:"Skip"}),e.jsx(r,{onClick:y,children:n===K.length-1?"Finish":"Next"})]})]});return e.jsxs(pe,{title:"Stepper",children:[e.jsxs(p,{bgTransparent:!0,title:"Horizontal Linear",children:[e.jsx(oe,{activeStep:n,children:K.map((i,j)=>{const W=f(j)?!1:void 0,T=c(j)?e.jsx(M,{children:"Optional"}):void 0;return e.jsx(ae,{completed:W,children:e.jsx(le,{optional:T,children:i})},i)})}),F()]}),e.jsxs(p,{bgTransparent:!0,title:"Alternative Label",children:[e.jsx(oe,{alternativeLabel:!0,activeStep:n,children:K.map((i,j)=>{const W=f(j)?!1:void 0,T=c(j)?e.jsx(M,{children:"Optional"}):void 0;return e.jsx(ae,{completed:W,children:e.jsx(le,{optional:T,children:i})},i)})}),F()]}),e.jsxs(p,{bgTransparent:!0,title:"Customized Stepper",children:[e.jsx(oe,{alternativeLabel:!0,activeStep:n,connector:e.jsx(on,{}),children:K.map(i=>e.jsx(ae,{children:e.jsx(le,{StepIconComponent:ln,children:i})},i))}),F()]}),e.jsxs(p,{bgTransparent:!0,title:"Vertical Stepper",children:[e.jsx(oe,{activeStep:D,orientation:"vertical",children:Ce.map((i,j)=>e.jsxs(ae,{children:[e.jsx(le,{optional:j===2?e.jsx(M,{children:"Last step"}):null,children:i.label}),e.jsxs(_t,{children:[e.jsx(M,{children:i.description}),e.jsxs(R,{mt:3,direction:"row",gap:1,children:[e.jsx(r,{size:"small",onClick:B,children:j===Ce.length-1?"Finish":"Continue"}),e.jsx(r,{size:"small",variant:"text",color:"inherit",disabled:j===0,onClick:k,children:"Back"})]})]})]},i.label))}),D===Ce.length&&e.jsxs(A,{bgcolor:z(t)?"grey.800":"grey.50",borderRadius:3,p:3,mt:3,children:[e.jsx(M,{fontWeight:500,mb:2,children:"All steps completed - you're finished"}),e.jsx(r,{size:"small",onClick:w,children:"Reset"})]})]})]})},cn=[{name:"Eclair",calories:262,fat:16,carbs:24,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Frozen yoghurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3}],Q=C(t=>e.jsx(h,{...t,padding:"normal"}))(({theme:t})=>({fontWeight:600,color:t.palette.text.primary,backgroundColor:t.palette.grey[z(t)?700:100]})),Mn=()=>e.jsx(He,{component:_e,sx:{borderRadius:2,boxShadow:2},children:e.jsx(Ge,{children:e.jsxs(ke,{sx:{minWidth:650},children:[e.jsx(Ie,{children:e.jsxs($,{children:[e.jsx(Q,{children:"Dessert (100g serving)"}),e.jsx(Q,{align:"right",children:"Calories"}),e.jsx(Q,{align:"right",children:"Fat (g)"}),e.jsx(Q,{align:"right",children:"Carbs (g)"}),e.jsx(Q,{align:"right",children:"Protein (g)"})]})}),e.jsx(Ae,{children:cn.map(t=>e.jsxs($,{children:[e.jsx(h,{padding:"normal",component:"th",scope:"row",children:t.name}),e.jsx(h,{padding:"normal",align:"right",children:t.calories}),e.jsx(h,{padding:"normal",align:"right",children:t.fat}),e.jsx(h,{padding:"normal",align:"right",children:t.carbs}),e.jsx(h,{padding:"normal",align:"right",children:t.protein})]},t.name))})]})})}),_=C(t=>e.jsx(h,{...t,padding:"normal"}))(({theme:t})=>({fontWeight:600,color:t.palette.text.primary}));function Z(t,n,o,s,u,c){return{name:t,calories:n,fat:o,carbs:s,protein:u,price:c,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}const dn=[Z("Frozen yoghurt",159,6,24,4,3.99),Z("Ice cream sandwich",237,9,37,4.3,4.99),Z("Eclair",262,16,24,6,3.79),Z("Cupcake",305,3.7,67,4.3,2.5),Z("Gingerbread",356,16,49,3.9,1.5)];function xn({row:t}){const[n,o]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:[e.jsx(h,{padding:"normal",children:e.jsx(P,{size:"small",onClick:()=>o(!n),children:n?e.jsx(Kt,{}):e.jsx(xt,{})})}),e.jsx(h,{padding:"normal",component:"th",scope:"row",children:t.name}),e.jsx(h,{padding:"normal",align:"right",children:t.calories}),e.jsx(h,{padding:"normal",align:"right",children:t.fat}),e.jsx(h,{padding:"normal",align:"right",children:t.carbs}),e.jsx(h,{padding:"normal",align:"right",children:t.protein})]}),e.jsx($,{children:e.jsx(h,{padding:"normal",colSpan:6,style:{paddingBottom:0,paddingTop:0},children:e.jsx(De,{in:n,timeout:"auto",unmountOnExit:!0,children:e.jsxs(A,{children:[e.jsx(M,{fontWeight:600,mx:2,mb:1,children:"History"}),e.jsxs(ke,{size:"small",children:[e.jsx(Ie,{children:e.jsxs($,{children:[e.jsx(h,{padding:"normal",children:"Date"}),e.jsx(h,{padding:"normal",children:"Customer"}),e.jsx(h,{padding:"normal",align:"right",children:"Amount"}),e.jsx(h,{padding:"normal",align:"right",children:"Total price ($)"})]})}),e.jsx(Ae,{children:t.history.map(s=>e.jsxs($,{children:[e.jsx(h,{padding:"normal",component:"th",scope:"row",children:s.date}),e.jsx(h,{padding:"normal",children:s.customerId}),e.jsx(h,{padding:"normal",align:"right",children:s.amount}),e.jsx(h,{padding:"normal",align:"right",children:Math.round(s.amount*t.price*100)/100})]},s.date))})]})]})})})})]})}const Rn=()=>e.jsx(He,{component:_e,sx:{borderRadius:2,boxShadow:2},children:e.jsx(Ge,{children:e.jsxs(ke,{children:[e.jsx(Ie,{sx:{backgroundColor:t=>z(t)?"grey.700":"grey.100"},children:e.jsxs($,{children:[e.jsx(_,{}),e.jsx(_,{children:"Dessert (100g serving)"}),e.jsx(_,{align:"right",children:"Calories"}),e.jsx(_,{align:"right",children:"Fat (g)"}),e.jsx(_,{align:"right",children:"Carbs (g)"}),e.jsx(_,{align:"right",children:"Protein (g)"})]})}),e.jsx(Ae,{children:dn.map(t=>e.jsx(xn,{row:t},t.name))})]})})}),hn=C(({className:t,...n})=>e.jsx(x,{...n,classes:{popper:t}}))({[`& .${qe.tooltip}`]:{maxWidth:500}}),pn=C(({className:t,...n})=>e.jsx(x,{...n,classes:{popper:t}}))({[`& .${qe.tooltip}`]:{maxWidth:"none"}}),be=`
    Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
    Praesent non nunc mollis, fermentum neque at, semper arcu.
    Nullam eget est sed sem iaculis gravida eget vitae justo.
    `,En=()=>e.jsx(pe,{title:"Tooltip",children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,lg:4,md:6,xs:12,children:e.jsxs(p,{title:"Basic",children:[e.jsx(x,{title:"Delete",children:e.jsx(P,{children:e.jsx(Be,{})})}),e.jsx(x,{title:"Add",children:e.jsx(P,{children:e.jsx(Se,{})})}),e.jsx(x,{title:"Search",children:e.jsx(P,{children:e.jsx(Oe,{})})})]})}),e.jsx(a,{item:!0,lg:4,md:6,xs:12,children:e.jsxs(p,{title:"Arrow",children:[e.jsx(x,{title:"Delete",arrow:!0,children:e.jsx(P,{children:e.jsx(Be,{})})}),e.jsx(x,{title:"Add",arrow:!0,children:e.jsx(P,{children:e.jsx(Se,{})})}),e.jsx(x,{title:"Search",arrow:!0,children:e.jsx(P,{children:e.jsx(Oe,{})})})]})}),e.jsx(a,{item:!0,lg:4,md:6,xs:12,children:e.jsx(p,{title:"Transition",children:e.jsxs(R,{direction:"row",spacing:1,children:[e.jsx(x,{title:"Add",children:e.jsx(r,{variant:"text",children:"Grow"})}),e.jsx(x,{arrow:!0,title:"Add",TransitionComponent:ht,TransitionProps:{timeout:600},children:e.jsx(r,{variant:"text",children:"Fade"})}),e.jsx(x,{TransitionComponent:Ot,title:"Add",children:e.jsx(r,{variant:"text",children:"Zoom"})})]})})}),e.jsx(a,{item:!0,md:6,xs:12,children:e.jsxs(p,{title:"Transition",children:[e.jsx(a,{container:!0,justifyContent:"center",children:e.jsxs(a,{item:!0,children:[e.jsx(x,{title:"Add",placement:"top-start",children:e.jsx(r,{variant:"text",children:"top-start"})}),e.jsx(x,{title:"Add",placement:"top",children:e.jsx(r,{variant:"text",children:"top"})}),e.jsx(x,{title:"Add",placement:"top-end",children:e.jsx(r,{variant:"text",children:"top-end"})})]})}),e.jsxs(a,{container:!0,justifyContent:"center",children:[e.jsxs(a,{item:!0,xs:6,direction:"column",children:[e.jsx(a,{item:!0,children:e.jsx(x,{title:"Add",placement:"left-start",children:e.jsx(r,{variant:"text",children:"left-start"})})}),e.jsx(a,{item:!0,children:e.jsx(x,{title:"Add",placement:"left",children:e.jsx(r,{variant:"text",children:"left"})})}),e.jsx(a,{item:!0,children:e.jsx(x,{title:"Add",placement:"left-end",children:e.jsx(r,{variant:"text",children:"left-end"})})})]}),e.jsxs(a,{item:!0,container:!0,xs:6,alignItems:"flex-end",direction:"column",children:[e.jsx(a,{item:!0,children:e.jsx(x,{title:"Add",placement:"right-start",children:e.jsx(r,{variant:"text",children:"right-start"})})}),e.jsx(a,{item:!0,children:e.jsx(x,{title:"Add",placement:"right",children:e.jsx(r,{variant:"text",children:"right"})})}),e.jsx(a,{item:!0,children:e.jsx(x,{title:"Add",placement:"right-end",children:e.jsx(r,{variant:"text",children:"right-end"})})})]})]}),e.jsx(a,{container:!0,justifyContent:"center",children:e.jsxs(a,{item:!0,children:[e.jsx(x,{title:"Add",placement:"bottom-start",children:e.jsx(r,{variant:"text",children:"bottom-start"})}),e.jsx(x,{title:"Add",placement:"bottom",children:e.jsx(r,{variant:"text",children:"bottom"})}),e.jsx(x,{title:"Add",placement:"bottom-end",children:e.jsx(r,{variant:"text",children:"bottom-end"})})]})})]})}),e.jsx(a,{item:!0,md:6,xs:12,children:e.jsx(p,{title:"Variable Width",children:e.jsxs(R,{spacing:1,children:[e.jsx(x,{title:be,children:e.jsx(r,{fullWidth:!0,variant:"text",children:"Default Width [300px]"})}),e.jsx(hn,{title:be,children:e.jsx(r,{fullWidth:!0,variant:"text",children:"Custom Width [500px]"})}),e.jsx(pn,{title:be,children:e.jsx(r,{fullWidth:!0,variant:"text",children:"No wrapping"})})]})})})]})});export{p as B,pe as C,Pe as L,Fn as M,In as W,Ot as Z,Mn as a,Rn as b,Wn as c,En as d,Ln as e};
