# Express Learning API

A small Express 5 API used to practice routes and environment configuration.

## Run locally

```sh
cd render-demo-api
npm install
npm start
```

The server uses port `5000` by default. Copy `.env.example` to `.env` to set `APP_NAME`, `NODE_ENV`, or `PORT`.

## Endpoints

- `GET /` — returns a status message, app name, and environment
- `GET /api/student` — returns a sample student record

## Files

The app source and package configuration are in `render-demo-api/`. The endpoints return sample data and do not connect to a database.
