!function(t){function i(t,i,o){for(var a,e=4,n=[];e--;)a=i.rgba[e]+(t.rgba[e]-i.rgba[e])*(1-o),n[e]=3===e?a:Math.round(a);return"rgba("+n.join(",")+")"}function o(t,i,o,a,e,n,s,r,l){var h=t["stroke-width"]%2/2;return i-=h,o-=h,["M",i+n,o,"L",i+a-s,o,"C",i+a-s/2,o,i+a,o+s/2,i+a,o+s,"L",i+a,o+e-r,"C",i+a,o+e-r/2,i+a-r/2,o+e,i+a-r,o+e,"L",i+l,o+e,"C",i+l/2,o+e,i,o+e-l/2,i,o+e-l,"L",i,o+n,"C",i,o+n/2,i+n/2,o,i+n,o,"Z"]}var a,e=t.Axis,n=t.Chart,s=t.Color,r=t.Point,l=t.Pointer,h=t.Legend,p=t.Series,c=t.SVGRenderer,m=t.VMLRenderer,d=c.prototype.symbols,u=t.each,x=t.extend,g=t.extendClass,f=t.merge,y=t.pick,b=t.numberFormat,v=t.getOptions(),A=t.seriesTypes,M=v.plotOptions,C=t.wrap,w=function(){};x(v.lang,{zoomIn:"Zoom in",zoomOut:"Zoom out"}),v.mapNavigation={buttonOptions:{alignTo:"plotBox",align:"left",verticalAlign:"top",x:0,width:18,height:18,style:{fontSize:"15px",fontWeight:"bold",textAlign:"center"},theme:{"stroke-width":1}},buttons:{zoomIn:{onclick:function(){this.mapZoom(.5)},text:"+",y:0},zoomOut:{onclick:function(){this.mapZoom(2)},text:"-",y:28}}},t.splitPath=function(t){var i;for(t=t.replace(/([A-Za-z])/g," $1 "),t=t.replace(/^\s*/,"").replace(/\s*$/,""),t=t.split(/[ ,]+/),i=0;i<t.length;i++)/[a-zA-Z]/.test(t[i])||(t[i]=parseFloat(t[i]));return t},t.maps={},C(e.prototype,"getSeriesExtremes",function(t){var i,o,a=this.isXAxis,e=[];a&&u(this.series,function(t,i){t.useMapGeometry&&(e[i]=t.xData,t.xData=[])}),t.call(this),a&&(i=y(this.dataMin,Number.MAX_VALUE),o=y(this.dataMax,Number.MIN_VALUE),u(this.series,function(t,a){t.useMapGeometry&&(i=Math.min(i,y(t.minX,i)),o=Math.max(o,y(t.maxX,i)),t.xData=e[a])}),this.dataMin=i,this.dataMax=o)}),C(e.prototype,"setAxisTranslation",function(t){var i,o,e,n,s,r=this.chart,l=r.plotWidth/r.plotHeight,h=r.xAxis[0];t.call(this),r.options.chart.preserveAspectRatio&&"yAxis"===this.coll&&h.transA!==a&&(this.transA=h.transA=Math.min(this.transA,h.transA),i=r.mapRatio=l/((h.max-h.min)/(this.max-this.min)),e=1>i?this:h,o=(e.max-e.min)*e.transA,e.pixelPadding=e.len-o,e.minPixelPadding=e.pixelPadding/2,n=e.fixTo,n&&(s=n[1]-e.toValue(n[0],!0),s*=e.transA,Math.abs(s)>e.minPixelPadding&&(s=0),e.minPixelPadding-=s))}),C(e.prototype,"render",function(t){t.call(this),this.fixTo=null}),x(l.prototype,{onContainerDblClick:function(t){var i=this.chart;t=this.normalize(t),i.options.mapNavigation.enableDoubleClickZoomTo?i.pointer.inClass(t.target,"highcharts-tracker")&&i.hoverPoint.zoomTo():i.isInsidePlot(t.chartX-i.plotLeft,t.chartY-i.plotTop)&&i.mapZoom(.5,i.xAxis[0].toValue(t.chartX),i.yAxis[0].toValue(t.chartY),t.chartX,t.chartY)},onContainerMouseWheel:function(t){var i,o=this.chart;t=this.normalize(t),i=t.detail||-(t.wheelDelta/120),o.isInsidePlot(t.chartX-o.plotLeft,t.chartY-o.plotTop)&&o.mapZoom(i>0?2:.5,o.xAxis[0].toValue(t.chartX),o.yAxis[0].toValue(t.chartY),i>0?void 0:t.chartX,i>0?void 0:t.chartY)}}),C(l.prototype,"init",function(t,i,o){t.call(this,i,o),y(o.mapNavigation.enableTouchZoom,o.mapNavigation.enabled)&&(this.pinchX=this.pinchHor=this.pinchY=this.pinchVert=!0)}),C(l.prototype,"pinchTranslate",function(t,i,o,a,e,n,s,r,l){var h;t.call(this,i,o,a,e,n,s,r,l),"map"===this.chart.options.chart.type&&(h=n.scaleX>n.scaleY,this.pinchTranslateDirection(!h,a,e,n,s,r,l,h?n.scaleX:n.scaleY))});var L=t.ColorAxis=function(){this.init.apply(this,arguments)};x(L.prototype,e.prototype),x(L.prototype,{defaultColorAxisOptions:{lineWidth:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},color:"gray",width:.01},labels:{overflow:"justify"},minColor:"#EFEFFF",maxColor:"#102d4c"},init:function(t,i){var o,a="vertical"!==t.options.legend.layout;o=f(this.defaultColorAxisOptions,{side:a?2:1,reversed:!a},i,{isX:a,opposite:!a,showEmpty:!1,title:null}),e.prototype.init.call(this,t,o),i.dataClasses&&this.initDataClasses(i),this.isXAxis=!0,this.horiz=a},initDataClasses:function(t){var o,a=this.chart,e=0,n=this.options;this.dataClasses=o=[],u(t.dataClasses,function(r,l){var h;r=f(r),o.push(r),r.color||("category"===n.dataClassColor?(h=a.options.colors,r.color=h[e++],e===h.length&&(e=0)):r.color=i(s(n.minColor),s(n.maxColor),l/(t.dataClasses.length-1)))})},setOptions:function(t){e.prototype.setOptions.call(this,t),this.options.crosshair=this.options.marker,this.stops=t.stops||[[0,this.options.minColor],[1,this.options.maxColor]],u(this.stops,function(t){t.color=s(t[1])}),this.coll="colorAxis"},setAxisSize:function(){var t=this.legendSymbol,i=this.chart;t&&(this.left=t.x,this.top=t.y,this.width=t.width,this.height=t.height,this.right=i.chartWidth-this.left-this.width,this.bottom=i.chartHeight-this.top-this.height,this.len=this.horiz?this.width:this.height,this.pos=this.horiz?this.left:this.top)},toColor:function(t,o){var e,n,s,r,l,h,p=this.stops,c=this.dataClasses;if(c){for(h=c.length;h--;)if(l=c[h],n=l.from,s=l.to,(n===a||t>=n)&&(s===a||s>=t)){r=l.color,o&&(o.dataClass=h);break}}else{for(this.isLog&&(t=this.val2lin(t)),e=1-(this.max-t)/(this.max-this.min),h=p.length;h--&&!(e>p[h][0]););n=p[h]||p[h+1],s=p[h+1]||n,e=1-(s[0]-e)/(s[0]-n[0]||1),r=i(n.color,s.color,e)}return r},getOffset:function(){var t=this.legendGroup;t&&(e.prototype.getOffset.call(this),this.axisGroup.parentGroup||(this.axisGroup.add(t),this.gridGroup.add(t),this.labelGroup.add(t),this.added=!0))},setLegendColor:function(){var t,i=this.horiz,o=this.options;t=i?[0,0,1,0]:[0,0,0,1],this.legendColor={linearGradient:{x1:t[0],y1:t[1],x2:t[2],y2:t[3]},stops:o.stops||[[0,o.minColor],[1,o.maxColor]]}},drawLegendSymbol:function(t,i){var o,a=t.padding,e=t.options,n=this.horiz,s=y(e.symbolWidth,n?200:12),r=y(e.symbolHeight,n?12:200),l=y(e.labelPadding,n?10:30);this.setLegendColor(),i.legendSymbol=this.chart.renderer.rect(0,t.baseline-11,s,r).attr({zIndex:1}).add(i.legendGroup),o=i.legendSymbol.getBBox(),this.legendItemWidth=s+a+(n?0:l),this.legendItemHeight=r+a+(n?l:0)},setState:w,visible:!0,setVisible:w,getSeriesExtremes:function(){var t;this.series.length&&(t=this.series[0],this.dataMin=t.valueMin,this.dataMax=t.valueMax)},drawCrosshair:function(t,i){var o,a=!this.cross,n=i&&i.plotX,s=i&&i.plotY,r=this.pos,l=this.len;i&&(o=this.toPixels(i.value),r>o?o=r-2:o>r+l&&(o=r+l+2),i.plotX=o,i.plotY=this.len-o,e.prototype.drawCrosshair.call(this,t,i),i.plotX=n,i.plotY=s,!a&&this.cross&&this.cross.attr({fill:this.crosshair.color}).add(this.labelGroup))},getPlotLinePath:function(t,i,o,a,n){return n?this.horiz?["M",n-4,this.top-6,"L",n+4,this.top-6,n,this.top,"Z"]:["M",this.left,n,"L",this.left-6,n+6,this.left-6,n-6,"Z"]:e.prototype.getPlotLinePath.call(this,t,i,o,a)},update:function(t,i){e.prototype.update.call(this,t,i),this.legendItem&&(this.setLegendColor(),this.chart.legend.colorizeItem(this,!0))},getDataClassLegendSymbols:function(){var i,o=this,e=this.chart,n=[],s=e.options.legend,r=s.valueDecimals,l=s.valueSuffix||"";return u(this.dataClasses,function(s,h){var p=!0,c=s.from,m=s.to;i="",c===a?i="< ":m===a&&(i="> "),c!==a&&(i+=b(c,r)+l),c!==a&&m!==a&&(i+=" - "),m!==a&&(i+=b(m,r)+l),n.push(t.extend({chart:e,name:i,options:{},drawLegendSymbol:t.LegendSymbolMixin.drawRectangle,visible:!0,setState:w,setVisible:function(){p=this.visible=!p,u(o.series,function(t){u(t.points,function(t){t.dataClass===h&&t.setVisible(p)})}),e.legend.colorizeItem(this,p)}},s))}),n}}),C(h.prototype,"getAllItems",function(t){var i=[],o=this.chart.colorAxis[0];return o&&(o.options.dataClasses?i=i.concat(o.getDataClassLegendSymbols()):i.push(o),u(o.series,function(t){t.options.showInLegend=!1})),i.concat(t.call(this))}),x(n.prototype,{renderMapNavigation:function(){var t,i,o,a,e,n=this,s=this.options.mapNavigation,r=s.buttons,l=function(){this.handler.call(n)};if(y(s.enableButtons,s.enabled)&&!n.renderer.forExport)for(t in r)r.hasOwnProperty(t)&&(o=f(s.buttonOptions,r[t]),a=o.theme,e=a.states,i=n.renderer.button(o.text,0,0,l,a,e&&e.hover,e&&e.select,0,"zoomIn"===t?"topbutton":"bottombutton").attr({width:o.width,height:o.height,title:n.options.lang[t],zIndex:5}).css(o.style).add(),i.handler=o.onclick,i.align(x(o,{width:i.width,height:2*i.height}),null,o.alignTo))},fitToBox:function(t,i){return u([["x","width"],["y","height"]],function(o){var a=o[0],e=o[1];t[a]+t[e]>i[a]+i[e]&&(t[e]>i[e]?(t[e]=i[e],t[a]=i[a]):t[a]=i[a]+i[e]-t[e]),t[e]>i[e]&&(t[e]=i[e]),t[a]<i[a]&&(t[a]=i[a])}),t},mapZoom:function(t,i,o,a,e){var n=this,s=n.xAxis[0],r=s.max-s.min,l=y(i,s.min+r/2),h=r*t,p=n.yAxis[0],c=p.max-p.min,m=y(o,p.min+c/2),d=c*t,u=a?(a-s.pos)/s.len:.5,x=e?(e-p.pos)/p.len:.5,g=l-h*u,f=m-d*x,b=n.fitToBox({x:g,y:f,width:h,height:d},{x:s.dataMin,y:p.dataMin,width:s.dataMax-s.dataMin,height:p.dataMax-p.dataMin});a&&(s.fixTo=[a-s.pos,i]),e&&(p.fixTo=[e-p.pos,o]),void 0!==t?(s.setExtremes(b.x,b.x+b.width,!1),p.setExtremes(b.y,b.y+b.height,!1)):(s.setExtremes(void 0,void 0,!1),p.setExtremes(void 0,void 0,!1)),n.redraw()}}),C(n.prototype,"getAxes",function(t){var i=this.options,o=i.colorAxis;t.call(this),this.colorAxis=[],o&&(t=new L(this,o))}),C(n.prototype,"render",function(i){var o=this,a=o.options.mapNavigation;i.call(o),o.renderMapNavigation(),(y(a.enableDoubleClickZoom,a.enabled)||a.enableDoubleClickZoomTo)&&t.addEvent(o.container,"dblclick",function(t){o.pointer.onContainerDblClick(t)}),y(a.enableMouseWheelZoom,a.enabled)&&t.addEvent(o.container,void 0===document.onmousewheel?"DOMMouseScroll":"mousewheel",function(t){return o.pointer.onContainerMouseWheel(t),!1})}),M.map=f(M.scatter,{allAreas:!0,animation:!1,nullColor:"#F8F8F8",borderColor:"silver",borderWidth:1,marker:null,stickyTracking:!1,dataLabels:{format:"{point.value}",verticalAlign:"middle"},turboThreshold:0,tooltip:{followPointer:!0,pointFormat:"{point.name}: {point.value}<br/>"},states:{normal:{animation:!0},hover:{brightness:.2}}});var X=g(r,{applyOptions:function(t,i){var o,a=r.prototype.applyOptions.call(this,t,i),e=this.series,n=e.options,s=n.joinBy;return n.mapData&&(o=s?e.getMapData(s,a[s]):n.mapData[a.x],o?(e.xyFromShape&&(a.x=o._midX,a.y=o._midY),x(a,o)):a.value=a.value||null),a},setVisible:function(t){var i=this,o=t?"show":"hide";u(["graphic","dataLabel"],function(t){i[t]&&i[t][o]()})},onMouseOver:function(t){clearTimeout(this.colorInterval),r.prototype.onMouseOver.call(this,t)},onMouseOut:function(){var t=this,o=+new Date,a=s(t.options.color),e=s(t.pointAttr.hover.fill),n=t.series.options.states.normal.animation,l=n&&(n.duration||500);l&&4===a.rgba.length&&4===e.rgba.length&&"select"!==t.state&&(delete t.pointAttr[""].fill,clearTimeout(t.colorInterval),t.colorInterval=setInterval(function(){var n=(new Date-o)/l,s=t.graphic;n>1&&(n=1),s&&s.attr("fill",i(e,a,n)),n>=1&&clearTimeout(t.colorInterval)},13)),r.prototype.onMouseOut.call(t)},zoomTo:function(){var t=this,i=t.series;i.xAxis.setExtremes(t._minX,t._maxX,!1),i.yAxis.setExtremes(t._minY,t._maxY,!1),i.chart.redraw()}});A.map=g(A.scatter,{type:"map",pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",dashstyle:"dashStyle"},pointClass:X,pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:w,supportsDrilldown:!0,getExtremesFromAll:!0,useMapGeometry:!0,parallelArrays:["x","y","value"],getBox:function(i){var o,a=Number.MIN_VALUE,e=Number.MAX_VALUE,n=Number.MIN_VALUE,s=Number.MAX_VALUE;u(i||[],function(i){if(i.path){"string"==typeof i.path&&(i.path=t.splitPath(i.path));var r=i.path||[],l=r.length,h=!1,p=Number.MIN_VALUE,c=Number.MAX_VALUE,m=Number.MIN_VALUE,d=Number.MAX_VALUE;if(!i._foundBox){for(;l--;)"number"!=typeof r[l]||isNaN(r[l])||(h?(p=Math.max(p,r[l]),c=Math.min(c,r[l])):(m=Math.max(m,r[l]),d=Math.min(d,r[l])),h=!h);i._midX=c+(p-c)*(i.middleX||.5),i._midY=d+(m-d)*(i.middleY||.5),i._maxX=p,i._minX=c,i._maxY=m,i._minY=d,i._foundBox=!0}a=Math.max(a,i._maxX),e=Math.min(e,i._minX),n=Math.max(n,i._maxY),s=Math.min(s,i._minY),o=!0}}),o&&(this.minY=Math.min(s,y(this.minY,Number.MAX_VALUE)),this.maxY=Math.max(n,y(this.maxY,Number.MIN_VALUE)),this.minX=Math.min(e,y(this.minX,Number.MAX_VALUE)),this.maxX=Math.max(a,y(this.maxX,Number.MIN_VALUE)))},getExtremes:function(){p.prototype.getExtremes.call(this,this.valueData),this.chart.hasRendered&&this.isDirtyData&&this.getBox(this.options.data),this.valueMin=this.dataMin,this.valueMax=this.dataMax,this.dataMin=this.minY,this.dataMax=this.maxY},translatePath:function(t){var i,o=this,a=!1,e=o.xAxis,n=o.yAxis,s=e.min,r=e.transA,l=e.minPixelPadding,h=n.min,p=n.transA,c=n.minPixelPadding,m=[];if(t)for(i=t.length;i--;)"number"==typeof t[i]?(m[i]=a?(t[i]-s)*r+l:(t[i]-h)*p+c,a=!a):m[i]=t[i];return m},setData:function(t,i){var o=this.options,a=o.mapData,e=o.joinBy,n=[];this.getBox(t),this.getBox(a),o.allAreas&&a&&(t=t||[],e&&u(t,function(t){n.push(t[e])}),n="|"+n.join("|")+"|",u(a,function(i){e&&-1!==n.indexOf("|"+i[e]+"|")||t.push(f(i,{value:null}))})),p.prototype.setData.call(this,t,i)},getMapData:function(t,i){var o=this.options,a=o.mapData,e=this.mapMap,n=a.length;if(e||(e=this.mapMap={}),void 0!==e[i])return a[e[i]];if(void 0!==i)for(;n--;)if(a[n][t]===i)return e[i]=n,a[n]},translateColors:function(){var t=this,i=this.options.nullColor,o=this.colorAxis;u(this.data,function(a){var e,n=a.value;e=null===n?i:o?o.toColor(n,a):a.color||t.color,e&&(a.color=a.options.color=e)})},drawGraph:w,drawDataLabels:w,translate:function(){var t=this,i=t.xAxis,o=t.yAxis;t.generatePoints(),u(t.data,function(a){a.plotX=i.toPixels(a._midX,!0),a.plotY=o.toPixels(a._midY,!0),(t.isDirtyData||t.chart.renderer.isVML)&&(a.shapeType="path",a.shapeArgs={d:t.translatePath(a.path),"vector-effect":"non-scaling-stroke"})}),t.translateColors()},drawPoints:function(){var t,i,o,a=this,e=a.xAxis,n=a.yAxis,s=a.group,r=a.chart,l=r.renderer,h=function(i,o){var a=i.dataMin,e=i.dataMax,n=a-(e-a)*(o-1)/2,s=i.min-i.minPixelPadding/i.transA,r=s-n,l=(e-a-i.max+i.min)*o,h=r/l;return i.len*(1-t)*h};a.transformGroup||(a.transformGroup=l.g().attr({scaleX:1,scaleY:1}).add(s)),a.isDirtyData||l.isVML?(a.group=a.transformGroup,A.column.prototype.drawPoints.apply(a),a.group=s,u(a.points,function(t){r.hasRendered&&t.graphic&&t.graphic.attr("fill",t.options.color)}),this.transA=e.transA):(t=e.transA/this.transA,t>.99&&1.01>t?(i=0,o=0,t=1):(i=h(e,Math.max(1,a.chart.mapRatio)),o=h(n,1/Math.min(1,a.chart.mapRatio))),this.transformGroup.animate({translateX:i,translateY:o,scaleX:t,scaleY:t})),p.prototype.drawDataLabels.call(a)},render:function(){var t=this,i=p.prototype.render;t.chart.renderer.isVML&&t.data.length>3e3?setTimeout(function(){i.call(t)}):i.call(t)},animate:function(t){var i=this.chart,o=this.options.animation,a=this.group,e=this.xAxis,n=this.yAxis,s=e.pos,r=n.pos;i.renderer.isSVG&&(o===!0&&(o={duration:1e3}),t?a.attr({translateX:s+e.len/2,translateY:r+n.len/2,scaleX:.001,scaleY:.001}):(a.animate({translateX:s,translateY:r,scaleX:1,scaleY:1},o),this.animate=null))},animateDrilldown:function(t){var i,o=this.chart.plotBox,a=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],e=a.bBox,n=this.chart.options.drilldown.animation;t||(i=Math.min(e.width/o.width,e.height/o.height),a.shapeArgs={scaleX:i,scaleY:i,translateX:e.x,translateY:e.y},u(this.points,function(t){t.graphic.attr(a.shapeArgs).animate({scaleX:1,scaleY:1,translateX:0,translateY:0},n)}),this.animate=null)},drawLegendSymbol:t.LegendSymbolMixin.drawRectangle,animateDrillupFrom:function(t){A.column.prototype.animateDrillupFrom.call(this,t)},animateDrillupTo:function(t){A.column.prototype.animateDrillupTo.call(this,t)}}),M.mapline=f(M.map,{lineWidth:1,fillColor:"none"}),A.mapline=g(A.map,{type:"mapline",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth",fill:"fillColor"},drawLegendSymbol:A.line.prototype.drawLegendSymbol}),M.mappoint=f(M.scatter,{dataLabels:{enabled:!0,format:"{point.name}",color:"black",style:{textShadow:"0 0 5px white"}}}),A.mappoint=g(A.scatter,{type:"mappoint"}),A.bubble&&(M.mapbubble=f(M.bubble,{tooltip:{pointFormat:"{point.name}: {point.z}"}}),A.mapbubble=g(A.bubble,{pointClass:g(r,{applyOptions:X.prototype.applyOptions}),xyFromShape:!0,type:"mapbubble",pointArrayMap:["z"],getMapData:A.map.prototype.getMapData,getBox:A.map.prototype.getBox,setData:A.map.prototype.setData})),d.topbutton=function(t,i,a,e,n){return o(n,t,i,a,e,n.r,n.r,0,0)},d.bottombutton=function(t,i,a,e,n){return o(n,t,i,a,e,0,0,n.r,n.r)},t.Renderer===m&&u(["topbutton","bottombutton"],function(t){m.prototype.symbols[t]=d[t]}),t.Map=function(t,i){var o,a={endOnTick:!1,gridLineWidth:0,lineWidth:0,minPadding:0,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};return o=t.series,t.series=null,t=f({chart:{panning:"xy",type:"map"},xAxis:a,yAxis:f(a,{reversed:!0})},t,{chart:{inverted:!1,alignTicks:!1,preserveAspectRatio:!0}}),t.series=o,new n(t,i)}}(Highcharts);