import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  // Theme state - default to dark mode (green on black)
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Terminal state
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  // Refs for terminal functionality
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  
  // Focus input on component mount and when terminal is clicked
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);
  

  // Welcome message on component mount
  useEffect(() => {
    // Clear any existing state and show welcome message
    setOutput([
      { type: 'system', content: 'Welcome to Mikko Lempinen\'s Interactive Terminal' },
      { type: 'system', content: 'Type "help" to see available commands' },
      { type: 'system', content: '----------------------------------------' }
    ]);
    // Reset command history on mount to prevent persistence
    setCommandHistory([]);
    setHistoryIndex(-1);
  }, []);
  
  // Portfolio data - easily customizable content
  const portfolioData = {
    about: {
      name: 'Mikko Lempinen',
      title: 'Doctoral Reseracher',
      bio: `I am a passionate software engineer with 3+ years of experience in full-stack development
and machine learning research. I specialize in building scalable web applications and 
conducting research in artificial intelligence and cyber security.

Currently working at Biomimetics and Intelligent Systems Group (BISG), University of Oulu as a 
Doctoral Researcher, where I am spearheading development of a next-gen AI Security Platform.`,
      location: 'Oulu, Finland',
      email: 'mikko_lempinen@outlook.com'
    },
    
    skills: {
      programming: ['Python', 'C++', 'JavaScript', 'Java', 'Kotlin'],
      frontend: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Vue.js'],
      backend: ['Node.js', 'Flask', 'SQL', 'FastAPI', 'PostgreSQL', 'MongoDB'],
      ml: ['PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'],
      cloud: ['Docker', 'Kubernetes', 'CI/CD', 'CSC Cloud Services', 'AWS', 'Google Cloud', ],
      tools: ['Git', 'Linux', 'Docker', 'VS Code', 'Jupyter', 'Postman']
    },
    
    experience: [
      {
        company: 'Biomimetics and Intelligent Systems Group, University of Oulu',
        position: 'Doctoral Reseracher',
        duration: 'Sept 2025 - Present',
        description: 'Lead development of a next-gen AI Security Platform.'
      },
      {
        company: 'Biomimetics and Intelligent Systems Group, University of Oulu',
        position: 'Research Assistant',
        duration: 'Sept 2024 - Aug 2025',
        description: 'Conducted extensive research into vulnerabilities affecting large language model (LLM) applications and different security frameworks for safe AI deployment. Architected and implemented secure deployment strategies for LLM applications. Represented Oulu University Secure Programming Group in AI conferences, presenting posters and interacting with industry leaders.'
      },
      {
        company: 'Biomimetics and Intelligent Systems Group, University of Oulu',
        position: 'Summer Trainee',
        duration: 'May 2024 - Aug 2024',
        description: 'Designed and developed a containerized virtual environment for vulnerability testing language models, incorporating various LLMs in inference, as well as different tools for testing them for vulnerabilities. Additionally, managed multiple AI Hackathons with up to 100+ participants.'
      }
    ],
    
    projects: [
      {
        name: 'Digital Asset Market Data Analytics Platform',
        tech: 'Python, JavaScript, HTML/CSS',
        description: 'Architected and developed a web-based market data analytics platform, allowing interactive analysis of various market data metrics. Automated SQL database funcitonalities in conjunction with the REST APIs of all major cryptocurrency exchanges.',
        github: 'TBD (Not Published Yet)'
      },
      {
        name: 'Chatbot for Assessing System Security with OpenAI GPT-3.5',
        tech: 'React, Python, Wazuh, OpenAI, Flask, CSC Cloud Services',
        description: 'Designed and developed the Python backend for an AI-powered chatbot capable of suggesting and executing system security related tasks, with an automated threat detection system.',
        github: 'https://github.com/Zippo00/Chatbot-for-Assessing-System-Security'
      },
      {
        name: 'Menu and Food Ordering Web Application for Restaurants',
        tech: 'Python, React, Flask, Docker, CSC Cloud Services',
        description: 'Lead the 4 member application development team and took care of DevOps.',
        github: 'https://github.com/Zippo00/GET-Food'
      }
    ],
    
    education: [
      {
        degree: 'D.Sc. in Computer Science',
        school: 'University of Oulu',
        year: '2025 - Present',
        focus: 'Artificial Intelligence and Cyber Security'
      },
      {
        degree: 'M.Sc. in Computer Science and Engineering',
        school: 'University of Oulu',
        year: '2025',
        focus: 'Artificial Intelligence'
      },
      {
        degree: 'B.Sc. in Computer Science and Engineering',
        school: 'University of Oulu',
        year: '2023',
        focus: 'Artificial Intelligence and Project Management'
      }
    ],
    
    publications: [
      {
        title: 'TBD',
        journal: 'TBD',
        year: 'TBD',
        link: 'TBD'
      },
      {
        title: 'TBD',
        journal: 'TBD',
        year: 'TBD',
        link: 'TBD'
      }
    ],
    
    contact: {
      email: 'mikko_lempinen@outlook.com',
      linkedin: 'TBD',
      github: 'https://github.com/Zippo00',
      website: 'https://www.mikkolempinen.dev'
    }
  };
  
  // Available commands - easily extensible
  const commands = {
    help: () => ({
      type: 'output',
      content: `Available commands:
  about        - Learn about me
  skills       - View my technical skills
  experience   - See my work experience
  projects     - Check out my projects
  education    - View my educational background
  publications - See my research publications
  contact      - Get my contact information
  resume       - Download my resume
  clear        - Clear the terminal
  ls           - List directory contents
  whoami       - Display current user
  date         - Show current date and time
  help         - Show this help message`
    }),
    
    about: () => ({
      type: 'output',
      content: `${portfolioData.about.name} - ${portfolioData.about.title}
Location: ${portfolioData.about.location}

${portfolioData.about.bio}

Contact: ${portfolioData.about.email}`
    }),
    
    skills: () => ({
      type: 'output',
      content: `Technical Skills:

Programming Languages:
  ${portfolioData.skills.programming.join(', ')}

Frontend Technologies:
  ${portfolioData.skills.frontend.join(', ')}

Backend Technologies:
  ${portfolioData.skills.backend.join(', ')}

Machine Learning & AI:
  ${portfolioData.skills.ml.join(', ')}

Cloud & DevOps:
  ${portfolioData.skills.cloud.join(', ')}

Tools & Utilities:
  ${portfolioData.skills.tools.join(', ')}`
    }),
    
    experience: () => ({
      type: 'output',
      content: `Work Experience:

${portfolioData.experience.map(exp => 
  `${exp.position} at ${exp.company} (${exp.duration})
  ${exp.description}`
).join('\n\n')}`
    }),
    
    projects: () => ({
      type: 'output',
      content: `Featured Projects:

${portfolioData.projects.map(project => 
  `${project.name}
  Technologies: ${project.tech}
  ${project.description}
  GitHub: ${project.github}`
).join('\n\n')}`
    }),
    
    education: () => ({
      type: 'output',
      content: `Education:

${portfolioData.education.map(edu => 
  `${edu.degree}
  ${edu.school} (${edu.year})
  Focus: ${edu.focus}`
).join('\n\n')}`
    }),
    
    publications: () => ({
      type: 'output',
      content: `Research Publications:

${portfolioData.publications.map(pub => 
  `"${pub.title}"
  ${pub.journal || pub.conference} (${pub.year})
  Link: ${pub.link}`
).join('\n\n')}`
    }),
    
    contact: () => ({
      type: 'output',
      content: `Contact Information:

Email: ${portfolioData.contact.email}
LinkedIn: ${portfolioData.contact.linkedin}
GitHub: ${portfolioData.contact.github}
Website: ${portfolioData.contact.website}

Feel free to reach out for collaborations or opportunities!`
    }),
    
    resume: () => ({
      type: 'output',
      content: `Resume download link: https://www.mikkolempinen.dev/public/Resume_Mikko_Lempinen.pdf`
    }),
    
    clear: () => {
      setOutput([]);
      return null;
    },
    
    // Fun terminal commands for authenticity
    ls: () => ({
      type: 'output',
      content: `total 8
drwxr-xr-x  2 mikkolempinen  staff   64 Jun 25 11:34 projects/
drwxr-xr-x  2 mikkolempinen  staff   64 Jun 25 11:16 skills/
drwxr-xr-x  2 mikkolempinen  staff   64 Jun 25 11:20 experience/
-rw-r--r--  1 mikkolempinen  staff 1024 Jun 25 09:27 about.txt
-rw-r--r--  1 mikkolempinen  staff 2048 Jun 25 12:42 resume.pdf`
    }),
    
    whoami: () => ({
      type: 'output',
      content: 'mikkolempinen'
    }),
    
    date: () => ({
      type: 'output',
      content: new Date().toString()
    })
  };
  
  // Handle command execution
  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add command to history (only add valid non-empty commands)
    if (trimmedCmd && trimmedCmd !== '') {
      setCommandHistory(prev => {
        // Remove duplicates and add to end
        const filtered = prev.filter(c => c !== trimmedCmd);
        return [...filtered, trimmedCmd];
      });
    }
    
    // Add command to output
    setOutput(prev => [...prev, { type: 'command', content: `$ ${cmd}` }]);
    
    // Execute command
    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd]();
      if (result) {
        setOutput(prev => [...prev, result]);
      }
    } else if (trimmedCmd === '') {
      // Empty command, just show prompt
    } else {
      // Unknown command
      setOutput(prev => [...prev, { 
        type: 'error', 
        content: `Command not found: ${trimmedCmd}. Type 'help' to see available commands.` 
      }]);
    }
  };
  
  // Handle input submission
  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
    setHistoryIndex(-1);
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        // Move backwards through history (towards older commands)
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        const commandIndex = commandHistory.length - 1 - newIndex;
        setInput(commandHistory[commandIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        // Move forwards through history (towards newer commands)
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        const commandIndex = commandHistory.length - 1 - newIndex;
        setInput(commandHistory[commandIndex] || '');
      } else if (historyIndex === 0) {
        // We're at the newest command, go to empty input
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };
  
  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Theme toggle button */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      
      {/* Terminal container */}
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="control-button close"></span>
            <span className="control-button minimize"></span>
            <span className="control-button maximize"></span>
          </div>
          <div className="terminal-title">
            {portfolioData.about.name} - Home Terminal
          </div>
        </div>
        
        <div 
          className="terminal" 
          ref={terminalRef}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal output */}
          {output.map((line, index) => (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.content}
            </div>
          ))}
          
          {/* Command input */}
          <form onSubmit={handleSubmit} className="input-line">
            <span className="prompt">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              placeholder="Type a command..."
              autoComplete="off"
              spellCheck="false"
            />
            <span className={`cursor \${isTextSelected ? \'paused\' : \'\'}`}>|</span> 
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <p>© 2025 {portfolioData.about.name}.</p>
      </footer>
    </div>
  );
};

export default App;