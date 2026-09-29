/* OS Init setup data — ordered checklists per OS and pack.
   Step: { t: title, d: detail, cmd: optional copyable command, link: optional {label, url} }
   UMD: used by index.html, headless-tested in Node. */
(function (root) {
  'use strict';

  var OS = {
    android: { name: 'Android', icon: '🤖' },
    windows: { name: 'Windows', icon: '🪟' },
    linux: { name: 'Linux', icon: '🐧' }
  };

  var PACKS = {
    essentials: { name: 'Essentials', icon: '🧰', desc: 'Updates, security basics and must-have apps' },
    developer: { name: 'Developer', icon: '💻', desc: 'Terminals, editors, languages and tools' },
    student: { name: 'Student', icon: '🎓', desc: 'Notes, office apps and study helpers' },
    privacy: { name: 'Privacy', icon: '🔒', desc: 'Permissions, tracking and encryption' }
  };

  var STEPS = {
    android: {
      essentials: [
        { t: 'Install all system updates', d: 'Settings → System → System update. Reboot if asked — updates patch security holes.' },
        { t: 'Secure the lock screen', d: 'Set a strong PIN plus fingerprint or face unlock. Settings → Security → Screen lock.' },
        { t: 'Turn on Find My Device', d: 'So you can locate, lock or erase the phone if it is lost.', link: { label: 'android.com/find', url: 'https://www.android.com/find' } },
        { t: 'Install Firefox', d: 'A browser with real ad-blocking and extension support.', link: { label: 'Get it on Play Store', url: 'https://play.google.com/store/search?q=firefox&c=apps' } },
        { t: 'Set up backup', d: 'Settings → System → Backup. Keep photos backed up in Google Photos or a local copy.' },
        { t: 'Review app permissions', d: 'Settings → Privacy → Permission manager. Revoke location, mic and camera where not needed.' }
      ],
      developer: [
        { t: 'Enable Developer options', d: 'Settings → About phone → tap Build number 7 times. Then turn on USB debugging.' },
        { t: 'Install Termux', d: 'A real Linux terminal on Android — pkg, ssh, git, python all work.', link: { label: 'Get it on F-Droid', url: 'https://f-droid.org/packages/com.termux/' } },
        { t: 'Install a code editor', d: 'Acode editor is a solid free code editor for on-the-go coding.', link: { label: 'Get it on Play Store', url: 'https://play.google.com/store/search?q=acode+editor&c=apps' } },
        { t: 'Set up ADB on your PC', d: 'Needed to install APKs, debug apps and pull logs from the phone.', link: { label: 'Platform-tools download', url: 'https://developer.android.com/tools/releases/platform-tools' } },
        { t: 'Install git in Termux', d: 'Open Termux and run the command below.', cmd: 'pkg install git' }
      ],
      student: [
        { t: 'Install a notes app', d: 'Google Keep for quick notes, or Obsidian if you want linked notes.', link: { label: 'Get it on Play Store', url: 'https://play.google.com/store/search?q=google+keep&c=apps' } },
        { t: 'Get an office suite', d: 'Microsoft Office or WPS Office for documents and presentations on the go.', link: { label: 'Get it on Play Store', url: 'https://play.google.com/store/search?q=microsoft+office&c=apps' } },
        { t: 'Install Google Translate', d: 'Download offline languages so it works without internet.', link: { label: 'Get it on Play Store', url: 'https://play.google.com/store/search?q=google+translate&c=apps' } },
        { t: 'Turn on Focus mode', d: 'Settings → Digital Wellbeing → Focus mode. Silence distracting apps while studying.' },
        { t: 'Make study PDFs available offline', d: 'In Google Drive, star important PDFs and enable “Available offline”.' }
      ],
      privacy: [
        { t: 'Audit app permissions', d: 'Permission manager → remove background location, microphone and camera access you do not need.' },
        { t: 'Delete your advertising ID', d: 'Settings → Privacy → Ads → Delete advertising ID. Stops cross-app ad tracking.' },
        { t: 'Use private DNS', d: 'Settings → Network & internet → Private DNS → enter dns.google (or one.one.one.one). Encrypts DNS queries.' },
        { t: 'Turn off Location History', d: 'Google account → Data & privacy → Location History → Turn off.' },
        { t: 'Review third-party access', d: 'Google account → Security → Third-party access. Remove apps and sites you no longer use.' }
      ]
    },
    windows: {
      essentials: [
        { t: 'Run Windows Update', d: 'Settings → Windows Update → Check for updates. Install everything, reboot if asked.' },
        { t: 'Install Firefox', d: 'Run in Terminal (or search the Microsoft Store).', cmd: 'winget install -e --id Mozilla.Firefox' },
        { t: 'Install VLC media player', d: 'Plays every video and audio format.', cmd: 'winget install -e --id VideoLAN.VLC' },
        { t: 'Install 7-Zip', d: 'Free archiver for zip, rar and 7z files.', cmd: 'winget install -e --id 7zip.7zip' },
        { t: 'Create a restore point', d: 'Search “Create a restore point” → Create. A safety net before big changes.' },
        { t: 'Turn on ransomware protection', d: 'Windows Security → Virus & threat protection → Ransomware protection → Controlled folder access.' }
      ],
      developer: [
        { t: 'Install Git', d: 'Version control — you will need it for everything.', cmd: 'winget install -e --id Git.Git' },
        { t: 'Install VS Code', d: 'The free editor most developers use.', cmd: 'winget install -e --id Microsoft.VisualStudioCode' },
        { t: 'Install Windows Terminal', d: 'A modern tabbed terminal.', cmd: 'winget install -e --id Microsoft.WindowsTerminal' },
        { t: 'Install Node.js LTS', d: 'For JavaScript and web development.', cmd: 'winget install -e --id OpenJS.NodeJS.LTS' },
        { t: 'Install Python', d: 'For scripting and general programming.', cmd: 'winget install -e --id Python.Python.3.12' },
        { t: 'Enable WSL', d: 'Real Linux inside Windows. Run in an admin terminal, then reboot.', cmd: 'wsl --install' }
      ],
      student: [
        { t: 'Install LibreOffice', d: 'Free, full-featured office suite — no subscription needed.', cmd: 'winget install -e --id TheDocumentFoundation.LibreOffice' },
        { t: 'Install Obsidian', d: 'Free markdown notes that link together — great for study notes.', cmd: 'winget install -e --id Obsidian.Obsidian' },
        { t: 'Install SumatraPDF', d: 'Tiny, fast PDF reader — opens textbooks instantly.', cmd: 'winget install -e --id SumatraPDF.SumatraPDF' },
        { t: 'Set up cloud backup', d: 'Keep Documents and Desktop syncing with OneDrive or Google Drive so work survives a crash.' },
        { t: 'Try Focus sessions', d: 'The built-in Clock app has Focus sessions — a Pomodoro timer with Spotify integration.' }
      ],
      privacy: [
        { t: 'Install Bitwarden', d: 'Free password manager — unique passwords everywhere.', cmd: 'winget install -e --id Bitwarden.Bitwarden' },
        { t: 'Review privacy settings', d: 'Settings → Privacy & security → turn off advertising ID, activity history and tailored experiences.' },
        { t: 'Turn on device encryption', d: 'Settings → Privacy & security → Device encryption (or BitLocker on Pro). Save the recovery key!' },
        { t: 'Use a standard account daily', d: 'Create a standard user for everyday work; keep the admin account for installs only.' },
        { t: 'Install uBlock Origin', d: 'In your browser — the one ad-blocker that actually matters.', link: { label: 'ublockorigin.com', url: 'https://ublockorigin.com/' } }
      ]
    },
    linux: {
      essentials: [
        { t: 'Update everything', d: 'Run in a terminal. Do this first, always.', cmd: 'sudo apt update && sudo apt upgrade -y' },
        { t: 'Install VLC', d: 'Plays every media format.', cmd: 'sudo apt install -y vlc' },
        { t: 'Set up Timeshift backups', d: 'System snapshots — a safety net before big changes.', cmd: 'sudo apt install -y timeshift' },
        { t: 'Enable the firewall', d: 'One command, sensible defaults.', cmd: 'sudo ufw enable && sudo ufw status' },
        { t: 'Install media codecs and fonts', d: 'MP3, DVD and Microsoft fonts support.', cmd: 'sudo apt install -y ubuntu-restricted-extras' }
      ],
      developer: [
        { t: 'Install build tools', d: 'Compilers, git, curl — the basics every dev box needs.', cmd: 'sudo apt install -y git curl wget build-essential' },
        { t: 'Install VS Code', d: 'Via snap (easiest), or grab the .deb from the site.', cmd: 'sudo snap install --classic code', link: { label: 'code.visualstudio.com', url: 'https://code.visualstudio.com/' } },
        { t: 'Install Node.js via nvm', d: 'Node version manager — lets you switch Node versions. Then run: nvm install --lts', cmd: 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash' },
        { t: 'Install Python tooling', d: 'Python 3, pip and virtual environments.', cmd: 'sudo apt install -y python3 python3-pip python3-venv' },
        { t: 'Install Docker', d: 'Containers for databases and services. Log out and back in after.', cmd: 'sudo apt install -y docker.io && sudo usermod -aG docker $USER' }
      ],
      student: [
        { t: 'Open LibreOffice once', d: 'It is preinstalled on Ubuntu — set your default save format if you share files with MS Office users.' },
        { t: 'Install Obsidian', d: 'Free markdown notes that link together — great for study notes.', link: { label: 'obsidian.md', url: 'https://obsidian.md/' } },
        { t: 'Install Zotero', d: 'Free reference manager — citations and bibliographies for assignments.', link: { label: 'zotero.org', url: 'https://www.zotero.org/' } },
        { t: 'Set up automatic backups', d: 'Settings → Backups (Déjà Dup). Point it at an external drive or Google Drive.' },
        { t: 'Learn five terminal basics', d: 'ls (list), cd (change dir), cp (copy), mv (move/rename), and any-command --help. That is 90% of daily terminal use.' }
      ],
      privacy: [
        { t: 'Enable the firewall', d: 'One command, sensible defaults.', cmd: 'sudo ufw enable' },
        { t: 'Consider full-disk encryption', d: 'Easiest at install time — choose “Encrypt the new installation”. After install, encrypting is much harder.' },
        { t: 'Harden Firefox', d: 'Install uBlock Origin, then Settings → Privacy & Security → Strict tracking protection.', link: { label: 'ublockorigin.com', url: 'https://ublockorigin.com/' } },
        { t: 'Review startup applications', d: 'Disable apps you do not need starting with the system.' },
        { t: 'Lock the screen quickly', d: 'Settings → Privacy → Screen Lock on, blank-screen delay 5 minutes max. Use a strong password.' }
      ]
    }
  };

  // Build the ordered step list for an OS + pack selection.
  function buildChecklist(osKey, packKeys) {
    var out = [];
    packKeys.forEach(function (pk) {
      var steps = (STEPS[osKey] && STEPS[osKey][pk]) || [];
      steps.forEach(function (s, i) {
        out.push({ pack: pk, index: i, t: s.t, d: s.d, cmd: s.cmd || null, link: s.link || null });
      });
    });
    return out;
  }

  var api = { OS: OS, PACKS: PACKS, STEPS: STEPS, buildChecklist: buildChecklist };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.OSInitData = api;
})(typeof window !== 'undefined' ? window : global);
