// TWITTER DISPLAY
$(document).ready(function(){
	getTwitters('deadTweets', {
		id: 'Dreamthemelab', 
		prefix: '',  // If you want display your avatar and name <img height="16" width="16" src="%profile_image_url%" /><a href="http://twitter.com/%screen_name%">%name%</a> said:<br/>
		clearContents: false, // leave the original message in place
		count: 2, 
		withFriends: true,
		ignoreReplies: true,
		newwindow: true
	});
});
//--------------------------------------------------------------------------
