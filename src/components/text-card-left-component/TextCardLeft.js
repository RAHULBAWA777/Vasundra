import "../text-card-left-component/text-card-left.css";
export default function TextCardLeft(props) {
  return (
    <div className="container-left">
      
      <div className="wrapper-left">
        <h1 data-aos="fade-left" data-aos-duration="1500">{props?.heading}</h1>

        <div className="wrapper-body-left" >
          {/* <span> {props?.subHeading}</span> */}
          <p className="pp" data-aos="fade-right" data-aos-duration="1500">{props?.para}</p>
          {/* <a className="read-page-link" href="#id1">
            {props?.link}
          </a> */}
        </div>
      </div>
      
      <img className="card-img-left" alt ="vasundara" src={props?.img} style={{order:props.imgOrder}}  data-aos="fade-right" data-aos-duration="1500"/>
    </div>
  );
}
