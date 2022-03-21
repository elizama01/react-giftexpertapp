export const getGifs = async (category) => {
    const ruta = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=dRpuYp8MIdomex1IsNo8IHUByxCrwUAK`
    const resp = await fetch(ruta);

    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
return gifs;
};
