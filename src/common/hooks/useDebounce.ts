import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay?: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

// debounced input
/*
// yarn add react-debounce-input
// import {DebounceInput} from 'react-debounce-input';

state = {
    value: ''
};

render() {
    return (
        <div>
            <DebounceInput
                minLength={2}
                debounceTimeout={1000}
                onChange={event => this.setState({value: event.target.value})}
            />

    <p>Value: {this.state.value}</p>
    </div>
);
}*/
