import { useState } from "react"
import Logo from '../assets/cart.jpg'
import { CartButton } from "./CartButton"


export const Card = () => {
    const[data,setData] = useState([
        {
            title:"Fancy Product",
            price: "$40 - $80",
            review: "⭐⭐⭐⭐⭐"
        },{
            title:"Special Item",
            price: "$18",
            review: "⭐⭐⭐⭐⭐"
        },{
            title:"Sale Item",
            price: "$25"
        },{
            title:"Popular Item",
            price: "$40",
            review: "⭐⭐⭐⭐⭐"
        },{
            title:"Sale Item",
            price: "$25",
        },{
            title:"Special Item",
            price: "$18",
            review: "⭐⭐⭐⭐⭐"
        },{
            title:"Popular Item",
            price: "$40",
            review: "⭐⭐⭐⭐⭐"
        }
    ])


  return (
    <div className="content" >
        {data.map((value,idx)=>(
        <div className="card">
            <img src={Logo} alt="" className="cartImage"/>
            <h2>{value.title}</h2>
            <p>{value.price}</p>
            <p>{value.review}</p>
            <CartButton/>
        </div>
        ))    
    }
    </div>
  )
}
