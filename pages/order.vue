<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-[#1A1A1A] font-extrabold">My Shopping Cart</h1>
    <div class="flex flex-row">
      <div class="">
        <div class="page">
          <div class="page__demo">
            <div class="main-container page__container">
              <table class="table">
                <thead class="table__thead">
                  <tr class="table__head">
                    <th class="table__th">Features</th>
                    <th class="table__th">Silver Package</th>
                    <th class="table__th">Gold Package</th>
                    <th class="table__th">Platinum Package</th>
                  </tr>
                </thead>
                <tbody class="table__tbody">
                  <tr class="table__tr">
                    <td class="table__td table__mobile-title">
                      <span>Wedding day coverage</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Silver Package</span>
                      <span class="table__value">6 hours</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Gold Package</span>
                      <span class="table__value">8 hours</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Platinum Package</span>
                      <span class="table__value">10 hours</span>
                    </td>
                  </tr>
                  <tr class="table__tr">
                    <td class="table__td table__mobile-title">
                      <span>Post production</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Silver Package</span>
                      <span class="table__value">2 weeks</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Gold Package</span>
                      <span class="table__value">3 weeks</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Platinum Package</span>
                      <span class="table__value">4 weeks</span>
                    </td>
                  </tr>
                  <tr class="table__tr">
                    <td class="table__td table__mobile-title">
                      <span>USB drive & copyrights of photographs</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Silver Package</span>
                      <span class="table__value">600 photos</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Gold Package</span>
                      <span class="table__value">700 photos</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Platinum Package</span>
                      <span class="table__value">800 photos</span>
                    </td>
                  </tr>
                  <tr class="table__tr">
                    <td class="table__td table__mobile-title">
                      <span>Viewing session (in 4k) with your wedding music and complimentary bubbly</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Silver Package</span>
                      <span class="table__value">Yes</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Gold Package</span>
                      <span class="table__value">Yes</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Platinum Package</span>
                      <span class="table__value">Yes</span>
                    </td>
                  </tr>
                  <tr class="table__tr">
                    <td class="table__td table__mobile-title">
                      <span>12×12 Acrylic storybook wedding album (with matching acrylic case)</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Silver Package</span>
                      <span class="table__value">No</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Gold Package</span>
                      <span class="table__value">Yes</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Platinum Package</span>
                      <span class="table__value">Yes</span>
                    </td>
                  </tr>
                  <tr class="table__tr">
                    <td class="table__td table__mobile-title">
                      <span>8×8 Acrylic parent albums</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Silver Package</span>
                      <span class="table__value">No</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Gold Package</span>
                      <span class="table__value">No</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Platinum Package</span>
                      <span class="table__value">Yes</span>
                    </td>
                  </tr>
                  <tr class="table__tr">
                    <td class="table__td table__mobile-title">
                      <span>Price</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Silver Package</span>
                      <span class="table__value">799$</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Gold Package</span>
                      <span class="table__value">1250$</span>
                    </td>
                    <td class="table__td">
                      <span class="table__mobile-caption">Platinum Package</span>
                      <span class="table__value">1850$</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* core styles for table */

table {
  border-collapse: collapse;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #ccc;
}

.table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  background-color: var(--tableBgColor, #fff);
  border-radius: 10px 10px 0 0;
}

.table__thead {
  background-color: #fff;
  color: #000;
  border-radius: 10px !important;

}

.table__mobile-caption {
  display: none;
}

.table__td,
.table__th {
  padding: var(--tableCellPadding, 20px);
  box-sizing: border-box;
}

@media screen and (min-width: 769px) {

  .table__tr:hover {
    background-color: var(--tableRowBgColorHover);
  }

  .table__td:first-child,
  .table__th:first-child {
    width: 30%;
    text-align: left;
  }

  .table__td,
  .table__th {
    text-align: center;
  }
}

@media screen and (max-width: 768px) {

  .table,
  .table__thead,
  .table__tbody,
  .table__tr {
    display: block;
  }

  .table__td {
    display: flex;
  }

  .table__head {
    display: none;
  }

  .table__mobile-title {
    background-color: var(--tableTitleBgColor);
    color: var(--tableTitleTextColor);
  }

  .table__td {
    border-bottom: 1px solid var(--tableSeparatorColor);
  }

  .table__td:last-of-type {
    border-bottom: none;
  }

  .table__mobile-caption,
  .table__value {
    display: block;
    width: 50%;
    box-sizing: border-box;
  }

  .table__mobile-caption {
    padding-right: 2%;
  }
}

/* demo styles for table */

.table {
  --tableCellPadding: 2rem;
  --tableTitleBgColor: #5668ca;
  --tableTitleTextColor: #fff;
  --tableRowBgColorHover: #f0f0f0;
  --tableSeparatorColor: #eee;
}

/*
* demo page
*/

@media screen and (min-width: 768px) {

  html {
    font-size: 62.5%;
  }
}

@media screen and (max-width: 767px) {

  html {
    font-size: 50%;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Open Sans", "Ubuntu", "Fira Sans", "Helvetica Neue", sans-serif;
  font-size: 1.4rem;
  background-color: #f0f0f0;
  color: #222;
  margin: 0;
  -webkit-overflow-scrolling: touch;
}

a {
  text-decoration: none;
  color: #5668ca;
}

a:hover,
a:focus {
  text-decoration: underline;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.page__demo {
  flex-grow: 1;
}

.main-container {
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1000px;

  margin-right: auto;
  margin-left: auto;
}

.page__container {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 1.4rem;
}

@media screen and (min-width: 641px) {

  .footer__container {
    display: flex;
    justify-content: space-between;
  }

  .melnik909 {
    margin-left: 2rem;
  }
}

@media screen and (max-width: 640px) {

  .melnik909 {
    display: none;
  }
}
</style>
