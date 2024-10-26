import User from "./User";
import Task from "./Task";

class Party {
    id: number;
    name: string;
    time: Date;
    users: User[];
    tasks: Task[];

    constructor(id: number, name: string, time: Date) {
        this.id = id;
        this.name = name;
        this.time = time;
        this.users = [];
        this.tasks = [];
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }

}

export default Party;