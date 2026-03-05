  1=> QUESTION: What is JSX, and why is it used?
  ANSWER: JSA stands for javascript XML.JSX হলো JavaScript-এর একটি বিশেষ লেখার পদ্ধতি, যা দেখতে অনেকটা HTML-এর মতো।
React-এ এটি ব্যবহার করা হয় ওয়েবসাইট বা অ্যাপের UI দেখতে কেমন হবে সেটা বোঝানোর জন্য।
JSX কেন ব্যবহার করা হয়, তার কারণগুলোঃ 
১. সহজে লেখা ও পড়া যায়: JSX দেখতে অনেকটা সাধারণ HTML-এর মতো, তাই এটি কোড লিখতে এবং অন্যের কোড বুঝতে অনেক সহজ করে দেয়।
২. JS ফাইলে HTML লেখার সুবিধা: এটি সরাসরি জাভাস্ক্রিপ্ট ফাইলের ভেতরে HTML স্ট্রাকচার লেখার অনুমতি দেয়, ফলে লজিক এবং ডিজাইন একসাথে রাখা সহজ হয়।
৩. দ্রুত ও কার্যকর: অ্যাপটি বিল্ড করার সময় JSX স্বয়ংক্রিয়ভাবে জাভাস্ক্রিপ্ট কোডে রূপান্তরিত হয়, যার ফলে এটি ব্রাউজারে খুব দ্রুত এবং কার্যকরভাবে কাজ করে।


2=> QUESTION:What is the difference between State and Props?
ANSWER: 
State: এটি কম্পোনেন্টের নিজস্ব ডেটা, যা কম্পোনেন্টের ভেতরেই থাকে এবং পরিবর্তন করা যায়।
Props: এটি বাইরে (প্যারেন্ট) থেকে আসা ডেটা, যা অন্য কম্পোনেন্টে পাঠানো হয় এবং এটি পরিবর্তন করা যায় না


3=>QUESTION: What is the useState hook, and how does it work?
ANSER: useState হলো React-এর একটি ফাংশন (Hook), যা কম্পোনেন্টে ডেটা বা স্টেট ধরে রাখতে এবং পরিবর্তন করতে ব্যবহার করা হয়।


4=> QUESTION: How can you share state between components in React?
ANSWER: . Lifting State Up:state কে  Parent কম্পোনেন্টে রেখে Props-এর মাধ্যমে চাইল্ড কম্পোনেন্টগুলোতে পাঠিয়ে দেওয়া


5=> QUESTION: How is event handling done in React?
ANSER: (camelCase): এখানে onclick এর বদলে onClick লিখতে হয়।,কোটেশনের বদলে সেকেন্ড ব্র্যাকেটের {} মধ্যে ফাংশনের নাম দিতে হয়।ব্রাউজারের ডিফল্ট আচরণ বন্ধ করতে e.preventDefault() ব্যবহার করতে হয়।
