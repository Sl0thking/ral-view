<template>
  <div id="app">
    <h1> RedditAnimeList </h1>
    <div id="nav">
      <b-navbar type="dark" variant="primary">
        <b-navbar-nav>
          <b-nav-item to="/">Anime</b-nav-item>
          <b-nav-item to="/about">Characters</b-nav-item>
          <b-nav-item href="#"> - </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 15px;
  margin-right: 15px;
}

h1 {
  font-family: 'Reggae One';
  margin-top: 25px;
  margin-bottom: 25px;
}

.nav-item a.nav-link {
    font-family: 'Reggae One';
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
