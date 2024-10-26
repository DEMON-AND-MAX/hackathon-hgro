import User from "./User";

class Task {
    name: string;
    desc: string;
    user: User;

    constructor(name: string) {
        this.name = name;
        this.desc = 'This task has no description.';
        this.user = new User('noone');
    }

    updateUser(user: User) {
        this.user = user;
    }

}

export default Task;