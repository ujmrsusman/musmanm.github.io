const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Greetings 👋,<br>I'm Muhammad Majeed, a 28-year-old Software Engineer residing in Toronto, Canada. My enduring fascination with computers dates back to my elementary school days, shaping my conviction to pursue a career in the field. In my perspective, the depth of programming prowess is not solely dependent on existing knowledge; a proficient programmer can swiftly acquire the necessary skills. What truly captivates me is the thought process behind it.<br><br>Beyond coding, you'll catch me indulging in video games or hitting the gym!",
  skills:
      '<span class="code">Languages:</span> Python, javascript, Java, MySQL, C++<br><span class="code">Technologies:</span> Git, SQL, Azure, AWS, DevOps<br><span class="code">Frameworks:</span> Spark, React.js, Django, Node.js, Loopback',
  education:
    '<span class="code">Queens University, Canada :</span><span class="timeline"> Bachelors of Applied Science in Computer Engineering',
  resume: "<a href='./Resume2.0.pdf' class='success link'>resume.pdf</a>",
  experience: 
  '<span class="code">TD Bank</span><span class="timeline"> (Sept 2023 - Current)</span><span class="code">Accenture AI</span><span class="timeline"> (Feb 2022 - Sept 2023)</span><span class="jobtitle"> Team Lead, Data Engineering</span> <br> <span class="code">Rogers Communications</span><span class="timeline"> (June 2018 - Feb 2022)</span><span class="jobtitle"> Sr. Cloud Data Developer</span> <br> <span class="code">Brookfield Renewables (Queens TEAM)</span><span class="timeline"> (Sept 2017 - May 2018)</span><span class="jobtitle"> Data Analyst</span> <br> <span class="code">Advanced Micro Devices (AMD)</span><span class="timeline"> (May 2016 - Aug 2018)</span><span class="jobtitle"> System Software Enigneer</span>',
  contact:
    "You can contact me on any of following links:<br><a href='https://www.facebook.com/usmanMUUM' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/musmanm95/' class='success link'>Instagram</a>, <a href='https://www.linkedin.com/in/muhammadmajeed/' class='success link'>LinkedIn</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
