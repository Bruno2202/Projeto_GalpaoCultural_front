@echo off
title Biblioteca Comunitaria - Galpao
color 0A

echo ==========================================
echo    BIBLIOTECA COMUNITARIA - GALPAO
echo ==========================================
echo.

REM Adicionar Node.js ao PATH
set PATH=%PATH%;C:\Program Files\nodejs;C:\Program Files (x86)\nodejs;%USERPROFILE%\AppData\Local\Programs\nodejs

echo Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ❌ Node.js nao encontrado!
    echo.
    echo 📥 INSTALE O NODE.JS:
    echo 1. Acesse: https://nodejs.org/
    echo 2. Baixe a versao LTS
    echo 3. Instale normalmente
    echo 4. Reinicie o computador
    echo 5. Execute este arquivo novamente
    echo.
    pause
    exit
)

echo ✅ Node.js encontrado!
echo.

echo 📦 Instalando dependencias...
npm install

echo.
echo 🌐 Abrindo navegador...
start http://localhost:4200/

echo.
echo 🚀 Executando projeto...
echo.
echo ⏹️  Para parar: pressione Ctrl+C
echo.

npm start
