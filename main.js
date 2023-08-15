(function () {
    var getFullName;
    var getAge;
    var addAge;
    function Person(name,lastName,age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.getFullName = function getFullName() {
            return this.name + ' '+ this.lastName
        };
        this.getAge = function getAge() {
            return this.age;
        }
        this.addAge = function addAge(ano) {
          return this.ano + this.age
        }
    }

    var Ana = new Person("Ana","Souza",20);
    console.log(Ana)
    console.log(Ana.getFullName())
    console.log('A' + ' ' + Ana.getFullName() +' tem' +  ' ' + Ana.getAge() + ' '+'anos')

    console.log(Ana.this.addAge(2))
})()
