# PROMPTS

This repository contains the ABTalks 60-Day Coding Challenge demo app.

## Project Links
- Repository: https://github.com/Ratan0606/vibe-code-hackathon
- Live app: https://abtalks-kappa.vercel.app

## Route Map
```
/
/dashboard
/day/12
```

## Prompt Summary

The app was built to satisfy a mobile-first challenge for Indian college students.

Requirements included:
- A landing page (`/`) that explains ABTalks, builds trust, and motivates students to start.
- A student dashboard (`/dashboard`) showing current streak, today’s task, challenge progress, completion state, and achievements.
- A challenge day screen (`/day/12`) where a student can read the task, see build requirements, and submit proof of work with GitHub and LinkedIn links.

Edge cases were handled with mocked states for:
- first day / zero streak
- missed day
- empty profile

The project used mocked data only and did not require authentication or a production database.
