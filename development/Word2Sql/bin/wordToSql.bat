@REM CLS
@echo ***************************************************
@echo **                                               **
@echo **������˾�����ݽ����Զ����Ƽ����޹�˾           **
@echo **�����ߣ�κ����                                 **
@echo **��ַ��������Ӹ��¼�����ҵ����������·18��3¥��**
@echo **�绰��020-28812525-2211��                      **
@echo ****************************************************
@echo ע������BAT�Ĳ������ƣ�����������࣬��ֱ��ʹ�� java -jar WordToSql.jar �Ӳ���
@echo.
@echo off
@REM set JAVA_HOME="C:\Program Files\Java\jdk1.7.0_65"

@set jxclasspath=..\lib\log4j-1.2.8.jar;..\lib\jacob.jar;..\lib\jdom.jar;..\lib\ojdbc14.jar;.;..\lib\jacob.dll;..\lib\antlr-2.7.7.jar;..\lib\asm-4.0.jar;..\lib\commons-attributes-api.jar;..\lib\commons-attributes-compiler.jar;..\lib\commons-logging.jar;..\lib\groovy-2.1.5.jar;..\lib\spring-beans.jar;..\lib\spring-context.jar;..\lib\spring-core.jar
@set JAVA_OPTION = -Dsiteid=JX -Dorgid=JXKJ -Dstoragepartition=MAXIMO_DATA -DstoragepartitionIndex=MAXIMO_INDEX
@SHIFT
@"%JAVA_HOME%\bin\java" -classpath "%jxclasspath%" -jar %JAVA_OPTION% WordToSql-2013.jar %0=%1 %2=%3 %4=%5 %6=%7 %8=%9 
@pause
@echo on
