# MoSCoW
## Must have:
- AGILE SOFTWARE DEVELOPMENT WITH ANONYMOUS USER IN MIND WITH GOALS BELOW AS OBJECTIVE FOR THE USER
<!-- DONE ISH -->
- INPUT for entering items in a todo list
<!-- DONE -->
- VIEW all of my list items and their status (COMPLETED, IN PROGRESS, TODO)
<!-- DONE -->
- BUTTONS to complete tasks/uncheck tasks that I think Ive done or accidentally clicked, clear tasks, add tasks
<!-- DONE -->
- DISPLAY checked items with a strikethrough
<!-- DONE -->
- BUTTON FOR REACTIVATION
<!-- DONE -->
- STYLIZED WEBSITE


## Should have:
- LOCAL STORAGE for persisent data              
<!-- DONE -->
- FLOW CHART for front end minimal viable product
- DUE DATES

## Could have:
- AUTOMATIC marking to do based on time signatures
- DUE DATES AND ALARMS 
- BUTTON for removing all completed items (soft delete/archival)
<!-- DONE -->
- REMINDERS function
- EDIT To-Do's inline with a doubleclick event that changes it from a rendered text to a text input.

## Wont Have: 
- BROKEN website

# ATOMIC DESIGN - OBJECTS/COMPONENTS
## Atoms
- INTERACTIVE UI
    - COMPLETED ITEMS
    - INCOMPLETE ITEMS
    - ITEMS TO-DO
- BUTTONS
    - CLEARING CHECKLIST
    - ADDING TO CHECKLIST
    - CLEAR ITEMS
- INPUT FIELD
## Molecules
- HEADER
    - Name / info / links?
- ALARMS
    - Connecting time/date with lists
- REMINDER FUNCTIONS
- LIST AND LIST DISPLAYS
## Organisms
- THE WHOLE UI 
    - APP

# PROCEDURAL
## BEGIN
## INIT
- IMPORT REACT

- ToDoList - The UI molecule

- localStorage - returns the list when you last used it

## FUNCTIONAL
- export default function ToDoList {                                    // MAIN COMPONENT
    - const [toDos, setToDos] = React.useState([]);
    - const [inputValue, setInputValue] = React.useState('');

    - completedList     

    - incompletedList

    - function addToDo(){
        - const newToDo = {
            - id: Number maybe?
            - text: input
            - completed: false? !=
        };
        - setToDos;
        - set input('');
    }                          //function and/or input to add items

    - checkItems - addEventListener             //function and/or button to determine which items are completed
    - function checkItems([id]) {
        - const [inputValue, setInputValue] = useState('');
        - checkItems(toDos.map => toDo.id, toDo.text, toDo.completed);
    }

    - clearItems - addEventListener              // function and/or button to clear items or the whoel list
        - const [inputValue, setInputValue] = useState('');

    - function clearItems([id]) {
        - setToDos(toDos.filter => toDo.id, toDo.text, toDo.completed);
    }

    - React.useEffect(() => {                       //save to local storage
    - localStorage.setItem('todos', JSON.stringify(todos));
    - }, [todos]);

    return (
        <div>
            <h1>To-Do</h1>
        </div>
        <input> 
            "text here"
            <button onClick=addToDo>
        </input>
        {toDos.map(toDo => 
        <Accordion key ={toDo.id}>
            <input checkbox>
            <button onClick=checkItems></button>
            <button onClick=clearItems></button>
        </Accordion>
        )}
    )
    }


- ReactDOM.render(<TodoList />, document.getElementById('root')); - render the js



#APP COMPONENT 
- function App() {
    - return (
        <>
        - <Header />
        - <ToDoList />
        </>
    );
}


- General React Structure
<!-- https://blog.webdevsimplified.com/2022-07/react-folder-structure/ -->
<!-- https://www.w3schools.com/react/react_usestate.asp -->
<!-- https://create-react-app.dev/docs/adding-images-fonts-and-files/ -->

- General Tools/Syntax
<!-- https://www.freecodecamp.org/news/the-react-cheatsheet/ -->
<!-- https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/ -->
<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now -->
<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array -->

- LocalStorage 
<!-- https://blog.logrocket.com/using-localstorage-react-hooks/ -->
<!-- https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/ -->

- Events
<!-- https://developer.mozilla.org/en-US/docs/Web/API/Event -->

- Inputs
<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input -->

- Operators
<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators -->
<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax -->


<!-- https://stackoverflow.com/questions/8012002/create-a-unique-number-with-javascript-time -->