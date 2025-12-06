Write-Host "Ejecutando script en Windows"

# Variables de entorno
Write-Host "Variable de entorno TEST_ENV: $env:TEST_ENV"

# Crear archivo de prueba
"Contenido de prueba" | Out-File -FilePath testfile.txt
Write-Host "Archivo testfile.txt creado"

# Cambiar permisos del archivo
icacls testfile.txt /grant Everyone:(R,W)
Write-Host "Permisos cambiados"

# Crear proceso en segundo plano
Start-Process -NoNewWindow -FilePath "ping" -ArgumentList "127.0.0.1 -n 60"
Write-Host "Proceso en segundo plano creado"

# Manejo de errores ejemplo
if (!(Test-Path testfile.txt)) {
    Write-Host "Error: testfile.txt no encontrado"
    exit 1
}

# Generar artifact
"Archivo de salida generado" | Out-File artifact.txt
