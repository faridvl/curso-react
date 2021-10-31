const apiKey = 'D33tPWwKOoYGYLrRYAjkId9NOYpIgnbZ';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion.then((res) =>
    res.json())
    .then(({ data }) => {
        const url = data.images.original.url

        const img = document.createElement('img');
        img.src = url

        document.body.append( img );
    })
    .catch((err) => { console.warn(err) })