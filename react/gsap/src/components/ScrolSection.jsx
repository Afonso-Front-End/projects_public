import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default function Scrolection() {
    const sectionRef = useRef(null)
    const tringerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, { translateX: 0 },
            {
                translateX: '-300vw',
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: tringerRef.current,
                    start: 'top top',
                    end: '2000 top',
                    scrub: 0.8,
                    pin: true,
                }
            }

        )
        return () => {
            pin.kill()
        }   
    },[])


    useLayoutEffect(()=> {
        // gsap.registerPlugin(ScrollTrigger)
        gsap.to('.section-01', {
            top: '40%',
            left: '50%',
            opacity: 1,
            scrollTrigger: {
                trigger: '.primeira-section',
                markers: true,
                start: '', 
                end: '',
                scrub: 0.6
            }
        })

        return () => {
            gsap.killTweensOf('.section-01')
        }
    },[])


    return (
        <section className="scroll-section-outer">
            <div ref={tringerRef}>
                <div ref={sectionRef} className="scroll-section-inner">

                    <div className="scroll-section primeira-section">
                        <h1 className='section-01'>Section 1</h1>
                    </div>

                    <div className="scroll-section">
                        <h1  className='section-02'>Section 2</h1>
                    </div>
                    <div className="scroll-section">
                        <h1  className='section-03'>Section 3</h1>
                    </div>
                    <div className="scroll-section">
                        <h1  className='section-044'>Section 4</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}