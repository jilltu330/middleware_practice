# Middleware 實作練習
在路由器加入middleware使伺服器在接收請求時，server log會印出相關資訊

## Q1 伺服器接收請求紀錄:
伺服器接收請求(request)時，server log能印出
* 請求的日期與時間，request date and time。
* 請求的HTTP方法，request method
* 請求的url，request url

## Q2 伺服器回應的時間:
* 請求的日期與時間，request date and time。
* 請求的HTTP方法，request method
* 請求的url，request url
* 伺服器回應的時間長度，毫秒ms單位


## Getting Started
**Clone respository**
```
$ git clone https://github.com/jilltu330/middleware_practice.git
```
**Install by npm**
```
$ npm install
```
**Execute**
```
$ npm run dev
```
**Browse the website on localhost**
```
http://localhost:3000/
```

## Built With
* Node.js (v10.15.0)
* Express (v4.17.1)
* Moment (^2.29.1)