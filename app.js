
 function asTabs(node) {
    let tabs = [...node.children];
    let buttons = [];
    let container = document.createElement('div');
    node.insertBefore(container, node.firstChild);

    // Loop over node's children to create button for each tab(div) and insert them before the tabs.
    tabs.forEach(tab => {
    const button = document.createElement('button');

    // Set buttons textContent to tabs' dataset tabname
    button.textContent = tab.dataset.tabname;
    tab.appendChild(button);
    container.appendChild(button);
    tab.style.display = 'none';
    tab.classList.add('tab');


    // Push buttons to an array
    buttons.push(button);

    })
    tabs[0].style.display = 'block' // Make the first tab content visible by default
    buttons[0].style.backgroundColor = 'red'; // Set the color of the first button to "red" by default
    
};


// Invoke asTabs function to make buttons available in the DOM for switchTabs function
asTabs(document.querySelector('tab-panel'));

function switchTabs(node) {
    let tab = document.querySelectorAll('.tab');
   
    let buttons = document.querySelectorAll('button');

    // Loop over the buttons nodeList to add and event listener to each button
    buttons.forEach(btn => {
        btn.addEventListener('click', e => {

            tab.forEach(t => {

                if(!e.currentTarget.textContent === t.dataset.tabname) return; // Guard clause to avoid selecting the wrong element
                // Reset all the tabs in the beginning
                t.style.display = 'none';
                // Display selected tab if its data-tabname matches with clicked button's text content 
                 e.currentTarget.parentElement.parentElement.querySelector(`div[data-tabname="${e.currentTarget.textContent}"]`).style.display = 'block';

            } );

            // Reset all button's backgroundColor setting it to white
            document.querySelectorAll('button').forEach(btn => btn.style.backgroundColor = 'white');
            // Make the selected button's color "red"
            e.currentTarget.style.backgroundColor = 'red';
        })
    })
    
}

switchTabs(document.querySelector('tab-panel'));