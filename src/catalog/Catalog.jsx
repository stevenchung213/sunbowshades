import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Carousel from './../shared/Carousel/Carousel';
import FadeOutAlert from './../shared/FadeOutAlert/FadeOutAlert';
import './styles.css';
import eurekaBlackout from './../assets/images/banded/eureka_blackout/eureka_blackout.png';
import eurekaBlackout_beige from './../assets/images/banded/eureka_blackout/beige.png';
import eurekaBlackout_brown from './../assets/images/banded/eureka_blackout/brown.png';
import eurekaBlackout_dark_grey from './../assets/images/banded/eureka_blackout/dark_grey.png';
import eurekaBlackout_green from './../assets/images/banded/eureka_blackout/green.png';
import eurekaBlackout_ivory from './../assets/images/banded/eureka_blackout/ivory.png';
import eurekaBlackout_light_grey from './../assets/images/banded/eureka_blackout/light_grey.png';
import eurekaBlackout_navy from './../assets/images/banded/eureka_blackout/navy.png';
import eurekaBlackout_white from './../assets/images/banded/eureka_blackout/white.png';
import dayBlackout from './../assets/images/banded/day_blackout/day_blackout.png';
import dayBlackout_brown from './../assets/images/banded/day_blackout/brown.png';
import dayBlackout_dark_grey from './../assets/images/banded/day_blackout/dark_grey.png';
import dayBlackout_grey from './../assets/images/banded/day_blackout/grey.png';
import dayBlackout_navy from './../assets/images/banded/day_blackout/navy.png';
import dayBlackout_white from './../assets/images/banded/day_blackout/white.png';
import olivineBlackout from './../assets/images/banded/olivine_blackout/olivine_blackout.png';
import olivineBlackout_black from './../assets/images/banded/olivine_blackout/black.png';
import olivineBlackout_charcoal from './../assets/images/banded/olivine_blackout/charcoal.png';
import olivineBlackout_dark_grey from './../assets/images/banded/olivine_blackout/dark_grey.png';
import olivineBlackout_gold from './../assets/images/banded/olivine_blackout/gold.png';
import olivineBlackout_grey from './../assets/images/banded/olivine_blackout/grey.png';
import olivineBlackout_oyster from './../assets/images/banded/olivine_blackout/oyster.png';
import olivineBlackout_silver from './../assets/images/banded/olivine_blackout/silver.png';
import olivineBlackout_white from './../assets/images/banded/olivine_blackout/white.png';
import plutoBlackout from './../assets/images/banded/pluto_blackout/pluto_blackout.png';
import plutoBlackout_beige from './../assets/images/banded/pluto_blackout/beige.png';
import plutoBlackout_brown from './../assets/images/banded/pluto_blackout/brown.png';
import plutoBlackout_charcoal from './../assets/images/banded/pluto_blackout/charcoal.png';
import plutoBlackout_choco from './../assets/images/banded/pluto_blackout/choco.png';
import plutoBlackout_grey from './../assets/images/banded/pluto_blackout/grey.png';
import plutoBlackout_ivory from './../assets/images/banded/pluto_blackout/ivory.png';
import plutoBlackout_khaki from './../assets/images/banded/pluto_blackout/khaki.png';
import veniceBlackout from './../assets/images/banded/venice_blackout/venice_blackout.png';
import veniceBlackout_beige from './../assets/images/banded/venice_blackout/beige.png';
import veniceBlackout_black from './../assets/images/banded/venice_blackout/black.png';
import veniceBlackout_blue from './../assets/images/banded/venice_blackout/blue.png';
import veniceBlackout_choco from './../assets/images/banded/venice_blackout/choco.png';
import veniceBlackout_indie_blue from './../assets/images/banded/venice_blackout/indie_blue.png';
import veniceBlackout_ivory from './../assets/images/banded/venice_blackout/ivory.png';
import veniceBlackout_light_grey from './../assets/images/banded/venice_blackout/light_grey.png';
import veniceBlackout_white from './../assets/images/banded/venice_blackout/white.png';
import veniceWideBlackout from './../assets/images/banded/venice_wide_blackout/venice_wide_blackout.png';
import veniceWideBlackout_beige from './../assets/images/banded/venice_wide_blackout/beige.png';
import veniceWideBlackout_charcoal from './../assets/images/banded/venice_wide_blackout/charcoal.png';
import veniceWideBlackout_choco from './../assets/images/banded/venice_wide_blackout/choco.png';
import veniceWideBlackout_dark_grey from './../assets/images/banded/venice_wide_blackout/dark_grey.png';
import veniceWideBlackout_grey from './../assets/images/banded/venice_wide_blackout/grey.png';
import veniceWideBlackout_indie_blue from './../assets/images/banded/venice_wide_blackout/indie_blue.png';
import veniceWideBlackout_ivory from './../assets/images/banded/venice_wide_blackout/ivory.png';
import veniceWideBlackout_light_grey from './../assets/images/banded/venice_wide_blackout/light_grey.png';
import veniceWideBlackout_white from './../assets/images/banded/venice_wide_blackout/white.png';
import rodosBlackout from './../assets/images/banded/rodos_blackout/rodos_blackout.png';
import rodosBlackout_beige from './../assets/images/banded/rodos_blackout/beige.png';
import rodosBlackout_brown from './../assets/images/banded/rodos_blackout/brown.png';
import rodosBlackout_choco from './../assets/images/banded/rodos_blackout/choco.png';
import rodosBlackout_dark_blue from './../assets/images/banded/rodos_blackout/dark_blue.png';
import rodosBlackout_dark_grey from './../assets/images/banded/rodos_blackout/dark_grey.png';
import rodosBlackout_grey from './../assets/images/banded/rodos_blackout/grey.png';
import rodosBlackout_oat from './../assets/images/banded/rodos_blackout/oat.png';
import casablancaBlackout from './../assets/images/banded/casablanca_blackout/casablanca_blackout.png';
import casablancaBlackout_brown from './../assets/images/banded/casablanca_blackout/brown.png';
import casablancaBlackout_dark_grey from './../assets/images/banded/casablanca_blackout/dark_grey.png';
import casablancaBlackout_navy from './../assets/images/banded/casablanca_blackout/navy.png';
import casablancaBlackout_peach from './../assets/images/banded/casablanca_blackout/peach.png';
import casablancaBlackout_white from './../assets/images/banded/casablanca_blackout/white.png';
import lemansBlackout from './../assets/images/banded/le_mans_blackout/le_mans_blackout.png';
import lemansBlackout_blue_grey from './../assets/images/banded/le_mans_blackout/blue_grey.png';
import lemansBlackout_brown from './../assets/images/banded/le_mans_blackout/brown.png';
import lemansBlackout_choco from './../assets/images/banded/le_mans_blackout/choco.png';
import lemansBlackout_grey from './../assets/images/banded/le_mans_blackout/grey.png';
import lemansBlackout_navy from './../assets/images/banded/le_mans_blackout/navy.png';
import lemansBlackout_sand from './../assets/images/banded/le_mans_blackout/sand.png';
import lemansBlackout_white from './../assets/images/banded/le_mans_blackout/white.png';
import wainwrightBlackout from './../assets/images/banded/wainwright_blackout/wainwright_blackout.png';
import wainwrightBlackout_cool_grey from './../assets/images/banded/wainwright_blackout/cool_grey.png';
import wainwrightBlackout_dolce_beige from './../assets/images/banded/wainwright_blackout/dolce_beige.png';
import wainwrightBlackout_light_beige from './../assets/images/banded/wainwright_blackout/light_beige.png';
import wainwrightBlackout_misty_green from './../assets/images/banded/wainwright_blackout/misty_green.png';
import wainwrightBlackout_silver_white from './../assets/images/banded/wainwright_blackout/silver_white.png';
import wainwrightBlackout_warm_grey from './../assets/images/banded/wainwright_blackout/warm_grey.png';

