import { todo } from "../../../backend/db";

export function Todo({props}){
    
    return <div>
    {props.map(function(prop){
        return <div>
        <h1>{prop.title}</h1>
        <h2>{prop.description}</h2>
        <button>{prop.completed == true ? "Completed" : "Mark as Completed" }</button>
            </div>
        })}
    </div>
}