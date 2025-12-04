<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Feedback Received - Aloe's Anime Hub</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Confirmation page for feedback submitted to Aloe's Anime Hub.">
    <link rel="stylesheet" href="final.css">
</head>
<body class="confirm-page">
<header>
    <h1>Aloe's Anime Hub</h1>
    <p>Feedback Confirmation</p>
    <nav>
        <ul>
            <li><a href="final.html">Home</a></li>
            <li><a href="recommend.html">Top Anime</a></li>
            <li><a href="characters.html">Character Spotlights</a></li>
            <li><a href="genres.html">Genres</a></li>
            <li><a href="culture.html">Art & Fandom</a></li>
            <li><a href="contact.html" class="active">Contact & Feedback</a></li>
        </ul>
    </nav>
</header>

<main>
    <section>
        <h2>Thank You for Your Feedback!</h2>
        <p>Here is the information you submitted:</p>
        <ul>
            <li><strong>Full Name:</strong> <?php echo htmlspecialchars($_POST["fullname"] ?? ""); ?></li>
            <li><strong>Email Address:</strong> <?php echo htmlspecialchars($_POST["email"] ?? ""); ?></li>
            <li><strong>Favorite Anime:</strong> <?php echo htmlspecialchars($_POST["favoriteAnime"] ?? ""); ?></li>
            <li><strong>Favorite Genre:</strong> <?php echo htmlspecialchars($_POST["favoriteGenre"] ?? ""); ?></li>
            <li><strong>Years Watching Anime:</strong> <?php echo htmlspecialchars($_POST["yearsWatching"] ?? ""); ?></li>
            <li><strong>Comments:</strong> <?php echo nl2br(htmlspecialchars($_POST["comments"] ?? "")); ?></li>
        </ul>
        <p>
            You can now return to the rest of the site and explore more anime content.
        </p>
        <p><a href="final.html">Return to Home Page</a></p>
    </section>
</main>

<footer>
    <p>&copy; 2025 Aloe's Anime Hub | Final Project</p>
</footer>
</body>
</html>
