# 🌌 NexusLab Workspace

NexusLab is an interactive, web-based Java OOP (Object-Oriented Programming) learning console and sandbox. Designed to teach step by step concepts in Java, NexusLab takes you from UML class diagrams to physical Swing UI applications and file persistence models, all within a beautiful, unified browser interface.

Developed with 💜 by **buildprojectnexus (NurLoqmanHakim)**

---

## 🚀 Key Features

*   **Curated Concept Modules**: Six step-by-step learning modules covering essential Java architectures:
    1.  **Intro & UML Design**: Learn to map classes, properties, and constructors from standard UML.
    2.  **Classes & ADTs**: Understand access control (encapsulation), getters, setters, and constructors.
    3.  **Inheritance & Polymorphism**: Learn superclasses, abstract structures, interfaces, and composition.
    4.  **Exception Handling**: Build crash prevention patterns with `try-catch-finally` constructs.
    5.  **File Input/Output**: Save and parse data to files securely (`FileWriter` / `Scanner`).
    6.  **Swing Graphical UI**: Build desktop graphical panels and attach listeners (`JFrame` / `JButton`).
*   **Grand Challenge Project**: Synthesize everything you have learned to build a complete interactive *Grade Book Manager* that features encapsulation, inheritance, exceptions, file writing, and a Swing layout.
*   **Built-in Java IDE Sandbox**:
    *   **Syntax Highlighting**: Real-time syntax coloring powered by Prism.js.
    *   **Auto-Formatting Features**: Smart Tab key spaces, split curly brace indents on Enter, and automatic bracket closing/pairing support (`{ [ ( " '`).
    *   **Perfect Scroll Syncing**: Scroll the code layer and the visual layer in perfect synchronization.
*   **Completely Serverless**: Zero backend dependencies. Runs entirely inside your browser.

---

## 🛠️ How It Works

NexusLab relies on a layered frontend editor structure to mimic a local code editor:
1.  **Interactive Code Input**: An invisible, styled HTML `<textarea>` overlays the syntax highlighting layer.
2.  **Visual Syntax Rendering**: As you type inside the textarea, the script mirrors your text into a `<pre><code>` block initialized with Prism.js Java language components.
3.  **Perfect Caret Alignment**: Custom CSS overrides align the textarea cursor to the exact pixel location of the highlighted text behind it.
4.  **Solutions & Sandboxing**: Each concept block comes with ready-to-run solutions. Clicking "Copy to Sandbox" immediately updates the editor workspace on the right so you can modify or run it locally.

---

## 📖 How to Use

1.  **Launch the Workspace**: 
    Simply double-click the `java_oop_mastery_practice_console.html` file to launch the console in any web browser (Chrome, Edge, Firefox, or Safari).
2.  **Study the Modules**:
    Scroll through the exercises on the left pane or use the navigation header at the top to jump directly to specific lessons.
3.  **Try the Code**:
    *   Click **Show Hint** for key blueprints.
    *   Click **Show Solution** to view standard JDK solution templates.
    *   Click **Copy to Sandbox** to transfer the code directly into the Java IDE Sandbox.
4.  **Write and Run Locally**:
    Modify the code inside the **Java IDE Sandbox**, click **Copy Code** to copy your script to the clipboard, and paste it into your local IDE (IntelliJ IDEA, Eclipse, VS Code, or command line) to compile and run.

---

