// this is an example of rendering a list in React using the map() function



function List(){

    const fruits = [{id: 1, name: "Apple", calories: 95}, 
                    {id: 2, name: "Banana", calories: 105}, 
                    {id: 3, name: "Cherry", calories: 50}, 
                    {id: 4, name: "Date", calories: 60}, 
                    {id: 5, name: "Grape", calories: 162}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // numeric
    // fruits.sort((a, b) => b.calories - a.calories); // reverse numeric

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    

    const listItems = fruits.map(fruits => <li key={fruits.id}>
                                            {fruits.name}: &nbsp;
                                           <b>{fruits.calories}</b> calories</li>)

    return(<ul>{listItems}</ul>);
}


export default List;