import '@fortawesome/fontawesome-free/css/all.css';
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaLists from './components/IdeaLists';
import './css/style.css';

new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaLists();

// const hello = () => console.log('Hello');
