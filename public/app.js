
const greetings = [
    "Hello",
    "Hi",
    "Hey",
    "Yo",
    "What's up",
    "Howdy",
    "Good to see you",
    "Nice to meet you",
    "Pleased to meet you"
  ];
  
  const kindWords = ['Nice', 'Compassionate', 'Benevolent', 'Gentle', 'Considerate', 'Thoughtful', 'Caring', 'Sympathetic', 'Tender-hearted', 'Generous', 'Warm-hearted', 'Friendly', 'Courteous', 'Amiable', 'Affable', 'Gracious', 'Hospitable', 'Polite', 'Sweet-natured', 'Good-natured'];
  
  
  const fictionalCharacters = [
    "Harry Potter",
    "Katniss Everdeen",
    "Frodo Baggins",
    "Luke Skywalker",
    "Hermione Granger",
    "Bilbo Baggins",
    "Indiana Jones",
    "Willy Wonka",
    "Sherlock Holmes",
    "Atticus Finch",
    "Darth Vader",
    "Gandalf",
    "James Bond",
    "Mickey Mouse",
    "Spider-Man",
    "Mulan",
    "Black Panther",
    "Captain America",
    "Wonder Woman",
    "Iron Man"
  ];
  
  
  const places = [
    "Movie theater",
    "Shopping mall",
    "Amusement park",
    "Restaurant",
    "Library",
    "Art museum",
    "Concert venue",
    "Zoo",
    "Sporting event",
    "Park",
    "Coffee shop",
    "Airport",
    "Train station",
    "Gym",
    "Bar",
    "Bowling alley",
    "Arcade",
    "Pool hall",
    "Pizza Restaurant"
  ];
  
  console.log(greetings.length, kindWords.length,places.length, fictionalCharacters.length)
  
  function randomLocation(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  
  
  const app = Vue.createApp({
    
  
  
    data() {
      return {
        showMessage: true,
        message: randomLocation(greetings) + ", today " + randomLocation(fictionalCharacters) + " will be " + randomLocation(kindWords) + " to you in the " + randomLocation(places) + ".",
        items: [
          { greeting: randomLocation(greetings), person: randomLocation(fictionalCharacters)  },
        ],
        x: 0,
        y: 0,
        // Vue.set
  // Vue.set(vm.items, indexOfItem, newValue)
  // Array.prototype.splice
  // vm.items.splice(indexOfItem, 1, newValue)
      }
    },
    //template: '<div>{{ message }}</div>'
  
  
  
    methods: {
      updateItemField(){
        this.items[0].greeting = randomLocation(greetings)
        console.log(this.items[0].greeting = randomLocation(greetings))
      },
  
      toggleMessage(){
  
      this.showMessage = !this.showMessage
  
      },
  
      changeMessage(message){
      
        this.message = randomLocation(greetings) + ", today " + randomLocation(fictionalCharacters) + " will be " + randomLocation(kindWords) + " to you in the " + randomLocation(places) + "."
        
      },
      handleBoxEvent(event, data){
        console.log(event, event.type)
        if (data) {
          console.log(data)
        }
      },
      handleCursorMove(event){
        this.x = event.offsetX
        this.y = event.offsetY
      },
      handleCursorClick(event){
        this.x = event.offsetX
        this.y = event.offsetY
      }
  
    
  }
  })
  
  
  
  app.mount("#app")
  
  
  