import { useState } from 'react';
import '../style/home.css'

function Header() {
  
  const [isShaking, setIsShaking] = useState(false);

  const handleDivhover=()=>{
    setIsShaking(true); // Trigger shake animation
    setTimeout(() => setIsShaking(false), 500); // Remove the class after animation ends
  };


  return (
    
      <div className='header-container'>
       <img className='img' src="/assets/headshot.jpeg"></img>
       <div>
       <h3 className='name'>Sujit Hegde</h3>
       <h4 className='title'>Structural Engineer / Computational Designer</h4>
       
       </div>
       <div onPointerEnter={handleDivhover} className='conact-container' >
        <img className={`contact-img ${isShaking ? 'shake' : ''}`} src='/assets/call.png'></img>
       </div>
      </div>
      
    
  )
}

export default Header
