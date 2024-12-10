import{aQ as St,r as O,aP as et,cj as vt,aR as Ne,ck as Lt,at as c,ao as mt,an as xt,s as F,as as Ee,au as It,av as rt,j as x,ay as ge,az as Ot,cl as tt,cm as se,cn as dt,co as fe,I as Pt,aK as Ct,aq as ot,cp as At,ax as kt,h as Rt}from"./index-fe46112a.js";import{C as Tt}from"./Close-9700e0c8.js";import{M as $t}from"./Popper-4ddeb155.js";function ft(o){return typeof o.normalize<"u"?o.normalize("NFD").replace(/[\u0300-\u036f]/g,""):o}function wt(o={}){const{ignoreAccents:r=!0,ignoreCase:p=!0,limit:b,matchFrom:L="any",stringify:y,trim:P=!1}=o;return(f,{inputValue:G,getOptionLabel:z})=>{let A=P?G.trim():G;p&&(A=A.toLowerCase()),r&&(A=ft(A));const j=A?f.filter(oe=>{let M=(y||z)(oe);return p&&(M=M.toLowerCase()),r&&(M=ft(M)),L==="start"?M.indexOf(A)===0:M.indexOf(A)>-1}):f;return typeof b=="number"?j.slice(0,b):j}}function nt(o,r){for(let p=0;p<o.length;p+=1)if(r(o[p]))return p;return-1}const Dt=wt(),gt=5,Mt=o=>{var r;return o.current!==null&&((r=o.current.parentElement)==null?void 0:r.contains(document.activeElement))};function Nt(o){const{unstable_isActiveElementInListbox:r=Mt,unstable_classNamePrefix:p="Mui",autoComplete:b=!1,autoHighlight:L=!1,autoSelect:y=!1,blurOnSelect:P=!1,clearOnBlur:f=!o.freeSolo,clearOnEscape:G=!1,componentName:z="useAutocomplete",defaultValue:A=o.multiple?[]:null,disableClearable:j=!1,disableCloseOnSelect:oe=!1,disabled:M,disabledItemsFocusable:Fe=!1,disableListWrap:He=!1,filterOptions:at=Dt,filterSelectedOptions:be=!1,freeSolo:X=!1,getOptionDisabled:_,getOptionLabel:ze=t=>{var e;return(e=t.label)!=null?e:t},groupBy:le,handleHomeEndKeys:je=!o.freeSolo,id:ne,includeInputInList:Ve=!1,inputValue:st,isOptionEqualToValue:Y=(t,e)=>t===e,multiple:d=!1,onChange:he,onClose:me,onHighlightChange:ye,onInputChange:U,onOpen:Se,open:We,openOnFocus:lt=!1,options:it,readOnly:K=!1,selectOnFocus:Be=!o.freeSolo,value:xe}=o,k=St(ne);let S=ze;S=t=>{const e=ze(t);return typeof e!="string"?String(e):e};const Ie=O.useRef(!1),Oe=O.useRef(!0),C=O.useRef(null),R=O.useRef(null),[ie,Ge]=O.useState(null),[w,pe]=O.useState(-1),ve=L?0:-1,v=O.useRef(ve),[s,Le]=et({controlled:xe,default:A,name:z}),[u,Z]=et({controlled:st,default:"",name:z,state:"inputValue"}),[q,Ae]=O.useState(!1),ue=O.useCallback((t,e)=>{if(!(d?s.length<e.length:e!==null)&&!f)return;let a;if(d)a="";else if(e==null)a="";else{const i=S(e);a=typeof i=="string"?i:""}u!==a&&(Z(a),U&&U(t,a,"reset"))},[S,u,d,U,Z,f,s]),[Q,ke]=et({controlled:We,default:!1,name:z,state:"open"}),[_e,Re]=O.useState(!0),Te=!d&&s!=null&&u===S(s),T=Q&&!K,g=T?at(it.filter(t=>!(be&&(d?s:[s]).some(e=>e!==null&&Y(t,e)))),{inputValue:Te&&_e?"":u,getOptionLabel:S}):[],D=vt({filteredOptions:g,value:s,inputValue:u});O.useEffect(()=>{const t=s!==D.value;q&&!t||X&&!t||ue(null,s)},[s,ue,q,D.value,X]);const Pe=Q&&g.length>0&&!K,ce=Ne(t=>{t===-1?C.current.focus():ie.querySelector(`[data-tag-index="${t}"]`).focus()});O.useEffect(()=>{d&&w>s.length-1&&(pe(-1),ce(-1))},[s,d,w,ce]);function Ue(t,e){if(!R.current||t===-1)return-1;let n=t;for(;;){if(e==="next"&&n===g.length||e==="previous"&&n===-1)return-1;const a=R.current.querySelector(`[data-option-index="${n}"]`),i=Fe?!1:!a||a.disabled||a.getAttribute("aria-disabled")==="true";if(a&&!a.hasAttribute("tabindex")||i)n+=e==="next"?1:-1;else return n}}const N=Ne(({event:t,index:e,reason:n="auto"})=>{if(v.current=e,e===-1?C.current.removeAttribute("aria-activedescendant"):C.current.setAttribute("aria-activedescendant",`${k}-option-${e}`),ye&&ye(t,e===-1?null:g[e],n),!R.current)return;const a=R.current.querySelector(`[role="option"].${p}-focused`);a&&(a.classList.remove(`${p}-focused`),a.classList.remove(`${p}-focusVisible`));let i=R.current;if(R.current.getAttribute("role")!=="listbox"&&(i=R.current.parentElement.querySelector('[role="listbox"]')),!i)return;if(e===-1){i.scrollTop=0;return}const h=R.current.querySelector(`[data-option-index="${e}"]`);if(h&&(h.classList.add(`${p}-focused`),n==="keyboard"&&h.classList.add(`${p}-focusVisible`),i.scrollHeight>i.clientHeight&&n!=="mouse"&&n!=="touch")){const m=h,B=i.clientHeight+i.scrollTop,ct=m.offsetTop+m.offsetHeight;ct>B?i.scrollTop=ct-i.clientHeight:m.offsetTop-m.offsetHeight*(le?1.3:0)<i.scrollTop&&(i.scrollTop=m.offsetTop-m.offsetHeight*(le?1.3:0))}}),E=Ne(({event:t,diff:e,direction:n="next",reason:a="auto"})=>{if(!T)return;const h=Ue((()=>{const m=g.length-1;if(e==="reset")return ve;if(e==="start")return 0;if(e==="end")return m;const B=v.current+e;return B<0?B===-1&&Ve?-1:He&&v.current!==-1||Math.abs(e)>1?0:m:B>m?B===m+1&&Ve?-1:He||Math.abs(e)>1?m:0:B})(),n);if(N({index:h,reason:a,event:t}),b&&e!=="reset")if(h===-1)C.current.value=u;else{const m=S(g[h]);C.current.value=m,m.toLowerCase().indexOf(u.toLowerCase())===0&&u.length>0&&C.current.setSelectionRange(u.length,m.length)}}),Ke=()=>{const t=(e,n)=>{const a=e?S(e):"",i=n?S(n):"";return a===i};if(v.current!==-1&&D.filteredOptions&&D.filteredOptions.length!==g.length&&D.inputValue===u&&(d?s.length===D.value.length&&D.value.every((e,n)=>S(s[n])===S(e)):t(D.value,s))){const e=D.filteredOptions[v.current];if(e&&g.some(a=>S(a)===S(e)))return!0}return!1},ee=O.useCallback(()=>{if(!T||Ke())return;const t=d?s[0]:s;if(g.length===0||t==null){E({diff:"reset"});return}if(R.current){if(t!=null){const e=g[v.current];if(d&&e&&nt(s,a=>Y(e,a))!==-1)return;const n=nt(g,a=>Y(a,t));n===-1?E({diff:"reset"}):N({index:n});return}if(v.current>=g.length-1){N({index:g.length-1});return}N({index:v.current})}},[g.length,d?!1:s,be,E,N,T,u,d]),qe=Ne(t=>{Lt(R,t),t&&ee()});O.useEffect(()=>{ee()},[ee]);const J=t=>{Q||(ke(!0),Re(!0),Se&&Se(t))},V=(t,e)=>{Q&&(ke(!1),me&&me(t,e))},W=(t,e,n,a)=>{if(d){if(s.length===e.length&&s.every((i,h)=>i===e[h]))return}else if(s===e)return;he&&he(t,e,n,a),Le(e)},te=O.useRef(!1),re=(t,e,n="selectOption",a="options")=>{let i=n,h=e;if(d){h=Array.isArray(s)?s.slice():[];const m=nt(h,B=>Y(e,B));m===-1?h.push(e):a!=="freeSolo"&&(h.splice(m,1),i="removeOption")}ue(t,h),W(t,h,i,{option:e}),!oe&&(!t||!t.ctrlKey&&!t.metaKey)&&V(t,i),(P===!0||P==="touch"&&te.current||P==="mouse"&&!te.current)&&C.current.blur()};function Qe(t,e){if(t===-1)return-1;let n=t;for(;;){if(e==="next"&&n===s.length||e==="previous"&&n===-1)return-1;const a=ie.querySelector(`[data-tag-index="${n}"]`);if(!a||!a.hasAttribute("tabindex")||a.disabled||a.getAttribute("aria-disabled")==="true")n+=e==="next"?1:-1;else return n}}const Ce=(t,e)=>{if(!d)return;u===""&&V(t,"toggleInput");let n=w;w===-1?u===""&&e==="previous"&&(n=s.length-1):(n+=e==="next"?1:-1,n<0&&(n=0),n===s.length&&(n=-1)),n=Qe(n,e),pe(n),ce(n)},we=t=>{Ie.current=!0,Z(""),U&&U(t,"","clear"),W(t,d?[]:null,"clear")},Je=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(w!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(pe(-1),ce(-1)),e.which!==229))switch(e.key){case"Home":T&&je&&(e.preventDefault(),E({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":T&&je&&(e.preventDefault(),E({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),E({diff:-gt,direction:"previous",reason:"keyboard",event:e}),J(e);break;case"PageDown":e.preventDefault(),E({diff:gt,direction:"next",reason:"keyboard",event:e}),J(e);break;case"ArrowDown":e.preventDefault(),E({diff:1,direction:"next",reason:"keyboard",event:e}),J(e);break;case"ArrowUp":e.preventDefault(),E({diff:-1,direction:"previous",reason:"keyboard",event:e}),J(e);break;case"ArrowLeft":Ce(e,"previous");break;case"ArrowRight":Ce(e,"next");break;case"Enter":if(v.current!==-1&&T){const n=g[v.current],a=_?_(n):!1;if(e.preventDefault(),a)return;re(e,n,"selectOption"),b&&C.current.setSelectionRange(C.current.value.length,C.current.value.length)}else X&&u!==""&&Te===!1&&(d&&e.preventDefault(),re(e,u,"createOption","freeSolo"));break;case"Escape":T?(e.preventDefault(),e.stopPropagation(),V(e,"escape")):G&&(u!==""||d&&s.length>0)&&(e.preventDefault(),e.stopPropagation(),we(e));break;case"Backspace":if(d&&!K&&u===""&&s.length>0){const n=w===-1?s.length-1:w,a=s.slice();a.splice(n,1),W(e,a,"removeOption",{option:s[n]})}break;case"Delete":if(d&&!K&&u===""&&s.length>0&&w!==-1){const n=w,a=s.slice();a.splice(n,1),W(e,a,"removeOption",{option:s[n]})}break}},Xe=t=>{Ae(!0),lt&&!Ie.current&&J(t)},Ye=t=>{if(r(R)){C.current.focus();return}Ae(!1),Oe.current=!0,Ie.current=!1,y&&v.current!==-1&&T?re(t,g[v.current],"blur"):y&&X&&u!==""?re(t,u,"blur","freeSolo"):f&&ue(t,s),V(t,"blur")},$e=t=>{const e=t.target.value;u!==e&&(Z(e),Re(!1),U&&U(t,e,"input")),e===""?!j&&!d&&W(t,null,"clear"):J(t)},$=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));v.current!==e&&N({event:t,index:e,reason:"mouse"})},I=t=>{N({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),te.current=!0},H=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));re(t,g[e],"selectOption"),te.current=!1},pt=t=>e=>{const n=s.slice();n.splice(t,1),W(e,n,"removeOption",{option:s[t]})},De=t=>{Q?V(t,"toggleInput"):J(t)},ut=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==k&&t.preventDefault()},Ze=t=>{t.currentTarget.contains(t.target)&&(C.current.focus(),Be&&Oe.current&&C.current.selectionEnd-C.current.selectionStart===0&&C.current.select(),Oe.current=!1)},Me=t=>{!M&&(u===""||!Q)&&De(t)};let ae=X&&u.length>0;ae=ae||(d?s.length>0:s!==null);let de=g;return le&&(de=g.reduce((t,e,n)=>{const a=le(e);return t.length>0&&t[t.length-1].group===a?t[t.length-1].options.push(e):t.push({key:n,index:n,group:a,options:[e]}),t},[])),M&&q&&Ye(),{getRootProps:(t={})=>c({"aria-owns":Pe?`${k}-listbox`:null},t,{onKeyDown:Je(t),onMouseDown:ut,onClick:Ze}),getInputLabelProps:()=>({id:`${k}-label`,htmlFor:k}),getInputProps:()=>({id:k,value:u,onBlur:Ye,onFocus:Xe,onChange:$e,onMouseDown:Me,"aria-activedescendant":T?"":null,"aria-autocomplete":b?"both":"list","aria-controls":Pe?`${k}-listbox`:void 0,"aria-expanded":Pe,autoComplete:"off",ref:C,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:M}),getClearProps:()=>({tabIndex:-1,onClick:we}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:De}),getTagProps:({index:t})=>c({key:t,"data-tag-index":t,tabIndex:-1},!K&&{onDelete:pt(t)}),getListboxProps:()=>({role:"listbox",id:`${k}-listbox`,"aria-labelledby":`${k}-label`,ref:qe,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{const n=(d?s:[s]).some(i=>i!=null&&Y(e,i)),a=_?_(e):!1;return{key:S(e),tabIndex:-1,role:"option",id:`${k}-option-${t}`,onMouseMove:$,onClick:H,onTouchStart:I,"data-option-index":t,"aria-disabled":a,"aria-selected":n}},id:k,inputValue:u,value:s,dirty:ae,expanded:T&&ie,popupOpen:T,focused:q||w!==-1,anchorEl:ie,setAnchorEl:Ge,focusedTag:w,groupedOptions:de}}function Et(o){return mt("MuiListSubheader",o)}xt("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const Ft=["className","color","component","disableGutters","disableSticky","inset"],Ht=o=>{const{classes:r,color:p,disableGutters:b,inset:L,disableSticky:y}=o,P={root:["root",p!=="default"&&`color${Ee(p)}`,!b&&"gutters",L&&"inset",!y&&"sticky"]};return Ot(P,Et,r)},zt=F("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:p}=o;return[r.root,p.color!=="default"&&r[`color${Ee(p.color)}`],!p.disableGutters&&r.gutters,p.inset&&r.inset,!p.disableSticky&&r.sticky]}})(({theme:o,ownerState:r})=>c({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(o.vars||o).palette.text.secondary,fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(14)},r.color==="primary"&&{color:(o.vars||o).palette.primary.main},r.color==="inherit"&&{color:"inherit"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.inset&&{paddingLeft:72},!r.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(o.vars||o).palette.background.paper})),yt=O.forwardRef(function(r,p){const b=It({props:r,name:"MuiListSubheader"}),{className:L,color:y="default",component:P="li",disableGutters:f=!1,disableSticky:G=!1,inset:z=!1}=b,A=rt(b,Ft),j=c({},b,{color:y,component:P,disableGutters:f,disableSticky:G,inset:z}),oe=Ht(j);return x.jsx(zt,c({as:P,className:ge(oe.root,L),ref:p,ownerState:j},A))});yt.muiSkipListHighlight=!0;const jt=yt;function Vt(o){return mt("MuiAutocomplete",o)}const Wt=xt("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),l=Wt;var bt,ht;const Bt=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],Gt=["ref"],_t=o=>{const{classes:r,disablePortal:p,expanded:b,focused:L,fullWidth:y,hasClearIcon:P,hasPopupIcon:f,inputFocused:G,popupOpen:z,size:A}=o,j={root:["root",b&&"expanded",L&&"focused",y&&"fullWidth",P&&"hasClearIcon",f&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",G&&"inputFocused"],tag:["tag",`tagSize${Ee(A)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",z&&"popupIndicatorOpen"],popper:["popper",p&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return Ot(j,Vt,r)},Ut=F("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:p}=o,{fullWidth:b,hasClearIcon:L,hasPopupIcon:y,inputFocused:P,size:f}=p;return[{[`& .${l.tag}`]:r.tag},{[`& .${l.tag}`]:r[`tagSize${Ee(f)}`]},{[`& .${l.inputRoot}`]:r.inputRoot},{[`& .${l.input}`]:r.input},{[`& .${l.input}`]:P&&r.inputFocused},r.root,b&&r.fullWidth,y&&r.hasPopupIcon,L&&r.hasClearIcon]}})(({ownerState:o})=>c({[`&.${l.focused} .${l.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${l.clearIndicator}`]:{visibility:"visible"}}},o.fullWidth&&{width:"100%"},{[`& .${l.tag}`]:c({margin:3,maxWidth:"calc(100% - 6px)"},o.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${l.inputRoot}`]:{flexWrap:"wrap",[`.${l.hasPopupIcon}&, .${l.hasClearIcon}&`]:{paddingRight:26+4},[`.${l.hasPopupIcon}.${l.hasClearIcon}&`]:{paddingRight:52+4},[`& .${l.input}`]:{width:0,minWidth:30}},[`& .${tt.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${tt.root}.${se.sizeSmall}`]:{[`& .${tt.input}`]:{padding:"2px 4px 3px 0"}},[`& .${dt.root}`]:{padding:9,[`.${l.hasPopupIcon}&, .${l.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${l.hasPopupIcon}.${l.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${l.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${l.endAdornment}`]:{right:9}},[`& .${dt.root}.${se.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${l.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${fe.root}`]:{paddingTop:19,paddingLeft:8,[`.${l.hasPopupIcon}&, .${l.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${l.hasPopupIcon}.${l.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${fe.input}`]:{padding:"7px 4px"},[`& .${l.endAdornment}`]:{right:9}},[`& .${fe.root}.${se.sizeSmall}`]:{paddingBottom:1,[`& .${fe.input}`]:{padding:"2.5px 4px"}},[`& .${se.hiddenLabel}`]:{paddingTop:8},[`& .${fe.root}.${se.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${l.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${fe.root}.${se.hiddenLabel}.${se.sizeSmall}`]:{[`& .${l.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${l.input}`]:c({flexGrow:1,textOverflow:"ellipsis",opacity:0},o.inputFocused&&{opacity:1})})),Kt=F("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(o,r)=>r.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),qt=F(Pt,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(o,r)=>r.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Qt=F(Pt,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:o},r)=>c({},r.popupIndicator,o.popupOpen&&r.popupIndicatorOpen)})(({ownerState:o})=>c({padding:2,marginRight:-2},o.popupOpen&&{transform:"rotate(180deg)"})),Jt=F($t,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(o,r)=>{const{ownerState:p}=o;return[{[`& .${l.option}`]:r.option},r.popper,p.disablePortal&&r.popperDisablePortal]}})(({theme:o,ownerState:r})=>c({zIndex:(o.vars||o).zIndex.modal},r.disablePortal&&{position:"absolute"})),Xt=F(Ct,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(o,r)=>r.paper})(({theme:o})=>c({},o.typography.body1,{overflow:"auto"})),Yt=F("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(o,r)=>r.loading})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),Zt=F("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(o,r)=>r.noOptions})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),eo=F("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(o,r)=>r.listbox})(({theme:o})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${l.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[o.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${l.focused}`]:{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:ot(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${l.focused}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:ot(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}},[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:ot(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}}}})),to=F(jt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(o,r)=>r.groupLabel})(({theme:o})=>({backgroundColor:(o.vars||o).palette.background.paper,top:-8})),oo=F("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(o,r)=>r.groupUl})({padding:0,[`& .${l.option}`]:{paddingLeft:24}}),no=O.forwardRef(function(r,p){var b,L,y,P;const f=It({props:r,name:"MuiAutocomplete"}),{autoComplete:G=!1,autoHighlight:z=!1,autoSelect:A=!1,blurOnSelect:j=!1,ChipProps:oe,className:M,clearIcon:Fe=bt||(bt=x.jsx(Tt,{fontSize:"small"})),clearOnBlur:He=!f.freeSolo,clearOnEscape:at=!1,clearText:be="Clear",closeText:X="Close",componentsProps:_={},defaultValue:ze=f.multiple?[]:null,disableClearable:le=!1,disableCloseOnSelect:je=!1,disabled:ne=!1,disabledItemsFocusable:Ve=!1,disableListWrap:st=!1,disablePortal:Y=!1,filterSelectedOptions:d=!1,forcePopupIcon:he="auto",freeSolo:me=!1,fullWidth:ye=!1,getLimitTagsText:U=n=>`+${n}`,getOptionLabel:Se,groupBy:We,handleHomeEndKeys:lt=!f.freeSolo,includeInputInList:it=!1,limitTags:K=-1,ListboxComponent:Be="ul",ListboxProps:xe,loading:k=!1,loadingText:S="Loading…",multiple:Ie=!1,noOptionsText:Oe="No options",openOnFocus:C=!1,openText:R="Open",PaperComponent:ie=Ct,PopperComponent:Ge=$t,popupIcon:w=ht||(ht=x.jsx(At,{})),readOnly:pe=!1,renderGroup:ve,renderInput:v,renderOption:s,renderTags:Le,selectOnFocus:u=!f.freeSolo,size:Z="medium",slotProps:q={}}=f,Ae=rt(f,Bt),{getRootProps:ue,getInputProps:Q,getInputLabelProps:ke,getPopupIndicatorProps:_e,getClearProps:Re,getTagProps:Te,getListboxProps:T,getOptionProps:g,value:D,dirty:Pe,expanded:ce,id:Ue,popupOpen:N,focused:E,focusedTag:Ke,anchorEl:ee,setAnchorEl:qe,inputValue:J,groupedOptions:V}=Nt(c({},f,{componentName:"Autocomplete"})),W=!le&&!ne&&Pe&&!pe,te=(!me||he===!0)&&he!==!1,{onMouseDown:re}=Q(),{ref:Qe}=xe??{},Ce=T(),{ref:we}=Ce,Je=rt(Ce,Gt),Xe=kt(we,Qe),$e=Se||(n=>{var a;return(a=n.label)!=null?a:n}),$=c({},f,{disablePortal:Y,expanded:ce,focused:E,fullWidth:ye,getOptionLabel:$e,hasClearIcon:W,hasPopupIcon:te,inputFocused:Ke===-1,popupOpen:N,size:Z}),I=_t($);let H;if(Ie&&D.length>0){const n=a=>c({className:I.tag,disabled:ne},Te(a));Le?H=Le(D,n,$):H=D.map((a,i)=>x.jsx(Rt,c({label:$e(a),size:Z},n({index:i}),oe)))}if(K>-1&&Array.isArray(H)){const n=H.length-K;!E&&n>0&&(H=H.splice(0,K),H.push(x.jsx("span",{className:I.tag,children:U(n)},H.length)))}const De=ve||(n=>x.jsxs("li",{children:[x.jsx(to,{className:I.groupLabel,ownerState:$,component:"div",children:n.group}),x.jsx(oo,{className:I.groupUl,ownerState:$,children:n.children})]},n.key)),Ze=s||((n,a)=>x.jsx("li",c({},n,{children:$e(a)}))),Me=(n,a)=>{const i=g({option:n,index:a});return Ze(c({},i,{className:I.option}),n,{selected:i["aria-selected"],index:a,inputValue:J},$)},ae=(b=q.clearIndicator)!=null?b:_.clearIndicator,de=(L=q.paper)!=null?L:_.paper,t=(y=q.popper)!=null?y:_.popper,e=(P=q.popupIndicator)!=null?P:_.popupIndicator;return x.jsxs(O.Fragment,{children:[x.jsx(Ut,c({ref:p,className:ge(I.root,M),ownerState:$},ue(Ae),{children:v({id:Ue,disabled:ne,fullWidth:!0,size:Z==="small"?"small":void 0,InputLabelProps:ke(),InputProps:c({ref:qe,className:I.inputRoot,startAdornment:H,onClick:n=>{n.target===n.currentTarget&&re(n)}},(W||te)&&{endAdornment:x.jsxs(Kt,{className:I.endAdornment,ownerState:$,children:[W?x.jsx(qt,c({},Re(),{"aria-label":be,title:be,ownerState:$},ae,{className:ge(I.clearIndicator,ae==null?void 0:ae.className),children:Fe})):null,te?x.jsx(Qt,c({},_e(),{disabled:ne,"aria-label":N?X:R,title:N?X:R,ownerState:$},e,{className:ge(I.popupIndicator,e==null?void 0:e.className),children:w})):null]})}),inputProps:c({className:I.input,disabled:ne,readOnly:pe},Q())})})),ee?x.jsx(Jt,c({as:Ge,disablePortal:Y,style:{width:ee?ee.clientWidth:null},ownerState:$,role:"presentation",anchorEl:ee,open:N},t,{className:ge(I.popper,t==null?void 0:t.className),children:x.jsxs(Xt,c({ownerState:$,as:ie},de,{className:ge(I.paper,de==null?void 0:de.className),children:[k&&V.length===0?x.jsx(Yt,{className:I.loading,ownerState:$,children:S}):null,V.length===0&&!me&&!k?x.jsx(Zt,{className:I.noOptions,ownerState:$,role:"presentation",onMouseDown:n=>{n.preventDefault()},children:Oe}):null,V.length>0?x.jsx(eo,c({as:Be,className:I.listbox,ownerState:$},Je,xe,{ref:Xe,children:V.map((n,a)=>We?De({key:n.key,group:n.group,children:n.options.map((i,h)=>Me(i,n.index+h))}):Me(n,a))})):null]}))})):null]})}),lo=no;export{lo as A,wt as c};