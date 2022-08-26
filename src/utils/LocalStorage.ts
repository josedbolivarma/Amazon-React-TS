export const obtenerLocalStorage = () => {
    const producto = localStorage.getItem('modal')
    if (producto === null) {
        return undefined;
    }
    return JSON.parse( producto );
}

export const guardarLocalStorage = ( state: any ) => {
    const productoState = JSON.stringify(state);
    localStorage.setItem('modal', productoState);
}