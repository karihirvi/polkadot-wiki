(self.webpackChunk=self.webpackChunk||[]).push([[8881],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var n=a(74165),s=a(15861),o=a(67294),i=a(92519),r=a(71947),l=a(67425);function c(t,e,a){return u.apply(this,arguments)}function u(){return(u=(0,s.Z)((0,n.Z)().mark((function t(e,a,s){var o,l,c,u,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){t.next=18;break}return t.abrupt("return");case 18:return c=new i.U(o),t.next=21,r.G.create({provider:c});case 21:u=t.sent,(p=a.split(".")).forEach((function(t){t in u&&(u=u[t])})),t.t1=p[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=u.toString(),t.abrupt("break",35);case 29:return t.next=31,u();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+a);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t,e,a,n){switch(e){case"humanReadable":(0,l.HumanReadable)(t,a,n);break;case"precise":(0,l.Precise)(t,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(t,n);break;case"percentage":(0,l.Percentage)(t,n);break;case"arrayLength":(0,l.ArrayLength)(t,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(t){var e=t.network,a=t.path,i=t.defaultValue,r=t.filter,l=void 0===r?void 0:r,u=(0,o.useState)(""),d=u[0],m=u[1];return e=e.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?p(i.toString(),l,e,m):m(i.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://statemine-rpc.polkadot.io/";break;case"statemint":t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(e,a,m);case 2:if(void 0!==(s=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==l?p(s,l,e,m):m(s);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),d}},67425:t=>{var e={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,a,n){var s=void 0;if("polkadot"===a||"statemint"===a)s=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=6}t=parseFloat(t),n((t=Number.isInteger(t/e[a].precision)?t/e[a].precision+" "+e[a].symbol:(t/e[a].precision).toFixed(s)+" "+e[a].symbol).toString())},Precise:function(t,a,n){n(t=(t=parseFloat(t))/e[a].precision+" "+e[a].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},Percentage:function(t,e){e((t/=1e7).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},76590:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),i=a(47940),r=["components"],l={id:"kusama-statemine",title:"Statemine",sidebar_label:"Statemine",description:"Statemine and its features",slug:"../../kusama-statemine"},c=void 0,u={unversionedId:"general/kusama/kusama-statemine",id:"general/kusama/kusama-statemine",title:"Statemine",description:"Statemine and its features",source:"@site/../docs/general/kusama/kusama-statemine.md",sourceDirName:"general/kusama",slug:"/kusama-statemine",permalink:"/docs/kusama-statemine",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-statemine.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1673262926,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"kusama-statemine",title:"Statemine",sidebar_label:"Statemine",description:"Statemine and its features",slug:"../../kusama-statemine"}},p={},d=[{value:"Creating Assets on Statemine",id:"creating-assets-on-statemine",level:2},{value:"Transferring Assets on Statemine",id:"transferring-assets-on-statemine",level:2}],m={toc:d},k="wrapper";function h(t){var e=t.components,l=(0,s.Z)(t,r);return(0,o.kt)(k,(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Statemine is a generic assets parachain that provides functionality for deploying and transferring\nassets \u2014 both Fungible and Non-Fungible Tokens (NFTs). It is a system parachain on Kusama (not to be\nconfused with ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-system-chains#statemint"},"Statemint"),", which is a parachain on\nPolkadot). The native token of Statemine is KSM. Balance transfers and the Existential Deposit (ED)\nof KSM on Statemine are about 1/10th of the values on the Relay chain. For example, the Existential\nDeposit of a Statemine account is\n",(0,o.kt)(i.Z,{network:"statemine",path:"consts.balances.existentialDeposit",defaultValue:3333333,filter:"humanReadable",mdxType:"RPC"}),",\n","\nwhen compared to\n",(0,o.kt)(i.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:33333333,filter:"humanReadable",mdxType:"RPC"}),"\n","\non Kusama. Apart from the core protocol token KSM, the assets held on Statemine can be broadly\ncategorized as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,o.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,o.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,o.kt)("p",null,"For additional background on Statemint and Statemine checkout\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181800-what-is-statemint-and-statemine-and-how-do-i-use-them-"},"this support article"),"."),(0,o.kt)("h2",{id:"creating-assets-on-statemine"},"Creating Assets on Statemine"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before minting assets on Statemine, we recommend that you try out this tutorial on Westmint, which\nis a parachain on Westend. The WND tokens (Westies) are free and are available through a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),".")),(0,o.kt)("p",null,"To create an asset on Statemine, you need a deposit of\n",(0,o.kt)(i.Z,{network:"statemine",path:"consts.assets.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"\n","\nand around\n",(0,o.kt)(i.Z,{network:"statemine",path:"consts.assets.metadataDepositBase",defaultValue:668933304,filter:"humanReadable",mdxType:"RPC"}),"\n","\nfor the metadata. Before you create an asset on Statemine, ensure that your Statemine account\nbalance is a bit more than the sum of those two deposits, which should seamlessly account for the\nrequired deposits and transaction fees. You can send KSM from a Kusama account to a Statemine\naccount using the teleport functionality. For instructions on teleporting KSM, check this\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,o.kt)("p",null,"Assuming you have the required KSM balance on your Statemine account, the following instructions\nshould let you successfully create an asset on Statemine"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Statemine through ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkdot-JS UI"),"."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Navigate to Assets page",src:a(99638).Z,width:"750",height:"230"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator\naccount, name of the asset to be displayed on Statemine, the asset's symbol, number of decimals\nfor the asset, the minimum balance required to hold this asset on a Statemine account and the most\nimportant field of your asset - the unique asset ID. The UI would not let you enter an ID that has\nalready been taken. After all the details are entered, click on the next button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Asset Metadata",src:a(21569).Z,width:"1180",height:"622"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset managing accounts",src:a(64468).Z,width:"1180",height:"404"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction. (If you like to verify the transaction details before signing,\nyou can click on the dropdown button pointed by the arrow in the snapshot below)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:a(55470).Z,width:"1184",height:"478"})),(0,o.kt)("p",null,"If the transaction is successful, you should see the asset and its details displayed in the\nNetwork > Assets page on Statemine."),(0,o.kt)("h2",{id:"transferring-assets-on-statemine"},"Transferring Assets on Statemine"),(0,o.kt)("p",null,"Checkout\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181118-how-to-transfer-tether-usdt-on-statemine"},"this support article"),",\nfor a step by step guide covering how to make a transfer on the Statemine and the risks associated."))}h.isMDXComponent=!0},99638:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-0-c0d765f1c353e064445d3f9c330b6906.png"},21569:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-1-7f4aedc6d554a7cd2c4096e7a945264e.png"},64468:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-2-3fc18f1c44deccb5ac4d110d231db774.png"},55470:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-3-ee5744e11d130f8e61db9e7ce11d9e83.png"},46601:()=>{}}]);