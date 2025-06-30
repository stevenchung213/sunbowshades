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
import omaha from './../assets/images/banded/omaha/omaha.png';
import omaha_beige from './../assets/images/banded/omaha/beige.png';
import omaha_black from './../assets/images/banded/omaha/black.png';
import omaha_brown from './../assets/images/banded/omaha/brown.png';
import omaha_charcoal from './../assets/images/banded/omaha/charcoal.png';
import omaha_cherry from './../assets/images/banded/omaha/cherry.png';
import omaha_choco from './../assets/images/banded/omaha/choco.png';
import omaha_dark_cherry from './../assets/images/banded/omaha/dark_cherry.png';
import omaha_green from './../assets/images/banded/omaha/green.png';
import omaha_grey from './../assets/images/banded/omaha/grey.png';
import omaha_ivory from './../assets/images/banded/omaha/ivory.png';
import omaha_khaki from './../assets/images/banded/omaha/khaki.png';
import omaha_mushroom from './../assets/images/banded/omaha/mushroom.png';
import omaha_natural_lemon from './../assets/images/banded/omaha/natural_lemon.png';
import omaha_natural_white from './../assets/images/banded/omaha/natural_white.png';
import omaha_natural_wine from './../assets/images/banded/omaha/natural_wine.png';
import omaha_olive from './../assets/images/banded/omaha/olive.png';
import omaha_peach from './../assets/images/banded/omaha/peach.png';
import omaha_pearl_grey from './../assets/images/banded/omaha/pearl_grey.png';
import omaha_pink from './../assets/images/banded/omaha/pink.png';
import omaha_sage from './../assets/images/banded/omaha/sage.png';
import omaha_sky_blue from './../assets/images/banded/omaha/sky_blue.png';
import omaha_teak from './../assets/images/banded/omaha/teak.png';
import omaha_white from './../assets/images/banded/omaha/white.png';
import omaha_wood_gold from './../assets/images/banded/omaha/wood_gold.png';
import omaha_wood_grey from './../assets/images/banded/omaha/wood_grey.png';
import omaha_wood_white from './../assets/images/banded/omaha/wood_white.png';
import crosse from './../assets/images/banded/crosse/crosse.png';
import crosse_ash from './../assets/images/banded/crosse/ash.png';
import crosse_baltic from './../assets/images/banded/crosse/baltic.png';
import crosse_beige from './../assets/images/banded/crosse/beige.png';
import crosse_black_and_white from './../assets/images/banded/crosse/black_and_white.png';
import crosse_black from './../assets/images/banded/crosse/black.png';
import crosse_brown from './../assets/images/banded/crosse/brown.png';
import crosse_caramel from './../assets/images/banded/crosse/caramel.png';
import crosse_cedar from './../assets/images/banded/crosse/cedar.png';
import crosse_charcoal from './../assets/images/banded/crosse/charcoal.png';
import crosse_choco from './../assets/images/banded/crosse/choco.png';
import crosse_citron from './../assets/images/banded/crosse/citron.png';
import crosse_coroni_blue from './../assets/images/banded/crosse/coroni_blue.png';
import crosse_cream from './../assets/images/banded/crosse/cream.png';
import crosse_dark_blue from './../assets/images/banded/crosse/dark_blue.png';
import crosse_dark_green from './../assets/images/banded/crosse/dark_green.png';
import crosse_dark_grey from './../assets/images/banded/crosse/dark_grey.png';
import crosse_eggplant from './../assets/images/banded/crosse/eggplant.png';
import crosse_forest from './../assets/images/banded/crosse/forest.png';
import crosse_green from './../assets/images/banded/crosse/green.png';
import crosse_grey from './../assets/images/banded/crosse/grey.png';
import crosse_ice_green from './../assets/images/banded/crosse/ice_green.png';
import crosse_ice from './../assets/images/banded/crosse/ice.png';
import crosse_mocha from './../assets/images/banded/crosse/mocha.png';
import crosse_new_beige from './../assets/images/banded/crosse/new_beige.png';
import crosse_olive from './../assets/images/banded/crosse/olive.png';
import crosse_orange from './../assets/images/banded/crosse/orange.png';
import crosse_orchid from './../assets/images/banded/crosse/orchid.png';
import crosse_peach from './../assets/images/banded/crosse/peach.png';
import crosse_pearl from './../assets/images/banded/crosse/pearl.png';
import crosse_pink from './../assets/images/banded/crosse/pink.png';
import crosse_purple from './../assets/images/banded/crosse/purple.png';
import crosse_red from './../assets/images/banded/crosse/red.png';
import crosse_scarlet from './../assets/images/banded/crosse/scarlet.png';
import crosse_sky_blue from './../assets/images/banded/crosse/sky_blue.png';
import crosse_stone_blue from './../assets/images/banded/crosse/stone_blue.png';
import crosse_storm from './../assets/images/banded/crosse/storm.png';
import crosse_sunset_gold from './../assets/images/banded/crosse/sunset_gold.png';
import crosse_taupe from './../assets/images/banded/crosse/taupe.png';
import crosse_wine from './../assets/images/banded/crosse/wine.png';
import crosse_yellow from './../assets/images/banded/crosse/yellow.png';
import bantry from './../assets/images/roller/bantry/bantry.png';
import bantry_beige from './../assets/images/roller/bantry/beige.png';
import bantry_brown from './../assets/images/roller/bantry/brown.png';
import bantry_charcoal from './../assets/images/roller/bantry/charcoal.png';
import bantry_cream from './../assets/images/roller/bantry/cream.png';
import bantry_grey from './../assets/images/roller/bantry/grey.png';
import bantry_white from './../assets/images/roller/bantry/white.png';
import buffalo from './../assets/images/roller/buffalo_blackout/buffalo_blackout.png';
import buffalo_aqua from './../assets/images/roller/buffalo_blackout/aqua.png';
import buffalo_black from './../assets/images/roller/buffalo_blackout/black.png';
import buffalo_blue_fog from './../assets/images/roller/buffalo_blackout/blue_fog.png';
import buffalo_blue_indigo from './../assets/images/roller/buffalo_blackout/blue_indigo.png';
import buffalo_burro from './../assets/images/roller/buffalo_blackout/burro.png';
import buffalo_charcoal from './../assets/images/roller/buffalo_blackout/charcoal.png';
import buffalo_cloud_cream from './../assets/images/roller/buffalo_blackout/cloud_cream.png';
import buffalo_corn_skin from './../assets/images/roller/buffalo_blackout/corn_skin.png';
import buffalo_dark_grey from './../assets/images/roller/buffalo_blackout/dark_grey.png';
import buffalo_elephant_skin from './../assets/images/roller/buffalo_blackout/elephant_skin.png';
import buffalo_light_grey from './../assets/images/roller/buffalo_blackout/light_grey.png';
import buffalo_navy from './../assets/images/roller/buffalo_blackout/navy.png';
import buffalo_power_blue from './../assets/images/roller/buffalo_blackout/power_blue.png';
import buffalo_quarry from './../assets/images/roller/buffalo_blackout/quarry.png';
import buffalo_smoke from './../assets/images/roller/buffalo_blackout/smoke.png';
import buffalo_tan from './../assets/images/roller/buffalo_blackout/tan.png';
import buffalo_taupe from './../assets/images/roller/buffalo_blackout/taupe.png';
import newman_trance from './../assets/images/roller/newman_trance/newman_trance.png';
import newman_trance_black from './../assets/images/roller/newman_trance/black.png';
import newman_trance_blue from './../assets/images/roller/newman_trance/blue.png';
import newman_trance_brown from './../assets/images/roller/newman_trance/brown.png';
import newman_trance_charcoal from './../assets/images/roller/newman_trance/charcoal.png';
import newman_trance_dark_beige from './../assets/images/roller/newman_trance/dark_beige.png';
import newman_trance_dark_grey from './../assets/images/roller/newman_trance/dark_grey.png';
import newman_trance_ivory from './../assets/images/roller/newman_trance/ivory.png';
import newman_trance_light_beige from './../assets/images/roller/newman_trance/light_beige.png';
import newman_trance_light_grey from './../assets/images/roller/newman_trance/light_grey.png';
import newman_trance_mint from './../assets/images/roller/newman_trance/mint.png';
import newman_trance_mustard from './../assets/images/roller/newman_trance/mustard.png';
import newman_trance_white from './../assets/images/roller/newman_trance/white.png';
import newman_trance_wine from './../assets/images/roller/newman_trance/wine.png';
import remash1 from './../assets/images/roller/remash1/remash_1.png';
import remash1_grey from './../assets/images/roller/remash1/grey.png';
import remash1_ivory from './../assets/images/roller/remash1/ivory.png';
import remash1_white from './../assets/images/roller/remash1/white.png';
import remash3 from './../assets/images/roller/remash3/remash_3.png';
import remash3_brown from './../assets/images/roller/remash3/brown.png';
import remash3_charcoal from './../assets/images/roller/remash3/charcoal.png';
import remash3_grey from './../assets/images/roller/remash3/grey.png';
import remash3_ivory from './../assets/images/roller/remash3/ivory.png';
import remash3_navy from './../assets/images/roller/remash3/navy.png';
import remash3_white from './../assets/images/roller/remash3/white.png';
import remash3_design from './../assets/images/roller/remash3_design/remash_3_design.png';
import remash3_design_beige_and_brown from './../assets/images/roller/remash3_design/beige_and_brown.png';
import remash3_design_grey_and_charcoal from './../assets/images/roller/remash3_design/grey_and_charcoal.png';
import remash3_design_ivory_and_beige from './../assets/images/roller/remash3_design/ivory_and_beige.png';
import remash3_design_white_and_dark_grey from './../assets/images/roller/remash3_design/white_and_dark_grey.png';
import remash3_design_white_and_grey from './../assets/images/roller/remash3_design/white_and_grey.png';
import remash3_design_white_and_ivory from './../assets/images/roller/remash3_design/white_and_ivory.png';
import remash3_design_white_and_white from './../assets/images/roller/remash3_design/white_and_white.png';
import rockpile from './../assets/images/roller/rockpile_blackout/rockpile_blackout.png';
import rockpile_choco from './../assets/images/roller/rockpile_blackout/choco.png';
import rockpile_green from './../assets/images/roller/rockpile_blackout/green.png';
import rockpile_grey from './../assets/images/roller/rockpile_blackout/grey.png';
import rockpile_ivory from './../assets/images/roller/rockpile_blackout/ivory.png';
import rockpile_khaki from './../assets/images/roller/rockpile_blackout/khaki.png';
import rockpile_lemon from './../assets/images/roller/rockpile_blackout/lemon.png';
import rockpile_milk from './../assets/images/roller/rockpile_blackout/milk.png';
import rockpile_pink from './../assets/images/roller/rockpile_blackout/pink.png';
import rockpile_purple from './../assets/images/roller/rockpile_blackout/purple.png';
import rockpile_white from './../assets/images/roller/rockpile_blackout/white.png';
import tide from './../assets/images/roller/tide/tide.png';
import tide_blue from './../assets/images/roller/tide/blue.png';
import tide_dark_grey from './../assets/images/roller/tide/dark_grey.png';
import tide_green from './../assets/images/roller/tide/green.png';
import tide_grey from './../assets/images/roller/tide/grey.png';
import tide_ice_white from './../assets/images/roller/tide/ice_white.png';
import tide_ivory from './../assets/images/roller/tide/ivory.png';
import tide_navy from './../assets/images/roller/tide/navy.png';
import tide_peach from './../assets/images/roller/tide/peach.png';
import tide_pink from './../assets/images/roller/tide/pink.png';
import tide_royal_blue from './../assets/images/roller/tide/royal_blue.png';
import tide_taupe from './../assets/images/roller/tide/taupe.png';
import tide_white from './../assets/images/roller/tide/white.png';
import tide_yellow from './../assets/images/roller/tide/yellow.png';
import yap from './../assets/images/roller/yap/yap.png';
import yap_brown from './../assets/images/roller/yap/brown.png';
import yap_charcoal from './../assets/images/roller/yap/charcoal.png';
import yap_green from './../assets/images/roller/yap/green.png';
import yap_grey from './../assets/images/roller/yap/grey.png';
import yap_ivory from './../assets/images/roller/yap/ivory.png';
import yap_sand from './../assets/images/roller/yap/sand.png';
import yap_white from './../assets/images/roller/yap/white.png';
import laser_butterfly from './../assets/images/laser_print/butterfly.png';
import laser_cactus from './../assets/images/laser_print/cactus.png';
import laser_carousel from './../assets/images/laser_print/carousel.png';
import laser_chandelier from './../assets/images/laser_print/chandelier.png';
import laser_city_view from './../assets/images/laser_print/city_view.png';
import laser_cloud from './../assets/images/laser_print/cloud.png';
import laser_coffee_tree from './../assets/images/laser_print/coffee_tree.png';
import laser_dinosaur from './../assets/images/laser_print/dinosaur.png';
import laser_eiffel_tower from './../assets/images/laser_print/eiffel_tower.png';
import laser_heart from './../assets/images/laser_print/heart.png';
import laser_hello_bear from './../assets/images/laser_print/hello_bear.png';
import laser_moon_and_rabbit from './../assets/images/laser_print/moon_and_rabbit.png';
import laser_moons from './../assets/images/laser_print/moons.png';
import laser_spaceship from './../assets/images/laser_print/spaceship.png';
import laser_troy from './../assets/images/laser_print/troy.png';
import laser_whale from './../assets/images/laser_print/whale.png';
import laser_world_map from './../assets/images/laser_print/world_map.png';
import laser_beige from './../assets/images/laser_print/beige.png';
import laser_charcoal from './../assets/images/laser_print/charcoal.png';
import laser_green from './../assets/images/laser_print/green.png';
import laser_grey from './../assets/images/laser_print/grey.png';
import laser_ivory from './../assets/images/laser_print/ivory.png';
import laser_navy from './../assets/images/laser_print/navy.png';
import laser_pink from './../assets/images/laser_print/pink.png';
import laser_watermelon from './../assets/images/laser_print/watermelon.png';
import laser_white from './../assets/images/laser_print/white.png';
import laser_wine from './../assets/images/laser_print/wine.png';

