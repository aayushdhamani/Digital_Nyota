import React from 'react'

import './provide.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import img1 from './9.jpg';
import { RxCountdownTimer } from 'react-icons/rx';
import { MdInsertInvitation } from 'react-icons/md';
import { BsHouseDoor } from 'react-icons/bs';
import WI from './WeddingInvitation.png'
import CD from './Coutdown.png';
import SD from './Save the date.png';
import WR from './Wardrobe planner.png';

const provide = () => {
  return (
   <>
   <div className="page page3">
   <VerticalTimeline lineColor='#0f6d53'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#0f6d53', color: 'white' ,boxShadow:' 12px 12px 14px grey'}}
    contentArrowStyle={{ borderRight: '7px solid  #0f6d53' }}
    iconStyle={{ background: '#0f6d53', color: 'white' }}
    icon={<RxCountdownTimer />}
   
  >
    <h3 className="vertical-timeline-element-title mb-2">Countdown (Days to go)</h3>
    <img className="img" src={CD} alt="" style={{width:'450px',height:'300px'}}/>
    <p>
    Counting down the days to the most precious day of our lives! 💍 With only [# Days Togo] until the big day, we at DIGITAL NYOTA are ready to make your wedding day countdown an extraordinary one! We specialize in creating unique and elegant wedding day countdowns that perfectly capture the joy and excitement of this special moment. Let us help you create the best wedding day countdown of your life!
    </p>
   <a style={{textDecoration:"None"}} href="/days"><button className="centered-button btn btn-success my-2" >View More</button></a> 
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#0f6d53', color: '#fff' }}
    contentStyle={{ background: '#0f6d53', color: 'white' ,boxShadow:' 12px 12px 14px grey'}}
    contentArrowStyle={{ borderRight: '7px solid  #0f6d53' }}
    icon={<MdInsertInvitation/>}
  >
    <h3 className="vertical-timeline-element-title mb-2">Save the Date video </h3>
    <img className="img" src={SD} alt="" style={{width:'450px',height:'300px'}}/>
    <p>
    Want to tell your love story in a special way? We offer both story-based and non-story-based options, so you can choose the one that best fits your style and preferences. Our personalized save-the-date video will capture your love story in a beautiful way and help you keep your memory forever alive.
    </p>
    <a style={{textDecoration:"None"}} href="/save"><button className="centered-button btn btn-success my-2" > View More</button></a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#0f6d53', color: '#fff' }}
    contentStyle={{ background: '#0f6d53', color: 'white' ,boxShadow:' 12px 12px 14px grey'}}
    contentArrowStyle={{ borderRight: '7px solid  #0f6d53' }}
    icon={<MdInsertInvitation/>}
  >
    <h3 className="vertical-timeline-element-title mb-2">Wardrobe planner</h3>
    <img className="img" src={WR} alt="" style={{width:'450px',height:'300px'}}/>
    <p>
    Planning the perfect wedding wardrobe is an essential part of the wedding planning process. With so many details to consider, it's a relief to have a professional wedding wardrobe planner to help make the process a breeze! From selecting the perfect dress to accessorizing with the right jewellery and shoes, we've got you covered!
    </p>
    <a style={{textDecoration:"None"}} href="/wardrobe"><button className="centered-button btn btn-success my-2" > View More</button></a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#0f6d53', color: '#fff' }}
    contentStyle={{ background: '#0f6d53', color: 'white' ,boxShadow:' 12px 12px 14px grey'}}
    contentArrowStyle={{ borderRight: '7px solid #0f6d53' }}
    icon={<MdInsertInvitation/>}
  >
    <h3 className="vertical-timeline-element-title mb-2">Wedding Invitation</h3>
    <img className="img" src={WI} alt="" style={{width:'450px',height:'300px'}}/>
    <p>
    Leave a lasting impression on your guests with our personalized wedding invitation video. Our expert editors create a video that perfectly captures the essence of your love story and gives your guests all the important information about your wedding day.
    </p>
    <a style={{textDecoration:"None"}} href="/wedding"><button className="centered-button btn btn-success my-2" > View More</button></a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0f6d53', color: '#fff' }}
    contentStyle={{ background: '#0f6d53', color: 'white' ,boxShadow:' 12px 12px 14px grey'}}
    contentArrowStyle={{ borderRight: '7px solid  #0f6d53' }}
    icon={<MdInsertInvitation/>}
  >
    <h3 className="vertical-timeline-element-title mb-2">Couple logo</h3>
    <img className="img" src={img1} alt="" style={{width:'450px',height:'300px'}}/>
    <p>
    Our skilled designers are capable of producing a distinctive and customized logo that embodies you and your partner. We will collaborate closely with you to comprehend your preferences and aesthetics, making a distinct design that is tailored to your needs. This exceptional design can be utilized across all your wedding-related items, such as invitations, thank-you cards, and more.
    </p>
    <a style={{textDecoration:"None"}} href="/couple"><button className="centered-button btn btn-success my-2" > View More</button></a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0f6d53', color: '#fff' }}
    contentStyle={{ background: '#0f6d53', color: 'white' ,boxShadow:' 12px 12px 14px grey'}}
    contentArrowStyle={{ borderRight: '7px solid  #0f6d53' }}
    icon={<MdInsertInvitation/>}
  >
    <h3 className="vertical-timeline-element-title mb-2">Invitation PDF Design</h3>
    <img className="img" src={img1} alt="" style={{width:'450px',height:'300px'}}/>
    <p>
    Your taste and proclivities before crafting a design that accurately conveys the spirit of your big day. Looking for a stunning PDF invitation that truly reflects your unique wedding style and personality? Look no further than our team of expert designers! We pride ourselves on our creativity and attention to detail, working closely with you to bring your vision to life. From classic elegance to whimsical charm, we'll help you create a one-of-a-kind invitation that will leave a lasting impression on all your guests.
    </p>
    <a style={{textDecoration:"None"}} href="/pdf"><button className="centered-button btn btn-success my-2" > View More</button></a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0f6d53 ', color: '#fff' }}
    contentStyle={{ background: '#0f6d53', color: 'white' ,boxShadow:' 12px 12px 14px grey'}}   
   contentArrowStyle={{ borderRight: '7px solid #0f6d53' }}
    icon={<MdInsertInvitation/>}
  >
    <h3 className="vertical-timeline-element-title mb-2">Couple Caricatures</h3>
    <img className="img" src={img1} alt="" style={{width:'450px',height:'300px'}}/>
    <p>
    Inject some creative flair into your wedding invitations with our one-of-a-kind customized couple caricatures! Our talented team will expertly craft a playful and charismatic caricature of you and your significant other, reflecting your distinct personalities and tastes. You can flaunt your caricature on all your wedding stationery and ensure that your guests are impressed from start to finish!
    </p>
    <a style={{textDecoration:"None"}} href="/caricature"><button className="centered-button btn btn-success my-2" > View More</button></a>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#0f6d53', color: 'white' ,boxShadow:' 12px 12px 14px grey'}}
    contentArrowStyle={{ borderRight: '7px solid  #0f6d53' }}
    iconStyle={{ background: '#0f6d53 ', color: '#fff' }}
    icon={<BsHouseDoor/>}
  >
    <h3 className="vertical-timeline-element-title mb-2">House warming</h3>
    <img className="img" src={img1} alt="" style={{width:'450px',height:'300px'}}/>
    <p>
    Create a warm welcome for your loved ones with the best House warming Invitations in town! Whether you’re inviting your family, friends, or colleagues, make sure to make an impression with our beautiful and unique designs. Let us help you create the perfect House warming Invitation that will leave a lasting memory for all your special guests!
    </p>
    <a style={{textDecoration:"None"}} href="/housewarming"><button className="centered-button btn btn-success my-2" > View More</button></a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#0f6d53', color: 'white' ,boxShadow:' 12px 12px 14px grey' }}
    contentArrowStyle={{ borderRight: '7px solid  #0f6d53' }}
    iconStyle={{ background: '#0f6d53 ', color: '#fff' }}
    icon={<MdInsertInvitation/>}
  >
    <h3 className="vertical-timeline-element-title mb-2">Anniversary Invitation</h3>
    <img className="img" src={img1} alt="" style={{width:'450px',height:'300px'}}/>
    <p>
    Make your special day even more special with the best anniversary invitation in town! We understand how important your special day is to you, and that's why we strive to make the best anniversary invitation that will make your day memorable for a lifetime. Our team of experts uses their creative minds and artistic vision to craft unique designs that will make your anniversary celebration one to remember. So don't hesitate - let us help you make the most of your special day!
    </p>
    <a style={{textDecoration:"None"}} href="/anniversary"><button className="centered-button btn btn-success my-2" > View More</button></a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#0f6d53', color: 'white' ,boxShadow:' 12px 12px 14px grey' }}
    contentArrowStyle={{ borderRight: '7px solid #0f6d53' }}
    iconStyle={{ background: '#0f6d53 ', color: '#fff' }}
    icon={<MdInsertInvitation/>}
  >
    <h3 className="vertical-timeline-element-title mb-2">Engagement Invitation</h3>
    <img className="img" src={img1} alt="" style={{width:'450px',height:'300px'}}/>
    <p>
    From classic and timeless designs to contemporary and modern, we have something to suit every style and budget. Our expert team of designers is here to make sure your invitation is one-of-a-kind and makes a lasting impression. Let us help you create the perfect Engagement Invitation that will leave your guests in awe!
    </p>
    <a style={{textDecoration:"None"}} href="/engagement"><button className="centered-button btn btn-success my-2" > View More</button></a>
  </VerticalTimelineElement>
</VerticalTimeline>

</div>
   </>
  )
}

export default provide
