# vida-blog-frontend
Project 3: CLIENT SERVER-Express, NODE JS, HTML/CSS, SASS, Angular, Javascript/jQUERY, GULP

===================
VIDA Lifestyle Blog
====================

*An original lifestyle blog created by Victoria Fajardo, Anita Wright, and Arnold Rozon*. 

---

This blog was created, from the ground up, using the following technical languages, software libraries, and frameworks:

* HTML
* CSS/SASS
* JAVASCRIPT
* jQUERY
* RUBY Sinatra
* MYSQL
* NODE.js
* GITHUB
* EXPRESS
* GULP
* Angular.js
* EJS
* Rake
* Active Record ORM

**CONCEPT**

We we given the task of creating a web application featuring an API with CRUD functionality.  
This blog was created to entertain and inspire people from all walks of life.  A few of the blogs that we admire and drew inspiration from are [GOOP](http://www.goop.com), [Honeygrow](http://honeygrow.com), [Liberty London Girl](http://www.libertylondongirl.com), and [Rachel Khoo](http://www.rachelkhoo.com).  We wanted to create a site that offers advice, product knowledge, and information about travel, food and drink, and home and beauty products.  

**User Story:**

This blog was created for two different user types, the blog master and the reader.  The blog master has the ability to log in and create new postings and change current ones, while the reader will have the ability to comment on the postings.  Both the blog master and the reader will need to login before they are able to access these features.  

**Blog Master login in:**

Upon login to the admin interface, the blog master will be asked for their id.  If the ID matches, they are able to create, modify, or delete a posting.  Once the post has been created/modified and shows on the page, they are then given the option to save the post, and then view it. If the post is to be deleted, the user will see the phrase POST DELETED once they’ve chosen this option.  If the password doesn’t match, the message INVALID PASSWORD appears, and the user is redirected to the admin start page. 


**Reader login:**

Upon login at the home screen, the reader will then have the ability to create new comments, or modify and delete existing ones.  If the login information is correct, they will see the message “Welcome”, and will be allowed access to the comments section.  If the reader password is incorrect, then they will see the message “You entered the wrong username or password.  Please try again!”

**API KEY generation:** 

Creation of API keys occured whenever the blog master or the reader creates a profile.  We were able to generate API keys with a random string using Base64.

**Future functionality:**

We currently have only run the app in the local environment, but it is set up for future use in a live environment.

##Authors
	-Victoria Fajardo
	-Anita Wright
	-Arnold Rozon
