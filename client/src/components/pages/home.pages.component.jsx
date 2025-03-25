import React from 'react'
import HeroSection from '../ui/hero.ui.component'
import Categories from '../ui/categories.ui.component'
import FaQ from '../ui/faq.ui.component'
import Panel from '../ui/panel.ui.component'
import DropDown from "../utils/dropdown.utils.component";
const HomePage = () => {
  return (
    <>
        <HeroSection />
        <Categories />
        <Panel >
          <div className='header'>
            <h1>Top products</h1>
            <DropDown items={
              [
                {itemname: 'Recent', itemcallback: ()=>{}},
                {itemname: 'Top rating', itemcallback: ()=>{}},
              ]
            } />
          </div>
        </Panel>
        <FaQ />
    </>
  )
}

export default HomePage