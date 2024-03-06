import PropsPassing from "./components/PropsPassing";

const App2 = () => {
  // THis is an Object
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
    hobbies: ["Reading", "Cooking", "Hiking"],
    introduce: function () {
      console.log(
        `Hi, I'm ${this.firstName} ${this.lastName}. I'm ${this.age} years old and I'm a ${this.gender}.`
      );
    },
    addHobby: function (hobby) {
      this.hobbies.push(hobby);
    },
    listHobbies: function () {
      console.log(`${this.firstName}'s Hobbies:`);
      this.hobbies.forEach((hobby) => {
        console.log(`- ${hobby}`);
      });
    },
  };
  const BtnCheck = () => {
    alert("This is button check");
  };

  return (
    <div>
      <PropsPassing
        //   General Data
        title="Passing Props"
        description="In this way we can pass a props to a child"
        //   {/* Passing an Object */}
        personsDetails={person}
        personsDetails2={person.introduce}
        BtnCheck={BtnCheck}
      />
    </div>
  );
};

export default App2;
