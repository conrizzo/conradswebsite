<template>
  <div>
    <h1>{{ CoffeeTitle }}</h1>
    <p>{{ CoffeeDescription }}</p>
    <!-- PROJECT 2 -->

    <pre v-bind:class="'language-python'" class="code-format">
    <code>DRINK_COFFEE = True
    website_finished = False
    while website_finished is False:
    print("Is it true that I am drinking coffee? " + "It is " + str(DRINK_COFFEE).lower() + ".")</code></pre>

    <p class="homeview paragraph-text">
      Python doesn't officially syntactically have constants so it's capitalized
      to show it should not be modified "DRINK_COFFEE=True", but the code above
      emphasizes that work continues, and the coffee drinking will always
      continue.
    </p>

    <pre v-bind:class="'language-python'" class="code-format">
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
</template>


<script>
import Prism from "prismjs";

export default {
  name: "CoffeeFunction",
  components: Prism,
  props: {
    CoffeeTitle: {
      type: String,
      required: true,
    },
    CoffeeDescription: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
p.homeview {
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: 1em;
  margin-right: 1em;
  color: #000000;
  background: #fff;
  border-radius: 5px;
  font-size: 0.6em;
  font-weight: normal;
  margin-bottom: 1em;
  margin-top: 1em;
}

.code-format {
  margin-top: 0.25em;
  font-weight: normal;
  font-size: 0.6em;
  page-break-inside: avoid;
  font-family: monospace;

  margin-left: 1.2em;
  margin-right: 1.2em;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  border-radius: 5px;
}

/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 1800px) {
  p.homeview {
    margin-left: 20px;
  }

  .code-format {
    margin-left: 2em;
    font-size: 0.4em;
    margin-right: 2em;

  }

  figure {

    margin-left: 1.2em;
    margin-right: 1.2em;
    height: auto;

  }
  .figure-stuff> div {
    flex-direction: column;
  }
  
  .figure-stuff figure {
    margin-top: 0.5em;
    margin-right: 0.2em;
    width: auto;
  }
}
</style>