const Catalog = () => {
  const [showAlert1, removeAlert1] = useState(true);
  const [showAlert2, removeAlert2] = useState(true);
  const carouselOptions = { align: 'start', loop: true };

  const catalog = {
    Banded: [
      {
        name: 'Eureka Blackout', img: eurekaBlackout, colors: [
          { src: eurekaBlackout_beige, text: 'Beige' },
          { src: eurekaBlackout_brown, text: 'Brown' },
          { src: eurekaBlackout_dark_grey, text: 'Dark Grey' },
          { src: eurekaBlackout_green, text: 'Green' },
          { src: eurekaBlackout_ivory, text: 'Ivory' },
          { src: eurekaBlackout_light_grey, text: 'Light Grey' },
          { src: eurekaBlackout_navy, text: 'Navy' },
          { src: eurekaBlackout_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['150g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.35mm', ' / Mesh 0.13mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors only',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Day Blackout', img: dayBlackout, colors: [
          { src: dayBlackout_brown, text: 'Brown' },
          { src: dayBlackout_dark_grey, text: 'Dark Grey' },
          { src: dayBlackout_grey, text: 'Grey' },
          { src: dayBlackout_navy, text: 'Navy' },
          { src: dayBlackout_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['150g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.35mm', ' / Mesh 0.13mm ', <span>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors only',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span>&plusmn;</span>, '5%'],
          antibacterial: 'NA'
        }
      },
      {
        name: 'Olivine Blackout', img: olivineBlackout, colors: [
          { src: olivineBlackout_black, text: 'Black' },
          { src: olivineBlackout_charcoal, text: 'Charcoal' },
          { src: olivineBlackout_dark_grey, text: 'Dark Grey' },
          { src: olivineBlackout_gold, text: 'Gold' },
          { src: olivineBlackout_grey, text: 'Grey' },
          { src: olivineBlackout_oyster, text: 'Oyster' },
          { src: olivineBlackout_silver, text: 'Silver' },
          { src: olivineBlackout_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['150g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.35mm', ' / Mesh 0.13mm ', <span>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors only',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span>&plusmn;</span>, '5%'],
          antibacterial: 'NA'
        }
      },
      {
        name: 'Pluto Blackout', img: plutoBlackout, colors: [
          { src: plutoBlackout_beige, text: 'Beige' },
          { src: plutoBlackout_brown, text: 'Brown' },
          { src: plutoBlackout_charcoal, text: 'Charcoal' },
          { src: plutoBlackout_choco, text: 'Choco' },
          { src: plutoBlackout_grey, text: 'Grey' },
          { src: plutoBlackout_ivory, text: 'Ivory' },
          { src: plutoBlackout_khaki, text: 'Khaki' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['150g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.35mm', ' / Mesh 0.13mm ', <span>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors only',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span>&plusmn;</span>, '5%'],
          antibacterial: 'NA'
        }
      },
      {
        name: 'Venice Blackout', img: veniceBlackout, colors: [
          { src: veniceBlackout_beige, text: 'Beige' },
          { src: veniceBlackout_black, text: 'Black' },
          { src: veniceBlackout_blue, text: 'Blue' },
          { src: veniceBlackout_choco, text: 'Choco' },
          { src: veniceBlackout_indie_blue, text: 'Indie Blue' },
          { src: veniceBlackout_ivory, text: 'Ivory' },
          { src: veniceBlackout_light_grey, text: 'Light Grey' },
          { src: veniceBlackout_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['150g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.35mm', ' / Mesh 0.13mm ', <span>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors only',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span>&plusmn;</span>, '5%'],
          antibacterial: 'NA'
        }
      },
      {
        name: 'Venice Wide Blackout', img: veniceWideBlackout, colors: [
          { src: veniceWideBlackout_beige, text: 'Beige' },
          { src: veniceWideBlackout_charcoal, text: 'Charcoal' },
          { src: veniceWideBlackout_choco, text: 'Choco' },
          { src: veniceWideBlackout_dark_grey, text: 'Dark Grey' },
          { src: veniceWideBlackout_grey, text: 'Grey' },
          { src: veniceWideBlackout_indie_blue, text: 'Indie Blue' },
          { src: veniceWideBlackout_ivory, text: 'Ivory' },
          { src: veniceWideBlackout_light_grey, text: 'Light Grey' },
          { src: veniceWideBlackout_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['150g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.35mm', ' / Mesh 0.13mm ', <span>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors only',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span>&plusmn;</span>, '5%'],
          antibacterial: 'NA'
        }
      },
      {
        name: 'Rodos Blackout', img: rodosBlackout, colors: [
          { src: rodosBlackout_beige, text: 'Beige' },
          { src: rodosBlackout_brown, text: 'Brown' },
          { src: rodosBlackout_choco, text: 'Choco' },
          { src: rodosBlackout_dark_blue, text: 'Dark Blue' },
          { src: rodosBlackout_dark_grey, text: 'Dark Grey' },
          { src: rodosBlackout_grey, text: 'Grey' },
          { src: rodosBlackout_oat, text: 'Oat' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['150g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.35mm', ' / Mesh 0.13mm ', <span>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors only',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span>&plusmn;</span>, '5%'],
          antibacterial: 'NA'
        }
      },
      {
        name: 'Casablanca Blackout', img: casablancaBlackout, colors: [
          { src: casablancaBlackout_brown, text: 'Brown' },
          { src: casablancaBlackout_dark_grey, text: 'Dark Grey' },
          { src: casablancaBlackout_navy, text: 'Navy' },
          { src: casablancaBlackout_peach, text: 'Peach' },
          { src: casablancaBlackout_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['150g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.35mm', ' / Mesh 0.13mm ', <span>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors only',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span>&plusmn;</span>, '5%'],
          antibacterial: 'NA'
        }
      },
      {
        name: 'Le Mans Blackout', img: lemansBlackout, colors: [
          { src: lemansBlackout_blue_grey, text: 'Blue Grey' },
          { src: lemansBlackout_brown, text: 'Brown' },
          { src: lemansBlackout_choco, text: 'Choco' },
          { src: lemansBlackout_grey, text: 'Grey' },
          { src: lemansBlackout_navy, text: 'Navy' },
          { src: lemansBlackout_sand, text: 'Sand' },
          { src: lemansBlackout_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['150g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.35mm', ' / Mesh 0.13mm ', <span>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors only',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span>&plusmn;</span>, '5%'],
          antibacterial: 'NA'
        }
      },
      {
        name: 'Wainwright Blackout', img: wainwrightBlackout, colors: [
          { src: wainwrightBlackout_cool_grey, text: 'Cool Grey' },
          { src: wainwrightBlackout_dolce_beige, text: 'Dolge Beige' },
          { src: wainwrightBlackout_light_beige, text: 'Light Beige' },
          { src: wainwrightBlackout_misty_green, text: 'Misty Green' },
          { src: wainwrightBlackout_silver_white, text: 'Silver White' },
          { src: wainwrightBlackout_warm_grey, text: 'Warm Grey' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['150g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.35mm', ' / Mesh 0.13mm ', <span>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors only',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span>&plusmn;</span>, '5%'],
          antibacterial: 'NA'
        }
      },
    ],
    Roller: [
      { name: 'Roller 1', img: 'imgSrc1' },
      { name: 'Roller 2', img: 'imgSrc2' },
      { name: 'Roller 3', img: 'imgSrc3' },
      { name: 'Roller 4', img: 'imgSrc4' },
      { name: 'Roller 5', img: 'imgSrc5' },
      { name: 'Roller 6', img: 'imgSrc6' },
    ],
    'Laser Print': [
      { name: 'Laser Print 1', img: 'imgSrc1' },
      { name: 'Laser Print 2', img: 'imgSrc2' },
      { name: 'Laser Print 3', img: 'imgSrc3' },
      { name: 'Laser Print 4', img: 'imgSrc4' },
      { name: 'Laser Print 5', img: 'imgSrc5' },
    ],
    'Graphic Print': [
      { name: 'Graphic 1', img: 'imgSrc1' },
      { name: 'Graphic 2', img: 'imgSrc2' },
      { name: 'Graphic 3', img: 'imgSrc3' },
      { name: 'Graphic 4', img: 'imgSrc4' },
      { name: 'Graphic 5', img: 'imgSrc5' },
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='alert_message_container'>
        <FadeOutAlert
          className='alert_message'
          textValue='Please keep in mind that our online catalog does not include all our available styles and colors!'
        />
        <FadeOutAlert
          className='alert_message'
          textValue='Access to our complete catalog along with fabric samples will be provided during your free in-home consultation.'
        />
      </div>
      <div id='catalog_container'>
        <Tabs
          className='main_tabs_container'
          defaultIndex={1}
        >
          <TabList>
            <Tab
              className='react-tabs__tab main_tab tab_category_style'
              disabled
            >
              Variation:
            </Tab>
            { // render all shade styles
              Object.keys(catalog).map((style, index) => (
                <Tab
                  className='react-tabs__tab main_tab'
                  key={`tab_${index}`}
                >
                  {style}
                </Tab>
              ))
            }
          </TabList>
          <TabPanel>
          </TabPanel>
          <TabPanel>
            <Tabs defaultIndex={1}>
              <TabList>
                <Tab
                  className='react-tabs__tab sub_tab tab_category_variation'
                  disabled
                >
                  Model:
                </Tab>
                { // render Banded style variations
                  catalog.Banded.map((style, index) => (
                    <Tab
                      className='react-tabs__tab sub_tab'
                      key={`banded_tab_${index}`}
                    >
                      {style.name}
                    </Tab>
                  ))
                }
              </TabList>
              <TabPanel>
              </TabPanel>
              { // render Banded style images
                catalog.Banded.map((style, index) => (
                  <TabPanel
                    className='react-tabs__tab-panel'
                    key={`banded_tab_img_${index}`}
                  >
                    <div className='tab_container'>
                      <img
                        className='tab_image'
                        src={style.img}
                        alt={'banded_' + index}
                      />
                      <div className='tab_info_container'>
                        <div className='specs_container'>
                          <div className='spec_key'>Composition:</div>
                          <div className='spec_value'>{style.specs.composition}</div>
                          <div className='spec_key'>Max Width:</div>
                          <div className='spec_value'>{style.specs.maxWidth}</div>
                          <div className='spec_key'>Weight:</div>
                          <div className='spec_value'>{style.specs.weight}</div>
                          <div className='spec_key'>Thickness:</div>
                          <div className='spec_value'>{style.specs.thickness}</div>
                          <div className='spec_key'>Dimensions:</div>
                          <div className='spec_value'>{style.specs.repeatSize}</div>
                          <div className='spec_key'>Fire Retardant:</div>
                          <div className='spec_value'>{style.specs.fireRetardant}</div>
                          <div className='spec_key'>Antibacterial:</div>
                          <div className='spec_value'>{style.specs.antibacterial}</div>
                        </div>
                        <div className='colors_container'>
                          <Carousel
                            slides={style.colors}
                            options={carouselOptions}
                            identifier='colors'
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))
              }
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs defaultIndex={1}>
              <TabList>
                <Tab
                  className='react-tabs__tab sub_tab tab_category_variation'
                  disabled
                >
                  Variation:
                </Tab>
                { // render Roller style variations
                  catalog.Roller.map((style, index) => (
                    <Tab
                      className='react-tabs__tab sub_tab'
                      key={`roller_tab_${index}`}
                    >
                      {style.name}
                    </Tab>
                  ))
                }
              </TabList>
              <TabPanel>
              </TabPanel>
              { // render Roller style images
                catalog.Roller.map((style, index) => (
                  <TabPanel
                    className='react-tabs__tab-panel'
                    key={`roller_tab_img_${index}`}
                  >

                    <div className='tab_container'>
                      <img
                        className='tab_image'
                        src={style.img}
                        alt={'banded_' + index}
                      />
                      <div className='tab_info_container'>

                      </div>
                    </div>
                  </TabPanel>
                ))
              }
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs defaultIndex={1}>
              <TabList>
                <Tab
                  className='react-tabs__tab sub_tab tab_category_variation'
                  disabled
                >
                  Variation:
                </Tab>
                { // render Laser style variations
                  catalog['Laser Print'].map((style, index) => (
                    <Tab
                      className='react-tabs__tab sub_tab'
                      key={`laser_tab_${index}`}
                    >
                      {style.name}
                    </Tab>
                  ))
                }
              </TabList>
              <TabPanel>
              </TabPanel>
              { // render Laser style images
                catalog['Laser Print'].map((style, index) => (
                  <TabPanel
                    className='react-tabs__tab-panel'
                    key={`laser_tab_img_${index}`}
                  >

                    <div className='tab_container'>
                      <img
                        className='tab_image'
                        src={style.img}
                        alt={'banded_' + index}
                      />
                      <div className='tab_info_container'>

                      </div>
                    </div>
                  </TabPanel>
                ))
              }
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs defaultIndex={1}>
              <TabList>
                <Tab
                  className='react-tabs__tab sub_tab tab_category_variation'
                  disabled
                >
                  Variation:
                </Tab>
                { // render Graphic style variations
                  catalog['Graphic Print'].map((style, index) => (
                    <Tab
                      className='react-tabs__tab sub_tab'
                      key={`graphic_tab_${index}`}
                    >
                      {style.name}
                    </Tab>
                  ))
                }
              </TabList>
              <TabPanel>
              </TabPanel>
              { // render Graphic style images
                catalog['Graphic Print'].map((style, index) => (
                  <TabPanel
                    className='react-tabs__tab-panel'
                    key={`graphic_tab_img_${index}`}
                  >

                    <div className='tab_container'>
                      <img
                        className='tab_image'
                        src={style.img}
                        alt={'banded_' + index}
                      />
                      <div className='tab_info_container'>

                      </div>
                    </div>
                  </TabPanel>
                ))
              }
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Catalog;