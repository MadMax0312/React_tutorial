

function ButtonClick() {

    const handleClick = (e) => e.target.textContent = `Ouch!!! 🤣`

    return (
        <>
        <button onDoubleClick={(e) => handleClick(e)}>Click Me &#x1F60A;</button>
        </>
    )

}

export default ButtonClick;