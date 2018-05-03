<template>
  <header class='navbar is-transparent is-fixed-top' role='navigation'>
    <div class='navbar-brand'>
      <router-link to='/' class='navbar-item'>Do What Works</router-link>
      <a role="button" class="navbar-burger" data-target="side-menu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="side-menu" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item ">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search">
            <span class="icon is-left">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  </header>
</template>
