import{l as v,m as N,j as e,B as m,e as b,d as g,P as S,G as r,T as i,F as B,a as c}from"./index-90aa246b.js";import"./Tickets-9984d3d1.js";import{c as q,a as s,u as y}from"./formik.esm-15c98e0c.js";import"./index-9a947799.js";import"./MoreButton-279aa594.js";import"./ExpandMore-2a13d9bc.js";import"./SearchInput-84410db4.js";import"./AccordionSummary-3c834ae5.js";import"./Stack-75c951b2.js";import"./Pagination-e16d6a28.js";import"./LastPage-555596a7.js";import"./index.browser-7e542916.js";import"./MoreVert-72a5aac9.js";var u={},C=N;Object.defineProperty(u,"__esModule",{value:!0});var h=u.default=void 0,T=C(v()),P=e,R=(0,T.default)((0,P.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");h=u.default=R;const W=()=>{const p=["Screenshots/Screen Recording is very helpful.","You can use snipboard.io to share screenshots.","And loom.com for screen recording."],x=q({firstName:s().required("First Name is Required!"),lastName:s().required("Last Name is Required!"),email:s().email().required("Email is Required!"),phone:s().min(9).required("Phone is required!")}),j={firstName:"",lastName:"",email:"",position:"",phone:""},{values:l,errors:a,touched:t,handleBlur:o,handleChange:n,handleSubmit:f}=y({initialValues:j,validationSchema:x,onSubmit:()=>{}});return e.jsx(m,{py:3,children:e.jsxs(b,{sx:{p:3,maxWidth:900,margin:"auto"},children:[e.jsx(g,{fontSize:18,children:"Create Ticket"}),e.jsx(S,{color:"text.secondary",mb:3,children:"Please include as many details as possible about your question or problem."}),e.jsx(m,{component:"ul",pl:2,mb:4,children:p.map(d=>e.jsx(m,{component:"li",fontSize:14,pb:.5,children:d},d))}),e.jsx("form",{onSubmit:f,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,md:6,xs:12,children:e.jsx(i,{fullWidth:!0,name:"firstName",onBlur:o,onChange:n,value:l.firstName,placeholder:"First Name*",helperText:t.firstName&&a.firstName,error:!!(t.firstName&&a.firstName)})}),e.jsx(r,{item:!0,md:6,xs:12,children:e.jsx(i,{fullWidth:!0,name:"lastName",onBlur:o,onChange:n,value:l.lastName,placeholder:"Last Name*",helperText:t.lastName&&a.lastName,error:!!(t.lastName&&a.lastName)})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(i,{fullWidth:!0,name:"email",onBlur:o,value:l.email,placeholder:"Email*",onChange:n,helperText:t.email&&a.email,error:!!(t.email&&a.email)})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(i,{select:!0,fullWidth:!0,SelectProps:{native:!0,IconComponent:h},children:[e.jsx("option",{value:"biponi",children:"Biponi"}),e.jsx("option",{value:"bazaar",children:"Bazaar"}),e.jsx("option",{value:"stocky",children:"Stocky"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(i,{fullWidth:!0,placeholder:"Subject*"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(i,{multiline:!0,rows:6,fullWidth:!0,placeholder:"Message*"})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(B,{alignItems:"center",gap:2,children:[e.jsx(c,{type:"submit",children:"Submit"}),e.jsx(c,{variant:"outlined",color:"secondary",children:"Cancel"})]})})]})})]})})},V=()=>e.jsx(W,{});export{V as default};