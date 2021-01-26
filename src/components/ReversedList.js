function ReversedList(props) {


    const wordList = [...props.wordList]
    const listItems = wordList.map((word, index) =>
        <li key={index}>{word}</li>
    );


    return (
        <div className="container">
            <h1>
                Reversed Word List:
            </h1>
            <ul>
                {listItems}
            </ul>
            <button onClick={() => props.clear()}>Clear List</button>
            <hr></hr>
        </div>
    );
}

export default ReversedList;
