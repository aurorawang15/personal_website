import React from "react"
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => clearTimeout(timeoutId);
      }, []);
      

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['P','r','o','j','e','c','t','s']}
                                idx={15}
                            />
                        </h1>
                        <p>
                            aurorawang.dev (v1)
                            <br/>
                            The first iteration of this personal website, built with ReactJS and hosted by Netlify. Soon to be updated for mobile compatability.
                        </p>
                        <p>
                            This page will be finished soon!
                        </p>
                    </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio