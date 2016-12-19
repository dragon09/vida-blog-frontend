
===================
VIDA Lifestyle Blog
====================

![HEADER](/images/vidablogheader.png)

*An original lifestyle blog created by Victoria Fajardo, Anita Wright, and Arnold Rozon*. This blog application is a RESTful API created, from the ground up, using the following technical languages, software libraries, and frameworks:

---

This blog was created, from the ground up, using the following technical languages, software libraries, and frameworks:


REPO Title: vida-blog-frontend
CLIENT SERVER
EXPRESS
NODE.js
NPM

FRONT END
HTML5
* CSS3/SASS
* ANGULAR
* EMBEDDEDjs
* JAVASCRIPT/jQUERY
* GULP

REPO Title: test_api
API SERVER
* RUBY/GEMS
* SINATRA
* API/JSON
* API_KEY
* MYSQL
* RAKE
* ACTIVE RECORD ORM
* POSTMAN
* COMMAND LINE
* CRUD/MVC
* GITHUB

**CONCEPT**

We were given the task of creating a REST API client/server side web application with database and full CRUD functionality.

This blog was created for two different user types: the blog author/master and the user/reader.
The blog master has the ability to log in and Create new postings and Update existing posts, while the user/reader will have the ability to Create a comment on the blog postings. Both the blog master and the reader will need to login before they are able to access these features.

Upon login to the form , the blog author will be asked for their email address and password.  If the password matches, the author is able to Create, Read, Update or Delete a posting or account log in information.

User login:

Upon login at the home screen, the user will have the ability to Create new comments, Read, Update and Delete existing comments. If the login information is correct, they will see the message “Welcome”, and will be allowed access to the comments section. If the user password is incorrect, then they will see the message “You entered the wrong username or password. Please try again!”

Creation of an API key occurs one time upon new account registration.  The same API key remains with the user during each session. The API keys are generated with a random string method using Base64.We given the task of creating a web application featuring an API with CRUD functionality.

**User Story:**

This blog was created to entertain and inspire people from all walks of life.  A few of the blogs that we admire and drew inspiration from are [GOOP](http://www.goop.com), [Honeygrow](http://honeygrow.com), [Liberty London Girl](http://www.libertylondongirl.com), and [Rachel Khoo](http://www.rachelkhoo.com).  We wanted to create a site that offers advice, product knowledge, and information about travel, food and drink, and home and beauty products.  



**Blog Auther/Master Login:**

Upon login to the admin interface, the blog master will be asked for their id.  If the ID matches, they are able to create, modify, or delete a posting.  Once the post has been created/modified and shows on the page, they are then given the option to save the post, and then view it. If the post is to be deleted, the user will see the phrase POST DELETED once they’ve chosen this option.  If the password doesn’t match, the message INVALID PASSWORD appears, and the user is redirected to the admin start page.


**User/Reader login:**

Upon login at the home screen, the reader will then have the ability to create new comments, or modify and delete existing ones.  If the login information is correct, they will see the message “Welcome”, and will be allowed access to the comments section.  If the reader password is incorrect, then they will see the message “You entered the wrong username or password.  Please try again!”

**API KEY generation:**

Creation of API keys occured whenever the blog master or the reader creates a profile.  We were able to generate API keys with a random string using Base64.

**Future functionality:**


##Authors
	-Victoria Fajardo
	-Anita Wright
	-Arnold Rozon
