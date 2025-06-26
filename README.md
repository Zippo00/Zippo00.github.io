## 🚀 **How to Run Locally**

### **Frontend Only (No Backend Required!)**

This is a **pure frontend React application** - all the portfolio data is stored directly in the React component, so you don't need to run any backend server.

### **Prerequisites:**
- Node.js (version 14 or higher)
- npm or yarn package manager

### **Steps to Run:**

1. **Navigate to the frontend directory:**
   ```bash
   cd /Terminal-WebPage/frontend
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server:**
   ```bash
   yarn start
   # or
   npm start
   ```

4. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to `http://localhost:3000`

### **That's it! 🎉**

The terminal portfolio will be running and you can:
- Type commands like `help`, `about`, `skills`, `projects`, etc.
- Use the theme toggle button (☀️/🌙) to switch between dark/light modes
- Navigate command history with arrow keys
- Test on different screen sizes

### **No Backend Needed Because:**
- All portfolio data is stored in the React component itself
- No API calls or server-side functionality required
- It's a completely self-contained frontend application

### **To Stop:**
- Press `Ctrl+C` in the terminal where you ran `yarn start`

The application is designed to be easily customizable - you can edit the `portfolioData` object in `/app/frontend/src/App.js` to update the personal information, skills, projects, etc.
