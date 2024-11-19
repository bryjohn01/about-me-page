<section>
    <h2>Greeting</h2>
    <p id="greeting"></p>
    <script>
        const hours = new Date().getHours();
        const greeting = (hours < 12) ? "Good morning!" : (hours < 18) ? "Good afternoon!" : "Good evening!";
        document.getElementById("greeting").textContent = greeting;
    </script>
</section>
