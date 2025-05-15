# Lintic

Proyecto angular con la version 18.2.12. diseñada para mostrar la lista de todos los paises del mundo.
puede filtrar por nombre de pais o filtrar por región. al hacer click en cualquier pais le mostrara mas informacion relevante. podra visualizar el mapa de localizacion,

## desarrollo

dirige a la aplicación donde encontrará una lista de países, un page países dentro de layout principal. en este layout se enrutan todas las vistas de la aplicación.  al iniciar se hace un llamado a la api que trae toda la lista de países. Encontrar un componente buscador tanto por nombre de país como por región. al hacer click en uno de los países lo dirige a la vista país donde hay mas información detallada. el parámetro este encriptado en la url de la aplicación. es responsiva toda la aplicación.

## patrones de diseño

singleton: En el servicio encriptar descencriptar. se instaanci unaa sola vez y puede ser utilizad por cualquier componente aa travez de sus metodos

Inversion de control: Se crea funciones a travez de sistemas externos sin declaarar manualemnte.
ejemplo: no utilizar http.. = new httpclien() para instanciar

patron observador: los cambios en un componente que se reflejan en otros componentes. use de eventemitter


## 📦 Tecnologías

- Angular 18
- TypeScript
- RxJS
- Angular CLI
- Bootstrap 
- Api REST Countries

## 📂 Estructura del Proyecto

Api                       # urls de los diferentes End point a consumir
src/
├── app/
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Vistas principales
│   ├── services/         # Lógica de negocio y peticiones HTTP
│   ├── Layout            # Componente principal donde renderiza toda la aplicacion
│   ├── utils/            # Funciones auxiliares (encriptación)
│   └── routers           # rutas principales y sus rutas hijas
├── assets/               # Imágenes y  archivos 
└── index.html

# Clonar el repositorio
git clone https://github.com/andresmel/Linktic.git
cd tu-repo

# Instalar dependencias
npm install

# Servir la app en local
ng serve

# Abrir en el navegador:
http://localhost:4200



## Build

hacer `ng build` paar hacer build al proyecto. en la carpeta dist estara laa aplicacion lista para publicar en produccion.

## Running unit tests

hacer `ng test` paara ejecutar los test con [Karma](https://karma-runner.github.io).
# Compilar para producción
ng build --configuration production

# Ejecutar pruebas unitarias
ng test

# Linting
ng lint

## Autor

Andres Mauricio Melo
Desarrollador Full stack
