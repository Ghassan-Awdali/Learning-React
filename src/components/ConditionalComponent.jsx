import Code from "./Code";
export default function ConditionalComponent() {
  const display = true;
  if (display) {
    return (
      <div>
        <h3>This is conditional component</h3>
      </div>
    );
  } else {
    return <Code></Code>;
  }
}
