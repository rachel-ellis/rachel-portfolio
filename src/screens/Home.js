import rachel from '../rachel.svg';
import enggLogo from '../enggLogo.svg';

const introText = `const intro = “Hi! My name is Rachel Ellis”; \n \n` +
// eslint-disable-next-line no-useless-concat
`console.log($` + `{intro});`;

const introTextMobile = "Hey, my name is Rachel Ellis!";


export const Home = () => (
    <div>
        <div className="split left desktop">
        <h1><code>{introText}</code></h1>
        <p>I’m a 4th year Software Engineering student at the University of Alberta </p>
        <img src={enggLogo} className="logo" alt="engg logo" />
        </div>
        <div className="split right desktop">
          <img src={rachel} className="me" alt="me!" />
        </div>
        <div className="mobile">
          <h1>{introTextMobile}</h1>
          <p>I’m a 4th year Software Engineering student at the University of Alberta </p>
          <img src={rachel} className="me" alt="me!" />
          <img src={enggLogo} className="logo" alt="engg logo" />
        </div>
    </div>
);
