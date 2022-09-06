import "../footer-component/footer-component.css";

export default function FooterComponent() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-copyright">
          <div className="footer-subheading"> About Us</div>
          <div className="footer-subheading-content">
            Vasundhara Projects lives by the values of quality and precision. In Vasundhara, you will find an able and invaluable partner for the plot or home of your dreams. Whether you are thinking of a modest home or a luxury nest pad, we are uniquely positioned and qualified to deliver outstanding quality on-time and within the budget.
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-subheading"> Contact Us</div>
          <div className="footer-subheading-content">
            <div className="footer-contact"> Vasundhara Projects </div>{" "}
            Phone :
            +91 40 66816622
            +91 40 66816632
            <br/>
            Email:
            info@vasundharaprojects.com
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-subheading"> Address </div>
          <div className="footer-subheading-content">
            Vasundhara Projects Pvt. Ltd.#502 ,
            <br />
            Chaitanya Chambers
            Chaitanyapuri, Kothapet,
            <br />
            Hyderabad - 500060, Telangana
            <br />
            Landmark - Beside HP Petrol Bunk
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-subheading"> Disclaimer </div>{" "}
          <div>
           The content given in the presentation is indicative only. The developer reserves the right for any alteration in plans, elevations & specifications.{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
