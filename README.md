
# TinyEventbus

## Overview
The `TinyEventBus` class is a simple implementation of an event bus or event emitter. It allows you to register, unregister, and emit events with associated callback functions.

1. **`on(eventName, callback)` method**:
   - This method is used to register a callback function for a specific event.
   - If the event doesn't exist yet, it will be created.
   - The method returns a function that can be used to unsubscribe the callback from the event.

2. **`off(eventName, callback)` method**:
   - This method is used to remove a callback function from a specific event.
   - It filters the array of callbacks for the given event, removing the provided callback function.

3. **`emit(eventName, ...args)` method**:
   - This method is used to emit an event, calling all registered callback functions with the provided arguments.
   - It iterates through the array of callbacks for the given event and calls each one with the provided arguments.

The `TinyEventBus` class provides a simple and lightweight way to implement an event-driven architecture in a JavaScript application. It allows you to decouple different parts of your application by allowing them to communicate through events, making the code more modular and easier to maintain.

## Usage

```javascript
// Create an instance of the TinyEventBus
const eventBus = new TinyEventBus();

// Define a callback function for the 'message' event
function handleMessageEvent(data) {
  console.log('Received message:', data);
}

// Register the event listener for the 'message' event
eventBus.on('message', handleMessageEvent);

// Emit the 'message' event with some data
eventBus.emit('message', { text: 'Hello, world!' });

// Remove the event listener for the 'message' event using the off method
eventBus.off('message', handleMessageEvent);

// Emit the 'message' event again, but the handleMessageEvent function will not be called
eventBus.emit('message', { text: 'This message will not be logged.' });

```