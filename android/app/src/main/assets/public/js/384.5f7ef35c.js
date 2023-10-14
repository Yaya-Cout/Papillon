"use strict";(self["webpackChunkpapillon"]=self["webpackChunkpapillon"]||[]).push([[384,121],{8121:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(6252),a=n(3577);const s=e=>((0,o.dD)("data-v-457e3472"),e=e(),(0,o.Cn)(),e),r={key:0},l=s((()=>(0,o._)("span",{slot:"start",class:"material-symbols-outlined mdls"},"delete",-1))),i=s((()=>(0,o._)("span",{class:"material-symbols-outlined mdls",slot:"start"},"delete",-1))),d=s((()=>(0,o._)("h2",null,"Ce devoir à été supprimé",-1))),u=s((()=>(0,o._)("p",null,"Vous consultez une archive de ce devoir.",-1))),c={key:1},p=["innerHTML"],m=s((()=>(0,o._)("p",null,"Documents attachés",-1))),h={key:0,class:"material-symbols-outlined mdls",slot:"start"},w={key:1,class:"material-symbols-outlined mdls",slot:"start"};function g(e,t,n,s,g,k){const f=(0,o.up)("IonBackButton"),I=(0,o.up)("ion-buttons"),_=(0,o.up)("ion-title"),y=(0,o.up)("ion-button"),v=(0,o.up)("IonToolbar"),b=(0,o.up)("IonHeader"),D=(0,o.up)("IonLabel"),C=(0,o.up)("IonItem"),S=(0,o.up)("IonList"),H=(0,o.up)("ion-content");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(b,{class:"AppHeader",translucent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(I,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"only-ios",text:e.backTitle,onClick:e.pop},null,8,["text","onClick"]),(0,o.Wm)(f,{class:"only-md",onClick:e.pop},null,8,["onClick"])])),_:1}),e.openedHomework&&e.custom?((0,o.wg)(),(0,o.j4)(_,{key:0},{default:(0,o.w5)((()=>[(0,o.Uk)("Devoir personnalisé")])),_:1})):((0,o.wg)(),(0,o.j4)(_,{key:1},{default:(0,o.w5)((()=>[(0,o.Uk)("Travail à faire "),e.openedHomework?((0,o.wg)(),(0,o.iD)("span",r,"en "+(0,a.zw)(e.openedHomework.subject),1)):(0,o.kq)("",!0)])),_:1})),(0,o.Wm)(I,{slot:"end"},{default:(0,o.w5)((()=>[e.custom?((0,o.wg)(),(0,o.j4)(y,{key:0,color:"danger",onClick:t[0]||(t[0]=t=>e.deleteHW(t))},{default:(0,o.w5)((()=>[l,(0,o.Uk)(" Suppr. ")])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(H,{fullscreen:!0},{default:(0,o.w5)((()=>[e.deleted?((0,o.wg)(),(0,o.j4)(S,{key:0,inset:""},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{color:"danger"},{default:(0,o.w5)((()=>[i,(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[d,u])),_:1})])),_:1})])),_:1})):(0,o.kq)("",!0),e.openedHw?((0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",{class:"content",innerHTML:e.openedHomework.content},null,8,p)])):(0,o.kq)("",!0),0!==e.openedFiles.length?((0,o.wg)(),(0,o.j4)(D,{key:2,class:"listGroupTitle"},{default:(0,o.w5)((()=>[m])),_:1})):(0,o.kq)("",!0),0!==e.openedFiles.length?((0,o.wg)(),(0,o.j4)(S,{key:3,class:"listGroup"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.openedFiles,(t=>((0,o.wg)(),(0,o.j4)(C,{key:t.id,onClick:n=>e.openLink(t.url)},{default:(0,o.w5)((()=>[1==t.type?((0,o.wg)(),(0,o.iD)("span",h,"description")):0==t.type?((0,o.wg)(),(0,o.iD)("span",w,"link")):(0,o.kq)("",!0),(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[(0,o._)("h2",null,(0,a.zw)(t.name),1),(0,o._)("p",null,(0,a.zw)(t.url),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):(0,o.kq)("",!0)])),_:1})],64)}n(8862);var k=n(5274),f=n(7806);const I=(0,o.aZ)({name:"FolderPage",components:{IonHeader:k.Gu,IonToolbar:k.sr,IonButtons:k.Sm,IonButton:k.YG,IonBackButton:k.oU,IonTitle:k.wd,IonContent:k.W2,IonList:k.q_,IonItem:k.Ie,IonLabel:k.Q$},props:{urlHw:{type:String,required:!0}},data(){let e="Retour";const t=this.$router.currentRoute.value;return"Homework"==t.name&&(e="Devoirs"),{backTitle:e,openedHw:[],openedData:[],openedHomework:[],openedFiles:[],custom:!1,deleted:!1}},methods:{async openLink(e){await f.A.open({url:e,presentationStyle:"popover"})},async deleteHW(){const e=JSON.parse(localStorage.customHomeworks),t=e.find((e=>e.homework.data.id==this.openedData.id));e.splice(e.indexOf(t),1),localStorage.customHomeworks=JSON.stringify(e),this.deleted=!0}},mounted(){if(this.urlHw){const e=this.urlHw,t=decodeURIComponent(e),n=JSON.parse(t);this.openedHw=n,this.openedData=n.data,this.openedHomework=n.homework,this.openedFiles=n.files,"number"!==typeof n.data.id&&n.data.id.startsWith("custom")&&(this.custom=!0)}return!1}});var _=n(3744);const y=(0,_.Z)(I,[["render",g],["__scopeId","data-v-457e3472"]]),v=y},1384:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var o=n(6252);function a(e,t,n,a,s,r){var l=(0,o.up)("ion-nav"),i=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(i,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(l,{root:s.component,ref:"page"},null,8,["root"])]})),_:1})}var s=n(5274),r=(n(8862),n(3577)),l=n(9963);const i=e=>((0,o.dD)("data-v-84b5deda"),e=e(),(0,o.Cn)(),e),d=i((()=>(0,o._)("span",{class:"material-symbols-outlined mdls",slot:"start"},"calendar_month",-1))),u=i((()=>(0,o._)("div",{class:"alphaMessage"},[(0,o._)("span",{class:"material-symbols-outlined mdls icon"},"warning"),(0,o._)("div",{class:"alphaText"},[(0,o._)("h2",null,'La fonctionnalité "Travail à faire" est encore en test pour EcoleDirecte.'),(0,o._)("p",{class:"description"},"Certains bugs, notamment lors de l'affichage du contenu du devoir, peuvent apparaître.")])],-1))),c=i((()=>(0,o._)("span",{class:"material-symbols-outlined mdls",slot:"icon-only"},"add",-1))),p=i((()=>(0,o._)("div",{id:"noTouchZone"},null,-1))),m={key:0},h={slot:"start"},w=i((()=>(0,o._)("span",{class:"courseColor"},null,-1))),g=["innerHTML"],k={key:1,class:"hwContent"},f={key:2},I={key:0},_={key:0,class:"NoCours"},y=i((()=>(0,o._)("h1",null,"😎",-1))),v=i((()=>(0,o._)("h2",null,"Aucun devoir pour ce jour",-1))),b=i((()=>(0,o._)("p",null,"Sélectionnez un autre jour dans le calendrier ou balayez l’écran pour changer de journée.",-1))),D={key:0,class:"NoCours"},C=i((()=>(0,o._)("h1",null,"🌏",-1))),S=i((()=>(0,o._)("h2",null,"Pas de connexion à Internet",-1))),H=i((()=>(0,o._)("p",null,"Vous pouvez uniquement consulter les journées déjà chargées préalablement lorsque vous êtes hors-ligne.",-1))),W=[C,S,H],x={key:1,class:"NoCours"},$=i((()=>(0,o._)("h1",null,"🛠️",-1))),T=i((()=>(0,o._)("h2",null,"Serveurs indisponibles",-1))),R=i((()=>(0,o._)("p",null,"Vous pouvez uniquement consulter les journées déjà chargées préalablement. Nos serveurs seront bientôt de nouveaux disponibles.",-1))),j=[$,T,R],L={key:1},O={class:"loadingSpin"};function q(e,t,n,a,s,i){const C=(0,o.up)("ion-menu-button"),S=(0,o.up)("ion-buttons"),H=(0,o.up)("ion-title"),$=(0,o.up)("ion-button"),T=(0,o.up)("ion-progress-bar"),R=(0,o.up)("IonToolbar"),q=(0,o.up)("IonHeader"),B=(0,o.up)("ion-item"),M=(0,o.up)("ion-refresher-content"),P=(0,o.up)("ion-refresher"),E=(0,o.up)("IonFab"),z=(0,o.up)("ion-checkbox"),N=(0,o.up)("IonLabel"),A=(0,o.up)("IonNavLink"),U=(0,o.up)("IonItem"),F=(0,o.up)("IonList"),V=(0,o.up)("IonSpinner"),Z=(0,o.up)("swiper-slide"),J=(0,o.up)("swiper"),G=(0,o.up)("IonDatetime"),Y=(0,o.up)("ion-content"),K=(0,o.up)("IonModal"),Q=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(Q,{ref:"page"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{class:"AppHeader",translucent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(R,null,{default:(0,o.w5)((()=>[(0,o.Wm)(S,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{color:"dark"})])),_:1}),(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Travail à faire")])),_:1}),(0,o.Wm)(S,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Wm)($,{id:"rnPickerModalButton",color:"dark",onClick:t[0]||(t[0]=t=>e.changernPickerModalOpen(!0))},{default:(0,o.w5)((()=>[d,(0,o._)("p",null,(0,r.zw)(e.rnButtonString),1)])),_:1})])),_:1}),e.isLoading?((0,o.wg)(),(0,o.j4)(T,{key:0,type:"indeterminate"})):(0,o.kq)("",!0)])),_:1})])),_:1}),(0,o.Wm)(Y,{fullscreen:!0,class:"content"},{default:(0,o.w5)((()=>["ecoledirecte"===e.loginService?((0,o.wg)(),(0,o.j4)(B,{key:0},{default:(0,o.w5)((()=>[u])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(P,{slot:"fixed",onIonRefresh:t[1]||(t[1]=t=>e.handleRefresh(t))},{default:(0,o.w5)((()=>[(0,o.Wm)(M)])),_:1}),(0,o.Wm)(E,{slot:"fixed",vertical:"bottom",horizontal:"end",class:"newHomeworksBtnFab"},{default:(0,o.w5)((()=>[(0,o.Wm)($,{onClick:t[2]||(t[2]=t=>e.addHomework(t)),size:"large",shape:"round",class:"newHomeworksBtn",mode:"md","aria-label":"Ajouter un devoir"},{default:(0,o.w5)((()=>[c])),_:1})])),_:1}),p,(0,o.Wm)(J,{class:"swiper",ref:"swiper",modules:[e.Virtual],virtual:"",initialSlide:e.baseIndex,speed:200,spaceBetween:10,preventClicks:!0},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.slides,((n,a)=>((0,o.wg)(),(0,o.j4)(Z,{class:"slide",key:a,virtualIndex:a},{default:(0,o.w5)((()=>[(0,o.Wm)(l.W3,{name:"CoursAnim",tag:"div",id:"DayData"},{default:(0,o.w5)((()=>[e.currentIndex==a&&e.days[a].length>0?((0,o.wg)(),(0,o.iD)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.days[`${a}`],(t=>((0,o.wg)(),(0,o.j4)(F,{key:t.id,inset:"",class:"hwListItem"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{button:""},{default:(0,o.w5)((()=>[(0,o._)("div",h,[(0,o.Wm)(z,{id:`checkbox_${t.data.id}`,checked:t.data.done,onIonChange:n=>e.changeDone(t)},null,8,["id","checked","onIonChange"])]),(0,o.Wm)(A,{class:"navLink","router-direction":"forward",component:e.HomeworkItemView,componentProps:{urlHw:encodeURIComponent(JSON.stringify(t))}},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{style:(0,r.j5)(`--courseColor: ${t.data.color};`),class:"ion-text-wrap"},{default:(0,o.w5)((()=>[(0,o._)("p",null,[w,(0,o.Uk)(" "+(0,r.zw)(t.homework.subject),1)]),e.isED()?((0,o.wg)(),(0,o.iD)("h5",{key:0,innerHTML:t.homework.shortContent,class:"hwContent"},null,8,g)):((0,o.wg)(),(0,o.iD)("h5",k,(0,r.zw)(t.homework.shortContent),1)),t.files.length>0?((0,o.wg)(),(0,o.iD)("p",f,[(0,o._)("span",null,(0,r.zw)(t.files[0].name),1)])):(0,o.kq)("",!0)])),_:2},1032,["style"])])),_:2},1032,["component","componentProps"])])),_:2},1024)])),_:2},1024)))),128))])):(0,o.kq)("",!0)])),_:2},1024),e.days[`${a}`]?((0,o.wg)(),(0,o.iD)("div",I,[(0,o.Wm)(l.uT,{name:"CoursAnim"},{default:(0,o.w5)((()=>[0!=e.days[`${a}`].length||e.days[`${a}`].error||e.days[`${a}`].loading||e.currentIndex!=a?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",_,[y,v,b,(0,o.Wm)($,{mode:"md",fill:"clear",onClick:t[3]||(t[3]=t=>e.changernPickerModalOpen(!0)),class:"changeDayButton"},{default:(0,o.w5)((()=>[(0,o.Uk)("Ouvrir le calendrier")])),_:1})]))])),_:2},1024),0!=e.days[`${a}`].length||"ERR_NETWORK"!=e.days[`${a}`].error||e.days[`${a}`].loading||e.connected?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",D,W)),0==e.days[`${a}`].length&&"ERR_NETWORK"==e.days[`${a}`].error&&!e.days[`${a}`].loading&&e.connected?((0,o.wg)(),(0,o.iD)("div",x,j)):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.iD)("div",L,[(0,o._)("div",O,[(0,o.Wm)(V)])]))])),_:2},1032,["virtualIndex"])))),128))])),_:1},8,["modules","initialSlide"]),(0,o.Wm)(K,{"is-open":e.rnPickerModalOpen,ref:"rnPickerModal",class:"datetimeModal",onDidDismiss:t[6]||(t[6]=t=>e.changernPickerModalOpen(!1)),"keep-contents-mounted":!0,"initial-breakpoint":.55,breakpoints:[0,.55]},{default:(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(R,null,{default:(0,o.w5)((()=>[(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Sélection de la date")])),_:1}),(0,o.Wm)(S,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Wm)($,{onClick:t[4]||(t[4]=t=>e.confirmRnInput())},{default:(0,o.w5)((()=>[(0,o.Uk)("Terminé")])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(G,{presentation:"date",ref:"rnInput",size:"cover",value:e.rnCalendarString,firstDayOfWeek:1,min:e.minDate,max:e.maxDate,"is-date-enabled":e.isDateAvailable,onIonChange:t[5]||(t[5]=t=>e.rnInputChanged())},null,8,["value","min","max","is-date-enabled"])])),_:1})])),_:1},8,["is-open"])])),_:1})])),_:1},512)}n(4916),n(5306),n(7658);var B=n(8903),M=n(8565),P=n(3883),E=n(8121),z=n(4892),N=n(3162),A=n(6726);const U=(0,o.aZ)({name:"FolderPage",components:{IonHeader:s.Gu,IonContent:s.W2,IonToolbar:s.sr,IonTitle:s.wd,IonMenuButton:s.fG,IonButtons:s.Sm,IonButton:s.YG,IonList:s.q_,IonPage:s._i,Swiper:P.tq,SwiperSlide:P.o5,IonRefresher:s.nJ,IonRefresherContent:s.Wo,IonCheckbox:s.nz,IonModal:s.ki,IonDatetime:s.x4,IonItem:s.Ie,IonLabel:s.Q$,IonNavLink:s.Qx,IonFab:s.IJ},setup(){return{baseIndex:250,minDate:n(7585).xD(),maxDate:n(7585).Bq(),isDateAvailable:n(7585).eB,Virtual:M.oM}},data(){const e=Array.from({length:2*this.baseIndex}).map(((e,t)=>`Slide ${t}`));return{HomeworkItemView:E["default"],slides:e,currentIndex:this.baseIndex,rnButtonString:this.createDateString(this.$rn),loadedrnButtonString:this.createDateString(this.$rn),rnCalendarString:this.$rn.toISOString().split("T")[0],days:[],connected:!1,shouldResetSwiper:!1,rnPickerModalOpen:!1,isChangingDate:!1,isLoading:!0,loginService:localStorage.getItem("loginService"),baseRn:new Date,swiper:null}},methods:{async addHomework(){const e=await s.Cl.create({header:"Ajouter un devoir",subHeader:"Entrez ici le contenu de votre devoir",inputs:[{name:"subject",type:"input",placeholder:"Matière (optionnel)"},{name:"content",type:"textarea",placeholder:"Contenu du devoir"}],buttons:[{text:"Annuler",role:"cancel"},{text:"Ajouter",handler:async e=>{const t=e.content;let n=e.subject;if(n||(n="DEVOIR PERSONNALISÉ"),!t)return;const o=getComputedStyle(document.documentElement).getPropertyValue("--ion-color-primary");let a=t;a.length>80&&(a=a.substring(0,80)+"...");const s={data:{id:"custom_"+Math.random().toString(36).substr(2,9),date:this.$rn.toISOString().split("T")[0].replace(/-/g,"/")+" 00:00",color:o,done:!1},homework:{subject:n.toUpperCase(),content:t,shortContent:a},files:[]};let r=[];localStorage.customHomeworks&&(r=JSON.parse(localStorage.customHomeworks)),r.push({date:this.$rn,homework:s}),localStorage.customHomeworks=JSON.stringify(r),this.handleRefresh()}}],mode:"md"});await e.present()},isED(){return"ecoledirecte"===localStorage.loginService},getHomeworks(e,t,n){const o=setTimeout((()=>{this.isLoading=!0}),500);for(let a=0;a<3;a++){const s=this.swiper.realIndex+(a-1),r=this.baseIndex-s;let l=new Date(this.baseRn);t&&(l=new Date(this.$rn)),l.setDate(l.getDate()-r),1==a&&(this.$rn=l,this.rnButtonString=this.createDateString(this.$rn),this.rnCalendarString=this.$rn.toISOString().split("T")[0]),(0,z.Z)(l,l,e).then((e=>{2==a&&(clearTimeout(o),this.isLoading=!1,n&&n.detail.complete()),e.error?"ERR_BAD_REQUEST"==e.error?this.days[s]&&(this.days[s].loading=!0):(this.days[s]=[],this.days[s]&&(this.days[s].error=e.error)):(this.days[s]=this.editHomeworks(e),this.loadedrnButtonString=this.createDateString(this.$rn),this.days[s]&&(this.days[s].loading=!1))}))}},editHomeworks(e){for(let t=0;t<e.length;t++){const n=e[t];e[t].homework.shortContent=n.homework.shortContent.replace(/[<]br[^>]*[>]/gi,"")}return e},createDateString(e){const t=new Date(e),n=t.toLocaleString("default",{weekday:"long"}).slice(0,3);return n+". "+t.getDate()},rnInputChanged(){if(this.isChangingDate)this.isChangingDate=!1;else{const e=new Date(this.$refs.rnInput.$el.value);this.$rn=e,this.baseRn=e,this.swiper.slideTo(this.baseIndex,0,!1),document.dispatchEvent(new CustomEvent("rnChanged",{detail:e}))}},confirmRnInput(){this.changernPickerModalOpen(!1)},openRnPicker(){this.$refs.rnPickerModal.$el.present()},resetSwiper(){return!1},handleRefresh(e){this.getHomeworks(!0,!1,e)},changernPickerModalOpen(e){this.rnPickerModalOpen=e},changeDone(e){A.Z.notification("success");const t=e.data.id,n=new Date(this.$rn),o=`checkbox_${e.data.id}`,a=document.getElementById(o);this.dontRetryCheck?a.checked=!a.checked:(0,z.m)([t,n,e]).then((()=>{setTimeout((()=>{this.dontRetryCheck=!0,setTimeout((()=>{this.dontRetryCheck=!1}),200)}),200),localStorage.removeItem("HomeworkCache"),this.getHomeworks()})).catch((e=>{console.error(e),setTimeout((()=>{this.dontRetryCheck=!0,a.checked=!a.checked,setTimeout((()=>{this.dontRetryCheck=!1}),200)}),200),N.Z.presentToastFull("Impossible de marquer ce devoir comme fait","Une erreur est survenue lors de la requête.","danger",B.no6,!0,e)}))}},mounted(){this.swiper=this.$refs.swiper.$el.swiper,document.addEventListener("rnChanged",(e=>{this.rnButtonString=this.createDateString(e.detail),this.getHomeworks(!1,e.detail)})),this.getHomeworks(),document.addEventListener("tokenUpdated",(()=>(this.getHomeworks(),!1))),this.swiper.on("slideChangeTransitionEnd",(()=>{this.resetSwiper(),this.isChangingDate=!0,this.getHomeworks()})),this.swiper.on("activeIndexChange",(()=>{this.currentIndex=this.swiper.activeIndex}))}});var F=n(3744);const V=(0,F.Z)(U,[["render",q],["__scopeId","data-v-84b5deda"]]),Z=V,J={components:{IonNav:s.O1,IonPage:s._i},data:function(){return{component:Z}}},G=(0,F.Z)(J,[["render",a]]),Y=G}}]);
//# sourceMappingURL=384.5f7ef35c.js.map