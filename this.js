const me = {
    name: {
      first: "Brian",
      last: "Holt"
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA"
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    }
  };
  
  console.log(me.getAddress()); 



  var workshop = {
    teacher : "Kyle",
    ask(question){
      console.log(this.teacher, question)
    }
  };

  workshop.ask("What is implicit binding"); //This is an implicit binding of
  //the workshop object as the this keyword

  function ask(question){
    console.log(this.teacher, question); //this context is gonna be entirely 
    //determined by how we call it
  }

  function otherClass(){
    var myContext = {
      teacher : "Susy"
    };
    ask.call(myContext, "Why"); //with call we are invoking the ask function and
    //using the mycontext object as the this keyword (Explicit binding)
  }


  otherClass();