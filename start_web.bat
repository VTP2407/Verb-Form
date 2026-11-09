@echo off
title Web Luyện Thi Verb Form - Localhost 8080
cd /d "%~dp0"
echo ========================================================
echo  KHOI DONG WEB HOC TIENG ANH (VERB FORM & TU VUNG)
echo  Dang mo http://localhost:8080 tren trinh duyet...
echo ========================================================

where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    start http://localhost:8080
    node server.js
    goto :end
)

where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    python server.py
    goto :end
)

echo Dang mo truc tiep index.html tren trinh duyet...
start index.html

:end
pause
