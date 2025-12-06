#!/bin/bash
echo "Hola desde el contenedor!"
# Mostrar PID del contenedor
echo "PID del contenedor: $$"
# Información de CPU y memoria
echo "CPU info:"
cat /proc/cpuinfo | head -n 4
echo "Memoria:"
free -h
