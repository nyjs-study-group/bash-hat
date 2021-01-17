# Bash Hat
By the [New York Javascript Study Group](https://www.meetup.com/New-York-JavaScript-Study-Group)
Discord: https://discord.gg/rqPzvm2jEd

This is a project that will create a virtual terminal and visualization in a React App.

# Table of Contents
* **[Next Meetings](#next-meetings)**
* **[Project Goals](#goals)**
* **[Project Phases](#phases)**
* **[How to Participate](#participate)**
* **[About the Repository](#about-repository)**

<!-- code_chunk_output -->

- [Bash Hat](#bash-hat)
- [Table of Contents](#table-of-contents)
  - [Next Meetings:](#next-meetings)
  - [Project Goals:](#project-goals)
  - [Project Phases:](#project-phases)
    - [Phase I: Very Basic Web Application with local-only data structures.](#phase-i-very-basic-web-application-with-local-only-data-structures)
    - [Future Phases: Order TDB](#future-phases-order-tdb)
  - [Why should I participate?](#why-should-i-participate)
    - [How to participate:](#how-to-participate)
  - [About the repository](#about-the-repository)
    - [How to get the code:](#how-to-get-the-code)

<!-- /code_chunk_output -->



<a name="next-meetings"></a>

## Next Meetings:
A one hour meeting about this project is Monday 1/18 from 8:00pm to 9:00pm EST here: [https://global.gotomeeting.com/join/296494701](https://global.gotomeeting.com/join/296494701)

The next workshop is Saturday, 1/23 from 11:00am to 2:00pm EST here: at [https://global.gotomeeting.com/join/296494701](https://global.gotomeeting.com/join/296494701)

<a name="goals"></a>

## Project Goals: 
**The Bash Hat project has two sets of goals:**
* **Help the users of Bash Hat to learn how to use a terminal in an environment with interactive visualizations of their inputs and the effects these inputs have.**
  * **Command Line Features of Phase I:** 
    * A virtual file system tree to interact with.
    * The most commonly used commands in a file system.
      * cd: change directory ( folder )
      * ls ( with or without options): list contents of a directory.
      * mkdir: make a directory
      * rm ( with or without options ): remove a file system object.
      * rmdir: remove a directory
      * history: list of all commands run 
      * touch: create or change the last modified date of a file.
      * pwd: show the absolute location in the file system.
    * Standard shortcut keys:
      * up and down arrows: go through the command history
      * (ctrl or cmd) + a: go to the beginning of a line
      * (ctrl or cmd) + e: go to the end of a line
      * (ctrl or cmd) + u: go to the beginning of a line and delete everything on the line.
      * (ctrl or cmd) + l: clear the screen, but allow the user to still scroll back.


* **Provide a project that will help its participants learn and practice**
  * How to organize, execute, build and deploy a functional react application.
  * How to style a UI in a react application.
  * How to create UI interactions in a react application.
  * How to model data structures, such as a virtual file system that will run in this application
  * How to create dynamic visualizations based on the interaction of a data structure with the UI and the user.
  * Finally, the process of creating a system to emulate the bash terminal should also help the participants to deepen their understanding of how command line and file systems work in a modern operating system.

<a name="phases"></a>

## Project Phases:
### Phase I: Very Basic Web Application with local-only data structures.
Phase I will have a few basic commands from bash, no scripting and no remote collaboration of data persistence.
That said, it should be a very useful tool for those who have never used the command line to practice their skills 
and hopefully ease their path to a coding career.
* **Terminal with a few basic commands**
* **An interactive visualization of the file system tree**

### Future Phases: Order TDB
* **more command line features**
* **User Registration and session saving**
* **shared remote interaction during coding sessions**

<a name="particpate"></a>
## Why should I participate?
Building Bash Hat provides a great opportunity for a programmer to not only learn a lot of coding techniques, but how to collaborate with others while coding.
This is a unique opportunity to participate in an open source project from within a study group working in live sessions.  
Also, this is an opportunity for you to make a contribution to a public project to add to your portfolios.

### How to participate: 
Anyone is welcome to participate, but to participate, you must attend at least one of the group online sessions.
If you are unavailable for the times of the online sessions, please post a message to the group [discord](https://discord.gg/rqPzvm2jEd) or the 
meetup message board and we will try to find a way to on-board you to the project.

**The most important rule:**  If you want to have your contribution put into the project and shared, you must be willing to demonstrate 
and explain your code at one of the meetups.  This help us to document the code and help others to learn, AND it is something 
that is often required in a professional environment.


<a name="about-repo"></a>

## About the repository
The Bash Hat repository has a development branch which will contain our latest code and also 
a branch to preserve each particular stage of development.  This will be something like the chapter branches 
of a coding class, though less formalized as we are building this project with real time interaction.

Once you clone the project, checkout the latest development branch from the origin and try things out.
If you want to make any changes, please make a new branch from the development branch.  The name of the new branch
should include your initials and what it is you are working on. something like: ``` rml_input_component_interaction ```

If you want to merge your changes to the development branch, please make a Pull Request.

### How to get the code: 

Additionally, notes are scattered throughout the code to provide hints as to what is going on.

To run this project: 

clone the project: 
```
  git clone -b development https://github.com/nyjs-study-group/bash-hat.git
  cd bash-hat
```

create your own branch: use the naming format: [your initials]_[what you are doing]
``` 
  git branch rml_input_ui_interaction
```

install the project: 
```
  cd bash-hat
  npm run install
```

start the project: 
```
  npm run start
```

view the project in your web browser at
http://localhost:1234


