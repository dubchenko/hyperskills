<template>
<div id="app">
  <router-view />
</div>
</template>

<style>
@font-face {
  font-family: 'Formular';
  src: url('assets/fonts/Formular-Bold.eot');
  src: url('assets/fonts/Formular-Bold.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/Formular-Bold.woff2') format('woff2'),
    url('assets/fonts/Formular-Bold.woff') format('woff'),
    url('assets/fonts/Formular-Bold.ttf') format('truetype'),
    url('assets/fonts/Formular-Bold.svg#Formular-Bold') format('svg');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Formular';
  src: url('assets/fonts/Formular.eot');
  src: url('assets/fonts/Formular.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/Formular.woff2') format('woff2'),
    url('assets/fonts/Formular.woff') format('woff'),
    url('assets/fonts/Formular.ttf') format('truetype'),
    url('assets/fonts/Formular.svg#Formular') format('svg');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: 'Formular', Helvetica, Arial, sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  color: #000000;
  background-color: #303142;
}

h1, h3, h4, p {
  margin: 0 !important;
}

h1, h3, h4 {
  font-weight: bold !important;
}

h1 {
  font-size: 32px !important;
}

h3 {
  font-size: 19px !important;
}

h4 {
  font-size: 16px !important;
}

.step_title {
    text-align: center;
}
</style>
