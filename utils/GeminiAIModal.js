const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

// const fs = require("node:fs");
// const mime = require("mime-types");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "text/plain",
};

    export const chatSession = model.startChat({
        generationConfig,
        history: [
            {
            role: "user",
            parts: [
                {text: "create 5 questions with answers for interview f javascript return in json format"},
            ],
            },
            {
            role: "model",
            parts: [
                {text: "```json\n[\n  {\n    \"question\": \"What does the `return` statement do in JavaScript, and what happens if a function doesn't have a `return` statement?\",\n    \"answer\": \"The `return` statement ends the execution of a function and specifies a value to be returned to the caller. If a function doesn't have a `return` statement (or has a `return` statement without a value), it implicitly returns `undefined`.\"\n  },\n  {\n    \"question\": \"Can a function have multiple `return` statements? If so, how does JavaScript decide which one to execute?\",\n    \"answer\": \"Yes, a function can have multiple `return` statements. However, only the first `return` statement encountered during execution will be executed. Once a `return` statement is executed, the function terminates immediately, and the subsequent `return` statements are ignored. The execution path dictates which `return` statement is reached and executed.\"\n  },\n  {\n    \"question\": \"Explain the difference between `return` and `console.log()` in a function. Why is it important to use `return` instead of `console.log()` if you want to use the function's output later?\",\n    \"answer\": \"`console.log()` is primarily used for debugging purposes. It displays a value in the console but doesn't make that value available for use outside the function.  `return`, on the other hand, passes the specified value back to the function's caller. If you want to use the output of a function in other parts of your code (e.g., in calculations, conditional statements, or passing it to another function), you *must* use `return`. `console.log()` only displays the value; it doesn't make it accessible for further processing.\"\n  },\n  {\n    \"question\": \"Describe how the `return` statement interacts with closures in JavaScript.\",\n    \"answer\": \"The `return` statement can return a function that has access to variables in its surrounding scope, even after the outer function has finished executing. This creates a closure. The returned function \\\"remembers\\\" and can access these variables because of the scope chain preserved by the closure. For example, you can return a function that uses variables defined within the outer function, allowing you to create stateful functions that maintain their own private data.\"\n  },\n  {\n    \"question\": \"Explain how you would return multiple values from a JavaScript function. Provide an example.\",\n    \"answer\": \"In JavaScript, you can effectively return multiple values from a function by returning an object or an array.  Here's an example using an object:\\n\\n```javascript\\nfunction getFullName(firstName, lastName) {\\n  return {\\n    firstName: firstName,\\n    lastName: lastName,\\n    fullName: firstName + ' ' + lastName\\n  };\\n}\\n\\nconst person = getFullName('John', 'Doe');\\nconsole.log(person.firstName); // Output: John\\nconsole.log(person.lastName);  // Output: Doe\\nconsole.log(person.fullName);  // Output: John Doe\\n```\\n\\nAlternatively, you could return an array:\\n\\n```javascript\\nfunction getCoordinates() {\\n  const x = 10;\\n  const y = 20;\\n  return [x, y];\\n}\\n\\nconst coordinates = getCoordinates();\\nconsole.log(coordinates[0]); // Output: 10\\nconsole.log(coordinates[1]); // Output: 20\\n```\\nUsing an object with descriptive keys is generally preferred for better readability and maintainability.\"\n  }\n]\n```\n"},
            ],
            },
        ],
    });


