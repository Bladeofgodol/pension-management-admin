@echo off
echo Uninstalling @nx/nx-cloud...
npm uninstall @nx/nx-cloud

echo Cleaning workspace folders...
if exist .nx (
    rmdir /s /q .nx
    echo Removed .nx
)
if exist node_modules (
    rmdir /s /q node_modules
    echo Removed node_modules
)
if exist dist (
    rmdir /s /q dist
    echo Removed dist
)
if exist cache (
    rmdir /s /q cache
    echo Removed cache
)
if exist package-lock.json (
    del /f /q package-lock.json
    echo Removed package-lock.json
)

echo Removing NX_CLOUD_ACCESS_TOKEN environment variable if set...
set NX_CLOUD_ACCESS_TOKEN=

echo Installing dependencies...
npm install

echo Resetting Nx cache...
npx nx reset

echo.
echo ✅ Nx workspace cleaned and reset successfully!
pause
