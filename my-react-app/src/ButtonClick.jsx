

function ButtonClick() {

    const handleClick = () => alert("OUCH!")

    const handleClick2 = (name) => alert(`${name} stop clicking me!`)

    return (
        <>
        <button onClick={() => handleClick2('basheer')}>Click Me &#x1F60A;</button>
        </>

    )

}

export default ButtonClick;