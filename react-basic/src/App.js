import logo from './logo.svg';
import './App.css';
// import Basic2 from './components/Basic2'
// import BasicUseEffect from './components/BasicUseEffect';
// import TimerContainer from './components/TimerContainer';
import ApiFetch from './components/ApiFetch';
import AppContext from './contexts/AppContext';
import B from './components/B';
import BasicReducer from './components/BasicReducer';

function App() {
  return (
    <AppContext.Provider value={'value from App.js'}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic2 name="Hooks"/> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch />
          <B /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <BasicReducer />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
