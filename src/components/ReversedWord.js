function ReversedWord(props) {

    const reverseWord = props.word.split("").reverse().join("");

    const addAndRemove = (word) => {
        props.addWord(word);
        props.clear();
    }

    return (
        <div className="container">
            <h1>
                Reversed Word:
            </h1>
            <p>{reverseWord}</p>
            <button onClick={() => addAndRemove(reverseWord)} >Add</button>
            <hr></hr>
        </div >
    );
}

export default ReversedWord;

