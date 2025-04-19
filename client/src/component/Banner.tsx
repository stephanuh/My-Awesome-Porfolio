import { useState, useEffect } from 'react';
import '../Banner.css';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  const rotateTexts = ['Web Developer', 'Full Stack Developer'];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % rotateTexts.length;
    let fullText = rotateTexts[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section id="home" className="banner">
      <div className="container banner-container">
        <div className="banner-content">
          <div className="banner-text">
            <h1>Hi, I'm <span className="highlight">Stephanie</span></h1>
            <h2>
              I'm a <span className="txt-rotate">{text}</span>
              <span className="cursor">|</span>
            </h2>
            <p>
              I create beautiful and functional websites with a focus on both 
              front-end design and back-end functionality.
            </p>
            <div className="banner-btns">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
            <div className="banner-social">
              <a href="https://github.com/stephanuh" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:stephaniesosa02@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="banner-image">
            <div className="banner-shape"></div>
          </div>
        </div>
      </div>
      <div className="banner-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;