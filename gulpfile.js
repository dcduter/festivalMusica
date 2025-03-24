/* gulp se usa para crear tareas o funciones que se pueden reutilizar */
// se usa export para exportar la función
/* en packege.json se usa "scripts": { "tareas": "gulp tareas" } para llamar la función, se debe agregar el type:"module" en package.json para que funcione */
//  "gulp": "gulp tareas" tarea es el nombre de la función para llamarla y gulp se usa para llamar la función desde la terminal
// SE INSTALA LA DEPENDENCIA GULP CON "npm install --save-dev gulp-sass, para que se ejecute continuamente

// extraemos la dependencia, extrae la funcion de node_modules
import gulpSass from 'gulp-sass'// se importa la dependencia de gulp-sass

// importamos la dependencia de sass
import * as dartSass from 'sass' // se usa para compilar sass

import { src, dest, watch, series } from 'gulp' // se importa la dependencia de gulp
const sass = gulpSass(dartSass) // su funcion es compilar sass

export function js (done){
    src('src/js/app.js')//busca la carpeta src/js/app.js
        .pipe(dest('build/js'))// crea la carpeta build/js
    done()
}

import gulp from 'gulp'// se usa para llamar gulp

export  function css (done){
    gulp.src('src/scss/app.scss') // se usa para buscar el archivo
        .pipe(sass ().on('error', sass.logError)) // se usa para el orden de las funciones, on se usa para el error, logError se usa para el error en la consola
        .pipe(dest ('build/css')) // se usa para el orden de las funciones
    done();
}

export function dev () {
    watch('src/scss/**/*.scss', css)//observa cambios y cuando hay cambios los ejecuta en el archivo en todos los archivos .scss
    watch('src/js/**/*.js', js)//observa cambios y cuando hay cambios los ejecuta en el archivo en todos los archivos .scss
    
}
export default series (js, css, dev)// se usa para ejecutar las funciones en el orden