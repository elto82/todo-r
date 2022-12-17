import React from "react";
import "../TodoCounter.css"

function TodoList(props){
  return(
    <section>
            <ul>
                {props.children}
            </ul>
        </section>
  )
}

export {TodoList};