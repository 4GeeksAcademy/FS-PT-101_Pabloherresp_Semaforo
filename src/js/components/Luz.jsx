import React from "react"

const Luz = (props) => {

    return (
        <div onClick={() => {
            props.stateFunction(props.color)
        }} className={"luz " + props.color + " my-3 rounded-circle " + (props.color == props.elegido ? "encendido" : "")}>
        </div>
    )
}

export default Luz