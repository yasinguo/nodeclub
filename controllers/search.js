exports.index = function (req, res, next) {
  var q = req.query.q;
  q = encodeURIComponent(q);
  //res.redirect('https://www.google.com.hk/#hl=zh-CN&q=site:cnodejs.org+' + q);
  //百度站内搜索
  res.redirect('http://www.baidu.com/s?si=37iot.com&cl=3&ct=2097152&tn=baidulocal&word=' + q);
};
