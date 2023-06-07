

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Modal } from './components/modals';

import './App.css';
import { useContext } from 'react';
import { PortalContext } from './components/context/portalContext';
import { AddTaskModalFormProps } from './models/modalProps';
import { NsButton } from './components/buttons/NsButton';



function App() {
  const { portalContextReducer } = useContext(PortalContext);
  let [portalIsActive, togglePortal] = portalContextReducer();
  const openNewAddTaskForm = () => {
    togglePortal({ type: "toggle", modal_props: AddTaskModalFormProps("Add a todo") });
  }
  return (
    <div className="App">

      <div className="task-popup">
        <Header />
        <NsButton title={"Agregar nueva tarea"} mode={"cake"} openModal={openNewAddTaskForm} />
        <Modal />
        <TaskList />
      </div>
    </div>
  )
}

export default App
