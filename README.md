# Barker

## Todos:

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

- [x] start basic client build

- [] **Routing:**
  - [x] get routing working
- [] **Finish the pages**
  - [] Landing
  - [] Sign Up
  - [] Login
- **Data Fetching**
  - [x] fetch posts on home feed
- **Auth**
  - [x] sign up user
    - [x] able to signup but need to progromatically reditect to login after successful submit
  - [x] login user
    - [] now need to determine how sessions will work with react
  - [x] logout user
    - [] probably not goint about it the best way, but using AuthProvider to and useContext. Set isLoggedIn after successful response from logout resource
  - [x] control routes ect... based on auth
- [] **User experience**
  - Loaders
  - messages based on actions
  - ect...

**Major App user stories**

- [x] User can login and logout
- [x] User can see posts on home feed after login
  - [] User should see a curated list of posts from users followers
- [] User can create a post
  - [] front end
  - [x] backend
- [] user can delete a post
  - [] front end
  - [x] backend
- [] user can edit a post
  - [] front end
  - [x] backend
- [] user can follow or add a friend

### more to come probably

possible color palette

- #17252a
- #2b7a78
- #3aafa9
- #def2f1
- #feffff

layout similar to this: https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100

## What I learned

### useContext

this will probably be easier than useState or her alternatives to
create application wide authentication logic and variables
because my current knowledge is useState and prop drilling

learned useContext and the context api.
_really_ like [Kent C. Dodds way of doing auth](https://kentcdodds.com/blog/authentication-in-react-applications)

will ceate essentially two apps, one with and without auth
