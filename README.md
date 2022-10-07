# Setup

### Requirements:
<ul>
<li>React</li>
<li>Ruby</li>
<li>NodeJS (v16), and npm</li>
<li>Postgresql</li>
</ul>

### To run this project: 
<ol>
  <li>Clone the repo to your computer</li>
  <li>(assuming you have postgresql) In the terminal run `$sudo service postgresql start` (you'll need to enter your user's password)</li>
  <li>In the root directory run bundle install</li>
  <li>In the root directory run rails db:migrate db:seed</li>
  <li>$cd into the client directory</li>
  <li>In the client directory run npm install</li>
  <li>In the root directory run rails s</li>
  <li>Open another terminal, go to the client directory and run npm start</li>
  <li>Go to http://localhost:4000/</li>
  </ol>
 
