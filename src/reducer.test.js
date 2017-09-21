import reducer from "./reducer";
import { createTodo } from "./actions";
import { toggleTodo } from "./actions";
import { filterTodos } from "./actions";

describe("CREATE_TODO", function () {
    test("creates a new todo", function () {
        const initialState = {todos: [], nextId: 1}
        const state = reducer(initialState, createTodo("Test"));
        expect(state.todos).toHaveLength(1);
        expect(state.todos[0]).toEqual({id: 1, done: false, text: "Test"});
    })
})


describe("TOGGLE_TODO", function () {
    test("toggles a existing todo", function () {
        const initialState = {todos: [], nextId: 1}
        let state = reducer(initialState, createTodo("Test"));
        state = reducer(state, toggleTodo(1));
        expect(state.todos[0]).toEqual({id: 1, done: true, text: "Test"});
    })
})

describe("FILTER_TODOS", function () {
    test("filters an array of existing todos", function () {
        const initialState = {filter: "all"}
        let state = reducer(initialState, filterTodos("complete"));
        expect(state).toEqual({filter: "complete"});
    })
})
