import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Components/Cover/Cover';
import menuImg from '../../../../../bistro-boss-restaurant-resources/assets/menu/banner3.jpg'
import useMenu from '../../../hook/useMenu';
import MenuCategory from './MenuCategory';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import dessetImg from '../../../../../bistro-boss-restaurant-resources/assets/menu/dessert-bg.jpeg';
import soupImg from '../../../../../bistro-boss-restaurant-resources/assets/menu/soup-bg.jpg';
import saladImg from '../../../../../bistro-boss-restaurant-resources/assets/menu/salad-bg.jpg';
import pizzaImg from '../../../../../bistro-boss-restaurant-resources/assets/menu/pizza-bg.jpg';

const Menu = () => {
  const [menu]=useMenu();
  const dessert=menu.filter(item=>item.category === 'dessert');
  const soup=menu.filter(item=>item.category === 'soup')
  const drinks=menu.filter(item=>item.category === 'drinks')
  const salad=menu.filter(item=>item.category === 'salad')
  const pizza=menu.filter(item=>item.category === 'pizza')

  return (
        <div>
          <Helmet>
            <title>Bistro | Menu</title>
          </Helmet>
<Cover
img={menuImg}
title='our menu'
>

</Cover>
<SectionTitle
            heading='Today Offer'
            subHeading='Dont Miss'
        
            ></SectionTitle>
{/**desser menu */}

<MenuCategory
 items={dessert}
 title='dessert'
 img={dessetImg}
>
</MenuCategory>

{/**soup menu */}

<MenuCategory
 items={soup}
 title='soup'
 img={soupImg}
>
</MenuCategory>

{/**drinks menu */}

{/**salad menu */}

<MenuCategory
 items={salad}
 title='salad'
 img={saladImg}
>
</MenuCategory>

{/**pizza menu */}

<MenuCategory
 items={pizza}
 title='pizzzza'
 img={pizzaImg}
>
</MenuCategory>
        </div>
    );
};

export default Menu;