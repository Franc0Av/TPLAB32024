(function(){"use strict";var e={7658:function(e,t,n){var a=n(5130),o=n(1387),s=n(6768),l=n.p+"img/bitcoin.1e7c124e.svg";const i={class:"home"},r={class:"texto"};function c(e,t,n,a,o,c){return(0,s.uX)(),(0,s.CE)("section",i,[t[3]||(t[3]=(0,s.Lk)("div",null,[(0,s.Lk)("img",{src:l,alt:""})],-1)),(0,s.Lk)("div",r,[t[1]||(t[1]=(0,s.Lk)("div",null,[(0,s.Lk)("h1",null,"¡Bienvenido a XchangeX!")],-1)),t[2]||(t[2]=(0,s.Lk)("div",null,[(0,s.Lk)("p",{class:"fs-4"}," En XchangeX, te ofrecemos una plataforma segura, rápida e intuitiva para intercambiar tus criptomonedas favoritas. Nuestra misión es brindarte una experiencia de usuario excepcional mientras navegas en el emocionante mundo de las criptomonedas. ")],-1)),(0,s.Lk)("div",{onClick:t[0]||(t[0]=(...e)=>a.tradingMod&&a.tradingMod(...e)),class:"transactionRedirect fs-1"}," Modo Trading ")])])}n(4114);var u={name:"HomeView",setup(){const e=(0,o.rd)(),t=()=>{e.push({name:"Transactions"})};return{tradingMod:t}}},d=n(1241);const p=(0,d.A)(u,[["render",c],["__scopeId","data-v-4385c14e"]]);var m=p,b=n.p+"img/avatar.48090e58.svg",y=n.p+"img/femaleavatar.75699164.svg";const g={class:"login"},v={style:{color:"#dc3545",height:"20px"}},f={key:0};function h(e,t,n,o,l,i){const r=(0,s.g2)("InputComponent"),c=(0,s.g2)("ButtonComponent");return(0,s.uX)(),(0,s.CE)("form",{onSubmit:t[0]||(t[0]=(0,a.D$)(((...e)=>o.handleLogin&&o.handleLogin(...e)),["prevent"])),id:"login-box",class:"d-flex align-items-center justify-content-center"},[(0,s.Lk)("div",g,[t[1]||(t[1]=(0,s.Lk)("div",null,[(0,s.Lk)("div",{class:"avatar-login"},[(0,s.Lk)("div",null,[(0,s.Lk)("img",{id:"imgAvatar",src:b,alt:"avatar"})]),(0,s.Lk)("div",null,[(0,s.Lk)("img",{id:"imgAvatar",src:y,alt:"avatar"})])])],-1)),(0,s.Lk)("div",null,[(0,s.bF)(r,{onValidityChanged:o.setUserValidity},null,8,["onValidityChanged"])]),(0,s.Lk)("div",v,[!1===o.isUserValid?((0,s.uX)(),(0,s.CE)("small",f,"El usuario debe ser alfanumérico y contener al menos 5 caracteres.")):(0,s.Q3)("",!0)]),(0,s.bF)(c,{onClick:o.handleLogin,id:"btn-custom","btn-class":"btn btn-lg",text:"Ingresar",disabled:!o.isUserValid},null,8,["onClick","disabled"])])],32)}var k=n(4232);const C={class:"d-flex justify-content-center w-full"},L={class:"d-flex flex-row align-items-center gap-2"};function w(e,t,n,o,l,i){return(0,s.uX)(),(0,s.CE)("div",C,[(0,s.Lk)("div",L,[t[1]||(t[1]=(0,s.Lk)("div",null,[(0,s.Lk)("i",{class:"bi bi-person-fill-lock fs-1"}),(0,s.Lk)("label",{for:"validationServer03",class:"form-label"})],-1)),(0,s.Lk)("div",null,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.userInput=e),class:(0,k.C4)(o.inputClass),id:"validationServer03","aria-describedby":"validationServer03Feedback",required:""},null,2),[[a.Jo,o.userInput]])])])])}var T=n(144),x=n(5234);const B=(0,x.nY)("auth",{state:()=>({user:null,isUserValid:null,isUserLogged:null}),actions:{setUsername(e){this.user=e},setIsUserLogged(){this.isUserLogged=!0}},getters:{getIsUserLogged:e=>e.isUserLogged}});function _(){const e=(0,T.KR)(""),t=(0,T.KR)(null),n=B(),a=(0,s.EW)((()=>null===t.value?"form-control":t.value?"form-control is-valid":"form-control is-invalid"));return(0,s.wB)(e,(a=>{if(""===a)t.value=null;else{const e=/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9._]+$/;t.value=e.test(a)&&a.length>=5}t.value&&n.setUsername(e.value)})),{userInput:e,inputClass:a,isValid:t}}var A={name:"InputComponent",setup(e,{emit:t}){const{userInput:n,inputClass:a,isValid:o}=_();return(0,s.wB)(o,(e=>{t("validityChanged",e)})),{userInput:n,inputClass:a,isValid:o}}};const E=(0,d.A)(A,[["render",w]]);var S=E;const V=["disabled"],U={key:0,class:"spinner-grow spinner-grow-sm","aria-hidden":"true"};function F(e,t,n,a,o,l){return(0,s.uX)(),(0,s.CE)("button",{onClick:t[0]||(t[0]=(...e)=>a.handleClick&&a.handleClick(...e)),class:(0,k.C4)(n.btnClass),type:"submit",disabled:a.isLoading||n.disabled},[a.isLoading?((0,s.uX)(),(0,s.CE)("span",U)):(0,s.Q3)("",!0),(0,s.eW)(" "+(0,k.v_)(n.text),1)],10,V)}var M={name:"BtnComponent",props:{text:String,btnClass:String,onClick:{type:Function,required:!1},disabled:{type:Boolean,default:!1,required:!1}},emits:["click"],setup(e,{emit:t}){const n=(0,T.KR)(!1),a=async()=>{if(!n.value&&!e.disabled){n.value=!0;try{t("click"),await new Promise((e=>setTimeout(e,1e3)))}catch(a){console.error("Error durante el clic:",a)}finally{n.value=!1}}};return{isLoading:n,handleClick:a}}};const X=(0,d.A)(M,[["render",F]]);var I=X,R={name:"LoginView",components:{InputComponent:S,ButtonComponent:I},setup(){const e=B(),t=(0,o.rd)(),{isUserLogged:n}=(0,x.bP)(e),a=(0,T.KR)(null),s=e=>{a.value=e},l=()=>{a.value&&setTimeout((()=>{e.isUserLogged=!0,t.push({name:"Home"})}),1500)};return{isUserValid:a,isUserLogged:n,setUserValidity:s,handleLogin:l}}};const j=(0,d.A)(R,[["render",h],["__scopeId","data-v-43684c56"]]);var W=j,D=n.p+"img/nakamoto.b691c93f.svg";const O={key:0,id:"welcomeView",class:"d-flex justify-content-between align-items-center mt-5 h-100"},K={class:"transactionText"},P={key:1,class:"transactions-box"},$={class:"d-flex justify-content-center align-items-center mb-5"},Q={class:"toogleBox"};function H(e,t,n,a,o,l){const i=(0,s.g2)("ButtonComponent"),r=(0,s.g2)("FormComponent");return(0,s.uX)(),(0,s.CE)(s.FK,null,[o.begin?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("section",O,[t[3]||(t[3]=(0,s.Lk)("div",{class:"mt-5 w-25"},[(0,s.Lk)("img",{src:D,alt:"bitcoin-graphic"})],-1)),(0,s.Lk)("div",null,[(0,s.Lk)("div",K,[t[2]||(t[2]=(0,s.Lk)("div",null,[(0,s.Lk)("h1",{id:"title1"}," En esta sección podes comenzar a invertir tu dinero. Dale click al botón y adentrate en el mundo crypto! ")],-1)),(0,s.Lk)("div",null,[(0,s.bF)(i,{onClick:l.handleBegin,text:"Empezar a tradear",id:"btn-custom","btn-class":"btn btn-lg h-100 w-50 fs-2 fw-bold"},null,8,["onClick"])])])])])),o.begin?((0,s.uX)(),(0,s.CE)("div",P,[(0,s.Lk)("div",$,[(0,s.Lk)("div",Q,[(0,s.Lk)("span",{onClick:t[0]||(t[0]=(...e)=>l.updateActions&&l.updateActions(...e)),class:(0,k.C4)(["toogle",{active:"Compra"===o.transactionType}]),id:"buyToogle","data-type":"Compra"},"Compra",2),(0,s.Lk)("span",{onClick:t[1]||(t[1]=(...e)=>l.updateActions&&l.updateActions(...e)),class:(0,k.C4)(["toogle",{active:"Venta"===o.transactionType}]),id:"sellToogle","data-type":"Venta"},"Venta",2)])]),o.purchase?((0,s.uX)(),(0,s.Wv)(r,{key:0,transactionType:o.transactionType,actionTitle:"Nueva Compra"},null,8,["transactionType"])):o.sale?((0,s.uX)(),(0,s.Wv)(r,{key:1,transactionType:o.transactionType,actionTitle:"Nueva Venta"},null,8,["transactionType"])):(0,s.Q3)("",!0)])):(0,s.Q3)("",!0)],64)}const N={class:"form-box"},Y={class:"d-flex flex-column justify-content-around align-items-center gap-5"},z={class:"d-flex align-items-center fs-3 gap-3"},q=["value"],J={key:0,class:"d-flex align-items-center fs-3"},Z={class:"d-flex align-items-center fs-3"},G={class:"d-flex align-items-center fs-3"};function ee(e,t,n,o,l,i){const r=(0,s.g2)("InputTransactionComponent"),c=(0,s.g2)("ButtonComponent"),u=(0,s.g2)("ModalComponent");return(0,s.uX)(),(0,s.CE)("section",N,[(0,s.Lk)("form",{onSubmit:t[5]||(t[5]=(0,a.D$)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"])),class:"input-box"},[(0,s.Lk)("h2",null,(0,k.v_)(n.actionTitle),1),(0,s.Lk)("div",Y,[(0,s.Lk)("div",z,[t[7]||(t[7]=(0,s.Lk)("i",{class:"bi bi-card-checklist"},null,-1)),(0,s.bo)((0,s.Lk)("select",{class:"form-select form-select-md","onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedCrypto=e),onChange:t[1]||(t[1]=(...e)=>i.handleTotals&&i.handleTotals(...e)),id:"cryptocurrency"},[t[6]||(t[6]=(0,s.Lk)("option",{value:"",disabled:""},"Selecciona una opción",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.cryptocurrencies,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.name},(0,k.v_)(e.name),9,q)))),128))],544),[[a.u1,l.selectedCrypto]])]),"Venta"==n.transactionType?((0,s.uX)(),(0,s.CE)("div",J,[t[8]||(t[8]=(0,s.Lk)("i",{class:"bi bi-coin text-warning"},null,-1)),(0,s.bF)(r,{modelValue:l.availableCoin,"onUpdate:modelValue":t[2]||(t[2]=e=>l.availableCoin=e),placeholder:"Monto disponible",readonly:""},null,8,["modelValue"])])):(0,s.Q3)("",!0),(0,s.Lk)("div",Z,[t[9]||(t[9]=(0,s.Lk)("i",{class:"bi bi-coin text-warning"},null,-1)),(0,s.bF)(r,{modelValue:l.amount,"onUpdate:modelValue":t[3]||(t[3]=e=>l.amount=e),availableAmount:l.availableCoin,placeholder:"Compra"==n.transactionType?"Monto a comprar":"Monto a vender"},null,8,["modelValue","availableAmount","placeholder"])]),(0,s.Lk)("div",G,[t[10]||(t[10]=(0,s.Lk)("i",{class:"bi bi-cash-coin text-success"},null,-1)),(0,s.bF)(r,{modelValue:l.price,"onUpdate:modelValue":t[4]||(t[4]=e=>l.price=e),placeholder:"Compra"==n.transactionType?"Monto a pagar":"Monto a recibir",readonly:""},null,8,["modelValue","placeholder"])])]),(0,s.bF)(c,{onClick:i.submitForm,text:"Compra"==n.transactionType?"Comprar":"Vender",id:"btn-custom",class:"btn btn-lg","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",disabled:null===l.price},null,8,["onClick","text","disabled"])],32),(0,s.bF)(u,{onSuccessfull:i.handleSuccess,transactionBody:l.transactionBody,cryptoSelected:l.selectedCrypto,modalTitle:"Confirmar transacción",btnText:"Confirmar"},null,8,["onSuccessfull","transactionBody","cryptoSelected"])])}const te={class:"d-flex justify-content-center w-full"},ne={class:"d-flex flex-row align-items-center gap-2"},ae=["placeholder","readonly"];function oe(e,t,n,o,l,i){return(0,s.uX)(),(0,s.CE)("div",te,[(0,s.Lk)("div",ne,[t[1]||(t[1]=(0,s.Lk)("div",null,[(0,s.Lk)("label",{for:"validationServer03",class:"form-label"})],-1)),(0,s.Lk)("div",null,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.amountInput=e),class:(0,k.C4)(o.inputClass),id:"validationServer03","aria-describedby":"validationServer03Feedback",placeholder:n.placeholder,readonly:n.readonly,required:""},null,10,ae),[[a.Jo,o.amountInput]])])])])}function se(e="buy",t){const n=(0,T.KR)(""),a=(0,T.KR)(null),o={buy:/^(?!0\d)(\d+(\.\d+)?|0\.\d+)$/,pay:/^(?!0\d)\d+(\.\d{1,2})?$/},l=(0,s.EW)((()=>null===a.value?"form-control":a.value?"form-control is-valid":"form-control is-invalid"));return(0,s.wB)(n,(n=>{if(""===n)a.value=null;else{e=null!=t.value?"pay":"buy";const s=o[e];if(!s)return console.error(`Tipo de validación desconocido: ${e}`),void(a.value=!1);const l=s.test(n);if("buy"===e)a.value=l&&parseFloat(n)>0;else if("pay"===e&&null!=t.value){const e=parseFloat(n),o=t.value;a.value=l&&e>0&&e<=o}}})),{amountInput:n,inputClass:l,isValid:a}}var le={name:"InputComponent",props:{modelValue:{type:[String,Number],default:""},readonly:{type:Boolean,default:!1},type:{type:String},placeholder:{type:String},availableAmount:{type:Number}},setup(e,{emit:t}){const n=(0,T.KR)(e.availableAmount),{amountInput:a,inputClass:o,isValid:l}=se(e.type,n);return(0,s.wB)((()=>e.modelValue),(e=>{e!==a.value&&(a.value=e??"")})),(0,s.wB)(a,(e=>{t("update:modelValue",e)})),(0,s.wB)(l,(e=>{t("validityChanged",e)})),(0,s.wB)(a,(e=>{t("inputChanged",e)})),(0,s.wB)((()=>e.availableAmount),(e=>{n.value=e})),{amountInput:a,inputClass:o,isValid:l}}};const ie=(0,d.A)(le,[["render",oe]]);var re=ie;const ce={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},ue={class:"modal-dialog"},de={class:"modal-content"},pe={class:"modal-header"},me={class:"d-flex align-items-center gap-2"},be={class:"modal-title fs-4 fw-bold",id:"staticBackdropLabel"},ye={class:"modal-body d-flex flex-column gap-3"},ge={class:"modal-footer"};function ve(e,t,n,a,o,l){const i=(0,s.g2)("ListComponent"),r=(0,s.g2)("ButtonComponent"),c=(0,s.g2)("ToastComponent");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",ce,[(0,s.Lk)("div",ue,[(0,s.Lk)("div",de,[(0,s.Lk)("div",pe,[(0,s.Lk)("div",me,[(0,s.Lk)("h1",be,(0,k.v_)(n.modalTitle),1),t[0]||(t[0]=(0,s.Lk)("i",{class:"bi bi-check-circle fs-4",style:{color:"green"}},null,-1))]),t[1]||(t[1]=(0,s.Lk)("button",{type:"button",id:"btn-helper",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1))]),(0,s.Lk)("div",ye,[(0,s.bF)(i,{bodyList:n.transactionBody,crypto:n.cryptoSelected},null,8,["bodyList","crypto"]),t[2]||(t[2]=(0,s.Lk)("div",{class:"d-flex gap-1 align-items-center justify-content-center text-nowrap",id:"warningText"},[(0,s.Lk)("i",{class:"bi bi-info-circle-fill",style:{color:"#f1c21b","font-size":"1.2em"}}),(0,s.Lk)("small",null,[(0,s.eW)("Los montos a pagar o recibir ya incluyen las "),(0,s.Lk)("strong",null,"comisiones"),(0,s.eW)(" del exchange.")])],-1))]),(0,s.Lk)("div",ge,[t[3]||(t[3]=(0,s.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancelar",-1)),(0,s.bF)(r,{text:n.btnText,btnClass:"btn",onClick:a.handleConfirm,id:"btn-custom"},null,8,["text","onClick"])])])])]),(0,s.bF)(c,{ref:"successToast",toastMessage:a.toastMessage,toastType:a.toastColor},null,8,["toastMessage","toastType"])],64)}const fe={class:"d-flex"},he={class:"toast-body"};function ke(e,t,n,a,o,l){return(0,s.uX)(),(0,s.CE)("div",{ref:"toastElement",class:(0,k.C4)(`toast align-items-center border-0 position-fixed bottom-0 end-0 m-3 text-bg-${n.toastType}`),role:"alert","aria-live":"assertive","aria-atomic":"true"},[(0,s.Lk)("div",fe,[(0,s.Lk)("div",he,(0,k.v_)(n.toastMessage),1),t[0]||(t[0]=(0,s.Lk)("button",{type:"button",class:"btn-close btn-close-white me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close"},null,-1))])],2)}var Ce=n(9953),Le=n.n(Ce),we={name:"SuccessToast",props:{toastType:{type:String},toastMessage:String},setup(){const e=(0,T.KR)(null),t=()=>{const t=new(Le().Toast)(e.value);t.show()};return{toastElement:e,showToast:t}}};const Te=(0,d.A)(we,[["render",ke]]);var xe=Te;const Be={class:"list-group"},_e={class:"list-group-item d-flex justify-content-between align-items-center fw-bold"},Ae={class:"badge text-bg-warning rounded-pill"},Ee={class:"list-group-item d-flex justify-content-between align-items-center fw-bold"},Se={class:"badge text-bg-warning rounded-pill"},Ve={class:"list-group-item d-flex justify-content-between align-items-center fw-bold"},Ue={class:"badge text-bg-warning rounded-pill"},Fe={class:"list-group-item d-flex justify-content-between align-items-center fw-bold"},Me={class:"badge text-bg-warning rounded-pill"},Xe={class:"list-group-item d-flex justify-content-between align-items-center fw-bold"},Ie={class:"badge text-bg-warning rounded-pill"};function Re(e,t,n,a,o,l){return(0,s.uX)(),(0,s.CE)("ul",Be,[(0,s.Lk)("li",_e,[t[0]||(t[0]=(0,s.eW)(" Fecha y hora de transacción: ")),(0,s.Lk)("span",Ae,(0,k.v_)(l.formatDate(n.bodyList.datetime)),1)]),(0,s.Lk)("li",Ee,[t[1]||(t[1]=(0,s.eW)(" Transacción a realizar: ")),(0,s.Lk)("span",Se,(0,k.v_)("purchase"==n.bodyList.action?"Compra":"Venta"),1)]),(0,s.Lk)("li",Ve,[t[2]||(t[2]=(0,s.eW)(" Cryptomoneda elegida: ")),(0,s.Lk)("span",Ue,(0,k.v_)(n.crypto),1)]),(0,s.Lk)("li",Fe,[(0,s.eW)((0,k.v_)("purchase"==n.bodyList.action?"Monto a comprar:":"Monto a vender:")+" ",1),(0,s.Lk)("span",Me,(0,k.v_)(n.bodyList.crypto_amount),1)]),(0,s.Lk)("li",Xe,[(0,s.eW)((0,k.v_)("purchase"==n.bodyList.action?"Monto a pagar:":"Monto a recibir:")+" ",1),(0,s.Lk)("span",Ie,"$"+(0,k.v_)(n.bodyList.money)+" ARS",1)])])}var je=n(1576),We=n.n(je),De={props:{bodyList:Object,crypto:String},methods:{formatDate(e){return e=We()(e).format("DD-MM-YYYY HH:mm"),e}}};const Oe=(0,d.A)(De,[["render",Re]]);var Ke=Oe,Pe=n(4373);const $e="https://criptoya.com/api/ripio";async function Qe(e,t,n=.1){try{const a=`${$e}/${e}/${t}/${n}`,o=await Pe.A.get(a,{headers:{"Content-Type":"application/json"}});return o.data}catch(a){console.error("Error al consultar la API:",a.message)}}const He=Pe.A.create({baseURL:"https://labor3-d60e.restdb.io/rest/transactions",headers:{"x-apikey":"64a2e9bc86d8c525a3ed8f63","Content-Type":"application/json"}});async function Ne(e){if(!e||"object"!==typeof e)return console.error("El cuerpo de la solicitud es inválido:",e),{success:!1,message:"Cuerpo inválido"};try{const t=await He.post("",e);return{data:t.data,success:!0}}catch(t){return console.error("Error al consultar la API:",t.message,t.response?.data),{success:!1,message:t.message}}}async function Ye(e,t){if(!t||"object"!==typeof t)return console.error("El cuerpo de la solicitud es inválido:",t),{success:!1,message:"Cuerpo inválido"};if(!e)return console.error("El id es nulo"),{success:!1,message:"Id no puede ser nulo"};try{const n=await He.patch(`/${e}`,t);return{data:n.data,success:!0}}catch(n){return console.error("Error al consultar la API:",n.message,n.response?.data),{success:!1,message:n.message}}}async function ze(e){if(null===e)return console.error("El id es nulo"),{success:!1,message:"Id no puede ser nulo"};try{const t=await He.delete(`/${e}`);return{data:t,success:!0}}catch(t){return console.error("Error al consultar la API:",t.message,t.response),{success:!1,message:t.message}}}async function qe(e){null===e&&console.error("El id no puede ser nulo");try{const t={q:JSON.stringify({user_id:e})},n=await He.get("",{params:t});return{data:n.data,success:!0}}catch(t){return console.error("Error al consultar la API:",t.message,t.response?.data),{success:!1,message:t.message}}}async function Je(e){try{var t=["btc","usdt","dai","eth"];const n=await qe(e);if(!n||!Array.isArray(n.data))return console.warn('La respuesta no contiene un arreglo válido en la propiedad "data"'),{};const a={};for(const e of t){const{totalPurchasesAmount:t,totalSalesAmount:o}=n.data.reduce(((t,{crypto_code:n,action:a,crypto_amount:o})=>{if(n===e){const e=parseFloat(o||0);"purchase"===a&&(t.totalPurchasesAmount+=e),"sale"===a&&(t.totalSalesAmount+=e)}return t}),{totalPurchasesAmount:0,totalSalesAmount:0}),s=t-o,l=await Qe(e,"ARS"),i=l?.totalBid||0,r=(s*i).toFixed(2);(s>0||r>0)&&(a[e]={totalAvailable:s,totalValueARS:r})}return a}catch(n){return console.error("Error calculando los totales:",n),0}}var Ze={components:{ButtonComponent:I,ListComponent:Ke,ToastComponent:xe},props:{modalTitle:String,btnText:String,transactionBody:Object,cryptoSelected:String},emits:["successfull"],setup(e,{emit:t}){let n=(0,T.KR)(""),a=(0,T.KR)("");const o=(0,T.KR)(null),s=async()=>{try{const o=await Ne(e.transactionBody);o.success?(n.value="success",a.value="Transacción realizada exitosamente",t("successfull",!0),console.log("Transacción exitosa:",o)):(a.value="Algo salió mal, intenta nuevamente",n.value="danger",t("successfull",!1),console.warn("Transacción no fue exitosa:",o))}catch(s){console.error("Error al realizar la transacción:",s)}finally{setTimeout((()=>{const e=document.getElementById("btn-helper");e?e.click():console.warn("Botón no encontrado")}),1e3),setTimeout((()=>{o.value&&o.value.showToast()}),1200)}};return{toastMessage:a,toastColor:n,successToast:o,handleConfirm:s}}};const Ge=(0,d.A)(Ze,[["render",ve]]);var et=Ge;async function tt(e,t,n){let a=await Qe(t,"ARS");return"compra"===n.toLowerCase()?(a.totalAsk*e).toFixed(2):"venta"===n.toLowerCase()?(a.totalBid*e).toFixed(2):void 0}async function nt(e){const t={bitcoin:"btc",ethereum:"eth",usdt:"usdt",dai:"dai"};return t[e.toLowerCase()]||e}async function at(e,t){try{const n=await qe(e);if(!n||!Array.isArray(n.data))return console.warn('La respuesta no contiene un arreglo válido en la propiedad "data"'),0;const{totalPurchasesAmount:a,totalSalesAmount:o}=n.data.reduce(((e,{crypto_code:n,action:a,crypto_amount:o})=>{if(n===t){const t=parseFloat(o||0);"purchase"===a&&(e.totalPurchasesAmount+=t),"sale"===a&&(e.totalSalesAmount+=t)}return e}),{totalPurchasesAmount:0,totalSalesAmount:0}),s=a-o;return console.log(s),s}catch(n){return console.error("Error calculando los totales:",n),0}}var ot={components:{InputTransactionComponent:re,ButtonComponent:I,ModalComponent:et},props:{actionTitle:String,transactionType:{type:String,required:!0}},data(){return{selectedCrypto:"",amount:null,availableCoin:null,purchase:!1,sale:!1,price:null,success:!1,cryptocurrencies:[{id:1,name:"Bitcoin"},{id:2,name:"Ethereum"},{id:3,name:"USDT"},{id:4,name:"DAI"}],transactionBody:{user_id:"",action:"",crypto_code:"",crypto_amount:0,money:0,datetime:""}}},watch:{amount:"updatePrice",selectedCrypto:"updatePrice",availableCoin:"handleTotals"},setup(){const e=B(),{user:t}=(0,x.bP)(e);return{user:t}},methods:{async updatePrice(){let e=await nt(this.selectedCrypto);if("compra"===this.transactionType.toLowerCase())if(this.amount&&this.selectedCrypto)try{this.price=await tt(this.amount,e,this.transactionType)}catch(t){console.error("Error al calcular el monto:",t),this.price=null}else this.price=null;else if("venta"===this.transactionType.toLowerCase())if(this.selectedCrypto&&null!=this.amount&&this.amount<=this.availableCoin)try{this.price=await tt(this.amount,e,this.transactionType)}catch(t){console.error("Error al calcular el monto:",t),this.price=null}else this.price=null},async submitForm(){this.transactionBody={user_id:this.user,action:"compra"==this.transactionType.toLowerCase()?"purchase":"sale",crypto_code:await nt(this.selectedCrypto),crypto_amount:this.amount,money:this.price,datetime:(new Date).toISOString()},console.log("Cuerpo de transaccion:",this.transactionBody)},async getUserTransactions(){const e=await qe(this.user);console.log(e)},async handleTotals(){if(this.selectedCrypto&&"Venta"==this.transactionType)try{let e=await nt(this.selectedCrypto);const t=await at(this.user,e);this.availableCoin=t,console.log("available coin:",this.availableCoin)}catch(e){console.error("Error al obtener el monto disponible:",e),this.availableCoin=null}else this.availableCoin=null},async handleSuccess(e){e&&(this.selectedCrypto="",this.amount="",this.availableCoin="",this.price="")}}};const st=(0,d.A)(ot,[["render",ee]]);var lt=st,it={components:{FormComponent:lt,ButtonComponent:I},data(){return{transactionType:"",begin:!1,purchase:!1,sale:!1,actions:[{name:"Compra"},{name:"Venta"}]}},methods:{updateActions(e){this.transactionType=e.target.dataset.type,"Compra"==this.transactionType?(this.purchase=!0,this.sale=!1):"Venta"===this.transactionType&&(this.sale=!0,this.purchase=!1)},handleBegin(){this.begin=!0}}};const rt=(0,d.A)(it,[["render",H]]);var ct=rt;const ut={class:"movementsView"},dt={key:0};function pt(e,t,n,a,o,l){const i=(0,s.g2)("TransactionTableComponent");return(0,s.uX)(),(0,s.CE)("div",ut,[(0,s.bF)(i,{onSuccess:a.handleTransactions,transactions:a.transactions,showList:a.showList},null,8,["onSuccess","transactions","showList"]),a.showList?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("h2",dt,"No hay datos para mostrar"))])}const mt={key:0,id:"tableView",class:"d-flex align-items-center justify-content-center mt-5 h-100"},bt={class:"table-container"},yt={class:"transactions-table"},gt={id:"tableDataIcons",class:"d-flex align-items-center justify-content-center gap-4 fs-5"},vt=["onClick"],ft=["onClick"],ht=["onClick"];function kt(e,t,n,a,o,l){const i=(0,s.g2)("SpinnerComponent"),r=(0,s.g2)("ModalMovementsComponent");return(0,s.uX)(),(0,s.CE)(s.FK,null,[t[1]||(t[1]=(0,s.Lk)("h2",{class:"d-flex align-items-center justify-content-center mt-5"},"Historial de movimientos",-1)),n.showList?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",mt,[(0,s.bF)(i)])),(0,s.Lk)("div",bt,[(0,s.Lk)("table",yt,[t[0]||(t[0]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,[(0,s.Lk)("i",{class:"bi bi-calendar4-week"}),(0,s.eW)(" Fecha y hora")]),(0,s.Lk)("th",null,[(0,s.Lk)("i",{class:"bi bi-currency-exchange"}),(0,s.eW)(" Tipo")]),(0,s.Lk)("th",null,[(0,s.Lk)("i",{class:"bi bi-coin"}),(0,s.eW)(" Crypto")]),(0,s.Lk)("th",null,[(0,s.Lk)("i",{class:"bi bi-cart-plus"}),(0,s.eW)(" Cantidad")]),(0,s.Lk)("th",null,[(0,s.Lk)("i",{class:"bi bi-cash-stack"}),(0,s.eW)(" Dinero")]),(0,s.Lk)("th",null,[(0,s.Lk)("i",{class:"bi bi-toggles2"}),(0,s.eW)(" Acciones")])])],-1)),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.transactions,((e,t)=>((0,s.uX)(),(0,s.CE)("tr",{key:t},[(0,s.Lk)("td",null,(0,k.v_)(l.formatDate(e.datetime)),1),(0,s.Lk)("td",null,(0,k.v_)("purchase"===e.action?"Compra":"Venta"),1),(0,s.Lk)("td",null,(0,k.v_)(e.crypto_code.toUpperCase()),1),(0,s.Lk)("td",null,(0,k.v_)(e.crypto_amount),1),(0,s.Lk)("td",null,"$ "+(0,k.v_)(e.money),1),(0,s.Lk)("td",gt,[(0,s.Lk)("i",{class:"bi bi-eye",style:{color:"green"},"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",onClick:t=>l.openModal({transaction:e,isReadOnly:!0})},null,8,vt),(0,s.Lk)("i",{class:"bi bi-pencil",style:{color:"orange"},"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",onClick:t=>l.openModal({transaction:e,isUpdate:!0})},null,8,ft),(0,s.Lk)("i",{class:"bi bi-trash",style:{color:"red"},"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",onClick:t=>l.openModal({transaction:e,isDelete:!0})},null,8,ht)])])))),128))])]),(0,s.bF)(r,{onSuccessfull:l.handleSuccess,isReadOnly:o.isRead,isDelete:o.isDelete,isUpdate:o.isUpdate,transactionBody:o.transactionBody,modalTitle:"Detalles de transacción",btnText:o.isRead?"Cerrar":o.isUpdate?"Actualizar":"Eliminar"},null,8,["onSuccessfull","isReadOnly","isDelete","isUpdate","transactionBody","btnText"])])],64)}const Ct={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},Lt={class:"modal-dialog"},wt={class:"modal-content"},Tt={class:"modal-header"},xt={class:"d-flex align-items-center gap-2"},Bt={class:"modal-title fs-4 fw-bold",id:"staticBackdropLabel"},_t={class:"modal-body d-flex flex-column gap-3"},At={class:"modal-footer"},Et={key:0,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"};function St(e,t,n,a,o,l){const i=(0,s.g2)("ListTableComponent"),r=(0,s.g2)("ButtonComponent"),c=(0,s.g2)("ToastComponent");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",Ct,[(0,s.Lk)("div",Lt,[(0,s.Lk)("div",wt,[(0,s.Lk)("div",Tt,[(0,s.Lk)("div",xt,[(0,s.Lk)("h1",Bt,(0,k.v_)(n.modalTitle),1),t[0]||(t[0]=(0,s.Lk)("i",{class:"bi bi-check-circle fs-4",style:{color:"green"}},null,-1))]),t[1]||(t[1]=(0,s.Lk)("button",{type:"button",id:"btn-helper",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1))]),(0,s.Lk)("div",_t,[null!=n.transactionBody?((0,s.uX)(),(0,s.Wv)(i,{key:0,bodyList:n.transactionBody,isUpdate:n.isUpdate,onUpdateTransaction:a.updateTransactionBody},null,8,["bodyList","isUpdate","onUpdateTransaction"])):(0,s.Q3)("",!0),t[2]||(t[2]=(0,s.Lk)("div",{class:"d-flex gap-1 align-items-center justify-content-center text-nowrap",id:"warningText"},[(0,s.Lk)("i",{class:"bi bi-info-circle-fill",style:{color:"#f1c21b","font-size":"1.2em"}}),(0,s.Lk)("small",null,[(0,s.eW)("El dinero pagado o recibido ya incluye las "),(0,s.Lk)("strong",null,"comisiones"),(0,s.eW)(" del exchange.")])],-1))]),(0,s.Lk)("div",At,[n.isReadOnly?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("button",Et,"Cancelar")),n.isReadOnly?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(r,{key:1,text:n.btnText,btnClass:"btn",onClick:a.handleConfirm,id:"btn-custom"},null,8,["text","onClick"])),n.isReadOnly?((0,s.uX)(),(0,s.Wv)(r,{key:2,text:n.btnText,btnClass:"btn",id:"btn-custom","data-bs-dismiss":"modal"},null,8,["text"])):(0,s.Q3)("",!0)])])])]),(0,s.bF)(c,{ref:"successToast",toastMessage:a.toastMessage,toastType:a.toastColor},null,8,["toastMessage","toastType"])],64)}const Vt={class:"list-group"},Ut={class:"list-group-item d-flex justify-content-between align-items-center fw-bold"},Ft={class:"badge text-bg-warning rounded-pill"},Mt={class:"list-group-item d-flex justify-content-between align-items-center fw-bold"},Xt={class:"badge text-bg-warning rounded-pill"},It={class:"list-group-item d-flex justify-content-between align-items-center fw-bold"},Rt={class:"badge text-bg-warning rounded-pill"},jt={class:"list-group-item d-flex justify-content-between align-items-center fw-bold"},Wt={key:0,class:"badge text-bg-warning rounded-pill"},Dt={class:"list-group-item d-flex justify-content-between align-items-center fw-bold"},Ot={key:0,class:"badge text-bg-warning rounded-pill"};function Kt(e,t,n,a,o,l){const i=(0,s.g2)("InputTransactionComponent");return(0,s.uX)(),(0,s.CE)("ul",Vt,[(0,s.Lk)("li",Ut,[t[2]||(t[2]=(0,s.eW)(" Fecha y hora de transacción: ")),(0,s.Lk)("span",Ft,(0,k.v_)(e.formatDate(e.bodyList.datetime)),1)]),(0,s.Lk)("li",Mt,[t[3]||(t[3]=(0,s.eW)(" Tipo de transacción: ")),(0,s.Lk)("span",Xt,(0,k.v_)("purchase"==e.bodyList.action?"Compra":"Venta"),1)]),(0,s.Lk)("li",It,[t[4]||(t[4]=(0,s.eW)(" Cryptomoneda: ")),(0,s.Lk)("span",Rt,(0,k.v_)(e.bodyList.crypto_code.toUpperCase()),1)]),(0,s.Lk)("li",jt,[(0,s.eW)((0,k.v_)("purchase"==e.bodyList.action?"Monto comprado:":"Monto vendido:")+" ",1),e.isUpdate?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",Wt,(0,k.v_)(e.bodyList.crypto_amount),1)),e.isUpdate?((0,s.uX)(),(0,s.Wv)(i,{key:1,modelValue:e.cryptoAmount,"onUpdate:modelValue":t[0]||(t[0]=t=>e.cryptoAmount=t),placeholder:e.bodyList.crypto_amount,onInput:e.updateTransaction},null,8,["modelValue","placeholder","onInput"])):(0,s.Q3)("",!0)]),(0,s.Lk)("li",Dt,[(0,s.eW)((0,k.v_)("purchase"==e.bodyList.action?"Dinero pagado:":"Dinero recibido:")+" ",1),e.isUpdate?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",Ot,"$"+(0,k.v_)(e.bodyList.money)+" ARS",1)),e.isUpdate?((0,s.uX)(),(0,s.Wv)(i,{key:1,modelValue:e.money,"onUpdate:modelValue":t[1]||(t[1]=t=>e.money=t),placeholder:e.bodyList.money,onInput:e.updateTransaction},null,8,["modelValue","placeholder","onInput"])):(0,s.Q3)("",!0)])])}var Pt=(0,s.pM)({components:{InputTransactionComponent:re},props:{bodyList:Object,isUpdate:Boolean},setup(e,{emit:t}){const n=(0,T.KR)(e.bodyList.money??0),a=(0,T.KR)(e.bodyList.crypto_amount??0);(0,s.wB)((()=>e.bodyList),(e=>{e&&(n.value=e.money??0,a.value=e.crypto_amount??0)}),{deep:!0,immediate:!0});const o=()=>{t("update-transaction",{crypto_amount:a.value,money:n.value})},l=e=>We()(e).format("DD-MM-YYYY HH:mm");return{money:n,cryptoAmount:a,updateTransaction:o,formatDate:l}}});const $t=(0,d.A)(Pt,[["render",Kt]]);var Qt=$t,Ht={components:{ButtonComponent:I,ListTableComponent:Qt,ToastComponent:xe},props:{modalTitle:String,btnText:String,transactionBody:Object,isReadOnly:Boolean,isUpdate:Boolean,isDelete:Boolean},emits:["successfull"],setup(e,{emit:t}){let n=(0,T.KR)(""),a=(0,T.KR)(""),o=(0,T.KR)({crypto_amount:e.transactionBody.crypto_amount,money:e.transactionBody.money});const s=e=>{o.value=e,console.log(o.value)},l=(0,T.KR)(null),i=async()=>{try{const s=e.isDelete?await ze(e.transactionBody._id):await Ye(e.transactionBody._id,o.value);s.success?(n.value="success",a.value=e.isDelete?"Transacción eliminada exitosamente":"Transacción actualizada exitosamente",t("successfull",!0)):(a.value="Algo salió mal, intenta nuevamente",n.value="danger",t("successfull",!1))}catch(s){console.error("Error al manipular la transacción:",s)}finally{setTimeout((()=>{const e=document.getElementById("btn-helper");e?e.click():console.warn("Botón no encontrado")}),1e3),setTimeout((()=>{l.value&&l.value.showToast()}),1200)}};return{toastMessage:a,toastColor:n,successToast:l,updateTransactionBody:s,handleConfirm:i}}};const Nt=(0,d.A)(Ht,[["render",St]]);var Yt=Nt;const zt={class:"spinner-grow",role:"status"};function qt(e,t){return(0,s.uX)(),(0,s.CE)("div",zt,t[0]||(t[0]=[(0,s.Lk)("span",{class:"visually-hidden"},"Cargando...",-1)]))}const Jt={},Zt=(0,d.A)(Jt,[["render",qt]]);var Gt=Zt,en={name:"TransactionTableComponent",components:{ModalMovementsComponent:Yt,SpinnerComponent:Gt},data(){return{transactionBody:{_id:"",user_id:"",action:"",crypto_code:"",crypto_amount:"",money:"",datetime:""},isRead:null,isUpdate:null,isDelete:null}},props:{transactions:{type:Array,required:!0},showList:{type:Boolean,default:!1}},emits:["success"],methods:{formatDate(e){return e=We()(e).format("DD-MM-YYYY HH:mm"),e},openModal({transaction:e,isReadOnly:t=null,isUpdate:n=null,isDelete:a=null}){this.transactionBody._id=e._id,this.transactionBody.user_id=e.user_id,this.transactionBody.action=e.action,this.transactionBody.datetime=e.datetime,this.transactionBody.crypto_amount=e.crypto_amount,this.transactionBody.crypto_code=e.crypto_code,this.transactionBody.money=e.money,this.isRead=t??null,this.isUpdate=n??null,this.isDelete=a??null,console.log(this.transactionBody)},handleSuccess(e){e&&this.$emit("success",!0)}}};const tn=(0,d.A)(en,[["render",kt],["__scopeId","data-v-575e17d9"]]);var nn=tn,an={components:{TransactionTableComponent:nn},setup(){const e=B(),{user:t}=(0,x.bP)(e),n=(0,T.KR)([]),a=(0,T.KR)(!1),o=async()=>{var e=await qe(t.value);null!=e&&e.data&&(n.value=e.data,a.value=!0)},l=e=>{e&&o()};return(0,s.sV)((()=>{o()})),{transactions:n,handleTransactions:l,showList:a}}};const on=(0,d.A)(an,[["render",pt]]);var sn=on;const ln={class:"walletContainer"},rn={class:"cardsContainer"};function cn(e,t,n,a,o,l){const i=(0,s.g2)("SpinnerComponent"),r=(0,s.g2)("CardComponent");return(0,s.uX)(),(0,s.CE)(s.FK,null,[t[0]||(t[0]=(0,s.Lk)("h1",{id:"walletTitle"},"Mi cartera",-1)),(0,s.Lk)("div",ln,[a.showCards?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(i,{key:0})),(0,s.Lk)("div",rn,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.bodyData,((e,t)=>((0,s.uX)(),(0,s.Wv)(r,{key:t,CoinName:t,CoinBody:e},null,8,["CoinName","CoinBody"])))),128))])])],64)}const un={class:"cardContainer"},dn={class:"d-flex align-items-center h-100"},pn={class:"fw-bold"},mn={class:"d-flex flex-column align-items-center justify-content-around fs-4 fw-bold"},bn={class:"d-flex gap-2"},yn={class:"d-flex gap-2 align-items-center"};function gn(e,t,n,a,o,l){return(0,s.uX)(),(0,s.CE)("div",un,[(0,s.Lk)("div",dn,[(0,s.Lk)("h1",pn,(0,k.v_)(l.formatCoinName(n.CoinName)),1)]),(0,s.Lk)("div",mn,[(0,s.Lk)("div",bn,[t[0]||(t[0]=(0,s.Lk)("i",{class:"bi bi-coin text-warning"},null,-1)),(0,s.eW)((0,k.v_)(n.CoinBody.totalAvailable),1)]),(0,s.Lk)("div",yn,[t[1]||(t[1]=(0,s.Lk)("i",{class:"bi bi-cash-coin text-success"},null,-1)),(0,s.eW)(" $"+(0,k.v_)(n.CoinBody.totalValueARS)+" ARS",1)])])])}var vn={props:{CoinName:String,CoinBody:Object},methods:{formatCoinName(e){switch(e){case"btc":return"Bitcoin";case"usdt":return"USDT";case"dai":return"Dai";case"eth":return"Ethereum";default:return"Desconocido"}}}};const fn=(0,d.A)(vn,[["render",gn]]);var hn=fn,kn={components:{CardComponent:hn,SpinnerComponent:Gt},setup(){const e=B(),{user:t}=(0,x.bP)(e),n=(0,T.KR)(null),a=(0,T.KR)(!1),o=async()=>{n.value=await Je(t.value),n.value&&(a.value=!0)};return(0,s.sV)((()=>{o()})),{bodyData:n,getTotals:o,showCards:a}}};const Cn=(0,d.A)(kn,[["render",cn]]);var Ln=Cn;const wn=[{path:"/Home",name:"Home",component:m},{path:"/",name:"Login",component:W},{path:"/Transactions",name:"Transactions",component:ct},{path:"/Movements",name:"Movements",component:sn},{path:"/Analysis",name:"Analysis",component:Ln}],Tn=(0,o.aE)({history:(0,o.Bt)(),routes:wn});Tn.beforeEach(((e,t,n)=>{const a=B(),{isUserLogged:o}=(0,x.bP)(a);"Login"===e.name||o.value?n():n({name:"Login"})}));var xn=Tn;function Bn(e,t,n,a,o,l){const i=(0,s.g2)("nav-component"),r=(0,s.g2)("RouterView");return(0,s.uX)(),(0,s.CE)(s.FK,null,[a.isUserLogged?((0,s.uX)(),(0,s.Wv)(i,{key:0,class:"navBar"})):(0,s.Q3)("",!0),(0,s.bF)(r)],64)}const _n={class:"nav"},An={class:"routes"},En={class:"avatar"},Sn={class:"d-flex justify-content-center align-items-center gap-1"};function Vn(e,t,n,a,o,l){const i=(0,s.g2)("ion-icon"),r=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",_n,[(0,s.Lk)("div",An,[(0,s.Lk)("div",{class:(0,k.C4)(["icon-box",{active:"Home"===e.$route.name}])},[(0,s.bF)(i,{name:"home"}),(0,s.bF)(r,{class:"custom-link",to:{name:"Home"}},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("Home")]))),_:1})],2),(0,s.Lk)("div",{class:(0,k.C4)(["icon-box",{active:"Transactions"===e.$route.name}])},[(0,s.bF)(i,{name:"logo-bitcoin"}),(0,s.bF)(r,{class:"custom-link",to:{name:"Transactions"}},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("Transacciones")]))),_:1})],2),(0,s.Lk)("div",{class:(0,k.C4)(["icon-box",{active:"Movements"===e.$route.name}])},[(0,s.bF)(i,{name:"swap-vertical"}),(0,s.bF)(r,{class:"custom-link",to:{name:"Movements"}},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("Movimientos")]))),_:1})],2),(0,s.Lk)("div",{class:(0,k.C4)(["icon-box",{active:"Analysis"===e.$route.name}])},[(0,s.bF)(i,{name:"wallet-outline"}),(0,s.bF)(r,{class:"custom-link",to:{name:"Analysis"}},{default:(0,s.k6)((()=>t[3]||(t[3]=[(0,s.eW)("Mi Cartera")]))),_:1})],2)]),(0,s.Lk)("div",En,[(0,s.Lk)("div",Sn,[(0,s.bF)(i,{name:"person-outline"}),(0,s.Lk)("div",null,"¡Hola, "+(0,k.v_)(a.user)+"!",1)]),(0,s.bF)(i,{onClick:a.logOut,id:"icon-logOut",name:"log-out-outline"},null,8,["onClick"])])])}var Un={name:"NavComponent",setup(){const e=B(),t=(0,o.rd)(),{user:n,isUserLogged:a}=(0,x.bP)(e),s=()=>{e.isUserLogged=!1,t.push({name:"Login"})};return{user:n,isUserLogged:a,logOut:s}}};const Fn=(0,d.A)(Un,[["render",Vn],["__scopeId","data-v-6b1a3e78"]]);var Mn=Fn,Xn={name:"App",components:{NavComponent:Mn},setup(){const e=B(),{isUserLogged:t}=(0,x.bP)(e);return{isUserLogged:t}}};const In=(0,d.A)(Xn,[["render",Bn]]);var Rn=In;n(6213);const jn=(0,a.Ef)(Rn),Wn=(0,x.Ey)();jn.use(xn),jn.use(Wn),jn.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,r=0;r<a.length;r++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(i=!1,s<l&&(l=s));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/TPLAB32024/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,l=a[0],i=a[1],r=a[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(r)var u=r(n)}for(t&&t(a);c<l.length;c++)s=l[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},a=self["webpackChunkcryptoexchange"]=self["webpackChunkcryptoexchange"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(7658)}));a=n.O(a)})();
//# sourceMappingURL=app.154e1799.js.map