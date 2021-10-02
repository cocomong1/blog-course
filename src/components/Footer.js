import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons} from "../elements"

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
                </FooterSocialIcons>
                <p>@2021 Company. All right reserved.</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}