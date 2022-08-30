import React, {useState} from 'react';
import Container from './Container';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';


const tasks = [
  { id: 1, content: 'Zjeść kebsa', done: false },
  { id: 2, content: 'Zrobić stronę', done: true }
];

function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () =>{
    setHideDone(hideDone=> !hideDone);
  };

  return (
    <div>
      <Container>
        <Header
          title='Lista Zadań'
        />

        <Section
          title='Dodaj nowe zadanie'
          body={<Form />}
        />

        <Section
          title='Lista zadań'
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
            />
          }

          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
            />
          }
        />

      </Container>
    </div>
  );
}

export default App;