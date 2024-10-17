import Prop_com3 from "./third";

var Prop_com2=(props)=>{
    return(
        <>
        <h1>Hello {props.children[0]} age {props["children"][1]["two"]} -this is 2nd prop_com</h1>
        {props.children[2]}
        {props.children[3]}
        <Prop_com3>
            {props}
        </Prop_com3>
        </>
    )
}

export default Prop_com2;