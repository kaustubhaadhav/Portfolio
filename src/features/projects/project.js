import dictionary from "../../assets/images/dictionary.jpg";
import rest from "../../assets/images/rest.jpg";
import vscode from "../../assets/images/vscode.jpg";
import pizza from "../../assets/images/pizzapic.jpg";
import rick from "../../assets/images/rick.jpg";
export const project = [
  {
    title: "Vs-Code Portfolio",
    description:
      "A Vscode themed developer portfolio website built with React.js and TailwindCSS.",
    image: vscode,
    tags: ["react", "tailwind", "axios"],
    sourceCode: "https://github.com/kaustubhaadhav/Portfolio",
    demo: "",
  },
  {
    title: "Railway-Reservation",
    description:
      " Web application where u can book a ticket and it will generate a QR code for the same and even a unique ID.",
    image: pizza,
    tags: ["Java"],
    sourceCode: "https://github.com/kaustubhaadhav/railway-reservation",
    //demo: "https://fast-reactredux-pizza.netlify.app/",
  },

  {
    title: "Student Database App",
    description:
      "A mini project which was developed using Java and SQL in Android SDK . It was designed to find the average and the topper of the class and also was able to add and delete student information.",
    image: dictionary,
    tags: ["JAVA", "Android SDK"],
    sourceCode: "https://github.com/kaustubhaadhav/student_database",
    //demo: "https://mydictionarysearch.netlify.app/",
  },

  {
    title: "Rick And Morty IOS App",
    description:
     "A universal Swift app built with UIKit and SwiftUI using the MVVM pattern, featuring Auto Layout, pagination, and seamless compatibility across iPhone, iPad, and Mac, developed in Xcode 14 without external dependencies.",
     image: rick,
     tags: ["Swift","UIKit","MVVM"],
     sourceCode: "https://github.com/kaustubhaadhav/RickAndMortyIOSApp/tree/main",
    //demo: "https://mydictionarysearch.netlify.app/",
  },


];
