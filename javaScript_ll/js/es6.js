/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// 1. TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Greg';
const email = 'greg@gmail.com';
const languages = ['javascript', 'java', 'sql'];

// let name = "Jon"

// 2. TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

users.push({
  name,
  email,
  languages
})

// 3. TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// 4. TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
// users.forEach(function(user) {
//   return names.push(user.name);
// });

users.forEach((user) => emails.push(user.email));
users.forEach((user) => names.push(user.name));

// 5. TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach((user) => {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const { name, email, languages } = user;
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
  // TODO: rewrite the assignment below to use template strings
  developers.push(name + '\'s email is ' + email + ' ' + name + ' knows ' + languages.join(', '));
});

// 6. TODO: Use `let` for the following variable
let list = '<ul>';

// 7. TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

  // 8. TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// });

for (let developer of developers) {
  // list += '<li>' + developer + '</li>';
  list += `<li> ${developer} </li>`
}

list += '</ul>';
