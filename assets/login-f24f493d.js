import{s as A,g as E,r as m,V as G,j as e,B as t,N as g,P as a,L as f,G as n,d as R,T as w,R as T,p as V,F as b,O as q,W as H}from"./index-fe46112a.js";import{c as O,a as y,u as N}from"./formik.esm-4de4872a.js";import{L as S}from"./Layout-b7e982db.js";import{T as $}from"./Twitter-0c438ee6.js";import{F as D}from"./Facebook-a4022e12.js";import{G as M}from"./GoogleIcon-d68a473f.js";import{L as W}from"./LoadingButton-b4aa6158.js";import{V as J,a as K}from"./VisibilityOff-bb5e910b.js";import{C as Q}from"./Checkbox-a1ff8553.js";import"./CircularProgress-69499672.js";import"./SwitchBase-97b0f4c8.js";const x=A(E)(({theme:r})=>({padding:12,borderRadius:8,border:`1px solid ${r.palette.divider}`})),U=()=>{const[r,h]=m.useState(!1),[l,B]=m.useState(!1),{signInWithEmail:C,signInWithGoogle:F,logout:L,isAuthenticated:u,user:d}=m.useContext(G),P=async()=>{await F()},k={email:"jason@ui-lib.com",password:"dummyPass",remember:!0},v=O().shape({email:y().email("Must be a valid email").max(255).required("Email is required"),password:y().min(6,"Password should be of minimum 6 characters length").required("Password is required")}),{errors:s,values:o,touched:i,handleBlur:p,handleChange:c,handleSubmit:z}=N({initialValues:k,validationSchema:v,onSubmit:async j=>{try{h(!0),await C(j.email,j.password)}catch(I){h(!1),console.log(I)}}});return console.log({isAuthenticated:u,user:d}),u&&d?e.jsx(S,{login:!0,children:e.jsxs(t,{maxWidth:550,p:4,width:"100%",children:[e.jsx(g,{fontSize:{sm:30,xs:25},children:"Welcome Back"}),e.jsxs(a,{mt:1,mb:6,color:"text.secondary",children:["Hello! ",d.email]}),e.jsx(W,{fullWidth:!0,color:"error",loading:r,variant:"contained",onClick:L,children:"Logout"})]})}):e.jsx(S,{login:!0,children:e.jsxs(t,{maxWidth:550,p:4,children:[e.jsx(g,{fontSize:{sm:30,xs:25},children:"Sign In"}),e.jsxs(a,{mt:1,mb:6,color:"text.secondary",children:["New user?"," ",e.jsx(t,{fontWeight:500,component:f,href:"/firebase/register",children:"Create an Account"})]}),e.jsx("form",{onSubmit:z,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsxs(n,{item:!0,xs:12,children:[e.jsx(R,{fontSize:16,mb:1.5,children:"Login with your email id"}),e.jsx(w,{fullWidth:!0,placeholder:"Enter your work email",name:"email",onBlur:p,value:o.email,onChange:c,helperText:i.email&&s.email,error:!!(i.email&&s.email)})]}),e.jsxs(n,{item:!0,xs:12,children:[e.jsx(w,{fullWidth:!0,placeholder:"Password",type:l?"text":"password",name:"password",onBlur:p,value:o.password,onChange:c,helperText:i.password&&s.password,error:!!(i.password&&s.password),InputProps:{endAdornment:e.jsx(T,{onClick:()=>B(!l),sx:{cursor:"pointer"},children:l?e.jsx(J,{fontSize:"small"}):e.jsx(K,{fontSize:"small"})})}}),e.jsxs(V,{my:1,children:[e.jsxs(b,{alignItems:"center",gap:1,children:[e.jsx(Q,{sx:{p:0},name:"remember",value:o.remember,onChange:c,checked:o.remember}),e.jsx(a,{fontWeight:500,children:"Remember me"})]}),e.jsx(t,{href:"#",fontSize:13,component:f,sx:{color:"error.500",fontWeight:500},children:"Forget Password?"})]})]}),e.jsx(n,{item:!0,xs:12,children:e.jsx(W,{loading:r,type:"submit",variant:"contained",fullWidth:!0,children:"Sign In"})})]})}),e.jsx(q,{sx:{my:4,borderColor:"grey.200",borderWidth:1},children:e.jsx(a,{color:"text.secondary",px:1,children:"OR"})}),e.jsxs(b,{justifyContent:"center",flexWrap:"wrap",gap:2,children:[e.jsx(x,{onClick:P,children:e.jsx(M,{sx:{fontSize:18}})}),e.jsx(x,{children:e.jsx(D,{sx:{color:"#2475EF",fontSize:18}})}),e.jsx(x,{children:e.jsx($,{sx:{color:"#45ABF7",fontSize:18}})})]})]})})},ne=()=>e.jsx(H,{children:e.jsx(U,{})});export{ne as default};
