import React from 'react'
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
const ListLink = props => (
    <li style={{ display: `inline-block`, marginLeft: `1rem`}}>
        <Link style={{ display: `inline-block`, marginLeft: `1rem`, color: "#707070" }} to={props.to} activeStyle={{color:"black"}}>{props.children}</Link>
    </li>
)
export default ({ children }) => {
    return (
        <div className="layout" >
            <Helmet>
                <meta charSet="utf-8" />
                <title>똑똑한 인테리어, 인텔리어</title>
                <link rel="canonical" href="https://intelior.app/" />
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:500,700&display=swap&subset=korean" rel="stylesheet" />
                <link rel="apple-touch-icon" sizes="32x32"
                    href="https://storage.googleapis.com/3dinterior/32*32.png" />
                <link rel="apple-touch-icon" sizes="64x64"
                    href="https://storage.googleapis.com/3dinterior/64*64.png" />
                <link rel="apple-touch-icon" sizes="72x72"
                    href="https://storage.googleapis.com/3dinterior/72*72.png" />
                <link rel="apple-touch-icon" sizes="76x76"
                    href="https://storage.googleapis.com/3dinterior/76*76.png" />
                <link rel="apple-touch-icon" sizes="96x96"
                    href="https://storage.googleapis.com/3dinterior/96*96.png" />
                <link rel="apple-touch-icon" sizes="120x120"
                    href="https://storage.googleapis.com/3dinterior/120*120.png" />
                <link rel="apple-touch-icon" sizes="144x144"
                    href="https://storage.googleapis.com/3dinterior/144*144.png" />
                <link rel="apple-touch-icon" sizes="152x152"
                    href="https://storage.googleapis.com/3dinterior/152*152.png" />
                <link rel="apple-touch-icon" sizes="192x192"
                    href="https://storage.googleapis.com/3dinterior/192*192.png" />
                <link rel="icon" type="image/png" href="https://storage.googleapis.com/3dinterior/32*32.png"
                    sizes="32x32" />
                <link rel="icon" type="image/png" href="https://storage.googleapis.com/3dinterior/192*192.png"
                    sizes="192x192" />
                <link rel="icon" type="image/png" href="https://storage.googleapis.com/3dinterior/96*96.png"
                    sizes="96x96" />
                <link rel="icon" type="image/png" href="https://storage.googleapis.com/3dinterior/16*16.png"
                    sizes="16x16" />
                <link rel="shortcut icon" href="https://storage.googleapis.com/3dinterior/intereal_favicon.ico" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-TileImage" content="https://storage.googleapis.com/3dinterior/192*192.png" />
                <meta name="theme-color" content="#007457" />

                <meta name="description" content="인테리어 미리보기 / 시공현장 실시간 확인"/>
                <meta property="description" content="똑똑한 인테리어, 인텔리어" />
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="https://storage.googleapis.com/3dinterior/long-logo.png" />
                <meta property="og:image:witdh" content="302" />
                <meta property="og:image:height" content="148" />
                <meta property="og:title" content="똑똑한 인테리어, 인텔리어" />
                <meta property="og:description" content="인테리어 미리보기 / 시공현장 실시간 확인" />
                <meta property="og:url" content="https://intelior.app/" />
                <meta property="og:locale" content="ko_KR" />

                <meta property="twitter:title" content="똑똑한 인테리어, 인텔리어" />
                <meta property="twitter:description" content="인테리어 미리보기 / 시공현장 실시간 확인" />
            </Helmet>
            <header className={"intelior-header"} style={{ marginBottom: `1.5rem` }}>
                <Link to="/" className={"logo-wrapper"} style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <img alt={"logo"} className={"logo"} src={"https://storage.googleapis.com/3dinterior/128*128.png"} />
                    <h3 className="logo-text" style={{ display: `inline`, color: `black` }}>인텔리어</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right`, margin: 0, padding: 0 }}>
                    <ListLink to="/">서비스</ListLink>
                    <ListLink to="/about/">기업소개</ListLink>
                </ul>
            </header>
            {/* <div id="background-rectangle"></div> */}
            {children}
            <footer>
                <div className="footer-section">
                    <p className="footer-paragraph">상호: 사피엔스</p>
                    <p className="footer-paragraph">대표: 김현욱</p>
                    <p className="footer-paragraph">메일: server@4piens.com</p>
                    <p className="footer-paragraph">사업자등록번호: 392-11-00924</p>
                    <p className="footer-paragraph">통신판매번호: <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=3921100924&apv_perm_no=" target="popup" onclick="window.open('yourLink','popup','width=600,height=600'); return false;">2019-서울종로-1452</a></p>
                    <p className="footer-paragraph">주소: 서울특별시 종로구 종로1길 50, 3층(중학동)</p>
                    <p className="footer-paragraph">Copyright (C) 인텔리어(intelior.app)</p>
                    <p className="footer-paragraph">All Rights Reserved</p>
                    <h1>1800-2118</h1>
                    <p className="footer-paragraph"><strong>고객센터 10:00 ~ 18:00 (월~금)</strong></p>
                    <br />
                    <p className="footer-paragraph" style={{ background: "lightgrey", padding: "1rem", color: "#707070" }}>똑똑한 인테리어 플랫폼, 인텔리어가</p>
                    <p className="footer-paragraph" style={{ background: "lightgrey", padding: "1rem", color: "#707070" }}>업체분들의 든든한 동반자가 되어드리겠습니다.</p>
                    <p className="footer-paragraph" style={{ background: "lightgrey", padding: "1rem", color: "#707070" }}><strong>제휴문의: <u>server@4piens.com</u></strong></p>
                    <br />
                    <p className="footer-paragraph">※ 사피엔스(인텔리어)는 통신판매중개자로서</p>
                    <p className="footer-paragraph">건축 공사의 주 거래 당사자가 아니며,</p>
                    <p className="footer-paragraph">제휴업체가 제공한 견적 및 공사 시공 서비스에 대해</p>
                    <p className="footer-paragraph">사피엔스(인텔리어)는 일체 책임을 지지 않습니다.</p>
                    <br />
                </div>
            </footer>
        </div>
    )
}