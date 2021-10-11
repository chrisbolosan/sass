// import { header } from 'express/lib/request';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <p>Hello World</p>
        <button>Hello</button>
      </header>
      <div className="contact">
        <button>Submit</button>
        <div class="info">
          <h1>My contact information</h1>
          <p>This is my contact information</p>
        </div>
      </div>
    </div>
  );
}

export default App;
