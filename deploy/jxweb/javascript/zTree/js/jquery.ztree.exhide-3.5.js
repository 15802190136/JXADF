!function(e){var i=function(e,i,t){"string"==typeof t.isHidden&&(t.isHidden=a.eqs(t.isHidden,"true")),t.isHidden=!!t.isHidden,h.initHideForExCheck(e,t)},t=function(){},d=function(e,i){i.showNodes=function(i,t){c.showNodes(e,i,t)},i.showNode=function(i,t){i&&c.showNodes(e,[i],t)},i.hideNodes=function(i,t){c.hideNodes(e,i,t)},i.hideNode=function(i,t){i&&c.hideNodes(e,[i],t)};var t=i.checkNode;t&&(i.checkNode=function(e){e&&e.isHidden||t.apply(i,arguments)})},o={initHideForExCheck:function(e,i){i.isHidden&&e.check&&e.check.enable&&("undefined"==typeof i._nocheck&&(i._nocheck=!!i.nocheck,i.nocheck=!0),i.check_Child_State=-1,c.repairParentChkClassWithSelf&&c.repairParentChkClassWithSelf(e,i))},initShowForExCheck:function(e,i){if(!i.isHidden&&e.check&&e.check.enable){if("undefined"!=typeof i._nocheck&&(i.nocheck=i._nocheck,delete i._nocheck),c.setChkClass){var t=l(i,N.id.CHECK,e);c.setChkClass(e,t,i)}c.repairParentChkClassWithSelf&&c.repairParentChkClassWithSelf(e,i)}}},s={clearOldFirstNode:function(e,i){for(var t=i.getNextNode();t;){if(t.isFirstNode){t.isFirstNode=!1,c.setNodeLineIcos(e,t);break}if(t.isLastNode)break;t=t.getNextNode()}},clearOldLastNode:function(e,i){for(var t=i.getPreNode();t;){if(t.isLastNode){t.isLastNode=!1,c.setNodeLineIcos(e,t);break}if(t.isFirstNode)break;t=t.getPreNode()}},makeDOMNodeMainBefore:function(e,i,t){e.push("<li ",t.isHidden?"style='display:none;' ":"","id='",t.tId,"' class='",N.className.LEVEL,t.level,"' tabindex='0' hidefocus='true' treenode>")},showNode:function(e,i){i.isHidden=!1,h.initShowForExCheck(e,i),l(i,e).show()},showNodes:function(e,i,t){if(i&&0!=i.length){var d,o,s={};for(d=0,o=i.length;o>d;d++){var n=i[d];if(!s[n.parentTId]){var r=n.getParentNode();s[n.parentTId]=null===r?h.getRoot(e):n.getParentNode()}c.showNode(e,n,t)}for(var a in s){var N=s[a][e.data.key.children];c.setFirstNodeForShow(e,N),c.setLastNodeForShow(e,N)}}},hideNode:function(e,i){i.isHidden=!0,i.isFirstNode=!1,i.isLastNode=!1,h.initHideForExCheck(e,i),c.cancelPreSelectedNode(e,i),l(i,e).hide()},hideNodes:function(e,i,t){if(i&&0!=i.length){var d,o,s={};for(d=0,o=i.length;o>d;d++){var n=i[d];if((n.isFirstNode||n.isLastNode)&&!s[n.parentTId]){var r=n.getParentNode();s[n.parentTId]=null===r?h.getRoot(e):n.getParentNode()}c.hideNode(e,n,t)}for(var a in s){var N=s[a][e.data.key.children];c.setFirstNodeForHide(e,N),c.setLastNodeForHide(e,N)}}},setFirstNode:function(e,i){var t=e.data.key.children,d=i[t].length;d>0&&!i[t][0].isHidden?i[t][0].isFirstNode=!0:d>0&&c.setFirstNodeForHide(e,i[t])},setLastNode:function(e,i){var t=e.data.key.children,d=i[t].length;d>0&&!i[t][0].isHidden?i[t][d-1].isLastNode=!0:d>0&&c.setLastNodeForHide(e,i[t])},setFirstNodeForHide:function(e,i){var t,d,o;for(d=0,o=i.length;o>d&&(t=i[d],!t.isFirstNode);d++){if(!t.isHidden&&!t.isFirstNode){t.isFirstNode=!0,c.setNodeLineIcos(e,t);break}t=null}return t},setFirstNodeForShow:function(e,i){var t,d,o,s,n;for(d=0,o=i.length;o>d;d++){if(t=i[d],!s&&!t.isHidden&&t.isFirstNode){s=t;break}if(s||t.isHidden||t.isFirstNode){if(s&&t.isFirstNode){t.isFirstNode=!1,n=t,c.setNodeLineIcos(e,t);break}t=null}else t.isFirstNode=!0,s=t,c.setNodeLineIcos(e,t)}return{"new":s,old:n}},setLastNodeForHide:function(e,i){var t,d;for(d=i.length-1;d>=0&&(t=i[d],!t.isLastNode);d--){if(!t.isHidden&&!t.isLastNode){t.isLastNode=!0,c.setNodeLineIcos(e,t);break}t=null}return t},setLastNodeForShow:function(e,i){var t,d,o,s;for(d=i.length-1;d>=0;d--){if(t=i[d],!o&&!t.isHidden&&t.isLastNode){o=t;break}if(o||t.isHidden||t.isLastNode){if(o&&t.isLastNode){t.isLastNode=!1,s=t,c.setNodeLineIcos(e,t);break}t=null}else t.isLastNode=!0,o=t,c.setNodeLineIcos(e,t)}return{"new":o,old:s}}},n={view:s,data:o};e.extend(!0,e.fn.zTree._z,n);var r=e.fn.zTree,a=r._z.tools,N=r.consts,c=r._z.view,h=r._z.data,l=(r._z.event,a.$);h.addInitNode(i),h.addBeforeA(t),h.addZTreeTools(d);var f=h.initNode;h.tmpHideParent=-1,h.initNode=function(e,i,t,d,o,s){if(h.tmpHideParent!==d){h.tmpHideParent=null==d?-1:d;var n=d?d:h.getRoot(e),r=n[e.data.key.children];h.tmpHideFirstNode=c.setFirstNodeForHide(e,r),h.tmpHideLastNode=c.setLastNodeForHide(e,r),c.setNodeLineIcos(e,h.tmpHideFirstNode),c.setNodeLineIcos(e,h.tmpHideLastNode)}o=h.tmpHideFirstNode===t,s=h.tmpHideLastNode===t,f&&f.apply(h,arguments),s&&c.clearOldLastNode(e,t)};var u=h.makeChkFlag;u&&(h.makeChkFlag=function(e,i){i&&i.isHidden||u.apply(h,arguments)});var k=h.getTreeCheckedNodes;k&&(h.getTreeCheckedNodes=function(e,i){if(i&&i.length>0){var t=i[0].getParentNode();if(t&&t.isHidden)return[]}return k.apply(h,arguments)});var H=h.getTreeChangeCheckedNodes;H&&(h.getTreeChangeCheckedNodes=function(e,i){if(i&&i.length>0){var t=i[0].getParentNode();if(t&&t.isHidden)return[]}return H.apply(h,arguments)});var p=c.expandCollapseSonNode;p&&(c.expandCollapseSonNode=function(e,i){i&&i.isHidden||p.apply(c,arguments)});var F=c.setSonNodeCheckBox;F&&(c.setSonNodeCheckBox=function(e,i){i&&i.isHidden||F.apply(c,arguments)});var g=c.repairParentChkClassWithSelf;g&&(c.repairParentChkClassWithSelf=function(e,i){i&&i.isHidden||g.apply(c,arguments)})}(jQuery);