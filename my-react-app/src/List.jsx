import PropTypes from 'prop-types'

function List(props) {

    // const fruits = ['apple', 'mango', 'grapes', 'cherry', 'watermelon']

    // ------  Sorting ---------

    // food.sort((a,b) => a.name.localCompare(b.name)) -->Alphabetical Sort
    // food.sort((a,b) => b.name.localCompare(a.name)) -->Reverse Alphabetical Sort
    // food.sort((a,b) => a.calories - b.calories) -->Numeric sort

    // ------- Filtering based on calories --------

    // const lowCalFoods = food.filter(item => item.calories < 100) less than 100
    // const lowCalFoods = food.filter(item => item.calories >= 100)

    // const items = food.map(food=> <li key={food.id}>
    //     {food.name}: &nbsp;<b>{food.calories}</b>
    //     </li>)

    // const listItems = fruits.map(fruit => <li>{fruit}</li>)

    const category = props.category
    const itemList  = props.items

    const listItems = itemList.map(item => 
                                <li key = {item.id}>
                                {item.name}: &nbsp;
                                <b>{item.calories}</b>
                                </li>)
    return (
        <>
            <h2 className="list-category">{category}</h2>
            <ol className="list-items">{listItems}</ol>
        </>
    
    )
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                        name: PropTypes.string,
                        calories: PropTypes.number}))
}
List.defaultProps = {
    category: "Category",
    items: [],
}

export default List;