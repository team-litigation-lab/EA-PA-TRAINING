/* 🛠 The EA/PA course's blueprints — Trainee and Trainer (lsh-blueprint.js draws them;
   lsh-blueprint-course.js wires them in). Both decks live here: the Trainee blueprint is the
   🧭 Orientation deck (js/eapa-orientation.js opens it), drawn on the same cover and the same
   slide layout as the Trainer blueprint, and published at /blueprint.pdf.
   A slide is { icon, title, points: [...], where, tip }. Change the wording here; the page and the PDF
   are made from it each time, stamped with the deployed build. README → Handouts, Orientation and the Blueprint. */
window.LSH_BLUEPRINT = {
  product: 'EA / PA Upskill Program',
  site: 'LSH EA / PA Upskill Program',
  file: 'LSH_EA-PA',
  trainee: {
    sub: 'Your guide to the portal: the 10-day EA / PA Upskill Program, day by day',
    slides: [
      { icon: '👋', title: 'Welcome to the program', points: [
          'Ten days to work like a strategic, trusted Executive & Personal Assistant to an attorney — built around one realistic client, from Day 1 to Day 10.',
          'Learn: short topics across 10 days, each day with its own lessons.',
          'Practice: hands-on Practice Labs and live calls.',
          'Prove: a Knowledge Check each day — and a certificate at the end.',
          "You'll need Chrome or Edge on a computer, a headset with a microphone for the live calls, and a stable connection."],
        where: 'The portal opens from the LSH Training Portal; your dashboard is where you land.',
        tip: 'Your progress saves to your account automatically, so you can pick up on any computer.' },
      { icon: '🗺', title: 'Your 10-day roadmap', points: [
          'Ten days, each with its topics and its Practice Lab, listed on your dashboard.',
          'Days open one at a time — each builds on the one before.',
          'Finishing a day\'s Practice Lab unlocks tomorrow.',
          'Every day you have finished stays open: press Review to go back to it any time.'],
        where: 'Your dashboard — the day cards, in order.',
        tip: 'Read the Client Profile before Day 1: the client\'s preferences are graded from the first task.' },
      { icon: '🖥', title: 'How every day works', points: [
          '1. Lesson slides: one topic at a time, the key points on each slide. 📖 Full notes opens the complete text, which is also in Handouts → Lesson Notes. Your place is saved.',
          '2. Quick Checks: short questions between topics. Pick, change your mind, then Check Answer.',
          '3. Practice Lab: do the real task. Graded with written feedback, and it auto-saves as you type.',
          '4. Knowledge Check: pass at 70% to mark the day complete ✓.',
          '5. The next day opens when you finish the Practice Lab.'],
        where: 'Your dashboard → Start (or Review) on a day.',
        tip: 'Didn\'t pass the Knowledge Check? That is a "not yet", not a "no" — you can still move on, and retake it any time. Your best score counts.' },
      { icon: '📷', title: 'Live sessions with your trainer', points: [
          "Your trainer presents the day's slides in Google Meet. They are the same slides you have in the portal — nothing extra to install.",
          'At each checkpoint your trainer pauses for discussion. Answer out loud — a first answer is never wrong, it is where the learning starts.',
          'Longer topics have a second page (PAGE 1 / 2). On your own, use Next or the ← → keys, 🔊 Listen, or ⛶ Full screen.',
          'Missed something live? Every slide stays in your portal — reopen the day any time and pick up exactly where you left off.'],
        where: 'Google Meet for the session; the same day in your portal afterwards.',
        tip: 'Keep the portal open on the day your trainer is presenting, so you can follow and re-read at your own pace.' },
      { icon: '📚', title: 'Your dashboard at a glance', points: [
          'Banner and progress track: Days 1–10, ✓ = passed, and a click on a circle jumps to that day.',
          'Day cards fill the screen: Start a day, ☰ Topics lists its topics, ✓ Finish Training, and 💬 trainer feedback appears on the card.',
          'Scores band under the lessons: program complete, best competency score, quiz average, days done, 💬 your feedback and your ranking.',
          '▶ Resume takes you back to where you left off, and the certificate downloads from here when it is earned.'],
        where: 'Your dashboard — every sign-in lands on it.',
        tip: 'Check the day cards for 💬 at the end of each day: that is your trainer\'s feedback waiting.' },
      { icon: '🧭', title: 'Getting around', points: [
          '🎲 Tasks: surprise tasks from your trainer — acknowledge, plan and resolve before the timer ends. Graded.',
          'Client Profile: everything about your client, Elias Thorne. Read it first.',
          'Practice Lab: all hands-on tools, each opening with its day. 🔥 Live Roleplay holds the voice calls.',
          'My Notes: your private notes, downloadable as a PDF. Handouts holds 📖 Lesson Notes (the full text of every topic) and printable templates for each day.',
          '🎯 Focus and 💬 Feedback: your trainer\'s priorities for you, and your say on what is working.'],
        where: 'The top bar. On a phone, everything is under ☰ Menu; Search finds any topic or tool.',
        tip: 'Search in the top bar is the fastest way back to a tool you half remember.' },
      { icon: '👤', title: 'Meet your client: Elias Thorne', points: [
          'Managing Owner and CEO, Thorne & Partners Law Group. Every dossier, calendar, email and crisis in this program is for him.',
          'Read the Client Profile before Day 1 and keep it handy — his preferences are graded.',
          'If a later task seems to contradict the profile, raise it: spotting that is the job.',
          'Treat everything about him as confidential, like a real client.'],
        where: 'Client Profile in the top bar.',
        tip: 'Keep the Client Profile open in a second tab while you work a Practice Lab.' },
      { icon: '🧪', title: 'Practice Labs: how grading works', points: [
          'First try is free: your first submission of each exercise never uses an attempt.',
          "Repeats are per day: each day's Practice Lab has its own, and your trainer can reset them.",
          'Auto-saves: close the tab or switch devices — your work is still there.',
          'Feedback, not just a score: every graded submission shows strengths, what to change ("not this way — here\'s the better way") and next steps.',
          "Nonsense or copy-paste answers aren't graded."],
        where: 'Practice Lab in the top bar; each tool opens with its day.',
        tip: 'Use the free first try to see what the grader is looking for, then do it properly.' },
      { icon: '📞', title: 'Live calls and roleplays', points: [
          '🎧 Use a headset. The caller speaks; you answer out loud (Chrome or Edge) or type.',
          "🔊 Can't hear the caller? Check your volume and press ↻ Replay.",
          '🙋 Hands-free mode listens automatically after the caller finishes.',
          '📞 Hang Up ends the call and gives you your evaluation.'],
        where: '🔥 Live Roleplay in the top bar, and the calls inside each day\'s Practice Lab.',
        tip: 'Take the call somewhere quiet: background noise is what costs most people their score.' },
      { icon: '💬', title: 'Feedback, focus and your growth', points: [
          "Trainer feedback: your trainer writes feedback on each day's work — it lights up on the day card and in 🎯 Focus.",
          "🎯 Focus: your trainer's priorities for you, plus suggestions from your own work. Tick items off as you go.",
          'Competency profile: eight skills — accuracy, judgment, risk, efficiency, communication, composure, knowledge and real-time task handling.',
          'The profile grows as your work is graded, so it shows where you are strongest and what to build.'],
        where: '🎯 Focus in the top bar · the competency profile on your dashboard.',
        tip: 'Read the feedback on the day it arrives: it is far easier to act on while the task is fresh.' },
      { icon: '🏅', title: 'Earning your certificate', points: [
          'Pass all 10 Knowledge Checks (70% or better) and your Certificate of Completion unlocks — download it as a PDF from your dashboard.',
          'It shows your name exactly as you registered it, so check your spelling.',
          'Signed by your trainer, the Training Head and the General Manager.',
          '"With Distinction" for a 90% or better average.'],
        where: 'Your dashboard — the certificate sits beside Resume.',
        tip: 'Name spelt wrong? Tell your trainer before the end of the program, not after the certificate is issued.' },
      { icon: '🔒', title: 'Ground rules', points: [
          'Confidentiality first — never paste real client or firm information into any tool.',
          "AI is a tool, not the answer — its use depends on each attorney's preferences; always review its output.",
          'Your own work — the feedback only helps if it is your thinking.',
          'Stuck? Ask your trainer, or use 💬 Feedback to tell us what is unclear.'],
        where: 'Everywhere in the program.',
        tip: 'When a task and the Client Profile disagree, raise it rather than guessing — that is the judgment being graded.' },
      { icon: '🚀', title: "Let's begin", points: [
          '1. Sign in: last name, first name and your batch code.',
          '2. Read the Client Profile: everything about Elias Thorne.',
          '3. Open Day 1 from your dashboard and press Start.',
          'Questions before we start?'],
        where: 'The LSH Training Portal → this program → your dashboard.',
        tip: 'Stuck on anything? Message your trainer with your name, your batch and a screenshot — that is everything they need.' }
    ]
  },
  trainer: {
    sub: 'Running the 10-day EA / PA course: the trainer side of the portal',
    slides: [
      { icon: '🔑', title: 'Signing in as a trainer', points: [
          'Admin sign-in with the admin password. The server checks it, and every request after it needs your signed session.',
          'Your top bar: Dashboard, Client Profile, Practice Lab, 🧭 Orientation and the Facilitator Guide.',
          'Admin opens the trainer dashboard: Trainee Audit, Batch Folders, Rankings, SOP Reference, Content Studio, Trainee Feedback and 🕘 Attendance.',
          'Every day is open to you, so you can preview any lesson before you teach it.'],
        where: 'The sign-in screen → Admin sign-in · Admin in the top bar.',
        tip: 'A red "Security not enabled" card in Admin means the admin password isn\'t set on the Worker yet.' },
      { icon: '✅', title: 'Approving trainees', points: [
          'New trainees wait at "Waiting for approval" until you approve them.',
          'Approve or reject each one in the Trainee Audit. Approved trainees are let in within seconds.',
          'Revoke a trainee to sign them out and close their access.',
          'Trainees are grouped by batch, so one class stays together.'],
        where: 'Admin → Trainee Audit.',
        tip: 'Approve the class before the first session, so nobody waits at the start.' },
      { icon: '🔍', title: 'Following each trainee', points: [
          'The Trainee Audit row: their day, lessons, Knowledge Check scores and Practice Lab work.',
          'Open a trainee for the detail: each day\'s work, their answers and their submissions.',
          'Generate AI Review reads their work and drafts what went well and what to fix.',
          'Reset a Practice Lab\'s attempts when a trainee needs another try.'],
        where: 'Admin → Trainee Audit → a trainee.',
        tip: 'Check the audit at the end of each day, before you write the day\'s feedback.' },
      { icon: '💬', title: 'Day feedback and Focus items', points: [
          'Write each day\'s feedback for a trainee, or let ✨ Suggest wording for all days (AI) pre-fill the forms for you to edit.',
          'Save each day, or 📤 Send all the drafts together.',
          'Trainees read it under 💬 Feedback, with 🎯 Focus items for what to work on next.',
          'Trainee Feedback shows what trainees said about each day and each part of the course.'],
        where: 'Admin → Trainee Audit (feedback) · Admin → Trainee Feedback.',
        tip: 'Short and specific beats long: one thing they did well, one thing to change.' },
      { icon: '🎲', title: 'Surprise tasks and Live Roleplay', points: [
          'Send a 🎲 Surprise Task to a trainee mid-day. It\'s graded, and you can end it from Admin.',
          'Assign a 🔥 Live Roleplay to a trainee for a client scenario taken live.',
          'Both show up on the trainee\'s screen straight away, and in their tasks.'],
        where: 'Admin → Trainee Audit → a trainee.',
        tip: 'Use a surprise task to check a skill the class found hard that morning.' },
      { icon: '🎓', title: 'Certificates', points: [
          'Trainees who pass all 10 Knowledge Checks (70% or more) unlock their Certificate of Completion.',
          'Open any trainee\'s certificate from Admin to check it before they download it.',
          'Certificate settings: the signatories (trainer, Training Head, General Manager) and how the name is written.',
          'It shows the trainee\'s name exactly as they registered it.'],
        where: 'Admin → Trainee Audit → a trainee · certificate settings.',
        tip: 'Ask trainees to check the spelling of their name on day one.' },
      { icon: '📁', title: 'Batches, Rankings and the cohort report', points: [
          'Batch Folders: each class in its own folder. Archive a finished batch to clear the list.',
          'Rankings: the class side by side, by progress and scores.',
          '⬇ Download Cohort Report: a PDF of the whole class\'s results.'],
        where: 'Admin → 📁 Batch Folders · Rankings · Trainee Audit.',
        tip: 'Download the cohort report before you archive a batch.' },
      { icon: '📋', title: 'SOP Reference and the Facilitator Guide', points: [
          'SOP Reference: each day\'s session plan, run of show and script.',
          'Download each day\'s speaker notes and scripts as a PDF.',
          'The Facilitator Guide (top bar): how the course runs, the rules and what to say when.'],
        where: 'Admin → SOP Reference · top bar → Facilitator Guide.',
        tip: 'Read the next day\'s run of show the evening before.' },
      { icon: '🖥', title: 'Presenter view', points: [
          'Share only the slides window in Google Meet; your console shows the notes and the script.',
          'Next and Previous move both. The shared window never flickers or reloads mid-class.',
          'When a new version is out, the console offers Update now; then re-open the slides window.'],
        where: 'A day\'s lesson slides → 🖥 Presenter view, next to Present full screen.',
        tip: 'Open Presenter view 15 minutes early and share the slides window, not the whole screen.' },
      { icon: '🛠', title: 'Content Studio', points: [
          'Each day\'s lessons, with what\'s published and what\'s still a draft.',
          'Add extra topics or expand a lesson, review the draft, then publish it to trainees.',
          'Proposals suggest topics where a day has fewer than it should.'],
        where: 'Admin → Content Studio.',
        tip: 'Preview a change in 👁 Trainee view before the class sees it.' },
      { icon: '🕘', title: 'Attendance, Trainee view and Orientation', points: [
          '🕘 Attendance: Time In fills in by itself when a trainee opens the course; tag each status and add notes.',
          'It stays in step with the attendance Google Sheet, both ways, through the Training Portal.',
          '👁 Trainee view shows the portal exactly as trainees see it.',
          '🧭 Orientation is the deck to share with trainees on day one. The blueprints themselves live on the Main Portal\'s 🧭 Blueprint page, never inside the program.'],
        where: 'Admin → 🕘 Attendance · 👁 Trainee view · top bar → 🧭 Orientation.',
        tip: 'The Trainee blueprint PDF republishes itself after every update; nothing to do by hand.' }
    ]
  }
};
