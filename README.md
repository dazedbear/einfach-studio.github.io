# Einfach Studio 艾音法工作室網站
這是一個小型的個人工作室網站，包含學習筆記、作品demo，主題涵蓋Web Programming、作曲、數位音樂、音樂科技等。

## Installation for ubuntu
1. install ruby & reby development
```bash
sudo apt-get install ruby ruby-dev zlib1g-dev liblzma-dev
```

2. install RubyGems
```
mkdir ~/tmp; cd ~/tmp; git clone git@github.com:rubygems/rubygems.git; ruby ~/tmp/rubygems/setup.rb && rm-rf rubygems;
```

3. install gcc & make
```bash
sudo apt-get install gcc make
```

4. install jekyll & bundler
```bash
sudo gem install jekyll bundler
```

5. clone this repo
```bash
git clone git@github.com:einfach-studio/einfach-studio.github.io.git
```

6. install theme with bundle
```bash
bundle install
```

7. install node.js
```bash
sudo apt-get install curl;
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash;
source ~/.bashrc;
nvm install v6.11.2;
```

8. run jekyll site locally
```bash
bundle exec jekyll server
```

### Reference
* [gem notogiri install issue](http://www.nokogiri.org/tutorials/installing_nokogiri.html#ubuntu___debian)
* [gem ffi install issue](https://github.com/ffi/ffi/issues/552)
* [jekyll installation troubleshooting](http://jekyllrb.com/docs/troubleshooting/#installation-problems)


## 電子書
筆記除了發表於網站中，同時也採用gitbook彙整成電子書方便查閱。
目前製作中的電子書如下：

1. [Web學習資源筆記]()
2. [和聲學筆記]()

歡迎一同參與協作！

## 網站建置
本網站使用 [Github Page](https://pages.github.com/) 與 [Jekyll](https://jekyllrb.com/) 製作而成，外觀採用 [NexT](https://github.com/Simpleyyt/jekyll-theme-next/blob/master/README.md) 主題。

如果對於網站建置有興趣，歡迎參考以下教學：
1. [Creating and Hosting a Personal Site on GitHub](http://jmcglone.com/guides/github-pages/)
2. [Customizing Github Pages](https://help.github.com/categories/customizing-github-pages/)
3. [Jekyll Offical Tutorials](https://jekyllrb.com/docs/quickstart/)

