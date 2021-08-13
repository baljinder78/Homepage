import React from 'react';
//css
import "./Main_Content.css";

//Button
import Button from "../Button";

//profile pic
import pp from "../../images/av1.png";

//brands
import Brand1 from '../../images/Brands/Apnipolicy LOGO.png';
import Brand2 from '../../images/Brands/Hikup LOGO.png';
import Brand3 from '../../images/Brands/Vedic Wellness university LOGO.png';
function Main_content() {
    return (
      <>
        <div className='main_content_container'>
          <div className='main_content_area'>
            <div className='main_content_area_left'>
              <p className='content_headers'>
                HELPING <b>INSURANCE BRANDS</b> IN <br /> ACHIEVING MORE -
                AUTHORITY |BRAND AWARENESS | SALES.
              </p>
              <p>
                WITH <br /> <b>DEEP CONTENT MARKETNG</b>
              </p>
              <Button content='HIRE ME!' />
            </div>
            <img className='main_content_area_right' alt='riteesh' src={pp} />
          </div>
          <div className='Brand_content_Area'>
            <h2>BRANDS WORKED WITH...</h2>
            <div className='Brands_worked'>
              <img alt='brd1' src={Brand1} />
              <img alt='brd2' src={Brand2} />
              <img alt='brd3' src={Brand3} />
            </div>
          </div>
        </div>
        <div className='main_content_container'>
          <h1 className='myInfo_content_heading'>
            Hi there, My name is Riteesh
          </h1>

          <p className='myInfo_content_paragraph'>
            I help Insurance companies in attaining more authority, brand
            awareness, and sales using new and deep concepts of digital
            marketing!
          </p>
          <p className='myInfo_content_paragraph'>
            The consumer penetration of the insurance industry in India is less
            than 4% which clearly states the availability of opportunities in
            this market.
          </p>

          <p className='myInfo_content_paragraph'>
            Then why do insurance companies suffer in generating sales?
          </p>
          <p className='myInfo_content_paragraph'>
            This happens because the majority of companies use old and rigid
            methods of marketing like - TV, radio, or newspapers, etc. whereas
            the people are getting smart and prefer digital platforms like -
            blogs, videos, social media, etc
          </p>

          <p className='myInfo_content_paragraph'>
            And targetting right there by mixing the evergreen methods of
            marketing with digital tools can burn this gap between customers and
            insurers.
          </p>

          <div className='want_Demo_area'>
            <h3 className='demo_text'>
              So what are you waiting for? Book your demo call now! and double
              down your sales!
            </h3>
            <Button content='BOOK NOW!' />
          </div>
        </div>
        <div className='main_content_container'>
          <div className='My_Service_container'>
            <h1 className='My_service_heading'>My Services!</h1>
            <p className='My_service_content'>
              Don't worry if you don't know which one will help you in achieving
              your goals,
            </p>
            <p className='My_service_content'>
              Book a demo call with me now and I will provide a free
              consultation plus a personalized strategy.
            </p>

            <p className='My_service_content'>
              Book a demo call with me now and I will provide a free
              consultation plus a personalized strategy.
            </p>

            <Button content='FREE CONSULTATION' className='button_mysevice' />
          </div>
          <div className='services_container'>
            <div className='service_container'>
              <h1 className='service_heading'>Deep Content marketing</h1>
              <p className='service_content'>
                Using deep content marketing you provide highly relevant content
                to your target audience and this builds trust over your audience
                and this trust gets you the transaction from customers!
              </p>
              <Button content='Learn More' />
            </div>
            <div className='service_container'>
              <h1 className='service_heading'>Email marketing </h1>
              <p className='service_content'>
                Whether you are a B2B business trying to close more clients or a
                B2C business trying to get more connected with your audience
                email marketing is here to save you all! And provides you the
                highest reurn on every penny you spent!
              </p>
              <Button content='Learn More' />
            </div>
            <div className='service_container'>
              <h1 className='service_heading'> SEO marketing </h1>
              <p className='service_content'>
                Rank your website on google with SEO marketing and establish
                more authority and sales in your niche! And get high-quality
                unlimited leads for almost free!
              </p>
              <Button content='Learn More' />
            </div>
          </div>
        </div>
        <div className='main_content_container'>
          <h1 className='testemonial_header'>Testimonials</h1>
          <div className='testimonials_area'>
            <img className='testemonial_pic' alt='riteesh' src={pp} />
            <i className='testemonial_content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              molestie, nibh non placerat ultricies, dui sem luctus arcu, eu
              facilisis metus magna at ligula. Maecenas sit amet egestas augue.
              Etiam a dui quis nisl ullamcorper egestas. Maecenas ultricies
              blandit ligula, gravida viverra mauris tincidunt eu. Vestibulum
              tincidunt turpis vitae ex lobortis, in dictum elit condimentum.
              Suspendisse ultrices eu metus quis gravida. Cras vitae aliquet
              turpis. Aliquam consectetur aliquet tortor, a ultricies ante
              hendrerit et. Praesent congue imperdiet ex id iaculis. Ut ipsum
              nulla, venenatis at lacus nec, luctus cursus ex.
            </i>
          </div>
          <div className='not_sure_'>
            <h1  className="not_sure_heading">
              STILL NOT SURE? GET A 7-DAY FREE TRIAL OF MY SERVICES & CONTINUE
              ONLY IF YOU FEEL LIKE :)
            </h1>
            <input type="text" placeholder="Enter your email..."/>
            <Button content="   Get Started!   "/>
          </div>
        </div>
      </>
    );
}

export default Main_content;
