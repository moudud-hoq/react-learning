const RespondingEventFormHandeling = () => {
  const PostFormData = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h3>
        After use of:{" "}
        <span>
          /event.preventDefault();/When we will click the submit button the page
          will not reload
        </span>{" "}
      </h3>
      <form onSubmit={PostFormData}>
        <input type="text" placeholder="name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RespondingEventFormHandeling;
