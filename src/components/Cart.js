import { useState } from "react"

export const Cart = () => {

    const [count,setCount] = useState(0)
  return (
    <div>
        <button className="cartButton">{`Cart ${count}`}</button>
    </div>
  )
}
