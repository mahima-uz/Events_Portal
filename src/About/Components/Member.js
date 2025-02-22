import React from 'react'
import "./Member.css"
import Team from "./Team"

export default function Member() {
    return (
        <div className='team_about'>
            <div className="team_Header"><h1>TEAM</h1></div>
            <div className="container">
                {Team.map((item, index) => {
                    return (

                        <div key={index} className="mem_card">
                            <div className='card-inner'>
                                <div className="mem_content">
                                    <div className="imgbox">
                                        <img src={item.img} alt="" />
                                    </div>
                                </div>
                                <div className='flip'>
                                    <div className="detail">
                                        <h4>{item.name}</h4>
                                        <h5>{item.position}</h5>
                                        <p className='detail-para'>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )

                })}
            </div>
        </div>


    )
}
