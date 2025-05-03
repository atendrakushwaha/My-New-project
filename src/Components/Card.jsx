import React from 'react'

const Card = ({ title, img ,button1,button2 }) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl shadow-emerald-300">
        <figure>
          <img
            src={img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{button1}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
