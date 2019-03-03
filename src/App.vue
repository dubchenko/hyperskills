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

body {
  background-color: #303142 !important;
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
}

h1,
h3,
h4,
p {
  margin: 0 !important;
}

h1,
h3,
h4 {
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

.step-title {
  text-align: center;
  margin-bottom: 35px !important;
}

.icon {
  display: inline-block;
  height: 19px;
  width: 19px;
  cursor: pointer;
  background-position: center !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
}

.icon-disabled {
  opacity: .25;
}

.icon-minus {
  background: url("assets/sign_minus.svg");
}

.icon-plus {
  background: url("assets/sign_plus.svg");
}

.icon-loading {
  height: 17px;
  width: 17px;
  animation: spin 4s linear infinite;
  background: url("assets/loading.svg")
}

.btn-primary {
  background-color: #0E73EE !important;
  border-color: #0E73EE !important;
}

.btn-link {
  color: #0e73ee !important;
}

.btn-success {
  background-color: #1EB295 !important;
  border-color: #1EB295 !important;
}

@media screen and (max-width: 768px) {
  #app {
    padding: 10px;
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
