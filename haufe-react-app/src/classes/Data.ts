import Party from "./Party";
import User from "./User";
import Task from "./Task";

class Data {
    private static instance: Data;
    parties: Party[];

    private constructor() {
        this.parties = [
            new Party(1, "Penelopy's garden party", new Date()),
            new Party(2, "Jack's Halloween costume party", new Date()),
            new Party(3, "Andrew's awesome bday party", new Date()),
            new Party(4, "Study sesh for exam", new Date()),
          ];
    
        const users: User[] = [
            new User("Penelopy"),
            new User("Jack"),
            new User("Andrew"),
            new User("Bibi"),
        ];
    
        const tasks: Task[] = [
            new Task("potato salad"),
            new Task("buy decorations"),
            new Task("bring cake"),
            new Task("dont forget laptop u stupid!!"),
        ];
    
        for (let i = 0; i < this.parties.length; i++) {
        //  console.log(i);
        //  console.log(parties[i]);
            this.parties[i].addUser(users[i]);
            this.parties[i].addTask(tasks[i]);
        }
    }

    public static getInstance(): Data {
        if (!Data.instance) {
            Data.instance = new Data();
        }
        return Data.instance;
    }

    public addParty(party: Party) {
        this.parties.push(party);
    }

    public getPartyById(id: number) {
        for (let i = 0; i < this.parties.length; i++) {
            if (id === this.parties[i].id) {
                return this.parties[i];
            }
        }
        return null;
    }

}

export default Data;