import React, { useState, useLayoutEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.scss"
import gsap from 'gsap';
import * as Icon from 'react-bootstrap-icons';

const Banner = () => {
    /* ---------- VARIABLES STATE ------------ */
    const [index, setIndex] = useState(0);
    const BannerRef = useRef();
    const revealRefs = useRef([]);
    const carousel = useRef()
    const cursorRef = useRef();


    /* ---------- FUNCTIONS HANDLER ------------ */
    //useLayoutEffect: sử dụng cho tương tác animation sử dụng gsap
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            revealRefs.current.forEach((el, index) => {
                gsap.from(el, 1, { y: "35px", ease: 'Power4.easeOut' }, 0.1);
            });
        }, BannerRef);

        return () => ctx.revert();
    }, []);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const textAnim = () => {
        revealRefs.current.forEach((el, index) => {
            gsap.from(el, 1, { y: "35px", ease: 'Power4.easeOut' }, 0.1);
        });
    }

    const addRef = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    }

    //Xử lí xự kiện di chuột vào Banner
    const hanldeMouseOver = (event) => {
        event.stopPropagation();
        var cursor = cursorRef.current
        var banner = event.currentTarget
        var cX = event.screenX
        var cY = event.screenY
        cursor.style.display = "flex"
        cursor.style.top = cY - 120 + 'px'
        cursor.style.left = cX - 40 + 'px'
        document.body.style.cursor = 'none';
    }

    //Xử lí xự kiện dời chuột khỏi Banner
    const handleMouseLeave = (event) => {
        event.stopPropagation();
        var cursor = cursorRef.current
        cursor.style.display = "none"
        document.body.style.cursor = 'auto';
    }

    /* ---------- HTML RENDERER DOM ------------ */
    return (
        <div className='Banner' >
            <Carousel activeIndex={index} onSelect={handleSelect} ref={carousel} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.ddecor.com/media/wysiwyg/bannerslider/new_sequence_3_web.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.ddecor.com/media/wysiwyg/bannerslider/D_Decor-Website-Banner__1920-x-920-pix_ESTEEM.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="https://cdn.ddecor.com/media/wysiwyg/bannerslider/new_sequence_4_web.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className='caption'>
                <div className='title'>
                    <h3 style={{ "transform": "translateY(8px)" }}>
                        <span ref={addRef}>
                            Tinh tế
                        </span>
                    </h3>
                    <h3>
                        <span ref={addRef}>
                            Thoải mái
                        </span>
                    </h3>
                    <h3 style={{ "transform": "translateY(-8px)" }}>
                        <span ref={addRef}>
                            Sang trọng
                        </span>
                    </h3>
                </div>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>
            </div>
            <div className='cursor-follow' ref={cursorRef}>
                <div className='cursor-follow-icon'>
                    <Icon.BagHeartFill size={40} color="#544025" />
                </div>
            </div>

            <div className='event-container' onMouseMove={hanldeMouseOver} onMouseLeave={handleMouseLeave}></div>
        </div>
    )
}

export default Banner