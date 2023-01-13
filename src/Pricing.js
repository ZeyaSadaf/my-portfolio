import React from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'
const Pricing = () => {
  return (
    <div className = "pricing">
        
        <h1 className='p__heading'>Skills and Hobbies</h1>
        <div className = 'pricing__cardContainer'>
            <div className = 'pricing__card'>
                <h3>
                    Technical
                </h3>
                <span className = 'bar'></span>
                {/* <p className = 'price'><small>Rs.</small> 500</p> */}
                <p>HTML/CSS</p>
                <p>JavaScript</p>
                <p>Java</p>
                <p>React.js</p>
                <p>node.js, express.js</p>
                {/* <Link to = '/contact' className = 'btn btnPrice'>PURCHASE
                </Link> */}
            </div>

            <div className = 'pricing__card'>
                <h3>
                Soft Skills
                </h3>
                <span className = 'bar'></span>
                {/* <p className = 'price'><small>Rs.</small> 500</p> */}
                <p>Active Listening</p>
                <p>Adaptive</p>
                <p>Mentoring</p>
                <p>Team leadership</p>
                {/* <Link to = '/contact' className = 'btn btnPrice'>PURCHASE
                </Link> */}
            </div>

            <div className = 'pricing__card'>
                <h3>
                    Hobbies
                </h3>
                <span className = 'bar'></span>
                {/* <p className = 'price'><small>Rs.</small> 500</p> */}
                <p>Doodle Art</p>
                <p>Singing</p>
                <p>Gaming</p>
                <p>Sports</p>
                {/* <Link to = '/contact' className = 'btn btnPrice'>PURCHASE
             </Link> */}
            </div>
        </div>
    </div>
  )
}

export default Pricing
