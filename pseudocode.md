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
- export default function ToDoList {
    - completedList
    - incompletedList
    - checkItems - addEventListener
    - addItems  - addEventListener / Input
    - clearItems - addEventListener
    }
