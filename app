import './index.css';


const form: HTMLFormElement = document.querySelector('#ticket');


form.onsubmit = () => {
  const formData = new FormData(form);

  const text = formData.get('textInput') as string;
  console.log(text);
  return false; // prevent reload
};