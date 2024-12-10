import{a1 as P,b2 as O}from"./index-fe46112a.js";var E={exports:{}};/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */(function(v){(function(n,b){v.exports?v.exports=b():n.numeral=b()})(P,function(){var n,b,S="2.0.6",_={},N={},y={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},c={currentLocale:y.currentLocale,zeroFormat:y.zeroFormat,nullFormat:y.nullFormat,defaultFormat:y.defaultFormat,scalePercentBy100:y.scalePercentBy100};function M(e,r){this._input=e,this._value=r}return n=function(e){var r,l,i,t;if(n.isNumeral(e))r=e.value();else if(e===0||typeof e>"u")r=0;else if(e===null||b.isNaN(e))r=null;else if(typeof e=="string")if(c.zeroFormat&&e===c.zeroFormat)r=0;else if(c.nullFormat&&e===c.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(l in _)if(t=typeof _[l].regexps.unformat=="function"?_[l].regexps.unformat():_[l].regexps.unformat,t&&e.match(t)){i=_[l].unformat;break}i=i||n._.stringToNumber,r=i(e)}else r=Number(e)||null;return new M(e,r)},n.version=S,n.isNumeral=function(e){return e instanceof M},n._=b={numberToFormat:function(e,r,l){var i=N[n.options.currentLocale],t=!1,o=!1,a=0,s="",f=1e12,u=1e9,h=1e6,w=1e3,d="",B=!1,p,F,m,g,T,$,x;if(e=e||0,F=Math.abs(e),n._.includes(r,"(")?(t=!0,r=r.replace(/[\(|\)]/g,"")):(n._.includes(r,"+")||n._.includes(r,"-"))&&(T=n._.includes(r,"+")?r.indexOf("+"):e<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),n._.includes(r,"a")&&(p=r.match(/a(k|m|b|t)?/),p=p?p[1]:!1,n._.includes(r," a")&&(s=" "),r=r.replace(new RegExp(s+"a[kmbt]?"),""),F>=f&&!p||p==="t"?(s+=i.abbreviations.trillion,e=e/f):F<f&&F>=u&&!p||p==="b"?(s+=i.abbreviations.billion,e=e/u):F<u&&F>=h&&!p||p==="m"?(s+=i.abbreviations.million,e=e/h):(F<h&&F>=w&&!p||p==="k")&&(s+=i.abbreviations.thousand,e=e/w)),n._.includes(r,"[.]")&&(o=!0,r=r.replace("[.]",".")),m=e.toString().split(".")[0],g=r.split(".")[1],$=r.indexOf(","),a=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,g?(n._.includes(g,"[")?(g=g.replace("]",""),g=g.split("["),d=n._.toFixed(e,g[0].length+g[1].length,l,g[1].length)):d=n._.toFixed(e,g.length,l),m=d.split(".")[0],n._.includes(d,".")?d=i.delimiters.decimal+d.split(".")[1]:d="",o&&Number(d.slice(1))===0&&(d="")):m=n._.toFixed(e,0,l),s&&!p&&Number(m)>=1e3&&s!==i.abbreviations.trillion)switch(m=String(Number(m)/1e3),s){case i.abbreviations.thousand:s=i.abbreviations.million;break;case i.abbreviations.million:s=i.abbreviations.billion;break;case i.abbreviations.billion:s=i.abbreviations.trillion;break}if(n._.includes(m,"-")&&(m=m.slice(1),B=!0),m.length<a)for(var k=a-m.length;k>0;k--)m="0"+m;return $>-1&&(m=m.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+i.delimiters.thousands)),r.indexOf(".")===0&&(m=""),x=m+d+(s||""),t?x=(t&&B?"(":"")+x+(t&&B?")":""):T>=0?x=T===0?(B?"-":"+")+x:x+(B?"-":"+"):B&&(x="-"+x),x},stringToNumber:function(e){var r=N[c.currentLocale],l=e,i={thousand:3,million:6,billion:9,trillion:12},t,o,a;if(c.zeroFormat&&e===c.zeroFormat)o=0;else if(c.nullFormat&&e===c.nullFormat||!e.replace(/[^0-9]+/g,"").length)o=null;else{o=1,r.delimiters.decimal!=="."&&(e=e.replace(/\./g,"").replace(r.delimiters.decimal,"."));for(t in i)if(a=new RegExp("[^a-zA-Z]"+r.abbreviations[t]+"(?:\\)|(\\"+r.currency.symbol+")?(?:\\))?)?$"),l.match(a)){o*=Math.pow(10,i[t]);break}o*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),o*=Number(e)}return o},isNaN:function(e){return typeof e=="number"&&isNaN(e)},includes:function(e,r){return e.indexOf(r)!==-1},insert:function(e,r,l){return e.slice(0,l)+r+e.slice(l)},reduce:function(e,r){if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof r!="function")throw new TypeError(r+" is not a function");var l=Object(e),i=l.length>>>0,t=0,o;if(arguments.length===3)o=arguments[2];else{for(;t<i&&!(t in l);)t++;if(t>=i)throw new TypeError("Reduce of empty array with no initial value");o=l[t++]}for(;t<i;t++)t in l&&(o=r(o,l[t],t,l));return o},multiplier:function(e){var r=e.toString().split(".");return r.length<2?1:Math.pow(10,r[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(r,l){var i=b.multiplier(l);return r>i?r:i},1)},toFixed:function(e,r,l,i){var t=e.toString().split("."),o=r-(i||0),a,s,f,u;return t.length===2?a=Math.min(Math.max(t[1].length,o),r):a=o,f=Math.pow(10,a),u=(l(e+"e+"+a)/f).toFixed(a),i>r-a&&(s=new RegExp("\\.?0{1,"+(i-(r-a))+"}$"),u=u.replace(s,"")),u}},n.options=c,n.formats=_,n.locales=N,n.locale=function(e){return e&&(c.currentLocale=e.toLowerCase()),c.currentLocale},n.localeData=function(e){if(!e)return N[c.currentLocale];if(e=e.toLowerCase(),!N[e])throw new Error("Unknown locale : "+e);return N[e]},n.reset=function(){for(var e in y)c[e]=y[e]},n.zeroFormat=function(e){c.zeroFormat=typeof e=="string"?e:null},n.nullFormat=function(e){c.nullFormat=typeof e=="string"?e:null},n.defaultFormat=function(e){c.defaultFormat=typeof e=="string"?e:"0.0"},n.register=function(e,r,l){if(r=r.toLowerCase(),this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=l,l},n.validate=function(e,r){var l,i,t,o,a,s,f,u;if(typeof e!="string"&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),e=e.trim(),e.match(/^\d+$/))return!0;if(e==="")return!1;try{f=n.localeData(r)}catch{f=n.localeData(n.locale())}return t=f.currency.symbol,a=f.abbreviations,l=f.delimiters.decimal,f.delimiters.thousands==="."?i="\\.":i=f.delimiters.thousands,u=e.match(/^[^\d]+/),u!==null&&(e=e.substr(1),u[0]!==t)||(u=e.match(/[^\d]+$/),u!==null&&(e=e.slice(0,-1),u[0]!==a.thousand&&u[0]!==a.million&&u[0]!==a.billion&&u[0]!==a.trillion))?!1:(s=new RegExp(i+"{2}"),e.match(/[^\d.,]/g)?!1:(o=e.split(l),o.length>2?!1:o.length<2?!!o[0].match(/^\d+.*\d$/)&&!o[0].match(s):o[0].length===1?!!o[0].match(/^\d+$/)&&!o[0].match(s)&&!!o[1].match(/^\d+$/):!!o[0].match(/^\d+.*\d$/)&&!o[0].match(s)&&!!o[1].match(/^\d+$/)))},n.fn=M.prototype={clone:function(){return n(this)},format:function(e,r){var l=this._value,i=e||c.defaultFormat,t,o,a;if(r=r||Math.round,l===0&&c.zeroFormat!==null)o=c.zeroFormat;else if(l===null&&c.nullFormat!==null)o=c.nullFormat;else{for(t in _)if(i.match(_[t].regexps.format)){a=_[t].format;break}a=a||n._.numberToFormat,o=a(l,i,r)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=b.correctionFactor.call(null,this._value,e);function l(i,t,o,a){return i+Math.round(r*t)}return this._value=b.reduce([this._value,e],l,0)/r,this},subtract:function(e){var r=b.correctionFactor.call(null,this._value,e);function l(i,t,o,a){return i-Math.round(r*t)}return this._value=b.reduce([e],l,Math.round(this._value*r))/r,this},multiply:function(e){function r(l,i,t,o){var a=b.correctionFactor(l,i);return Math.round(l*a)*Math.round(i*a)/Math.round(a*a)}return this._value=b.reduce([this._value,e],r,1),this},divide:function(e){function r(l,i,t,o){var a=b.correctionFactor(l,i);return Math.round(l*a)/Math.round(i*a)}return this._value=b.reduce([this._value,e],r),this},difference:function(e){return Math.abs(n(this._value).subtract(e).value())}},n.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var r=e%10;return~~(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th"},currency:{symbol:"$"}}),function(){n.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,r,l){var i=n._.includes(r," BPS")?" ":"",t;return e=e*1e4,r=r.replace(/\s?BPS/,""),t=n._.numberToFormat(e,r,l),n._.includes(t,")")?(t=t.split(""),t.splice(-1,0,i+"BPS"),t=t.join("")):t=t+i+"BPS",t},unformat:function(e){return+(n._.stringToNumber(e)*1e-4).toFixed(15)}})}(),function(){var e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},l=e.suffixes.concat(r.suffixes.filter(function(t){return e.suffixes.indexOf(t)<0})),i=l.join("|");i="("+i.replace("B","B(?!PS)")+")",n.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(i)},format:function(t,o,a){var s,f=n._.includes(o,"ib")?r:e,u=n._.includes(o," b")||n._.includes(o," ib")?" ":"",h,w,d;for(o=o.replace(/\s?i?b/,""),h=0;h<=f.suffixes.length;h++)if(w=Math.pow(f.base,h),d=Math.pow(f.base,h+1),t===null||t===0||t>=w&&t<d){u+=f.suffixes[h],w>0&&(t=t/w);break}return s=n._.numberToFormat(t,o,a),s+u},unformat:function(t){var o=n._.stringToNumber(t),a,s;if(o){for(a=e.suffixes.length-1;a>=0;a--){if(n._.includes(t,e.suffixes[a])){s=Math.pow(e.base,a);break}if(n._.includes(t,r.suffixes[a])){s=Math.pow(r.base,a);break}}o*=s||1}return o}})}(),function(){n.register("format","currency",{regexps:{format:/(\$)/},format:function(e,r,l){var i=n.locales[n.options.currentLocale],t={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]},o,a,s;for(r=r.replace(/\s?\$\s?/,""),o=n._.numberToFormat(e,r,l),e>=0?(t.before=t.before.replace(/[\-\(]/,""),t.after=t.after.replace(/[\-\)]/,"")):e<0&&!n._.includes(t.before,"-")&&!n._.includes(t.before,"(")&&(t.before="-"+t.before),s=0;s<t.before.length;s++)switch(a=t.before[s],a){case"$":o=n._.insert(o,i.currency.symbol,s);break;case" ":o=n._.insert(o," ",s+i.currency.symbol.length-1);break}for(s=t.after.length-1;s>=0;s--)switch(a=t.after[s],a){case"$":o=s===t.after.length-1?o+i.currency.symbol:n._.insert(o,i.currency.symbol,-(t.after.length-(1+s)));break;case" ":o=s===t.after.length-1?o+" ":n._.insert(o," ",-(t.after.length-(1+s)+i.currency.symbol.length-1));break}return o}})}(),function(){n.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,r,l){var i,t=typeof e=="number"&&!n._.isNaN(e)?e.toExponential():"0e+0",o=t.split("e");return r=r.replace(/e[\+|\-]{1}0/,""),i=n._.numberToFormat(Number(o[0]),r,l),i+"e"+o[1]},unformat:function(e){var r=n._.includes(e,"e+")?e.split("e+"):e.split("e-"),l=Number(r[0]),i=Number(r[1]);i=n._.includes(e,"e-")?i*=-1:i;function t(o,a,s,f){var u=n._.correctionFactor(o,a),h=o*u*(a*u)/(u*u);return h}return n._.reduce([l,Math.pow(10,i)],t,1)}})}(),function(){n.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,r,l){var i=n.locales[n.options.currentLocale],t,o=n._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),o+=i.ordinal(e),t=n._.numberToFormat(e,r,l),t+o}})}(),function(){n.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,r,l){var i=n._.includes(r," %")?" ":"",t;return n.options.scalePercentBy100&&(e=e*100),r=r.replace(/\s?\%/,""),t=n._.numberToFormat(e,r,l),n._.includes(t,")")?(t=t.split(""),t.splice(-1,0,i+"%"),t=t.join("")):t=t+i+"%",t},unformat:function(e){var r=n._.stringToNumber(e);return n.options.scalePercentBy100?r*.01:r}})}(),function(){n.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,r,l){var i=Math.floor(e/60/60),t=Math.floor((e-i*60*60)/60),o=Math.round(e-i*60*60-t*60);return i+":"+(t<10?"0"+t:t)+":"+(o<10?"0"+o:o)},unformat:function(e){var r=e.split(":"),l=0;return r.length===3?(l=l+Number(r[0])*60*60,l=l+Number(r[1])*60,l=l+Number(r[2])):r.length===2&&(l=l+Number(r[0])*60,l=l+Number(r[1])),Number(l)}})}(),n})})(E);var L=E.exports;const z=O(L),j=(v,n="0a")=>z(v).format(n).toUpperCase();export{j as f};
