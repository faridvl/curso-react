const getImagen = async () => {
    try {
        const apiKey = 'D33tPWwKOoYGYLrRYAjkId9NOYpIgnbZ';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await res.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url
        document.body.append( img );
        
    } catch (error) {
        //manejo del error
    }

}

getImagen().then( );

