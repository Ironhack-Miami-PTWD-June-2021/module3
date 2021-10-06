import './App.css';

import Counter from './components/Counter';

import LikeButton from './components/LikeButton';

import CounterWithHooks from './components/CounterWithHooks';

import LikeButtonWithHooks from './components/LikeButtonWithHooks';

function App() {
  return (
    <div className="App">

    <Counter />

    <br />
    <br />

    <LikeButton />

    <br />
    <br />

    <CounterWithHooks />

    <br />
    <br />

    <LikeButtonWithHooks />
    </div>
  );
}

export default App;
