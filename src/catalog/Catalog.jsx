import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FadeOutAlert from '../shared/FadeOutAlert/FadeOutAlert';
import './styles.css';
import bandedBlackCottage from './../assets/banded_black_cottage.jpeg';
import bandedCrosse from './../assets/banded_crosse.jpeg';
import bandedDiego from './../assets/banded_diego.jpeg';
import bandedManresaWide from './../assets/banded_manresa_wide.jpeg';
import bandedManresa from './../assets/banded_manresa.jpeg';
import bandedNias from './../assets/banded_nias.jpeg';
import bandedOmaha from './../assets/banded_omaha.jpeg';
import bandedRumoiBlackout from './../assets/banded_rumoi_black_out.jpeg';
import bandedValletaBlackoutOnetone from './../assets/banded_valleta_black_out_one_tone.jpeg';
import bandedYola from './../assets/banded_yola.jpeg';

const Catalog = () => {
  const [showAlert1, removeAlert1] = useState(true);
  const [showAlert2, removeAlert2] = useState(true);

  const catalog = {
    Banded: [
      { name: 'Black Cottage', img: bandedBlackCottage },
      { name: 'Crosse', img: bandedCrosse },
      { name: 'Diego', img: bandedDiego },
      { name: 'Manresa', img: bandedManresaWide },
      { name: 'Manresa Wide', img: bandedManresa },
      { name: 'Nias', img: bandedNias },
      { name: 'Omaha', img: bandedOmaha },
      { name: 'Rumoi Blackout', img: bandedRumoiBlackout },
      { name: 'Valleta Blackout', img: bandedValletaBlackoutOnetone },
      { name: 'Yola', img: bandedYola },
    ],
    Roller: [
      { name: 'Roller 1', img: 'imgSrc1' },
      { name: 'Roller 2', img: 'imgSrc2' },
      { name: 'Roller 3', img: 'imgSrc3' },
      { name: 'Roller 4', img: 'imgSrc4' },
      { name: 'Roller 5', img: 'imgSrc5' },
      { name: 'Roller 6', img: 'imgSrc6' },
    ],
    Honeycomb: [
      { name: 'Honeycomb 1', img: 'imgSrc1' },
      { name: 'Honeycomb 2', img: 'imgSrc2' },
      { name: 'Honeycomb 3', img: 'imgSrc3' },
      { name: 'Honeycomb 4', img: 'imgSrc4' },
      { name: 'Honeycomb 5', img: 'imgSrc5' },
      { name: 'Honeycomb 6', img: 'imgSrc6' },
      { name: 'Honeycomb 7', img: 'imgSrc7' },
      { name: 'Honeycomb 8', img: 'imgSrc8' },
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
                      <div className='info_container'>

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
                      <div className='info_container'>

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
                { // render Honeycomb style variations
                  catalog.Honeycomb.map((style, index) => (
                    <Tab
                      className='react-tabs__tab sub_tab'
                      key={`honeycomb_tab_${index}`}
                    >
                      {style.name}
                    </Tab>
                  ))
                }
              </TabList>
              <TabPanel>
              </TabPanel>
              { // render Honeycomb style images
                catalog.Honeycomb.map((style, index) => (
                  <TabPanel
                    className='react-tabs__tab-panel'
                    key={`honeycomb_tab_img_${index}`}
                  >

                    <div className='tab_container'>
                      <img
                        className='tab_image'
                        src={style.img}
                        alt={'banded_' + index}
                      />
                      <div className='info_container'>

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
                      <div className='info_container'>

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
                      <div className='info_container'>

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