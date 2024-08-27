import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faMusic, faPuzzlePiece, faCalculator, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => clearTimeout(timeoutId);
      }, []);
      

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Welcome to my corner of the digital landscape! I'm Aurora, a second-year student at Columbia University majoring in Computer Science and Mathematics. My journey into the tech world is closely intertwined with my interests in mathematics and economics. I love exploring the use of quantitative analysis at the intersection of these fields.
                    </p>
                    <p>
                        I've always been captivated by the process of unraveling intricate puzzles in mathematics. My passion for mathematical problem-solving led me to programming, where I discovered the power of code to translate abstract concepts into tangible realities. My interests lie in algorithmic trading, optimizing algorithms, and analyzing data. Additionally, I enjoy teaching math and spearheading clubs.
                    </p>
                    <p>
                        Outside of the quantitative fields, I’m an avid pianist and love performing both as a soloist and in chamber groups. My leisurely nights are spent solving the New York Times crossword/mini or reading a book. I’m always down to play a game of cards or poker, explore coffee shops, or embark on a spontaneous NYC adventure. I’m a huge fan of good food, good music, good films, the color red, and ducks. Feel free to reach out (check out the Contact page)!
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faCode} color="333333" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faMusic} color="DD0031" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faBook} color="28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faCoffee} color="783f04" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faPuzzlePiece} color="EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faCalculator} color="ec4d28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default About