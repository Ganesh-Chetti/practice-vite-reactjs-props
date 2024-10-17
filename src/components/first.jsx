import Prop_com2 from "./second";
var name="Ganesh"
var obj={one:10,two:20,three:30}

var Prop_com12=()=>{
    return(
        <>
        <h3>{name} -this is another com</h3>
        </>
    )
}

var Prop_com1=()=>{

    return(
        <>
        <h1>Hi {name} age {obj["one"]} -this is 1st prop_com</h1>
        <Prop_com2 >
            {name}
            {obj}
            {<h2>Chetti</h2>}
            <Prop_com12/>
        </Prop_com2>
        </>
    )
}

export default Prop_com1;