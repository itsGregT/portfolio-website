<!DOCTYPE html>
<html>
<head>
	<title><?php echo $title;?></title>
	<meta name="description" content="Portfolio website of Greg Thomas a front end web developer living in the Chicago area.">
	<link rel="shortcut icon" href="./img/favicon.ico">
	<link rel="stylesheet" type="text/css" href="./css/application.css">
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
</head>
<body id="<?php echo $page?>">
	<header>
		<div class="mobile-header-overlay">
			<a href="http://gregthomas.me/"><img src="./img/GregThomas-logo-sm.png" class="logo"></a>
			<div class="mobile-nav">
				<div id="hamburger-top" class="hamburger-line"></div>
				<div id="hamburger-middle" class="hamburger-line"></div>
				<div id="hamburger-bottom" class="hamburger-line"></div>
			</div>
		</div>
		<?php
			$site = $_SERVER['REQUEST_URI'];
			$path = parse_url($site, PHP_URL_PATH);
			$pathComponents = explode('/', $path);
			$page = $pathComponents[1];
		?>
		<nav>
			<ul>
				<a href="http://gregthomas.me/"><li><span class="menu-hover">Home</span></li></a>
				<a href="/portfolio"><li><span class="<?php if($page == 'portfolio'){ echo "active";}?> menu-hover">Work</span></li></a>
				<a href="/about"><li><span class="<?php if($page == 'about'){ echo "active";}?> menu-hover">About</span></li></a>
				<a href="/contact"><li><span class="<?php if($page == 'contact'){ echo "active";}?> menu-hover">Contact</span></li></a>
			</ul>
		</nav>
	</header>