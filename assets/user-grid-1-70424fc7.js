import{j as r,X as S,r as n,B as l,e as C,G as m,p as w,I,A as P,P as b,a7 as c}from"./index-fe46112a.js";import{U as y,H as A,E as v}from"./add-new-user-d0f5c9ba.js";import{S as U}from"./SearchArea-41215d9d.js";import{C as B}from"./Chat-f8d4590e.js";import{M as R}from"./MoreHorizontal-43735b0c.js";import{p as E}from"./paginate-108b3171.js";import{C as H}from"./Checkbox-a1ff8553.js";import{S as o}from"./Stack-1643198d.js";import{P as L}from"./Pagination-fcecd202.js";import"./Modal-7e83eecf.js";import"./formik.esm-4de4872a.js";import"./AvatarBadge-4e00c55c.js";import"./IconWrapper-43836560.js";import"./Add-6947e5be.js";import"./TableDataNotFound-a1405312.js";import"./ListItemIcon-0685b3cd.js";import"./ListItemText-e2b61adf.js";import"./TableRow-d71ac22c.js";import"./CameraAlt-eef89d7a.js";import"./DatePicker-e98507c0.js";import"./DesktopDatePicker-33654346.js";import"./Popper-4ddeb155.js";import"./DialogActions-08e7086f.js";import"./DialogContent-73f6afda.js";import"./City-ae95fb98.js";import"./Edit-8acafccb.js";import"./Facebook-a4022e12.js";import"./useMuiTable-f812aec2.js";import"./TableContainer-284c5a39.js";import"./TableHead-b40e861a.js";import"./TablePagination-db911ac7.js";import"./LastPage-c3cd6836.js";import"./Switch-5d38919d.js";import"./SwitchBase-97b0f4c8.js";import"./Search-4f7e2573.js";import"./Apps-d3d20bfd.js";const M=i=>r.jsx(S,{viewBox:"0 0 24 24",...i,children:r.jsx("path",{d:"M7,7a5,5,0,1,1,5,5A5,5,0,0,1,7,7ZM21.89,20.55,20,16.76A5,5,0,0,0,15.53,14H8.47A5,5,0,0,0,4,16.76L2.11,20.55A1,1,0,0,0,3,22H21A1,1,0,0,0,21.89,20.55Z"})}),F=()=>{const[i]=n.useState(8),[x,h]=n.useState(1),[g]=n.useState([...y]),[t,u]=n.useState({role:"",search:""}),p=(e,s)=>{u(f=>({...f,[e]:s}))},j=(e,s)=>{p("role",s)};let d=g.filter(e=>t.role?e.role.toLowerCase()===t.role:t.search?e.name.toLowerCase().includes(t.search.toLowerCase()):!0);const a={color:"grey.500",fontSize:18};return r.jsx(l,{pt:2,pb:4,children:r.jsxs(C,{sx:{px:3,py:2},children:[r.jsx(A,{value:t.role,changeTab:j}),r.jsx(U,{value:t.search,onChange:e=>p("search",e.target.value),gridRoute:"/dashboard/user-grid",listRoute:"/dashboard/user-list"}),r.jsxs(m,{container:!0,spacing:3,children:[E(x,i,d).map((e,s)=>r.jsx(m,{item:!0,lg:3,md:4,sm:6,xs:12,children:r.jsxs(l,{sx:{p:3,borderRadius:2,border:"1px solid",borderColor:"divider"},children:[r.jsxs(w,{mx:-1,mt:-1,children:[r.jsx(H,{size:"small"}),r.jsx(I,{children:r.jsx(R,{sx:a})})]}),r.jsxs(o,{direction:"row",alignItems:"center",py:2,spacing:2,children:[r.jsx(P,{src:e.avatar,sx:{borderRadius:"20%"}}),r.jsxs(l,{children:[r.jsx(b,{fontWeight:500,children:e.name}),r.jsx(c,{color:"grey.500",children:e.username})]})]}),r.jsxs(o,{direction:"row",alignItems:"center",spacing:1,children:[r.jsx(v,{sx:a}),r.jsx(c,{color:"grey.500",children:e.email})]}),r.jsxs(o,{direction:"row",alignItems:"center",mt:1,spacing:1,children:[r.jsx(M,{sx:a}),r.jsxs(c,{color:"grey.500",children:["Status: ",e.role]})]}),r.jsxs(o,{direction:"row",alignItems:"center",mt:1,spacing:1,children:[r.jsx(B,{sx:a}),r.jsx(c,{color:"grey.500",children:"Posts: 12"})]})]})},s)),r.jsx(m,{item:!0,xs:12,children:r.jsx(o,{alignItems:"center",py:2,children:r.jsx(L,{shape:"rounded",count:Math.ceil(d.length/i),onChange:(e,s)=>{h(s)}})})})]})]})})},fr=()=>r.jsx(F,{});export{fr as default};