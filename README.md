# 題目名稱
我的網站<br/>
自我介紹網站，並結合之前作業(imageViewer)、老師的範例、spotifyApi、unsplashedApi


# 使用/操作方式

```
cd midterm_MyWeb 
npm i 
npm start

go to web browser -> localhost:3000
```


## Home
基本自我介紹，側邊有聊天的icon點擊可以聊天

## previouspractice/imageViewer
升級版的imageViewer，可以request(https://unsplash.com)的圖片資料，每次reuqest20張照片，可以在viewer上看照片，有request網站上傳的最新圖片資料。(這部分沒有寫後端，是直接在前端get資料、之後要修正把apikey放在後端)

## 側面ChatApp
前端放在react-app執行(localhost:3000)，後端接收資料(localhost:5000)並存到mondodb，中間用socket.io來即時性雙向溝通，而下次再開啟仍會讀取mongodb並顯示上次留下的訊息，save button的部分能夠儲存訊息，在monggodb也會顯示訊息儲存時間。

## Music
1.spotify api 的flow chart

2.有一個旋轉式的css搭配js特效，使用accesstoken認證spotifyApi request 歌曲的資料(一次10首)，來顯示從spotify接收到的album image，可以播放歌曲的音訊(如果回傳的json有previewUrl的話、也可能是null就不會撥放)，喜歡歌曲的話可以按source連結到spotify網站，聽整首歌。

3.一些我對音樂的愛，和我喜歡的DJ說的一些話


**其中Spotify AccessToken取得，是藉由後端(localhost:8888)向spotify網站request(給定client_secret,client_id,redirect_url 三個正確才能通過)，request完拿到accessToken，redirect回localhost:3000，接下來就可以用API search Artist tracks。**


(用vscode看flow chart要裝markdwon preview enhanced)
<hr/>
Spotify api 的flow
```flow
st=>start: User login(client_id,client_secret)
op=>operation: localhost:8888-> request accesstoken
cond=>condition: Successful Yes or No?
e=>end: search using Spotify Accesstoken
st->op->cond
cond(yes)->e
cond(no)->op
```

# 其他說明
有些功能還沒啟用，ex:flappybird、todolist、sidebar可以加很多連結，之後可以繼續加強。

# 使用與參考之框架/模組/原始碼

## 框架
https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css
https://use.fontawesome.com/releases/v5.8.2/css/all.css
https://code.jquery.com/jquery-3.3.1.slim.min.js
https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js
https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js
https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js

## npm install 套件:

package.json:
cocurrently 
nodemon

npm i 套件
request,
cors,
mongoose,
unsplash-js,
spotify-web-api-node

## Youtuber
### Traversy Media
他的link也都有github可以研究code<br/>

chat app:<br/>
https://www.youtube.com/watch?v=8Y6mWhcdSUM
https://www.youtube.com/watch?v=hrRue5Rt6Is
<br/>
node,bootstrap,express,design:<br/>
https://www.youtube.com/watch?v=pWbMrx5rVBE&t=640s
https://www.youtube.com/watch?v=fBNz5xF-Kx4
https://www.youtube.com/watch?v=Oive66jrwBs&t=952s
https://www.youtube.com/watch?v=5GcQtLDGXy8&t=228s
https://www.youtube.com/watch?v=wpGNFGqNfdU&t=967s
https://www.youtube.com/watch?v=gnsO8-xJ8rs&t=2404s 

還有很多youtuber影片很好用，寫的過程也參考無數的網路資源...
(programming with mosh,free code camp,Dev Ed ...)


# 我的貢獻
除了imageViewer(參考css)、chatApp(參考比較多原始碼)、sidebar，其他幾乎都是from scratch，所以設計方面也下了不少功夫，也把很多應用融合到MyWeb裡面

# 心得
這次project從forntend到backend都有涉獵到，學習到很多東西、也應用很多上課教的東西，這門真的是一門好課，是成為full stack web developer入門到中階的課程，學期初從完全不懂html tag，到現在應用react-app做前端、用nodeJS寫後端、git的版本控制...，學習到很多Web知識真的很感謝老師完整的講義，老師肯定花很多時間準備，所以我也是用我的全力去學習，謝謝老師提供這門課。


