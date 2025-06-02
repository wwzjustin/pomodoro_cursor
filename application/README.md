# TomatoTime

TomatoTime is a minimalist Pomodoro timer app designed to boost productivity by breaking work into intervals, traditionally 25 minutes in length, separated by short breaks. This technique is known as the Pomodoro Technique.

## Features

- **Start, Stop, and Reset Timer**: Easily control your work sessions with intuitive controls.
- **Animated Timer**: Visualize your progress with a smooth, animated circular progress ring.
- **Points System**: Earn points for each completed Pomodoro session to track your productivity.
- **Minimalistic UI**: A clean and simple interface inspired by the Pomodoro technique, featuring a tomato icon and a circular progress ring.

## Tech Stack

TomatoTime is built using:

- **React**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.

## Installation Instructions

To run TomatoTime locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd tomatotime
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the app.

## Folder Structure

```
tomatotime/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CircularProgress.js
│   │   ├── PomodoroTimer.js
│   │   ├── TimerControls.js
│   │   └── TomatoIcon.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Future Improvements

- **Notifications**: Implement desktop and mobile notifications to alert users when a session ends.
- **Custom Timer Lengths**: Allow users to set custom work and break intervals.
- **User Account Sync**: Enable account creation and synchronization across devices.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details. 