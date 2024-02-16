import React, {useState} from 'react'

function MyComponent2() {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState('')
    const [payment, setPayment] = useState('')
    const [shipping, setShipping] = useState('')

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return (<div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number'/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}
            placeholder='Delivery Instructions'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select payment</option>
                <option value="RazorPay">RazorPay</option>
                <option value="Wallet Transfer">Wallet Transfer</option>
                <option value="Cash on Delivery">Cash on deivery</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input type="radio" value='Pick Up' 
                checked={shipping === 'Pick Up'}
                onChange={handleShippingChange}/>
                Pick Up
            </label><br />
            <label>
                <input type="radio" value='Delivery' 
                checked={shipping === 'Delivery'}
                onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shippin: {shipping}</p>

            </div>)

}

export default MyComponent2