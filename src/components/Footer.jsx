
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import x from '../assets/x.png'
import youtube from '../assets/youtube.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'

const Footer = () => {

    return (
        <footer className="bg-white text-black py-5 px-4 px-md-5">
            <div className="container">
                <div className="row">
                    {/* Logo & Description */}
                    <div className="col-md-4 mb-4">
                        <img src={logo} alt="Logo" className="mb-2" style={{ width: '100px' }} />
                        <p style={{ fontSize: '0.9rem' }}>
                            Ritambara is a dynamic logistics and transportation <br></br>
                            company based in Chennai, dedicated to <br></br>
                            providing comprehensive, efficient, and reliable <br></br>
                            logistics services...
                        </p>

                        <hr className='w-75'></hr>

                        <div className='d-flex gap-3 social-icon'>
                            <a href='/'>
                                <img src={facebook} alt='facebook-icon' className='img-fluid' />
                            </a>
                            <a href='/'>
                                <img src={instagram} alt='instagram-icon' className='img-fluid' />
                            </a>
                            <a href='/'>
                                <img src={x} alt='x-icon' className='img-fluid' />
                            </a>
                            <a href='/'>
                                <img src={youtube} alt='youtube-icon' className='img-fluid' />
                            </a>
                            <a href='/'>
                                <img src={linkedin} alt='linkedin-icon' className='img-fluid' />
                            </a>
                            <a href='/'>
                                <img src={whatsapp} alt='whatsapp-icon' className='img-fluid' />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3 mb-4">
                        <h1 className="mb-4 fs-4">SERVICES</h1>
                        <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
                            <li><a href="#about" className="text-black text-decoration-none">Stevedoring & Shore Handling</a></li>
                            <li><a href="#rooms" className="text-black text-decoration-none">Custom Broking</a></li>
                            <li><a href="#amenties" className="text-black text-decoration-none">Freight Forwarding</a></li>
                            <li><a href="#contact" className="text-black text-decoration-none">Transportation</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-3 mb-4">
                        <h1 className="mb-4 fs-4">INFO</h1>
                        <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
                            <li><a href="#home" className="text-black text-decoration-none">Home page</a></li>
                            <li><a href="#about" className="text-black text-decoration-none">About Us</a></li>
                            <li><a href="#service" className="text-black text-decoration-none">Services</a></li>
                            <li><a href="#contact" className="text-black text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
