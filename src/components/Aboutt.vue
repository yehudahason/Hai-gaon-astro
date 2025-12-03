<template>
  <div class="about-container">
    <br />
    <p>מהדורת אינטרנט לספר סדר פתרון חלומות מרב האי גאון זצ"ל</p>
    <p>נעתק כלשונו ללא שינוי.</p>
    <p>נוסף פרק הרואה ממסכת ברכות לפירוש חלומות.</p>

    <br />

    <br />
    <form action="">
      <label for="google-search">חפש באתר ע"י גוגל </label>
      <input
        type="text"
        placeholder=" חפש .."
        id="google-search"
        v-model="search"
      />

      <button @click.prevent="handleclick()" id="btn">חפש</button>
    </form>
    <br />
    <br />
    <p>
      אפשר לצור קשר
      <a href="mailto:yehudah29@gmail.com">באימייל הזה.</a>
    </p>
    <br />
    <br />

    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="business" value="WY3UA9TDCE5KA" />
      <input type="hidden" name="no_recurring" value="1" />
      <input
        type="hidden"
        name="item_name"
        value="For pitron-halomot.org support"
      />
      <input type="hidden" name="currency_code" value="USD" />
      <label for="submit">
        <p>תרום לתמיכה באתר</p>
      </label>
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
    </form>
  </div>
  <br />

  <br />

  <div class="banner">
    <b>תפילה תשובה וצדקה</b>
    <b>מעבירים את רוע הגזירה</b>
    <b>-בראשית רבה</b>
  </div>
</template>

<script setup>
import { ref } from "vue";
const search = ref("");
const handleclick = (e) => {
  window.location.href = `https://www.google.com/search?q=site:https://pitron-halomot.org "${search.value}"`;
};
</script>

<style></style>
