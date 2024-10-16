import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="my-8 fade-in bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <img
            src="/todo4.png" // Replace with your actual image URL
            alt="ToDo List"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">ToDo List</h3>
          <p className="mb-4">
            ToDo List is a simple and intuitive task management app that helps
            users organize their daily tasks. It features task creation,
            editing, and deletion, along with due date reminders.
          </p>
          <Link
            to="/todolist" // Adjust the path as needed
            className="text-blue-600 hover:underline"
          >
            View Project
          </Link>
          
        </div>
       
      </div>

      
    </section>
  );
};

export default Projects;
