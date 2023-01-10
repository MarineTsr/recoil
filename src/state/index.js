import { atom, selector, selectorFamily } from "recoil";
import { getTodos, getTodo } from "api";

export const todoListState = atom({
  key: "todoListState",
  default: getTodos(),
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

export const statsFilter = selector({
  key: "statsFilter",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNb = todoList.length;
    const doneNb = todoList.filter((item) => item.done).length;
    const donePercentage =
      totalNb > 0
        ? Math.floor(((doneNb * 100) / totalNb + Number.EPSILON) * 100) / 100
        : 0;

    return {
      totalNb,
      doneNb,
      donePercentage,
      wipNb: totalNb - doneNb,
      wipPercentage: 100 - donePercentage,
    };
  },
});

export const extractTodoFilter = selectorFamily({
  key: "extractTodoFilter",
  get:
    (_id) =>
    async ({ get }) => {
      return _id && getTodo(_id);
    },
});
