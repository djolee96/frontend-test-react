function WordInput(props) {

    return (
        <div className="container">
            <h1>
                Enter a word:
            </h1>
            <input type="text" value={props.val} onChange={e => props.setVal(e.target.value)}></input>
            <hr></hr>
        </div>
    );
}

export default WordInput;
