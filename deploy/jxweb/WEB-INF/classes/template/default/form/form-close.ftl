<#--
/**
$id:form-close$
$author:wmzsoft@gmail.com
#date:2013.08
**/
-->
</div>
</div>
</form>
<#if (parameters.jboname??) && ((parameters.type!'x')!="VIEW")>
  <script type="text/javascript"><#t>
    $(function () {<#t>
        $("#${parameters.id}").validationEngine("detach");<#t>
    });<#t>
  </script><#t>
</#if>
<!-- form.ftl end -->