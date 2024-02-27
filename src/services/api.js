
export const URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProductos = async () => {
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error('Error al realizar la peticion')
        }
        const data = await res.json();

        return data
    }
    catch (error) {
        console.log('Error al obtener la data', error);
        throw error
    }
}


const urlPrueba = "https://jsonplaceholder.typicode.com/users/1"
export const fetchUsuarios = async () => {
    try {
        const res = await fetch(urlPrueba);
        if (!res.ok) {
            throw new Error('Error al realizar la de usuarios')
        }
        const data = await res.json();

        return data
    }
    catch (error) {
        console.log('Error al obtener la data', error);
        throw error
    }
}

