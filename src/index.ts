class Person {
  name: string;
  age: number;
  birthDate: string;
  constructor(name: string, age: number, birthDate: string) {
    this.name = name;
    this.age = age;
    this.birthDate = birthDate;
  }

  getUserAge() {
    return this.age;
  }

  getBirthDate() {
    return this.birthDate;
  }
}

class Father extends Person {
  jobs: string;
  constructor(name: string, age: number, birthDate: string, jobs: string) {
    super(name, age, birthDate);
    this.jobs = jobs;
  }
}

class Children extends Person {}

const person1 = new Person("Phuong", 25, "5/8/1997");
const person2 = new Person("A", 30, "20/10/1990");

const father1 = new Father("Phuong", 25, "5/8/1997", "IT");
