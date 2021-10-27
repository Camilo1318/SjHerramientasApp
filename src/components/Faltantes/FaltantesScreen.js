import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const FaltantesScreen = () => {
    
const [faltantes, setfaltantes] = useState([])
const [loading, setloading] = useState(true)

const options = {
    headers: {
    Accept: "application/json",
    Authorization: "Basic c2poZXJyYW1pZW50YXNAZ21haWwuY29tOjg4NTIxODk4YTU4NWZiZjYzMmM3",
    "Content-Type": "application/json"
    }
}

useEffect(() => {
    
    try {
        axios(`https://api.alegra.com/api/v1/items?start=${30}`,options)
            .then(function (response) {
              console.log(response.data)
              setfaltantes(response.data)
            });
    } catch (error) {
        console.log("Error: "+ error)
    }
    
    }, [])

    return (
        <div>
           <table class="table">
                <thead class="table-dark">
                  <tr>
                    <th scope="col">Ref</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad Actual</th>
                    <th scope="col">Cantidad Minima</th>
                    <th scope="col">Cantidad Faltante</th>
                    <th scope="col">Cantidad a Pedir</th>
                    <th scope="col">Valor unitario</th>
                    <th scope="col">Valor total</th>
                  </tr>
                </thead>
                <tbody id="rows-section">
                    {faltantes.map((
                        {reference}, index) => (
                            <tr className="" key={index}>
                                <th scope="row">{reference}</th>
                                <td>{reference}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                            </tr>   
                    ))}
                </tbody>
              </table>
        </div>
    )
}
