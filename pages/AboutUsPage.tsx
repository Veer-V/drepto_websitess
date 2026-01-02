import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import GallerySection from '../components/GallerySection';

const AboutUsPage: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // dummy refs for Navbar since we aren't on the landing page
    const dummyRefs = {
        homeRef: React.useRef(null),
        aboutRef: React.useRef(null),
        teamRef: React.useRef(null),
        galleryRef: React.useRef(null),
        contactRef: React.useRef(null),
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar
                sectionRefs={dummyRefs as any}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />

            <main className="flex-grow">
                {/* Add padding top for desktop only since Navbar is fixed. MobileHeader is sticky. */}
                <div className="md:pt-20">
                    <GallerySection />
                    <AboutSection />
                    <TeamSection />
                </div>
            </main>

            <Footer />
        </div >
    );
};

export default AboutUsPage;
