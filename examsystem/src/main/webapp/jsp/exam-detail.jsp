<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>试卷详情</title>
  <link rel="stylesheet" href="../css/materialize.min.css">
  <link rel="stylesheet" href="../css/icomoon.css">
  <link rel="stylesheet" href="../css/exam-detail.css">
</head>
<body >
  <div class="navbar-fixed">
  	<nav>
      <div class="nav-wrapper">
        	<a href="#" class="brand-logo" id="logo">试卷详情</a>
        	<ul id="nav-mobile" class="right">
          	<li></li>
        	</ul>
      </div>
    </nav>
  </div>

  <div class="row" id="index">
    <div class="col">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <p style="margin: 10px 0;text-align: center; color: orange">选择题</p>
          <div class="dd" id="c1">1</div>
          <div class="dd" id="c2">2</div>
          <div class="dd" id="c3">3</div>
          <div class="dd" id="c4">4</div>
          <div class="dd" id="c5">5</div>
          <br />
          <div class="dd" id="c6">6</div>
          <div class="dd" id="c7">7</div>
          <div class="dd" id="c8">8</div>
          <div class="dd" id="c9">9</div>
          <div class="dd" id="c10">10</div>
          <br />
          <p style="margin: 10px 0;text-align: center; color: orange">判断题</p>
          <div class="dd" id="c11">11</div>
          <div class="dd" id="c12">12</div>
          <div class="dd" id="c13">13</div>
          <div class="dd" id="c14">14</div>
          <div class="dd" id="c15">15</div>
          <div class="card-action" style="padding: 10px;border-top: 1px solid rgba(255,255,255,.3);">
            <p style="margin: 10px 0;color: orange">考试时间：<span  id="timer"></span></p>
           
          </div>
        </div>
      </div>
    </div>
  </div>

  <h2 id="title"></h2>
  <div class="contain" id="contain">


  </div>
  <script src="../js/jquery.min.js"></script>
	<script src="../js/materialize.js"></script>
  <script src="../js/exam-detail.js"></script>
</body>
</html>