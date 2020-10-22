import React, { ReactElement } from 'react'


interface ProductProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Product(Props: ProductProps): ReactElement {
    
    // let handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     Props.UpdateField("50")
    //   };

    return (

        <div>
            <div style={{ border: "solid black 1px", width: "200px" }}><h1>PRODUCT</h1><p>Desc</p>
                <button onClick={Props.ClickHandler}>Button</button></div></div>
    )
}
