import { useState } from "react"

export const CartButton = () => {
    const [show,setShow] = useState(true)
    const [count,setCount] = useState(0)
    
  return (
    <div>

        {show ? <button className="addBtn" onClick={()=>(setShow(!show),setCount(count+1))} >Add to Cart</button> : <button className="removeBtn" onClick={()=>(setShow(!show),setCount(count-1))}>Remove from Cart</button>}
    </div>
    
  )
}
