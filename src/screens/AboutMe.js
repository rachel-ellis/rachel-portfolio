import './AboutMe.css';
import quickBooks from '../images/qbo.svg';
import music from '../images/music.svg';
import chess from '../images/chess.svg';
import resume from '../images/resume.svg';

const AboutMe = () => (
    <div className="about">
        <div className="top">
        <p> I’m currently interning at Intuit as a software 
            developer on QuickBooks Online using 
            JavaScript/TypeScript and React.
        </p>
        <img src={quickBooks} alt="QuickBooks Online logo" />
        </div>
        <div className="middle">
        <p> Outside of web development, I am also interested
            in data science and machine learning. In my 
            freetime, I like to spend time with my dog,
            play piano and solve chess puzzles.
        </p>
        <img src={music} alt="music notes" />
        </div>
        <div className="lower">
        <p>
        <strong>Check out my resume for more details of my experience!</strong>
        </p>
        <img src={resume} alt="resume icon" />
        </div>
    </div>
);

export default AboutMe;