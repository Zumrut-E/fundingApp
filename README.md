# Funding Case Management Demo

A small full-stack practice project for viewing agricultural funding applications, built to explore Angular, Spring Boot and a layered application structure.

## Features

- Application table with status filter
- Details dialog (Angular Material)
- Review page with disabled decision actions (placeholder)
- Loading, error and empty states

The approval/rejection workflow is not implemented yet.

## Tech stack

- Frontend: Angular 21, Angular Material, TypeScript, Signals
- Backend: Java 21, Spring Boot 4.1, Spring Data JPA
- Database: H2 in-memory with sample data

## Architecture

`Angular component → HTTP service → REST controller → service → JPA repository → H2`

## Run locally

Requirements: Node.js/npm and Java 21.

Backend (in `backend`):

    ./mvnw spring-boot:run

On macOS/Linux, run `chmod +x mvnw` first if needed. On Windows, use `mvnw.cmd spring-boot:run`.

Frontend (in `frontend`):

    npm install
    npm start

Open http://localhost:4200. The dev proxy forwards `/api` to the backend on port 8080.

## Tests

    cd frontend
    npm test -- --watch=false

Includes the generated component specs and one unit test for the status filter.

## Limitations

- Review page does not load an individual case yet
- H2 data resets on restart
