import React, {useEffect,useRef } from 'react';
import "../text-card-component/text-card.css";
import Typed from 'typed.js';


export default function TextCard(props) {

  const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        'Welcome To Vasundra Projects Pvt Lmt',
        'Where Dreams Come True.',
        'A Name You Can Trust.',
        'A tradition of trust.',
        'Client Focused. Results Driven.',
        'Click or Call We do it All.'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div data-aos="flip-up"  data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="container">
      <div className="wrapper">
        <h1 style={{marginTop:"5rem"}}>{props?.heading}  <span style={{ whiteSpace: 'pre' }} ref={el} /> </h1>

        <div className="wrapper-body">
          <span> {props?.subHeading}</span>
          <p className="para">{props?.para}</p>
          <a className="read-page-link" href="#id1">
            {props?.link}
          </a>
        </div>
      </div>
       {props.img&&<img className="card-img" alt ="img" src={props?.img} />}
    </div>
  );
}
