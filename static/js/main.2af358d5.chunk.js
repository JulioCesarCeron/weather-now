(this["webpackJsonpweather-now"]=this["webpackJsonpweather-now"]||[]).push([[0],{1:function(e,a,t){e.exports={card:"WeatherCard_card__3v955",header:"WeatherCard_header__1QQCK",main:"WeatherCard_main__1dei7",temperature:"WeatherCard_temperature__Mnppv",cold:"WeatherCard_cold__2JND7",medium:"WeatherCard_medium__3YcJO",hot:"WeatherCard_hot__534yN",footer:"WeatherCard_footer__2PAnV","footer-loading":"WeatherCard_footer-loading__18mfm","main-footer-loading":"WeatherCard_main-footer-loading__27l-8","content-footer":"WeatherCard_content-footer__3JicL","wrapper-content-footer":"WeatherCard_wrapper-content-footer__14hv3","value-indicator":"WeatherCard_value-indicator__1G4_o","info-update":"WeatherCard_info-update__rM3lT","wrapper-error-message":"WeatherCard_wrapper-error-message__3ML3Q","card-order":"WeatherCard_card-order__21hHo"}},17:function(e,a,t){e.exports=t.p+"static/media/logo.45377fd6.svg"},21:function(e,a,t){e.exports=t.p+"static/media/loader.d542c686.svg"},22:function(e,a,t){e.exports=t(46)},27:function(e,a,t){},3:function(e,a,t){e.exports={container:"Main_container__E2cZj","wrapper-weather":"Main_wrapper-weather__1b7RP","wrapper-weather-cards":"Main_wrapper-weather-cards__1dPiJ"}},46:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(16),o=t.n(c),i=(t(27),t(3)),l=t.n(i),s=t(17),m=t.n(s),u=t(5),d=t.n(u),p=function(){return n.a.createElement("div",{className:d.a.container},n.a.createElement("img",{src:m.a,className:d.a.logo,alt:"logo"}))},f=t(6),h=t.n(f),_=t(18),w=t(19),g=t(4),v=t(1),E=t.n(v),y=t(20),b=t.n(y),O=t(21),N=t.n(O);function C(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?C(t,!0).forEach((function(a){Object(w.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var W=function(e){var a=e.main,t=e.city,c=e.country,o=Object(r.useState)(!1),i=Object(g.a)(o,2),l=i[0],s=i[1],m=Object(r.useState)(""),u=Object(g.a)(m,2),d=u[0],p=u[1],f=Object(r.useState)({temp:"",humidity:"",pressure:"",date:""}),w=Object(g.a)(f,2),v=w[0],y=w[1],O=Object(r.useCallback)((function(){s(!0);var e,a=function(e,a){return"https://api.openweathermap.org/data/2.5/weather?q=".concat(e,",").concat(a,"&APPID=").concat("8561a5b7b131a9f8f6f5996bf4bb2c07")}(t,c);(e=a,b.a.get(e)).then((function(e){var a,r,n={temp:(a=e.data.main.temp,(a-273.15).toFixed(0)),humidity:e.data.main.humidity,pressure:e.data.main.pressure,date:new Date};y(j({},n)),r={city:t,country:c,weather:n},localStorage.setItem("".concat(r.city).concat(r.country).toLowerCase(),JSON.stringify(r.weather)),s(!1)})).catch((function(e){p(e)}))}),[t,c]),C=Object(r.useCallback)((function(e){var a=JSON.parse(e);(function(e){var a=new Date(e.date);return(((new Date).getTime()-a.getTime())/1e3/60).toFixed()})(a)>10?O():y(j({},a))}),[O]);Object(r.useEffect)((function(){var e=function(){var e=Object(_.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r={city:t,country:c},localStorage.getItem("".concat(r.city).concat(r.country).toLowerCase());case 2:(a=e.sent)?C(a):O();case 4:case"end":return e.stop()}var r}),e)})));return function(){return e.apply(this,arguments)}}();e(),setInterval((function(){return e()}),3e3)}),[t,c,O,C]);var W,P,S=l?n.a.createElement("img",{src:N.a,className:E.a.logo,alt:"logo"}):n.a.createElement("p",{className:"".concat(E.a.temperature," ").concat(E.a[(W=v.temp,W<=5?"cold":W>5&&W<=25?"medium":"hot")])},v.temp,"\xba"),D=n.a.createElement("div",{className:E.a["wrapper-error-message"]},n.a.createElement("p",null,"Someting went wrong"),n.a.createElement("button",{onClick:function(){return 1}},"Try Again"));return n.a.createElement("div",{className:"".concat(E.a.card," ").concat(a&&E.a["card-order"])},n.a.createElement("header",{className:E.a.header},n.a.createElement("h3",null,"".concat(t,", ").concat(c))),n.a.createElement("main",{className:E.a.main},d?D:S),n.a.createElement("footer",{className:"".concat(l?E.a["footer-loading"]:E.a.footer," ").concat(a&&l&&E.a["main-footer-loading"])},a&&!l&&n.a.createElement("div",{className:E.a["wrapper-content-footer"]},n.a.createElement("div",{className:E.a["content-footer"]},n.a.createElement("p",null,"HUMIDITY"),n.a.createElement("p",{className:E.a["value-indicator"]},v.humidity,n.a.createElement("small",null,"%"))),n.a.createElement("div",{className:E.a["content-footer"]},n.a.createElement("p",null,"PRESSURE"),n.a.createElement("p",{className:E.a["value-indicator"]},v.pressure,n.a.createElement("small",null,"hPa")))),!l&&n.a.createElement("p",{className:E.a["info-update"]},"Updated at ",(P=v.date)?new Date(P).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):"")))};var P=function(){return n.a.createElement("main",{className:l.a.container},n.a.createElement(p,null),n.a.createElement("div",{className:l.a["wrapper-weather"]},n.a.createElement("hr",null),n.a.createElement("section",{className:l.a["wrapper-weather-cards"]},n.a.createElement(W,{city:"Nuuk",country:"GL"}),n.a.createElement(W,{main:!0,city:"Urubici",country:"BR"}),n.a.createElement(W,{city:"Nairobi",country:"KE"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,a,t){e.exports={container:"Header_container__27QFJ",logo:"Header_logo__3EvUy"}}},[[22,1,2]]]);
//# sourceMappingURL=main.2af358d5.chunk.js.map