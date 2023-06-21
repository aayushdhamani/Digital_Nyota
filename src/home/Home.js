import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [data, setData] = useState([]);
  const videoRefs = useRef([]);
  const observer = useRef(null);

  useEffect(() => {
    fetch('https://backend-production-e1c2.up.railway.app/api/video/getallvideo', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWJjYzJmNzQ1ZTk3YjkxYjAxYjE1In0sImlhdCI6MTY4Njg2MDkwOX0.aWg9W1VlyWtbZQhWUJIHtmXMGkSu7t5Z1LLA-X7H_Xs',
      },
    })
      .then(response => response.json())
      .then(response => {
        setData(response?.videos);
        console.log(response.videos);
      })
      .catch(error => {
        console.log(error);
      });

    observer.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const videoIndex = Number(entry.target.getAttribute('data-index'));
            handleVideoAnimation(videoIndex, true);
          } else {
            const videoIndex = Number(entry.target.getAttribute('data-index'));
            handleVideoAnimation(videoIndex, false);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as per your needs
    );

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleVideoAnimation = (index, animate) => {
    const videoRef = videoRefs.current[index];
    if (animate) {
      videoRef.classList.add('animate');
      videoRef.play().catch(error => {
        console.log(error);
      });
    } else {
      videoRef.classList.remove('animate');
      videoRef.pause();
      videoRef.currentTime = 0;
    }
  };

  useEffect(() => {
    if (data.length > 0 && observer.current) {
      videoRefs.current.forEach((videoRef, index) => {
        observer.current.observe(videoRef);
      });
    }
  }, [data]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 6000, // Adjust the autoplay speed as needed
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3, // Adjust the number of visible slides
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ParallaxProvider>
      <div className="home-container">
        <div className="scrollable-container2 bg-image2 ">
          <Slider {...sliderSettings}>
            {data?.map((harsh, index) => (
              <div className="home d-flex flex-column" key={index}>
                <Parallax y={[-20, 20]} tagOuter="div">
                  <video
                    ref={ref => (videoRefs.current[index] = ref)}
                    width="100%"
                    height="500px"
                    // className="save-video"
                    autoPlay
                    muted
                    loop
                  >
                    <source
                      src={`https://backend-production-e1c2.up.railway.app/${harsh?.video}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </Parallax>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
