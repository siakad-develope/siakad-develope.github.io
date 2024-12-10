import{u as B,r as u,j as e,B as p,N as P,P as c,G as s,d as b,T as l,L as C,O as S,a as L}from"./index-fe46112a.js";import{A as W,a as q}from"./amplifyContext-dbfba466.js";import{c as T,a as m,b as A,u as E}from"./formik.esm-4de4872a.js";import{L as k}from"./Layout-b7e982db.js";import{A as F}from"./Alert-c85701fb.js";import{L as R}from"./LoadingButton-b4aa6158.js";import"./Close-9700e0c8.js";import"./CircularProgress-69499672.js";const $=()=>{const h=B(),[x,f]=u.useState(null),[g,d]=u.useState(!1),{register:j}=u.useContext(W),w={firstName:"",lastName:"",email:"",password:"",confirmPassword:"",remember:!0},y=T().shape({firstName:m().max(100).required("First Name is required"),lastName:m().max(100).required("Last Name is required"),email:m().email("Must be a valid email").max(255).required("Email is required"),password:m().min(8,"Password should be of minimum 8 characters length").required("Password is required"),confirmPassword:m().required("Please re-type your password").oneOf([A("password")],"Passwords does not match")}),{errors:r,values:o,touched:a,handleBlur:i,handleChange:t,handleSubmit:N}=E({initialValues:w,validationSchema:y,onSubmit:async n=>{try{d(!0),await j(n.email,n.password,n.firstName,n.lastName),h(`/amplify/verify?email=${n.email}`),f(null),d(!1)}catch(v){console.log("register error -> ",v),d(!1)}}});return e.jsx(k,{children:e.jsxs(p,{maxWidth:550,p:4,children:[e.jsx(P,{fontSize:{sm:30,xs:25},children:"Sign up for 14 days free trial"}),e.jsx(c,{mt:1,mb:6,color:"text.secondary",children:"No risk, no obligations, no credit-card required."}),e.jsx("form",{onSubmit:N,children:e.jsxs(s,{container:!0,spacing:3,children:[e.jsxs(s,{item:!0,xs:12,children:[x&&e.jsx(F,{severity:"error",sx:{mb:3},children:x}),e.jsx(b,{fontSize:16,children:"Register with your email id"})]}),e.jsx(s,{item:!0,xs:6,children:e.jsx(l,{fullWidth:!0,placeholder:"First Name",name:"firstName",onBlur:i,value:o.firstName,onChange:t,helperText:a.firstName&&r.firstName,error:!!(a.firstName&&r.firstName)})}),e.jsx(s,{item:!0,xs:6,children:e.jsx(l,{fullWidth:!0,placeholder:"Last Name",name:"lastName",onBlur:i,value:o.lastName,onChange:t,helperText:a.lastName&&r.lastName,error:!!(a.lastName&&r.lastName)})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,placeholder:"Enter your work email",name:"email",type:"email",onBlur:i,value:o.email,onChange:t,helperText:a.email&&r.email,error:!!(a.email&&r.email)})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,type:"password",placeholder:"Enter your password",name:"password",onBlur:i,value:o.password,onChange:t,helperText:a.password&&r.password,error:!!(a.password&&r.password)})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,type:"password",placeholder:"Confirm your password",name:"confirmPassword",onBlur:i,onChange:t,value:o.confirmPassword,helperText:a.confirmPassword&&r.confirmPassword,error:!!(a.confirmPassword&&r.confirmPassword)})}),e.jsxs(s,{item:!0,xs:12,children:[e.jsx(R,{loading:g,type:"submit",variant:"contained",fullWidth:!0,children:"Sign up via Email"}),e.jsxs(c,{mt:1,color:"text.secondary",children:["By signing up, you agree"," ",e.jsx(p,{fontWeight:500,component:C,href:"#",children:"Terms of Service"})," ","& your consent to receiving email communications from Sales handy."]})]})]})}),e.jsx(S,{sx:{my:4,borderColor:"grey.200",borderWidth:1},children:e.jsx(c,{color:"text.secondary",px:1,children:"Already have an account?"})}),e.jsx(L,{fullWidth:!0,variant:"text",onClick:()=>h("/jwt/login"),sx:{backgroundColor:"primary.50"},children:"Log In"})]})})},J=()=>e.jsx(q,{children:e.jsx($,{})});export{J as default};