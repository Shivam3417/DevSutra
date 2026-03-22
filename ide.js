require.config({
    paths: {
        'vs': 'https://unpkg.com/monaco-editor@0.45.0/min/vs'
    }
});

let editor;
let files = {};
let models = {};
let currentFile = null;

require(['vs/editor/editor.main'], function () {

    editor = monaco.editor.create(document.getElementById("editor"), {
        value: "",
        language: "html",
        theme: "vs-dark",
        automaticLayout: true,

        fontSize: 14,
        minimap: { enabled: true },
        lineNumbers: "on",
        scrollBeyondLastLine: false,
        cursorBlinking: "smooth",

        autoClosingBrackets: "always",
        autoClosingQuotes: "always",

        quickSuggestions: true,
        suggestOnTriggerCharacters: true
    });

    /* EMmet Support */
    if (window.emmetMonaco) {
        emmetMonaco.emmetHTML(monaco);
        emmetMonaco.emmetCSS(monaco);
    }

    /* Default File */

    createFile("index.html", `<!DOCTYPE html>
<html>
<head>
<title>DevSutra</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>Hello DevSutra 🚀</h1>

<script src="script.js"></script>

</body>
</html>`);

});


/* LANGUAGE DETECT */

function getLanguage(file){

    if(file.endsWith(".html")) return "html";

    if(file.endsWith(".css")) return "css";

    if(file.endsWith(".js")) return "javascript";

    return "plaintext";
}


/* FILE ICON */

function getIcon(file){

    if(file.endsWith(".html")) return "🌐";

    if(file.endsWith(".css")) return "🎨";

    if(file.endsWith(".js")) return "⚡";

    return "📄";
}


/* CREATE FILE */

function createFile(name, content=""){

    const lang = getLanguage(name);

    const model = monaco.editor.createModel(content, lang);

    files[name] = content;
    models[name] = model;

    currentFile = name;

    editor.setModel(model);

    updateSidebar();
}


/* SIDEBAR UPDATE */

function updateSidebar(){

    const list = document.getElementById("fileList");

    list.innerHTML = "";

    Object.keys(models).forEach(file => {

        const li = document.createElement("li");

        li.className = file === currentFile ? "active" : "";

        const span = document.createElement("span");

        span.innerHTML = getIcon(file) + " " + file;

        span.onclick = () => {

            files[currentFile] = editor.getValue();

            currentFile = file;

            editor.setModel(models[file]);

            updateSidebar();

        };

        const del = document.createElement("span");

        del.textContent = "❌";

        del.className = "delete-btn";

        del.onclick = (e) => {

            e.stopPropagation();

            if(confirm("Delete " + file + " ?")){

                models[file].dispose();

                delete models[file];
                delete files[file];

                const remaining = Object.keys(models);

                if(remaining.length){

                    currentFile = remaining[0];

                    editor.setModel(models[currentFile]);

                } else {

                    editor.setValue("");

                }

                updateSidebar();

            }

        };

        li.appendChild(span);
        li.appendChild(del);

        list.appendChild(li);

    });

}


/* AUTO SAVE */

setInterval(()=>{

    if(currentFile){

        files[currentFile] = editor.getValue();

    }

},500);


/* NEW FILE */

document.getElementById("newFileBtn").addEventListener("click",()=>{

    const name = prompt("Enter file name (example: style.css)");

    if(name){

        createFile(name,"");

    }

});


/* RUN PROJECT */

document.getElementById("runBtn").addEventListener("click",()=>{

    if(!files["index.html"]){

        alert("Create index.html");

        return;

    }

    let htmlContent = files["index.html"];

    /* Inject CSS */

    Object.keys(files).forEach(file=>{

        if(file.endsWith(".css")){

            const cssTag = `<style>${files[file]}</style>`;

            htmlContent = htmlContent.replace(

                new RegExp(`<link[^>]*${file}[^>]*>`,"g"),

                cssTag

            );

        }

    });


    /* Inject JS */

    Object.keys(files).forEach(file=>{

        if(file.endsWith(".js")){

            const jsTag = `<script>${files[file]}<\/script>`;

            htmlContent = htmlContent.replace(

                new RegExp(`<script[^>]*${file}[^>]*><\/script>`,"g"),

                jsTag

            );

        }

    });

    const iframe = document.getElementById("preview");

    iframe.srcdoc = htmlContent;

});

/* DRAG RESIZE PANELS */

const dragbar = document.getElementById("dragbar");

const sidebar = document.querySelector(".sidebar");

dragbar.addEventListener("mousedown", function(){

    document.addEventListener("mousemove", resize);

    document.addEventListener("mouseup", stopResize);

});

function resize(e){

    sidebar.style.width = e.clientX + "px";

}

function stopResize(){

    document.removeEventListener("mousemove", resize);

}

/* FULLSCREEN PREVIEW */

document.getElementById("fullscreenBtn").addEventListener("click",()=>{

const iframe = document.getElementById("preview");

if(!document.fullscreenElement){

iframe.requestFullscreen();

}else{

document.exitFullscreen();

}

});