# tips de productividad

## Descripción

Esta app sirve para ver y valorar de tips de productividad, mostrar tips aleatorios y ver cuál es el tip más valorado por la comunidad.

## Cómo ejecutar

1. Instalar las dependencias: `npm install`
2. Ejecutar el servidor de desarrollo: `npm run dev`
3. Abrir el navegador en la URL que se muestra en la terminal (suele ser http://localhost:5173)

## Conceptos de React utilizados

- useState: Para manejar el estado de la lista de tips, el índice del tip actual y las funciones de votación.
- Manejo de eventos: onClick en botones para votar, mostrar tips aleatorios y reiniciar votos.
- Renderizado condicional: Para mostrar el tip más valorado solo cuando hay votos.
- Métodos de array: map para renderizar elementos y reduce para encontrar el tip con más votos.
- Props: Para pasar datos a componentes (aunque en la versión actual se maneja todo en App.jsx).
