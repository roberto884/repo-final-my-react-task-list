/**
 * 
 * @param {number} id 
 * @param {string} title 
 * @param {string|TaskModel} content 
 * @param {boolean} completed 
 */

export function TaskModel(id = 0, title = "", content = "", completed = true) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.completed = completed;
}