exports.ids=[2],exports.modules={118:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=118},14:function(e,n,t){"use strict";t.r(n);var i,o=t(4),r=t.n(o),u=t(44),a=t.n(u),s=t(137),l=t.n(s),d=t(142);const c=a()();c.use(l()("dev")),c.use(a.a.urlencoded({extended:!1})),c.use(a.a.json()),c.use((e,n,t)=>{if(n.header("Access-Control-Allow-Origin","*"),n.header("Access-Control-Allow-Headers","origin, X-Requested-With,Content-Type,Accept, Authorization"),"OPTIONS"===e.method)return n.header("Access-Control-Allow-Methods","GET PATCH DELETE POST PUT"),n.status(200).json({});t()}),c.use("/",d.a),c.use((e,n,t)=>{const i=new Error("not found");return n.status(404).json({message:i.message})});const h=r.a.createServer(c),f=null!==(i=process.env.PORT)&&void 0!==i?i:8080;h.listen(f,()=>console.log("The server is running on port "+f))},142:function(e,n,t){"use strict";var i=t(44),o=t.n(i),r=t(143);const u=o.a.Router();u.get("/upcoming-days",r.a),u.get("/",(e,n)=>n.status(200).send("Hey there!")),n.a=u},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var i=t(144);const o=async(e,n,t)=>{let o,r=parseInt(e.query.seed),u=parseInt(e.query.hemisphere),a=e.query.date;if(null!=a&&(o=new Date(a)),void 0===o){const e=new Error("wrong format on date");return n.status(400).json({message:e.message})}if(void 0===r||void 0===u||void 0===a){const e=new Error("missing parameters");return n.status(400).json({message:e.message})}const s=[],l=o;for(let e=0;e<35;e++)s.push(new i.a(u,r,l.getFullYear(),l.getMonth()+1,l.getDate())),l.setTime(l.getTime()+864e5);return n.status(200).json({data:JSON.stringify(s)})}},144:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var i,o,r,u=t(35);!function(e){e[e.NoData=0]="NoData",e[e.None=1]="None",e[e.Shower=2]="Shower",e[e.Rainbow=3]="Rainbow",e[e.Aurora=4]="Aurora"}(i||(i={})),function(e){e[e.NotSure=0]="NotSure",e[e.Light=1]="Light",e[e.Heavy=2]="Heavy"}(o||(o={})),function(e){e[e.ClearOrSunny=95]="ClearOrSunny",e[e.SunnyOrCloudy=96]="SunnyOrCloudy",e[e.CloudyOrRainClouds=97]="CloudyOrRainClouds",e[e.NoRain=98]="NoRain",e[e.RainOrHeavyRain=99]="RainOrHeavyRain"}(r||(r={}));u.e.Fine00,u.e.EventDay00;u.f.Fine,u.f.FineCloud,u.f.CloudFine,u.f.FineRain,u.f.EventDay,u.f.Fine,u.f.Cloud,u.f.FineCloud,u.f.FineRain,u.f.CloudFine,u.f.CloudRain,u.f.RainCloud,u.f.EventDay;u.e.CloudFine00,u.e.CloudFine02,u.e.CloudFine01,u.e.FineRain00,u.e.FineRain01,u.e.FineRain03;var a;!function(e){e[e.NoPatterns=0]="NoPatterns",e[e.StarConflict=1]="StarConflict",e[e.SpecialCloudGap=2]="SpecialCloudGap",e[e.SpecialCloudTooLong=3]="SpecialCloudTooLong"}(a||(a={}));const s=[u.f.Fine,u.f.FineCloud,u.f.CloudFine,u.f.FineRain,u.f.EventDay],l=[u.f.Fine,u.f.FineCloud,u.f.CloudFine,u.f.FineRain],d=[u.f.Cloud,u.f.Rain,u.f.FineCloud,u.f.CloudFine,u.f.CloudRain,u.f.RainCloud];class c{get patternName(){return u.e[this.pattern]}hasAuroraAtHour(e){return!(!this.aurora||this.weather[e]!=u.j.Clear)&&(e<=3||e>=18)}hasStarsAtHour(e){return Object(u.k)(e,this.pattern)}get weekday(){return this.date.getDay()}constructor(e,n,t,i,o,r){this.hemisphere=e,this.seed=n,this.year=t,this.month=i,this.day=o,this.forcedPattern=r,this.date=new Date(t,i-1,o),this.patternPreviewMode=null===n;let a=o-1,c=i,h=t,f=o+1,C=i,w=t;0==a&&(c-=1,0==c&&(c=12,h-=1),a=Object(u.q)(h,c)),f>Object(u.q)(w,C)&&(f=1,C+=1,13==C&&(C=1,w+=1)),this.pattern=void 0===r?Object(u.r)(e,n,t,i,o):r,this.constellation=Object(u.o)(i,o),this.specialDay=Object(u.G)(e,t,i,o),this.snowLevel=Object(u.u)(e,i,o),this.spWeatherLevel=Object(u.v)(e,i,o),this.cloudLevel=Object(u.n)(e,i,o),this.fogLevel=Object(u.p)(e,i,o),this.aurora=Object(u.C)(e,i,o,this.pattern),this.lightShower=Object(u.E)(this.pattern),this.heavyShower=Object(u.D)(this.pattern);const F=Object(u.t)(e,n||0,t,i,o,this.pattern);this.rainbowCount=Math.min(F>>>8,null==n?1:2),this.rainbowHour=255&F,this.weather=[],this.windPower=[],this.windPowerMin=[],this.windPowerMax=[],this.specialClouds=[];for(let e=0;e<24;e++)this.weather.push(Object(u.y)(e,this.pattern)),this.windPowerMin.push(Object(u.B)(e,this.pattern)),this.windPowerMax.push(Object(u.A)(e,this.pattern)),null!==n&&this.windPower.push(Object(u.z)(n,t,i,o,e,this.pattern)),this.specialClouds.push(u.h.None);if(this.heavyFog=!1,this.waterFog=!1,this.shootingStars=[],null!==n){const r=Object(u.r)(e,n,h,c,a),F=Object(u.s)(r),R=Object(u.s)(this.pattern);s.includes(F)&&d.includes(R)&&(this.heavyFog=this.windPower[5]<3&&this.windPower[6]<3&&this.windPower[7]<3&&this.windPower[8]<3&&this.fogLevel==u.c.HeavyAndWater),l.includes(F)&&d.includes(R)&&(this.waterFog=this.fogLevel!=u.c.None&&Object(u.l)(n,t,i,o));const g=Object(u.r)(e,n,w,C,f),p=Object(u.w)(e,n||0,t,i,o,this.pattern,g);if(4294967295!==p){const e=p>>>16,n=p>>>8&255,t=255&p,i=e==u.h.Cumulonimbus;let o=!1;for(let r=n;r<=t;r++){const n=this.weather[r%24];if(n==u.j.Clear||n==u.j.Sunny)o=!0,this.specialClouds[r%24]=e;else if(o&&!i)break}}for(let e=0;e<9;e++){const r=Object(u.m)(e);if(Object(u.k)(r,this.pattern))for(let e=0;e<60;e++){const a=Object(u.H)(n,t,i,o,r,e,this.pattern);if(a>0){const n={hour:r,minute:e,seconds:[]};for(let e=0;e<a;e++)n.seconds.push(Object(u.x)(e));this.shootingStars.push(n)}}}}}toJSON(){return{date:[this.year,this.month,this.day],weekday:this.weekday,pattern:u.e[this.pattern],weather:this.weather.map(e=>u.j[e]),windPower:this.windPower,windPowerMin:this.windPowerMin,windPowerMax:this.windPowerMax,specialClouds:this.specialClouds.map(e=>u.h[e]),constellation:u.b[this.constellation],specialDay:u.i[this.specialDay],snowLevel:u.g[this.snowLevel],heavyFog:this.heavyFog,waterFog:this.waterFog,rainbowCount:this.rainbowCount,rainbowHour:this.rainbowHour,aurora:this.aurora,lightShower:this.lightShower,heavyShower:this.heavyShower,shootingStars:this.shootingStars}}}},35:function(e,n,t){"use strict";(function(e){let i;t.d(n,"G",(function(){return r})),t.d(n,"m",(function(){return u})),t.d(n,"I",(function(){return a})),t.d(n,"q",(function(){return s})),t.d(n,"o",(function(){return l})),t.d(n,"u",(function(){return d})),t.d(n,"n",(function(){return c})),t.d(n,"v",(function(){return h})),t.d(n,"p",(function(){return f})),t.d(n,"l",(function(){return C})),t.d(n,"t",(function(){return w})),t.d(n,"C",(function(){return F})),t.d(n,"r",(function(){return R})),t.d(n,"F",(function(){return g})),t.d(n,"y",(function(){return p})),t.d(n,"D",(function(){return y})),t.d(n,"E",(function(){return b})),t.d(n,"w",(function(){return O})),t.d(n,"z",(function(){return v})),t.d(n,"B",(function(){return S})),t.d(n,"A",(function(){return m})),t.d(n,"k",(function(){return j})),t.d(n,"H",(function(){return P})),t.d(n,"x",(function(){return L})),t.d(n,"s",(function(){return N})),t.d(n,"h",(function(){return A})),t.d(n,"d",(function(){return D})),t.d(n,"j",(function(){return H})),t.d(n,"i",(function(){return T})),t.d(n,"g",(function(){return E})),t.d(n,"a",(function(){return M})),t.d(n,"c",(function(){return z})),t.d(n,"b",(function(){return x})),t.d(n,"e",(function(){return W})),t.d(n,"f",(function(){return k}));let o=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();function r(e,n,t,o){return i.isSpecialDay(e,n,t,o)>>>0}function u(e){return i.fromLinearHour(e)}function a(e){return i.toLinearHour(e)}function s(e,n){return i.getMonthLength(e,n)}function l(e,n){return i.getConstellation(e,n)>>>0}function d(e,n,t){return i.getSnowLevel(e,n,t)>>>0}function c(e,n,t){return i.getCloudLevel(e,n,t)>>>0}function h(e,n,t){return i.getSpWeatherLevel(e,n,t)>>>0}function f(e,n,t){return i.getFogLevel(e,n,t)>>>0}function C(e,n,t,o){return 0!==i.checkWaterFog(e,n,t,o)}function w(e,n,t,o,r,u){return i.getRainbowInfo(e,n,t,o,r,u)}function F(e,n,t,o){return 0!==i.isAuroraPattern(e,n,t,o)}function R(e,n,t,o,r){return i.getPattern(e,n,t,o,r)>>>0}function g(e,n,t,o){return 0!==i.isPatternPossibleAtDate(e,n,t,o)}function p(e,n){return i.getWeather(e,n)>>>0}function y(e){return 0!==i.isHeavyShowerPattern(e)}function b(e){return 0!==i.isLightShowerPattern(e)}function O(e,n,t,o,r,u,a){return i.getSpecialCloudInfo(e,n,t,o,r,u,a)>>>0}function v(e,n,t,o,r,u){return i.getWindPower(e,n,t,o,r,u)}function S(e,n){return i.getWindPowerMin(e,n)}function m(e,n){return i.getWindPowerMax(e,n)}function j(e,n){return 0!==i.canHaveShootingStars(e,n)}function P(e,n,t,o,r,u,a){return i.queryStars(e,n,t,o,r,u,a)}function L(e){return i.getStarSecond(e)}function N(e){return i.getPatternKind(e)>>>0}const A=Object.freeze({None:0,0:"None",Cumulonimbus:1,1:"Cumulonimbus",Cirrus:2,2:"Cirrus",Cirrocumulus:3,3:"Cirrocumulus",ThinClouds:4,4:"ThinClouds",BillowClouds:5,5:"BillowClouds"}),D=(Object.freeze({Incomplete:0,0:"Incomplete",Complete:1,1:"Complete",Failed:2,2:"Failed"}),Object.freeze({Northern:0,0:"Northern",Southern:1,1:"Southern"})),H=Object.freeze({Clear:0,0:"Clear",Sunny:1,1:"Sunny",Cloudy:2,2:"Cloudy",RainClouds:3,3:"RainClouds",Rain:4,4:"Rain",HeavyRain:5,5:"HeavyRain"}),T=(Object.freeze({Calm:0,0:"Calm",Land0:1,1:"Land0",Land1:2,2:"Land1",Land2:3,3:"Land2",Sea0:4,4:"Sea0",Sea1:5,5:"Sea1",Sea2:6,6:"Sea2"}),Object.freeze({None:0,0:"None",Easter:1,1:"Easter",FishCon:2,2:"FishCon",InsectCon:3,3:"InsectCon",Countdown:4,4:"Countdown",Fireworks:5,5:"Fireworks"})),E=Object.freeze({None:0,0:"None",Low:1,1:"Low",Full:2,2:"Full"}),M=Object.freeze({None:0,0:"None",Cumulonimbus:1,1:"Cumulonimbus",Cirrus:2,2:"Cirrus",Thin:3,3:"Thin",Billow:4,4:"Billow"}),z=(Object.freeze({None:0,0:"None",Rainbow:1,1:"Rainbow",Aurora:2,2:"Aurora"}),Object.freeze({None:0,0:"None",HeavyAndWater:1,1:"HeavyAndWater",WaterOnly:2,2:"WaterOnly"})),x=Object.freeze({Capricorn:0,0:"Capricorn",Aquarius:1,1:"Aquarius",Pisces:2,2:"Pisces",Aries:3,3:"Aries",Taurus:4,4:"Taurus",Gemini:5,5:"Gemini",Cancer:6,6:"Cancer",Leo:7,7:"Leo",Virgo:8,8:"Virgo",Libra:9,9:"Libra",Scorpio:10,10:"Scorpio",Sagittarius:11,11:"Sagittarius"}),W=Object.freeze({Fine00:0,0:"Fine00",Fine01:1,1:"Fine01",Fine02:2,2:"Fine02",Fine03:3,3:"Fine03",Fine04:4,4:"Fine04",Fine05:5,5:"Fine05",Fine06:6,6:"Fine06",Cloud00:7,7:"Cloud00",Cloud01:8,8:"Cloud01",Cloud02:9,9:"Cloud02",Rain00:10,10:"Rain00",Rain01:11,11:"Rain01",Rain02:12,12:"Rain02",Rain03:13,13:"Rain03",Rain04:14,14:"Rain04",Rain05:15,15:"Rain05",FineCloud00:16,16:"FineCloud00",FineCloud01:17,17:"FineCloud01",FineCloud02:18,18:"FineCloud02",CloudFine00:19,19:"CloudFine00",CloudFine01:20,20:"CloudFine01",CloudFine02:21,21:"CloudFine02",FineRain00:22,22:"FineRain00",FineRain01:23,23:"FineRain01",FineRain02:24,24:"FineRain02",FineRain03:25,25:"FineRain03",CloudRain00:26,26:"CloudRain00",CloudRain01:27,27:"CloudRain01",CloudRain02:28,28:"CloudRain02",RainCloud00:29,29:"RainCloud00",RainCloud01:30,30:"RainCloud01",RainCloud02:31,31:"RainCloud02",Commun00:32,32:"Commun00",EventDay00:33,33:"EventDay00"}),k=Object.freeze({Fine:0,0:"Fine",Cloud:1,1:"Cloud",Rain:2,2:"Rain",FineCloud:3,3:"FineCloud",CloudFine:4,4:"CloudFine",FineRain:5,5:"FineRain",CloudRain:6,6:"CloudRain",RainCloud:7,7:"RainCloud",Commun:8,8:"Commun",EventDay:9,9:"EventDay"})}).call(this,t(145)(e))}};