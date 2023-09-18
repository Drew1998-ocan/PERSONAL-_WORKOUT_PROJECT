import { useContext } from "react";
import { MyContext } from "../context/context";
export const UseWorkContext = () =>{
    const context = useContext(MyContext);
    if (!context){
     throw Error("must use a UseWorkoutContext")
    }
    return context
} 