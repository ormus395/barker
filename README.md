# code-blog

## Todos:

### api

- [x] wired up blog schema
- [x] blog post route
- [x] blog pre save is parsing markdown then sanitizing the html
- [x] blog route validation
  - [x] validation error handling within controllers
- [x] session and cookie middleware for admin user
- [x] implement csrf protection
  - [] Need to find out how to send to react client once we get there
- [x] create admin user
  - [] find out how to seed this to db in a production env
- [x] create association between admin user and blog posts
- [] figure out a way to maintain one user resource
  - meaning, hide or block user creation endpoint from end users
- [x] authenticate all resource endpoints
- [x] add authorization to post routes
- [x] proper error handling
- [] image upload to make posts fancy
- [] add pagination and curate home feed

### client

- [x] start basic client build

- [] **Routing:**
  - [x] get routing working
  - [] work on nested routing for the blogs
- [] **Finish the pages**
  - [] Landing
  - [] About
  - [] Hire
  - [] Portfolio
  - [] Blog home feed

possible color palette

- #17252a
- #2b7a78
- #3aafa9
- #def2f1
- #feffff
