import React from 'react'
import NavBar from '../component/NavBar'
import Mid from '../component/Mid'
import Plea from '../component/Plea';
import { TbLogs } from 'react-icons/tb';
import { BiCurrentLocation } from 'react-icons/bi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { AiOutlineShop } from 'react-icons/ai';
import { GiBackpack } from 'react-icons/gi';
import { GiModernCity } from 'react-icons/gi';
import { BsCapsulePill } from 'react-icons/bs';
import { GiCityCar } from 'react-icons/gi';
import { FaRegLightbulb } from 'react-icons/fa6';
import { TbSettingsSearch } from 'react-icons/tb';
import { SiGooglemaps } from 'react-icons/si';
import How from '../component/How';
import Explore from '../component/Explore';
import Clients from '../component/Clients';
import Listening from '../component/Listening';
export default function LandingPage() {
  return (
    <div>
      <NavBar/>
      <Mid/>
      <Plea/>
      <How/>
      <Explore/>
      <Clients/>
      <Listening/>
    </div>
  )
}
