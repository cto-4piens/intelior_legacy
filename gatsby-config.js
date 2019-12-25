/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    servicePageContents: [
      {
        title: ["인테리어 미리보고", "결정하세요."],
        subtitle: [
          "전문가가 시공하는 맞춤형 인테리어,",
          "인텔리어에서 한번에 해결하세요."
        ],
        imageSrc: "https://storage.googleapis.com/3dinterior/main_model.png"
      },
      {
        title: ["인테리어 후의 모습을", "시공 전에 무료로 보세요"],
        subtitle: [
          "원하는 스타일로 바뀐 우리집을",
          "고품질 3D 이미지로 미리보세요.",
        ],
        imageSrc: "https://storage.googleapis.com/3dinterior/VirtualConstructionState.png"
      },
      {
        title: ["마음에 드셨다면", "전문 업체가 시공합니다."],
        subtitle: [
          "엄격한 기준으로 선발한",
          "전문가가 정성을 다해 시공합니다."
        ],
        imageSrc: "https://storage.googleapis.com/3dinterior/ConstructorChoice.png"
      },
      {
        title: ["시공현장 확인부터","계약서 보관까지"],
        subtitle: [
          "인텔리어 앱 하나로 해결하세요.",
          "앱스토어와 플레이스토어에서",
          "다운로드 할 수 있습니다."
        ],
        imageSrc: "https://storage.googleapis.com/3dinterior/RealtimeConstructionState.png"
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.intelior.app/',
        sitemap: 'https://www.intelior.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      }
    }
  ]
}