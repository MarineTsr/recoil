import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const filterState = atom({
  key: "filterState",
  default: "all",
});

export const todoListFilter = selector({
  key: "todoListFilter",
  get: ({ get }) => {
    const filter = get(filterState);
    const todoList = get(todoListState);

    if (filter === "done") {
      return todoList.filter((item) => item.done);
    } else if (filter === "wip") {
      return todoList.filter((item) => !item.done);
    } else {
      return todoList;
    }
  },
});
