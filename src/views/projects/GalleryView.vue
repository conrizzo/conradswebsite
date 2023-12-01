<template>
    
    <main id="body" class="testimonial-grid">
    <article class="testimonial  flow bg-primary-400 quote text-neutral-100">
      <div class="flex">
        <div>
            <img src="@/images/Kohlenmeise.jpg" alt="Kohlmeise picture">
        </div>
        <div>
          <h2 class="name">Bird 1</h2>
          <p class="position">Bird Academy</p>
        </div>
      </div>
      <p>
        I received a job offer mid-course, and the subjects I learned were current, if not more so,
        in the company I joined. I honestly feel I got every penny’s worth.
      </p>
      <p>
        “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
        transition and have heard some people who had an amazing experience here. I signed up
        for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
        The next 12 weeks was the best - and most grueling - time of my life. Since completing
        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
      </p>
    </article>
    <article class="testimonial flow bg-secondary-400 text-neutral-100">
      <div class="flex">
        <div>
            <img src="@/images/Kohlenmeise.jpg" alt="Kohlmeise picture">
        </div>
        <div>
          <h2 class="name">Bird 2</h2>
          <p class="position">Verified Graduate</p>
        </div>
      </div>
      <p>
        The team was very supportive and kept me motivated
      </p>
      <p>
        “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
        for a big company. This was one of the best investments I’ve made in myself. ”
      </p>
    </article>
    <article class="testimonial flow bg-neutral-100 text-secondary-400">
      <div class="flex">
        <div>
            <img src="@/images/Kohlenmeise.jpg" alt="Kohlmeise picture">
        </div>
        <div>
          <h2 class="name">Bird 3</h2>
          <p class="position">Verified Graduate</p>
        </div>
      </div>
      <p>
        An overall wonderful and rewarding experience</p>
      <p>
        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
        while doing something I love. ”
      </p>
    </article>
    <article class="testimonial  flow bg-secondary-500 text-neutral-100">
      <div class="flex">
        <div>
          <img class="border-primary-400" src="" alt="">
        </div>
        <div>
          <h2 class="name">Bird 4</h2>
          <p class="position">Verified Graduate</p>
        </div>
      </div>
      <p>
        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
        learning from their experiences was easy.
      </p>
      <p>
        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
        gave me the confidence necessary to be able to go out in the world and present myself as a capable
        junior developer. The standard is above the rest. You will get the personal attention you need from
        an incredible community of smart and amazing people. ”
      </p>
    </article>
    <article class="testimonial flow bg-neutral-100 text-secondary-400">
      <div class="flex">
        <div>
          <img src="@/images/Kohlenmeise.jpg" alt="Kohlmeise picture">
        </div>
        <div>
          <h2 class="name">Bird 5</h2>
          <p class="position">Verified Graduate</p>
        </div>
      </div>
      <p>
        Such a life-changing experience. Highly recommended!
      </p>
      <p>
        “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
        100% recommend! ”
      </p>
    </article>
    <h1 style="color: red;"> Using this to format things - and set up code </h1>
  </main>
</template>
  



  <script>
  export default {
    // Component logic goes here
    date() {
      return {
       
        birdPicture: require('@/images/Kohlenmeise.jpg'),
      }
    },
  
  }
  </script>
  
  <style scoped>

  /* from https://github.com/kevin-powell/learn-grid-the-easy-way/blob/main/style.css */

:root {
  --clr-primary-400: 263 55% 52%;
  --clr-secondary-400: 217 19% 35%;
  --clr-secondary-500: 219 29% 14%;
  --clr-neutral-100: 0 0% 100%;
  --clr-neutral-200: 210 46% 95%;
  --clr-neutral-300: 0 0% 81%;

  --ff-primary: "Barlow Semi Condensed", sans-serif;

  --fw-400: 500;
  --fw-700: 600;

  --fs-300: 0.6875rem;
  --fs-400: 0.8125rem;
  --fs-500: 1.25rem;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body {
  display: grid;
  place-content: center;
  min-height: 100vh;

  font-family: var(--ff-primary);
  font-weight: var(--fw-400);

  background-color: hsl(var(--clr-neutral-200));
}

h1,
h2,
h3 {
  font-weight: var(--fw-700);
}

/* utilities */
.flex {
  display: flex;
  gap: var(--gap, 1rem);
}

.flow > *:where(:not(:first-child)) {
  margin-top: var(--flow-spacer, 1em);
}

.bg-primary-400 {
  background: hsl(var(--clr-primary-400));
}
.bg-secondary-400 {
  background: hsl(var(--clr-secondary-400));
}
.bg-secondary-500 {
  background: hsl(var(--clr-secondary-500));
}

.bg-neutral-100 {
  background: hsl(var(--clr-neutral-100));
}

.text-neutral-100 {
  color: hsl(var(--clr-neutral-100));
}
.text-secondary-400 {
  color: hsl(var(--clr-secondary-400));
}
.border-primary-400 {
  border: 2px solid #a775f1;
}

/* components */
.testimonial-grid {
  display: grid;
  gap: 0.5rem;
  grid-auto-columns: 1fr;
  grid-template-areas:
   'one'
   'two'
   'three'
   'four'
   'five';

  padding-block: 2rem;
  width: min(95%, 70rem);
  margin-inline: auto;
}

.testimonial {
  font-size: var(--fs-400);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
}

.testimonial:nth-child(1) {
  grid-area: one;
}
.testimonial:nth-child(2) {
  grid-area: two;
}
.testimonial:nth-child(3) {
  grid-area: three;
}
.testimonial:nth-child(4) {
  grid-area: four;
}
.testimonial:nth-child(5) {
  grid-area: five;
}

@media screen and (min-width: 33em) {
  .testimonial-grid {
      grid-template-areas:
      "one one"
      "two three"
      "four five";
      
      
  }
}

@media screen and (min-width: 38em) {
  .testimonial-grid {
    grid-template-areas:
     'one one'
     'two three'
     'two three'
     'four five'
     'four five';
  }
}

@media screen and (min-width: 54em) {
  .testimonial-grid {
      grid-template-areas:
      "one one two two"
      "three three four four"
      "five five five five";
  }
}

@media screen and (min-width: 75em) {
  .testimonial-grid {
      grid-template-areas:
      "one two three four"
      "five five five five";
  }
}


.testimonial.quote {
  /* background-image: url("./images/bg-pattern-quotation.svg"); */
  background-repeat: no-repeat;
  background-position: top right 10%;
}

.testimonial img {
  width: 1.75rem;
  aspect-ratio: 1;
  border-radius: 50%;
}

.testimonial .name {
  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: 1;
}

.testimonial .position {
  font-size: var(--fs-300);
  opacity: 0.5;
}

.testimonial > p:first-of-type {
  font-size: var(--fs-500);
  line-height: 1.2;
}

.testimonial > p:last-of-type {
  opacity: 0.7;
}
  </style>