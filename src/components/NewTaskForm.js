import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [textState, setTextState] = useState("")
  const [categoryState, setCategoryState] = useState("Code")

  function handleTextState(event) {
    setTextState(event.target.value)
  }

  function handleOnTaskSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({
      text: textState,
      category: categoryState
    })
  }

  let categoryDropdown = categories.map((category) => {
    if (category !== "All")
    return (<option value={category} key={category}>{category}</option>)
  })

  function handleCategoryState(event) {
    setCategoryState(event.target.value)
  }


  return (
    <form onSubmit={handleOnTaskSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleTextState} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryState} name="category">
          {categoryDropdown}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
