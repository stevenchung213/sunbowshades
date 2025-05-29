import React from 'react';
import styles from './styles.css';
import stock5 from './../../assets/stock5.jpeg';
import showcase7 from './../../assets/showcase7.jpeg';

const Consultation = () => {

  return (
    <div className='consultation_container'>
      <div className='banner'>
        Free In-home Consultation
      </div>
      <div className='our_model_container'>
        <div className='what_we_do'>
          <div className='our_team_will'>
            Our team will provide...
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
          loading='lazy'
        />
        <div className='service_areas'>
          <div className='areas_of_service'>
            We provide services in...
          </div>
          <ol>
            <li>California</li>
            <li>
              Portland
            </li>
            <li>
              Seattle
            </li>
            <li>
              Las Vegas
            </li>
            <li>
              Houston
            </li>
          </ol>
          <div className='fine_print'>
            We plan on expanding to other states soon!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
