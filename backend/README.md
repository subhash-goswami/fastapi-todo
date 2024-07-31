
### Backend README

---

# Backend - TODO Application

## Project Overview

The backend is a FastAPI application that serves a TODO application. It provides endpoints for managing TODO items and uses SQLite as the database.

## Project Structure

```
backend/
├── alembic/
│   ├── env.py
│   ├── versions/
│   └── ...
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud.py
│   ├── database.py
│   └── routers/
│       ├── __init__.py
│       └── todos.py
├── Dockerfile
├── requirements.txt
└── test.db
```

## Setup and Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Database Migration:**

   If you are using Alembic for migrations:

   ```bash
   alembic upgrade head
   ```

## Running the Application

1. **Build Docker Image (if using Docker):**

   ```bash
   docker build -t backend .
   ```

2. **Run the Application (Docker):**

   ```bash
   docker run -p 8000:8000 backend
   ```

3. **Access the API:**

   - **GET /todos** - Retrieve all TODO items.
   - **POST /todos** - Add a new TODO item.
   - **PUT /todos/{id}** - Update an existing TODO item.
   - **DELETE /todos/{id}** - Delete a TODO item.

   Access the FastAPI documentation at `http://localhost:8000/docs`.

## Configuration

- **Environment Variables:**
  - `DATABASE_URL` - Path to the SQLite database. Default is `sqlite:///./test.db`.

- **CORS Configuration:**
  - Allowed origins, methods, and headers are configured in the FastAPI application.

## Troubleshooting

- **ModuleNotFoundError** - Ensure the working directory is correctly set in Docker and the `PYTHONPATH` is configured.

---
