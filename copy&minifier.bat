@echo off
REM Los archs fuentes del proyecto son los ubicados en:
REM
REM   test\tbs3  (twitter bootstrap 3 - originales no modificables)
REM   test\*.tpl
REM   dataAdapter*.js
REM   paginatorGrails*.js
REM
xcopy /Y /D "test\*.tpl" 
xcopy /Y /D /S /I "test\tbs3" tbs3
"../minify/jsmin.exe" <dataAdapter.js >dataAdapter.min.js "(c)2014 Jorge Colombo - jcolombo@ymail.com - t: @jcolombo_ - f: /Jorge Colombo"
"../minify/jsmin.exe" <paginatorGrails.js >paginatorGrails.min.js "(c)2014 Jorge Colombo - jcolombo@ymail.com - t: @jcolombo_ - f: /Jorge Colombo"
