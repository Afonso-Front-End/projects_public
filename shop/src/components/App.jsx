import img_coll_01_img_01 from '../assets/image/coll-01/01-Home_BraunClock.png'
import img_coll_01_img_02 from '../assets/image/coll-01/02-Home_DusenDusenGrinders.png'
import img_coll_01_img_03 from '../assets/image/coll-01/03-Lifestyle_Strata_Plant_Vessel.png'
import img_coll_01_img_04 from '../assets/image/coll-01/04-Books.png'

import img_coll_02_img_01 from '../assets/image/coll-02/01-Home_WombChair.png'
import img_coll_02_img_02 from '../assets/image/coll-02/02-Home_TheRiseBookstand.png'

import img_coll_03_img_01 from '../assets/image/coll-03/01-Lifestyle_GreatJones_Fellow.png'
import img_coll_03_img_02 from '../assets/image/coll-03/02-Splat_Side_Table_Areaware.png'
import img_coll_03_img_03 from '../assets/image/coll-03/03-Home_Tuft-Paw-.png'
import img_coll_03_img_04 from '../assets/image/coll-03/04-Home_AfternoonCoatHanger.png'


import img_coll_04_img_01 from '../assets/image/coll-04/01-Lifestyle_WallClocks_PatKim.png'
import img_coll_04_img_02 from '../assets/image/coll-04/02-Home_grupa.png'

import img_coll_05_img_01 from '../assets/image/coll-05/01-Home_soma.png'
import img_coll_05_img_02 from '../assets/image/coll-05/02-Office_poketo.png'
import img_coll_05_img_03 from '../assets/image/coll-05/03-Lifestyle_aark.png'
import img_coll_05_img_04 from '../assets/image/coll-05/04-kitchen_AArke_Sparkling_Water_Maker.png'

import img_coll_06_img_01 from '../assets/image/coll-06/01-Home_Breville.png'
import img_coll_06_img_02 from '../assets/image/coll-06/02-Lifestyle_Hoto_Minimalist_Drill.png'

import img_coll_07_img_01 from '../assets/image/coll-07/01-Books.png'
import img_coll_07_img_02 from '../assets/image/coll-07/02-Lifestyle_pets.png'
import img_coll_07_img_03 from '../assets/image/coll-07/03-Home_art.png'
import img_coll_07_img_04 from '../assets/image/coll-07/04-Dining_PortableOven.png'

import img_coll_08_img_01 from '../assets/image/coll-08/01-Home_bm.png'
import img_coll_08_img_02 from '../assets/image/coll-08/02-Books_JJulien.png'

import img_coll_09_img_01 from '../assets/image/coll-09/01-Books.png'
import img_coll_09_img_02 from '../assets/image/coll-09/02-Lifestyle_kinto.png'
import img_coll_09_img_03 from '../assets/image/coll-09/03-Lifestyle_polaroid.png'
import img_coll_09_img_04 from '../assets/image/coll-09/04-Home_salt.png'

import iconBag from '../assets/icons/bag.svg'
import iconPerson from '../assets/icons/person.svg'
import iconSearch from '../assets/icons/search.svg'

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



