function myFullCalendar(a){var e=$("#"+a).attr("month");if(""==e||null==e){var t=new Date;e=t.getFullYear()+"-"+(t.getMonth()+1)}$("#"+a).fullCalendar({header:{left:"prev,next",center:"title",right:"month,basicWeek,basicDay"},lang:userLangeCode,defaultDate:e+"-01",defaultView:"month",weekNumbers:!0,editable:!1,fixedWeekCount:!1,height:window.innerHeight-120,dayClick:function(e,t,l){calendarDayClick($("#"+a),e,t,l)},eventClick:function(e,t,l){calendarEventClick($("#"+a),e,t,l)},windowResize:function(){$("#"+a).fullCalendar("option","height",window.innerHeight-120)}}),$(".fc-prev-button").click(function(e){loadCalendarData($("#"+a),e)}),$(".fc-next-button").click(function(e){loadCalendarData($("#"+a),e)}),loadCalendarData($("#"+a))}function calendarDayClick(a,e){if("readonly"!=$(a).attr("view")){var t=$(a).attr("eventurl");t+=t.indexOf("?")>0?"&":"?",t=t+"flag=add&day="+e.format(),appDialog(jx_appName,jx_appType,$(a).attr("id"),t,800,550,refreshCalendar)}}function calendarEventClick(a,e){var t=$(a).attr("eventurl");null!=t&&""!=t&&null!=e.id&&""!=e.id&&(t+=t.indexOf("?")>0?"&":"?",t=t+"uid="+e.id+"&view="+$(a).attr("view"),"readonly"==$(a).attr("view")?appDialog(jx_appName,jx_appType,$(a).attr("id"),t,800,550):appDialog(jx_appName,jx_appType,$(a).attr("id"),t,800,550,refreshCalendar))}function loadCalendarData(a){for(var e=$(a).attr("dataurl"),t=0;;){if(null==e||""==e)return;$(a).fullCalendar("removeEventSource",e);var l=$(a).fullCalendar("getDate");if(""!=l&&null!=l){var r=getUrlParamNameValue(e,"month");e=""!=r&&null!=r?e.replace(r,"month="+l.format()):e.indexOf("?")>0?e+"&month="+l.format():e+"?month="+l.format()}var n=$(a).attr("backgroundColor"+t);if(null==n||""==n)$(a).fullCalendar("addEventSource",e);else{var i=$(a).attr("textColor"+t);(null==i||""==i)&&(i="#FFFFFF"),$(a).fullCalendar("addEventSource",{url:e,backgroundColor:n,textColor:i})}0==t?$(a).attr("dataurl",e):$(a).attr("dataurl"+t,e),t++,e=$(a).attr("dataurl"+t)}}function refreshCalendar(a){var e=$(a).attr("target").id;if(null!=e&&""!=e&&e.length>3){var t=e.substring(0,e.length-3);$("#"+t).fullCalendar("refetchEvents")}}