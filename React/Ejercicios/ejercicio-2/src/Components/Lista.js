

export default function Lista(props) {
    const {categoria, productos} = props;
    return (
        <div>
            <h3>{categoria}</h3>
            <ul>{productos.map(({id, nombre, marca, modelo, precio}) => {
                return (<li key={id}>
                            {nombre} {marca} {modelo}.Precio: {precio}
                        </li>)
                })}
            </ul>
        </div>      
    )
}

