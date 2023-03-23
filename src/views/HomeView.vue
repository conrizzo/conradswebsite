


<template>
  <div class="container custom-background-home-page">
    <!-- Main area -->
    <div>
      <h1>Welcome to Conrad's Website</h1>
      <p class="homeview">
        Check out the
        <router-link style="text-decoration: none" to="/projects/cowculator"
          >Cowculator</router-link
        >, be sure to press the Moo button.
      </p>

      <pre v-bind:class="'language-python'" class="hhh">
<code>DRINK_COFFEE = True
website_finished = False
while website_finished is False:
 print("Is it true that I am drinking coffee? " + "It is " + str(DRINK_COFFEE).lower() + ".")</code></pre>
      <p class="homeview">
        Python doesn't officially syntactically have constants so it's
        capitalized to show it should not be modified "DRINK_COFFEE=True", but
        the code above emphasizes that work continues, and the coffee drinking
        will always continue.
      </p>
      <pre v-bind:class="'language-python'" class="hhh">
<code># Defines a Python function to describe coffee
def describe_coffee(roast_level, origin, flavor_notes):
    """
    This function describes a cup of coffee based on its roast level, origin, and flavor notes.

    :param roast_level: The roast level of the coffee, e.g. light, medium, dark.
    :param origin: The origin of the coffee, e.g. Ethiopia, Colombia, Kenya.
    :param flavor_notes: The flavor notes of the coffee, e.g. chocolate, caramel, citrus.
    :return: A string describing the coffee.
    """
    return f"This {roast_level}-roasted coffee from {origin} has flavor notes of {flavor_notes}."

# Example usage of the function
coffee_description = describe_coffee("medium", "Colombia", "chocolate and caramel")
print(coffee_description)</code></pre>
    </div>

    <!-- Aside area -->
    <AsideContent class="aside"> </AsideContent>
  </div>
  <FirstFooter></FirstFooter>
</template>



<script>
import Prism from "prismjs";
import AsideContent from "@/components/FirstAside.vue";
import FirstFooter from "@/components/FirstFooter.vue";

export default {
  name: "HomeView",
  components: {
    AsideContent,
    FirstFooter,
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>



<style scoped>

h1 {
  text-align: center;
  padding-top: 0.25em;
}
p.homeview {
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 30px;
  margin-right: 20px;
  color: #000000;
  background: #fff;
  border-radius: 5px;
}



.hhh {
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 14px;
  margin-left: 30px;
  margin-right: 20px;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  border-radius: 5px;
}
.custom-background-home-page {
  background-color: rgb(158, 158, 158);
}

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 900px){
  p.homeview{
    margin-left: 20px;
  }
  .hhh{
    margin-left: 20px;
}
}
</style>