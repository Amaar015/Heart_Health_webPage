import React from 'react'
import './style.css';
import Navbar from '../General/Navbar'
import vacine from '../../images/logo_files/vaccination-7734674_640.webp';
import health from '../../images/logo_files/heart-1357923_640.png';
import home from '../../images/docts.jpg'
import hs1 from '../../images/ds-1.webp';
import hs2 from '../../images/logo_files/medical-care-3030456_640.webp';
import hs3 from '../../images/logo_files/box-7038758_640.png';
import consult from '../../images/dct-5.jpg'
import department from '../../images/doct-7.jpg'
import { BsHeartPulse, BsFillLungsFill } from 'react-icons/bs'
import { TbDental } from 'react-icons/tb'
import { GiKidneys, GiNoseFront } from 'react-icons/gi'
import { BiBody } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import doctor from '../Data/doctors';
import Testnomial from '../Testnomials/Testnomial';
import blog1 from '../../images/dp3.jpg';
import blog2 from '../../images/dp-4.jpg';
import data from '../Data/department'

const Header = () => {
    const Accordian = () => {
        const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

        accordionItemHeaders.forEach(accordionItemHeader => {
            accordionItemHeader.addEventListener("click", event => {


                accordionItemHeader.classList.toggle("active");
                const accordionItemBody = accordionItemHeader.nextElementSibling;
                if (accordionItemHeader.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                }
                else {
                    accordionItemBody.style.maxHeight = 0;
                }

            });
        });

    }
    return (
        <>
            <div className="header">
                <Navbar />
                <div className="home">
                    <div className="content">
                        <h4>Health Care</h4>
                        <h1>Quality Healthcare Solution for all</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum mollitia repellendus illo ullam maiores, dolor soluta quam. Dolor voluptatibus provident necessitatibus, corporis officiis velit omnis.</p>
                        <button className="btn">Learn More</button>
                        <div className="home-box">
                            <div className="box-home">
                                <img src={vacine} alt="" />
                                <div>
                                    <h5 className='hh'>24/7 hrs</h5>
                                    Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                            <div className="box-home">
                                <img src={health} alt="" />
                                <div>
                                    <h5 className='hh'>24/7 hrs</h5>
                                    Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="image">
                        <img src={home} alt="" />
                    </div>
                </div>
            </div>
            <div className="home-service">
                <div className="service-box">
                    <img src={hs1} alt="" />
                    <div className="home-service-box">
                        <h5>Heart Health</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="service-box">
                    <img src={hs2} alt="" />
                    <div className="home-service-box">
                        <h5>Heart Health</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="service-box">
                    <img src={hs3} alt="" />
                    <div className="home-service-box">
                        <h5>Heart Health</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div className="home-consultant home-c">
                <h4 className='introducing'>Couslt Doctors</h4>
                <h1 className="heading">Consult with our best Doctor for proper Treatment</h1>
                <div className="consult-home">
                    <div className="consult-image">
                        <img src={consult} alt="" />
                    </div>
                    <div className="consult-content">
                        <h3 className='consult-heading'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                        </h3>
                        <p>Lorem ipsum, adipisicing elit. Numquam, cum, exercitationem, ad iste ex tenetur illum consequuntur praesentium unde ab beatae ullam! Aut quo, delectus molestiae ex cumque alias at!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga neque nisi, temporibus vitae, aspernatur harum exercitationem error at autem dicta explicab</p>

                        <div className="consultant">
                            <div className="consult-box">
                                <p><span>-</span> Lorem, ipsum dolor.</p>
                                <p><span>-</span> Lorem, ipsum dolor.</p>
                            </div>
                            <div className="consult-box">
                                <p><span>-</span> Lorem, ipsum dolor.</p>
                                <p><span>-</span> Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        <button className="btn">Consultant</button>
                    </div>
                </div>
            </div>

            <div className="home-consultant home-d ">
                <h4 className='introducing'>Our Department</h4>
                <h1 className="heading">Different types of Department we have for your healthcare</h1>
                <div className="consult-home">
                    <div className="consult-image">
                        <img src={department} alt="" />
                    </div>
                    <div className="department-content">
                        <div className="boxes">
                            <div className="box">

                                <p className="icon"><BsHeartPulse /></p>
                                <h4 className="box-heading">Heat</h4>
                                <p className="box-para">Consectetur adipisicing elit. Voluptate cumque reiciendis non qui rerum! Deleniti </p>
                            </div>
                            <div className="box">
                                <p className="icon"><TbDental /></p>
                                <h4 className="box-heading">Dental</h4>
                                <p className="box-para">Consectetur adipisicing elit. Voluptate cumque reiciendis non qui rerum! Deleniti </p>
                            </div>
                            <div className="box">
                                <p className="icon"><GiKidneys /></p>
                                <h4 className="box-heading">Leflology</h4>
                                <p className="box-para">Consectetur adipisicing elit. Voluptate cumque reiciendis non qui rerum! Deleniti </p>
                            </div>
                        </div>
                        <div className="boxes">
                            <div className="box">
                                <p className="icon"><BiBody /></p>
                                <h4 className="box-heading">Heat</h4>
                                <p className="box-para">Consectetur adipisicing elit. Voluptate cumque reiciendis non qui rerum! Deleniti </p>
                            </div>
                            <div className="box">
                                <p className="icon"><GiNoseFront /></p>
                                <h4 className="box-heading">Leflology</h4>
                                <p className="box-para">Consectetur adipisicing elit. Voluptate cumque reiciendis non qui rerum! Deleniti </p>
                            </div>
                            <div className="box">

                                <p className='icon'><BsFillLungsFill /></p>
                                <h4 className="box-heading">Heat</h4>
                                <p className="box-para">Consectetur adipisicing elit. Voluptate cumque reiciendis non qui rerum! Deleniti </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-d">
                <h4 className='introducing'>Our Team</h4>
                <h1 className="heading">Meet our hight quality and expert Doctors</h1>
                <Link> <button className='btn'>Team</button> </Link>

                <div className="card-box">
                    {doctor && doctor.map((doct) => (
                        <div className="cards">
                            <img src={doct.image} alt='doctorsImages' />
                            <div className="card-content">
                                <h4>{doct.name}</h4>
                                <h5>Exp: {doct.experience} | Spec: {doct.specialist} </h5>
                                <p>
                                    <span>{doct.field1}</span>|
                                    <span>{doct.field2}</span>|
                                    <span>{doct.field3}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


            </div >
            <Testnomial />

            <div className="latest">
                <div className="latest-blog">
                    <div className="latest-box ">
                        <h4>Latest</h4>
                        <h2>Latest Post from our Blog</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, ipsam cupiditate doloremque perspiciatis voluptatum omnis veniam voluptatem exercitationem totam assumenda, unde ullam. Dolorum voluptatum eos nam! Beatae, veniam dolorum. Tenetur.</p>
                        <button className="btn">Learn more</button>
                    </div>
                    <div className="latest-box box1">
                        <img src={blog1} alt="" />
                        <h2>Latest Post from our Blog</h2>
                        <p>Assumenda, unde ullam. Dolorum voluptatum eos nam! Beatae, veniam dolorum. Tenetur.</p>
                    </div>
                    <div className="latest-box box2">
                        <img src={blog2} alt="" />
                        <h2>Latest Post from our Blog</h2>
                        <p>Assumenda, unde ullam. Dolorum voluptatum eos nam! Beatae, veniam dolorum. Tenetur.</p>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                {/* <div className="accordian"> */}
                <div className="content">
                    <h1>Frequently Ask Question</h1>
                    <div className="accordion">
                        {data.map((item, i) => (
                            <div className="accordion-item">
                                <div className="accordion-item-header" onClick={Accordian}>
                                    {item.question}
                                </div>

                                <div className="accordion-item-body">
                                    <div className="accordion-item-body-content">
                                        {item.answer}
                                    </div>
                                </div>

                            </div>
                        ))}

                        {/* {data.map((item, i) => (

                        <div className="item">
                            <div className="title">
                                <h2>{item.question}</h2>
                            </div>
                        

                    ))} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header