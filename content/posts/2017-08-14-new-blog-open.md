---
title: "新站開幕啦！"
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
date: "2017/08/14"
category: "talks"
tags: 
    - 架站
    - 學習方法
---

## 新站開幕啦！

### 緣由

其實「架站」這個構想已經計畫許久了。提及緣由以前，先講點前情提要吧(?


### 學習的核心

從5月加入公司的培訓之後，嘗試過許多方法學習，得出了一些心得：
1. 「思考」是主要核心。能在沒有任何輔助之下，用自己的話清楚的解釋概念，才代表真的學進去。
2. 「學習動力」、「熱情」是需要**刻意**維持的。體力需要訓練、精神力需要補充，學習的動力也是如此。


### 學習方式

要實現上述的概念，可以透過以下方式來協助達成：

#### 1. 關鍵字學習
講白一點，就像看著書本目錄，然後解釋每個章節的重點與概念。更進階一點可以只看封面，把每個關鍵字都寫出來再解釋，就是學習地圖Roadmap的概念。這個對於思考和學習非常有幫助。

#### 2. 有效的筆記
如果無法立刻吸收知識，快速、一目了然的筆記就很重要。筆記的形式這邊就不談，有許多專書在討論這個，但重點只有幾個：用自己的話記錄概念或關鍵字、複習時將筆記反覆去蕪存菁、用實際例子描述。

#### 3. 實作
學習理論和實作一定要同時搭配，缺少任一邊學習就會出現問題。以coding來說，就是練習線上解題(codewars、leetcode...)、製作side project、參與Github上的開源專案...等。以作曲來說就是彈奏與仿作特定和聲進行的譜例、採一首喜歡的曲子並仿作、練習即興...等。

#### 4. 讓一切變得好玩
綜合以上方式，最重要的核心就是「好玩」。好玩才會有學習的動力。變好玩的方法因人而異，常見的有：找同好開讀書會、寫blog、寫教材、組樂團、組社團(如同人社團)、拍教學影片...。


### 回到緣由

架站的初衷就是為了要「好玩」，讓自己維持學習的動力。我本身又話多（文章中），所以架站大概是最適合的選項。這個github repo很早就開好了，中間花了不少時間嘗試各種解決方案。直到昨天和作曲老師聊聊後，發覺自己讓太多事情變得不好玩。才決定要在這兩天把站架起來，讓自己重回軌道。

-----

## 談談架站這件事

遇到主要的問題是：到底該用官方支援的jekyll來generate靜態頁面呢？還是改用hexo呢？


### static generator的考量

畢竟jekyll是用ruby、hexo是用Node.js和EJS，說起來我對後者比較熟，未來要自己修改比較好上手。但嘗試hexo後發現有點問題，commit到github上沒辦法正常顯示，所以保險起見，先採用jekyll試試看，未來大概陸續轉成hexo吧！

### Theme和政治立場(?的考量

另一個考量的點其實是佈景主題。jekyll有將近300種的現成主題可以選，而hexo只有130種左右。除此之外，hexo的theme絕大多數都是對岸製作的，秉持著維護中華傳統的精神，以及資安的考量，後來決定使用jekyll。只是說來漏氣，工程師的美感真的讓人汗顏，而一堆theme又喜歡弄半套的RWD，手機板和電腦板layout都長一樣。經過篩選後，我選中的這個theme，也就是NexT，竟然也是對岸做的!!不信邪如我，換去hexo挑theme，結果刪到最後也是一樣這個NexT主題(它有hexo和jekyll版)，只好認命的用了(淚

### 主機、網域的考量

架站一定會遇到的，就是網域和主機空間問題。傳統作法是：自己找地方申請網域名和主機空間。有些廠商會收你主機的租費，免費讓你申請自訂一級網域。而在雲端的時代，一樣可以透過AWS或是Heroku等，起一台虛擬主機並自訂網域名，只是彈性變大，維護一樣要自己來。以上的方式都需要收費；免費的部份，我也嘗試過虛擬主機商＋wordpress，但是那肥大不好維護的server，再加上對Markdown的支援度不太理想，用起來怎樣就是不順手。自從看到github page後，就一舉投入它的懷抱。所有頁面都是genarate成靜態頁面，不太會有安全性問題，讀取效能又快，支援Markdown語法及github的版本控制，當你commit時，github會負責幫你build網站，而且以上這些都是免費!!又因為支援Markdown，我可以使用任何的編輯器編寫文章，再commit上去讓它自動generate就好，彈性更大。有彈性又不須負擔太多機器維護的風險，簡言之，好用！雖然只有提供二級子網域的自訂就是。



一不小心就廢話太多了，總之，以後請多多指教囉~
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTgwNzg1OTMyMV19
-->