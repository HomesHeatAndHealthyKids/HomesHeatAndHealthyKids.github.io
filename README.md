# Homes, Heat and Healthy Kids

![Content checks](https://github.com/homesheatandhealthykids/HomesHeatAndHealthyKids.github.io/actions/workflows/content_checker.yml/badge.svg?branch=main)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=000) 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=fff)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=fff)

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

Taken from ChatGPT - sorry El - I should pay attention!


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
  * Blogs are added to the research.html page automatically from a medium feed
  * The 2 most recent blogs are automatically added to the home page
  * The blogs will take some time to appear because the feed is processed by api2json
  * The research page will look for an image within the text and use that as a banner image for the blog
  * Please make sure to include an image
  * The list of blogs is cached locally so that the webpages are responsive

## Adding Team Members
  * Please add team members on team.html
  * Copy HTML code between and including &lt;div class="team-card"&gt;&lt;/div&gt;
```
<div class="team-card">
  <!-- Place image div below here if picture goes on left -->  
  <div class="team-content">
    <h3 class="team-name">Micky Mouse</h3>
    <h4 class="team-role">Data Analyst</h4>
    <p>
      I am exploring the impacts of energy efficiency 
      interventions on the health of young children living in Scotland.
    </p>
    <p>
    <strong>What made you want to be part of the project?</strong>
    I am a dynamic individual who wants to be part of 
    something special. He recognised that this team could 
    be nice for him.
    </p>
  </div>
  <!-- This shows the headshot on the right. 
  Place before earlier div if picture goes on the left -->  
  <div class="team-photo single">
    <img src="images/headshots/MM.jpg"
      alt="Micky Mouse">
  </div>
</div>
```

  * You may need to switch the picture link to make sure that the images alternate sides
  * Alter the text to show details for the new team member
  * Add headshots to the images/headshots directory
## Adding Resources
  * Please add resources on resources.html
  * The resources page has a similar structure to the Teams page 
  * Copy HTML code between and including &lt;div class="team-card"&gt;&lt;/div&gt; (see earlier Teams section)
  * You may need to switch the picture link to make sure that the images alternate sides
  * Alter the text to show details for the new resource
  * Add suitable images to the images directory

## Adding Research Outputs
 * Research outputs are added by modifying the JSON stored at the top of assets\js\research.js
 * Each new output should have an entry like this:
```
  {
        "title": "The Impact of Home Energy Efficiency Measures on Children’s Respiratory Health",
        "type": "Paper",
        "categories": ["papers"],
        "image": "images/resources/pic01.jpg",
        "date": "2025-11-02",
        "description": "Scoping review examining the association between home energy efficiency measures and children's respiratory health, and exploring potential downsides.",
        "url": "https://doi.org/10.12688/wellcomeopenres.24692.1"
  },
```
 * The entries are very finickety - categories can be one of "papers", "presentations", or "engagements"  - the filter buttons will not work otherwise. You can place an entry in two categories (e.g. ["papers", "presentations"])
 * Keep the description short if possible
 * Always use the date format above (YYYY-MM-DD) - it will be reformatted on output, but useful for sorting
 * There are several useful images already uploaded "house_cold", "house_with_germs", "house_with_heart", "house_cold", "radiator", and "chilly_people" in the resources subdirectory
 * If you need to create a new page describing the Research Output, please create a file from the template.html


## TODO 
  * Team Review
  * Generate content
  * Test Google Tag Manager

## Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Scrollex (github.com/ajlkn/jquery.scrollex)
		Responsive Tools (github.com/ajlkn/responsive-tools)
