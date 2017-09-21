import {createTodo} from "./actions";
import {toggleTodo} from "./actions";
import {filterTodos} from "./actions";

describe("CREATE_TODO yields a type text", () => {
  it("should call a CREATE_TODO action", () => {
    expect(createTodo("test")).toEqual({type: "CREATE_TODO", payload: "test"})
  })
});

describe("TOGGLE_TODO yields a type text", () => {
  it("should call a TOGGLE_TODO action", () => {
    expect(toggleTodo("test")).toEqual({type: "TOGGLE_TODO", payload: "test"})
  })
});

describe("FILTER_TODOS yields a type text", () => {
  it("should call a FILTER_TODOS action", () => {
    expect(filterTodos("test")).toEqual({type: "FILTER_TODOS", payload: "test"})
  })
});
