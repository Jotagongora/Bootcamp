import {Lista} from './Lista';

function Tienda() {
    const tienda = {
        electronica: [
            {id: 27, producto: "Televisor", marca: "LG", modelo: "XP7302", precio: 399},
            {id: 28, producto: "Equipo Hi-FI", marca: "Samsumg", modelo: "VF235", precio: 179},
            {id: 29, producto: "Televisor", marca: "Sony", modelo: "Bravia-173", precio: 498},
        ],
        alimentacion: [
            {id: 30, producto: "Galletas", marca: "Maria", precio: 0.90},
            {id: 31, producto: "Ensalada", marca: "Imizurra", precio: 1.30},
            {id: 32, producto: "Patatas", marca: "McKain", precio: 0.90},
            {id: 33, producto: "Pasta", marca: "Gallo", precio: 0.90},
        ],
        mascotas: [
            {id: 34, producto: "Corquetas para gato", marca: "Purina", precio: 4.90},
            {id: 35, producto: "arena de gato", marca: "Limpior", precio: 1.10},
        ]
    }
    return (
        <div>
            <Lista categoria="electronica" products2={tienda.electronica.map(product => <li>{product.producto}</li>)}/>
            <Lista categoria="alimentacion" products={tienda.alimentacion} products2={tienda.alimentacion.forEach(product => product.producto)}/>
            <Lista cateogira="mascotas" products={tienda.mascotas} products2={tienda.mascotas.forEach(product => product.producto)}/>
        </div>
    )
}

export {Tienda};