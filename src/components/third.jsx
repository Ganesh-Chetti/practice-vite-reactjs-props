

var Prop_com3=(props)=>{
    
    
    return(
        <>
        <h1>Hey {props["children"]["children"][0]} age {props["children"]["children"][1]["three"]} -this is 3rd prop_com</h1>
        {props["children"]["children"][2]}
        </>
    )
}

export default Prop_com3;