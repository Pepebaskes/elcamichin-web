# El Cami "Chin"®

Sitio web del restaurante El Cami "Chin"®, construido con React y Vite.

## Desarrollo local

1. Instala las dependencias con `npm install`.
2. Inicia el servidor con `npm run dev`.
3. Genera la version de produccion con `npm run build`.

## Imagenes

Los archivos visuales viven en `public/images`, al mismo nivel que `src`.
Vite publica esa carpeta desde la raiz, por lo que una imagen guardada como
`public/images/ejemplo.jpeg` se usa con la ruta `/images/ejemplo.jpeg`.

Las rutas utilizadas por los componentes estan centralizadas en
`src/app/config/images.ts`. Para reemplazar una foto, conserva el nombre del
archivo o actualiza unicamente su entrada en ese catalogo.

## Despliegue en Vercel

1. Importa en Vercel el repositorio `Pepebaskes/elcamichin-web`.
2. Usa el preset `Vite`.
3. Deja `npm run build` como Build Command.
4. Usa `dist` como Output Directory.
5. Despliega el proyecto y agrega el dominio en `Settings > Domains`.
6. Copia en GoDaddy exactamente los registros DNS indicados por Vercel.

No elimines registros MX, SPF, DKIM o TXT si el dominio utiliza correo.
