<?php
	$headers = "From: ".$_POST['name']."\r\n"."Reply-To: ".$_POST['email']."\r\n";

	if($_POST['submit']) {
		if(!$_POST['name']) {
			$error = true;
		}

		if(!$_POST['subject']) {
			$error = true;
		}

		if(!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$error = true;
		}

		if(!$_POST['message']) {
			$error = true;
		}

		if(!$error) {
			mail('webdeveloper@gregthomas.me', $_POST['subject'], $_POST['message'], $headers);
			$result = '<span class="message-success">Your message has been sent!</span>';
		} else {
			$result = '<span class="message-error">Something went wrong. Please check the form and try again.</span>';
		}
	}
?>
<h3 id="message-result"><?php echo $result; ?></h3>
<h4>*All fields required</h4>
<form method="post">
	<label for="name">Name</label>
	<input id="name-input" name="name" type="text" value="<?php echo $_POST['name'];?>"/>
	<label for="subject">Subject</label>
	<input id="subject-input" name="subject" type="text" value="<?php echo $_POST['subject'];?>"/>
	<label for="email">Email</label>
	<input id="email-input" name="email" type="text" value="<?php echo $_POST['email'];?>"/>
	<label for="message">Message</label>
	<textarea rows="4" id="message-input" name="message" type="textarea"><?php echo $_POST['message'];?></textarea>
	<input type="submit" name="submit" value="Send!"/>
</form>
