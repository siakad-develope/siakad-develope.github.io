import{u as c,j as e,B as p,e as j,d as f,P as N,G as r,T as a,a8 as g,F as v,a as m}from"./index-fe46112a.js";import"./Section2-966b421e.js";import{c as y,a as n,u as B}from"./formik.esm-4de4872a.js";import{D as b}from"./DropZone-f35bfb28.js";import"./Search-4f7e2573.js";import"./index.browser-7e542916.js";import"./Stack-1643198d.js";import"./index-ccbc0a2f.js";import"./index-42ead2dd.js";const C=()=>{const u=c(),d=y({firstName:n().required("First Name is Required!"),lastName:n().required("Last Name is Required!"),email:n().email().required("Email is Required!"),phone:n().min(9).required("Phone is required!")}),h={firstName:"",lastName:"",email:"",position:"",phone:""},{values:l,errors:t,touched:i,handleBlur:s,handleChange:o,handleSubmit:x}=B({initialValues:h,validationSchema:d,onSubmit:()=>{}});return e.jsx(p,{maxWidth:900,margin:"auto",py:3,children:e.jsxs(j,{sx:{p:3},children:[e.jsx(f,{fontSize:18,children:"Apply for this Job"}),e.jsx(N,{color:"text.secondary",mb:3,children:"You sit down. You stare at your screen. The cursor blinks"}),e.jsx("form",{onSubmit:x,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,md:6,xs:12,children:e.jsx(a,{fullWidth:!0,name:"firstName",onBlur:s,onChange:o,value:l.firstName,placeholder:"First Name*",helperText:i.firstName&&t.firstName,error:!!(i.firstName&&t.firstName)})}),e.jsx(r,{item:!0,md:6,xs:12,children:e.jsx(a,{fullWidth:!0,name:"lastName",onBlur:s,onChange:o,value:l.lastName,placeholder:"Last Name*",helperText:i.lastName&&t.lastName,error:!!(i.lastName&&t.lastName)})}),e.jsx(r,{item:!0,md:6,xs:12,children:e.jsx(a,{fullWidth:!0,name:"email",onBlur:s,value:l.email,placeholder:"Email*",onChange:o,helperText:i.email&&t.email,error:!!(i.email&&t.email)})}),e.jsx(r,{item:!0,md:6,xs:12,children:e.jsx(a,{fullWidth:!0,name:"phone",onBlur:s,value:l.phone,placeholder:"Phone*",onChange:o,helperText:i.phone&&t.phone,error:!!(i.phone&&t.phone)})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(a,{select:!0,fullWidth:!0,SelectProps:{native:!0,IconComponent:g},children:[e.jsx("option",{value:"ui-ux",children:"UI/UX Designer"}),e.jsx("option",{value:"front-end",children:"Front End Developer"}),e.jsx("option",{value:"software",children:"Software Engineer"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(a,{fullWidth:!0,placeholder:"Website (if any)"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(a,{fullWidth:!0,placeholder:"Portfolio*"})}),e.jsx(r,{item:!0,md:6,xs:12,children:e.jsx(a,{fullWidth:!0,type:"number",placeholder:"Age*"})}),e.jsx(r,{item:!0,md:6,xs:12,children:e.jsx(a,{fullWidth:!0,placeholder:"Expected Salary*"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(b,{onDrop:()=>{}})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(v,{alignItems:"center",gap:2,children:[e.jsx(m,{type:"submit",children:"Apply"}),e.jsx(m,{color:"secondary",variant:"outlined",onClick:()=>u("/dashboard/career"),children:"Cancel"})]})})]})})]})})},E=()=>e.jsx(C,{});export{E as default};