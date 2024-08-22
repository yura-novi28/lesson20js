const getS = (select) => document.querySelector(select);
const getAllS = (select) => document.querySelectorAll(select);

// regExp
const regLogin = /^[a-zA-Z]{4,16}$/;
const regPassword = /^[\w\-_.]{4,16}$/;
const regEmail = /^[\w\-.]{1,}@{1}[a-zA-Z]{1,}\.{1}[a-zA-Z]{2,}$/;

// input false and true
function colorInput(event){
    if(event.target.id === 'login' && regLogin.test(event.target.value)){
        event.target.style.border = '1px solid green'
    }
    else if(event.target.id === 'login' && regLogin.test(event.target.value) === false){
        event.target.style.border = '1px solid red'
    }
    if(event.target.id === 'password' && regPassword.test(event.target.value)){
        event.target.style.border = '1px solid green'
    }
    else if(event.target.id === 'password' && regPassword.test(event.target.value) === false){
        event.target.style.border = '1px solid red'
    }
    if(event.target.id === 'email' && regEmail.test(event.target.value)){
        event.target.style.border = '1px solid green'
    }
    else if(event.target.id === 'email' && regEmail.test(event.target.value) === false){
        event.target.style.border = '1px solid red'
    }
}
getAllS('.registration-form__input').forEach(input => input.addEventListener('blur', colorInput));

// render
function render(arr){
    getS('.users-container').innerHTML = '';
    arr.forEach((input, index) => {
        // create element
        let usersAccount = document.createElement('div');
        usersAccount.classList.add('users-account');
        getS('.users-container').append(usersAccount);
        let usersHeader = document.createElement('div');
        usersHeader.classList.add('container-header');
        usersAccount.append(usersHeader);
        let usersLattice = document.createElement('p');
        usersLattice.classList.add('users__text-lattice');
        usersLattice.textContent = index+1;
        usersHeader.append(usersLattice);
        let usersLogin = document.createElement('p');
        usersLogin.classList.add('users__text-login');
        usersLogin.textContent = input.login;
        usersHeader.append(usersLogin);
        let usersPassword = document.createElement('p');
        usersPassword.classList.add('users__text-password');
        usersPassword.textContent = input.password;
        usersHeader.append(usersPassword);
        let usersEmail = document.createElement('p');
        usersEmail.classList.add('users__text-email');
        usersEmail.textContent = input.email;
        usersHeader.append(usersEmail);
        let usersButtonEdit = document.createElement('button');
        usersButtonEdit.classList.add('users__button-edit');
        usersButtonEdit.textContent = `Edit`;
        usersHeader.append(usersButtonEdit);
        let usersButtonDelete = document.createElement('button');
        usersButtonDelete.classList.add('users__button-delete');
        usersButtonDelete.textContent = `Delete`;
        usersHeader.append(usersButtonDelete);
    })
}

// addUser
let userValueArr = [];
function addUser(event){
    event.preventDefault();
    let userLogin = getS('#login').value;
    let userPassword = getS('#password').value;
    let userEmail = getS('#email').value;
    // regExp true and false
    if(regLogin.test(userLogin) && regPassword.test(userPassword) && regEmail.test(userEmail)){
        let userObject = {};
        userObject.login = userLogin;
        userObject.password = userPassword;
        userObject.email = userEmail;
        userValueArr.push(userObject);
        // clear forms
        getS('#login').value = '';
        getS('#password').value = '';
        getS('#email').value = '';
        getS('#login').style.border = '1px solid gray';
        getS('#password').style.border = '1px solid gray';
        getS('#email').style.border = '1px solid gray';
        render(userValueArr);
    }
}

getS('#addUser').addEventListener('click', addUser);

// deleteUser
function deleteUser(event){
    if(event.target.matches('.users__button-delete')){
        let elemEvenLattice = event.target.closest('.container-header').querySelector('.users__text-lattice');
        let indexArr = +elemEvenLattice.textContent - 1;
        userValueArr.splice(indexArr, 1);
        render(userValueArr);
    }
}

getS('.users').addEventListener('click', deleteUser);

// editUser
let indexArr
function editUser(event){
    // button check
    if(event.target.matches('.users__button-edit')){
        // search index
        let elemEvenLattice = event.target.closest('.container-header').querySelector('.users__text-lattice');
        indexArr = +elemEvenLattice.textContent - 1;
        // value input
        getS('#login').value = userValueArr[indexArr].login;
        getS('#password').value = userValueArr[indexArr].password;
        getS('#email').value = userValueArr[indexArr].email;
        getS('#editUser').style.display = 'inline';
        getS('#addUser').style.display = 'none';
    }
}

getS('.users').addEventListener('click', editUser);

// saveEditUser
function saveEditUser(event){
    event.preventDefault();
    // value input
    let userEditLogin = getS('#login').value;
    let userEditPassword = getS('#password').value;
    let userEditEmail = getS('#email').value;
    // reg test
    if(regLogin.test(userEditLogin) && regPassword.test(userEditPassword) && regEmail.test(userEditEmail)){
        userValueArr[indexArr].login = userEditLogin;
        userValueArr[indexArr].password = userEditPassword;
        userValueArr[indexArr].email = userEditEmail;
        // buttons
        getS('#editUser').style.display = 'none';
        getS('#addUser').style.display = 'inline';
        // clear forms
        getS('#login').value = '';
        getS('#password').value = '';
        getS('#email').value = '';
        getS('#login').style.border = '1px solid gray';
        getS('#password').style.border = '1px solid gray';
        getS('#email').style.border = '1px solid gray';
        // render
        render(userValueArr);
    }
}

getS('#editUser').addEventListener('click', saveEditUser);