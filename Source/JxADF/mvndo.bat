@cls
@echo ***************************************************
@echo **     mvn�������� for JXADF                   **
@echo **                                               **
@echo **������˾�����ݽ��¿Ƽ��ɷ����޹�˾             **
@echo **Homepage: http://osgia.com                     **
@echo **�����ߣ�κ���� wmzsoft@gmail.com               **
@echo **��ַ��������Ӹ��¼�����ҵ����������·20��12¥ **
@echo **�绰��020-28812525-2211��                      **
@echo ****************************************************
@echo.
:USEAGE
@echo ------------��Ŀ����--------------------------------------
@echo 1. ����JxPlatform
@echo 2. ��ΪEclipse��Ŀ
@echo.
@echo.
@echo.------------��������--------------------------------------
@echo !. �����Ŀ¼�������е�target�ļ��� mvn clean
@echo k. �Լ���������  u. �鿴ʹ�÷���  x. �˳�

@set MY_HOME=%~dp0

@echo.
@set /p KEY= ����������ѡ��
@echo off

@CLS

if %KEY% == 0 goto M0
if %KEY% == 1 goto M1
if %KEY% == 2 goto M2
if %KEY% == 3 goto M3
if %KEY% == 4 goto M4
if %KEY% == 5 goto M5
if %KEY% == 6 goto M6
if %KEY% == 7 goto M7
if %KEY% == 8 goto M8
if %KEY% == a goto MA
if %KEY% == b goto MB
if %KEY% == c goto MC
if %KEY% == d goto MD
if %KEY% == e goto ME
if %KEY% == f goto MF
if %KEY% == g goto MG
if %KEY% == h goto MH
if %KEY% == i goto MI
if %KEY% == j goto MJ
if %KEY% == k goto MK
if %KEY% == l goto ML
if %KEY% == m goto MM
if %KEY% == n goto MN
if %KEY% == o goto MO
if %KEY% == p goto MP
if %KEY% == q goto MQ
if %KEY% == r goto MR
if %KEY% == s goto MS
if %KEY% == t goto MT
if %KEY% == u goto USEAGE
if %KEY% == v goto MV
if %KEY% == w goto MW
if %KEY% == x goto MX
if %KEY% == y goto MY
if %KEY% == z goto MZ
if %KEY% == ! goto CLEAR_TARGET
goto USEAGE

:M1
@echo ���� %JXADF_DEPLOY%\ �п����
@echo.
@echo a. Ĭ�ϣ����롢���ƣ�
@echo b. ֻ����webappĿ¼
@echo c. ֻ����ftl�ļ� 
@echo d. ֻ����webappĿ¼����WEB-INF�⣩
@echo e. ���롢���ơ�ѹ��JS��CSS
@choice /C ABCDE /D A /T 5 /N /M "��ѡ��[A��B��C��D��E]�����ð��س� "
@if %ERRORLEVEL%==2 goto M1B
@if %ERRORLEVEL%==3 goto M1C
@if %ERRORLEVEL%==4 goto M1D
@if %ERRORLEVEL%==5 goto M1E
@call mvn clean compile -pl :JxPlatform
xcopy .\JxPlatform\target\classes\*.* %JXADF_DEPLOY%\WEB-INF\classes\ /Y /S /Q
:M1B
xcopy .\JxPlatform\src\main\webapp\*.* %JXADF_DEPLOY%\ /Y /S /Q /EXCLUDE:jpuncopy.txt
goto USEAGE
:M1C
xcopy .\JxPlatform\src\main\resources\template\*.* %JXADF_DEPLOY%\WEB-INF\classes\template\ /Y /S /Q
goto USEAGE
:M1D
xcopy .\JxPlatform\src\main\webapp\*.* %JXADF_DEPLOY%\ /Y /S /Q /EXCLUDE:uncopywebinf.txt
goto USEAGE
:M1E
@call mvn clean package -pl :JxPlatform
xcopy .\JxPlatform\src\main\webapp\*.* %JXADF_DEPLOY%\ /Y /S /Q /EXCLUDE:uncopywebinf.txt
xcopy .\JxPlatform\target\JxPlatform-1.0.0\javascript\*.* %JXADF_DEPLOY%\javascript\ /Y /S /Q 
goto USEAGE

:M2
@call mvn eclipse:eclipse
goto USEAGE


:CLEAR_TARGET
@call mvn clean
goto USEAGE

:MK
@set /p CKEY= #  
CALL %CKEY%
goto USEAGE

:MX
@pause