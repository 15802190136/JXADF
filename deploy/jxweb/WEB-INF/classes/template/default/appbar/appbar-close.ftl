<#--
/**
$id:appbar$
$author:wmzsoft@gmail.com
#date:2014.09
**/
-->
<#t/>
</td>
</tr>
</table>
<#if (parameters.menusList??) >
    <#if ((parameters.menusList?size) > 0) >
    <script type="text/javascript">
        $(function () {
            $(".appbar-menu-option").click(function () {
                $(".appbar-menu-list").show();
            });

            $(".appbar-menu-list").mouseleave(function () {
                $(".appbar-menu-list").hide();
            });
        });
    </script>
    </#if>
</#if>
<!-- appbar end -->