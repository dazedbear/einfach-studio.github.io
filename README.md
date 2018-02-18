# Einfach Studio 艾音法工作室網站

這是一個小型的個人工作室網站，包含學習筆記、作品demo，主題涵蓋 Web Development、作曲、數位音樂、音樂科技等。

## 網站建置

本網站使用 [Github Page](https://pages.github.com/) 與 [Gatsby](https://www.gatsbyjs.org/) 製作而成，外觀採用 [gatsby-material-starter](https://github.com/Vagr9K/gatsby-material-starter) 加以修改而成。

### CI/CD

本站有串接 CI/CD ，以便在 `development` 分支開發、撰寫文章，同時也便於使用 `stackedit` 等 Markdown 服務，寫完文章 commit 到 `development` 觸發 Travis CI 跑測試、build 以及 deploy 到 `master` 分支。

相關參考資源如下：
1. [GitHub Pages Deployment | Travis CI](https://docs.travis-ci.com/user/deployment/pages/#stq=&stp=0)
2. [Validating .travis.yml files](https://docs.travis-ci.com/user/travis-lint/#stq=&stp=0)
    - 可使用 online 的 linter 檢查，減少反覆 commit 來測試 CI 的時間
    - 不過 online 的 linter 已經被棄用，有部分語法檢查會跳錯、但官方文件這樣寫、實際上也是可以 work。像是 [yarn cache](https://docs.travis-ci.com/user/caching#yarn-cache)
3. [Continuous Integration | Yarn](https://yarnpkg.com/lang/en/docs/install-ci/)
    - 因 Travis CI 會先偵測 Node.js 版本是否大於 4，若 `node_js` 那邊設定有誤，會導致跑很久才跳一整排 `npm ERR` 的錯誤。故必須事先設定、安裝 yarn。

## 參考資源

如果對於使用 Github Page 建置網站有興趣，請參考下列資源：

1. [Creating and Hosting a Personal Site on GitHub](http://jmcglone.com/guides/github-pages/)
2. [Customizing Github Pages](https://help.github.com/categories/customizing-github-pages/)
3. [Jekyll Official Tutorials](https://jekyllrb.com/docs/quickstart/)
4. [AWS S3 + CloudFront - SSL 靜態網站架站教學](https://blog.johnwu.cc/article/aws-s3-cloudfront-ssl-%E9%9D%9C%E6%85%8B%E7%B6%B2%E9%A0%81%E6%9E%B6%E7%AB%99%E6%95%99%E5%AD%B8.html)
5. [用 Gitlab Pages 取代 Github Pages 建立靜態網站](https://blog.hzchris.space/post/use-gitlab-pages-instead-of-github-pages/)
