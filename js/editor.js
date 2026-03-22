document.addEventListener("DOMContentLoaded", function () {

  const codeArea = document.getElementById("code");
  const runBtn = document.getElementById("runBtn");
  const output = document.getElementById("output");

  /* =========================
     ALL EXAMPLES DATABASE
  ========================== */

  const examples = {

    /* ================= HTML ================= */

    hello: "<h1>Hello World</h1>",

    headings: `
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Small Heading</h3>`,

    paragraph: "<p>This is a paragraph example.</p>",

    link: `<a href="https://google.com" target="_blank">Visit Google</a>`,

    image_html: `<img src="https://via.placeholder.com/200" alt="Sample Image">`,

    list: `
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,

    table: `
<table border="1">
<tr><th>Name</th><th>Age</th></tr>
<tr><td>Rahul</td><td>20</td></tr>
</table>`,

    form_html: `
<form>
  <input type="text" placeholder="Enter Name">
  <button>Submit</button>
</form>`,

    login_form: `
<h2>Login Form</h2>
<input type="text" placeholder="Username"><br><br>
<input type="password" placeholder="Password"><br><br>
<button>Login</button>`,

    registration_form: `
<h2>Registration</h2>
<input placeholder="Name"><br><br>
<input placeholder="Email"><br><br>
<input type="password" placeholder="Password"><br><br>
<button>Register</button>`,

    navbar_html: `
<style>
nav {background:#333;padding:10px;}
nav a {color:white;margin:10px;text-decoration:none;}
</style>
<nav>
<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Contact</a>
</nav>`,

    responsive_layout: `
<style>
.container {display:flex;gap:10px;}
.box {flex:1;padding:20px;background:#007bff;color:white;}
@media(max-width:600px){
.container{flex-direction:column;}
}
</style>
<div class="container">
<div class="box">Box 1</div>
<div class="box">Box 2</div>
</div>`,

    portfolio_section: `
<h2>My Portfolio</h2>
<p>Web Developer | Designer | Freelancer</p>`,

    /* ================= CSS ================= */

    text_color: `
<style>
h1 {color:red;}
</style>
<h1>Colored Text</h1>`,

    background: `
<style>
body {background:lightblue;}
</style>
<h2>Background Example</h2>`,

    box_model: `
<style>
div {width:200px;padding:20px;border:5px solid black;margin:20px;}
</style>
<div>Box Model</div>`,

    border_radius: `
<style>
div {width:150px;height:150px;background:orange;border-radius:20px;}
</style>
<div></div>`,

    hover_effect: `
<style>
button:hover {background:black;color:white;}
</style>
<button>Hover Me</button>`,

    flexbox: `
<style>
.container {display:flex;gap:10px;}
.box {background:green;color:white;padding:20px;}
</style>
<div class="container">
<div class="box">1</div>
<div class="box">2</div>
</div>`,

    grid_layout: `
<style>
.container {display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.box {background:purple;color:white;padding:20px;}
</style>
<div class="container">
<div class="box">A</div>
<div class="box">B</div>
</div>`,

    centering: `
<style>
.center {display:flex;justify-content:center;align-items:center;height:100vh;}
</style>
<div class="center"><h1>Centered</h1></div>`,

    card_design: `
<style>
.card {width:200px;padding:20px;border:1px solid #ccc;border-radius:10px;}
</style>
<div class="card">
<h3>Card Title</h3>
<p>Card Content</p>
</div>`,

    responsive_css: `
<style>
body {font-size:20px;}
@media(max-width:600px){
body{font-size:14px;}
}
</style>
<h1>Responsive Text</h1>`,

    /* ================= JS ================= */

    alert_button: `
<button onclick="alert('Hello!')">Click Me</button>`,

    change_text: `
<p id="text">Old Text</p>
<button onclick="document.getElementById('text').innerText='New Text'">
Change Text
</button>`,

    dark_mode: `
<button onclick="toggle()">Toggle Dark Mode</button>
<script>
function toggle(){
document.body.style.background='black';
document.body.style.color='white';
}
<\/script>`,

    counter_app: `
<h2>Counter</h2>
<p id="count">0</p>
<button onclick="increase()">+</button>
<script>
let c=0;
function increase(){
c++;
document.getElementById("count").innerText=c;
}
<\/script>`,

    show_hide_password: `
<input type="password" id="pass">
<button onclick="toggle()">Show/Hide</button>
<script>
function toggle(){
let p=document.getElementById("pass");
p.type=p.type==="password"?"text":"password";
}
<\/script>`,

    image_slider: `
<img id="img" src="https://via.placeholder.com/200">
<button onclick="change()">Next</button>
<script>
function change(){
document.getElementById("img").src="https://via.placeholder.com/200/ff0000";
}
<\/script>`,

    modal_popup: `
<button onclick="openModal()">Open</button>
<div id="modal" style="display:none;background:#000;color:#fff;padding:20px;">
Modal Content
</div>
<script>
function openModal(){
document.getElementById("modal").style.display="block";
}
<\/script>`,

    form_validation: `
<form onsubmit="return validate()">
<input id="name" placeholder="Enter name">
<button>Submit</button>
</form>
<script>
function validate(){
if(document.getElementById("name").value==""){
alert("Name required");
return false;
}
}
<\/script>`,

    calculator: `
<input id="a" type="number">
<input id="b" type="number">
<button onclick="add()">Add</button>
<p id="result"></p>
<script>
function add(){
let a=+document.getElementById("a").value;
let b=+document.getElementById("b").value;
document.getElementById("result").innerText=a+b;
}
<\/script>`,

    todo_app: `
<input id="task">
<button onclick="add()">Add</button>
<ul id="list"></ul>
<script>
function add(){
let li=document.createElement("li");
li.innerText=document.getElementById("task").value;
document.getElementById("list").appendChild(li);
}
<\/script>`,

    /* ================= MINI PROJECTS ================= */

    landing_page: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Landing Page</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Segoe UI, sans-serif;
}

body{
    line-height:1.6;
}

/* Navbar */
header{
    background:#222;
    color:#fff;
    padding:15px 40px;
    position:sticky;
    top:0;
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

nav h1{
    font-size:22px;
}

nav ul{
    display:flex;
    list-style:none;
    gap:20px;
}

nav ul li a{
    color:#fff;
    text-decoration:none;
    transition:.3s;
}

nav ul li a:hover{
    color:#00c3ff;
}

/* Hero Section */
.hero{
    height:90vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background:linear-gradient(135deg,#00c3ff,#4facfe);
    color:#fff;
    padding:20px;
}

.hero h2{
    font-size:42px;
}

.hero p{
    margin:20px 0;
    font-size:18px;
}

.hero button{
    padding:12px 25px;
    border:none;
    background:#222;
    color:#fff;
    font-size:16px;
    cursor:pointer;
    border-radius:5px;
    transition:.3s;
}

.hero button:hover{
    background:#fff;
    color:#222;
}

/* Features */
.features{
    padding:60px 40px;
    text-align:center;
}

.features h2{
    margin-bottom:40px;
}

.feature-box{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.card{
    padding:25px;
    background:#f4f4f4;
    border-radius:10px;
    transition:.3s;
}

.card:hover{
    transform:translateY(-10px);
    box-shadow:0 10px 20px rgba(0,0,0,0.15);
}

/* About */
.about{
    padding:60px 40px;
    background:#222;
    color:#fff;
    text-align:center;
}

/* Contact */
.contact{
    padding:60px 40px;
    text-align:center;
}

.contact input, .contact textarea{
    width:100%;
    max-width:400px;
    padding:10px;
    margin:10px 0;
    border:1px solid #ccc;
}

.contact button{
    padding:10px 20px;
    background:#00c3ff;
    border:none;
    color:#fff;
    cursor:pointer;
}

/* Footer */
footer{
    background:#111;
    color:#aaa;
    text-align:center;
    padding:15px;
    margin-top:30px;
}
</style>
</head>

<body>

<header>
    <nav>
        <h1>MyBrand</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<section class="hero">
    <div>
        <h2>Build Your Dream Website</h2>
        <p>Simple • Fast • Modern Landing Page</p>
        <button onclick="scrollToSection()">Get Started</button>
    </div>
</section>

<section class="features" id="features">
    <h2>Our Features</h2>
    <div class="feature-box">
        <div class="card">
            <h3>Fast</h3>
            <p>Optimized for performance and speed.</p>
        </div>
        <div class="card">
            <h3>Responsive</h3>
            <p>Looks perfect on mobile, tablet and desktop.</p>
        </div>
        <div class="card">
            <h3>Easy to Use</h3>
            <p>Clean and beginner-friendly structure.</p>
        </div>
    </div>
</section>

<section class="about" id="about">
    <h2>About Us</h2>
    <p>
        We help you create modern websites with clean design and simple code.
        This landing page is fully built using HTML, CSS and JavaScript in one file.
    </p>
</section>

<section class="contact" id="contact">
    <h2>Contact Us</h2>
    <input type="text" placeholder="Your Name"><br>
    <input type="email" placeholder="Your Email"><br>
    <textarea rows="4" placeholder="Your Message"></textarea><br>
    <button onclick="submitForm()">Send Message</button>
</section>

<footer>
    <p>© 2026 MyBrand. All Rights Reserved.</p>
</footer>

<script>
function scrollToSection(){
    document.getElementById("features").scrollIntoView({behavior:"smooth"});
}

function submitForm(){
    alert("Message Sent Successfully!");
}
</script>

</body>
</html>`,

    portfolio_site: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Portfolio</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Segoe UI,sans-serif}
body{line-height:1.6;background:#f4f6f9;color:#333}
header{background:#111;color:#fff;padding:15px 40px;position:sticky;top:0}
nav{display:flex;justify-content:space-between;align-items:center}
nav ul{display:flex;gap:20px;list-style:none}
nav a{color:#fff;text-decoration:none}
nav a:hover{color:#00c3ff}
.hero{height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background:linear-gradient(135deg,#00c3ff,#4facfe);color:#fff;padding:20px}
.hero h1{font-size:42px}
.hero p{margin:15px 0}
.hero button{padding:12px 25px;border:none;background:#111;color:#fff;cursor:pointer;border-radius:5px}
section{padding:60px 40px;text-align:center}
.projects{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:30px}
.card{background:#fff;padding:20px;border-radius:10px;box-shadow:0 5px 15px rgba(0,0,0,0.1);transition:.3s}
.card:hover{transform:translateY(-8px)}
.contact input,.contact textarea{width:100%;max-width:400px;padding:10px;margin:10px auto;border:1px solid #ccc;display:block}
.contact button{padding:10px 20px;background:#00c3ff;border:none;color:#fff;cursor:pointer}
footer{background:#111;color:#aaa;text-align:center;padding:15px}
</style>
</head>
<body>

<header>
<nav>
<h2>MyPortfolio</h2>
<ul>
<li><a href="#about">About</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>
</header>

<div class="hero">
<h1>Hello, I'm Shivam 👋</h1>
<p>Web Developer | Designer | Learner</p>
<button onclick="document.getElementById('projects').scrollIntoView({behavior:'smooth'})">View My Work</button>
</div>

<section id="about">
<h2>About Me</h2>
<p>I build simple, clean and responsive websites using HTML, CSS and JavaScript.</p>
</section>

<section id="projects">
<h2>My Projects</h2>
<div class="projects">
<div class="card"><h3>Landing Page</h3><p>Modern responsive landing page design.</p></div>
<div class="card"><h3>Calculator App</h3><p>JavaScript based calculator project.</p></div>
<div class="card"><h3>Blog Website</h3><p>Dynamic blog layout with posts section.</p></div>
</div>
</section>

<section id="contact" class="contact">
<h2>Contact Me</h2>
<input type="text" placeholder="Your Name">
<input type="email" placeholder="Your Email">
<textarea rows="4" placeholder="Your Message"></textarea>
<button onclick="alert('Message Sent!')">Send</button>
</section>

<footer>
<p>© 2026 My Portfolio | All Rights Reserved</p>
</footer>

</body>
</html>`,

    blog_layout: `
<style>
body{
  font-family:Segoe UI,sans-serif;
  background:#f4f6f9;
  margin:0;
}

header{
  background:#222;
  color:#fff;
  padding:15px;
  text-align:center;
}

.container{
  max-width:800px;
  margin:20px auto;
  padding:20px;
}

input, textarea{
  width:100%;
  padding:10px;
  margin:8px 0;
  border:1px solid #ccc;
  border-radius:5px;
}

button{
  padding:10px 15px;
  border:none;
  background:#007bff;
  color:#fff;
  cursor:pointer;
  border-radius:5px;
}

button:hover{
  background:#0056b3;
}

.post{
  background:#fff;
  padding:15px;
  margin-top:15px;
  border-left:4px solid #007bff;
  border-radius:5px;
}

.delete{
  background:red;
  margin-top:10px;
}
</style>

<header>
<h2>📝 My Blog Editor</h2>
</header>

<div class="container">

<input id="title" placeholder="Enter Blog Title">
<textarea id="content" rows="5" placeholder="Write your blog..."></textarea>

<button onclick="addPost()">Publish</button>

<div id="posts"></div>

</div>

<script>
let posts = JSON.parse(localStorage.getItem("blog_posts") || "[]");

function addPost(){
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if(!title || !content){
    alert("Please write something!");
    return;
  }

  posts.unshift({title,content});
  localStorage.setItem("blog_posts",JSON.stringify(posts));

  document.getElementById("title").value="";
  document.getElementById("content").value="";

  renderPosts();
}

function deletePost(index){
  posts.splice(index,1);
  localStorage.setItem("blog_posts",JSON.stringify(posts));
  renderPosts();
}

function renderPosts(){
  const container = document.getElementById("posts");
  container.innerHTML="";

  posts.forEach((p,i)=>{
    container.innerHTML += \`
      <div class="post">
        <h3>\${p.title}</h3>
        <p>\${p.content}</p>
        <button class="delete" onclick="deletePost(\${i})">Delete</button>
      </div>
    \`;
  });
}

renderPosts();
<\/script>
`,

    weather_app: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Weather App</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Segoe UI, sans-serif;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#00c6ff,#0072ff);
}

.weather-box{
    background:white;
    padding:30px;
    border-radius:15px;
    text-align:center;
    width:320px;
    box-shadow:0 8px 20px rgba(0,0,0,0.2);
}

.weather-box h2{
    margin-bottom:20px;
}

input{
    width:100%;
    padding:10px;
    margin-bottom:15px;
    border:1px solid #ccc;
    border-radius:5px;
}

button{
    padding:10px 20px;
    border:none;
    background:#0072ff;
    color:white;
    border-radius:5px;
    cursor:pointer;
    margin-bottom:15px;
}

button:hover{
    background:#005ad1;
}

.result{
    margin-top:15px;
}

.result p{
    margin:5px 0;
    font-size:16px;
}
</style>
</head>
<body>

<div class="weather-box">
    <h2>🌤 Weather App</h2>
    <input type="text" id="city" placeholder="Enter City Name">
    <button onclick="getWeather()">Search</button>

    <div class="result" id="result"></div>
</div>

<script>
async function getWeather(){

    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY_HERE";  // 👈 Apni API key yaha daalein

    if(city === ""){
        alert("Please enter city name");
        return;
    }

    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric\`;

    try{
        const response = await fetch(url);
        const data = await response.json();

        if(data.cod === "404"){
            document.getElementById("result").innerHTML = "<p>City not found</p>";
            return;
        }

        document.getElementById("result").innerHTML = \`
            <p><strong>\${data.name}, \${data.sys.country}</strong></p>
            <p>🌡 Temperature: \${data.main.temp} °C</p>
            <p>☁ Condition: \${data.weather[0].description}</p>
            <p>💧 Humidity: \${data.main.humidity}%</p>
            <p>🌬 Wind Speed: \${data.wind.speed} m/s</p>
        \`;

    } catch(error){
        document.getElementById("result").innerHTML = "<p>Error fetching data</p>";
    }
}
<\/script>

</body>
</html>
`,

    quiz_app: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Quiz App</title>

<style>
body{
    font-family:Segoe UI,sans-serif;
    background:#f4f6f9;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.quiz-box{
    background:#fff;
    padding:25px;
    width:350px;
    border-radius:10px;
    box-shadow:0 5px 20px rgba(0,0,0,0.1);
}

h2{
    margin-bottom:15px;
}

.option{
    background:#eee;
    padding:10px;
    margin:8px 0;
    border-radius:5px;
    cursor:pointer;
    transition:.3s;
}

.option:hover{
    background:#dcdcdc;
}

button{
    margin-top:15px;
    padding:10px 15px;
    border:none;
    background:#007bff;
    color:white;
    cursor:pointer;
    border-radius:5px;
}

.result{
    font-size:20px;
    text-align:center;
}
</style>
</head>

<body>

<div class="quiz-box">
    <h2 id="question">Question</h2>
    <div id="options"></div>
    <button onclick="nextQuestion()">Next</button>
</div>

<script>
const quiz = [
{
q:"HTML ka full form kya hai?",
options:["Hyper Trainer Marking Language","Hyper Text Markup Language","Hyper Text Marketing Language","Hyper Tool Multi Language"],
answer:1
},
{
q:"CSS ka use kis liye hota hai?",
options:["Structure","Styling","Database","Server"],
answer:1
},
{
q:"JavaScript kya hai?",
options:["Programming Language","Styling Tool","Database","Framework"],
answer:0
}
];

let index = 0;
let score = 0;

function loadQuestion(){
const q = quiz[index];
document.getElementById("question").innerText = q.q;

const optionsDiv = document.getElementById("options");
optionsDiv.innerHTML = "";

q.options.forEach((opt,i)=>{
const div = document.createElement("div");
div.className="option";
div.innerText=opt;
div.onclick=()=>checkAnswer(i);
optionsDiv.appendChild(div);
});
}

function checkAnswer(i){
if(i===quiz[index].answer){
score++;
}
index++;
if(index<quiz.length){
loadQuestion();
}else{
showResult();
}
}

function nextQuestion(){
index++;
if(index<quiz.length){
loadQuestion();
}else{
showResult();
}
}

function showResult(){
document.querySelector(".quiz-box").innerHTML =
"<div class='result'>✅ Your Score: "+score+" / "+quiz.length+"</div>";
}

loadQuestion();
<\/script>

</body>
</html>
`,

    notes_app: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Notes App</title>

<style>
body{
  font-family:Segoe UI,sans-serif;
  background:#f4f6f9;
  margin:0;
}

header{
  background:#222;
  color:#fff;
  padding:15px;
  text-align:center;
}

.container{
  max-width:900px;
  margin:20px auto;
  padding:20px;
}

textarea{
  width:100%;
  padding:10px;
  border:1px solid #ccc;
  border-radius:5px;
  resize:none;
}

button{
  padding:10px 15px;
  margin-top:10px;
  border:none;
  background:#007bff;
  color:#fff;
  cursor:pointer;
  border-radius:5px;
}

button:hover{
  background:#0056b3;
}

.notes{
  margin-top:20px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:15px;
}

.note{
  background:#fff;
  padding:15px;
  border-radius:8px;
  box-shadow:0 5px 15px rgba(0,0,0,0.1);
  position:relative;
}

.delete{
  position:absolute;
  top:10px;
  right:10px;
  background:red;
}
</style>
</head>

<body>

<header>
<h2>📝 Notes App</h2>
</header>

<div class="container">

<textarea id="noteInput" rows="4" placeholder="Write your note..."></textarea>
<button onclick="addNote()">Save Note</button>

<div class="notes" id="notesContainer"></div>

</div>

<script>
let notes = JSON.parse(localStorage.getItem("notes_data") || "[]");

function addNote(){
  const text = document.getElementById("noteInput").value;

  if(!text){
    alert("Write something!");
    return;
  }

  notes.unshift(text);
  localStorage.setItem("notes_data", JSON.stringify(notes));

  document.getElementById("noteInput").value="";
  renderNotes();
}

function deleteNote(index){
  notes.splice(index,1);
  localStorage.setItem("notes_data", JSON.stringify(notes));
  renderNotes();
}

function renderNotes(){
  const container = document.getElementById("notesContainer");
  container.innerHTML="";

  notes.forEach((n,i)=>{
    container.innerHTML += \`
      <div class="note">
        \${n}
        <button class="delete" onclick="deleteNote(\${i})">X</button>
      </div>
    \`;
  });
}

renderNotes();
<\/script>

</body>
</html>
`,
  };

  /* =========================
     DEFAULT TEMPLATE
  ========================== */

  const defaultCode = `
<!DOCTYPE html>
<html>
<body>
<h1>Welcome to DevSutra 🚀</h1>
<p>Select an example to start.</p>
</body>
</html>`;

  const params = new URLSearchParams(window.location.search);
  const topic = params.get("topic");

  let finalCode = defaultCode;

  if (topic && examples[topic]) {

    const storageKey = "editor_" + topic;
    const savedCode = localStorage.getItem(storageKey);

    finalCode = savedCode || `
<!DOCTYPE html>
<html>
<body>
${examples[topic]}
</body>
</html>`;

    codeArea.addEventListener("input", function () {
      localStorage.setItem(storageKey, codeArea.value);
    });
  }

  codeArea.value = finalCode;
  output.srcdoc = finalCode;

  runBtn.addEventListener("click", function () {
    output.srcdoc = codeArea.value;
  });

});