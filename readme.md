# YouTube Video Summarizer

## Prerequisites
- Python 3.8+
- Node.js 14+
- Google Gemini API Key

## Backend Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Create Virtual Environment
```bash
cd .venv
Scripts\activate  


```

3. Install Backend Dependencies
```bash
pip install -r requirements.txt
```

4. Configure Environment Variables
- Create `.env` file in backend root
- Add your Google API Key:
```
GOOGLE_API_KEY=your_google_api_key_here
```

5. Run Backend Server
```bash
cd audioToText
fastapi dev app.py
```

## Frontend Setup

1. Install Frontend Dependencies
```bash
cd client/audioToSpeech
npm install
```

2. Run React Development Server
```bash
npm run dev
```

## Running the Application
- Backend will run on `http://localhost:8000`
- Frontend will run on `http://localhost:5173`

## Deployment Notes
- Ensure CORS is configured for production
- Use environment-specific configurations
- Secure your API endpoints

## Troubleshooting
- Check API key permissions
- Verify YouTube video has transcripts
- Ensure all dependencies are installed