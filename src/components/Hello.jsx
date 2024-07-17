const name = "Ghassan";

function displayMessage() {
  return "Wow!";
}

function Hello({ name, message, emoji, seatNumbers }) {
  return (
    <div>
      <h1>
        {message}
        {emoji} from components {name} and you are {10 + 13} years old!{" "}
        {displayMessage()}
        {seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
