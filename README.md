# Cloudy.js, a jQuery plugin for turning text into an interactive word cloud

## Turning a <div> full of words into a cloud
You'll start off with a div element filled with words:

	<div class="cloud">This is the cloudy plugin</div>

Include jQuery 1.5+ and call the cloudy method passing in a 'clouds' object argument containing the groups of words for each section:
	
	<script>
	  $(document).ready(function() {
	    $(".cloud").cloudy({
			clouds: {
				default: ['this', 'is', 'cloudy'],
				plugin: ['the', 'plugin']
			}
		});
	  });
	</script>
	
You will see the following appear in your browser replacing the current div:
	
	<div id="cloud">
	  <span class="word1 cloudy" data-cloud="this">This</span>
	  <span class="word2 cloudy" data-cloud="is">is</span>
	  <span class="word3" data-cloud="the">the</span>
	  <span class="word4 cloudy" data-cloud="cloudy">cloudy</span>
	  <span class="word5" data-cloud="plugin">plugin</span>
	</div>

The script adds an HTML5 custom data attribute 'data-cloud' to each newly wrapped word and a class of 'cloudy' to the words passed inside the array of the 'default' object.
