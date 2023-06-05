
function CardPhoto (props) {
    return(
    
    <div style={{
        height: 400,
        width: 300,
        backgroundColor: "crimson",
        borderRadius: 5,
        padding: 5,
        marginBottom: 15,
        

    }} onClick={props.myAlert}>
        <br></br>
        <img src={props.al} style={{widt
                : '500px',height : '250px'}}/>
        <h3>{props.nm}</h3>
        <p>{props.pr}</p>
    </div>
    )
   }
   

export default CardPhoto