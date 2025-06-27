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
import manresa from './../assets/images/banded/manresa/manresa.png';
import manresa_beige from './../assets/images/banded/manresa/beige.png';
import manresa_blue from './../assets/images/banded/manresa/blue.png';
import manresa_brown from './../assets/images/banded/manresa/brown.png';
import manresa_grey from './../assets/images/banded/manresa/grey.png';
import manresa_ivory from './../assets/images/banded/manresa/ivory.png';
import manresa_white from './../assets/images/banded/manresa/white.png';
import aspen from './../assets/images/banded/aspen/aspen.png';
import aspen_beige from './../assets/images/banded/aspen/beige.png';
import aspen_charcoal from './../assets/images/banded/aspen/charcoal.png';
import aspen_cocoa from './../assets/images/banded/aspen/cocoa.png';
import aspen_grey from './../assets/images/banded/aspen/grey.png';
import aspen_ivory from './../assets/images/banded/aspen/ivory.png';
import aspen_white from './../assets/images/banded/aspen/white.png';
import dundee from './../assets/images/banded/dundee/dundee.png';
import dundee_beige from './../assets/images/banded/dundee/beige.png';
import dundee_black from './../assets/images/banded/dundee/black.png';
import dundee_grey from './../assets/images/banded/dundee/grey.png';
import dundee_ivory from './../assets/images/banded/dundee/ivory.png';
import dundee_mocha from './../assets/images/banded/dundee/mocha.png';
import dundee_sky_blue from './../assets/images/banded/dundee/sky_blue.png';
import dundee_white from './../assets/images/banded/dundee/white.png';
import nantes from './../assets/images/banded/nantes_atb/nantes_atb.png';
import nantes_dark_grey from './../assets/images/banded/nantes_atb/dark_grey.png';
import nantes_grey from './../assets/images/banded/nantes_atb/grey.png';
import nantes_ivory from './../assets/images/banded/nantes_atb/ivory.png';
import nantes_light_grey from './../assets/images/banded/nantes_atb/light_grey.png';
import nantes_peach from './../assets/images/banded/nantes_atb/peach.png';
import nantes_white from './../assets/images/banded/nantes_atb/white.png';
import bastia from './../assets/images/banded/bastia/bastia.png';
import bastia_beige from './../assets/images/banded/bastia/beige.png';
import bastia_grey from './../assets/images/banded/bastia/grey.png';
import bastia_ivory from './../assets/images/banded/bastia/ivory.png';
import bastia_taupe from './../assets/images/banded/bastia/taupe.png';
import bastia_white from './../assets/images/banded/bastia/white.png';
import venus from './../assets/images/banded/venus_atb/venus_atb.png';
import venus_baby_blue from './../assets/images/banded/venus_atb/baby_blue.png';
import venus_baby_green from './../assets/images/banded/venus_atb/baby_green.png';
import venus_baby_pink from './../assets/images/banded/venus_atb/baby_pink.png';
import venus_beige from './../assets/images/banded/venus_atb/beige.png';
import venus_dark_grey from './../assets/images/banded/venus_atb/dark_grey.png';
import venus_grey from './../assets/images/banded/venus_atb/grey.png';
import venus_ivory from './../assets/images/banded/venus_atb/ivory.png';
import venus_sky_blue from './../assets/images/banded/venus_atb/sky_blue.png';
import venus_white from './../assets/images/banded/venus_atb/white.png';
import muko from './../assets/images/banded/muko/muko.png';
import muko_beige from './../assets/images/banded/muko/beige.png';
import muko_black from './../assets/images/banded/muko/black.png';
import muko_brown from './../assets/images/banded/muko/brown.png';
import muko_choco from './../assets/images/banded/muko/choco.png';
import muko_ivory from './../assets/images/banded/muko/ivory.png';
import tvoli from './../assets/images/banded/t-voli_atb/t-voli_atb.png';
import tvoli_blue_berry from './../assets/images/banded/t-voli_atb/blue_berry.png';
import tvoli_dark_grey from './../assets/images/banded/t-voli_atb/dark_grey.png';
import tvoli_grey from './../assets/images/banded/t-voli_atb/grey.png';
import tvoli_ivory from './../assets/images/banded/t-voli_atb/ivory.png';
import tvoli_khaki from './../assets/images/banded/t-voli_atb/khaki.png';
import tvoli_white from './../assets/images/banded/t-voli_atb/white.png';

