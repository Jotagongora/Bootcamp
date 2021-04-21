// import { Fragment } from "react";
import PropTypes from 'prop-types';

export default function FirstComponent(props) {
    
    const myFunction = function (name) {
        return (evento) => console.log(name, evento); 
    };
    
    return (
        <>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa eum animi ratione neque, voluptatum voluptatem repellendus minus odit tempora itaque, ad possimus numquam. Facere tempora quos esse sapiente illum.</p>
            <button onClick={myFunction("Marta")}>Click me!</button>
        </>
    )
}

FirstComponent.defaultProps = {
    title: "Sin titulo",
    date: "Sin fecha",
    products: []
}

FirstComponent.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    producto: PropTypes.array
}




// Export default FirstComponent. alternativa//
//Asi solo se puede export default por archivo.

function SecondComponent() {
    return (
        <div>
            <h1>Soy otro componente</h1>
        </div>
    )
}

export {SecondComponent};

function ThirdComponent() {
    return (
        <div>
            <h1>Soy otro componente más</h1>
        </div>
    )
}

export {ThirdComponent};
