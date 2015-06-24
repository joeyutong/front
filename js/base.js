//36Kr Next
// qwest.get('http://node-read.avosapps.com/next').then(function(res){
//   next.lists = JSON.parse(res);
// })

var feedUrl = "http://node-feed.avosapps.com/feed";

qwest.get(feedUrl + "?url=https://next.36kr.com/feed").then(function(res) {
  next.lists = JSON.parse(res);
});

var next = new Vue({
  el: '#next',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

// Hacker News -> 廖雪峰的博客
// qwest.get('http://node-read.avosapps.com/hackernews').then(function(res){
//   hackernews.lists = JSON.parse(res);
// })
qwest.get(feedUrl + "?url=http://www.liaoxuefeng.com/feed").then(function (res) {
  hackernews.lists = JSON.parse(res);
});
var hackernews = new Vue({
  el: '#hackernews',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//V2EX -> codefine's blog
// qwest.get('http://node-read.avosapps.com/v2ex').then(function(res){
//   v2ex.lists = JSON.parse(res);
// })
qwest.get(feedUrl + "?url=http://codefine.co/feed/").then(function (res) {
  v2ex.lists = JSON.parse(res);
});
var v2ex = new Vue({
  el: '#v2ex',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//toutiao -> calvin's blog
// qwest.get('http://node-read.avosapps.com/toutiao').then(function(res){
//   toutiao.lists = JSON.parse(res);
// })
qwest.get(feedUrl + "?url=http://calvin1978.blogcn.com/feed").then(function (res) {
  toutiao.lists = JSON.parse(res);
})
var toutiao = new Vue({
  el: '#toutiao',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//xitugold
qwest.get('http://node-read.avosapps.com/xitugold').then(function(res){
  xitugold.lists = JSON.parse(res);
  console.log(JSON.parse(res))
})

// qwest.get(feedUrl + "?url=http://foocoder.com/atom.xml").then(function (res) {
//   xitugold.lists = JSON.parse(res);
// })
var xitugold = new Vue({
  el: '#xitugold',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})
