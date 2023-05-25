import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPinterestP} from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const footer = () => (
    <div>
        <div className="footer ">
        <div className="container mb-5">
            <div className="row">
                <div className="icons col-md-6 ">
                    <FaInstagram class="icon instagram" />
                    <FaWhatsapp class="icon whatsapp" />
                    <FaPinterestP class="icon pinterest" />

                </div>
                <div className="col-md-6">
                  <p class="footercon"><AiOutlineCopyrightCircle/> 2023 Digital Nyota All Rights Reserved.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
)

export default footer
