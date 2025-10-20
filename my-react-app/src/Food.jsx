function Food() {

    const food1 = "Pizza";
    const food2 = "Sushi";
    const food3 = "Burger";

    return (
        <div>
            <ul>   
                <li>{food1}</li>
                <li>{food2.split('').reverse().join('')}</li>
                <li>{food3.toUpperCase()}</li>
            </ul>
        </div>
    );

}

export default Food;