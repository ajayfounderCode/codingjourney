// src/HomePage.js
import Carousel from './Corsual';
const About = () => {
    return (
        <div className="homepage" >
            <section class='about' id='about'>
                <div class='about-content'>
                    <h4>Who We Are</h4>
                    At Coding Journey, we believe in the power of technology to transform ideas into reality.
                    Whether it's developing immersive games, feature-rich applications, or sleek and functional websites,
                    our goal is to deliver products that stand out in both creativity and performance.
                    <br /><br /><h4>What We Offer</h4>
                    🎮 Games – Exciting and engaging games designed for all types of players. Whether you're into casual gaming or high-intensity challenges, we have something for you!
                    <br />
                    📱 Applications – From productivity tools to entertainment apps, our software solutions are built with user experience in mind.
                    <br />
                    🌐 Websites – Need a stunning and responsive website? We create high-performance websites tailored to your needs, whether personal, business, or e-commerce.
                </div>
                <div class='about-content'>
                    <Carousel />
                </div>
            </section>
        </div>
    );
};

export default About;
