class TinyEventBus {
  private events: { [key: string]: Array<Function> } = {};

  /**
   * Registers a callback function for a specific event.
   * If the event doesn't exist yet, it will be created.
   *
   * @param eventName - The name of the event to listen for.
   * @param callback - The function to be called when the event is emitted.
   * @returns A function that can be used to unsubscribe the callback.
   */
  on(eventName: string, callback: Function): () => void {
    // If the event doesn't exist yet, create a new array to store the callbacks
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    // Add the callback to the event's array of callbacks
    this.events[eventName].push(callback);

    // Return a function that can be used to unsubscribe the callback
    return () => this.off(eventName, callback);
  }

  /**
   * Removes a callback function from a specific event.
   *
   * @param eventName - The name of the event to remove the callback from.
   * @param callback - The function to be removed.
   */
  off(eventName: string, callback: Function): void {
    // If the event exists, filter out the callback from the array of callbacks
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
    }
  }

  /**
   * Emits an event, calling all registered callback functions with the provided arguments.
   *
   * @param eventName - The name of the event to emit.
   * @param args - The arguments to pass to the callback functions.
   */
  emit(eventName: string, ...args: any[]): void {
    // If the event exists, call all the registered callbacks with the provided arguments
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(...args));
    }
  }
}

export { TinyEventBus };
