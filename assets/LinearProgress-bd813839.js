import{ao as M,an as j,k as h,s as m,as as o,at as s,aN as C,r as q,au as z,av as D,b as T,j as b,ay as U,az as O,aM as A,aL as K}from"./index-90aa246b.js";function w(r){return M("MuiLinearProgress",r)}j("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const E=["className","color","value","valueBuffer","variant"];let l=r=>r,$,L,k,B,I,_;const v=4,X=h($||($=l`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),S=h(L||(L=l`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),W=h(k||(k=l`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),F=r=>{const{classes:a,variant:e,color:t}=r,p={root:["root",`color${o(t)}`,e],dashed:["dashed",`dashedColor${o(t)}`],bar1:["bar",`barColor${o(t)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar",e!=="buffer"&&`barColor${o(t)}`,e==="buffer"&&`color${o(t)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return O(p,w,a)},y=(r,a)=>a==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:r.palette.mode==="light"?A(r.palette[a].main,.62):K(r.palette[a].main,.5),G=m("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${o(e.color)}`],a[e.variant]]}})(({ownerState:r,theme:a})=>s({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:y(a,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),H=m("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${o(e.color)}`]]}})(({ownerState:r,theme:a})=>{const e=y(a,r.color);return s({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},C(B||(B=l`
    animation: ${0} 3s infinite linear;
  `),W)),J=m("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${o(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar1Indeterminate,e.variant==="determinate"&&a.bar1Determinate,e.variant==="buffer"&&a.bar1Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${v}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${v}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&C(I||(I=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),X)),Q=m("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${o(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar2Indeterminate,e.variant==="buffer"&&a.bar2Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:y(a,r.color),transition:`transform .${v}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&C(_||(_=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),S)),V=q.forwardRef(function(a,e){const t=z({props:a,name:"MuiLinearProgress"}),{className:p,color:N="primary",value:g,valueBuffer:P,variant:i="indeterminate"}=t,R=D(t,E),c=s({},t,{color:N,variant:i}),u=F(c),x=T(),f={},d={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&g!==void 0){f["aria-valuenow"]=Math.round(g),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let n=g-100;x.direction==="rtl"&&(n=-n),d.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&P!==void 0){let n=(P||0)-100;x.direction==="rtl"&&(n=-n),d.bar2.transform=`translateX(${n}%)`}return b.jsxs(G,s({className:U(u.root,p),ownerState:c,role:"progressbar"},f,{ref:e},R,{children:[i==="buffer"?b.jsx(H,{className:u.dashed,ownerState:c}):null,b.jsx(J,{className:u.bar1,ownerState:c,style:d.bar1}),i==="determinate"?null:b.jsx(Q,{className:u.bar2,ownerState:c,style:d.bar2})]}))}),Z=V;export{Z as L};