const Catalog = () => {
  const [showAlert1, removeAlert1] = useState(true);
  const [showAlert2, removeAlert2] = useState(true);
  const carouselOptions = { align: 'start', loop: true };

  const catalog = {
    Banded: [
      {
        name: 'Venus', img: venus, colors: [
          { src: venus_baby_blue, text: 'Baby Blue' },
          { src: venus_baby_green, text: 'Baby Green' },
          { src: venus_baby_pink, text: 'Baby Pink' },
          { src: venus_beige, text: 'Beige' },
          { src: venus_dark_grey, text: 'Dark Grey' },
          { src: venus_grey, text: 'Grey' },
          { src: venus_ivory, text: 'Ivory' },
          { src: venus_sky_blue, text: 'Sky Blue' },
          { src: venus_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '285cm',
          weight: ['88g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.26mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'All colors'
        }
      },
      {
        name: 'T-Voli', img: tvoli, colors: [
          { src: tvoli_blue_berry, text: 'Blue Berry' },
          { src: tvoli_dark_grey, text: 'Dark Grey' },
          { src: tvoli_grey, text: 'Grey' },
          { src: tvoli_ivory, text: 'Ivory' },
          { src: tvoli_khaki, text: 'Khaki' },
          { src: tvoli_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '285cm',
          weight: ['105.3g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.45mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'Select colors',
          repeatSize: ['Solid 11.5cm / Mesh 9cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'All colors'
        }
      },
      {
        name: 'Nantes', img: nantes, colors: [
          { src: nantes_dark_grey, text: 'Dark Grey' },
          { src: nantes_grey, text: 'Grey' },
          { src: nantes_ivory, text: 'Ivory' },
          { src: nantes_light_grey, text: 'Light Grey' },
          { src: nantes_peach, text: 'Peach' },
          { src: nantes_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['128g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.36mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'All colors'
        }
      },
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
          fireRetardant: 'Select colors',
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
          weight: 'N/A',
          thickness: 'N/A',
          fireRetardant: 'All colors',
          repeatSize: ['Solid 12cm / Mesh 8cm ', <span key={1}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
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
          weight: ['180g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.44mm', ' / Mesh 0.14mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'Select colors',
          repeatSize: ['Solid 12cm / Mesh 9cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
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
          weight: ['160g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.42mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'Select colors',
          repeatSize: ['Solid 10cm / Mesh 6cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
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
          weight: ['176g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.46mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
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
          weight: 'N/A',
          thickness: 'N/A',
          fireRetardant: 'N/A',
          repeatSize: ['Solid 12cm / Mesh 8cm ', <span key={1}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
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
          weight: ['160g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.39mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'All colors',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
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
          weight: ['148g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.37mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: ['Solid 12cm / Mesh 9cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
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
          weight: ['178g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.51mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
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
          weight: ['156g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.34mm', ' / Mesh 0.07mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'All colors',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Manresa', img: manresa, colors: [
          { src: manresa_beige, text: 'Beige' },
          { src: manresa_blue, text: 'blue' },
          { src: manresa_brown, text: 'Brown' },
          { src: manresa_grey, text: 'Grey' },
          { src: manresa_ivory, text: 'Ivory' },
          { src: manresa_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['132.8g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.38mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: ['Solid 7.5cm / Mesh 5cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Aspen', img: aspen, colors: [
          { src: aspen_beige, text: 'Beige' },
          { src: aspen_charcoal, text: 'Charcoal' },
          { src: aspen_cocoa, text: 'Cocoa' },
          { src: aspen_grey, text: 'Grey' },
          { src: aspen_ivory, text: 'Ivory' },
          { src: aspen_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['166g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['Solid 0.75mm', ' / Mesh 0.14mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: ['Solid 11.5cm / Mesh 8cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Dundee', img: dundee, colors: [
          { src: dundee_beige, text: 'Beige' },
          { src: dundee_black, text: 'Black' },
          { src: dundee_grey, text: 'Grey' },
          { src: dundee_ivory, text: 'Ivory' },
          { src: dundee_mocha, text: 'Mocha' },
          { src: dundee_sky_blue, text: 'Sky Blue' },
          { src: dundee_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['166g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.45mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Bastia', img: bastia, colors: [
          { src: bastia_beige, text: 'Beige' },
          { src: bastia_grey, text: 'Grey' },
          { src: bastia_ivory, text: 'Ivory' },
          { src: bastia_taupe, text: 'Taupe' },
          { src: bastia_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '320cm',
          weight: ['118g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.35mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'Select colors',
          repeatSize: ['Solid 10cm / Mesh 7cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Muko', img: muko, colors: [
          { src: muko_beige, text: 'Beige' },
          { src: muko_black, text: 'Black' },
          { src: muko_brown, text: 'Brown' },
          { src: muko_choco, text: 'Choco' },
          { src: muko_ivory, text: 'Ivory' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: 'N/A',
          thickness: 'N/A',
          fireRetardant: 'N/A',
          repeatSize: ['Solid 3.5cm / Mesh 2cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'N/A'
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
            { // render shade variations
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
                { // render Banded style models
                  catalog.Banded.map((style, index) => (
                    <Tab
                      className={style.specs.antibacterial !== 'N/A' ? 'react-tabs__tab sub_tab antibacterial_tab' : 'react-tabs__tab sub_tab'}
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