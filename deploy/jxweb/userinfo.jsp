<%@ page import="com.jxtech.jbo.auth.JxSession" %>
<%@ page import="com.jxtech.jbo.base.JxUserInfo" %>
<%@ page contentType="text/html;charset=GBK" language="java" %>
<html>
<head><title>SNA��¼�û���Ϣ</title></head>
<body>
<span style="color:#ff0000">SNA��¼��֤:
   <%
       JxUserInfo usr=(JxUserInfo)session.getAttribute(JxSession.USER_INFO);
       if(usr!=null) out.println("��ǰ�û�:"+usr.getUser().getString("name"));
       else out.println("�û�û�е�¼");
   %>
   </span>

</body>
</html>