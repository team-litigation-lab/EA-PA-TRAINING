/* 🛠 The EA/PA course's Trainer blueprint (lsh-blueprint.js draws it; lsh-blueprint-course.js adds it
   to 🧭 Orientation). The Trainee blueprint is the Orientation deck itself (orientSlides).
   A slide is { icon, title, points: [...], where, tip }. Change the wording here; the page and the PDF
   are made from it each time, stamped with the deployed build. README → Handouts, Orientation and the Blueprint. */
window.LSH_BLUEPRINT = {
  product: 'EA / PA Upskill Program',
  site: 'LSH EA / PA Upskill Program',
  file: 'LSH_EA-PA',
  trainer: {
    sub: 'Running the 10-day EA / PA course: the trainer side of the portal',
    slides: [
      { icon: '🔑', title: 'Signing in as a trainer', points: [
          'Admin sign-in with the trainer passphrase. The server checks it, and every request after it needs your signed session.',
          'Your top bar: Dashboard, Client Profile, Practice Lab, 🧭 Orientation and the Facilitator Guide.',
          'Admin opens the trainer dashboard: Trainee Audit, Batch Folders, Rankings, SOP Reference, Content Studio, Trainee Feedback and 🕘 Attendance.',
          'Every day is open to you, so you can preview any lesson before you teach it.'],
        where: 'The sign-in screen → Admin sign-in · Admin in the top bar.',
        tip: 'A red "Security not enabled" card in Admin means the passphrase isn\'t set on the Worker yet.' },
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
          '🧭 Orientation is the Trainee blueprint to share on day one; it\'s also /blueprint.pdf for everyone.'],
        where: 'Admin → 🕘 Attendance · 👁 Trainee view · top bar → 🧭 Orientation.',
        tip: 'The Trainee blueprint PDF republishes itself after every update; nothing to do by hand.' }
    ]
  }
};
