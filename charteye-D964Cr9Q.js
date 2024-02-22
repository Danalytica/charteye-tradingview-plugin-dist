/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=(t,...e)=>({strTag:!0,strings:t,values:e}),e=(t,e,i)=>{let s=t[0];for(let r=1;r<t.length;r++)s+=e[i?i[r-1]:r-1],s+=t[r];return s},i=t=>{return"string"!=typeof(i=t)&&"strTag"in i?e(t.strings,t.values):t;var i},s="lit-localize-status";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class r{constructor(){this.settled=!1,this.promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e}))}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}
/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const a=[];for(let t=0;t<256;t++)a[t]=(t>>4&15).toString(16)+(15&t).toString(16);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n="",o="h",h="s";function l(t,e){return(e?o:h)+function(t){let e=0,i=8997,s=0,r=33826,n=0,o=40164,h=0,l=52210;for(let a=0;a<t.length;a++)i^=t.charCodeAt(a),e=435*i,s=435*r,n=435*o,h=435*l,n+=i<<8,h+=r<<8,s+=e>>>16,i=65535&e,n+=s>>>16,r=65535&s,l=h+(n>>>16)&65535,o=65535&n;return a[l>>8]+a[255&l]+a[o>>8]+a[255&o]+a[r>>8]+a[255&r]+a[i>>8]+a[255&i]}("string"==typeof t?t:t.join(n))}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=new WeakMap,c=new Map;function u(t,s,r){if(t){const i=r?.id??function(t){const e="string"==typeof t?t:t.strings;let i=c.get(e);void 0===i&&(i=l(e,"string"!=typeof t&&!("strTag"in t)),c.set(e,i));return i}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(s),a=t[i];if(a){if("string"==typeof a)return a;if("strTag"in a)return e(a.strings,s.values,a.values);{let t=d.get(a);return void 0===t&&(t=a.values,d.set(a,t)),{...a,values:t.map((t=>s.values[t]))}}}}return i(s)}function C(t){window.dispatchEvent(new CustomEvent(s,{detail:t}))}let p,g,f,y,w,m="",L=new r;L.resolve();let v=0;const E=()=>m,F=t=>{if(t===(p??m))return L.promise;if(!f||!y)throw new Error("Internal error");if(!f.has(t))throw new Error("Invalid locale code");v++;const e=v;p=t,L.settled&&(L=new r),C({status:"loading",loadingLocale:t});return(t===g?Promise.resolve({templates:void 0}):y(t)).then((i=>{v===e&&(m=t,p=void 0,w=i.templates,C({status:"ready",readyLocale:t}),L.resolve())}),(i=>{v===e&&(C({status:"error",errorLocale:t,errorMessage:i.toString()}),L.reject(i))})),L.promise};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let b=i,k=!1;const A=["ar","ca_ES","de","es","fr","he_IL","id_ID","it","ja","ko","ms_MY","pl","pt","ru","sv","th","tr","vi","zh","zh_TW"],{setLocale:D}=(T={sourceLocale:"en",targetLocales:A,loadLocale:t=>import(`./generated/locales/${t}.js`)},function(t){if(k)throw new Error("lit-localize can only be configured once");b=t,k=!0}(((t,e)=>u(w,t,e))),m=g=T.sourceLocale,f=new Set(T.targetLocales),f.add(T.sourceLocale),y=T.loadLocale,{getLocale:E,setLocale:F});var T;class I{constructor(t,e){if(!t)throw new Error("TradingView widget instance is required");if(!t._iFrame)throw new Error("TradingView iframe is required");if(!e?.apiKey)throw new Error("ChartEye API key is required");this._tvWidget=t,this._isolated=void 0===e.isolated||e.isolated,this._iframe=null,this._iframeDocument=null,this._options=e,this._host=document.location.origin,this._apiHost=e.apiHost||"https://api.chartai.tech",this._apiKey=e.apiKey,this._tier=null,this._version="1.0.0",this._abortController=null,this._charteyeDrawer=null,this._isValidHost=!1,this._screenshotData=null,this._locale=this.tvWidget._options.locale||"en",this.log("ChartEye plugin initialized with widget %O and options %O:",t,e)}get isolated(){return this._isolated}get apiHost(){return this._apiHost}get host(){return this._host}get locale(){return this._locale}set screenshotData(t){this._screenshotData=t}get screenshotData(){return this._screenshotData}set abortController(t){this._abortController=t}get abortController(){return this._abortController}set tier(t){this._tier=t}get tier(){return this._tier}set isValidHost(t){this._isValidHost=t}get isValidHost(){return this._isValidHost}get charteyeDrawer(){return this._charteyeDrawer}set charteyeDrawer(t){this._charteyeDrawer=t}get version(){return this._version}get apiKey(){return this._apiKey}get options(){return this._options}get tvWidget(){return this._tvWidget}get iframe(){return this._iframe}set iframe(t){this._iframe=t}set iframeDoc(t){this._iframeDocument=t}get iframeDoc(){return this._iframeDocument}log(t,...e){const i=new Date,s=(i.getHours()<10?"0":"")+i.getHours()+":"+((i.getMinutes()<10?"0":"")+i.getMinutes())+":"+((i.getSeconds()<10?"0":"")+i.getSeconds());return this.options.debug?console.log(`[${s}] - ${t}`,...e):null}getDropdownItems(){return[{title:b("Generate TA"),onSelect:this.startAnalysis.bind(this)},{title:b("About ChartEye"),onSelect:()=>this.tvWidget.showNoticeDialog({title:b("About ChartEye"),body:b("ChartEye is an AI powered technical analysis tool that helps you make better trading decisions. ChartEye is powered by ChartAI and a product of Danalytica LLC.")})}]}createDropdown(){const t=this.tvWidget;this.log("Creating ChartEye dropdown in TradingView UI"),t.createDropdown({title:this.options?.button?.iconOnly?"":"ChartEye",align:this.options?.button?.align||"right",tooltip:b("ChartEye - AI Powered Technical Analysis"),items:this.getDropdownItems(),icon:'<svg width="28px" height="28px" viewBox="0 0 371 371"><defs><path d="M157.307152,0 C90.9176026,0 32.6273427,34.9934272 -7.69351212e-15,87.5986605 C30.1702549,50.860112 74.3871294,30.6092117 119.770987,30.6092117 C145.856802,30.6092117 172.322689,37.3006274 196.72762,51.4007784 C244.589978,79.0336484 273.866259,129.899114 273.898378,184.998907 L273.898378,184.998907 L273.898378,184.998907 C273.925144,249.391738 221.699983,301.58478 157.307152,301.58478 C121.837296,301.58478 90.0664546,285.712742 68.6646308,260.70826 C81.3087298,281.826368 99.2631362,299.780774 121.360867,312.521229 C145.134129,326.252014 170.186789,332.48306 194.559601,332.48306 C271.607238,332.48306 341.754686,270.140479 342.306059,185.122029 C342.311412,184.725897 342.311412,184.329765 342.311412,183.933633 C342.311412,82.9949665 258.074519,0 157.307152,0" id="path-1"></path><linearGradient x1="81.5620795%" y1="17.5325954%" x2="81.5620795%" y2="130.759793%" id="linearGradient-3"><stop stop-color="#7F3BFF" offset="0%"></stop><stop stop-color="#6504FF" offset="100%"></stop></linearGradient><path d="M147.692926,2.27980315e-15 C70.934359,2.27980315e-15 0.802969877,61.5342651 0.010706265,145.878221 C0.00535313251,146.477771 0,147.077322 0,147.682226 C0.0374719276,249.627282 82.8397257,332.483067 185.009613,332.483067 C251.399162,332.483067 309.689422,297.48964 342.316765,244.884406 C331.187602,258.417125 317.654883,270.177958 302.071915,279.567352 C276.473235,294.99508 249.273969,301.991624 222.824141,301.991624 C142.714513,301.991624 69.4729538,237.791506 68.4505055,149.100806 C68.4451523,148.656496 68.4451523,148.212186 68.4451523,147.767876 C68.4076804,83.3161613 120.333066,30.8982877 185.009613,30.8982877 C220.479469,30.8982877 252.282429,46.7382068 273.652134,71.7748076 C261.008035,50.6566998 243.048276,32.7022934 220.955898,19.9297192 C197.204049,6.2257 172.11927,-0.0053462447 147.692926,2.27980315e-15" id="path-4"></path><linearGradient x1="73.1748873%" y1="124.510386%" x2="73.1748873%" y2="14.4578151%" id="linearGradient-6"><stop stop-color="#803FFF" offset="0%"></stop><stop stop-color="#6505FF" offset="100%"></stop></linearGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="charteye" transform="translate(0.7861, 0.9637)"><g id="Group" transform="translate(-0, 0)"><g id="g12" transform="translate(185.007, 185) scale(-1, 1) rotate(-180) translate(-185.007, -185)translate(0, 0)"><g id="g246" transform="translate(27.6991, 0)" fill="#4C12A8" fill-rule="nonzero"><path d="M9.25862027e-15,87.5979536 C32.6308094,34.9932072 90.917441,0 157.307188,0 C258.468762,0 342.969215,83.6470783 342.308108,185.121011 C341.580283,297.03013 220.282224,369.642779 121.358711,312.520667 C99.2631647,299.783734 81.3101543,281.824658 68.6641994,260.70561 C90.0683121,285.712456 121.837862,301.5851 157.307188,301.5851 C221.701482,301.5851 273.922908,249.387936 273.898647,184.993641 C273.868321,129.895489 244.591571,79.0332759 196.724963,51.4001965 C129.868195,12.7721112 47.5148254,29.7468038 9.25862027e-15,87.5979536" id="path248"></path></g><g id="g258" transform="translate(0.0037, 37.5096)" fill="#4C12A8" fill-rule="nonzero"><path d="M273.652233,71.7781353 C252.278659,46.740772 220.477513,30.9002905 185.006099,30.9002905 C119.883858,30.9002905 67.6929821,84.0437864 68.4470663,149.100635 C69.8079526,267.079467 198.944874,341.722021 302.071782,279.568986 C317.654225,270.178281 331.186502,258.419281 342.315136,244.887004 C309.689211,297.490269 251.394966,332.490381 185.006099,332.490381 C82.2326683,332.490381 -0.940464016,248.651534 0.00803253567,145.878103 C1.05078961,34.6960441 122.576174,-36.8435719 220.954707,19.9318999 C243.047018,32.7047905 261.003649,50.6590643 273.652233,71.7781353" id="path260"></path></g><g id="g264-Clipped" transform="translate(27.7025, 0.0015)"><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><g id="path-1"></g><g id="g264" mask="url(#mask-2)"><g transform="translate(-0.0004, 0.0002)" id="g270"><g transform="translate(0, -0)" id="Group" fill="url(#linearGradient-3)" fill-rule="nonzero"><path d="M157.306099,0 C90.9178703,0 32.6273931,34.993076 3.71739679e-15,87.5987619 C30.1726106,50.8600628 74.3890015,30.6090163 119.769141,30.6090163 C145.856509,30.6090163 172.325731,37.3005716 196.728088,51.400721 C244.593316,79.0336924 273.86887,129.89618 273.899176,184.996046 L273.899176,184.996046 L273.899176,184.996046 C273.923421,249.390143 221.700196,301.583061 157.306099,301.583061 C121.836007,301.583061 90.0693035,285.714862 68.6672368,260.706387 C81.310882,281.829639 99.2641308,299.782888 121.363234,312.523512 C145.135227,326.25211 170.186131,332.483015 194.558181,332.483015 C271.608046,332.483015 341.754213,270.143662 342.305782,185.123331 C342.311843,184.729353 342.311843,184.329315 342.311843,183.935337 C342.311843,82.994681 258.073405,0 157.306099,0" id="path278"></path></g></g></g></g><path d="M71.9296114,185.002194 C71.9296114,122.534263 122.544653,71.889996 185.012584,71.889996 C247.474896,71.889996 298.123658,122.534263 298.123658,185.002194 C298.123658,247.464505 247.474896,298.079547 185.012584,298.079547 C123.050466,298.079547 72.7220521,248.256946 71.9296114,186.452192 C71.9296114,185.980099 71.9296114,185.474286 71.9296114,185.002194" id="path252" fill="#FFFFFF" fill-rule="nonzero"></path><path d="M185.000503,113.921935 C145.763234,113.921935 113.9344,145.711571 113.9344,184.988038 C113.9344,224.225307 145.763234,256.047607 185.000503,256.047607 C185.000503,232.946878 204.005034,216.862602 224.348833,216.862602 C231.352222,216.862602 238.512402,218.770242 245.110744,222.951369 C252.669439,210.982892 256.118869,198.00833 256.118869,185.314688 C256.112336,148.403172 226.942439,113.921935 185.000503,113.921935" id="path280" fill="#6505FF" fill-rule="nonzero"></path><g id="chartai" transform="translate(185.0641, 178.6255) scale(-1, 1) rotate(-180) translate(-185.0641, -178.6255)translate(138.1066, 134.6973)" fill="#FFFFFF" fill-rule="nonzero"><path d="M60.2694553,22.0281805 L60.2694553,86.1620576 C56.1563179,87.3723976 51.5570275,87.8565336 46.9557198,87.8565336 C42.4486442,87.8427276 37.966232,87.1907406 33.6419844,85.9199906 L33.6419844,22.0281805 L44.5350407,22.0281805 L44.5350407,-1.42108547e-14 L49.1323139,-1.42108547e-14 L49.1323139,22.0281805 L60.2694553,22.0281805 Z" id="Path"></path><path d="M26.6280665,52.5247036 L26.6280665,83.5073796 C21.430061,81.4243976 16.6680307,78.3865506 12.5881272,74.5508666 C8.61628726,70.9746526 5.22509836,66.8021906 2.53625696,62.1832136 C0.859464761,59.2414545 -0.0149485385,55.9107539 -7.10542736e-15,52.5247036 L10.8936518,52.5247036 L10.8936518,30.2564725 L15.4929423,30.2564725 L15.4929423,52.5247036 L26.6280665,52.5247036 Z" id="Path"></path><path d="M93.9148788,52.5247036 C93.9148788,56.00443 93.1200888,59.4760873 91.3711478,62.4857986 C89.1988048,66.1886736 86.5542358,69.5933866 83.5039408,72.6143236 C83.2618728,73.0984596 82.5356688,73.5825956 82.2936018,73.8246636 C77.9363788,77.9398176 72.8536248,81.3287686 67.0453398,83.9915156 L67.0453398,52.5226864 L78.1824808,52.5226864 L78.1824808,31.4668121 L82.7817718,31.4668121 L82.7817718,52.5247036 L93.9148788,52.5247036 Z" id="Path"></path></g><g id="g284-Clipped" transform="translate(0, 37.5109)"><mask id="mask-5" fill="white"><use xlink:href="#path-4"></use></mask><g id="path-4"></g><g id="g284" mask="url(#mask-5)"><g transform="translate(0, 0.001)" id="g290"><g transform="translate(0, -0)" id="Group" fill="url(#linearGradient-6)" fill-rule="nonzero"><path d="M147.694463,-1.11081688e-14 C70.9369377,-1.11081688e-14 0.807105761,61.5321004 0.0117825659,145.87583 C0.00589128293,146.476741 2.6056346e-15,147.077652 2.6056346e-15,147.678563 C0.0412389805,249.627214 82.8432205,332.488108 185.009849,332.488108 C251.398716,332.488108 309.692961,297.487996 342.318886,244.884731 C331.190252,258.417008 317.657975,270.176009 302.075532,279.566714 C276.477908,294.995984 249.277854,301.994828 222.825994,301.994828 C142.716329,301.994828 69.4758996,237.791627 68.4508163,149.098362 C68.444925,148.656516 68.444925,148.208778 68.444925,147.766932 C68.4095773,83.3174756 120.335345,30.8980183 185.009849,30.8980183 C220.481264,30.8980183 252.282409,46.7384999 273.655983,71.7758632 C261.007399,50.6567922 243.050768,32.7025183 220.958457,19.9296278 C197.204805,6.22591456 172.119722,-0.00529539746 147.694463,-1.11081688e-14" id="path298"></path></g></g></g></g></g></g></g></g></svg>'})}async startAnalysis(){const{valid:t}=await this.validateApiKey();if(this.isValidHost=t,this.charteyeDrawer?.open)return this.tvWidget.showNoticeDialog({title:b("ChartEye Drawer Open"),body:b("The ChartEye drawer is already open.")});if(!this.isValidHost)return this.tvWidget.showNoticeDialog({title:b("Invalid Host"),body:b("ChartEye is not available on this host. Please contact support for more information: team@chartai.tech")});if(this.charteyeDrawer.dispatch("drawer:open"),this.options?.slug)return this.fetch(`/charteye/analysis/${this.options.slug}`,null,"GET").then((t=>{if(200!==t?.code)return this.charteyeDrawer.dispatch("request:error",t);this.charteyeDrawer.dispatch("analysis:ready",t)})).catch((t=>this.charteyeDrawer.dispatch("request:error",t)));this.charteyeDrawer.dispatch("analysis:start");let e="";const i=await this.fetchAnalysis();if(!i||i?.error||200!==i?.status)return this.charteyeDrawer.dispatch("request:error",i);const s=i.body?.getReader(),r=new TextDecoder;for(;;){const{done:t,value:i}=await s.read();if(t){this.populateAnalysis(e).then((t=>{this.charteyeDrawer.dispatch("analysis:ready",t)}));break}e+=r.decode(i),this.charteyeDrawer.dispatch("analysis:render",e)}}async fetch(t,e,i="POST"){this.abortController=new AbortController;const s=this.abortController.signal,r={method:i,signal:s,mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${this.apiKey}`}};s.addEventListener("abort",(({target:e})=>{this.log("XHR request to %s aborted, reason:",t,e?.reason)})),e&&(r.body=JSON.stringify(e));const a=await fetch(`${this.apiHost}${t}`,r).catch((e=>{this.log("XHR request to %s failed, reason:",t,e)}));return e?.stream&&a?a:a?a.json():Promise.resolve({})}async fetchAnalysis(){return this.isValidHost?(this.screenshotData=await this.getScreenshotAsDataURL(),this.fetch("/charteye/analyze/stream",{url:this.screenshotData,locale:this.locale,stream:!0})):Promise.reject(new Error("Invalid host"))}async populateAnalysis(t){return this.isValidHost?(this.screenshotData||(this.screenshotData=await this.getScreenshotAsDataURL()),this.fetch("/charteye/analysis/populate",{analysis:t,url:this.screenshotData,chartUrl:document.location.href,platform:"tradingview",locale:this.locale})):Promise.reject(new Error("Invalid host"))}async improveAnalysis(t){return this.screenshotData||(this.screenshotData=await this.getScreenshotAsDataURL()),this.fetch("/charteye/analysis/improve",{prompt:t,url:this.screenshotData,analysis:this.charteyeDrawer.data.analysis,stream:!0})}async getScreenshotAsDataURL(){this.log("Taking a screenshot of the chart and returning it as a data URL");return(await this.tvWidget.takeClientScreenshot()).toDataURL()}async addScript(t,e=document,i={}){return new Promise(((s,r)=>{const a=e.createElement("script");this.log("Adding script to the document: %s",t),a.setAttribute("src",t),Object.keys(i).length?Object.keys(i).forEach((t=>{a.setAttribute(t,i[t])})):a.type="module",a.addEventListener("load",s),a.addEventListener("error",r),e.body.appendChild(a)}))}async insertWebComponent(){this.iframe=this.tvWidget._iFrame,this.iframeDoc=this.iframe.contentDocument;return(this.isolated?this.addScript(`${this.options.path}/charteye-drawer.js`,this.iframeDoc):import("./charteye-drawer.js")).then((()=>{this.log("ChartEye Drawer loaded. Setting props, locale and other options."),this.charteyeDrawer=(this.isolated?this.iframeDoc:document).querySelector("charteye-drawer"),this.charteyeDrawer.plugin=this,this.charteyeDrawer.debug=this.options.debug,this.charteyeDrawer.tooltips=void 0===this.options.tooltips||this.options.tooltips,this.charteyeDrawer.resizable=this.options.resizable,this.charteyeDrawer.theme=this.tvWidget._options.theme,this.charteyeDrawer.data={symbol:this.tvWidget.activeChart().symbol(),interval:this.tvWidget.activeChart().resolution()},this.charteyeDrawer.setAttributes(),this.charteyeDrawer.setLocale(this.locale),this.options.width&&this.charteyeDrawer.setDrawerWidth(this.options.width),["ar","he_IL"].includes(this.locale)&&(this.log("Setting ChartEye Drawer direction to rtl: %s",this.locale),this.charteyeDrawer.setAttribute("dir","rtl"))})).catch((t=>{console.error("Failed to load ChartEye Drawer",t)}))}async validateApiKey(){return this.log("Validating ChartEye API Key: %s for host %s:",this.apiKey,this.host),this.fetch("/charteye/plugin/validate",{host:this.host,apiKey:this.apiKey})}init(){this.validateApiKey().then(this.render.bind(this)).catch(console.error)}setEvents(){this.log("Setting ChartEye plugin events"),this.tvWidget.activeChart().onSymbolChanged().subscribe(null,(()=>{this.log("The symbol is changed"),this.charteyeDrawer.dispatch("drawer:close")}))}async render({valid:t,tier:e}){const i=this,s=this.tvWidget;this.locale&&(this.log("Setting locale:",this.locale),await D(this.locale)),this.isValidHost=t,this.tier=e,s.onChartReady((()=>{this.isValidHost&&(this.log("Host validated. Inserting ChartEye web component (isolated: %s)",this.isolated?"yes":"no"),i.insertWebComponent()),i.setEvents(),s.headerReady().then((()=>this.createDropdown()))}))}}window.ChartEye=I;export{I as C,s as L,D as a,b as m,t as s};
