@echo off
REM /D => copia sólo aquellos archivos cuya fecha de origen es más reciente que la fecha de destino.
xcopy /Y /D "test\tpl_*.html" 
"../minify/jsmin.exe" <dataAdapter.js >dataAdapter.min.js "(c)2013 Jorge Colombo - jcolombo@ymail.com - t: @jcolombo_ - f: /Jorge Colombo"
