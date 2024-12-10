import{r as o,j as e,G as i,a as r,ca as s,B as a,d as l,P as n,F as z,aa as S,aS as k}from"./index-fe46112a.js";import{C as q,B as c,Z as y}from"./tooltip-7a16ca2b.js";import{S as h}from"./Stack-1643198d.js";import"./DialogContent-73f6afda.js";import"./ListItemText-e2b61adf.js";import"./Add-dcf4ee2d.js";import"./DialogActions-08e7086f.js";import"./FormControlLabel-8e6e2fd4.js";import"./Switch-5d38919d.js";import"./SwitchBase-97b0f4c8.js";import"./Stepper-a934a116.js";import"./TableRow-d71ac22c.js";import"./TableContainer-284c5a39.js";import"./TableHead-b40e861a.js";import"./Tooltip-19c00876.js";import"./Popper-4ddeb155.js";import"./Delete-d386abfe.js";import"./Search-b3fbb7fd.js";const F=()=>{const[m,p]=o.useState(null),C=()=>p(null),P=t=>{p(t.currentTarget)},[d,u]=o.useState(null),x=()=>u(null),B=t=>u(t.currentTarget),[j,v]=o.useState(null),[g,E]=o.useState("z"),T=()=>v(null),f=t=>b=>{v(b.currentTarget),E(t)};return e.jsx(q,{title:"Popover",children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,lg:6,xs:12,children:e.jsx(c,{title:"Basic",children:e.jsxs(h,{justifyContent:"center",alignItems:"center",children:[e.jsx(r,{variant:"contained",onClick:P,children:"Open Popover"}),e.jsx(s,{anchorEl:m,open:!!m,onClose:C,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:e.jsxs(a,{p:3,maxWidth:400,children:[e.jsx(l,{fontSize:18,children:"The content of the Popover."}),e.jsx(n,{mt:1,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odio fugit suscipit iste est beatae vero quia hic explicabo mollitia?"})]})})]})})}),e.jsx(i,{item:!0,lg:6,xs:12,children:e.jsx(c,{title:"Mouse over interaction",children:e.jsxs(h,{justifyContent:"center",alignItems:"center",children:[e.jsx(n,{color:"primary.main",fontWeight:600,onMouseEnter:B,onMouseLeave:x,children:"Hover with a Popover"}),e.jsx(s,{disableRestoreFocus:!0,anchorEl:d,open:!!d,onClose:x,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},sx:{pointerEvents:"none"},children:e.jsxs(a,{p:3,maxWidth:400,children:[e.jsx(l,{fontSize:18,children:"The content of the Popover."}),e.jsx(n,{mt:1,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odio fugit suscipit iste est beatae vero quia hic explicabo mollitia?"})]})})]})})}),e.jsx(i,{item:!0,lg:6,xs:12,children:e.jsx(c,{title:"Transition",children:e.jsxs(h,{justifyContent:"center",alignItems:"center",children:[e.jsxs(z,{gap:3,children:[e.jsx(r,{variant:"contained",onClick:f("z"),children:"Zoom"}),e.jsx(r,{variant:"contained",onClick:f("f"),children:"Fade"})]}),e.jsx(s,{anchorEl:j,open:!!j,onClose:T,anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:g==="z"?y:g==="f"?S:k,children:e.jsxs(a,{p:3,maxWidth:400,children:[e.jsx(l,{fontSize:18,children:"The content of the Popover."}),e.jsx(n,{mt:1,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odio fugit suscipit iste est beatae vero quia hic explicabo mollitia?"})]})})]})})})]})})},X=()=>e.jsx(F,{});export{X as default};
