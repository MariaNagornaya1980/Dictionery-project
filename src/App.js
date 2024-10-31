import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <footer>
            This project was coded by{" "}
            <a
              href="https://github.com/MariaNagornaya1980"
              target="_blank"
              rel="noreferrer"
            >
              Maria Nagornaya
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/MariaNagornaya1980/Dictionery-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://resilient-concha-b48be4.netlify.app//"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
          <small>Coded by Maria Nagornaya</small>
        </footer>
      </div>
    </div>
  );
}
