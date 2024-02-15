

function Shopping() {

    let fruits = [
        {id:1, isFruit:true, name:'Mango'},
        {id:2, isFruit:true,name:'Orange'},
        {id:3, isFruit:false,name:'Cabbage'}
    ]

    const listItems = fruits.map(item=>
        <li key={item.id}
        style={{
            color: item.isFruit ? 'green' : 'red'
        }}>
            {item.name}
        </li>)

    return (
      

          <h1>  {listItems}</h1>
       
        
    )

}

export default Shopping;