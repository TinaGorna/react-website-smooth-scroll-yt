import React from 'react'
import {
    FooterContainer, FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights
} from "./FooterElements";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/all";
import {animateScroll as scroll} from "react-scroll";


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/signin'>Contact</FooterLink>
                            <FooterLink to='/signin'>Support</FooterLink>
                            <FooterLink to='/signin'>Destinations</FooterLink>
                            <FooterLink to='/signin'>Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/signin'>Submit Video</FooterLink>
                            <FooterLink to='/signin'>Ambassador</FooterLink>
                            <FooterLink to='/signin'>Agency</FooterLink>
                            <FooterLink to='/signin'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
                        <WebsiteRights>
                            dolla © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com/' target='_blank'
                                            aria-label='Faceebok'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com/' target='_blank'
                                            aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com' target='_blank'
                                            aria-label='Youtube'>
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='//www.twitter.com/' target='_blank'
                                            aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='//www.linkedin.com/' target='_blank'
                                            aria-label='Linkdin'>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};


export default Footer;