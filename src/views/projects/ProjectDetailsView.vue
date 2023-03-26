<template>
  
  <p>Title: {{ title }}&nbsp; ID: {{ id }}&nbsp; Details: {{ details }}</p>

  <!-- This will show the project if the ID matches it in the Projects array -->
  <div class="router-link-style">
    <div v-show="id == 1">
      <router-link style="text-decoration: none" to="/projects/cowculator"
        >Cowculator</router-link
      >
    </div>
    <div v-show="id == 2">
      <router-link style="text-decoration: none" to="/projects/cowculator"
        >{{ title }}</router-link
      >
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
    <div v-show="id == 3">
      <router-link style="text-decoration: none" to="/projects/cowculator"
        >Project 3</router-link
      >
    </div>

    <FirstFooter></FirstFooter>
  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  
  props: ["title", "id", "details"],
  
  mounted() {
    Prism.highlightAll();
  }
};
</script>

<style scoped>
.router-link-style {
  font-size: 2em;
  font-weight: bold;
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
  font-size: 16px;
  font-weight: normal;
}
.hhh {
  font-weight: normal;
  font-size: 14px;
  page-break-inside: avoid;
  font-family: monospace;
  
  margin-left: 30px;
  margin-right: 20px;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  border-radius: 5px;
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