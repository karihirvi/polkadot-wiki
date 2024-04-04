(self.webpackChunk=self.webpackChunk||[]).push([[7368],{47940:(a,e,t)=>{"use strict";t.d(e,{Z:()=>h});var o=t(74165),n=t(15861),i=t(67294),r=t(87152),l=t(9712),s=t(67425);function d(a,e,t){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)((0,o.Z)().mark((function a(e,t,n){var i,s,d,c,p;return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=void 0,s=void 0,a.t0=e,a.next="polkadot"===a.t0?5:"kusama"===a.t0?7:"statemine"===a.t0?9:"statemint"===a.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",a.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",a.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",a.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",a.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){a.next=18;break}return a.abrupt("return");case 18:return d=new r.U(i),a.next=21,l.G.create({provider:d});case 21:c=a.sent,(p=t.split(".")).forEach((function(a){a in c&&(c=c[a])})),a.t1=p[0],a.next="consts"===a.t1?27:"query"===a.t1?29:34;break;case 27:return s=c.toString(),a.abrupt("break",35);case 29:return a.next=31,c();case 31:return s=(s=a.sent).toString(),a.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+t);case 35:return a.abrupt("return",s);case 36:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function p(a,e,t,o){switch(e){case"humanReadable":(0,s.HumanReadable)(a,t,o);break;case"precise":(0,s.Precise)(a,t,o);break;case"blocksToDays":(0,s.BlocksToDays)(a,o);break;case"erasToDays":(0,s.ErasToDays)(a,o,t);break;case"percentage":(0,s.Percentage)(a,o);break;case"permillToPercent":(0,s.PermillToPercent)(a,o);break;case"arrayLength":(0,s.ArrayLength)(a,o);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(a){var e=a.network,t=a.path,r=a.defaultValue,l=a.filter,s=void 0===l?void 0:l,c=(0,i.useState)(""),h=c[0],u=c[1];return e=e.toLowerCase(),(0,i.useEffect)((function(){void 0!==s?p(r.toString(),s,e,u):u(r.toString());var a=void 0;switch(e){case"polkadot":a="wss://rpc.polkadot.io";break;case"kusama":a="wss://kusama-rpc.polkadot.io/";break;case"statemine":a="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":a="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===a)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var a=(0,n.Z)((0,o.Z)().mark((function a(){var n;return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d(e,t,u);case 2:if(void 0!==(n=a.sent)){a.next=7;break}return a.abrupt("return");case 7:void 0!==s?p(n,s,e,u):u(n);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{i()}catch(l){console.log(l)}}}),[]),h}},67425:a=>{var e="polkadot",t="kusama",o="statemine",n="statemint",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};a.exports={HumanReadable:function(a,r,l){var s=void 0;if(r===e||r===n)s=3;else{if(r!==t&&r!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=6}a=parseFloat(a),l((a=Number.isInteger(a/i[r].precision)?a/i[r].precision+" "+i[r].symbol:(a/i[r].precision).toFixed(s)+" "+i[r].symbol).toString())},Precise:function(a,e,t){t(a=(a=parseFloat(a))/i[e].precision+" "+i[e].symbol)},BlocksToDays:function(a,e){e((a=6*a/86400).toString())},ErasToDays:function(a,i,r){var l=void 0;if(r===e||r===n)l=1;else{if(r!==t&&r!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=4}i((a/=l).toString())},Percentage:function(a,e){e((a/=1e7).toString())},PermillToPercent:function(a,e){e((a/=1e4).toString())},ArrayLength:function(a,e){e((a=a.split(",").length).toString())}}},49175:(a,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),r=t(47940),l=["components"],s={id:"learn-validator",title:"Validator",sidebar_label:"Validator",description:"Role of Validators within the Polkadot Ecosystem.",keywords:["validate","validator","maintain","NPoS","stake"],slug:"../learn-validator"},d=void 0,c={unversionedId:"learn/learn-validator",id:"learn/learn-validator",title:"Validator",description:"Role of Validators within the Polkadot Ecosystem.",source:"@site/../docs/learn/learn-validator.md",sourceDirName:"learn",slug:"/learn-validator",permalink:"/docs/learn-validator",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-validator.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1711551514,formattedLastUpdatedAt:"Mar 27, 2024",frontMatter:{id:"learn-validator",title:"Validator",sidebar_label:"Validator",description:"Role of Validators within the Polkadot Ecosystem.",keywords:["validate","validator","maintain","NPoS","stake"],slug:"../learn-validator"},sidebar:"docs",previous:{title:"Nominator",permalink:"/docs/learn-nominator"},next:{title:"Components",permalink:"/docs/learn-components-index"}},p={},h=[{value:"Para-validators",id:"para-validators",level:2},{value:"Block Authors",id:"block-authors",level:2},{value:"Other Validators",id:"other-validators",level:2},{value:"Further Readings",id:"further-readings",level:2},{value:"Guides",id:"guides",level:3},{value:"Other References",id:"other-references",level:3},{value:"Security / Key Management",id:"security--key-management",level:3},{value:"Monitoring Tools",id:"monitoring-tools",level:3},{value:"Validator Stats",id:"validator-stats",level:3}],u={toc:h},k="wrapper";function m(a){var e=a.components,t=(0,n.Z)(a,l);return(0,i.kt)(k,(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This page provides a general overview of the role of validators in\nPolkadot. For more detailed information you\ncan read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachain Protocol Overview"),".")),(0,i.kt)("p",null,"Validators secure the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-architecture#relay-chain"},"relay chain")," by staking\nDOT, validating proofs from collators and\nparticipating in consensus with other validators."),(0,i.kt)("p",null,"Validators play a crucial role in adding new blocks to the relay chain and, by extension, to all\nparachains. This allows parties to complete cross-chain transactions via the relay chain. They\nguarantee that each parachain follows its unique rules and can pass messages between shards in a\ntrust-free environment."),(0,i.kt)("h2",{id:"para-validators"},"Para-validators"),(0,i.kt)("p",null,"Parachain validators (i.e. para-validators) participate to the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol/#parachain-phase"},"Parachain Phase of the AnV Protocol"),", and submit\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol/#candidate-receipts"},"candidate receipts")," to the Relay Chain\ntransaction queue so that a block author can include information on the parablock in a fork of of\nthe Relay Chain."),(0,i.kt)("p",null,"Para-validators work in groups and are selected by the runtime in every epoch to validate parachain\nblocks for all parachains connected to the relay chain. The selected para-validators are one of\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.staking.validatorCount",defaultValue:297,mdxType:"RPC"}),"\n","\nvalidators randomly selected (per epoch) to participate in the validation, creating a validator pool\nof 200 para-validators."),(0,i.kt)("p",null,"Para-validators verify that the information contained in an assigned set of parachain blocks is\nvalid. They receive parachain block candidates from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"collators")," together\nwith a Proof-of-Validity (PoV). The para-validators perform the first round of validity checks on\nthe block candidates. Candidates that gather enough signed validity statements are considered\n",(0,i.kt)("em",{parentName:"p"},"backable"),"."),(0,i.kt)("h2",{id:"block-authors"},"Block Authors"),(0,i.kt)("p",null,"There are validators on the Relay Chain who participate in the consensus mechanism to produce the\nrelay chain blocks based on validity statements from other validators. These validators are called\nblock authors, they are selected by ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-consensus/#block-production-babe"},"BABE")," and can note\nup to one backable candidate for each parachain to include in the relay chain. A backable candidate\nincluded in the relay chain is considered ",(0,i.kt)("em",{parentName:"p"},"backed")," in that fork of the chain."),(0,i.kt)("p",null,"In a Relay Chain block, block authors will only include\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol/#candidate-receipts"},"candidate receipts")," that have a parent\ncandidate receipt in an earlier Relay Chain block. This ensures the parachain follows a valid chain.\nAlso, the block authors will only include a receipt for which they have an erasure coding chunk,\nensuring that the system can perform the next round of availability and validity checks."),(0,i.kt)("h2",{id:"other-validators"},"Other Validators"),(0,i.kt)("p",null,"Validators also contribute to the so-called ",(0,i.kt)("strong",{parentName:"p"},"availability distribution"),". In fact, once the\ncandidate is backed in a fork of the relay chain, it is still ",(0,i.kt)("em",{parentName:"p"},"pending availability"),", i.e. it is not\nfully included (only tentative included) as part of the parachain until it is proven available\n(together with the PoV). Information regarding the availability of the candidate will be noted in\nthe following relay chain blocks. Only when there is enough information, the candidate is considered\na full parachain block or ",(0,i.kt)("em",{parentName:"p"},"parablock"),"."),(0,i.kt)("p",null,"Validators also participate in the so-called\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol/#approval-process"},(0,i.kt)("strong",{parentName:"a"},"approval process")),". Once the parablock is\nconsidered available and part of the parachain, it is still ",(0,i.kt)("em",{parentName:"p"},"pending approval"),". Because\npara-validators are a small subset of all validators, there is a risk that by chance the majority of\npara-validators assigned to a parachain might be dishonest. It is thus necessary to run a secondary\nverification of the parablock before it can be considered approved. Having a secondary verification\nstep avoids the allocation of more para-validators that will ultimately reduce the throughput of the\nsystem."),(0,i.kt)("p",null,"Any instances of non-compliance with the consensus algorithms result in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol/#disputes"},(0,i.kt)("strong",{parentName:"a"},"disputes"))," with the punishment of the validators on\nthe wrong side by removing some or all their staked\nDOT, thereby discouraging bad actors. Good\nperformance, however, will be rewarded, with validators receiving block rewards (including\ntransaction fees) in the form of DOT in exchange\nfor their activities."),(0,i.kt)("p",null,"Finally, validators participate in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol/#chain-selection"},"chain selection process within GRANDPA"),", ensuring\nthat only available and valid blocks end within the finalized Relay Chain."),(0,i.kt)("admonition",{title:"Within an era roles can change",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Within the same era, a Validator can be a para-validator, block author, and participate in the\navailability distribution or the approval process. Those roles can change between sessions.")),(0,i.kt)("h2",{id:"further-readings"},"Further Readings"),(0,i.kt)("h3",{id:"guides"},"Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-polkadot"},"How to Validate on Polkadot")," - Guide on\nhow to set up a validator on the Polkadot live network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-validator-payout"},"Validator Payout Overview")," - A short overview on\nhow the validator payout mechanism works."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-systemd"},"How to run your validator as a systemd process")," -\nGuide on running your validator as a ",(0,i.kt)("inlineCode",{parentName:"li"},"systemd")," process so that it will run in the background and\nstart automatically on reboots."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-upgrade"},"How to Upgrade your Validator")," - Guide for\nsecurely upgrading your validator when you want to switch to a different machine or begin running\nthe latest version of client code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-polkadot"},"How to Use Validator Setup")," - Guide on\nhow to use Polkadot / Kusama validator setup.")),(0,i.kt)("h3",{id:"other-references"},"Other References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@acvlls/setting-up-a-maintain-the-easy-way-3a885283091f"},"How to run a Polkadot node (Docker)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/a-serverless-failover-solution-for-web-3-0-validator-nodes-e26b9d24c71d"},"A Serverless Failover Solution for Web3.0 Validator Nodes")," -\nBlog that details how to create a robust failover solution for running validators."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-kusama##vps-list"},"VPS list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.parity.io?via=matrix.parity.io&via=matrix.org&via=web3.foundation"},"Polkadot Validator Lounge")," -\nA place to chat about being a validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"learn-staking#slashing"},"Slashing Consequences")," - Learn more about slashing consequences for\nrunning a validator node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0EmP0s6JOW4&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=2"},"Why You Should be A Validator on Polkadot and Kusama")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=riVg_Up_fCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=15"},"Roles and Responsibilities of a Validator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/validating-on-polkadot"},"Validating on Polkadot")," - An explanation of\nhow to validate on Polkadot, with Joe Petrowski and David Dorgan of Parity Technologies, along\nwith Tim Ogilvie from Staked.")),(0,i.kt)("h3",{id:"security--key-management"},"Security / Key Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/validator-security"},"Validator Security Overview"))),(0,i.kt)("h3",{id:"monitoring-tools"},"Monitoring Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_polkadot"},"PANIC for Polkadot")," - A monitoring and alerting\nsolution for Polkadot / Kusama node"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/#list/Kusama%20CC3"},"Polkadot Telemetry Service")," - Network\ninformation, including what nodes are running on a given chain, what software versions they are\nrunning, and sync status.")),(0,i.kt)("h3",{id:"validator-stats"},"Validator Stats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkacube.hashquark.io/#/polkadot/strategy"},"HashQuark Staking Strategy")," - The HashQuark\nstaking strategy dashboard helps you choose the optimal set-up to maximize rewards, and provides\nother useful network monitoring tools."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkastats.io/"},"Polkastats")," - Polkastats is a cleanly designed dashboard for validator\nstatistics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yieldscan.app/"},"YieldScan")," - Staking yield maximization platform, designed to minimize\neffort."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kusama.subscan.io/validator"},"Subscan Validators Page")," - Displays information on the\ncurrent validators - not as tailored for validators as the other sites.")))}m.isMDXComponent=!0},46601:()=>{}}]);