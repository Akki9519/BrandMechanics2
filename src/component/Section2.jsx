import { Button } from '@mui/material';
import React from 'react'
import image4 from './../Images/Zerotrust_Image_1.png'
import image3 from './../Images/body image.png'

const Section2 = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-9/12">
          <div className="m-5" >
            <p className="text-2xl text-cyan-900">
              What does Zero Trust security
            </p>
            <p className="text-2xl text-cyan-900">
              mean for your organization?
            </p>
          </div>
          <div className="m-5">
            <p className="">
              A Zero Trust approach shifts the secure perimeter to any place where
              you make an access control decision and prompts you to question your
              assumptions of trust every time there’s an access event. The road to
              Zero Trust starts with securing the workforce by verifying the identity
              of the user and ensuring the security of their devices before granting
              access to only the applications they need. Get started on the path to
              Zero Trust by protecting your workforce with Duo
            </p>
          </div>
          <div className="m-5">
            <p className="font-bold text-xl">
              Start your Zero Trust journey and view our offers below.
              Get in touch to learn more:
            </p>
          </div>
          <div className=" m-5">
            <Button sx={{ backgroundColor: "green", color: "white", borderRadius: "20px", paddingLeft: "20px", paddingRight: "20px" }}>Get in touch for a FREE</Button>
          </div>
        </div>
        <div >
          <div className="">
            <img
              src={image3}
              alt=""
              style={{
                height: "340px",
                width: "360px",
              }}
            />
          </div>
          <div style={{marginTop:"-150px",marginRight:"-160px"}}>
            <img
              src={image4}
              alt=""
              style={{
                height: "220px",
                width: "230px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2