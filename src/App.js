import { useState } from 'react';
import './App.css';

const App = () => {
  const names = [
    'Adam',
    'Alex',
    'Anthony',
    'Anna',
    'Bob',
    'Bill',
    'Chad',
    'David',
    'Diana',
    'Frank',
    'Fred',
    'Maria',
  ];
  const suggestions = [];

  const [value, setValue] = useState('');
  const [list, setList] = useState();

  const setInputValue = (e, name) => {
    setValue(name);
  };

  const autocomplete = (e) => {
    setValue(e.target.value);

    names.forEach((name) => {
      if (
        name.substring(0, e.target.value.length).toLowerCase() ===
        e.target.value.toLowerCase()
      ) {
        suggestions.push(name);
        setList(
          suggestions.map((name, index) => {
            return (
              <li key={index} onClick={(e) => setInputValue(e, name)}>
                {name}
              </li>
            );
          })
        );
      }

      if (e.target.value.length === 0) {
        setList('');
      }
    });
  };

  return (
    <div className="container">
      <input
        className="autocomplete"
        onChange={(e) => autocomplete(e)}
        value={value}
      />
      <ul className="suggestions">{list}</ul>
    </div>
  );
};

export default App;