const Catalog = () => {
  const [showAlert1, removeAlert1] = useState(true);
  const [showAlert2, removeAlert2] = useState(true);
  const carouselOptions = { align: 'start', loop: true };

  const catalog = {
    Banded: [
      {
        name: 'Omaha', img: omaha, colors: [
          { src: omaha_beige, text: 'Beige' },
          { src: omaha_black, text: 'Black' },
          { src: omaha_brown, text: 'Brown' },
          { src: omaha_charcoal, text: 'Charcoal' },
          { src: omaha_cherry, text: 'Cherry' },
          { src: omaha_choco, text: 'Choco' },
          { src: omaha_dark_cherry, text: 'Dark Cherry' },
          { src: omaha_green, text: 'Green' },
          { src: omaha_grey, text: 'Grey' },
          { src: omaha_ivory, text: 'Ivory' },
          { src: omaha_khaki, text: 'Khaki' },
          { src: omaha_mushroom, text: 'Mushroom' },
          { src: omaha_natural_lemon, text: 'Natural Lemon' },
          { src: omaha_natural_white, text: 'Natural White' },
          { src: omaha_natural_wine, text: 'Natural Wine' },
          { src: omaha_olive, text: 'Olive' },
          { src: omaha_peach, text: 'Peach' },
          { src: omaha_pearl_grey, text: 'Pearl Grey' },
          { src: omaha_pink, text: 'Pink' },
          { src: omaha_sage, text: 'Sage' },
          { src: omaha_sky_blue, text: 'Sky Blue' },
          { src: omaha_teak, text: 'Teak Cherry' },
          { src: omaha_white, text: 'White' },
          { src: omaha_wood_gold, text: 'Wood Gold' },
          { src: omaha_wood_grey, text: 'Wood Grey' },
          { src: omaha_wood_white, text: 'Wood White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['131g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.41mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors',
          repeatSize: ['Solid 7.5cm / Mesh 5cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'All colors'
        }
      },
      {
        name: 'Crosse', img: crosse, colors: [
          { src: crosse_ash, text: 'Ash' },
          { src: crosse_baltic, text: 'Baltic' },
          { src: crosse_beige, text: 'Beige' },
          { src: crosse_black, text: 'Black' },
          { src: crosse_black_and_white, text: 'Black & White' },
          { src: crosse_brown, text: 'Brown' },
          { src: crosse_caramel, text: 'Caramel' },
          { src: crosse_cedar, text: 'Cedar' },
          { src: crosse_charcoal, text: 'Charcoal' },
          { src: crosse_choco, text: 'Choco' },
          { src: crosse_citron, text: 'Citron' },
          { src: crosse_coroni_blue, text: 'Coroni Blue' },
          { src: crosse_cream, text: 'Cream' },
          { src: crosse_dark_blue, text: 'Dark Blue' },
          { src: crosse_dark_green, text: 'Dark Green' },
          { src: crosse_dark_grey, text: 'Dark Grey' },
          { src: crosse_eggplant, text: 'Eggplant' },
          { src: crosse_forest, text: 'Forest' },
          { src: crosse_green, text: 'Green' },
          { src: crosse_grey, text: 'Grey' },
          { src: crosse_ice, text: 'Ice' },
          { src: crosse_ice_green, text: 'Ice Green' },
          { src: crosse_mocha, text: 'Mocha' },
          { src: crosse_new_beige, text: 'New Beige' },
          { src: crosse_olive, text: 'Olive' },
          { src: crosse_orange, text: 'Orange' },
          { src: crosse_orchid, text: 'Orchid' },
          { src: crosse_peach, text: 'Peach' },
          { src: crosse_pearl, text: 'Pearl' },
          { src: crosse_pink, text: 'Pink' },
          { src: crosse_purple, text: 'Purple' },
          { src: crosse_red, text: 'Red' },
          { src: crosse_scarlet, text: 'Scarlet' },
          { src: crosse_sky_blue, text: 'Sky Blue' },
          { src: crosse_stone_blue, text: 'Stone Blue' },
          { src: crosse_storm, text: 'Storm' },
          { src: crosse_sunset_gold, text: 'Sunset Gold' },
          { src: crosse_taupe, text: 'Taupe' },
          { src: crosse_wine, text: 'Wine' },
          { src: crosse_yellow, text: 'Yellow' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['114g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.31mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'Certain colors',
          repeatSize: ['Solid 7.5cm / Mesh 5cm ', <span key={4}>&plusmn;</span>, '5%'],
          antibacterial: 'All colors'
        }
      },
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
          fireRetardant: 'Certain colors',
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
          fireRetardant: 'Certain colors',
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
          fireRetardant: 'Certain colors',
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
          fireRetardant: 'Certain colors',
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
          fireRetardant: 'Certain colors',
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
      {
        name: 'Newman Trance', img: newman_trance, colors: [
          { src: newman_trance_black, text: 'Black' },
          { src: newman_trance_blue, text: 'Blue' },
          { src: newman_trance_brown, text: 'Brown' },
          { src: newman_trance_charcoal, text: 'Charcoal' },
          { src: newman_trance_dark_beige, text: 'Dark Beige' },
          { src: newman_trance_dark_grey, text: 'Dark Grey' },
          { src: newman_trance_ivory, text: 'Ivory' },
          { src: newman_trance_light_beige, text: 'Light Beige' },
          { src: newman_trance_light_grey, text: 'Light Grey' },
          { src: newman_trance_mint, text: 'Mint' },
          { src: newman_trance_mustard, text: 'Mustard' },
          { src: newman_trance_white, text: 'White' },
          { src: newman_trance_wine, text: 'Wine' },

        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '300cm',
          weight: ['208g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.32mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'All colors',
          repeatSize: 'N/A',
          antibacterial: 'All colors'
        }
      },
      {
        name: 'Remash 1%', img: remash1, colors: [
          { src: remash1_grey, text: 'Grey' },
          { src: remash1_ivory, text: 'Ivory' },
          { src: remash1_white, text: 'White' },
        ],
        specs: {
          composition: '24% Polyester / 76% PVC',
          maxWidth: '300cm',
          weight: ['497g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.65mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: 'N/A',
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Remash 3%', img: remash3, colors: [
          { src: remash3_brown, text: 'Brown' },
          { src: remash3_charcoal, text: 'Charcoal' },
          { src: remash3_grey, text: 'Grey' },
          { src: remash3_ivory, text: 'Ivory' },
          { src: remash3_navy, text: 'Navy' },
          { src: remash3_white, text: 'White' },
        ],
        specs: {
          composition: '24% Polyester / 76% PVC',
          maxWidth: '300cm',
          weight: ['445g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.58mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: 'N/A',
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Remash 3% Design', img: remash3_design, colors: [
          { src: remash3_design_beige_and_brown, text: 'Beige & Brown' },
          { src: remash3_design_grey_and_charcoal, text: 'Grey & Charcoal' },
          { src: remash3_design_ivory_and_beige, text: 'Ivory & Beige' },
          { src: remash3_design_white_and_dark_grey, text: 'White & Dark Grey' },
          { src: remash3_design_white_and_grey, text: 'White & Grey' },
          { src: remash3_design_white_and_ivory, text: 'White & Ivory' },
          { src: remash3_design_white_and_white, text: 'White & White' },
        ],
        specs: {
          composition: '24% Polyester / 76% PVC',
          maxWidth: '300cm',
          weight: ['465g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.62mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: 'N/A',
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Bantry', img: bantry, colors: [
          { src: bantry_beige, text: 'Beige' },
          { src: bantry_brown, text: 'Brown' },
          { src: bantry_charcoal, text: 'Charcoal' },
          { src: bantry_cream, text: 'Cream' },
          { src: bantry_grey, text: 'Grey' },
          { src: bantry_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['211g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.53mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: 'N/A',
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Yap', img: yap, colors: [
          { src: yap_brown, text: 'Brown' },
          { src: yap_charcoal, text: 'Charcoal' },
          { src: yap_green, text: 'Green' },
          { src: yap_grey, text: 'Grey' },
          { src: yap_ivory, text: 'Ivory' },
          { src: yap_sand, text: 'Sand' },
          { src: yap_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['211g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.53mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'N/A',
          repeatSize: 'N/A',
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Rockpile Blackout', img: rockpile, colors: [
          { src: rockpile_choco, text: 'Choco' },
          { src: rockpile_green, text: 'Green' },
          { src: rockpile_grey, text: 'Grey' },
          { src: rockpile_ivory, text: 'Ivory' },
          { src: rockpile_khaki, text: 'Khaki' },
          { src: rockpile_lemon, text: 'Lemon' },
          { src: rockpile_pink, text: 'Pink' },
          { src: rockpile_purple, text: 'Purple' },
          { src: rockpile_white, text: 'White' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['298g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.26mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'All colors',
          repeatSize: 'N/A',
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Buffalo Blackout', img: buffalo, colors: [
          { src: buffalo_aqua, text: 'Aqua' },
          { src: buffalo_black, text: 'Black' },
          { src: buffalo_blue_fog, text: 'Blue Fog' },
          { src: buffalo_blue_indigo, text: 'Blue Indigo' },
          { src: buffalo_burro, text: 'Burro' },
          { src: buffalo_charcoal, text: 'Charcoal' },
          { src: buffalo_cloud_cream, text: 'Cloud Cream' },
          { src: buffalo_corn_skin, text: 'Corn' },
          { src: buffalo_dark_grey, text: 'Dark Grey' },
          { src: buffalo_elephant_skin, text: 'Elephant' },
          { src: buffalo_light_grey, text: 'Light Grey' },
          { src: buffalo_navy, text: 'Navy' },
          { src: buffalo_power_blue, text: 'Power Blue' },
          { src: buffalo_quarry, text: 'Quarry' },
          { src: buffalo_smoke, text: 'Smoke' },
          { src: buffalo_tan, text: 'Tan' },
          { src: buffalo_taupe, text: 'Taupe' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: ['310g/m', <sup key={1}>2</sup>, ' ', <span key={2}>&plusmn;</span>, '5%'],
          thickness: ['0.25mm ', <span key={3}>&plusmn;</span>, '5%'],
          fireRetardant: 'All colors',
          repeatSize: 'N/A',
          antibacterial: 'N/A'
        }
      },
      {
        name: 'Tide', img: tide, colors: [
          { src: tide_blue, text: 'Brown' },
          { src: tide_dark_grey, text: 'Charcoal' },
          { src: tide_green, text: 'Green' },
          { src: tide_grey, text: 'Grey' },
          { src: tide_ice_white, text: 'Ivory' },
          { src: tide_ivory, text: 'Sand' },
          { src: tide_navy, text: 'White' },
          { src: tide_peach, text: 'Brown' },
          { src: tide_pink, text: 'Charcoal' },
          { src: tide_royal_blue, text: 'Green' },
          { src: tide_taupe, text: 'Grey' },
          { src: tide_white, text: 'Ivory' },
          { src: tide_yellow, text: 'Sand' },
        ],
        specs: {
          composition: '100% Polyester',
          maxWidth: '280cm',
          weight: 'N/A',
          thickness: 'N/A',
          fireRetardant: 'Certain colors',
          repeatSize: 'N/A',
          antibacterial: 'N/A'
        }
      },
    ],
    'Laser Cut': {
      images: [
        { src: laser_butterfly, text: 'Butterfly' },
        { src: laser_cactus, text: 'Cactus' },
        { src: laser_carousel, text: 'Carousel' },
        { src: laser_chandelier, text: 'Chandelier' },
        { src: laser_city_view, text: 'City View' },
        { src: laser_cloud, text: 'Cloud' },
        { src: laser_coffee_tree, text: 'Coffee Tree' },
        { src: laser_dinosaur, text: 'Dinosaur' },
        { src: laser_eiffel_tower, text: 'Eiffel Tower' },
        { src: laser_heart, text: 'Heart' },
        { src: laser_hello_bear, text: 'Hello Bear' },
        { src: laser_moon_and_rabbit, text: 'Moon & Rabbit' },
        { src: laser_moons, text: 'Moons' },
        { src: laser_spaceship, text: 'Spaceship' },
        { src: laser_troy, text: 'Troy' },
        { src: laser_whale, text: 'Whale' },
        { src: laser_world_map, text: 'World Map' },
      ],
      colors: [
        { src: laser_beige, text: 'Beige' },
        { src: laser_charcoal, text: 'Charcoal' },
        { src: laser_green, text: 'Green' },
        { src: laser_grey, text: 'Grey' },
        { src: laser_ivory, text: 'Ivory' },
        { src: laser_navy, text: 'Navy' },
        { src: laser_pink, text: 'Pink' },
        { src: laser_watermelon, text: 'Watermelon' },
        { src: laser_white, text: 'White' },
        { src: laser_wine, text: 'Wine' },
      ]
    },
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
                      <div className='tab_image_container'>
                        <img
                          className='tab_image'
                          src={style.img}
                          alt={'banded_' + index}
                        />
                      </div>
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
                  Model:
                </Tab>
                { // render Roller style models
                  catalog.Roller.map((style, index) => (
                    <Tab
                      className={style.specs.antibacterial !== 'N/A' ? 'react-tabs__tab sub_tab antibacterial_tab' : 'react-tabs__tab sub_tab'}
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
                      <div className='tab_image_container'>
                        <img
                          className='tab_image'
                          src={style.img}
                          alt={'roller_' + index}
                        />
                      </div>
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
          <TabPanel className='react-tabs__tab-panel'>
            { // render Laser style images
              <div className='laser_tab_container'>
                <Carousel
                  slides={catalog['Laser Cut'].images}
                  options={carouselOptions}
                  identifier='laser'
                />
                <div className='laser_tab_info_container'>
                  <div className='laser_specs_container'>
                    Choose one of our patterns for a catered experience!
                    <br />
                    Check with your local expert which roller fabrics qualify.
                  </div>
                  <div className='laser_colors_container'>
                    <Carousel
                      slides={catalog['Laser Cut'].colors}
                      options={carouselOptions}
                      identifier='laser_colors'
                    />
                  </div>
                </div>
              </div>
            }
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