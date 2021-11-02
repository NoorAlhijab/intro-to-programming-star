const footer = document.querySelector('footer');
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
const messageForm = document.querySelector('#leave_message');
const userName = messageForm.querySelector('#name');
const email = messageForm.querySelector('#email');
const Message = messageForm.querySelector('#message');
const messageSection = document.querySelector('#messages');
const messageList = messageSection.querySelector('#messageList');

// Footer section
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} Noor Alhijab`;
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
// ///////////////////////
// Message form
// Hide the #messages section, no messages available yet
messageSection.style.display = 'none';

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userNameValue = userName.value;
  const emailValue = email.value;
  const messageValue = message.value;
  messageSection.style.display = 'block';
  messageForm.reset();

  // To stor new message we need to create li list
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${emailValue}" >${userNameValue} </a>
  <span> wrote: ${messageValue}</span> `;
  messageList.appendChild(newMessage);
  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  newMessage.appendChild(removeButton);

  // I put click event handler inside submit event handler I am not sure if this a good Practice or not
  removeButton.addEventListener('click', (e) => {
    const entry = removeButton.parentNode;
    entry.remove();
    // To hide the messages section if there is no messages
    if (messageList.children.length === 0) {
      messageSection.style.display = 'none';
    }
  });
});
