

function Lista(props) {
    return (
        props.producto.map(product => {
            return (
                <div>
                    <h3>{props.categoria}</h3>
                    <ul>
                        <li>{product.producto}</li>
                    </ul>
                </div>
            )
        })
    )
}

export {Lista};
