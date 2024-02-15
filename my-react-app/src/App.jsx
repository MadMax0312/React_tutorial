
import List from './List.jsx'

function App() {
    
    const fruits = [
                {id: 1, name: 'biriyani', calories: 150},
                {id: 2, name: 'porotta', calories: 50},
                {id: 3, name: 'mandi', calories: 100},
                {id: 4, name: 'rotti', calories: 80},
                {id: 5, name: 'cake', calories: 5}
                ]

    const vegetables = [
                    {id: 6, name: 'tomato', calories: 700},
                    {id: 7, name: 'potato', calories: 170},
                    {id: 8, name: 'brinjal', calories: 230},
                    {id: 9, name: 'pea', calories: 550},
                    {id: 10, name: 'ginger', calories: 400}
                    ]

    return (
        <>
        {fruits.length > 0 && <List items = {fruits} category="Fruits"/>}
        {/* {fruits.length > 0 ? <List items = {fruits} category="Fruits"/> : null} instead of using this ternary operator we can use above method also*/}
        {vegetables.length > 0 ? <List items = {vegetables} category="Vegetables"/> : null}
        </>
    );
}

export default App
