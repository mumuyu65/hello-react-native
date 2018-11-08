import { observable } from "mobx"

class TodoList {
  @observable todos = []
}

export default new TodoList()