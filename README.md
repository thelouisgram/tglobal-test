# Frontend Developer Assignment – Roster System

This project is a functional **Roster System** built for the Tactology Global frontend developer assignment. It implements a calendar-based scheduling interface with room-based columns and time-based rows.

##  Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [Chakra UI v3](https://v3.chakra-ui.com/)
- **Icons**: [iconsax-reactjs](https://www.npmjs.com/package/iconsax-reactjs) & [react-icons](https://react-icons.github.io/react-icons/)
- **Date Utilities**: [date-fns](https://date-fns.org/)

##  Features

- **Dynamic Calendar Grid**: A high-fidelity reproduction of the Figma design showing rooms and time slots.
- **Date Navigation**:
  - Step forward/backward through days.
  - "Today" shortcut to reset the view.
  - Native date picker for jumping to specific dates.
- **Month View**: A togglable monthly overview for high-level planning.
- **Schedule Details**: Interactive event cards that open a detailed popup.
- **Responsive Layout**: Designed to work seamlessly within the main application sidebar and header context.
- **Refined UI**: Consistent use of typography (Manrope & Plus Jakarta Sans) and curated color palettes.

##  Setup Instructions

### 1. Clone the repository

```bash
git clone <https://github.com/thelouisgram/tglobal-test>
cd tglobal-test
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

##  Project Structure

The project follows a modular structure, separating feature logic, UI components, and utilities.

###  Core Application (`/app`)

- `layout.tsx`: Root layout defining global fonts (Manrope, Plus Jakarta Sans) and Chakra UI provider.
- `page.tsx`: Entry point for the main application, orchestrating the Sidebar and Main Content areas.

### Features (`/app/features`)

Organized by functional area:

- **`sidebar/`**: Implementation of the collapsible navigation sidebar.
- **`mainContent/`**: The primary viewing area.
  - `PageArea.tsx`: Dynamic page switcher based on active navigation.
  - **`Pages/planner/`**: The core Roster/Planner module.
    - `Planner.tsx`: Main orchestrator component for the planner view.
    - `PlannerHeader.tsx`: Context-specific header for the planner.
    - `PlannerTab.tsx`: Switcher for Live vs. Planner (Month) views.
    - `CalendarToolBar.tsx`: Controls for date navigation and view selection.
    - `CalendarGrid.tsx`: The primary grid container that renders daily or monthly views.
    - **`components/CalendarGrid/`**: Granular grid components:
      - `RoomColumn.tsx`: Handles vertical rendering of rooms and their overlapping events.
      - `EventCard.tsx`: Individual interactive shift cards.
      - `EventDetailsDialog.tsx`: Modal popup for shift information.
      - `MonthView.tsx`: Implementation of the monthly calendar grid.

### 🛠️ Utilities & Types (`/app/utils` & `/app/types`)

- `utils/planner/events.ts`: Centralized dummy data for demonstration.
- `utils/planner/eventLayout.ts`: Complex logic for calculating event positions and handling overlaps in the grid.
- `types/planner.ts`: TypeScript interfaces for Events and domain models.

---
