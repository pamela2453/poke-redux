export const logger = (store) => (next) => (action) => {
    next(action);
} 

export const featuring = (store) =>(next) => (actionInfo) => {
    
    const pokemonsUp = actionInfo.payload.map(pokemon=>{
        
        const upperPok = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        return {name: upperPok}
    })

    
    const updatedPayload = {
        ...actionInfo,
        payload: pokemonsUp
    }
    next(updatedPayload)
}