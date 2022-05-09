document.write(`<nav class="navbar is-black" role="navigation" aria-label="main navigation">
<div class="navbar-brand">
    <div class="navbar-item">
        <img src="OneShotSneakersDark.png"></img>
    </div>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>
</div>
<div class="navbar-menu" id="navMenu">
    <div class="navbar-end">
        <a class="navbar-item" href="index.html">
            Home
        </a>
        <a class="navbar-item" href="https://www.kickstarter.com" target="_blank">
            KickStarter
        </a>
        <div class="navbar-item">
            <button class=" button is-primary" onclick="location.href='login.html'">Login</button>
        </div>
    </div>
</div>
</nav>`)

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });
