function InteractiveForm() {

  function handleClick() {
    console.log("Button was clicked!");
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={handleClick}>Click Me</button>

      <input
        type="text"
        onChange={handleChange}
      />
    </form>
  );
}

export default InteractiveForm;