# White Board Exercises

## SQL
If I need a database table for hotel reservations, write out a schema that would give me all the info I need. (Can be open to interpretation - just an exercise in thinking through a problem.)

From that schema, (instructors note: make sure they have num of guests, total cost) write a SQL query that will return cost of the stay per person. List the top 10 most expensive stays/person.


SELECT cost, num_of_guests, cost/num_of_guests AS cost_per_person FROM reservation ORDER BY cost_per_person DESC LIMIT 10 (This could be slightly off, but it is the general idea)
