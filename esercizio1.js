class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  greet = function () {
    const presentation =
      "Ciao, io mi chiamo " +
      this.firstName +
      " " +
      this.lastName +
      " ho " +
      this.age +
      " e vengo da " +
      this.location;
    return presentation;
  };

  confronto = function (y) {
    if (this.age > y.age) {
      console.log(this.firstName, "è più vecchio di", y.firstName);
    } else if (y.age > this.age) {
      console.log(y.firstName, "è più vecchio di", this.firstName);
    }
  };
}

const utente1 = new User("Marco", "Zagaria", 28, "Andria");
console.log(utente1);
console.log(utente1.greet());
const utente2 = new User("Aldo", "Baglio", 54, "Milano");
console.log(utente2);
console.log(utente2.greet());

console.log(utente2.confronto(utente1));
