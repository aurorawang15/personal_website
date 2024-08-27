import { useRef } from 'react'
import './index.scss'
import LogoA from '../../../assets/images/logo-a.png'

const Logo = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()


    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoA} alt="A" />
        </div>
    )
}
 
export default Logo