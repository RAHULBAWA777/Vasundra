import React from 'react'
import founderPic from'../../images/ramesh.jpg'
import './about.css'

const AboutUs = () => {
    return (
        <div className='containerx'>
            <h1 data-aos="fade-up" data-aos-duration="2000">ABOUT US</h1>
            <img className='FP' src={founderPic} data-aos="fade-up" data-aos-duration="2000"></img>
            <p><strong>Vasundhara Projects (P) Ltd </strong>is a premier real estate development company with more than a decade of rich experience in execution of landmark projects across the length and breadth of Hyderabad. Founded in 2002 by Mr. K. V. Ramesh, Vasundhara has carved a permanent niche for itself by adopting quality system standards and meeting people's aspirations and desire for a comfortable lifestyle. Our goal is to provide quality plots with international standards and enhance the quality of life of our customers. </p>

            <p>Our mode of operation and aggressive pricing give you industry-leading performance at a reasonable and highly competitive cost. The organization's impeccable track record is the result of a client-oriented approach and an unwavering commitment to complete customer satisfaction. </p>


            <p>Our entrepreneurial approach to real estate property investment, professionalism and vision has been instrumental in creating world class living for our customers. In the process of growth and change, Vasundhara has become synonymous with quality, reliability, high professional standards and long-lasting customer relationships. </p>


            <p>All Vasundhara ventures are approved by DTCP and layouts are designed in accordance with 100% Vaasthu. Through our one-of-a-kind projects, we constantly try to set benchmarks in quality plots and upgraded amenities. </p>


            <h1 >Our Philosophy </h1>

            <p style={{fontStyle:'italic', borderLeft:'5px solid var(--primary-01)', paddingLeft:'15px', color:'var(--primary-01)'}}>The philosophy "Living is not just leading the Life"- is reflected in all our projects. Projects like Tirumala Enclave, Lorven City Phase - I & II, Lorven's Paradise Phase - I & II, Lorven's Fortune Club, Vensai Township, Lorven's Hi Land and Lorven's Residencia etc stand testimony to this fact.</p>


            <h1>Founder </h1>

            <p><strong>Chairman and Managing Director Mr. K.V. Ramesh (Ramesh V Katragadda)</strong> has over 14 years of experience in real estate industry. He possesses vast knowledge about the industry and brings to his job, a wealth of ideas and thoughts that has transformed the lifestyle of thousands of people. He has faced challenges in today's market place with grit and astute thinking. </p>

            <p><strong>Mr. K.V. Ramesh</strong>, a first generation entrepreneur, believes in maintaining transparency in business transactions and adhering to specified norms of legal, environmental and ethical practices. Under his leadership, Vasundhara has developed over 500 acres of planned projects and fulfilled the dreams of over 6,000 customers. His first project was at Tirupati in 1999, he also built another project in Bangalore. Later, in 2000, he developed a project in Ooty. All his constructions carry an air of authenticity with strong emphasis on environment safety, clear and legal titles and timely completion. </p>

        </div>
    )
}

export default AboutUs