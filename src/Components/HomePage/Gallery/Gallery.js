import React from 'react'
import "./GalleryStyle.css"

const Gallery = () => {
    const imgUrl = [
        "https://img.freepik.com/free-vector/top-view-cup-coffee-with-roasted-beans_52683-32340.jpg?w=740&t=st=1673370073~exp=1673370673~hmac=8a3f237c1ea16aa781ec9840381d988c0c70aa6fa8ea4594da5f04d044febb65",
        "https://img.freepik.com/free-photo/coffee-beans-wooden-small-bowls-old-wooden-vintage-background-closeup_1220-6683.jpg?w=740&t=st=1673372686~exp=1673373286~hmac=c4aa23963063a39b4bf495abc7701bdac751a5f55d4e70dc521823309bdceda7",
        "https://img.freepik.com/premium-vector/cold-brew-coffee-ads-with-retro-style-engraving-brown-background-3d-illustration_317396-1183.jpg?w=740",
        "https://img.freepik.com/free-photo/coffee-beans-with-props-making-coffee_1220-4536.jpg?w=740&t=st=1673372433~exp=1673373033~hmac=0dbbc99ce43eb369ba63df4a249f5161b799346142931f5a3fd58d58cd0490ca",
        "https://img.freepik.com/premium-vector/cold-brew-coffee-ads-with-retro-style-engraving-brown-background-3d-illustration_317396-1183.jpg?w=740",
        "https://img.freepik.com/free-photo/coffee-beans-with-props-making-coffee_1220-4536.jpg?w=740&t=st=1673372433~exp=1673373033~hmac=0dbbc99ce43eb369ba63df4a249f5161b799346142931f5a3fd58d58cd0490ca",
        "https://img.freepik.com/free-photo/coffee-beans-wooden-small-bowls-old-wooden-vintage-background-closeup_1220-6683.jpg?w=740&t=st=1673372686~exp=1673373286~hmac=c4aa23963063a39b4bf495abc7701bdac751a5f55d4e70dc521823309bdceda7",
        "https://img.freepik.com/free-vector/top-view-cup-coffee-with-roasted-beans_52683-32340.jpg?w=740&t=st=1673370073~exp=1673370673~hmac=8a3f237c1ea16aa781ec9840381d988c0c70aa6fa8ea4594da5f04d044febb65"
    ]
  return (
    <div className='gallery-container'>
        <h2 className="gallery-header">Our Gallery</h2>
      <div className='gallery-img'>
        {
            imgUrl.map(url => <img className='glry-img' src={url} alt="" />)
        }
      </div>
    </div>
  )
}

export default Gallery
