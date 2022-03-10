const users = [
  {
    name: 'Erik',
    age: 29,
    email: 'erik@academlo.com',
    social: [
      { name: 'facebook', url: 'facebook/erik' },
      { name: 'twitter', url: 'twitter/erik' }
    ],
    gender: 'Male'
  },
  {
    name: 'Georg',
    age: 33,
    email: 'georg@academlo.com',
    social: [
      { name: 'facebook', url: 'facebook/georg' },
      { name: 'twitter', url: 'twitter/georg' }
    ],
    gender: 'Male'
  },
  {
    name: 'Andrea',
    age: 42,
    email: 'andrea@hotmail.com',
    social: [
      { name: 'facebook', url: 'facebook/andrea' },
      { name: 'twitter', url: 'twitter/andrea' }
    ],
    gender: 'Female'
  },
  {
    name: 'Oscar',
    age: 31,
    email: 'oscar@academlo.com',
    social: [
      { name: 'facebook', url: 'facebook/oscar' },
      { name: 'twitter', url: 'twiter/oscar' }
    ],
    gender: 'Male'
  },
  {
    name: 'Daniela',
    age: 22,
    email: 'daniela@uaq.mx',
    social: [
      { name: 'facebook', url: 'facebook/andrea' },
      { name: 'twitter', url: 'twitter/andrea' }
    ],
    gender: 'Female'
  }
]

const userEmailContent = document.getElementById('user-table-email')
const userRangeContent = document.getElementById('user-table-range')
const userInfoContent = document.getElementById('user-table-info')

let htmlEmails = ''
let htmlRange = ''
let htmlInfo = ''

for (let i=0; i < users.length; i++) {
  if (users[i].email.endsWith('academlo.com')){
    htmlEmails += `
      <div>${users[i].name}</div>
      <div>${users[i].email}</div>
    `
  }

  if(users[i].age > 20 && users[i].age < 40) {
    htmlRange += `
      <div>${users[i].name}</div>
      <div>${users[i].age}</div>
    `
  }

  htmlInfo += `
    <div>${users[i].name}</div>
    <div>${users[i].email}</div>
    <div>${users[i].age}</div>
    <div>${users[i].gender}</div>
    <ul>
      <li>${users[i].social[0].name} - ${users[i].social[0].url}</li>
      <li>${users[i].social[1].name} - ${users[i].social[1].url}</li>
    </ul>
  `
}

userEmailContent.insertAdjacentHTML('beforeend', htmlEmails)
userRangeContent.insertAdjacentHTML('beforeend', htmlRange)
userInfoContent.insertAdjacentHTML('beforeend', htmlInfo)