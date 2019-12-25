import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
export default () => {
    return (
        <Layout>
            <Helmet>
                <title>회사소개</title>
            </Helmet>
            <div className="about">
                <div className="section1">
                    <h1 className="about_head1">IT기술로 인테리어 시장을 바꿉니다.</h1>
                </div>
                <div className="section2">
                    <div className="card1">
                        <h2 className="about_head2">High-Quality 3D 기술</h2>
                        <p className="about_paragraph">IT 기술을 활용한 예상시공 미리보기</p>
                    </div>
                    <div className="card1">
                        <h2 className="about_head2">우수 파트너스 제휴</h2>
                        <p className="about_paragraph">대면 검증을 거친 우수 파트너스만을 선별</p>
                    </div>
                    <div className="card1">
                        <h2 className="about_head2">실시간 시공 과정 확인</h2>
                        <p className="about_paragraph">상세한 시공과정 실시간 확인 가능</p>
                    </div>
                    <div className="card1">
                        <h2 className="about_head2">모바일 앱 하나로 간편하게 관리</h2>
                        <p className="about_paragraph">업체 선정, 시공 계약서 보관까지</p>
                    </div>
                </div>
                <div className="section3">
                    <div className="card2">
                        <h2 className="about_head2">2018.11</h2>
                        <p className="about_paragraph"><strong>중소벤처기업부</strong></p>
                        <p className="about_paragraph">기술혁신형 창업기업 지원사업 선정</p>
                    </div>
                    <div className="card2">
                        <h2 className="about_head2">2019.06</h2>
                        <p className="about_paragraph"><strong>서울특별시</strong></p>
                        <p className="about_paragraph">공개평가형 기술상용화 지원사업 선정</p>
                    </div>
                    <div className="card2">
                        <h2 className="about_head2">2019.09</h2>
                        <p className="about_paragraph"><strong>한국데이터산업 진흥원</strong></p>
                        <p className="about_paragraph">데이터바우처 지원사업 선정</p>
                    </div>
                    <div className="card2">
                        <h2 className="about_head2">2019.09</h2>
                        <p className="about_paragraph"><strong>중소벤처기업부</strong></p>
                        <p className="about_paragraph">창업선도대학 지원사업 선정</p>
                    </div>
                    <div className="card2">
                        <h2 className="about_head2">2019.10</h2>
                        <p className="about_paragraph"><strong>중소벤처기업부</strong></p>
                        <p className="about_paragraph">기술혁신형 기업 지원사업 <strong>우수</strong> 평가</p>
                    </div>
                    <div className="card2">
                        <h2 className="about_head2">2019.12</h2>
                        <p className="about_paragraph"><strong>인텔리어</strong> 출시</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

/* export const query = graphql`
    query {
        site {
            siteMetadata {
                aboutPageContents {
                    title
                    subtitle
                    imageSrc
                }
            }
        }
    }
` */