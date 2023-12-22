import{useState} from "react";

function hook(){
    const[name, setName]=useState("prshnt");
    const[roll, setRoll]=useState(123);
    const[salary, setSalary]=useState(3455);
    const[arr,setArr]=useState([12,1,2,3,4,5]);
    const[obj,setObj]=useState({"key1":"value1","key2":"value 2"});
        
 

    return(
        <>
            <h1>my name is {name}</h1>
            <h1>my rool no is {roll}</h1>
            <h1>my salary is {salary}</h1>
            arr.map((element,index)=>)
        </>
    )
}
export default hook;