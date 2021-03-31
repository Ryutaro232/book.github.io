@charset "UTF-8";

/* すべての画面を最初は表示しない */
.view {
  display: none;
}

#loading {
  display: block;
  position: relative;
  height: 100vh;
}

.initial-loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -23px;
  font-size: 46px;
  animation: spin 2s linear infinite;
}

/* 回転するアニメーション */
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

/**
 * ----------
 * ログイン画面
 * ----------
 */

#login {
  padding-top: 51px;
}

#login__help {
  display: none;
}

#book-template {
  display: none;
}

.clearfix::after {
  content: "";
  clear: both;
  display: block;
}

#header {
  display: flex;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 10;
}

#logo {
  display: inline-block;
}

#logo a {
  font-family: 'Corben', cursive;
  color: #28a745;
  font-size: xx-large;
  text-decoration: none;
}
#cover {
  color: white;
  height: 300px;
  background-color: black;
  background-image: url("./images/cover.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
}

#cover__title {
  font-size: 36px;
  letter-spacing: 10px;
}

#main {
  width: 1200px;
  margin: 0 auto;
}

#book-list {
  margin: 20px auto;
}

.book_wrapper{
    width:100%;
}

.book_card{
    margin:10px;
    float:left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.book_button{
    text-align:center;
}

#cover {
  color: white;
  height: 300px;
  background-color: black;
  background-image: url("./images/cover.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
}

#cover__title {
  font-size: 36px;
  letter-spacing: 10px;
}

#main {
  width: 1200px;
  margin: 0 auto;
}

#book-list {
  margin: 20px auto;
}

.book-item {
  width: 270px;
  margin: 15px;
  float: left;
  background-color: white;
  border: solid 1px #ddd;
}

.book-item__image-wrapper {
  width: 270px;
  height: 270px;
  padding: 10px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.book-item__image {
  max-height: 250px;
  max-width: 250px;
  vertical-align: middle;
}

.book-item__detail {
  padding: 10px;
  background-color: #fafafa;
  border-top: solid 1px #ddd;
}

.book-item__title {
  margin: 0 auto;
  height: 36px;
  text-align: center;
  overflow: hidden;
}

.book-item__author{
  margin: 0 auto;
  height: 36px;
  text-align: center;
  overflow: hidden;
}
.book-item__delete-wrapper {
  margin-top: 5px;
  text-align: right;
}

.book-item__delete {
  color: #dc3545;
  background-color: transparent;
  border-color: #dc3545;
}
.book-item__delete:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}


/**
 * -----------------
 * 書籍情報追加モーダル
 * -----------------
 */

#add-book__help {
  display: none;
}

.custom-file-label::after {
  content: "参照";
}
