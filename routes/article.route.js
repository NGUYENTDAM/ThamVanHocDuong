const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('home');
})

router.get('/contact', function (req, res) {
  res.render('contact');
})
router.get('/CauHoiThuongGap', function (req, res) {
  res.render('vwArticles/question');
})
router.get('/tintuc', function (req, res) {
  res.render('vwArticles/news');
})
router.get('/LinhVucHoatDong', function (req, res) {
  res.render('vwArticles/LinhVucHD');
})
router.get('/DichVuTamLy', function (req, res) {
  res.render('vwArticles/DichVuTamLy');
})
router.get('/TamNhinSuMenh', function (req, res) {
  res.render('vwArticles/TamNhinSuMenh');
})



module.exports = router;