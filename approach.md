Documentation for Animal Tables Implementation

---

1. Problem Understanding

The task demanded rendering three tables for three animal categories (Big Cats, Dogs and Big Fish) with the features of sorting, adding, editing and deleting the sets. Every table has its own needs in terms of sorting, bespoke naming conventions, and hover effects. Implementation had to be based on Object-Oriented Programming (OOP) methodology and Bootstrap for its user interface (UI) design.

---

2. Design Approach

The solution is based on a modular and reusable design approach through the use of . All table categories (Big Cats, Dogs, Big Fish) are subclasses of a base class , which allows for the reuse of code and avoids duplication.

---

3. Key Design Choices

3.1 Class Design

1. Base Class:

- Acts as the foundation for all animal tables.

- Handles common functionalities: - Handles common functionalities:

- Rendering the table.

- Adding, editing, and deleting records.

- Sorting records.

- Duplicate prevention.

- Includes methods like , , , , .

2. Derived Classes

, , and are derived from the base class .

Rewrite the method to determine the distinct styles for table names:.

- Dogs: Bold text.

- Big Fish: Bold, italic, and blue-colored text.

---

3.2 Sorting Implementation

Sorting functionality is adaptive and changes the behavior according to the column type:.

- Name and Location Columns: - Name and Location Columns:

- Case-insensitive string comparison using .

- Ensures locale-aware sorting for proper alphabetical order.

- Size Column: - Size Column:

Read into a numeric value using for numeric sorting.

The function is called on demand upon the click on a button, with as data the name of the column and the type of sorting (asc/desc).

---

3.3 Dynamic Table Rendering

- HTML Structure: - HTML Structure:

A Bootstrap-like styled <table> with the dynamic cells by using .

Sorting, editing, and deletion buttons are dynamically connected to corresponding event handlers.

- Table Customization: - Table Customization:

One-of-a-kind class names (such as , enable customization and distinction.

---

3.4 Validation Features

1. Duplicate Prevention: 1. Duplicate Prevention:

The function guarantees the absence of a duplicated name among the animals, in a table format.

- Validation is case-insensitive.

2. Default Image Handling: 2. Default Image Handling:

Default image is used, when no image URL is submitted during registration.

---

3.5 Modular Event Handling

- All event handlers (e.g., add, edit, delete, sort) are dynamically linked to the DOM using global handlers defined within the object. This avoids re-rendering issues when tables are updated.

---

4. Features Implemented

4.1 Core Table Functionalities

- Rendering: Automatically creates a table from the provided data on initialization.

- Adding Records: Adds a new record with validation for duplicate names.

- Editing Records: Permits on-the-fly editing when the form is filled with the data of a selected record.

- Deleting Records: Removes records dynamically and re-renders the table.

- Sorting: Sorts columns dynamically based on user input.

  4.2 Custom Table Styles

Each table has its own style for the Name column:.

- Dogs: Bold text.

- Big Fish: Bold, italic, and blue-colored text.

  4.3 Hover Effect on Images

Images have a frame and are scaled up on mouseover.

---

5. Design Decisions

1. Object-Oriented Approach: 1. Object-Oriented Approach:

- Ensures reusability and modularity.

It is simple to extend the features by defining new subclasses, or changing the base class.

2. Dynamic HTML Generation: 2. Dynamic HTML Generation:

Provides flexibility in the rendering of table directly from data array.

- Simplifies updates after adding, editing, or deleting records.

3. Bootstrap Integration: 3. Bootstrap Integration:

Gives a clean and usable interface with no extra CSS load.

4. Validation and Error Handling: 4. Validation and Error Handling:

- Prevents invalid data entry (e.g., duplicates, empty fields).

- Ensures consistent behavior across tables.

---

6. Challenges and Solutions

| Challenge | Solution |

|---------------------------------------|-------------------------------------------------------------------------|

| Sorting numeric and string columns differently. Used for numeric columns and for strings. |

| Preventing duplicate animal entries. | Implemented to validate names case-insensitively. |

| Dynamic event binding for tables. | Used object to define global event handlers. |

| Unique column styles for different tables. | Abstracted method for customization in derived classes. |

---

7. Conclusion\*\*

This version adopts a hygienic and reusable approach while implementing the object as described in the paragraph. It guarantees maintainability, readability, and scalability while seamlessly meeting all specification criteria.

Future enhancements could include: Future enhancements could include:

1. Adding a search feature to filter records in real-time.

2. Persisting data to local storage or a backend service.
