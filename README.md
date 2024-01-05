# Phone Call Management System

This project is a simple phone call management system implemented using React for the front end and Axios for handling API requests. The system allows users to view and manage phone calls, including archiving and unarchiving calls.

## Project Structure

### `api.js`

#NOTE: The patch routes for updating calls and resetting calls are not working. I have tried to debug the issue, but I have not been able to resolve it. I have included the code for these routes in the code.

This module contains functions for interacting with the API. It uses Axios to make HTTP requests to the server.

- `getActivities`: Fetches all activities (phone calls).
- `getIdActivity`: Fetches a specific activity by its ID.
- `updateCall`: Updates a single call, marking it as archived or unarchived.
- `updateMultipleCalls`: Updates multiple calls simultaneously.
- `resetCalls`: Resets all calls to their initial state.

### `ActivityFeed.jsx`

This component displays a list of phone calls in an activity feed. Users can archive all calls at once, and the unarchived calls are displayed with additional details using `CallCard`.

- `handleArchiveAll`: Archives all visible calls and updates the state.
- `fetchActivities`: Fetches and sets the initial list of calls.

### `CallCard.jsx`

A reusable component that displays details of a single phone call. Users can expand the card to view additional information.

### `Archive.jsx`

This component displays a list of archived calls. Users can unarchive all calls at once.

- `handleUnarchiveAll`: Unarchives all visible calls and updates the state.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the application with `npm start`.

## Usage

- Visit the main page to view and manage phone calls.
- Archived calls can be viewed and unarchived on the Archive page.

---

## Original Task

## Summary

The goal of this test is to make you code a small ReactJS app. We have prepared a skeleton app for you, but please change whatever you want (CSS files, HTML structure, JS structure, etc).

The app will have the following features:

- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call
- **Archive** - the final user should be able to archive (and unarchive) a call. Archived calls will no longer be displayed on the Activity Feed and should have a separate Archived Tab.
- A button to archive all calls in the activity feed
- A button to unarchive all calls in the archived calls tab

Show us what you can do in 48 hours. You will be assessed on the following parameters:

- Focus on design (Pay attention to the UI/UX and transitions)
- Best React Practices
- Code Readability and Maintainability

## Submission

After you're done with the assignment, please submit a link to the **GitHub/Bitbucket repository** (make sure it's public) with your code **AND** a deployment link where our recruiters can interact with the live version. You can use freely available tools like **Netlify, Vercel, Heroku, etc** to deploy your React application.

**Note:** Submissions without a valid repository and deployment link will be removed from any further consideration.

To give you an idea, here's what our app looks like:

![app](https://user-images.githubusercontent.com/630714/29357034-763d7216-8276-11e7-8bcb-e77d9645dfcc.png)

## Installation

We're using [yarn](https://yarnpkg.com) here (but you can use npm):

```
yarn install
yarn start
```

## API documentation

### Routes

Here is the API address: https://cerulean-marlin-wig.cyclic.app/ <br>
If you run into a CORS error, please prepend the base URL with this CORS Anywhere server URL: https://charming-bat-singlet.cyclic.app/ <br>
The prepended base URL will look like this https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/

The API is hosted on a free server, which is why the first time you call the API, it will throw an error. The server goes to sleep if there hasn't been any activity for a while, but after 30-60 seconds of the first call, it should work as expected. Please reach out to us in case it doesn't.

- **GET** - BASE_URL/activities: get calls to display in the Activity Feed
- **GET** - BASE_URL/activities/<call_id> retrieve a specific call details
- **PATCH** - BASE_URL/activities/<call_id> update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:

```
{
  is_archived: true
}
```

- **PATCH** - BASE_URL/reset: Reset all calls to initial state (usefull if you archived all calls).

### Call object

- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - Aircall number used for the call
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.
