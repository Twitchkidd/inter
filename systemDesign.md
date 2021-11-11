# System Design

You've made it! Your idea has a team and funding, and now it's time to go international!

You're going to hear at some point that "it's slow." What do you do then? Ask more questions! It's never enough to just know that it's slow. What time of day, where in the world, what were you doing when it was slow. Then you make a replicatable case. Don't start changing things first, because you're probably wrong. Understand first!

Cloud Deployment

IaaS vs PaaS

Infastructure as a service: AWS, Google Cloud, Linode (Computers on the Internet)

Platform as a service: Heroku, Amaon's Elastic Bean Stalk (Give them the application code, they make sure everything works. This is nice until it costs a lot of money. Great for startups!)

CDNs! Serve images, videos, libraries, JS, and CSS, from servers that are optimized to shovel bytes down the pipe on the hardware level! It'll save money, too, they're better at it than you! It's okay! Heads up for stale data though! This can be prevented by using timestamps and namespacing, so not main.css, 20211110-007-main.css

Database indexing! Get data faster by using binary tree searching at logN! Don't just index everything, though, because a) it's space, and b) every time you update the data, you have to reindex! Fast reads, slow writes.

Caching! Redis and Memcache: caching servers keep the db in memory! It's volitile, but if you can manage that it's *way* faster! SQL cache - run SQL, cache result! Fragment cache - some parts of the page are going to be used over and over, so you can cache the html that a SQL query generates! HTTP cache - use HTTP headers that say like don't update if it's not past *this* time, look for a local client-side cache instead!

Message queues! If you're sending texts out and it slows up, save your server from falling over with a memory queue technology.

Add servers! You can use DNS as a "poor man's load balancer" but you should use a load balancer! It's a server that checks your server's traffic and distributes requests intelligently! Nginx, ELB etc. With load balancing though, you can only scale out your servers if the state is pushed out from the server and into the cache or database. Every server has to have the same version of the data.

Adding servers is called 'horizontal scaling.' Scaling the database ... oh, lol, don't do that, is the advice, instead just throw money at it. 'Vertical scaling.' Eventually you have a big of a database as you can have, and have to scale, then. Never horizontally scale your database though, everyone sucks at it! Hire a database specialist to aggressively lighten the load on the database. What tables can we drop, any n+1 queries, yada yada. THEN when you've FINALLY done that, then you've got to scale the database, and welcome to hell. At a high level it's replication (oh, btw, back in 2018, master-slave was not cool.) One way is to have one DB taking in the writes, and fan them out to follower DBs that can take all of the read load. If you have a write-heavy application, though, this doesn't get you much, it only scales reads. You can get replication lag, though, which took AirBnb down for a bit, lol. Then there's sharding, or partitioning. But like a geographic shard doesn't save you a whole lot, and if you use something quasirandom like a-f, g-m, and n-z users, but joins suck then! It's good for enterprise applications, though, because you aren't going to be doing joins across the analytics from company A, company B, and company C. Another solution is distributed databases, which massively sacrafice consistency for availability. These are difficult to administrate. Like hiring a team difficult. Facebook has this level of problem, you probably do not.

Now we're all managers and our employees are saying development is slow and are complaining about the big monolithic beast. Enter microservices, or service-based architecture! Building and deploying can be easier, but you need to be versioning APIs to make sure everything talks properly, and it's more difficult to understand, debug, and refactor. You probably don't need this with 20 or under