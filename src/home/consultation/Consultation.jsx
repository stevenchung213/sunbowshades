import React from 'react';
import './styles.css';
import stock5 from './../../assets/stock5.jpeg';
import showcase7 from './../../assets/showcase7.jpeg';

const Consultation = () => {

  return (
    <div id='consultation_container'>
      <div id='consultation_banner' className='banner'>
        Free In-home Consultation
      </div>
      <div className='our_model_container'>
        <div className='what_we_do'>
          <div className='our_experts_provide'>
            Our experts provide...
          </div>
          <ol>
            <li>
              Recommendations for window treatment styles along with colors
            </li>
            <li>
              Precise measurements down to the millimeter (1/25") versus competitors (1/16")
            </li>
            <li>
              Installation once your product arrives*
            </li>
          </ol>
          <div className='fine_print'>
            *Due to shipping durations, installation usually occurs two weeks out.
          </div>
        </div>
        <img
          src={showcase7}
          className='our_team_will_photo'
          alt='stock5'
        />
        <div className='service_areas'>
          <div className='areas_of_service'>
            We currently service...
          </div>
          <li>Southern California</li>
          <li>
            Portland
          </li>
          <li>
            Seattle
          </li>
          <li>
            Las Vegas
          </li>
          {/* <li>
              Houston
            </li> */}
          <div className='fine_print'>
            We plan on expanding to other states soon!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
