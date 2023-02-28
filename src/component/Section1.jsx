import React from 'react'
import image2 from './../Images/banner image.png'
import image3 from './../Images/Brand Mechanics Final logo-wht.png'

const Section1 = () => {
    return (
        <div className="flex flex-row bg-sky-900 ">
            <div className="flex flex-column ">
                <div className="image">
                    <img
                        src={image3}
                        alt=""
                        style={{
                            height: "70px",
                            width: "150px",
                            marginTop: "50px",
                            marginLeft: "53px",
                        }}
                    />
                </div>
                <div className="detail" style={{marginLeft:"-120px"}}>
                    <div className="font-extrabold text-4xl pr-80 mt-40 text-green-600 ">
                        Zero Trust
                    </div>
                    <div className="font-bold text-4xl text-white">
                        for the Workforce
                    </div>
                    <div className="text-white">
                        <div className="">Modern security is evolving</div>
                        <div className="">beyond the perimeter.</div>
                    </div>
                </div>
                <div style={{marginLeft:"270px"}}>
                    <img
                        src={image2}
                        alt="ghrel"
                        style={{
                            height: "399px",
                            width: "350px",
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default Section1