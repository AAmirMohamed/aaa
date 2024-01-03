const users = JSON.parse(localStorage.getItem('users')) || [
    
  {
    username: "user1",
    pass: "pass123",
    age: 25,
    gender: "male",
    phone: "123-456-7890"
  },
  {
    username: "user2",
    pass: "abc456",
    age: 30,
    gender: "female",
    phone: "987-654-3210"
  }  
];

  function login() {
    const nameInput = document.getElementById('loginName');
    const passInput = document.getElementById('loginPass');
    const nameValue = nameInput.value.trim();
    const passValue = passInput.value.trim();

    console.log("Entered name:", nameValue);
    console.log("Entered password:", passValue);

    const userFound = users.find(user => user.name === nameValue && user.password === passValue);

    console.log("User found:", userFound);

    if (userFound) {
      alert('Login successful!');
      window.location.href = 'Quiz.html';
    } else {
      alert('Login failed. Incorrect name or password.');
    }
  }

  function addUser() {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let Conferpassword = document.getElementById('cpassword').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let phone = document.getElementById('phone').value;

    if (name !== '' && password !== '') {
      if (password === Conferpassword) {
        let user = {
          name: name,
          password: password,
          gender: gender,
          phone: phone
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users)); // Store users in local storage
        alert('Signup successful!');
        console.log(users);
      } else {
        alert('Password and confirm password do not match');
      }
    } else {
      alert('Please enter Data!');
    }
  }

  function update() {
    const username = document.getElementById('forgetName').value;
    const newPassword = document.getElementById('forgetNewPass').value;

    const userToUpdate = users.find(user => user.name === username);

    if (userToUpdate) {
      userToUpdate.password = newPassword;

      localStorage.setItem('users', JSON.stringify(users)); // Update users in local storage
      alert('Password updated successfully!');
    } else {
      alert('Username not found!');
    }
  }
  