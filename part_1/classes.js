// ### 📚 Official Documentation Reference: JavaScript Classes (MDN)

// * **Definition:** Classes are a template for creating objects. They encapsulate data with code to work on that data. Under the hood, JavaScript classes are built on **prototypes** ("syntactic sugar" over constructor functions), using ES6+ syntax.
// * **Key Built-in Keywords:**
// * `class`: Declares a class. Unlike functions, **class declarations are not hoisted**—you must declare a class before instantiating it.
// * `constructor()`: A special method for creating and initializing an object created with a `class`. There can only be one `constructor` per class.
// * `this`: Refers to the current instance of the class being created or accessed.
// * `extends` & `super()`: Used for inheritance. `super()` calls the parent class's constructor and must be called before using `this` in a child constructor.
// * `static`: Defines a method or property on the class itself rather than on instances of the class.
// * `#` (Private Fields/Methods): Prefixes properties or methods to make them strictly private inside the class body.



// ---

// ### 🏗️ Level 1: The Basics (`class`, `constructor`, and Methods)

// A class is a blueprint, and the objects you build from it (`new User(...)`) are **instances**.

// ```javascript
class Instructor {
    // Runs automatically when 'new Instructor()' is called
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    // Instance method (no 'function' keyword needed)
    introduce() {
        return `Hi, I am ${this.name} and I teach ${this.subject}.`;
    }
}

const tutor = new Instructor("Alabi", "JavaScript");
console.log(tutor.introduce()); 
// Output: Hi, I am Alabi and I teach JavaScript.

// ```

// ---

// ### 🔒 Level 2: Encapsulation (Getters, Setters & Private Fields `#`)

// In backend frameworks like **NestJS**, protecting internal state and controlling how data is read or updated is critical. Modern JavaScript enforces true privacy using the `#` prefix.

// ```javascript
class BankAccount {
    #balance = 0; // Private field: CANNOT be accessed outside this class

    constructor(owner, initialDeposit) {
        this.owner = owner;
        if (initialDeposit > 0) {
            this.#balance = initialDeposit;
        }
    }

    // Getter: Accessed like a property (account.balance), not a function
    get balance() {
        return `₦${this.#balance.toLocaleString()}`;
    }

    // Setter: Validates data before updating
    set deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit must be greater than zero.");
        }
        this.#balance += amount;
    }
}

const acc = new BankAccount("Alabi", 5000);
acc.deposit = 2500;           // Calls the 'set deposit' method
console.log(acc.balance);     // Output: ₦7,500 (Calls 'get balance')
// console.log(acc.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// ```

// ---

// ### 🧬 Level 3: Inheritance (`extends` and `super`)

// Inheritance lets a child class reuse properties and methods from a parent class and override or extend them.

// ```javascript
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        return `${this.username} logged in.`;
    }
}

// Admin inherits everything from User
class Admin extends User {
    constructor(username, email, roleLevel) {
        super(username, email); // MUST call super() before using 'this'
        this.roleLevel = roleLevel;
    }

    // Overriding parent method while still calling it via super.login()
    login() {
        return `${super.login()} [Admin Level: ${this.roleLevel}]`;
    }

    banUser(targetUser) {
        return `${this.username} banned ${targetUser}.`;
    }
}

const superAdmin = new Admin("raphael", "dev@example.com", 1);
console.log(superAdmin.login()); 
// Output: raphael logged in. [Admin Level: 1]

// ```

// ---

// ### ⚡ Level 4: `static` Methods & Dependency Injection (The Bridge to NestJS)

// 1. **`static` Members:** Belong to the class blueprint itself, not to instances. Utility functions and factory constructors often use `static`.
// 2. **Dependency Injection (DI) Pattern:** This is the **#1 architectural pattern in NestJS**. Instead of creating a database connection inside a service class, you pass (inject) the dependency into the `constructor`.

// ```javascript
// 1. A Service class (e.g., handles database logic)
class DatabaseService {
    query(sql) {
        return `Executing [${sql}] on PostgreSQL...`;
    }
}

// 2. A Controller class that depends on DatabaseService
class StudentsController {
    constructor(dbService) {
        this.dbService = dbService; // Dependency injected via constructor!
    }

    getAllStudents() {
        return this.dbService.query("SELECT * FROM students");
    }

    // Static utility method: called on the class directly, not 'new StudentsController()'
    static formatStudentCode(id) {
        return `STU-${String(id).padStart(4, "0")}`;
    }
}

// How NestJS wires this up behind the scenes:
const db = new DatabaseService();
const controller = new StudentsController(db);

console.log(controller.getAllStudents()); 
// Output: Executing [SELECT * FROM students] on PostgreSQL...

console.log(StudentsController.formatStudentCode(42)); 
// Output: STU-0042

// ```

// ---

// ### ⏱️ Class Mastery Challenge (Exam + NestJS Prep)

// Let's put Levels 1–3 together into one quick challenge to lock it in before your exam:

// > **Challenge:**
// > 1. Create a base class `Course` with a `constructor(title, durationHours)` and a method `getSummary()` that returns `"<title> (<durationHours> hrs)"`.
// > 2. Create a child class `LiveCourse` that `extends Course`. Its constructor should take `(title, durationHours, platform)`, call `super(...)`, and store `this.platform`.
// > 3. Override `getSummary()` in `LiveCourse` so it returns `"<title> (<durationHours> hrs) - Live on <platform>"`.
// > 
// > 

// Write your code below, and I'll review it!