# Application Diagramming

Overview |

- Overview, tell a story. Why? What purpose? What sort of problem?
- Architecture partition wB into pieces, web app: front, back, database, and have
  the high-level tech stack in each section
- Diagram: walk through an interesting feature, show how data comes in from the
  front, flows to the back, updates the db, and goes back out to the user. Do this
  for a few significant features
- Future: If you had to build this out again, what would you do differently?
  What additional features would you add?

While you're diagramming, keep it high level, if you have a bunch of tech, you can mention it verbally while you're walking through it

For the frontend, draw the user interface, show where data is being entered, buttons being pressed (lines out from it!) When info goes to the server, draw an arrow out, show the type of request, data in JSON

For the backend, draw one big box, then smaller boxes inside can be each endpoint, and then in each box list the steps of what it does, and draw a line back out to the frontend with like 202, form data accepted or something.

For APIs, Input | Output | Origin ... You can draw a little box for an API, or if you use it a ton, maybe it's own box in backend

For the database, describe the info and how it's updated, but why you went with that particular tech. Draw the database as a big cylinder. If you're using a relational database, draw it as tables. If it's non-relational, draw it as a giant hash (obj.) Minimum number of data pieces to describe features. If an arrow comes in, make sure an arrow goes out. Usually DB writes/etc come with response codes. You can talk about what would happen on error, but just assume it works for now.

Prepare with your individual projects, popular projects, or pieces/features of larger apps like Reddit.

Play to your strengths. If it was collaborative, talk about what you did, though be ready for backend/application design questions.

Be cognizant of all the pros and cons of the different tech stack decisions.

Always Be Communicating.