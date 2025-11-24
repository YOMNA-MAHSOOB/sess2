#  TypeScript Fundamentals - Library Management Task 📚

## 📋 Overview
Build a **Library Book Management System** that demonstrates all fundamental TypeScript concepts covered in Session 4.

---

## 📝 Submission Guidelines

1. Create a file named `library-system.ts` in your forked repo
2. Add clear comments explaining each section
3. Test your code with different values
4. Make sure all outputs are clear and formatted
5. LLMs (ChatGPT, Gemini, ...) are NOT allowed AT ALL
6. Searching is allowed
7. Ask your assigned Supporter any time about anything

---

## 🎓 Task Requirements

### Part 1: Variables & Basic Types
Create basic variables that will be used throughout the program:

1. **Declare basic variables with types:**
   ```typescript
    totalBooks(number)
    libraryName(string)
    isOpen(boolean)
    lateFeePerDay(number)=2.5
    maxBooksPerPerson(number)
    currentDate(string)
   ```

2. **Create a `Book` interface:**
   - attributes: `id`, `title`, `author`, `publishYear`, `status: "available" | "borrowed" | "reserved"`, `pages`

3. **Create a `Magazine` interface  that extends Book:**
   - attributes: `issueNumber`, `monthlySubscription: boolean`

4. **Create sample book and magazine objects and print them.**

5. **Update the `totalBooks` variable** after adding the book and magazine (increment by 2)

---

### Part 2: Union & Intersection Types
Work with advanced type combinations:

1. Create a union type `MediaType`:
   ```typescript
   "book" | "magazine" | "newspaper" | "dvd"
   ```

2. Create an intersection type `LibraryItem`:
   - Base properties: `id`, `title`, `location` (shelf number)
   - Item-specific properties based on type

3. Create a type `BorrowRecord` with:
   - `itemId: number`
   - `borrowerName: string`
   - `borrowDate: string`
   - `returnDate: string | null`
   - `status: "active" | "returned" | "overdue"`

---

### Part 3: Functions with Type Annotations
1. **Regular function** `calculateLateFee`:
   ```typescript
   function calculateLateFee(daysLate: number, feePerDay: number): number
   ```
   - Returns total late fee

2. **Arrow function** `getBooksByStatus`:
   ```typescript
   const getBooksByStatus = (books: Book[], status: string): Book[] => {}
   ```
   - Filters books by status

3. **Arrow function** `formatBookInfo`:
   ```typescript
   const formatBookInfo = (book: Book): string => {}
   ```
   - Returns formatted string with all book details

4. Test all functions with sample data

**Expected Output:**
```typescript
Late Fee for 5 days: $15
Available Books: 8
Book Info: "1984" by George Orwell (1949) - 328 pages - Status: available
```

---

### Part 4: Arrays Operations
1. Create an array of books: `Book[]` with at least 5 books by generic Array<T>
2. Create an array of borrow records: `BorrowRecord[]`Make it unchangeable



---

### Part 5: Class Implementation
Create a `Library` class:

```typescript
class Library {
    private books: Book[];
    private borrowRecords: BorrowRecord[];
    
    constructor() {
        this.books = [];
        this.borrowRecords = [];
    }
    
    addBook(book: Book): void {}
    removeBook(id: number): boolean {}
    borrowBook(bookId: number, borrowerName: string): string {}
    returnBook(bookId: number): string {}
    getAvailableBooks(): Book[] {}
    getBooksByAuthor(author: string): Book[] {}
    getTotalBooks(): number {}
    getMostBorrowedBook(): Book | null {}
}
```

Test your class with sample books and operations.

---

### Part 6: Type vs Interface Comparison
1. Create the same structure using `type` and `interface`:
```typescript
// Using type
type BookType = { ... }

// Using interface
interface BookInterface { ... }
```

2. Write comments explaining:
- When to use `type`
- When to use `interface`
- Key differences

---

### Part 7: Utility Types
Use **TypeScript Utility Types** with examples:



---

### Part 8: Bonus Challenge 🌟
Create a comprehensive library report system:

- Use generics to accept different item types
- Calculate statistics using typed arrays
- Return a formatted report object

```typescript
interface LibraryReport {
    totalBooks: number;
    availableBooks: number;
    borrowedBooks: number;
    totalPages: number;
    averagePagesPerBook: number;
    mostPopularAuthor: string;
    oldestBook: Book;
    newestBook: Book;
    reportDate: string;
}
```

**Expected Final Report:**
```
📚 Collection Overview:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Books: 25
Available: 18
Currently Borrowed: 7
Reserved: 0

📊 Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Pages: 8,450
Average Pages/Book: 338
Most Popular Author: George Orwell (3 books)

📖 Collection Range:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Oldest: "Pride and Prejudice" (1813)
Newest: "The Midnight Library" (2020)

Report Generated: 2024-11-24
```

---

## 💡 Hints
1. Always add type annotations to function parameters and return types
2. Use `interface` for object shapes that might be extended
3. Use `type` for unions, intersections, or aliases
4. Use `readonly` for properties that shouldn't change after creation
5. Use optional properties with `?` when needed
6. Test each part before moving to the next
7. Use TypeScript compiler (`tsc`) to check for errors

---

## 🚀 Extra Challenges (Optional)
- readonly modifier for book IDs
- enum for book categories (Fiction, NonFiction, Science, etc.) you can search about enum
- tuple types for book coordinates `[shelfNumber, rowNumber]`
- generic constraints: `<T extends Book>`

---

## 📋 Evaluation Criteria
- **Correct Type Usage (30%)**
- **Generic Functions (15%)**
- **Class Implementation (25%)**
- **Code Quality (15%)**
- **Functionality (15%)**

---

## ⏰ Estimated Time
**3-4 hours** for complete implementation

Good luck! 🍀📚

