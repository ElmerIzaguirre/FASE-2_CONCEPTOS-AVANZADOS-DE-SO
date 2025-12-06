#!/bin/bash
set -e  # Detener el script si ocurre un error
echo "Ejecutando script en Linux"

# Variables de entorno
echo "Variable de entorno TEST_ENV: $TEST_ENV"

# Crear archivo de prueba
echo "Contenido de prueba" > testfile.txt
echo "Archivo testfile.txt creado"

# Cambiar permisos del archivo
chmod 644 testfile.txt
echo "Permisos cambiados a 644"

# Crear un proceso en segundo plano
sleep 60 &
echo "Proceso en segundo plano creado con PID $!"

# Manejo de errores ejemplo
if [ ! -f testfile.txt ]; then
  echo "Error: testfile.txt no encontrado"
  exit 1
fi

# Generar artifact (archivo de salida)
echo "Archivo de salida generado" > artifact.txt
