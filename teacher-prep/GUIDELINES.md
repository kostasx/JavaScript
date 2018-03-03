Here are some guidelines on creating slides for your lesson presentations.

• Most of the slides are based on the [Reveal.JS library](https://revealjs.com/#/). The library resides in `/teacher-prep/libs/revealjs` folder, so be sure to use the correct pathname (../libs/revealjs/) on your index.html file. For example:

	For the scripts:
	<script src="../libs/revealjs/js/reveal.js"></script>

	For the CSS:
	<link rel="stylesheet" href="../libs/revealjs/css/reveal.css">

You can always take a look at the previous slides or just copy paste the index.html from one of the previous weeks and start working your way from there.

• The slides are placed in the https://github.com/SocialHackersCodeSchool/JavaScript GitHub repository, using the Javascript 1, Javascript 2 naming convention for each week.

• Be sure to include the following Reveal initialisation options on your presentation index.html file:

	`Reveal.initialize({ controls: true, progress: true, history: true, center: true, ...`

• The slides must be uploaded on your GitHub repository and shared with the other teachers, 1~3 days before presentation, so that we have the time to review the slides and  suggest changes or fix typos and other mistakes.

• Try to avoid scrollable code content. Use only the minimum required code in order to explain the various concepts.

• Add the `contenteditable` attribute on all <code> snippets on the slides, in order for you to be able to edit it during the lesson. This is extremely helpful when you want to add or change the code on some slide, in order to explain something that came up during your discussion with the students. 

• Since we are trying to promote best coding practices to beginners, try to include semicolons; on all of your code snippets.

• You can review (and comment or submit a PR) the slides created so far in the following URLs:

 https://socialhackerscodeschool.github.io/JavaScript/teacher-prep/Javascript 1/
 https://socialhackerscodeschool.github.io/JavaScript/teacher-prep/Javascript 2/
 https://socialhackerscodeschool.github.io/JavaScript/teacher-prep/Javascript 3/
 https://socialhackerscodeschool.github.io/JavaScript/teacher-prep/Javascript 4/
 https://socialhackerscodeschool.github.io/JavaScript/teacher-prep/Javascript 5/



