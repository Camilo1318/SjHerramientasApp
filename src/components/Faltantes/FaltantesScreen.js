import React, {useEffect, useState} from 'react'
import useForm from "../../hooks/useForm";
import axios from 'axios'
import '../Faltantes/FaltantesScreen.css'

export const FaltantesScreen = () => {
    
const [faltantes, setfaltantes] = useState([])
const [loading, setloading] = useState(true)

const [formValues, handleInputChange, reset] = useForm({
    bodega: "",
    proveedor: "",
  });

  const { bodega, proveedor } = formValues;

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
        <div className="container">
           
            <form id="form">
                <div className="form-group">
                    <select class="form-select" id="exampleSelect1">
                        <option>Duitama</option>
                        <option>Bogotá</option>
                    </select>
                </div>
                <div className="form-group">    
                    <fieldset disabled="">
                        <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled=""/>
                    </fieldset>
                 </div>
                
                    <div className="form-group">
                            3
                    </div>
            </form>
            <div className="table">
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
                        {faltantes.map(({reference,name,availableQuantity}, index) => (
                                <tr className="" key={index}>
                                    <th scope="row">{reference}</th>
                                    <td>{name}</td>
                                    <td>{availableQuantity}</td>
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
        </div>
    )
}
