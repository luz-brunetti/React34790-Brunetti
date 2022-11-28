
import React, {useState} from 'react';

const ItemCount = () => {
    
    const [count, setCount] = useState(0)
    
    const addProduct = () => {
        setCount(count + 1)
    }
    const subtractProduct = () => {
        if(count > 0){
            setCount(count -1)
        }
        else{
            console.log("Tienes que agregar un producto")
        }
    }
    const confirmarCarrito = (e) => {
        console.log(e)
    }
    
    return (
    <div>
        <h4>Cantidad:</h4>
            
        <div className='counter-box'>

            <button className='counter-btn' onClick={()=> {subtractProduct(count -1 )}}> - </button>

            <p className='counter-num'>{count}</p>

            <button className='counter-btn' onClick={()=> {addProduct(count + 1)}} > + </button>
        </div>
        
        <button className='confirm-btn' onClick={confirmarCarrito}>Confirmar</button>
    

    </div>

    

    )
}

export default ItemCount;