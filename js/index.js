const footer = document.querySelector('footer');
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');

copyright.innerHTML = `&copy; ${thisYear} Noor Alhijab`;
// console.log(copyright);
footer.appendChild(copyright);

// Array for my skills to add as list
const skills = [
  'JavaScript',
  'HTML',
  'CSS',
  'Sass',
  'Git',
  'Visual Studio Code',
];
// For loop to loop over skills and store each skill in li element
for (let i = 0; i < skills.length - 1; i++) {
  let skill = document.createElement('li');
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}
