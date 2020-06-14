import React, {useState, ChangeEvent, FormEvent} from "react";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (inputChangeEvent: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(inputChangeEvent.target.value);
    };

    const handleSubmit = (submitFormEvent: FormEvent<HTMLButtonElement>) => {
        submitFormEvent.preventDefault();
        addTodo(newTodo);

        setNewTodo("");
    };

    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    );
};
