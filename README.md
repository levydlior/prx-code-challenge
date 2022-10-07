# Setup

### Requirements:
<ul>
<li>React</li>
<li>Ruby</li>
<li>NodeJS (v16), and npm</li>
<li>Postgresql</li>
</ul>

### To run this project: 
* Clone the repo to your computer
* cd into the project directory and open it with your IDE
* in the terminal run:
``` console
sudo service postgresql start
```

* In the terminal while in the root directory run:
``` console
bundle install
```

* cd into the client directory
* In the client directory in the terminal run:
``` console
npm install
```
* In the root directory in the terminal run: 
``` console
rails s
```
* Open another terminal, go to the client directory, in the terminal run: 
``` console
npm start
```
* Go to http://localhost:4000/

