import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPinterestP} from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const footer = () => (
    <div>
        <div className="footer  " >
        <div className="container ">
            <div className="row">
                <div className="icons col-md-6 ">
                    <FaInstagram className="icon instagram" />
                    <a
            href="https://wa.me/8387801336?text=Hello%20from%20my%20website!"
            target="_blank"
          > <FaWhatsapp className="icon whatsapp" /></a>
                    <FaPinterestP className="icon pinterest" />

                </div>
                <div className="col-md-6" style={{color:"#0f6d53"}}>
                  <p className="footercon"><AiOutlineCopyrightCircle/> 2023 Digital Nyota All Rights Reserved.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
)

export default footer


