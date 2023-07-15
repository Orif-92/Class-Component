import React from 'react';

const App = () => {
  return (
    <div>
      <div className="heading"> 🎞️ My movies</div>

      <div className="card">
        <div className="top">
          <h2>The Social Network</h2>
          <img 
          src="https://static.tvtropes.org/pmwiki/pub/images/thesocialnetwork.jpg" alt=''
          />
        </div>
        <div className="bottom">
        <p>90%❤️</p> 
        <p>October 1, 2010</p>
        </div>
      </div>
    </div>
  )
}

export default App;
