import React from 'react'
import { useId } from 'react'
import './Css/Checkout.css'
import useCartContext from '../Contexts/Cart'
import { CheckoutCard } from './CheckoutCard'
export const Checkout = () => {
    const { cart } = useCartContext();
    const [sum, setSum] = React.useState(0);

    React.useEffect(() => {
        if (cart.length > 0) {
            const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            setSum(total);
        } else {
            console.log("Nothing in your cart");
            setSum(0); // Reset the sum if the cart is empty
        }
    }, [cart]);
    return (
        <div className='max-w-screen-lg m-auto my-4 checkout'>
            <h1 className='text-2xl text-blue-800'>Address & Detail</h1>
            <div className='flex flex-col w-full'>
                <div className="name flex flex-col">
                    <input type="text" placeholder='Full Name' />
                </div>
                <div className="detail flex flex-col">
                    <input type="email" placeholder='Email Address' />
                    <input type="tel" placeholder='Contact Number' />
                </div>
                <div className="address flex flex-col">
                    <input type="text" placeholder='Appartment Name or No.' />
                    <input type="text" placeholder='Near or Street Name' />
                    <input type="text" placeholder='Locality' />
                    <div className='flex flex-wrap flex-row justify-between'>
                        <input type="text" placeholder='State' />
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='Postal Code' />
                    </div>
                </div>
            </div>
            <h1 className='text-2xl text-blue-800'>Products in Your Cart</h1>
            <div className="flex flex-col">
                {cart.map((item)=><CheckoutCard image={item.image} title={item.title} price={item.price} quantity={item.quantity} />)}
            </div>
            <hr className='h-1 bg-blue-900 rounded-md my-4'/>
            <div className='flex justify-between items-center'>
                <h1>Total amount of your Cart :</h1>
                <h1>&#8377;{sum}</h1>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" name='cod' required />
                <h1 id='cod' >Cash On Delivery</h1>
            </div>
            <div className='flex items-center justify-center'>
                    {cart.length>0?<button className='text-2xl bg-blue-950 text-white px-4 w-2/4 rounded-sm' >Order</button>:""}
            </div>
        </div>
    )
}
