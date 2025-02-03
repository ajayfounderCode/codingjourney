import React from "react";
import logo from '../assets/logo.png';

function Home() {
    return (
        <section
            className="home-section d-flex align-items-center justify-content-center"
            style={{
                height: "100vh",
                backgroundImage: "url('https://i.pinimg.com/originals/55/01/60/5501609ee45d514d1f2c4a63502045e2.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
            }}
        >
            {/* Glassmorphism Card */}
            <div className="glass-card text-center p-5">
                {/* Profile Picture */}
                <img
                    src={logo}
                    alt="Profile"
                    className="rounded-circle mb-4"
                    style={{
                        width: "150px",
                        height: "150px",
                        border: "4px solid rgba(255, 255, 255, 0.5)",
                    }}
                />
                {/* About Me Text */}
                <h1 className="text-white mb-3">Hello <br /> Welome to Coding Jouney</h1>
                <p className="text-white-50">
                    your one-stop destination for innovative games, applications, and websites!
                    We are passionate creators dedicated to crafting high-quality digital experiences that entertain, empower, and inspire.
                </p>
            </div>
        </section>
    );
}

export default Home;