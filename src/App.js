import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <p>Hi,my name is Thayuran</p> */}
      
      <section>
        <div>
            <h1>Welcome to Thayu Portfolio</h1>
            <h3>Make The World A Better Place With Developer.</h3>
            <p>You might saw me jumping, climbing buildings, and stopping trains. But nobody pays me a dime for that work. That's why I am learning and mastering web development. I will not stop until I become the Web Development Hero.</p>
            <a class="btn" href="#">Hire Me</a>
        </div>
        
    </section>
    
    <section>
        <div>
           
        </div>
        <div>
            <h1>BIG DREAM</h1>
            <h3>Become a Web Developer</h3>
            <p>I already learned the basic HTML and CSS.My goal is to build 3 websites and learn advanced topics.</p>
            <a class="btn" href="#">Download CV</a>
        </div>
    </section>
   
    <section>
        <h1>Experience</h1>
        <div>
            <h2>Full Stack Web Developer</h2>
            <h3>2022 Dec - 2023 March |C# Desktop Developer</h3>
            <p>I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Backend language framework called Laravel. I even know the deployment,server and security. 
              I will give you 100% web solution.</p>
        </div>
    </section>
    
    <footer>
        <p>© Thayu 2024, Full Stack Developer.</p>
    </footer>


      
    </div>
    
  );
}

export default App;
