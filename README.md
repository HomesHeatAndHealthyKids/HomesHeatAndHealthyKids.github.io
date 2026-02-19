# Homes, Heat and Healthy Kids

## Site design
Site is based on Alpha by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

A clean, super minimal responsive template geared towards startups, app devs, and other
dedicated folks working tirelessly to launch their products. Includes a landing page,
generic page, contact page, and a page with a whole mess of pre-styled elements (something
new I'm trying out). 

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = Not included)

Feedback, bug reports, and comments are not only welcome, but strongly encouraged :)

AJ
aj@lkn.io | @ajlkn

## Colour palette for HHHK Jumper 
  taken from ChatGPT - sorry El - I should pay attention!

	  | Colour Name      | Description           | HEX Code    | RGB             |
    |------------------|-----------------------|-------------|-----------------|
    | Deep Collar Blue | Dark ribbed neck blue | **#2F5F93** | (47, 95, 147)   |
    | Mid Blue         | Upper stripe blue     | **#4E86AD** | (78, 134, 173)  |
    | Soft Blue        | Pale blue stripe      | **#86AFC4** | (134, 175, 196) |
    | Light Beige      | Neutral stripe        | **#E6C7AF** | (230, 199, 175) |
    | Warm Peach       | Soft peach stripe     | **#E9A27D** | (233, 162, 125) |
    | Burnt Orange     | Orange stripe         | **#D96A4C** | (217, 106, 76)  |
    | Deep Red         | Cuffs and hem ribbing | **#C5333A** | (197, 51, 58)   |
	 

## Adding Blogs
  * Please write blogs at Medium
  * Blogs are added to the blogs.html page automatically from a medium feed.
  * The blogs will take some time to appear because the feed is processed by api2json
  * The research page will look for an image within the text and use that as a banner image for the blog
  * Please make sure to include an image

## Adding Team Members
  * Please add team members on team.html
  * Copy HTML code between and including &lt;div class="team-card"&gt;&lt;/div&gt;
  * You may need to switch the picture link to make sure that the images alternate sides
  * Alter the text to show details for the new team member
  * Add headshots to the images/headshots directory

## Adding Research Outputs
 * Research outputs are added by modifying the JSON stored at the top of assets\js\research.js
 * Each new output should have the following entry
```
  {
        "title": "The Impact of Home Energy Efficiency Measures on Children’s Respiratory Health",
        "type": "Paper",
        "categories": ["papers"],
        "image": "images/pic01.jpg",
        "date": "22nd November 2025",
        "description": "Scoping review examining the association between home energy efficiency measures and children's respiratory health, and exploring potential downsides.",
        "url": "https://doi.org/10.12688/wellcomeopenres.24692.1"
  },
```
 * The entries are very finickety - categories can be one of "papers", "presentations", or "engagements"  
 * Keep the description short if possible
 * Always use the date format above
 * There are several useful images already uploaded "house_cold", "house_with_germs", "house_with_heart", "house_cold", "radiator", and "chilly_people"


## TODO 
  * Embedded videos
  * Team Review
  * Generate content
## Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Scrollex (github.com/ajlkn/jquery.scrollex)
		Responsive Tools (github.com/ajlkn/responsive-tools)
