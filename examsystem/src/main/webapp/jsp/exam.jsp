<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>考试中</title>
  <link rel="stylesheet" href="../css/materialize.min.css">
  <link rel="stylesheet" href="../css/icomoon.css">
  <link rel="stylesheet" href="../css/exam.css">
</head>
<body>
  <div class="navbar-fixed">
  	<nav>
      <div class="nav-wrapper">
        	<a href="#" class="brand-logo" id="logo">在线考试系统</a>
        	<ul id="nav-mobile" class="right">
          	<li>诚信应考，考试作弊将带来严重后果！</li>
        	</ul>
      </div>
    </nav>
  </div>
  

  <h2 id="title"></h2>

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
          <p style="margin: 10px 0;text-align: center;color: orange">判断题</p>
          <div class="dd" id="c11">11</div>
          <div class="dd" id="c12">12</div>
          <div class="dd" id="c13">13</div>
          <div class="dd" id="c14">14</div>
          <div class="dd" id="c15">15</div>
          <br />
          <p style="margin: 10px 0;text-align: center;color: orange">填空题</p>
          <div class="dd" id="c16">16</div>
          <div class="dd" id="c17">17</div>
          <div class="dd" id="c18">18</div>
          <div class="dd" id="c19">19</div>
          <div class="dd" id="c20">20</div>
           <br />
          <p style="margin: 10px 0;text-align: center;color: orange">问答题</p>
          <div class="dd" id="c21">21</div>
          <div class="dd" id="c22">22</div>
          <div class="dd" id="c23">23</div>
          <div class="dd" id="c24">24</div>
          <div class="dd" id="c25">25</div>
          <div class="card-action" style="padding: 10px;border-top: 1px solid rgba(255,255,255,.3);">
            <p style="margin: 10px 0;color: orange">剩余时间：<span  id="timer"></span></p>
            <a href="#" class="btn" id="submit"><i class="icon-quill"></i>提交试卷</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h3>第一部分：选择和判断（共25分）</h3>
  <div class="contain" id="contain">
    
  </div>

  <h3>第二部分：填空（共25分）</h3>
  <div class="contain" id="contain2">
    <!-- <div class="question">
      <p class="pan">呵呵是表示_____（情感）的词语。</p>
      <div class="divider"></div>
      <input id="16" style="background-color: #fff;margin-left: 20%;width: 40%;" type="text" placeholder="在这里输入答案">
    </div> -->
  </div>
  <h3>第三部分：问答题（共50分）</h3>

  <div class="contain" id="contain3">
    <!-- <div class="question">
      <p class="pan">呵呵是表示_____（情感）的词语。</p>
      <div class="divider"></div>
      <textarea id="cc111"></textarea>
    </div> -->
  </div>
  <script src="../js/jquery.min.js"></script>
	<script src="../js/materialize.js"></script>
  <script src="../js/exam.js"></script>
</body>
</html>