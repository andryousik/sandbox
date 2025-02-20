import React from 'react';
import Card from './Card';
import "./Revenue.css"
import "./Card.css"
import TotalIcon from "../../../../icons/total.png";
import MonthIcon from "../../../../icons/month.png";
import DayIcon from "../../../../icons/24_hour.png";
import HourIcon from "../../../../icons/1_hour.png";



// Временный массив с данными (потом заменишь на данные из БД)
const data = [
  { image: TotalIcon, title: "Total Revenue", description: "€100,000" },
  { image: MonthIcon, title: "Monthly Revenue", description: "€10,000" },
  { image: DayIcon, title: "Last 24h Revenue", description: "€5,000" },
  { image: HourIcon, title: "Last 1h Revenue", description: "€500" },
];

const Revenue = () => {
  return ( 
    <div className='revenue'>
      {data.map((item, index) => (
        <Card 
          key={index}
          image={item.image} 
          title={item.title} 
          discription={item.description} 
        />
      ))}
    </div>
  );
}

export default Revenue;
