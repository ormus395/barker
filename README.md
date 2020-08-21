# Barker

## Todos:

### Need to learn useContext

this will probably be easier than useState or her alternatives to
create application wide authentication logic and variables
because my current knowledge is useState and props like a strippers dollar
bill

### api

- [x] wired up post schema
- [x] post route
- [] post route validation
  - [] validation error handling within controllers
- [x] session and cookie middleware for users
- [] implement csrf protection
  - [] Need to find out how to send to react client once we get there
- [] create admin user
  - [] find out how to seed this to db in a production env
- [x] add ability to create multiple users
- [x] create association between users and posts
- [] authenticate all resource endpoints
- [x] add authorization to post routes
- [x] proper error handling
- [x] image upload to make posts fancy
- [] add pagination and curate home feed

### client

# bootstrapped reaact app broke, had to restart

- [x] start basic client build

- [] **Routing:**
  - [x] get routing working
  - [] work on nested routing for the blogs
- [] **Finish the pages**
  - [] Landing
  - [] Sign Up
  - [] Login
- **Data Fetching**
  - [] fetch posts on home feed
- **Auth**
  - [x] sign up user
    - [x] able to signup but need to progromatically reditect to login after successful submit
  - [] login user
  - [] logout user
  - [] control routes ect... based on auth
- [] **User experience**

possible color palette

- #17252a
- #2b7a78
- #3aafa9
- #def2f1
- #feffff

layout similar to this: https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100
