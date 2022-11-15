type EventHandler = (payload: any) => void
type WildCardHandler = (eventName: string, payload: any) => void
type Handler = EventHandler | WildCardHandler

const PubSub = () => {
  const events = new Map<string, Array<Handler>>();

  const getHandlers = (eventName: string) => events.get(eventName);

  const on = (eventName: string, fn: Handler): void => {
    const handlers = getHandlers(eventName);
    if (handlers) handlers.push(fn);
    else events.set(eventName, [fn]);
  };

  const off = (eventName: string, fn: Handler): void => {
    const handlers = getHandlers(eventName);
    if (handlers)
      events.set(
        eventName,
        handlers.filter((eventFn) => eventFn !== fn)
      );
  };

  const emit = (eventName: string, payload?: any): void => {
    const handlers = getHandlers(eventName) || [];
    const wildcardHandlers = getHandlers('*') || [];

    handlers.forEach((fn: Handler) => (fn as EventHandler)(payload));
    wildcardHandlers.forEach((fn: Handler) => (fn as WildCardHandler)(eventName, payload));
  };

  const clear = (eventName?: string): void => {
    if (eventName) events.delete(eventName);
    else events.clear();
  };

  return { on, off, emit, clear, events };
};

export default PubSub