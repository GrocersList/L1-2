# Todo App Bug Challenge 🐛

## Challenge Overview

You have **30 minutes** to identify and fix bugs in this Todo application. The app has several intentional bugs that test your debugging skills and understanding of React, Express, and JavaScript fundamentals.

## What You Need to Do

1. **Identify Bugs**: Find all the intentional bugs in both frontend and backend
2. **Fix Bugs**: Correct the issues to make the app fully functional
3. **Add Feature**: Implement the missing "Update Todo" endpoint in the backend
4. **Test**: Ensure all functionality works correctly

## Tech Stack

- **Frontend**: React with hooks
- **Backend**: Express.js
- **Database**: In-memory mock (no external DB needed)
- **Authentication**: Simple JWT tokens

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```

### Running the Application

#### Option 1: Local Development

1. Start both frontend and backend:
   ```bash
   npm run dev
   ```
2. Frontend will be available at: http://localhost:3000
3. Backend API will be available at: http://localhost:3001

#### Option 2: CodeSandbox

1. **Backend**: Click "Run" on the server folder
2. **Frontend**: Click "Run" on the client folder
3. The frontend will automatically proxy to the backend

### Alternative: Run Separately

- Backend only: `npm run server`
- Frontend only: `npm run client`

## Port Configuration

- **Frontend**: Port 3000
- **Backend**: Port 3001
- **Proxy**: Frontend automatically proxies API calls to backend

## API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### Tasks

- `GET /api/tasks` - Get all tasks for current user
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH /api/tasks/:id/toggle` - Toggle task completion
- `GET /api/tasks/stats` - Get task statistics

## Data Models

### User

```javascript
{
  id: string,
  username: string,
  email: string,
  password: string (hashed),
  createdAt: Date
}
```

### Task

```javascript
{
  id: string,
  title: string,
  description: string,
  status: 'pending' | 'completed',
  priority: 'low' | 'medium' | 'high',
  dueDate: Date,
  userId: string,
  createdAt: Date,
  updatedAt: Date
}
```

## Challenge Requirements

### Must-Have Features

1. **User Authentication**

   - Registration and login forms
   - JWT token management
   - Protected routes

2. **Task Management**

   - CRUD operations for tasks
   - Task status toggling
   - Priority and due date handling

3. **User Interface**

   - Responsive design
   - Task filtering and sorting
   - Loading states and error handling

4. **Data Persistence**
   - Mock database with in-memory storage
   - Data persistence across server restarts (optional)

### Bonus Features

1. **Real-time Updates**

   - WebSocket implementation
   - Live task updates

2. **Advanced Features**

   - Task categories/tags
   - Bulk operations
   - Export functionality
   - Search and advanced filtering

3. **Performance Optimizations**
   - Pagination
   - Caching strategies
   - Lazy loading

## Evaluation Criteria

### Code Quality (30%)

- Clean, readable code
- Proper error handling
- Consistent coding style
- Good separation of concerns

### Functionality (40%)

- All required features implemented
- Proper API design
- Data validation
- Error handling

### User Experience (20%)

- Intuitive interface
- Responsive design
- Loading states
- Error messages

### Technical Implementation (10%)

- Efficient algorithms
- Proper state management
- Async operations
- Security considerations

## Submission Guidelines

1. Complete all required features
2. Ensure the application runs without errors
3. Add comments for complex logic
4. Include any additional features you'd like to showcase
5. Be prepared to explain your design decisions

## Tips

- Start with the backend API structure
- Use modern JavaScript features
- Implement proper error handling early
- Test your endpoints thoroughly
- Focus on clean, maintainable code
- Don't over-engineer - keep it simple but functional

## CodeSandbox Notes

- The backend runs on port 3001
- Frontend automatically proxies API calls to the backend
- Both can run simultaneously in separate tabs
- Check the console for any connection errors

Good luck! 🚀
