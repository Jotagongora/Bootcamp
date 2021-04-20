// import { Fragment } from "react";

export default function FirstComponent(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa eum animi ratione neque, voluptatum voluptatem repellendus minus odit tempora itaque, ad possimus numquam. Facere tempora quos esse sapiente illum.</p>
        </>
    )
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
