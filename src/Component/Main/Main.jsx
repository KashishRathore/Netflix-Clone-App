import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <main className='main'>
      <div className="mainbox">
        <div className="text">
          <h1>Enjoy on your TV</h1>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="text-img">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        </div>
      </div>


      <div className="mainbox">
        <div className="text">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
        <div className="text-img">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
        </div>
      </div>


      <div className="mainbox">
        <div className="text">
          <h1>Watch everywhere</h1>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className="text-img">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
        </div>
      </div>



      <div className="mainbox">
        <div className="text">
          <h1>Create profiles for kids</h1>
          <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
        <div className="text-img">
          <img src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />
        </div>
      </div>
    </main>
  )
}

export default Main