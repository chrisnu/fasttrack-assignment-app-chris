export class Employee {
    id: string;
    name: string;
    static mock1: Employee;
    static  mock2: Employee;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}

Employee.mock1 = new Employee('klm100000', 'User 1');
Employee.mock2 = new Employee('klm100001', 'User 2');
