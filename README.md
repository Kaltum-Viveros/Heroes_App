# HeroesApp

Aplicación desarrollada en **Angular 11** basada en el curso de **Fernando Herrera**.  
Permite visualizar, buscar, agregar, editar y eliminar héroes del universo **DC** y **Marvel**.  
Incluye un backend simulado mediante **JSON-Server** para manejar la persistencia de datos localmente.

---

## Descripción del proyecto

**HeroesApp** es una aplicación web de una sola página (SPA - Single Page Application) desarrollada con **Angular 11**.  
Su propósito es gestionar una base de datos de héroes, mostrando información relevante de cada uno e implementando operaciones **CRUD** completas (Crear, Leer, Actualizar y Eliminar).

El proyecto aplica conceptos esenciales y avanzados de Angular, tales como:

- Módulos y Lazy Loading.
- Ruteo con parámetros y navegación dinámica.
- Pipes personalizados.
- Componentes reutilizables.
- Uso de Angular Material para la interfaz gráfica.
- Simulación de backend con JSON-Server.
- Autenticación básica y protección de rutas.
- Diseño responsivo con Flex Layout.

---

## Tecnologías utilizadas

| Tecnología | Versión | Descripción |
|-------------|----------|--------------|
| **Angular** | 11.x | Framework principal para el desarrollo de la aplicación. |
| **TypeScript** | 4.x | Lenguaje utilizado para el desarrollo del frontend. |
| **Angular Material** | 11.x | Librería UI para componentes visuales modernos. |
| **Flex Layout** | 11.x | Sistema de diseño adaptable basado en Flexbox. |
| **JSON-Server** | 0.17.x | Servidor simulado para el manejo de datos (API REST falsa). |
| **Node.js / npm** | 14.x / 6.x | Entorno y gestor de paquetes. |

## Instrucciones de instalación y ejecución
1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Kaltum-Viveros/Heroes_App.git
   cd Heroes_App
2. **Instalar dependencias**
   ```bash
   npm install
3. **Ejecutar el servidor de desarrollo de Angular**
   ```bash
   ng serve -o
## Simulación del backend con JSON-Server
1. **Instalar JSON-Server globalmente**
   ```bash
   npm install -g json-server
2. **Ejecutar el backend simulado**
   ```bash
   json-server --watch db.json --port 3000
