(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("L1EO"),t("JBxO"),t("FdtR");var o=function(n){return new Promise((function(e,t){e(n)}))},i=function(n){return console.log("Resolved after "+n+"ms")};o(2e3).then(i),o(1e3).then(i),o(1500).then(i);t("lmye"),t("D/wG"),t("wCa+");var c=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],a=function(n,e){return new Promise((function(t){t(n.map((function(n){return n.name===e?Object.assign({},n,{active:!n.active}):n})))}))},r=function(n){return console.table(n)};a(c,"Mango").then(r),a(c,"Lux").then(r);var u=function(n){return new Promise((function(e,t){var o,i,c=(o=200,i=500,Math.floor(Math.random()*(i-o+1)+o));setTimeout((function(){var o=Math.random()>.3;o?e(n):o||t(n)}),c)}))},s=function(n){console.log("Transaction "+n.id+" processed in "+n.execution+"ms")},f=function(n){console.warn("Error processing transaction "+n.id+". Please try again later.")};u({id:70,execution:150}).then(s).catch(f),u({id:71,execution:230}).then(s).catch(f),u({id:72,execution:75}).then(s).catch(f),u({id:73,execution:100}).then(s).catch(f)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.5889ca3a354bbd9fcf2f.js.map