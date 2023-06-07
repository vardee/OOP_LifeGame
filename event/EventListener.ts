namespace EventNamespace {

    export interface EventListener<T extends Event> {

        onEventExecute: (event: T) => void;

    }

}