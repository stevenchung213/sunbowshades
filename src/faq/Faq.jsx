import React, { useState } from 'react';
import './styles.css';
import downArrow from './../assets/down_arrow.png';

const Faqs = () => {
  const showAnswer1 = useState(false);
  const showAnswer2 = useState(false);
  const showAnswer3 = useState(false);
  const showAnswer4 = useState(false);
  const showAnswer5 = useState(false);
  const showAnswer6 = useState(false);
  const [showAnswers, toggleAnswers] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  })

  const questions = [
    {
      text: 'How long does does an in-home consultation take?',
      answer: ['One of our goals during this meeting is to figure out which style and color matches best with the interior of your home.', <br key={1} />, 'Our team will provide a full physical catalog which includes fabric samples along with all the colors available.', <br key={2} />, 'Upon coming to a decision, our team will then take accurate measurements for each window that you plan on treating.', <br key={3} />, 'This entire process usually takes between 1-2 hours, but can take longer depending on specific circumstances.']
    },
    {
      text: 'How does payment work?',
      answer: ['Customers are expected to put in a deposit, 50% of the total cost, during the in-home consultation meeting and the rest will be collected upon completion.', <br key={4} />, 'Once we receive the product, our team will reach out to you to schedule a date for the installation.', <br key={5} />, 'We currently accept cash, checks and money orders and plan on accepting electronic payments in the near future.']
    },
    {
      text: 'When will my blinds be installed?',
      answer: ['Our window treatments usually take about 2 weeks to arrive at our facilities due to each one being made to custom specs.', <br key={6} />, 'Our team will then schedule a date for installation as soon as possible, usually for the following week.']
    },
    {
      text: 'How long does installation take?',
      answer: ['Our team of experts can complete a conventional sized window in approximately 10 minutes.', <br key={7} />, 'If a customer has five windows that need treatment, we can estimate the total duration to take 50 minutes.']
    },
    {
      text: 'Can I buy SunbowShade blinds and install it myself?',
      answer: ['We are currently in the process of figuring out a foolproof way for our customers to self-install our window treatments.', <br key={8} />, 'We are in talks with our manufacturers to see if they can design a system to make installation simple, precise and easy.', <br key={9} />, 'Although measuring your own window is not a difficult task, some nuances with how some blinds are made can cause issues leading to customer dissatisfaction, e.g., the window treatment not fitting properly.', <br key={10} />, 'We want to make sure that this never happens if and when we provide this option.']
    },
    {
      text: 'What can I do if I damage my window treatment?',
      answer: ['Although there is no warranty for these types of products, we are happy to work with you to mend whatever issue you currently have.', <br key={11} />, 'Feel free to reach out to us via email or phone.']
    }
  ];

  return (
    <div id='faqs_container'>
      <div className='banner faqs_banner'>
        Frequently Asked Questions
      </div>
      <div className='sub_banner'>
        If you can't find an answer that you're looking for, feel free to contact us.
      </div>
      <div className='questions_container'>
        {
          questions.map((question, index) => (
            <div
              className={'faq_container' + (showAnswers[index] ? ' show_faq_container' : '')}
              key={index}
            >
              <div className='question_container'>
                <div className='question'>
                  {question.text}
                </div>
                <img
                  className='down_arrow'
                  src={downArrow}
                  alt='down_arrow'
                  onClick={() => {
                    let currState = showAnswers[index];
                    toggleAnswers({
                      ...showAnswers,
                      [index]: !currState
                    })
                  }}
                />
              </div>
              <div className={'answer_container' + (showAnswers[index] ? ' show_answer' : '')}>
                <div className='answer'>
                  {question.answer}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Faqs;
