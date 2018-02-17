module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Einfach Studio", // Site title.
  siteTitleAlt: "Einfach Studio 艾音法工作室", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://einfach-studio.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-material-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "這是一個小型的個人工作室網站，包含學習筆記、作品demo，主題涵蓋 Web Development、作曲、數位音樂、音樂科技等。", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "359363404539447", // FB Application ID for using app insights
  siteGATrackingID: "UA-104397229-1", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "talks", // Default category for posts.
  userName: "DazedBear", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Taiwan, Taipei", // User location to display in the author segment.
  userAvatar: "https://avatars2.githubusercontent.com/u/8896191?v=4", // User avatar to display in the author segment.
  userDescription:
    "患有學習焦慮的宅宅，喜歡音樂、科技、充滿歷史的人事物，想學的東西太多了，就怕這輩子都學不完。北部人，一心嚮往南部生活，夢想是在台南擁有一間有練團室、書房和平台鋼琴的房子。", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/dazedbear",
      iconClassName: "fa fa-github"
    },
    {
      label: "Email",
      url: "mailto:einfachstudio@gmail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "RSS",
      url: "/rss.xml",
      iconClassName: "fa fa-rss"
    }
  ],
  copyright: "Copyright © 2018. Einfach Studio" // Copyright string for the footer of the website and RSS feed.
};
