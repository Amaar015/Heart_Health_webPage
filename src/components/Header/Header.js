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
const Header = () => {
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
            <div className="home-consultant">
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
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, cum, exercitationem, ad iste ex tenetur illum consequuntur praesentium unde ab beatae ullam! Aut quo, delectus molestiae ex cumque alias at!</p>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header