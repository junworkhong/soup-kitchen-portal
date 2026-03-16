# soup-kitchen-portal
A full-stack online web portal for the Columbia Soup Kitchen so that volunteers can find information such as hours, location, how to get involved, and more. 

Will potentially grow into tracking volunteers and other management operations. 

**CURRENTLY IN PRE-DEVELOPMENT PHASE!!**

## Project Overview
Built with the MERN stack, the portal is designed to provide community members with essential information about services and volunteer opportunities. The initial release focuses on marketing and organizational information, with scalable architecture built to support future features.

## Problem
Columbia Soup Kitchen (part of Community Impact, a nonprofit organization dedicated to serving people in need in the Morningside Heights and Harlem communities in tandem with Columbia University), currently has no web presence. 

This website will:

- Provide centralized, accessible information about services and hours
- Enable community members to learn about volunteer opportunities
- Share the organization's mission and impact stories
- Reach a broader audience online

## Goals
### Phase 1 (Current)

- Informative marketing website with key organizational information
- Display hours, location, and services offered
- Showcase volunteer opportunities and signup process
- Implement responsive design for mobile accessibility
- Optimize for SEO and search visibility

### Phase 2
In progress

## Tech Stack
### Frontend:
- React
- Vite

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB Atlas

## Architecture
### Data Flow:

1. React frontend makes requests to Express backend
2. Express handles routes and talks to MongoDB
3. MongoDB stores/retrieves data
4. Express sends JSON responses back to React
5. React renders the data

### Files
frames/

ARCHITECTURE.md

README.md

1. frames/ contains static mockups
2. ARCHITECTURE.md and README.md contain info about the project

## Future Features
- Event calendar
- Volunteer management
- Donation platform
- Admin dashboard
