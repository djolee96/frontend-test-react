import './App.css';
import WordInput from './components/WordInput';
import ReversedWord from './components/ReversedWord';
import ReversedList from './components/ReversedList';
import { useState } from 'react'


function App() {

  const [inputValue, setInputValue] = useState('');
  const [wordList, setWordList] = useState([]);


  const pushWord = (newWord) => {
    const newList = [...wordList, newWord];
    setWordList(newList);
  }

  const clearInput = () => {
    setInputValue('');
  }

  const clearList = () => {
    setWordList([]);
  }

  return (
    <div className="App">
      <WordInput setVal={setInputValue} val={inputValue} />
      <ReversedWord word={inputValue} addWord={pushWord} clear={clearInput} />
      <ReversedList wordList={wordList} clear={clearList} />
    </div>
  );
}

export default App;
