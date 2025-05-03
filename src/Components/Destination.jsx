import React from 'react'
import Card from './Card'


const Destination = () => {
    const cardData = [
        { title: 'Card 1', img: 'https://picsum.photos/400/200?random=1' ,button1:'Book Now'},
        { title: 'Card 2', img: 'https://picsum.photos/400/200?random=2',button1:'Book Now' },
        { title: 'Card 3', img: 'https://picsum.photos/400/200?random=3',button1:'Book Now' },
      ]
    
      return (
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {cardData.map((item, index) => (
            <Card key={index} title={item.title} img={item.img} button1={item.button1}/>
          ))}
        </div>
      )
}

export default Destination