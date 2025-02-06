<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D&D Blog & Discussion</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background: #333;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        nav ul {
            list-style: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
        }
        section {
            padding: 20px;
            background: white;
            margin: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background: #d9534f;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        textarea {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            padding: 10px;
            background: #5bc0de;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
        #comments {
            margin-top: 20px;
        }
        .comment {
            background: #eee;
            padding: 10px;
            margin-top: 5px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Dungeons & Dragons Blog</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#discussion">Discussion</a></li>
                <li><a href="#kickstarter">Kickstarter</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="home">
        <h2>Latest Blog Posts</h2>
        <div class="blog-posts">
            <article>
                <h3>Creating the Ultimate Dungeon</h3>
                <p>Tips on how to craft an immersive and challenging dungeon for your players.</p>
            </article>
            <article>
                <h3>Best Character Builds</h3>
                <p>Breakdown of powerful and fun character builds for different playstyles.</p>
            </article>
        </div>
    </section>
    
    <section id="discussion">
        <h2>Discussion Board</h2>
        <div id="comments"></div>
        <textarea id="commentInput" placeholder="Share your thoughts..."></textarea>
        <button onclick="addComment()">Post</button>
    </section>
    
    <section id="kickstarter">
        <h2>Support Our Kickstarter!</h2>
        <p>We are launching an exciting new project for D&D enthusiasts. Help us bring it to life by supporting our Kickstarter campaign!</p>
        <a href="YOUR_KICKSTARTER_LINK" target="_blank" class="btn">Back Our Project</a>
    </section>
    
    <script>
        function addComment() {
            let commentInput = document.getElementById('commentInput');
            let commentText = commentInput.value.trim();
            if (commentText === "") return;
            
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.textContent = commentText;
            
            document.getElementById('comments').appendChild(commentDiv);
            commentInput.value = "";
        }
    </script>
</body>
</html>
