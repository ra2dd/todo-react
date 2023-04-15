function App(props) {
  const subject = props.subject;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Working with {subject}
        </p>
      </header>
    </div>
  );
}

export default App;
