import{an as U,ao as V,c as d,j as l,s as p,aK as F,as as B,aL as S,aM as z,at as a,r as Z,au as K,av as q,I as D,ay as G,az as J}from"./index-fe46112a.js";import{C as Q}from"./Close-9700e0c8.js";function X(o){return V("MuiAlert",o)}const Y=U("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),h=Y,oo=d(l.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),to=d(l.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),so=d(l.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),lo=d(l.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),eo=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],ro=o=>{const{variant:s,color:e,severity:r,classes:t}=o,c={root:["root",`${s}${B(e||r)}`,`${s}`],icon:["icon"],message:["message"],action:["action"]};return J(c,X,t)},no=p(F,{name:"MuiAlert",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[s.root,s[e.variant],s[`${e.variant}${B(e.color||e.severity)}`]]}})(({theme:o,ownerState:s})=>{const e=o.palette.mode==="light"?S:z,r=o.palette.mode==="light"?z:S,t=s.color||s.severity;return a({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&s.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:e(o.palette[t].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${t}StandardBg`]:r(o.palette[t].light,.9),[`& .${h.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:e(o.palette[t].light,.6),border:`1px solid ${(o.vars||o).palette[t].light}`,[`& .${h.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="filled"&&a({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${t}FilledColor`],backgroundColor:o.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[t].dark:o.palette[t].main,color:o.palette.getContrastText(o.palette[t].main)}))}),ao=p("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,s)=>s.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),io=p("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,s)=>s.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),L=p("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,s)=>s.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),P={success:l.jsx(oo,{fontSize:"inherit"}),warning:l.jsx(to,{fontSize:"inherit"}),error:l.jsx(so,{fontSize:"inherit"}),info:l.jsx(lo,{fontSize:"inherit"})},co=Z.forwardRef(function(s,e){var r,t,c,f,A,C;const u=K({props:s,name:"MuiAlert"}),{action:g,children:R,className:b,closeText:x="Close",color:k,components:I={},componentsProps:M={},icon:m,iconMapping:_=P,onClose:$,role:O="alert",severity:v="success",slotProps:j={},slots:y={},variant:E="standard"}=u,N=q(u,eo),n=a({},u,{color:k,severity:v,variant:E}),i=ro(n),W=(r=(t=y.closeButton)!=null?t:I.CloseButton)!=null?r:D,w=(c=(f=y.closeIcon)!=null?f:I.CloseIcon)!=null?c:Q,H=(A=j.closeButton)!=null?A:M.closeButton,T=(C=j.closeIcon)!=null?C:M.closeIcon;return l.jsxs(no,a({role:O,elevation:0,ownerState:n,className:G(i.root,b),ref:e},N,{children:[m!==!1?l.jsx(ao,{ownerState:n,className:i.icon,children:m||_[v]||P[v]}):null,l.jsx(io,{ownerState:n,className:i.message,children:R}),g!=null?l.jsx(L,{ownerState:n,className:i.action,children:g}):null,g==null&&$?l.jsx(L,{ownerState:n,className:i.action,children:l.jsx(W,a({size:"small","aria-label":x,title:x,color:"inherit",onClick:$},H,{children:l.jsx(w,a({fontSize:"small"},T))}))}):null]}))}),go=co;export{go as A};
