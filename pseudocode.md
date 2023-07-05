# MoSCoW
## Must have:
- AGILE SOFTWARE DEVELOPMENT WITH ANONYMOUS USER IN MIND WITH GOALS BELOW AS OBJECTIVE FOR THE USER
- INPUT for entering items in a todo list
- VIEW all of my list items and their status (COMPLETED, IN PROGRESS, TODO)
- BUTTONS to complete tasks/uncheck tasks that I think Ive done or accidentally clicked, clear tasks, add tasks
- DISPLAY checked items with a strikethrough
- BUTTON FOR REACTIVATION
- STYLIZED WEBSITE


## Should have:
- LOCAL STORAGE for persisent data
- FLOW CHART for front end minimal viable product
- DUE DATES

## Could have:
- AUTOMATIC marking to do based on time signatures
- DUE DATES AND ALARMS 
- BUTTON for removing all completed items (soft delete/archival)
- REMINDERS function
- EDIT To-Do's inline with a doubleclick event that changes it from a rendered text to a text input.

## Wont Have: 
- BROKEN website

# ATOMIC DESIGN
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
- ALARMS
- REMINDER FUNCTIONS
- LIST AND LIST DISPLAYS
## Organisms
- INTERACTIVITY BETWEEN ALL ASPECTS
- THE WHOLE UI 

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
        const newToDo = {
            id: Number maybe?
            text: input
            completed: false? !=
        };
        setToDos;
        set input('');
    }                          //function and/or input to add items

    - checkItems - addEventListener             //function and/or button to determine which items are completed
    function checkItems([id]) {
        checkItems(toDos.map => toDo.id);
    }

    - clearItems - addEventListener              // function and/or button to clear items or the whoel list
    function clearItems([id]) {
        setToDos(toDos.filter => toDo.id);
    }

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

