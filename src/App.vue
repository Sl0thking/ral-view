<template>
  <div id="app">
    <h1> RedditAnimeList </h1>
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="w-50" align="left">
            <b-nav-item active to="/animes">Anime</b-nav-item>
            <b-nav-item disabled="" to="/mangas">Manga</b-nav-item>
            <b-nav-item disabled="" to="/characters"> Character </b-nav-item>
            <b-nav-item disabled="" to="/users"> Users </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="w-50 ml-auto" align="right">
            <b-nav-form>
              <b-form-input
              size="sm" class="mr-sm-2" placeholder="Search for ListItem (Anime/Manga/Char)">
              </b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
    <div class="mt-4 px-2 py-4" style="background-color: #007bff;">
    Last Data Fetch: 24.05.2021 - 14:00 | <a href="/about">FAQ</a>
    </div>
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

#app h1, #app h2 {
  font-family: 'Reggae One';
  margin-top: 45px;
  margin-bottom: 45px;
}

.nav-item a.nav-link {
    font-family: 'Reggae One';
    font-size: 1.3em;
    margin-right: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
