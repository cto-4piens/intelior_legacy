import React from "react"
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import {graphql} from 'gatsby'
export default ({data}) => {
    return (
        <Layout>
            <Helmet>
            </Helmet>
            {
                data.site.siteMetadata.servicePageContents.map((content, contentIndex) => (
                    <div className={"contents"} key={contentIndex}>
                        <div className={"text-container"}>
                            <div className={"title-wrapper"}>
                                {contentIndex === 0 ?
                                    content.title.map((title, index) => (<h1 className={"h1title"} key={index}>{title}</h1>))
                                    :
                                    content.title.map((title, index) => (<h2 className={"h2title" + ((contentIndex !== 0) ? " white" : "")} key={index}>{title}</h2>))}
                            </div>
                            <div className={"subtitle-wrapper"}>
                                {content.subtitle.map((subtitle, index) => (
                                    <p className={"subtitle" + ((contentIndex !== 0) ? " white" : " grey")} key={index}>{subtitle}</p>
                                ))}
                            </div>
                            {
                                contentIndex === 0 ? 
                                <button onClick={downloadApplication} className="app-download-button">
                                    앱 다운로드
                                </button>
                                : null
                            }
                        </div>
                        <div className={"image-container"}>
                            <img alt={"intelior"} className={((contentIndex === 0) ? "main-image" : "phone-image")} src={content.imageSrc}/>
                        </div>
                    </div>
                ))
            }
            <div id="background-rectangle"></div>
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                servicePageContents {
                    title
                    subtitle
                    imageSrc
                }
            }
        }
    }
`

export const downloadApplication = () => {

    const osName = getMobileOperatingSystem();

    switch (osName) {
        case "Android":
            window.open("https://play.google.com/store/apps/details?id=app.intelior.intelior")
            break;
        case "iOS":
            window.location = "https://apps.apple.com/kr/app/%EC%9D%B8%ED%85%94%EB%A6%AC%EC%96%B4/id1491473843";
            window.open("itms-apps://apps.apple.com/kr/app/%EC%9D%B8%ED%85%94%EB%A6%AC%EC%96%B4/id1491473843")
            break;
        case "Windows Phone":
        case "unknown":
        default:
            window.open("https://play.google.com/store/apps/details?id=app.intelior.intelior")
            break;
    }
}

export function getMobileOperatingSystem() {

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod|Macintosh|AppleWebKit/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}