function esVerdadero(valor: string | number | boolean, valor2: string ): boolean {
    if(typeof valor === "string"){
        return valor.length > 0;
    }
    return true;
}

