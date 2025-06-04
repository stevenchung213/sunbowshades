import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FadeOutAlert from '../shared/FadeOutAlert/FadeOutAlert';
import 'react-tabs/style/react-tabs.css';
import './styles.css';

const Catalog = () => {
  const [showAlert1, removeAlert1] = useState(true);
  const [showAlert2, removeAlert2] = useState(true);

  const catalog = {
    Banded: [
      { name: 'Black Cottage', img: 'imgSrc1' },
      { name: 'Crosse', img: 'imgSrc2' },
      { name: 'Diego', img: 'imgSrc3' },
      { name: 'Manresa', img: 'imgSrc4' },
      { name: 'Manresa Wide', img: 'imgSrc5' },
      { name: 'Nias', img: 'imgSrc6' },
      { name: 'Omaha', img: 'imgSrc7' },
      { name: 'Rumoi Blackout', img: 'imgSrc8' },
      { name: 'Valleta Blackout', img: 'imgSrc9' },
      { name: 'Yola', img: 'imgSrc10' },
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
    Graphic: [
      { name: 'Graphic 1', img: 'imgSrc1' },
      { name: 'Graphic 2', img: 'imgSrc2' },
      { name: 'Graphic 3', img: 'imgSrc3' },
      { name: 'Graphic 4', img: 'imgSrc4' },
      { name: 'Graphic 5', img: 'imgSrc5' },
    ]
  };

  console.log(Object.keys(catalog));

  return (
    <>
      <div className='alert_message_container'>
        <FadeOutAlert
          textValue='Please keep in mind that our online catalog does not include all our available styles and colors!'
        />
        <FadeOutAlert
          textValue='Access to our complete catalog along with fabric samples will be provided during your free in-home consultation.'
        />
      </div>
      <div id='catalog_container'>
        <Tabs>
          <TabList>
            { // render all shade styles
              Object.keys(catalog).map((entry, index) => (
                <Tab key={`tab_${index}`}>{entry}</Tab>
              ))
            }
          </TabList>
          <TabPanel>
            <Tabs>
              <TabList>
                { // render Banded style variations
                  catalog.Banded.map((style, index) => (
                    <Tab>
                      {style.name}
                    </Tab>
                  ))
                }
              </TabList>
              { // render Banded style images
                catalog.Banded.map((style, index) => (
                  <TabPanel>
                    {style.img}
                  </TabPanel>
                ))
              }
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList>
                { // render Roller style variations
                  catalog.Roller.map((style, index) => (
                    <Tab>
                      {style.name}
                    </Tab>
                  ))
                }
              </TabList>
              { // render Roller style images
                catalog.Roller.map((style, index) => (
                  <TabPanel>
                    {style.img}
                  </TabPanel>
                ))
              }
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList>
                { // render Honeycomb style variations
                  catalog.Honeycomb.map((style, index) => (
                    <Tab>
                      {style.name}
                    </Tab>
                  ))
                }
              </TabList>
              { // render Honeycomb style images
                catalog.Honeycomb.map((style, index) => (
                  <TabPanel>
                    {style.img}
                  </TabPanel>
                ))
              }
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList>
                { // render Graphic style variations
                  catalog.Graphic.map((style, index) => (
                    <Tab>
                      {style.name}
                    </Tab>
                  ))
                }
              </TabList>
              { // render Graphic style images
                catalog.Graphic.map((style, index) => (
                  <TabPanel>
                    {style.img}
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