// index-nav
// export const getIndexNav = ({ dispatch }) => {
//   let indexNav = require('../mock/index-nav')
//   dispatch('SET_MENU', indexNav)
// }

// 优雅结构,可读性略差
// export const deleteTodo = makeAction('DELETE_TODO')
// export const toggleTodo = makeAction('TOGGLE_TODO')
// export const editTodo = makeAction('EDIT_TODO')
// export const toggleAll = makeAction('TOGGLE_ALL')
// export const clearCompleted = makeAction('CLEAR_COMPLETED')

// function makeAction (type) {
//   return ({ dispatch }, ...args) => dispatch(type, ...args)
// }

export default {
  get_index_nav: ({
    dispatch
  }) => {
    let indexNav = require('../mock/index-nav')
    dispatch('SET_MENU', indexNav)
  },
  getNav (commit, state, {data}) {
    commit('SET_MENU', data)
  }
}
