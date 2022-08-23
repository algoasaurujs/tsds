import {useLayoutEffect, useState} from "react";

const useStickyHeader = (offset = 0) => {
    const [stick, setStick] = useState(false);
  
    const handleScroll = () => {
      setStick( window.scrollY > offset );
    };
    
    useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
        return(() => {
            window.removeEventListener('scroll', handleScroll);
        });
    });
    return stick;
}

export default useStickyHeader