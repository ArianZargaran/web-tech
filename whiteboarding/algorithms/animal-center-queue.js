/**
 * This animal center has two types of animals: Cats and Dogs.
 * 
 * First animal that comes in, is the first one to be adopted. 
 * Follows the First-In/First-Out rule.
 * 
 * We need to have access to four different operations:
 * *** To add a new animal to the queue;
 * *** To get an animal out of the queue;
 * *** Get first Cat out the queue;
 * *** Get fist Dog out of the queue;
 */

function Animal(species, id) {
  /*
   * Determies if it's a cat or a dog
   * types: "Dog" | "Cat"
   */
  this.species = species;
  this.id = id;
  this.next = null;
}

class AnimalCenterQueue {
  constructor() {
    this.dogsHead = null;
    this.dogsTail = null;

    this.catsHead = null;
    this.catsTail = null;

    this.nodeId = 0;
  }

  addAnimal = (species) => {
    if(species !== "dog" && species !== "cat") {
      return new Error({ message: "Species not allowed in this farm" });
    }

    this.nodeId += 1;

    if(species === "dog") {
      let node = new Animal("dog", this.nodeId);

      this.dogsHead = this.dogsHead ?? node;
      if (!this.dogsTail) {
        this.dogsTail = node;
      } else {
        this.dogsTail.next = node;
        this.dogsTail = this.dogsTail.next;
      }
      return;
    }

    let node = new Animal("cat", this.nodeId);

    this.catsHead = this.catsHead ?? node;

    if (!this.catsTail) {
      this.catsTail = node;
    } else {
      this.catsTail.next = node;
      this.catsTail = this.catsTail.next;
    }
  }

  dequeueAnimal = () => {
    // Check if lists are empty
    if(this.catsHead === null && this.dogsHead === null) {
      return new Error({ message: "The queue is empty" });
    }

    if(this.catsHead === null) {
      this.dequeueFirstDog();
    }

    if(this.dogsHead === null) {
      this.dequeueFirstCat();
    }

    if(this.dogsHead.id < this.catsHead.id) {
      this.dequeueFirstDog();
    }

    this.dequeueFirstCat();
  }

  dequeueFirstCat = () => {
    if(this.catsHead === null) {
      return new Error({ message: "There's no cats in the list" });
    }
    
    let node = this.catsHead;
    this.catsHead = this.catsHead.next;
    return node;
  }

  dequeueFirstDog = () => {
    if(this.dogsHead === null) {
      return new Error({ message: "There's no dogs in the list" });
    }
    
    let node = this.dogHead;
    this.dogHead = this.dogHead.next;
    return node;
  }
}