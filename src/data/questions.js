export const questions = [
  {
    id: 1,
    category: "Basics",
    difficulty: "easy",
    text: "What does the term 'phishing' refer to in cybersecurity?",
    options: [
      "Scanning a network for open ports",
      "Tricking users into revealing sensitive information",
      "Encrypting files on a hard drive",
      "Updating antivirus signatures"
    ],
    correctAnswer: "Tricking users into revealing sensitive information",
    explanation:
      "Phishing is a social engineering attack that uses fake emails, messages, or websites to trick users into sharing sensitive data like passwords or banking details."
  },
  {
    id: 2,
    category: "Basics",
    difficulty: "easy",
    text: "A strong password should ideally:",
    options: [
      "Contain only lowercase letters",
      "Use personal information like your name",
      "Be short so it is easy to remember",
      "Use a mix of letters, numbers, and symbols"
    ],
    correctAnswer: "Use a mix of letters, numbers, and symbols",
    explanation:
      "Strong passwords are long and unpredictable, using a combination of uppercase, lowercase, numbers, and symbols."
  },
  {
    id: 3,
    category: "Network Security",
    difficulty: "medium",
    text: "What is the main purpose of a firewall?",
    options: [
      "To store backup data",
      "To block or allow network traffic based on rules",
      "To speed up the internet connection",
      "To provide free Wi-Fi"
    ],
    correctAnswer: "To block or allow network traffic based on rules",
    explanation:
      "A firewall monitors and controls incoming and outgoing network traffic based on security rules, acting as a barrier between trusted and untrusted networks."
  },
  {
    id: 4,
    category: "Malware",
    difficulty: "medium",
    text: "Ransomware typically:",
    options: [
      "Steals physical devices from the user",
      "Logs every key the user types",
      "Encrypts user data and demands payment",
      "Repairs corrupted system files"
    ],
    correctAnswer: "Encrypts user data and demands payment",
    explanation:
      "Ransomware encrypts your files or locks your device and demands a ransom payment to restore access."
  },
  {
    id: 5,
    category: "Authentication",
    difficulty: "easy",
    text: "Which of the following is an example of two-factor authentication (2FA)?",
    options: [
      "Password only",
      "Fingerprint only",
      "Password plus a one-time code sent to your phone",
      "Username only"
    ],
    correctAnswer: "Password plus a one-time code sent to your phone",
    explanation:
      "Two-factor authentication combines two different factors, such as something you know (password) and something you have (one-time code)."
  },
  {
    id: 6,
    category: "Web Security",
    difficulty: "medium",
    text: "What does HTTPS stand for?",
    options: [
      "Hyper Transfer Text Protocol Secure",
      "Hypertext Transfer Protocol Secure",
      "Hypertext Transmission Private Service",
      "High Transfer Text Protocol Standard"
    ],
    correctAnswer: "Hypertext Transfer Protocol Secure",
    explanation:
      "HTTPS is the secure version of HTTP, using TLS/SSL to encrypt data between the browser and the server."
  },
  {
    id: 7,
    category: "Social Engineering",
    difficulty: "medium",
    text: "Which of the following is a sign of a phishing email?",
    options: [
      "It comes from your own saved contacts only",
      "It has perfect spelling and grammar",
      "It asks you to urgently click a link and verify your account",
      "It never contains any links"
    ],
    correctAnswer: "It asks you to urgently click a link and verify your account",
    explanation:
      "Phishing emails often create urgency and ask you to click suspicious links or provide personal information."
  },
  {
    id: 8,
    category: "Device Security",
    difficulty: "easy",
    text: "Why is it important to install software updates regularly?",
    options: [
      "To make the user interface look nicer",
      "To reduce electricity consumption",
      "To patch security vulnerabilities and fix bugs",
      "To delete old user files"
    ],
    correctAnswer: "To patch security vulnerabilities and fix bugs",
    explanation:
      "Updates often contain security patches that fix known vulnerabilities which attackers could exploit."
  },
  {
    id: 9,
    category: "Data Protection",
    difficulty: "medium",
    text: "What is encryption?",
    options: [
      "The process of deleting files permanently",
      "The process of converting data into a coded form",
      "The process of backing up data",
      "The process of compressing files to save space"
    ],
    correctAnswer: "The process of converting data into a coded form",
    explanation:
      "Encryption converts readable data (plaintext) into an unreadable format (ciphertext) that can only be read with the correct key."
  },
  {
    id: 10,
    category: "Web Security",
    difficulty: "hard",
    text: "Which attack involves injecting malicious scripts into trusted websites?",
    options: [
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Denial of Service (DoS)",
      "Man-in-the-Middle (MitM)"
    ],
    correctAnswer: "Cross-Site Scripting (XSS)",
    explanation:
      "XSS allows attackers to inject malicious scripts into web pages viewed by other users."
  },
  {
    id: 11,
    category: "Network Security",
    difficulty: "medium",
    text: "What is a VPN primarily used for?",
    options: [
      "Physically cleaning your computer",
      "Creating a secure, encrypted tunnel over an untrusted network",
      "Increasing your screen brightness",
      "Defragmenting your hard drive"
    ],
    correctAnswer: "Creating a secure, encrypted tunnel over an untrusted network",
    explanation:
      "A VPN encrypts your traffic and routes it through a secure server, protecting your data on public or untrusted networks."
  },
  {
    id: 12,
    category: "Account Security",
    difficulty: "easy",
    text: "Which of the following is the safest way to store passwords?",
    options: [
      "Writing them on a sticky note near your computer",
      "Using the same password everywhere",
      "Using a reputable password manager",
      "Keeping them in an unencrypted text file"
    ],
    correctAnswer: "Using a reputable password manager",
    explanation:
      "Password managers securely store and encrypt your passwords so you can use strong, unique passwords for each site."
  },
  {
    id: 13,
    category: "Malware",
    difficulty: "medium",
    text: "A keylogger is a type of malware that:",
    options: [
      "Encrypts all files on the system",
      "Records every keystroke made by the user",
      "Deletes system files automatically",
      "Overheats the CPU"
    ],
    correctAnswer: "Records every keystroke made by the user",
    explanation:
      "Keyloggers capture keystrokes to steal sensitive information like passwords, messages, and credit card numbers."
  },
  {
    id: 14,
    category: "Physical Security",
    difficulty: "easy",
    text: "Which of these is a good physical security practice?",
    options: [
      "Leaving your computer unlocked whenever you leave",
      "Allowing strangers to tailgate into secure areas",
      "Locking your screen when stepping away from your desk",
      "Sharing your ID card with coworkers"
    ],
    correctAnswer: "Locking your screen when stepping away from your desk",
    explanation:
      "Locking your screen prevents unauthorized people from accessing your device while you are away."
  },
  {
    id: 15,
    category: "Incidents",
    difficulty: "medium",
    text: "If you suspect your account has been compromised, what should you do FIRST?",
    options: [
      "Ignore it and hope it goes away",
      "Post about it on social media",
      "Immediately change your password and enable 2FA",
      "Buy a new computer"
    ],
    correctAnswer: "Immediately change your password and enable 2FA",
    explanation:
      "The first step is to secure the account by changing the password and enabling additional security like two-factor authentication."
  },
  {
    id: 16,
    category: "Privacy",
    difficulty: "medium",
    text: "Why should you be careful with public Wi-Fi networks?",
    options: [
      "They always charge extra money",
      "They are usually slower than mobile data",
      "They can be insecure and allow attackers to intercept your data",
      "They block all websites"
    ],
    correctAnswer: "They can be insecure and allow attackers to intercept your data",
    explanation:
      "Public Wi-Fi can be insecure; attackers can sniff unencrypted traffic or set up fake hotspots."
  },
  {
    id: 17,
    category: "Email Security",
    difficulty: "medium",
    text: "Which file type is generally RISKIER to open from unknown emails?",
    options: [".txt", ".jpg", ".exe", ".pdf"],
    correctAnswer: ".exe",
    explanation:
      "Executable files (.exe) can directly run code on your system and are often used to deliver malware."
  },
  {
    id: 18,
    category: "Policies",
    difficulty: "easy",
    text: "An 'Acceptable Use Policy' (AUP) in an organization defines:",
    options: [
      "The salary structure of employees",
      "How employees can use company IT resources",
      "Holiday and leave calendar",
      "The physical layout of the office"
    ],
    correctAnswer: "How employees can use company IT resources",
    explanation:
      "An AUP outlines rules for using company devices, networks, and data."
  },
  {
    id: 19,
    category: "Advanced",
    difficulty: "hard",
    text: "Which of these best describes 'social engineering'?",
    options: [
      "Using software tools to scan ports",
      "Exploiting human psychology to gain confidential information",
      "Using encryption to protect data",
      "Writing secure code"
    ],
    correctAnswer: "Exploiting human psychology to gain confidential information",
    explanation:
      "Social engineering manipulates people rather than directly attacking technical systems."
  },
  {
    id: 20,
    category: "Web Security",
    difficulty: "hard",
    text: "Which security header helps mitigate XSS attacks in modern browsers?",
    options: [
      "Content-Security-Policy (CSP)",
      "Content-Length",
      "User-Agent",
      "Accept-Language"
    ],
    correctAnswer: "Content-Security-Policy (CSP)",
    explanation:
      "CSP defines which resources the browser is allowed to load, greatly reducing XSS risks when configured correctly."
  }
];
