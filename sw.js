/*self.addEventListener('fetch', event => {
    
    if(event.request.url.includes('.jpg')) {
        console.log(event.request.url);

        let fotoReq = fetch(event.request);
        event.respondWith(fotoReq);
    }
 
});

self.addEventListener('fetch', event => {
    if(event.request.url.includes('style.css')) {
        let respuesta = new Response(`
        body {
            background-color: red !important;
            color: pink;
        }
        `, {
            headers: {
                'Content-Type': 'text/css'
            }
        });
        event.respondWith(respuesta);
    }
});*/

self.addEventListener('fetch', event => { 
    if(event.request.url.includes('main.jpg')) {
        let resp = fetch('img/main-patas-arriba.jpg');
        event.respondWith(resp);
        //event.respondWith(fetch('img/main-patas-arriba.jpg'));
    }


});