export default function App() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".img_coll_02_img_01", {
            y: 0,
            opacity: 1,
                scrollTrigger: {
                    trigger: '.modall-02',
                    markers: true,
                    start: 'top 500px',
                    end: 'bottom 600px',
                    scrub: true     
                }
        })

        return () => {
            gsap.killTweensOf('.img_coll_02_img_01')
        }
    }, [])

    return (
        <div className="container">
            <div className="content">

                <div className='container-topo'>
                    <div className='content-topo'>
                        <div className='topo'>
                            <div className="logo">
                                <a href="#">shope - ecommerce</a>
                            </div>
                            <button id='buttom-menu'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <ul className="lista-nav-pai">
                                <ul className="lista-nav-filho">
                                    <li>
                                        <a href="#">
                                            <img src={iconPerson} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={iconSearch} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={iconBag} alt="" /></a>
                                    </li>
                                </ul>

                            </ul>
                        </div>
                    </div>
                </div>

                <section className='section-card coll-01' id='modall-01'>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_01_img_01} alt="" className='' />
                        </div>
                        <div className="card-title">
                            <p>Braun Classic Wall Clock</p>
                            <p>$54.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_01_img_02} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Everybody Grinders by Dusen Dusen</p>
                            <p>$48.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_01_img_03} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Strata Plant Vessel by Simone Brewster</p>
                            <p>$70.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_01_img_04} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Poketo: Creative Spaces</p>
                            <p>$32.00</p>
                        </div>
                    </div>

                </section>

                <section className='section-card coll-02 modall-02' >

                    <div className="card-coll-02">
                        <div className='img-card-coll-02'>
                            <img src={img_coll_02_img_01} alt="" className='img_coll_02_img_01'/>
                        </div>
                        <div className="card-title">
                            <p>Womb Chair & Ottoman in Dijon Yellow</p>
                            <p>$1679.00</p>
                        </div>
                    </div>
                    <div className="card-coll-02">
                        <div className='img-card-coll-02'>
                            <img src={img_coll_02_img_02} alt="" className='img_coll_02_img_01'/>
                        </div>
                        <div className="card-title">
                            <p>Rise Bookstand by Sun at Six</p>
                            <p>Sale - $129.99</p>
                        </div>
                    </div>

                </section>

                <section className='section-card coll-01' id='modall-03'>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_03_img_01} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Grove Cat Tower (Ash)</p>
                            <p>$499.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_03_img_02} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Splat Side Table by Sophie Collé</p>
                            <p>$190.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_03_img_03} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Afternoon Coat Hanger by Menu</p>
                            <p>$170.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_03_img_04} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Great Fellow Kettle by Great Jones</p>
                            <p>$165.00</p>
                        </div>
                    </div>

                </section>

                <section className='section-card coll-02' id='modall-04'>

                    <div className="card-coll-02">
                        <div className='img-card-coll-02'>
                            <img src={img_coll_04_img_01} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Abstract Wall Clocks by Pat Kim</p>
                            <p>$85.00</p>
                        </div>
                    </div>
                    <div className="card-coll-02">
                        <div className='img-card-coll-02'>
                            <img src={img_coll_04_img_02} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Grupa: Arigato Desk Lamp</p>
                            <p>From - $380.99</p>
                        </div>
                    </div>

                </section>

                <section className='section-card coll-01' id='modall-05'>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_05_img_01} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Soma Pitcher Plant-Based Filtration</p>
                            <p>$39.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_05_img_02} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Poketo Quarterly Goal Planner</p>
                            <p>$28.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_05_img_03} alt="" />
                        </div>
                        <div className="card-title">
                            <p>AÃRK Collective Multi Watch</p>
                            <p>$119.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_05_img_04} alt="" />
                        </div>
                        <div className="card-title">
                            <p>AARKE Sparkling Water Maker</p>
                            <p>$229.00</p>
                        </div>
                    </div>

                </section>

                <section className='section-card coll-02' id='modall-06'>

                    <div className="card-coll-02">
                        <div className='img-card-coll-02'>
                            <img src={img_coll_06_img_01} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Breville Barista Espresso Machine</p>
                            <p>Sale $549.95</p>
                        </div>
                    </div>
                    <div className="card-coll-02">
                        <div className='img-card-coll-02'>
                            <img src={img_coll_06_img_02} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Breville Barista Espresso Machine</p>
                            <p>$149.99</p>
                        </div>
                    </div>

                </section>

                <section className='section-card coll-01' id='modall-07'>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_07_img_01} alt="" />
                        </div>
                        <div className="card-title">
                            <p>The Monocle Guide to Better Living </p>
                            <p>$40.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_07_img_02} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Best Friends Deep Dish Cuddler Bed </p>
                            <p>$39.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_07_img_03} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Accident by HeyShop </p>
                            <p>$44.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_07_img_04} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Accident by HeyShop</p>
                            <p>$499.00</p>
                        </div>
                    </div>

                </section>

                <section className='section-card coll-02' id='modall-08'>

                    <div className="card-coll-02">
                        <div className='img-card-coll-02'>
                            <img src={img_coll_08_img_01} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Summer Print by Bratislav Milenkovic</p>
                            <p>$27.00</p>
                        </div>
                    </div>
                    <div className="card-coll-02">
                        <div className='img-card-coll-02'>
                            <img src={img_coll_08_img_02} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Jean Jullien Monograph by Phaidon</p>
                            <p>$55.00</p>
                        </div>
                    </div>

                </section>

                <section className='section-card coll-01' id='modall-09'>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_09_img_01} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Nathan Williams: The Eye </p>
                            <p>$41.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_09_img_02} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Nathan Williams: The Eye </p>
                            <p>$36.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_09_img_03} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Fujifilm Instax Mini 11 Camera </p>
                            <p>$72.00</p>
                        </div>
                    </div>

                    <div className="card-coll-01">
                        <div className='img-card-card-coll-01'>
                            <img src={img_coll_09_img_04} alt="" />
                        </div>
                        <div className="card-title">
                            <p>Menu Bottle Grinder</p>
                            <p>$50.00</p>
                        </div>
                    </div>

                </section>
            </div>
        </div >
    )
}