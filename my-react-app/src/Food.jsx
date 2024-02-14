

function Food() {

    const food1 = 'Mango';
    const food2 = 'Apple';
    const food3 = 'Grape';

    return(
        <ul>
            <li>Orange</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3.toLocaleLowerCase()}</li>
        </ul>
    );
}

export default Food;