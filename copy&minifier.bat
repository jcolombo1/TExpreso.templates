@echo off
REM /D => copia s�lo aquellos archivos cuya fecha de origen es m�s reciente que la fecha de destino.
xcopy /Y /D "test\tpl_*.html" 
"../minify/jsmin.exe" <dataAdapter.js >dataAdapter.min.js "(c)2013 Jorge Colombo - jcolombo@ymail.com - t: @jcolombo_ - f: /Jorge Colombo"
