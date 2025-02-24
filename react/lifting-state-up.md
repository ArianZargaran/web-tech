## Lifting Local State up

The state is local to the element that needs to have it updated. When a component needs a state from a dibling or another element, the state is lifted to the closest shared parent, so both components have access to it through props.

Example:

```jsx
const ParentComponent = () => {
  const [temperature, setTemperature] = useState(0);

  const handleTemperatureChange = (degrees) => {
    setTemperature(degrees);
  };

  return (
    <div>
      <TemperatureInput onChange={handleTemperatureChange} />
      <TemperatureViewer temperature={temperature} />
    </div>
  );
};
```
