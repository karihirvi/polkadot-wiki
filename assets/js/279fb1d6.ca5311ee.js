(self.webpackChunk=self.webpackChunk||[]).push([[6827],{47940:(e,a,t)=>{"use strict";t.d(a,{Z:()=>p});var n=t(74165),r=t(15861),o=t(67294),s=t(87152),i=t(9712),l=t(67425);function d(e,a,t){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)((0,n.Z)().mark((function e(a,t,r){var o,l,d,c,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=a,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return d=new s.U(o),e.next=21,i.G.create({provider:d});case 21:c=e.sent,(u=t.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=c.toString(),e.abrupt("break",35);case 29:return e.next=31,c();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+t);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,a,t,n){switch(a){case"humanReadable":(0,l.HumanReadable)(e,t,n);break;case"precise":(0,l.Precise)(e,t,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,t);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var a=e.network,t=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,c=(0,o.useState)(""),p=c[0],m=c[1];return a=a.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?u(s.toString(),l,a,m):m(s.toString());var e=void 0;switch(a){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+a)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(a,t,m);case 2:if(void 0!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(r,l,a,m):m(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(i){console.log(i)}}}),[]),p}},67425:e=>{var a="polkadot",t="kusama",n="statemine",r="statemint",o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,s,i){var l=void 0;if(s===a||s===r)l=3;else{if(s!==t&&s!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),i((e=Number.isInteger(e/o[s].precision)?e/o[s].precision+" "+o[s].symbol:(e/o[s].precision).toFixed(l)+" "+o[s].symbol).toString())},Precise:function(e,a,t){t(e=(e=parseFloat(e))/o[a].precision+" "+o[a].symbol)},BlocksToDays:function(e,a){a((e=6*e/86400).toString())},ErasToDays:function(e,o,s){var i=void 0;if(s===a||s===r)i=1;else{if(s!==t&&s!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=4}o((e/=i).toString())},Percentage:function(e,a){a((e/=1e7).toString())},PermillToPercent:function(e,a){a((e/=1e4).toString())},ArrayLength:function(e,a){a((e=e.split(",").length).toString())}}},81807:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),s=(t(47940),["components"]),i={id:"kusama-getting-started",title:"Interact with Kusama",sidebar_label:"Home",description:"Reference point for Kusama content.",keywords:["getting started","introduction","kusama","interact"],slug:"../../kusama-getting-started"},l=void 0,d={unversionedId:"general/kusama/kusama-getting-started",id:"general/kusama/kusama-getting-started",title:"Interact with Kusama",description:"Reference point for Kusama content.",source:"@site/../docs/general/kusama/kusama-getting-started.md",sourceDirName:"general/kusama",slug:"/kusama-getting-started",permalink:"/docs/kusama-getting-started",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-getting-started.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1710424605,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{id:"kusama-getting-started",title:"Interact with Kusama",sidebar_label:"Home",description:"Reference point for Kusama content.",keywords:["getting started","introduction","kusama","interact"],slug:"../../kusama-getting-started"}},c={},u=[{value:"Polkadot&#39;s Canary Network",id:"polkadots-canary-network",level:3},{value:"What can I do with my KSM?",id:"what-can-i-do-with-my-ksm",level:3},{value:"Kusama Gifts",id:"kusama-gifts",level:3}],p={toc:u},m="wrapper";function k(e){var a=e.components,t=(0,r.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"polkadots-canary-network"},"Polkadot's Canary Network"),(0,o.kt)("p",null,"Kusama is a ",(0,o.kt)("em",{parentName:"p"},"canary network")," for Polkadot; an earlier release of the code that is available first\nand holds real economic value. For developers, Kusama is a proving ground for runtime upgrades,\non-chain governance, and parachains."),(0,o.kt)("admonition",{title:"No Promises",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Kusama is owned by those who hold the Kusama tokens (KSM). There's no central kill switch and all\nchanges are made through the protocol's on-chain governance."),(0,o.kt)("p",{parentName:"admonition"},"The network is a permissionless and anyone can come along and start using it. Those who participated\nin the Polkadot sale can claim a proportional amount of KSM through the\n",(0,o.kt)("a",{parentName:"p",href:"kusama-claims"},"Kusama Claims process"),"."),(0,o.kt)("p",{parentName:"admonition"},"Kusama is experimental. ",(0,o.kt)("strong",{parentName:"p"},"Expect Chaos"),".")),(0,o.kt)("admonition",{title:"As a KSM holder",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can interact with all the features of the Kusama network such as staking (i.e. validating or\nnominating), governance, parachain auctions, basic transfers and everything else.")),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/learn-accounts"},(0,o.kt)("img",{src:"/img/kusama-guide/Creating an account.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/learn-accounts"},"Accounts"))),(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/learn-transactions"},(0,o.kt)("img",{src:"/img/kusama-guide/Balance Transfers.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/learn-transactions"},"Transactions"))),(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/learn-staking"},(0,o.kt)("img",{src:"/img/kusama-guide/Staking.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/learn-staking"},"Staking")))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/learn-polkadot-opengov"},(0,o.kt)("img",{src:"/img/kusama-guide/Polkadot OpenGov.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/learn-polkadot-opengov"},"Polkadot OpenGov"))),(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/learn-proxies"},(0,o.kt)("img",{src:"/img/kusama-guide/Proxy Accounts.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/learn-proxies"},"Proxy Accounts"))),(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/learn-identity"},(0,o.kt)("img",{src:"/img/kusama-guide/Set an Identity.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/learn-identity"},"Account Identity")))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/learn-parachains"},(0,o.kt)("img",{src:"/img/kusama-guide/Parachains.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/learn-parachains"},"Parachains"))),(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/learn-bridges"},(0,o.kt)("img",{src:"/img/kusama-guide/Bridges.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/learn-bridges"},"Bridges"))),(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/ambassadors"},(0,o.kt)("img",{src:"/img/kusama-guide/Become an Ambassador.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/ambassadors"},"Become an Ambassador")))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/maintain-guides-how-to-nominate-polkadot/"},(0,o.kt)("img",{src:"/img/kusama-guide/Nominate.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/maintain-guides-how-to-nominate-polkadot/"},"Become a Nominator"))),(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/learn-polkadot-opengov-treasury"},(0,o.kt)("img",{src:"/img/kusama-guide/Treasury.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/learn-polkadot-opengov-treasury"},"Treasury"))),(0,o.kt)("div",{className:"col text--center"},(0,o.kt)("a",{href:"../docs/maintain-guides-society-kusama"},(0,o.kt)("img",{src:"/img/kusama-guide/Kusama-Society.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"../docs/maintain-guides-society-kusama"},"Join Kappa Sigma Mu")))),(0,o.kt)("p",null,"For brand-new learners of Kusama's cousin network, Polkadot, please head over to the\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/"},"Polkadot Wiki"),"."),(0,o.kt)("h3",{id:"what-can-i-do-with-my-ksm"},"What can I do with my KSM?"),(0,o.kt)("p",null,"KSM is the native token of the Kusama Network. KSM can be used for transaction fees, staking,\ngovernance, acquisition of a parachain slot and for enabling several key functionalities on Kusama."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"","\nthe minimum balance required to have an active account on Kusama Network. If your account balance\ndrops below the minimum, your account will be reaped. Learn more about\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-accounts"},"Accounts")," and the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-protocol-info#existential-deposit"},"Existential Deposit")," requirement.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"","\nthe minimum contribution required to join a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool")," and earn staking rewards for contributing\nto the security of the network. Learn more about\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pools"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"","\nthe minimum contribution required to participate in ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans"},"crowdloans"),"\nfor ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain slot auctions"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"","\nregister an ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-identity"},"on-chain identity"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"","\ncreate a ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-proxies"},"proxy account"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"","\nyou can create your own ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"","\nthe minimum amount of KSM required to become an active nominator and earn rewards."))),(0,o.kt)("p",null,"KSM has utility in ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"Kusama's OpenGov"),". Bonding KSM is a\nrequirement to create proposals, to endorse them and to vote on them when they become referendums.\nBonding\n","\nor 5% of requested funding is a requirement to make a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-treasury"},"treasury proposal"),"."),(0,o.kt)("h3",{id:"kusama-gifts"},"Kusama Gifts"),(0,o.kt)("img",{align:"right",src:"/img/kusama-guide/Gift.png",width:"210",height:"200"}),(0,o.kt)("p",null,"Kusama Gifts provide an easy way to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Onboard friends or family who are curious about blockchain but haven\u2019t made the leap yet."),(0,o.kt)("li",{parentName:"ul"},"Share your love of Kusama and send any amount of KSM."),(0,o.kt)("li",{parentName:"ul"},"Say \u2018thank you\u2019 or send someone tokens when you don\u2019t know their address."),(0,o.kt)("li",{parentName:"ul"},"Get friends and family set up to participate in crowdloans.")),(0,o.kt)("p",null,"Learn more about how you can create and send Kusama Gifts\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/introducing-polkadot-kusama-gifts/"},"here"),"."),(0,o.kt)("p",null,"While Kusama does not support smart contracts natively, building apps on it is still possible (e.g.\n",(0,o.kt)("a",{parentName:"p",href:"https://rmrk.app"},"RMRK.app"),"). If you're interested in diving deeper into ",(0,o.kt)("em",{parentName:"p"},"proper")," development,\nhowever, check out the ",(0,o.kt)("a",{parentName:"p",href:"build-index"},"builders guide"),"."),(0,o.kt)("p",null,"Additional Resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mooc.web3.foundation/course/blockchain-fundamentals/"},"mooc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/kusama-network-7446706b8f4c"},"medium")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kusama-claims"},"claims")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"maintain-endpoints"},"endpoints")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://claim.kusama.network/"},"tokens")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-kusama"},"validator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-nominator"},"nominator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/"},"polkadot wiki"))))}k.isMDXComponent=!0},46601:()=>{}}]);