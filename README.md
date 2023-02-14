# README

# gourmandize

## Capstone Project Details

**Planning is critical to the success of your project.** Proper planning can help avoid wasting time and ensure your team is successful.

### Prep To Do List
- [x] Create a team name
- [x] Create a slack channel within the LEARN workspace
  - [x] Add the instructors
- [x] Create a team email address
- [x] Create a team GitHub Organization
  - [x] Add all team members, instructors, and mentors in the role of "owner"
  - [x] Add an image to your organization
  - [x] Add Slack integrations for your repository `/github subscribe <repo-url>`
- [x] Create a team Trello Board
  - [x] Add the instructors
- [x] Decide on Developer Roles
  - **Product Manager:** Sammy
  - **Project Manager:** Ney
  - **Tech Lead:** Octavio
  - **Design Lead:** Chris

### Green Light Meeting
- [x] Elevator pitch - 30 sec summary of the app
- [x] Wireframes - visual representations of all the pages your user will see for your MVP
- [x] DB schema drawn out with column names, data types, and table relationships
- [x] CRUD actions
- [x] User stories for your MVP on Trello

### Trello Board
- Swim lanes
  - [x] Icebox
  - [x] MVP
  - [x] Doing
  - [x] Code review
  - [x] Done

### Team Name
**Starship Commander**

### Elevator Pitch
The elevator pitch should succinctly explain your project's purpose and functionality.

### Wireframes
Wireframes are drawings or basic outlines of what each page of your application will look to the user. Wireframes should be vague enough that style choices are not limited, but provide enough information to create an MVP. During development, if there are any questions or disagreements on the look or basic functionality of your app, wireframes can help sort out those issues. A good wireframe will allow the development team to "walk through" the application page by page.

### DB Schema
Setting up your database will be one of the first steps in your project. The database schema should be drawn out with the name of each column and the data type of each column. Relationships between each table should be defined.

### User Stories
A user story describes how a user interacts with an app. Stories take your wireframes and DB schema and turn them into actionable items. Stories are a detailed "to do" list for every part of your application. Stories keep the team focused on the overall goal of the application as well as keeping the individual developers on task. There should be a clear understanding of when a story is "done".

### Schedules
The capstone project is two weeks long and can be divided into two one-week (5 day) sprints. The first sprint is getting the basic functionality of your application, or your **Minimum Viable Product**. The second sprint is for adding additional styling and **Icebox** functionality.

A typical day:
```
9:15 - Morning standup with the class
- Project: What tasks did you complete yesterday? What task are you working on today?
- Tech: What are your blockers? What is your plan for your mentorship session today?

9:30 - Check in with your group and discuss the plan for the day
- What story is each person working on?
- What is the goal for the day?
- What story / branch are you currently working on?

4:15 - Wrap up with your group
- Reflect on the progress you made throughout the day
- Move any cards completed and discuss the next steps
- Surface any blockers
- Discuss actions items for tomorrow

4:30 - Afternoon standup with the class
- Product: What did your team do today that got your application closer to the requirements of the project?
- Design: What did your team do today that increased your user's experience?

4:45 - Check out with the class
```

### Initial Setup

## package.json
{
  "dependencies": {
    "@babel/preset-react": "^7.18.6",
    "@rails/activestorage": "^7.0.4-2",
    "@rails/ujs": "^7.0.4-2",
    "@rails/webpacker": "5.4.4",
    "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
    "jest": "^29.4.2",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "react_ujs": "^2.6.2",
    "reactstrap": "^9.1.5",
    "webpack": "^4.46.0",
    "webpack-cli": "^3.3.12"
  },
  "devDependencies": {
    "webpack-dev-server": "^3"
  }
}