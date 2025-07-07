
import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Cohscapes<span className="text-primary">.</span></h3>
                        <p className="text-gray-400">Transforming spaces with innovative architectural design solutions since 2010.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FacebookIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><TwitterIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><InstagramIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><LinkedInIcon /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-primary">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-primary transition-colors">Portfolio</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-primary">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Residential Design</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Commercial Architecture</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Sustainable Design</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Urban Planning</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Interior Design</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-primary">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe for the latest updates.</p>
                        <form className="flex">
                            <input type="email" placeholder="Your Email" className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary" />
                            <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold px-4 py-2 rounded-r-md transition-colors">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="text-center text-gray-500 border-t border-gray-700 pt-8 mt-8">
                    <p>&copy; {new Date().getFullYear()} Cohscapes Landscapers & Earthworks. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
