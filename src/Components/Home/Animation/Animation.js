import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'
const Animation = () =>{

    const [flip, set] = useState(false)
    const props = useSpring({
        loop: true,
        delay: .5,
        to: [
          { opacity: 1, color: '#ffaaee' },
          { opacity: 0, color: '#f72585' },
        ],
        from: { opacity: 0, color: 'red' },
      })
  
return (
 
    <animated.h1 className="text-center text-brand" style={props}>Welcome to our Day care center</animated.h1>
)
}

export default Animation;