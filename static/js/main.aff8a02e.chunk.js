(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,t,a){e.exports={label:"Profile_label__36WLm",profile:"Profile_profile__3jrRv",stats:"Profile_stats__23rig",quantity:"Profile_quantity__3gNyz",description:"Profile_description__29iOM"}},,function(e,t,a){e.exports={statistics:"Statistics_statistics__C1ybn",item:"Statistics_item__1wA9u",statList:"Statistics_statList__PQBNW"}},function(e,t,a){e.exports={status:"FriendListItem_status__2sSyj",isOnline:"FriendListItem_isOnline__2lyxc",isOffline:"FriendListItem_isOffline__2u28Q"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,t,a){e.exports={transactionHistory:"TransactionHistory_transactionHistory__330sS"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),i=a(7),s=a.n(i),r=(a(18),a(1)),d=a(12),l=a(2),o=a.n(l),b=a(0),p=function(e){var t=e.name,a=e.tag,c=e.location,n=e.avatar,i=e.stats,s=Object.entries(i).map((function(e){var t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:o.a.label,children:a}),Object(b.jsx)("span",{className:o.a.quantity,children:c})]},a)}));return Object(b.jsxs)("div",{className:o.a.profile,children:[Object(b.jsxs)("div",{className:o.a.description,children:[Object(b.jsx)("img",{src:n,alt:t,className:"avatar"}),Object(b.jsx)("p",{className:"name",children:t}),Object(b.jsx)("p",{className:"tag",children:a}),Object(b.jsx)("p",{className:"location",children:c})]}),Object(b.jsx)("ul",{className:o.a.stats,children:s})]})},u=a(4),m=a.n(u),j=function(e){var t=e.stats,a=e.title;function c(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}return Object(b.jsxs)("section",{className:m.a.statistics,children:[a&&Object(b.jsx)("h2",{className:m.a.title,children:a}),Object(b.jsx)("ul",{className:m.a.statList,children:t.map((function(e){return Object(b.jsxs)("li",{className:m.a.item,style:{background:c()},children:[Object(b.jsx)("span",{className:"label",children:e.label}),Object(b.jsx)("span",{className:"percentage",children:e.percentage})]},e.id)}))})]})},f=a(8),O=a(9),y=a(5),h=a.n(y),x=function(e){var t=e.isOnline,a=e.avatar,c=e.name;return Object(b.jsxs)("li",{className:"item",children:[Object(b.jsx)("span",{className:"".concat(h.a.status," ").concat(t?h.a.isOnline:h.a.isOffline)}),Object(b.jsx)("img",{className:"avatar",src:a,alt:c,width:"48"}),Object(b.jsx)("p",{className:"name",children:c})]})},v=function(e){var t=e.friends.map((function(e){return Object(b.jsx)(x,{name:e.name,avatar:e.avatar,isOnline:e.isOnline},e.id)}));return Object(b.jsx)("ul",{className:"friend-list",children:t},"1")},_=a(10),g=a(13),N=function(e){var t=e.type,a=e.amount,c=e.currency;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t}),Object(b.jsx)("td",{children:a}),Object(b.jsx)("td",{children:c})]})},w=a(11),S=a.n(w),L=function(e){var t=e.items;return Object(b.jsxs)("table",{className:S.a.transactionHistory,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Type"}),Object(b.jsx)("th",{children:"Amount"}),Object(b.jsx)("th",{children:"Currency"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(N,Object(g.a)({},e),e.id)}))})]})};var P=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{name:r.name,tag:r.tag,location:r.location,avatar:r.avatar,stats:r.stats}),Object(b.jsx)(j,{title:"Upload Stats",stats:f}),";",Object(b.jsx)(v,{friends:O}),Object(b.jsx)(L,{items:_})]})};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.aff8a02e.chunk.js.map