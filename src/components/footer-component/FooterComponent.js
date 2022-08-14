import "../footer-component/footer-component.css";

export default function FooterComponent() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-copyright">
          <div className="footer-subheading"> About Us</div>
          <div className="footer-subheading-content">
          Theme Ambience Constructions Pvt Ltd, a well established construction company headed by Mr. Bimal Kumar Kedia (MD) in the twin cities known for its uncompromising quality standards, and in schedule completion of projects, ever evolving to provide customers with an environment that truly understands their needs and aspirations.
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-subheading"> Contact Us</div>
          <div className="footer-subheading-content">
            <div className="footer-contact"> Theme Ambience Constructions Pvt Ltd </div>{" "}
            theme@themeambience.com 
            www.themeambience.com
            <br/>
            Tel:040-23377851/53
            <br/>
            Sales22@propbuynsell.com
            <br/>
            9391415599 / 9391415884 / 6303363461
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-subheading"> Address </div>
          <div className="footer-subheading-content">
            Plot 1-B, H.No. 8-2-293/82/L/1-B. 1st Floor,
<br/>
            MLA Colony, Road No. 12,

            Banjara Hills,
            <br/>
             Hyderabad - 500034
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-subheading"> Disclaimer </div>{" "}
          <div>
            This website is only a conceptual presentation of the project and
            not a legal offering. The specification, plans, images and other
            details herein are only indicative and the developer/owner reserves
            the right to change any of these in the interest of the development
            as deemed fit.{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
