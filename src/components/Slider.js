import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/pagination';

import styles from '../styles/Slider.module.css';

// Slider videos
import video5 from '../videos/video5.mp4';
import video6 from '../videos/video6.mp4';
import video7 from '../videos/video7.mp4';

function Slider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [videos, setVideos] = useState([video6, video7, video5]);
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChange', () => {
        const currentIndex = swiperRef.current.swiper.activeIndex;
        setActiveIndex(currentIndex);

        const prevVideo = document.getElementById(`video-${playingIndex}`);
        if (prevVideo) {
          prevVideo.pause();
        }

        const currentVideo = document.getElementById(`video-${currentIndex}`);
        if (currentVideo) {
          currentVideo.play();
          setPlayingIndex(currentIndex);
        }
      });
    }
  }, [swiperRef, playingIndex]);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const currentVideo = document.getElementById(`video-${activeIndex}`);
      if (currentVideo) {
        currentVideo.pause();
      }

      swiperRef.current.swiper.slideNext();

      const nextIndex = (activeIndex + 1) % videos.length;
      const nextVideo = document.getElementById(`video-${nextIndex}`);
      if (nextVideo) {
        nextVideo.play();
        nextVideo.style.zIndex = 2;
      }
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const currentVideo = document.getElementById(`video-${activeIndex}`);
      if (currentVideo) {
        currentVideo.pause();
      }

      swiperRef.current.swiper.slidePrev();

      const prevIndex = (activeIndex - 1 + videos.length) % videos.length;
      const prevVideo = document.getElementById(`video-${prevIndex}`);
      if (prevVideo) {
        prevVideo.play();
      }
    }
  };

  const handleMouseEnter = () => {
    const buttons = document.getElementById(`buttons-${activeIndex}`);
    if (buttons) {
      buttons.style.opacity = 1;
    }
  };

  const handleMouseLeave = () => {
    const buttons = document.getElementById(`buttons-${activeIndex}`);
    if (buttons) {
      buttons.style.opacity = 0;
    }
  };

  return (
    <div className={styles.container}>
      <Swiper
        ref={swiperRef}
        className={`swiper-container ${styles.swiperContainer}`}
        modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
        centeredSlides={true}
        effect='coverflow'
        pagination={{clickable: true}}
        speed={1000}
        slidesPerView={larguraTela <= 768 ? 1 : 1.5}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          scale: 1,
          depth: 150,
        }}
      >
        {videos.map((videoSrc, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.slideContent}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <video
                id={`video-${index}`}
                className={`${styles.videoSlider} video-slider`}
                autoPlay={index === activeIndex}
                muted
                playsInline
                loop
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              {index === activeIndex && (
                <div
                  id={`buttons-${index}`}
                  className={styles.buttonContainer}
                  style={{ opacity: 0 }}
                >
                  <button
                    className={`${styles.leftButton} ${index === 0 ? styles.hiddenButton : ''}`}
                    onClick={goPrev}
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    className={`${styles.rightButton} ${index === videos.length - 1 ? styles.hiddenButton : ''}`}
                    onClick={goNext}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
