import React from 'react'
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import "./Home.css"

const Home = () => {
  return (
    <>
    
    <div id="top" class="starter_container bg">
            <div class="follow_container">
                {/* <div class="col-md-6 col-md-offset-3"> */}
                    <h2 class="top-title">Käse</h2>
                    <h2 class="white second-title">Tienda de quesos</h2>
                    <hr/>
                {/* </div> */}
            </div>
        </div>



    <div className='container'>
          <div className="row">
              <ItemListContainer/>
          </div>
    </div>
    </>
  )
}

export default Home