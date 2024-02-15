

function ButtonClick() {

    let count = 0

    const handleClick2 = (name) => {
        if(count < 3) {
            count++
            alert(`${name} you clicked me ${count} time`)
        } else {
            alert(`${name}!!!!! stop clicking me`)
        }
    }

    return (
        <>
        <button onClick={(name) => handleClick2('basheer')}>Click Me &#x1F60A;</button>
        </>

    )

}

export default ButtonClick;