<template>
  <div id="app">
    <h1> RedditAnimeList </h1>
    <div id="nav">
      <b-navbar type="dark" variant="primary">
        <b-navbar-nav class="w-50" align="left">
          <b-nav-item to="/anime">Anime</b-nav-item>
          <b-nav-item disabled="" to="/about">Manga</b-nav-item>
          <b-nav-item disabled="" to="/"> Character </b-nav-item>
          <b-nav-item disabled="" to="/"> Users </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="w-50 ml-auto" align="right">
          <b-nav-form>
            <b-form-input
            size="sm" class="mr-sm-2" placeholder="Search for ListItem (Anime/Manga/Char)">
            </b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
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

#app h1 {
  font-family: 'Reggae One';
  margin-top: 25px;
  margin-bottom: 45px;
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
