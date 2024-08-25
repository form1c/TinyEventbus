// Create a new instance of the TinyEventBus
const eventBus = new TinyEventBus();
var numberOfRegistrations = 0;

// Function to create and append a new div element with the given content
function createAndAppendDiv(parentElement, content) {
  const newDiv = document.createElement('div');
  newDiv.textContent = content;
  parentElement.appendChild(newDiv);
}

// Event handler function for the 'msg1' event
const eventHandler = (data) => {
  // Log the data passed to the event handler
  console.log('Emit Button clicked with data:', data);

  const parentDiv = document.getElementById('output');
  createAndAppendDiv(parentDiv, ' <= Event "msg1" catched via eventHandler!');
};

function Attach() {
  const parentDiv = document.getElementById('output');
  if(numberOfRegistrations != 0) {
    createAndAppendDiv(parentDiv, 'Event name "msg1" is already registered.');
    return;
  }
  numberOfRegistrations++
  createAndAppendDiv(parentDiv, 'Register the "msg1" handler on the Event Bus.');
  // Register the 'handleClick' function as a listener for the 'msg1' event
  eventBus.on('msg1', eventHandler);
}

function Emit() {
  const parentDiv = document.getElementById('output');
  createAndAppendDiv(parentDiv, ' => Emit "msg1"!');
  // Emit the 'msg1' event with the data object { id: 1, label: 'Catch Me If You Can' }
  eventBus.emit('msg1', { id: 1, label: 'Catch Me If You Can' });
}

function Detach() {
  numberOfRegistrations = 0
  const parentDiv = document.getElementById('output');
  createAndAppendDiv(parentDiv, 'Unregister the "msg1" handler on the Event Bus.');
  eventBus.off('msg1', eventHandler);
  // Emit the 'msg1' event with the data object { id: 2, label: 'Unhandled event!' }
  // This event will not be handled by the 'handleClick' function anymore
  eventBus.emit('msg1', { id: 2, label: 'Unhandled event!' });
}