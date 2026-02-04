# Frontend Developer Test — Web-based Planner

This repository contains a small planner/roster UI used for frontend evaluation. It demonstrates a room-based calendar and a month overview, with drag/drop scheduling, event collision handling, and modular feature components.

Tech stack

- Next.js (app router)
- TypeScript
- Chakra UI
- date-fns

Quick start

## Clone the Repository

```bash
git clone https://github.com/thelouisgram/tglobal-test.git
cd tglobal-test
```

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Key paths

- `app/features/mainContent/Pages/planner` — Planner feature (UI & pages).
- `app/features/mainContent/Pages/planner/components/CalendarGrid` — Grid, `RoomColumn`, `EventCard`, `MonthView`.
- `app/utils/planner` — Shared planner utilities: layout algorithm, dummy events, color utilities.
- `app/types/planner.ts` — Domain TypeScript types.


