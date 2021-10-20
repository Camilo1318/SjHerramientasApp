import React, {useEffect, useState} from 'react'

export const FaltantesScreen = () => {
    
const [faltantes, setfaltantes] = useState([])
const [loading, setloading] = useState(true)

useEffect(() => {
    try {
        
        console.log("Peticion completada");
    } catch (error) {
        console.log("Error"+ error)
    }
    
    }, [])

    return (
        <div>
            Este es el componente de Faltantes
        </div>
    )
}
