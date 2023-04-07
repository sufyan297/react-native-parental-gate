# react-native-parental-gate

A parental gate presents an adult-level task that must be completed in order to continue

## Installation

```sh
npm install react-native-parental-gate
```
## Screenshot
![Image](https://raw.githubusercontent.com/sufyan297/react-native-parental-gate/main/samples/example_parental_gate.png)

## Usage

```js
import ParentalControl from 'react-native-parental-gate';

// ...

<ParentalControl 
    isVisible={isOpen}
    onSuccess={() => {
        //Do Some success actions here
    }}
    onFailed={() => {
        
    }}
    onClose={() => setOpen(false)}
/>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT