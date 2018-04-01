<?php 
	$title = "Greg Thomas | Contact";
	$page = "contact";
	include 'header.php';
?>
	<h1 class="page-title">Contact</h1>
	<div class="content">
		<div class="left-col col">
			<p>Want to work together or feel like saying hello? Send me a message anytime!</p>
			<a href="mailto:webdeveloper@gregthomas.me"><span class="email">webdeveloper@gregthomas.me</span></a>
			<ul class="social-media">
				<li><a href="https://www.linkedin.com/in/itsgregt" target="_blank"><img src="./img/LinkedIn-lg.png"></a></li>
				<li><a href="https://twitter.com/itsgregt" target="_blank"><img src="./img/Twitter-lg.png"></a></li>
				<li><a href="https://codepen.io/itsGregT/" target="_blank"><img src="./img/CodePen-lg.png"></a></li>
				<li><a href="https://github.com/itsGregT" target="_blank"><img src="./img/Github-lg.png"></a></li>
			</ul>
		</div>
		<div class="right-col col">
			<?php include 'contact-form.php';?>
		</div>
	</div>
<?php include 'footer.php'; ?>