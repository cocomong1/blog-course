import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P } from "../elements"

export const Footer = () => {
    
    const data = useStaticQuery(graphql`
        query {
            facebook: file(relativePath: {eq: "facebook.svg"}) {
                publicURL
            }
            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            }
        }

    `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://facebook.com" target="_blank" rel="nooepner noreferrer">
                        <img src={data.facebook.publicURL} alt="Facebook Logo" />
                    </a>
                    <a href="https://intagram.com" target="_blank" rel="nooepner noreferrer">
                        <img src={data.instagram.publicURL} alt="Instagram Logo" />
                    </a>
                </FooterSocialIcons>
                <P size="xSmall" color="dark3">COPYRIGHT 2021 Company. All right reserved.</P>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}