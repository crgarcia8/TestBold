# Proyecto creado con npx create-react-app

Este proyecto fue creado con el comando npx create-react-app para inicial una estructura funcional de react.

## Scripts disponibles

En este proyecto puedes ejecutar

### `npm start`

Ejecuta la aplicación en modo desarrollo. se ejecuta por defecto en [http://localhost:3000](http://localhost:3000)

### `npm run build`

Construye la aplicación en modo producción, generandose en la carpeta `Build`

# Configuración

## Fuente de datos 

Al no contar con una Base de Datos se obtiene la data desde el archivo `data.json`, la cual se encuentra en `src/Data.json`.

## Estilos

Se utiliza la libreria [https://bulma.io/](https://bulma.io/).
Pero para no utilizar los Media Querys de Bulma, no importé todo el css de Bulma, sino unicamente estilos para:

  Todos los elementos(Button, box, table, title ).
  y algunos componentes especificos(Navbar, panel, tabs, card)
  
Con esto implementé media querys directamente en archivos .scss de cada componente que lo necesite.

Fuente utilizada: Monserrat

## Persistir los datos

Para persistir los datos al refrescar la pagina se utiliza SessionStorage, lo que hace unicamente es guardar los filtros seleccionados.

## Pruebas unitarias 

Aún estoy en proceso de aprendizaje sobre la implementación de pruebas unitarias por lo cual no las incluí.

## Consideraciones

### Aclaración sobre un punto en el PDF

El item 4 del pdf en la sección "Interacción JS" indica lo siguiente "Una vez que el usuario hace clic en alguno de estos botones o checkboxes la tabla
se actualiza y muestra la información correspondiente", pero al contar con un boton en los filtros que dice "Aplicar" utilicé el boton para actualizar la información.
