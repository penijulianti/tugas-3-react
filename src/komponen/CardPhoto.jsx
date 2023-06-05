function CardPhoto (props) {
    return(
    
    <div style={{
        height: 400,
        width: 250,
        backgroundColor: "crimson",
        borderRadius: 5,
        padding: 5,
        marginBottom: 15,
        marginLeft:10,
        

    }} onClick={props.myAlert}>
        <br></br>
        <img src={props.al} style={{widt
                : '50%',height : '50%'}}/>
        <h3>{props.nm}</h3>
        <p>{props.pr}</p>
    </div>
    )
   }
   

export default CardPhoto