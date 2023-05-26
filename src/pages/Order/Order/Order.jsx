import React from 'react';
import orderCoverImg from "../../../../../bistro-boss-restaurant-resources/assets/shop/banner2.jpg"
import Cover from '../../../Components/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hook/useMenu';
import OrderTabs from '../OrderTabs/OrderTabs';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category === 'dessert');
    const soup=menu.filter(item=>item.category === 'soup')
    const drinks=menu.filter(item=>item.category === 'drinks')
    const salad=menu.filter(item=>item.category === 'salad')
    const pizza=menu.filter(item=>item.category === 'pizza');
    
    return (
        <div>
            <Cover img={orderCoverImg} title='Order Food'></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className='my-5 text-center'>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
       
      </TabList>
      <TabPanel>
     <OrderTabs
     items={salad}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs
     items={pizza}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs
     items={soup}></OrderTabs>
      </TabPanel>
      
      <TabPanel>
      <OrderTabs
     items={dessert}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs
     items={drinks}></OrderTabs>
      </TabPanel>
      
    </Tabs>
        </div>
    );
};

export default Order;