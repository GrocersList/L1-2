# 🚀 CodeSandbox Setup Guide

## Quick Start for CodeSandbox

### 1. **Install Dependencies**

- Open the terminal in CodeSandbox
- Run: `npm run install-all`
- Wait for installation to complete

### 2. **Start the Backend**

- In the terminal, run: `npm run server`
- You should see: "🚀 Server running on port 3001"
- Keep this terminal tab open

### 3. **Start the Frontend**

- Open a new terminal tab
- Run: `npm run client`
- Wait for React to compile
- The app will open automatically

### 4. **Verify Both Are Running**

- **Backend**: Should show "Server running on port 3001"
- **Frontend**: Should open in a new tab/window
- **API**: Test by visiting http://localhost:3001/health

## 🔧 CodeSandbox-Specific Notes

### **Port Configuration**

- **Backend**: Port 3001 (configured for CodeSandbox)
- **Frontend**: Port 3000 (default React port)
- **Proxy**: Frontend automatically forwards API calls to backend

### **Running Both Simultaneously**

- Use `npm run dev` to start both at once
- Or run them in separate terminal tabs

### **Troubleshooting**

- **Port conflicts**: CodeSandbox handles this automatically
- **CORS issues**: Backend is configured for CodeSandbox
- **Proxy issues**: Check that backend is running on port 3001

### **Development Workflow**

1. Backend runs on port 3001
2. Frontend runs on port 3000
3. Frontend proxies API calls to backend
4. Both can run simultaneously

## 📱 CodeSandbox Features

### **Terminal Tabs**

- Use multiple terminal tabs for frontend/backend
- Each can run independently

### **Auto-reload**

- Backend auto-reloads with nodemon
- Frontend auto-reloads with React

### **Port Management**

- CodeSandbox automatically handles port conflicts
- No need to manually configure ports

## 🎯 Challenge Instructions

Once both are running:

1. **Test the app** - try adding, toggling, and deleting todos
2. **Find the bugs** - look for broken functionality
3. **Fix the issues** - correct the problems you find
4. **Add the missing feature** - implement the update endpoint

## 🚨 Common Issues

### **"Cannot connect to backend"**

- Ensure backend is running on port 3001
- Check terminal for server startup messages

### **"Proxy error"**

- Verify backend is running
- Check that proxy is set to port 3001

### **"Port already in use"**

- CodeSandbox should handle this automatically
- Try restarting the terminal

## ✅ Success Indicators

- Backend shows "Server running on port 3001"
- Frontend opens without errors
- API calls work (check browser console)
- Todos can be added, toggled, and deleted

---

**Ready to start debugging!** 🐛
