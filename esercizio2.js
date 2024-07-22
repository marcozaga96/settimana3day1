class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  trueOrFalse = function (Pet) {
    if (this.ownerName === Pet.ownerName) {
      return true;
    } else return false;
  };
}
const animali = [];
document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const proprietario = document.getElementById("proprietario").value;
    const specie = document.getElementById("specie").value;
    const razza = document.getElementById("razza").value;
    const element = new Pet(nome, proprietario, specie, razza);
    animali.push(element);
    console.log(animali);
    const list = document.getElementById("list");
    list.innerHTML = " ";
    for (let index = 0; index < animali.length; index++) {
      const newLi = document.createElement("li");
      newLi.innerText =
        animali[index].petName +
        " " +
        animali[index].ownerName +
        " " +
        animali[index].species +
        " " +
        animali[index].breed +
        " " +
        animali[index].trueOrFalse(Pet);
      newLi.classList.add("list-group-item");
      list.appendChild(newLi);
    }
    document.getElementsByTagName("form")[0].reset();
  });
