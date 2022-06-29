const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="./Images/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formal</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>

            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formal</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, alias illo id eos libero
        molestiae exercitationem fugit veniam maiores hic, laudantium cum beatae? Modi, fugiat sapiente eligendi
        similique accusamus maiores ipsa, iusto qui, accusantium harum exercitationem sequi. Deleniti nemo maiores
        eos nobis eius rerum? Magnam distinctio vel nostrum aut. Eaque sequi sunt laudantium? Perspiciatis
        consectetur nam tempora voluptatum accusantium fugiat tempore cumque quia. Amet temporibus ex id, beatae
        dicta iste consequuntur vel aspernatur. Necessitatibus ab autem hic id eos cum adipisci tenetur tempore
        commodi facilis ipsum inventore dignissimos eligendi optio, dolor quam fugiat in aliquid voluptatem fuga
        veniam nam nulla.</p>
    <p class="info">support emails - help@clothing.com,
        customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">created by Shashank Talwar</p>
    `;
}

createFooter();