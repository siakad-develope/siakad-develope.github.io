import{an as fe,ao as he,s as Y,at as r,as as Wo,aq as Uo,r as n,au as Te,av as ge,b as be,aP as Pe,aQ as ve,aR as ye,aw as we,ax as xe,ay as F,aS as Do,aT as N,j as T,az as Re}from"./index-fe46112a.js";import{M as jo}from"./Popper-4ddeb155.js";function Ce(t){return he("MuiTooltip",t)}const Me=fe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),c=Me,Oe=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function $e(t){return Math.round(t*1e5)/1e5}const _e=t=>{const{classes:e,disableInteractive:s,arrow:g,touch:R,placement:C}=t,M={popper:["popper",!s&&"popperInteractive",g&&"popperArrow"],tooltip:["tooltip",g&&"tooltipArrow",R&&"touch",`tooltipPlacement${Wo(C.split("-")[0])}`],arrow:["arrow"]};return Re(M,Ce,e)},Le=Y(jo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.popper,!s.disableInteractive&&e.popperInteractive,s.arrow&&e.popperArrow,!s.open&&e.popperClose]}})(({theme:t,ownerState:e,open:s})=>r({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!s&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${c.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${c.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${c.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${c.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ee=Y("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.tooltip,s.touch&&e.touch,s.arrow&&e.tooltipArrow,e[`tooltipPlacement${Wo(s.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>r({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${$e(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${c.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${c.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${c.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${c.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ie=Y("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let A=!1,X=null,x={x:0,y:0};function S(t,e){return s=>{e&&e(s),t(s)}}const ke=n.forwardRef(function(e,s){var g,R,C,M,J,Z,oo,eo,to,ro,no,so,io,po,lo,ao,co,uo,mo;const B=Te({props:e,name:"MuiTooltip"}),{arrow:fo=!1,children:D,components:O={},componentsProps:u={},describeChild:zo=!1,disableFocusListener:Vo=!1,disableHoverListener:ho=!1,disableInteractive:Ho=!1,disableTouchListener:qo=!1,enterDelay:To=100,enterNextDelay:go=0,enterTouchDelay:Go=700,followCursor:W=!1,id:Ko,leaveDelay:bo=0,leaveTouchDelay:Qo=1500,onClose:Po,onOpen:vo,open:Xo,placement:yo="bottom",PopperComponent:U,PopperProps:d={},slotProps:m={},slots:$={},title:h,TransitionComponent:Yo=Do,TransitionProps:Jo}=B,wo=ge(B,Oe),a=n.isValidElement(D)?D:T.jsx("span",{children:D}),j=be(),Zo=j.direction==="rtl",[b,xo]=n.useState(),[z,oe]=n.useState(null),_=n.useRef(!1),V=Ho||W,L=n.useRef(),E=n.useRef(),f=n.useRef(),Ro=n.useRef(),[ee,Co]=Pe({controlled:Xo,default:!1,name:"Tooltip",state:"open"});let l=ee;const H=ve(Ko),P=n.useRef(),I=n.useCallback(()=>{P.current!==void 0&&(document.body.style.WebkitUserSelect=P.current,P.current=void 0),clearTimeout(Ro.current)},[]);n.useEffect(()=>()=>{clearTimeout(L.current),clearTimeout(E.current),clearTimeout(f.current),I()},[I]);const Mo=o=>{clearTimeout(X),A=!0,Co(!0),vo&&!l&&vo(o)},k=ye(o=>{clearTimeout(X),X=setTimeout(()=>{A=!1},800+bo),Co(!1),Po&&l&&Po(o),clearTimeout(L.current),L.current=setTimeout(()=>{_.current=!1},j.transitions.duration.shortest)}),q=o=>{_.current&&o.type!=="touchstart"||(b&&b.removeAttribute("title"),clearTimeout(E.current),clearTimeout(f.current),To||A&&go?E.current=setTimeout(()=>{Mo(o)},A?go:To):Mo(o))},Oo=o=>{clearTimeout(E.current),clearTimeout(f.current),f.current=setTimeout(()=>{k(o)},bo)},{isFocusVisibleRef:$o,onBlur:te,onFocus:re,ref:ne}=we(),[,_o]=n.useState(!1),Lo=o=>{te(o),$o.current===!1&&(_o(!1),Oo(o))},Eo=o=>{b||xo(o.currentTarget),re(o),$o.current===!0&&(_o(!0),q(o))},Io=o=>{_.current=!0;const i=a.props;i.onTouchStart&&i.onTouchStart(o)},ko=q,Fo=Oo,se=o=>{Io(o),clearTimeout(f.current),clearTimeout(L.current),I(),P.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ro.current=setTimeout(()=>{document.body.style.WebkitUserSelect=P.current,q(o)},Go)},ie=o=>{a.props.onTouchEnd&&a.props.onTouchEnd(o),I(),clearTimeout(f.current),f.current=setTimeout(()=>{k(o)},Qo)};n.useEffect(()=>{if(!l)return;function o(i){(i.key==="Escape"||i.key==="Esc")&&k(i)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[k,l]);const pe=xe(a.ref,ne,xo,s);!h&&h!==0&&(l=!1);const G=n.useRef(),le=o=>{const i=a.props;i.onMouseMove&&i.onMouseMove(o),x={x:o.clientX,y:o.clientY},G.current&&G.current.update()},v={},K=typeof h=="string";zo?(v.title=!l&&K&&!ho?h:null,v["aria-describedby"]=l?H:null):(v["aria-label"]=K?h:null,v["aria-labelledby"]=l&&!K?H:null);const p=r({},v,wo,a.props,{className:F(wo.className,a.props.className),onTouchStart:Io,ref:pe},W?{onMouseMove:le}:{}),y={};qo||(p.onTouchStart=se,p.onTouchEnd=ie),ho||(p.onMouseOver=S(ko,p.onMouseOver),p.onMouseLeave=S(Fo,p.onMouseLeave),V||(y.onMouseOver=ko,y.onMouseLeave=Fo)),Vo||(p.onFocus=S(Eo,p.onFocus),p.onBlur=S(Lo,p.onBlur),V||(y.onFocus=Eo,y.onBlur=Lo));const ae=n.useMemo(()=>{var o;let i=[{name:"arrow",enabled:!!z,options:{element:z,padding:4}}];return(o=d.popperOptions)!=null&&o.modifiers&&(i=i.concat(d.popperOptions.modifiers)),r({},d.popperOptions,{modifiers:i})},[z,d]),w=r({},B,{isRtl:Zo,arrow:fo,disableInteractive:V,placement:yo,PopperComponentProp:U,touch:_.current}),Q=_e(w),No=(g=(R=$.popper)!=null?R:O.Popper)!=null?g:Le,Ao=(C=(M=(J=$.transition)!=null?J:O.Transition)!=null?M:Yo)!=null?C:Do,So=(Z=(oo=$.tooltip)!=null?oo:O.Tooltip)!=null?Z:Ee,Bo=(eo=(to=$.arrow)!=null?to:O.Arrow)!=null?eo:Ie,ce=N(No,r({},d,(ro=m.popper)!=null?ro:u.popper,{className:F(Q.popper,d==null?void 0:d.className,(no=(so=m.popper)!=null?so:u.popper)==null?void 0:no.className)}),w),ue=N(Ao,r({},Jo,(io=m.transition)!=null?io:u.transition),w),de=N(So,r({},(po=m.tooltip)!=null?po:u.tooltip,{className:F(Q.tooltip,(lo=(ao=m.tooltip)!=null?ao:u.tooltip)==null?void 0:lo.className)}),w),me=N(Bo,r({},(co=m.arrow)!=null?co:u.arrow,{className:F(Q.arrow,(uo=(mo=m.arrow)!=null?mo:u.arrow)==null?void 0:uo.className)}),w);return T.jsxs(n.Fragment,{children:[n.cloneElement(a,p),T.jsx(No,r({as:U??jo,placement:yo,anchorEl:W?{getBoundingClientRect:()=>({top:x.y,left:x.x,right:x.x,bottom:x.y,width:0,height:0})}:b,popperRef:G,open:b?l:!1,id:H,transition:!0},y,ce,{popperOptions:ae,children:({TransitionProps:o})=>T.jsx(Ao,r({timeout:j.transitions.duration.shorter},o,ue,{children:T.jsxs(So,r({},de,{children:[h,fo?T.jsx(Bo,r({},me,{ref:oe})):null]}))}))}))]})}),Ae=ke;export{Ae as T,c as t};