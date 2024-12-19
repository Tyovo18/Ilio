document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
        <div class="logo">
            <a href="index.html"><img src="img/logob.png" alt="Logo blanc"></a>
        </div>
        <div class="social">
            <div id="social-img">
                <a href=""><img src="img/linkedin.png" alt="LinkedIn"></a>
                <a href=""><img src="img/instagram.png" alt="Instagram"></a>
                <a href=""><img src="img/facebook.png" alt="Facebook"></a>
            </div>
            <div id="texte">
                <p>&copy; 2024 Ilio</p>
                <p>Conditions générales</p>
                <p>Mentions légales</p>
            </div>
        </div>
        <div class="contact">
            <p>10 rue de la lyre</p>
            <p>78200 Mantes la ville</p>
            <p>agence@ilio.fr</p>
        </div>
    `;
    document.getElementById('footer').innerHTML = footerHTML;
});