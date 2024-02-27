
const localUrl = import.meta.env.VITE_API_LOCAL_URL;
export const fetchProductosLocal = async (page, perPage) => {
    try {
        const res = await fetch(`${localUrl}?page=${page}&perPage=${perPage}`)
        if (!res.ok) {
            throw new Error('Error al realizar la peticion')
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(`Error al obtener la data ${error}`);
        throw error
    }
}