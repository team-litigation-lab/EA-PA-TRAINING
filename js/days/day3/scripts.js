/* Day 3 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question) · scenario (a short situation for the room to work through). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "3::Calendar Management That Holds": {
  "p1": {
   "icebreaker": "Game: 'How many calendars?' Hold up fingers for how many places you keep your own appointments right now: phone, work calendar, paper diary, sticky notes, the back of your hand. One finger, two, three, more? Look around the room. Anyone at four or five, keep your hand up so we can admire you.",
   "teaser": "Most of you held up more than one finger. By the end of this topic you'll see exactly where the conflicts hide when you do that, and it's always in the same place.",
   "why": "One calendar everyone trusts, with breathing room built in and a quick weekly check, is what makes a schedule hold.",
   "talk": "The moment someone keeps a second, private calendar, conflicts start hiding in the gap between the two. That's the answer to the teaser: the gap. So everything lives in one place. Around that, you add buffers between meetings, keep scheduling tools and any CRM connected, and guard focus time. Then you look for drift each week, because a calendar that's clean on Monday can be a mess by Friday.",
   "walk": [
    "First, put everything in one synced calendar and retire any side calendars.",
    "Next, leave gaps between commitments by default, and let booking tools handle routine scheduling.",
    "Then, if the firm uses a CRM, make sure scheduling information lives there too, not scattered.",
    "After that, treat deep-work time as seriously as a meeting.",
    "Finally, review the calendar once a week to catch the slow creep of conflicts."
   ],
   "jargon": [
    {
     "term": "Synced calendar",
     "hint": "one calendar that updates the same way on every device"
    },
    {
     "term": "CRM",
     "hint": "the system the firm uses to track clients and contacts"
    },
    {
     "term": "Buffer",
     "hint": "a short planned gap between two commitments"
    },
    {
     "term": "Deep work",
     "hint": "focused time for drafting or reviewing, with no interruptions"
    }
   ],
   "story": "A common first-week story: a new assistant inherits an attorney who keeps his own phone calendar 'just for a few things.' She books a client meeting into a slot that looks free on the firm calendar. He's already promised that hour to a mediator on his phone. Nobody did anything wrong on their own calendar; the clash lived in the gap between the two. One shared calendar and a quick Friday review would have caught it.",
   "contrast": {
    "lazy": "Books whatever looks free on the calendar in front of her and says, 'It was open when I checked.' Never looks at the week as a whole.",
    "excellent": "Moves everything into one synced calendar, adds a default gap between meetings, blocks focus time, and every Friday scans next week and says, 'Two clashes and one missing buffer. Here's how I'd fix them.'"
   },
   "outcome": "A calendar nobody trusts means people stop checking it, and that's when a hearing, a client call or prep time quietly slips. In a law firm, a missed meeting with the other side or a rushed, unprepared attorney can cost leverage in a negotiation. A calendar that holds is what keeps the case moving on schedule.",
   "ask": "[Name], is there a second, unofficial calendar in your life or your boss's right now? Where is it? [Name], look at the sample calendar with me: find the first conflict or missing buffer you can see.",
   "mystery": "The case of the three calendars. Elias has a firm calendar, a personal Google calendar, and a paper diary his old assistant used for 'private things.' Last week a client meeting was booked on top of a doctor's appointment. In pairs, you have four minutes: find where the clash slipped through, decide what happens to each of the three calendars, and bring back a three-step plan to make one calendar everyone trusts, including what you'd say to Elias about the paper diary."
  }
 },
 "3::Calendar Conflict & Prioritization Discipline": {
  "p1": {
   "icebreaker": "Game: 'Fix it or flag it?' I'll read out a clash. If you'd quietly fix it yourself, put your hand on your head. If you'd flag it to the boss, hand in the air. A team lunch clashes with a dentist appointment. A partner's budget review clashes with a new client call. A coffee clashes with a vendor demo. Hands down. Interesting split.",
   "teaser": "There's one word in the rule on this slide that most new assistants skip, and it decides who gets to make the call. Watch for it.",
   "why": "When two meetings collide, you flag it straight away and recommend, but the executive decides.",
   "talk": "The word was 'decides.' It's tempting to just fix a clash quietly. But Elias might know something the calendar doesn't show: that the 'routine' check-in is actually a delicate conversation, or that the new client is a big opportunity. So you bring it to him, with your thinking, and let him make the call. You still do the work. He just gets the final say.",
   "walk": [
    "First, tell the executive as soon as you spot the clash. Don't rebook or decline anything on your own.",
    "Next, weigh each meeting by how much it matters, not by which one was booked first.",
    "Then, lay out the trade-off and say which way you'd go.",
    "After that, write down what was decided, so nobody argues it again later.",
    "Finally, let both sides know the outcome quickly."
   ],
   "jargon": [
    {
     "term": "General counsel (GC)",
     "hint": "the top in-house lawyer at a client company"
    },
    {
     "term": "Double-booked",
     "hint": "two commitments in the same time slot"
    },
    {
     "term": "Trade-off",
     "hint": "what you gain and what you give up with each choice"
    }
   ],
   "story": "This happens in real offices: an assistant saw a clash between a weekly associate check-in and a new request from a client's legal team. She moved the check-in without asking, because it was 'only internal.' That check-in was where the associate planned to raise a serious mistake in a filing. It came out a week later, with less time to fix it. A two-line message to the attorney would have taken thirty seconds.",
   "contrast": {
    "lazy": "Quietly moves whichever meeting was booked last, or just forwards it: 'You've got two things at 2 on Thursday, what do you want to do?'",
    "excellent": "'Thursday at 2 clashes: associate check-in and the new client's GC. I'd move the check-in to 4, since the GC asked this morning and it's a new relationship. OK to confirm?' Then records the decision and tells both sides within the hour."
   },
   "outcome": "The meeting that looked least important can be the one that protects the case, like a check-in where a problem is flagged early. Getting priorities wrong can mean a client feels sidelined, a risk surfaces too late, or a deadline gets squeezed. Flag, recommend and record keeps the right meeting in the right slot.",
   "ask": "[Name], Elias is double-booked Thursday at 2: a regular check-in with an associate, booked weeks ago, and a call with a new client's general counsel, requested this morning. What does 'how much it matters' mean here? [Name], what exactly do you say to him?",
   "mystery": "The case of the easy fix. Thursday at 11 a.m.: a partner has booked Elias for a budget review, and a major client has just asked for a call at the same time. You could easily move the budget review yourself. In threes, three minutes: list the clues about which meeting matters more, name the one thing you might not know, and write the exact message you send Elias. Best message gets read out."
  }
 },
 "3::Calendar Blocking for Deep Work": {
  "p1": {
   "icebreaker": "Game: 'Stand if it's happened.' Stand up if you've ever blocked time to focus and someone booked over it. Stay standing if it happened this month. Stay standing if you didn't even notice until the meeting invite arrived. Look at who's still up. Sit down, you're among friends.",
   "teaser": "There's one setting on a calendar block that makes the difference between 'please don't' and 'you can't.' Most people never touch it. Let's find it.",
   "why": "A focus block anyone can book over is just a suggestion.",
   "talk": "If a calendar only shows meetings, then all the thinking work, the drafting and the reviewing, has nowhere to live, so it gets squeezed into evenings. And there's a big difference between writing 'focus time' in a slot and actually protecting it. The setting is whether the block shows as free or busy. A label anyone can book over is just a suggestion. A real block is one that can't be taken without a conversation first.",
   "walk": [
    "First, put real, uninterrupted time on the calendar for focused work.",
    "Next, set it up so it actually can't be booked over.",
    "Then, use it for the most important work, not whatever's easiest to fit.",
    "After that, if it does get double-booked, treat that as a real conflict to sort out.",
    "Finally, check whether the blocks are being used. One that's always skipped needs fixing or rethinking."
   ],
   "jargon": [
    {
     "term": "Focus block",
     "hint": "time reserved on the calendar for uninterrupted work"
    },
    {
     "term": "Free / busy status",
     "hint": "what others see when they check if a slot is available"
    },
    {
     "term": "Brief",
     "hint": "a written legal argument submitted to the court"
    }
   ],
   "story": "A real pattern from the field: an assistant set up 'Focus' blocks every morning for her attorney, but left them showing as free. Within a fortnight, colleagues had booked into nearly all of them. The brief he'd meant to write in those mornings got written at midnight before the deadline, with two citation errors the court noticed. Switching the block to busy and treating a clash as a real conflict would have saved those mornings.",
   "ask": "[Name], has one of your focus blocks, or your boss's, ever been quietly booked over? How did you find out? [Name], what did you do about it, or what would you do now?"
  },
  "p2": {
   "why": "A protected block is only worth defending if the right work is inside it.",
   "talk": "This is where calendar skills and priorities meet. You can protect a block perfectly and still waste it. Guarding a block for low-value work, like clearing email, wastes the protection. The block earns its place when the hardest, most important work of the week goes into it.",
   "walk": [
    "First, make the block behave like a real commitment, not a polite request.",
    "Finally, fill it with the work that matters most this week."
   ],
   "contrast": {
    "lazy": "Types 'Focus' into a slot, leaves it showing as free, and lets Elias spend it on email.",
    "excellent": "Marks Wednesday 9 to 11 as busy with 'Meridian brief: drafting,' declines clashes with an offer of another time, and checks on Friday whether the brief actually moved forward."
   },
   "outcome": "Legal drafting done at midnight is drafting with more mistakes. A weak or late brief can mean a judge rules against us, or the other side sees we're under pressure. Protected time for the right work shows up directly in the quality of what reaches the court and the strength of our position.",
   "ask": "[Name], a senior partner asks for a meeting during Elias's Wednesday 9 to 11 brief-writing block. How do you handle it, using what we covered about conflicts? [Name], what would you offer the partner instead?",
   "mystery": "The case of the Tuesday email block. Elias has a protected block every Tuesday afternoon, but he uses it for email. Meanwhile, the Meridian brief is always done late at night. Clues to find: what's going into the block, what's being left out, and when it's actually getting done. In pairs, two minutes: bring back the one sentence you'd use to raise it with Elias, and one concrete suggestion for next Tuesday."
  }
 },
 "3::Buffer Time Between Meetings": {
  "p1": {
   "icebreaker": "Game: 'Shout the number.' When I say go, shout how many minutes you think you need between two meetings to be ready for the second one. Go! I heard zero, I heard five, I heard someone say thirty. Hold on to your number.",
   "teaser": "Elias already has a number. It's written down in his profile, and it's not one most of you shouted. We'll get to it on the next slide.",
   "why": "Five to ten minutes between meetings is part of the job, not dead space.",
   "talk": "When meetings run back-to-back, every one either starts late or ends in a rush, and people walk into the next conversation still thinking about the last one. A short gap gives time to jot down what just happened and get ready for what's next. It looks empty on the calendar, but it's working time.",
   "walk": [
    "First, make a short gap between meetings your normal setting.",
    "Next, use that gap for two things: a quick debrief of the last meeting and a quick look at the next one.",
    "Then, for Elias specifically, remember his standing rule: a debrief buffer after key sessions.",
    "After that, if a day is too packed for gaps, say so instead of silently stacking meetings.",
    "Finally, check each week, because back-to-back booking sneaks back in."
   ],
   "jargon": [
    {
     "term": "Debrief",
     "hint": "a quick note of what was decided right after a meeting"
    },
    {
     "term": "Back-to-back",
     "hint": "meetings booked with no gap at all"
    },
    {
     "term": "Standing rule",
     "hint": "a preference the client has asked us to follow every time"
    }
   ],
   "story": "This happens in real offices: an attorney came out of a court session and went straight into a client call, with no gap. He told the client a deadline the judge had just changed, because he hadn't had a minute to look at his notes. The client planned around the wrong date. A ten-minute buffer to jot down what the judge said would have caught it.",
   "ask": "[Name], on a busy calendar, where do the gaps disappear first? Morning, lunch, end of day? [Name], why do you think it's there?"
  },
  "p2": {
   "why": "For Elias, the debrief buffer isn't a nice extra; it's one of his standing rules.",
   "talk": "For most executives, gaps between meetings are good practice. For Elias, one of them is a written rule: fifteen minutes to debrief after key sessions. That's the number from the teaser. A calendar without it isn't just a bit tight; it breaks something he has specifically asked for. And breaking a written rule costs more trust than any single scheduling slip.",
   "walk": [
    "First, gaps give room for the thinking and prep real meetings need.",
    "Finally, ignoring the debrief buffer means ignoring a documented preference."
   ],
   "contrast": {
    "lazy": "Fills every slot because people asked for them, then says, 'He was fully booked, nothing I could do.'",
    "excellent": "Holds the fifteen-minute debrief after every key session as a fixed block, and tells a requester, 'He's in court until 11; the earliest I can offer is 11:30.'"
   },
   "outcome": "The debrief is where decisions, instructions and new deadlines get written down. Skip it and details from a hearing or negotiation get lost or mixed up, which leads to missed follow-ups and wrong advice to clients. In a case, that can mean a missed deadline or a concession nobody recorded.",
   "ask": "[Name], Elias's Tuesday has six meetings back-to-back from 9 to 3. Where do you put gaps first? [Name], what would you move to make room, and who do you tell?",
   "mystery": "The case of the eager new partner. A new partner books Elias for a call immediately after a court hearing, not knowing about the debrief rule. Your job, in pairs, three minutes: find which rule was broken and why the partner couldn't have known, write the polite message to the partner, and suggest one change so it can't happen again. Bring back both."
  }
 },
 "3::Recurring Meeting Hygiene": {
  "p1": {
   "icebreaker": "Game: 'Guess the meeting.' I'll describe a meeting in three clues, you shout what it is. Clue one: every Monday. Clue two: nobody's sure who started it. Clue three: everyone checks their phone. Yes, it's 'the weekly catch-up.' Hands up if you have one like that.",
   "teaser": "There's a one-sentence test that kills about a third of these meetings on the spot. I'll give it to you in a moment, and you can try it on yours.",
   "why": "If nobody can say what a meeting is for, it's a good candidate to cut.",
   "talk": "Recurring meetings are easy to start and almost nobody ever ends them. Months later, the reason for the meeting is gone, but the meeting isn't. Here's the test: can anyone say in one sentence what this meeting is for? If not, it's a candidate to go. A quick review every few months clears them out.",
   "walk": [
    "First, every quarter or so, go through each recurring meeting and ask: does this still need to happen, this often, with all these people?",
    "Next, try the one-sentence test: can anyone say what it's for?",
    "Then, point out meetings that have outlived their purpose, even if nobody else has.",
    "After that, suggest something specific: cancel it, shorten it or invite fewer people.",
    "Finally, check back later that the change actually stuck."
   ],
   "jargon": [
    {
     "term": "Recurring meeting",
     "hint": "a meeting set to repeat automatically, like every Monday"
    },
    {
     "term": "Settled (case)",
     "hint": "the dispute ended with an agreement, not a trial"
    }
   ],
   "story": "A real pattern from the field: an assistant noticed a weekly meeting still running months after the case it was set up for had settled. Five senior people were giving it an hour each week, all billed to a matter that was closed. When the client queried the bill, the firm had to write the time off. One quiet suggestion during a quarterly review would have ended it months earlier.",
   "ask": "[Name], which recurring meeting do you suspect nobody would miss? [Name], try the one-sentence test on it: what is it for?"
  },
  "p2": {
   "why": "You see the whole calendar, so you're often the first to notice a meeting that's gone stale.",
   "talk": "No single attendee sees the pattern the way you do. They see one meeting on their own calendar. You see the same invite sitting on everyone's, week after week. That puts you in the perfect spot to suggest a change, politely and with a concrete option.",
   "walk": [
    "First, a recurring meeting with no agenda is one of the most common time-wasters there is.",
    "Finally, you can spot it early because you see every calendar, not just one."
   ],
   "contrast": {
    "lazy": "Keeps sending the invite every week because 'it's always been there.'",
    "excellent": "'The Monday 8 a.m. Harlow sync has had no agenda for six weeks. Shall I cut it to 20 minutes with three people, or replace it with a Friday email update?'"
   },
   "outcome": "Every unneeded hour is an hour not spent on preparation, and in a law firm it may also show up on a client's bill. Clients who see time billed for pointless meetings start questioning everything else. Freeing that time goes straight into better-prepared attorneys and a stronger case.",
   "ask": "[Name], Elias has a weekly 60-minute 'matter sync' with eight people, no agenda and half of them with cameras off. What would you suggest? [Name], how would you actually say it to him?",
   "mystery": "The case of the senior partner's catch-up. You notice a weekly 'catch-up' where the same three updates could be sent by email. The organizer is a senior partner. Teams of three, three minutes: find the evidence you'd gather first, decide who you raise it with, and write the two-sentence suggestion. Bonus point if it lets the partner keep face."
  }
 },
 "3::Time Zone Management for Distributed Teams": {
  "p1": {
   "icebreaker": "Game: 'What time is it there?' It's 9 a.m. here. Shout the time in London. Now Singapore. Now New York. Now Manila. Lots of different answers, and a few brave guesses.",
   "teaser": "One thing on the invite stops all of that guessing. It isn't an app or a tool. It's one short line of text. Let's see if you can spot it.",
   "why": "A time that's easy for you might be the middle of the night for someone else.",
   "talk": "When people are spread across cities, the only safe approach is to check everyone's local time, every time, and write down which time zone you mean. That's the line: the time zone named in the invite itself. Daylight saving changes catch people out too, because different countries switch on different dates. So a meeting that worked in March can be an hour off in April.",
   "walk": [
    "First, check the local time for every person on the invite, not just your own.",
    "Next, name the time zone in the invite itself, so nobody relies on their app to convert it.",
    "Then, double-check repeating meetings around the daylight saving changes.",
    "After that, choose a time that's fair to the person worst off, not just convenient for most.",
    "Finally, if a mix-up happens, fix it right away and confirm with everyone."
   ],
   "jargon": [
    {
     "term": "Co-counsel",
     "hint": "another law firm working on the same case with us"
    },
    {
     "term": "Daylight saving time",
     "hint": "clocks moving an hour, on different dates in different countries"
    },
    {
     "term": "Distributed team",
     "hint": "people working on the same matter from different cities"
    }
   ],
   "story": "This happens more than you'd think: an assistant set a weekly call with overseas co-counsel and it worked fine for months. Then the clocks changed in one country but not the other. For two weeks the co-counsel joined an hour late and the attorney waited, then they missed a joint filing check entirely. Naming both local times in the invite and checking around the clock change would have prevented it.",
   "contrast": {
    "lazy": "Sends 'Call Tuesday at 9' and lets everyone's app sort it out.",
    "excellent": "'Tuesday 8:00 a.m. New York / 1:00 p.m. London / 8:00 p.m. Manila.' Then checks the date against daylight saving changes and picks a time that isn't midnight for the person worst off."
   },
   "outcome": "A missed call with co-counsel or a client abroad can delay a joint filing or a decision on an offer. Repeatedly booking someone at midnight wears down a working relationship you'll need later in the case. Clear times protect deadlines and goodwill on both sides.",
   "ask": "[Name], Elias needs a call with co-counsel in London and a client in Manila this week. Find a time that works for all three. [Name], write the line in the invite that names the time zone.",
   "mystery": "The case of the Tuesday call. Elias needs a call with co-counsel in Singapore and a client in New York next Tuesday. In pairs, four minutes: find each person's local working hours, spot who is worst off, pick the fairest time, and bring back the exact invite line so nobody gets the time wrong. Check whether any clocks are about to change."
  }
 },
 "3::Handling Last-Minute Calendar Changes": {
  "p1": {
   "icebreaker": "Game: 'Domino line.' I need five volunteers to stand in a line. You're Elias's afternoon: 11:30, 12, 1, 2, 3. Now the 11:30 meeting moves to 1. Everyone it affects, take a step forward. Look how many moved. Thank you, sit down.",
   "teaser": "One word to the client, 'yes,' knocked over three of those people. There's one thing you do before saying it, every single time.",
   "why": "Before you say yes to a last-minute change, look at what it knocks over.",
   "talk": "Moving one meeting is rarely just one meeting. It can push into the next one, cut into prep time or clash with travel. So the first move is always to look at the whole day before you confirm anything. That's the thing: look first, then say yes.",
   "walk": [
    "First, when a change arrives, don't confirm it yet.",
    "Next, see what it pushes out of the way.",
    "Then, work out who else is affected.",
    "After that, tell everyone involved clearly. Quietly editing the calendar isn't enough, because people plan around what they were told.",
    "Finally, recheck the rest of the day, and if the same person keeps causing last-minute changes, deal with that separately."
   ],
   "jargon": [
    {
     "term": "Knock-on effect",
     "hint": "the chain of other changes one change causes"
    },
    {
     "term": "Associate",
     "hint": "a junior or mid-level lawyer at the firm"
    }
   ],
   "story": "A common first-week story: a client asked to move a meeting earlier, and the new assistant said yes on the phone straight away. The new slot swallowed the attorney's prep time for a hearing that afternoon. He walked into court without having read the other side's latest filing. The judge noticed. 'Let me check and call you back in five minutes' would have caught it.",
   "contrast": {
    "lazy": "'Sure, 11:30 works!' then drags the meeting in the calendar and moves on.",
    "excellent": "'Let me check and confirm in ten minutes.' Looks at what 11:30 displaces, offers Elias the trade-off, then messages the associate and the client personally with the new times."
   },
   "outcome": "Every unchecked yes risks lost prep time, a missed debrief or a colleague who didn't get the message. In litigation that shows up as an underprepared attorney in front of a judge or the other side. Checking first protects both the schedule and the quality of the work that lands in court.",
   "ask": "[Name], let's roleplay it: a client meeting planned for 90 minutes from now has just been moved to right now. What has to happen in the next five minutes? [Name], who do you tell first, and how?",
   "mystery": "The case of the 11:30 request. At 10:15, a client asks to move their 2 p.m. meeting to 11:30 today. That slot has Elias's debrief buffer and a call with a junior associate. In pairs, three minutes: find everything the change knocks over, decide what you check before you say yes, and bring back the list of who you tell, in order, with one line to each."
  }
 },
 "3::Multi-Calendar Coordination": {
  "p1": {
   "icebreaker": "Game: 'Count the calendars.' Shout out every calendar you think a senior attorney like Elias might have. Firm calendar, yes. Personal, yes. His wife's family calendar, good. A charity board? Yes. Court calendar? Keep going. I'm writing them on the board.",
   "teaser": "Every single one of those calendars can look completely clear on its own, and still hide a clash. There's one habit that finds it.",
   "why": "Check every calendar before you confirm anything, not just the one in front of you.",
   "talk": "Many executives really live on several calendars: work, personal, board roles. A clash can hide in plain sight because each calendar looks clear on its own. The master view on the slide is simply the habit of looking across all of them at once. That's the habit. It doesn't need special software; it needs you to look.",
   "walk": [
    "First, find out every calendar the executive actually uses.",
    "Next, check any new booking against all of them.",
    "Then, build a single overall view, even if that means checking each one by hand.",
    "After that, keep work and personal calendars separate for privacy, while you still coordinate across both.",
    "Finally, if you find a clash across calendars, raise it like any other conflict."
   ],
   "jargon": [
    {
     "term": "Master view",
     "hint": "one overall look at every calendar the executive uses"
    },
    {
     "term": "Board role",
     "hint": "a seat on the governing board of another organization"
    }
   ],
   "story": "A real pattern from the field: an attorney accepted a charity board meeting from his phone, while his assistant accepted a firm dinner with a key client on the firm calendar, same evening. Neither calendar showed a problem. He chose the charity, and the client dinner was cancelled on the day. The client was polite, but the next pitch went to another firm. A quick look across both calendars would have caught it a week earlier.",
   "ask": "[Name], have you ever double-booked someone because you only checked one calendar? [Name], which calendar do you think gets forgotten most often?"
  },
  "p2": {
   "why": "Keeping calendars separate doesn't mean nobody looks at both; that someone is you.",
   "talk": "It's the same idea as the boundaries we talked about on Day 1. Business and personal stay separate, but they still need one person coordinating them. You can see both and still keep what's on each private. When there's a clash, you tell the partner or client 'he's not available,' not why.",
   "walk": [
    "First, a master view, even a manual one, is what stops double-bookings.",
    "Finally, separate doesn't mean uncoordinated."
   ],
   "contrast": {
    "lazy": "Checks the firm calendar only and books it. Or worse, tells the partner, 'He can't, it's his daughter's recital.'",
    "excellent": "Checks firm, personal and board calendars before confirming, and tells the partner, 'He's not available Saturday morning. Could Monday at 8 work?' without a word about the family."
   },
   "outcome": "A double-booking across calendars means someone gets let down, a client, a board or the family. Sharing private details to explain it leaks information that could be used against the client or the firm. Coordinated but separate calendars protect relationships and privacy, both of which matter when a case is being negotiated.",
   "ask": "[Name], a client wants dinner with Elias next Thursday. His work calendar is free, but his personal calendar has his daughter's recital that night. What do you do? [Name], what exactly do you tell the client?",
   "mystery": "The case of the empty Saturday. A partner asks you to book Elias for Saturday morning. His firm calendar is empty, but you know from the family calendar that he has a school event. In pairs, two minutes: find the clue the partner can't see, decide what you do, and write the exact reply to the partner, without sharing any private family details."
  }
 },
 "3::Court Docketing Workflows": {
  "p1": {
   "icebreaker": "Game: 'Real or fake?' I'll read three reminder setups for a court deadline. Thumbs up if it's real good practice, thumbs down if it's fake. One reminder, the day before. Reminders at two weeks, three days and on the day. No reminder, he'll remember. Look around the room.",
   "teaser": "Even the good one fails if the date in it is wrong. Where the date comes from matters more than how many reminders you set. Hold that.",
   "why": "With court deadlines, one missed reminder should never be enough to miss the deadline.",
   "talk": "Missing a court deadline isn't an inconvenience. It can cost a client their rights or expose the firm to a malpractice claim. So a good docketing system has backups on purpose: more than one reminder, and dates taken straight from the source. If one reminder fails, the next one catches it.",
   "walk": [
    "First, enter each deadline as soon as you know it, straight from the court order or filing confirmation.",
    "Next, set reminders at several points, for example two weeks out, three days out and on the day.",
    "Finally, regularly compare the docket with the case file, and close off deadlines that are done so the open ones stand out."
   ],
   "jargon": [
    {
     "term": "Docket / docketing",
     "hint": "the record of a case's deadlines and entering them in the calendar"
    },
    {
     "term": "Court order",
     "hint": "the judge's written instruction, often setting dates"
    },
    {
     "term": "Malpractice claim",
     "hint": "a client suing the firm for a professional mistake"
    },
    {
     "term": "Expert disclosure",
     "hint": "the deadline to tell the other side which experts you'll use"
    }
   ],
   "story": "This happens in real offices: a deadline was entered with a single reminder the day before. That day the assistant was off sick and the reminder went to nobody else. The response went in late, and the firm had to ask the court for permission to file it, with an explanation. The judge allowed it, but the client was billed for the extra motion. Layered reminders, shared with a second person, would have caught it two weeks out.",
   "ask": "[Name], in your process today, where do the docketed dates actually come from? [Name], and who would notice if one was entered wrong?"
  },
  "p2": {
   "why": "Always take the date from the court's own document, never from someone's summary of it.",
   "talk": "Here's the payoff from the teaser. Most docketing errors happen when a date gets copied from an email or a colleague's note and one digit changes on the way. The order itself is the source. Rules also differ by court and case type, so the last deadline you entered is no guide to this one.",
   "walk": [
    "First, avoid docketing from a summary or a mention. Go to the order.",
    "Next, never assume a deadline works like the last one. Rules differ by court and case type.",
    "Finally, give every docket entry the care the stakes deserve."
   ],
   "contrast": {
    "lazy": "Reads the associate's email, 'reply due the 15th,' and types the 15th into the calendar with one reminder.",
    "excellent": "Asks for the order, reads the date from it, enters it with the order cited, sets reminders at two weeks, three days and on the day, and flags to the associate if the date doesn't match."
   },
   "outcome": "A missed court deadline can mean a claim thrown out, evidence excluded or sanctions against the firm. Even a near-miss can force a costly request to the court and weaken the client's position. A docket built from the source is one of the quiet reasons cases are won on their merits and not lost on a date.",
   "ask": "[Name], you're docketing a response deadline from a court order, and the date looks unusually short compared with similar cases. What do you do before you enter it? [Name], who do you raise it with?",
   "mystery": "The case of the missing attachment. An associate emails you: 'The judge gave us until the 15th for the reply, please calendar it.' The order itself isn't attached. In pairs, three minutes: list what you need before you enter the date, where you'll find it, and the reply you send the associate. Then, a bonus round: a court order sets three deadlines, a response in 21 days, an expert disclosure in 45 and a pretrial conference in 60. Bring back the reminders you'd set for each."
  }
 },
 "3::Counting Legal Deadlines: Calendar Days vs. Court Days": {
  "p1": {
   "icebreaker": "Game: 'Shout the date.' Something is served on Monday the 1st. The rule says 10 days. On my count, shout the due date. Three, two, one! I heard the 10th, the 11th, the 15th. Every one of those answers could be right in some court.",
   "teaser": "One of the most common mistakes is about day one, not day ten. By the end of this slide you'll know which day is never counted.",
   "why": "A court deadline missed by one day can cost a client their case, so the counting itself is a skill.",
   "talk": "In federal court, when a rule says a number of days, you count every calendar day, weekends and holidays included. You don't count the day of the event that starts the clock; that's the day that's never counted. You do count the last day, and if it falls on a weekend or holiday, it moves to the next business day. Many state courts count 'court days' instead, which skip weekends and court holidays. And how a paper was served can add time; in federal court, service by mail adds three days.",
   "walk": [
    "First, find the trigger, the event that starts the clock, and note where it came from.",
    "Next, find the rule that sets the period, and whether it's calendar days or court days, including local rules.",
    "Then, count from the day after the trigger and check where the last day lands.",
    "After that, enter it in the docketing calendar with the rule cited and reminders at 14, 7 and 2 days.",
    "Finally, have a second person confirm every calculated court deadline."
   ],
   "jargon": [
    {
     "term": "Trigger",
     "hint": "the event that starts a deadline clock"
    },
    {
     "term": "Calendar days vs. court days",
     "hint": "every day counted vs. only days the court is open"
    },
    {
     "term": "Service",
     "hint": "formally delivering a document to the other side"
    },
    {
     "term": "Local rules",
     "hint": "extra rules a particular court adds on top of the main ones"
    },
    {
     "term": "Discovery request",
     "hint": "a formal demand for documents or answers from the other side"
    }
   ],
   "story": "A real pattern from the field: an assistant counted a response deadline starting with the day the motion was served as day one. The due date she entered was a day early, which sounds safe, until the next one she counted the same way in a court-days court came out several days wrong in the other direction. The second person who checked the count caught it. Without that check, the response would have been late.",
   "ask": "[Name], why do you think the trigger day itself isn't counted as day one? [Name], what would go wrong if everyone counted it differently?"
  },
  "p2": {
   "why": "Deadline errors almost always come from assumptions, not arithmetic.",
   "talk": "Docketing software is a great tool, but it only works with the right trigger date and the right court selected, so we check its answer by hand. Keep a holiday list for each court, because they don't always match federal holidays. The two traps: counting the trigger day as day one, and assuming every court counts the same way. The same '10 days' can land on different dates in two courts.",
   "walk": [
    "First, use the software, then check it by hand.",
    "Next, keep each court's holiday list.",
    "Then, never count the trigger day.",
    "Finally, check each court's own rules."
   ],
   "contrast": {
    "lazy": "'The paralegal said 30 days, so I added 30 to today.' No trigger checked, no rule cited, no second pair of eyes.",
    "excellent": "'Served Tuesday by email, rule gives 30 calendar days, counting from Wednesday, lands on a Thursday, not a holiday. Entered with the rule cited, reminders at 14, 7 and 2 days, and sent to Maria to confirm.'"
   },
   "outcome": "One day late can mean a motion is treated as unopposed, an objection is lost or a claim is dismissed. The other side will use any missed deadline to their advantage, and the client pays for it in a weaker case or a worse settlement. Careful counting is part of protecting the client's rights.",
   "ask": "[Name], what would you do if the software's date and your hand count don't match? [Name], who has the final word, and how do you record it?",
   "mystery": "The case of the Friday motion. A motion is served electronically on Friday, October 2, in federal court, and the response is due in 14 days. In pairs, four minutes: find the trigger, count the days, and bring back the due date. Then answer two follow-ups: what changes if the court counts court days instead, and who confirms the date? Warm-up clue: if opposing counsel emails a discovery request on Tuesday and a paralegal says 'we've got 30 days,' what do you need to find out first?"
  }
 },
 "3::E-Filing & Service Basics": {
  "p1": {
   "icebreaker": "Game: 'Court or other side?' I'll say an action; point at the front wall if it goes to the court, point at the back wall if it goes to the other side. Filing a motion. Serving a motion. Paying the filing fee. Mailing a copy to someone without a lawyer. Okay, some of you are pointing at the ceiling.",
   "teaser": "There's a sentence on this slide that explains why a perfectly written brief can count for nothing. Listen for it.",
   "why": "A brief that's written perfectly but filed wrong is, as far as the court's concerned, not filed.",
   "talk": "Two words to keep apart: filing and service. Filing gives the document to the court. Service delivers it to the other side. Most courts now use electronic filing. Federal courts use a system called CM/ECF, and PACER to look up records, and state courts have their own systems. Each has rules on format, size and fees. The court's confirmation is our proof of filing. Many courts serve registered lawyers automatically, but anyone not registered, like someone without a lawyer, has to be served another way.",
   "walk": [
    "First, before filing day, check the rules: PDF format, page limits, file size, exhibit labels, fees and the cut-off time.",
    "Next, prepare exactly what the attorney approved, redact what the rules require and get final sign-off.",
    "Then, file early, because systems slow down and rejections take time to fix.",
    "After that, save the filed copy and the confirmation together and send the confirmation to the attorney.",
    "Finally, serve anyone outside the system and calendar the new deadlines the filing creates."
   ],
   "jargon": [
    {
     "term": "Filing vs. service",
     "hint": "giving a document to the court vs. delivering it to the other side"
    },
    {
     "term": "CM/ECF",
     "hint": "the federal courts' electronic filing system"
    },
    {
     "term": "PACER",
     "hint": "the federal system for looking up court records"
    },
    {
     "term": "Redact",
     "hint": "black out private information before filing"
    },
    {
     "term": "Exhibit",
     "hint": "a document attached as evidence"
    },
    {
     "term": "Text-searchable PDF",
     "hint": "a PDF whose words can be selected and searched"
    }
   ],
   "story": "A common first-week story: an assistant uploaded a motion with all the exhibits merged into one scanned PDF, ten minutes before the court's cut-off. The system accepted it, then the clerk rejected it the next morning for not following the exhibit rules. The firm had to ask the court to accept a corrected filing as on time. Checking the rules the day before and filing by early afternoon would have left room to fix it.",
   "ask": "[Name], what would you want to check before you click Submit? [Name], what would you add to that list?"
  },
  "p2": {
   "why": "Most filing disasters are timing and access problems, not legal ones.",
   "talk": "The attorney's e-filing login is their signature, so we keep it secure and file only on their instruction. After filing, we check the court's docket to make sure it appears correctly. And two traps: filing at 11:50 at night on the last day, when a rejection leaves no time, and assuming e-filing served everyone, when a party without a lawyer usually needs another method.",
   "walk": [
    "First, protect the login.",
    "Next, check the docket after filing.",
    "Then, never leave filing to the last minute.",
    "Finally, confirm everyone has been served."
   ],
   "contrast": {
    "lazy": "Uploads at 11:45 p.m., sees 'submitted,' closes the laptop and assumes everyone got a copy.",
    "excellent": "Files by early afternoon, saves the confirmation with the filed copy, checks it appears on the docket, posts a copy to the unrepresented party and calendars the response deadline it triggered."
   },
   "outcome": "A rejected or late filing can mean a missed deadline, a motion the judge won't consider or a fight about whether the other side was properly served. Misused login details can create professional discipline problems for the attorney. Clean, early filing keeps the court's attention on the argument, not on our mistakes.",
   "ask": "[Name], what's a sensible internal cut-off time for filing on a deadline day? [Name], why that time and not later?",
   "mystery": "The case of the oversized exhibit. It's 4 p.m. on the deadline day. The court's e-filing system rejects Elias's brief because an exhibit is over the file-size limit. Teams of three, three minutes: find the fix, put your steps in order, and decide who you tell and when. Bring back the order of steps and your message to Elias. Clue: you might have seen this coming the day he asked you to file a motion with one big scanned PDF of exhibits."
  }
 },
 "3::Statute-of-Limitations Rules": {
  "p1": {
   "icebreaker": "Game: 'Higher or lower?' I'll say how long someone has to bring a claim. You guess if the real limit for a different claim is higher or lower: point up or down. Two years for an injury claim. Is a contract claim higher or lower? Is a claim against a government body higher or lower? Notice how sure everyone was, and how split.",
   "teaser": "That split is the whole point. The answer changes with the claim and the place, and there's one source you should never use to find it. We'll name it.",
   "why": "Miss the filing deadline for a claim, and the claim can be gone for good, however strong it was.",
   "talk": "That outer deadline is called the statute of limitations. What makes it tricky is that it changes with the type of claim and the state or country. So a date that was right for last month's case can be completely wrong for this one. That's the source to avoid: a past case.",
   "walk": [
    "First, work out and record this deadline when the matter first comes in, using the actual date of the event and the right jurisdiction's rule.",
    "Next, give it extra warning time and extra reminders, more than a normal court date.",
    "Finally, if it's unclear which rule applies, ask the attorney. That's a legal judgment, not ours to make alone."
   ],
   "jargon": [
    {
     "term": "Statute of limitations",
     "hint": "the legal time limit for starting a claim"
    },
    {
     "term": "Jurisdiction",
     "hint": "the state or country whose rules apply"
    },
    {
     "term": "Intake",
     "hint": "the first step of taking on a new matter"
    }
   ],
   "story": "A real pattern from the field: an intake form said 'two-year limit, plenty of time,' and nobody checked it again. The claim was against a city authority, which needed a formal notice within months, not years. By the time the attorney looked, that window had closed and the strongest part of the claim was gone. Checking the actual rule in the first hour, and asking the attorney about the government defendant, would have saved it.",
   "ask": "[Name], why is it dangerous to copy this deadline from a similar past case? [Name], what's different between two cases that look the same?"
  },
  "p2": {
   "why": "This is one deadline where 'probably right' is never good enough.",
   "talk": "A statute of limitations is the legal deadline for bringing a claim. Miss it, and the client may lose their case for good, no matter how strong it was. That's why there's no room for guesswork here. Every matter gets checked against the actual rule, never against what the last similar case looked like, and the date gets saved in the same backed-up system as the court deadlines.",
   "walk": [
    "First, don't assume a new matter works like an old one.",
    "Next, check it against the actual rule, every single time.",
    "Finally, never let the date live in only one place or one person's head. It belongs in the same backed-up system as court deadlines."
   ],
   "contrast": {
    "lazy": "'Last slip-and-fall was two years, so I put two years.' The date lives on the intake form only.",
    "excellent": "'Event date from the incident report, state rule checked, possible government defendant flagged to Elias to confirm. Entered in the docket with reminders at six months, three months, one month and two weeks.'"
   },
   "outcome": "A blown limitation deadline is one of the most serious mistakes a firm can make. The client loses the claim entirely, there is no settlement, and the firm may face a malpractice claim. Getting this one date right, early, is what keeps the client's case alive at all.",
   "ask": "[Name], a new matter involves people in two different states, so you're not sure whose rule applies. What do you do before calculating anything? [Name], how do you record that the question is still open?",
   "mystery": "The case of the copied deadline. A colleague copied the limitation deadline from a similar case last year. The new case is in a different state and involves a government defendant. In pairs, three minutes: find the two clues that make the copied date risky, name who must confirm the real date, and write what you'd do in the first hour. Warm-up: a new client's slip-and-fall happened 20 months ago and the intake form says 'two-year limit, plenty of time.' Is it?"
  }
 },
 "3::Deposition Scheduling": {
  "p1": {
   "icebreaker": "Game: 'Line up the guests.' Five volunteers, please. You are: the witness, our attorney, opposing counsel, the court reporter and the interpreter. The room decides: who is hardest to book? Line them up from hardest to easiest. Room, shout if you disagree.",
   "teaser": "Two words on the phone from one of those people can sink the whole day. Listen for them in the scenario.",
   "why": "For a deposition, no reply doesn't mean yes.",
   "talk": "A deposition is like a meeting with far more moving parts: lawyers from both sides, the witness, a court reporter, sometimes an interpreter. Each has their own schedule, and moving it later is expensive. So the work is all in the coordination up front. And 'probably fine' on the phone isn't a confirmation.",
   "walk": [
    "First, confirm everyone who has to be there before you lock the date.",
    "Next, book the court reporter and any interpreter the moment the date is set. They're usually the hardest to get.",
    "Finally, send the formal notice promptly and keep track of who has actually confirmed."
   ],
   "jargon": [
    {
     "term": "Deposition",
     "hint": "a witness answering questions under oath, outside court"
    },
    {
     "term": "Court reporter",
     "hint": "the person who records every word of the deposition"
    },
    {
     "term": "Opposing counsel",
     "hint": "the lawyer for the other side"
    },
    {
     "term": "Notice (of deposition)",
     "hint": "the formal document setting the date and place"
    }
   ],
   "story": "This happens in real offices: an assistant set a deposition date after the attorney and the court reporter agreed, and opposing counsel said 'should be fine' on a call. A week out, opposing counsel had a trial. Everyone moved, the reporter charged a cancellation fee, and the witness, who had taken a day off, was not happy. Getting every confirmation in writing before sending the notice would have caught it.",
   "ask": "[Name], which part of a deposition do you think is hardest to book? [Name], and which one is easiest to forget?"
  },
  "p2": {
   "why": "A little extra coordination up front costs far less than rescheduling a deposition.",
   "talk": "The classic mistake is to set the date around the attorney alone and find out later the witness can't come. Now everyone has to move, and sometimes the case loses momentum. Rescheduling costs money, and it can cost strategy too, if the other side gets more time to prepare.",
   "walk": [
    "First, don't lock a date around one person's calendar.",
    "Finally, remember that rescheduling costs time, money and sometimes strategy."
   ],
   "contrast": {
    "lazy": "'Elias is free on the 14th, I've sent the notice.' Witness and interpreter to be sorted later.",
    "excellent": "A confirmation tracker: witness yes in writing, Elias yes, opposing counsel yes by email, court reporter booked, interpreter booked. Only then does the notice go out."
   },
   "outcome": "Each cancelled deposition costs the client fees and delays the case. A delay can push back expert reports, settlement talks or a trial date, and gives the other side more time. Careful coordination keeps momentum on our side.",
   "ask": "[Name], you've confirmed a date with the attorney and the witness, but opposing counsel hasn't answered for days. Do you send the notice or wait? [Name], what do you actually do today?",
   "mystery": "The case of the two cancelled reporters. A deposition had to be moved twice because the witness's availability was never confirmed in writing. The client is paying for two cancelled court reporters. In pairs, three minutes: find the moment it first went wrong, and bring back a five-line confirmation checklist you'd use from the start. Clue from the last slide: 'probably fine' on the phone, and an interpreter nobody booked."
  }
 },
 "3::Exhibits, Binders & Bates Numbering": {
  "p1": {
   "icebreaker": "Game: 'Find the page.' Everyone hold up any page from your workbook. Now, I want everyone to find the same page as [Name] in five seconds, without asking which one. Go! Not easy, is it?",
   "teaser": "There's one number that would have made that instant. It's stamped on every page in a case, and once it's out, you never change it. Let's find out why.",
   "why": "In a hearing, everyone has to be looking at exactly the same page at the same moment, and that's what exhibits and Bates numbers are for.",
   "talk": "An exhibit is any document or object used as evidence, like an email, a contract or a photo, and each gets a label, like Exhibit 12 or Exhibit C. Bates numbering stamps a unique number on every page produced in discovery, with a prefix like THORNE000001, so any page can be found and there's a record of exactly what was handed over. Binders put the exhibits in order with a tabbed index, usually in several sets: the judge's, the witness's, opposing counsel's and ours.",
   "walk": [
    "First, follow the court's and judge's rules for labels.",
    "Next, keep a master exhibit list: number, description, date, Bates range and status.",
    "Then, apply Bates numbers with software, never by hand, and never renumber a set that's been produced.",
    "After that, build every binder from the master list, with an index and one tab per exhibit.",
    "Finally, check every set page by page and keep a digital copy of each."
   ],
   "jargon": [
    {
     "term": "Bates numbering",
     "hint": "a unique stamp on every page handed over in a case"
    },
    {
     "term": "Discovery",
     "hint": "the stage where each side hands over evidence"
    },
    {
     "term": "Production",
     "hint": "a batch of documents formally handed to the other side"
    },
    {
     "term": "Master exhibit list",
     "hint": "the one list every binder is built from"
    }
   ],
   "story": "A real pattern from the field: an assistant built four binder sets and checked only the firm's own copy. In the hearing, the judge's binder was missing two pages from a key contract. The attorney had to read the clause aloud while the clerk hunted for a copy, and the momentum of the argument was lost. Checking every set page by page against the index would have taken an extra hour the day before.",
   "ask": "[Name], why do you think a court wants a unique number on every single page? [Name], what could the other side argue if pages weren't numbered?"
  },
  "p2": {
   "why": "Binder mistakes are always discovered at the worst possible moment: in front of the judge.",
   "talk": "Start early and plan the tabs before the list is final, because late exhibits always arrive. In emails, use the exact label and Bates range. Two traps: a missing page in the judge's binder, so we check every set, not just ours; and re-stamping Bates numbers on a corrected set, when we should produce a new range instead so the record stays clean.",
   "walk": [
    "First, start binders early.",
    "Next, refer to documents by exact label and Bates range.",
    "Then, check every set, especially the judge's.",
    "Finally, never renumber a produced set."
   ],
   "contrast": {
    "lazy": "'The email about the delivery dates, it's somewhere in the second binder.' Renumbers everything when three exhibits are added.",
    "excellent": "'Exhibit 14, THORNE004510 to 004513.' Adds late exhibits as 7A, 7B and 7C so nothing shifts, updates the master list and every set, and tells opposing counsel in writing."
   },
   "outcome": "A missing or mismatched page in court looks careless and can cost credibility with the judge at the moment it matters most. Renumbered productions invite arguments about what was actually handed over. A clean record of exhibits makes our evidence easy to follow and hard to challenge.",
   "ask": "[Name], what's your quickest way to check a 200-page binder against its index? [Name], how would you split that job between two people?",
   "mystery": "The case of the late exhibits. Two days before a hearing, Elias adds three exhibits between Exhibits 7 and 8. Four binder sets are already printed. In teams of three, four minutes: decide how you number them, how you fix the four binders, and what you tell opposing counsel. Bring back all three. Speed round first: opposing counsel's letter refers to 'the email on page THORNE004512' and Elias has a call in ten minutes. How do you find it?"
  }
 },
 "3::War Room Trial Support": {
  "p1": {
   "icebreaker": "Game: 'Pack the bag.' We're going to trial tomorrow. Going round the room, each of you shout one thing that must be in the war room. Exhibits, yes. Phone chargers. The courthouse address. Snacks, fair. Keep going until we run out.",
   "teaser": "Nobody has said the thing that most often goes missing in a trial week. It isn't a document. I'll tell you on the next slide if nobody gets it.",
   "why": "A trial isn't a busy week; it's a completely different way of working, so agree the rules before it starts.",
   "talk": "During trial, the attorney's day is squeezed and everything is urgent. Supporting them means being properly on call, having everything ready to grab in seconds, and knowing exactly how you'll communicate. The war room is simply the place, physical or digital, where all of that lives.",
   "walk": [
    "First, before trial starts, ask exactly what support the attorney will need: documents, research, exhibits.",
    "Next, organize every document, contact and practical detail, like the courthouse address and parking, so you can find it instantly.",
    "Finally, agree how you'll communicate during trial: which channel, and how fast you'll respond."
   ],
   "jargon": [
    {
     "term": "War room",
     "hint": "the base, room or shared folder where the trial team works from"
    },
    {
     "term": "Trial binder",
     "hint": "the organized set of documents the attorney uses in court"
    },
    {
     "term": "On call",
     "hint": "ready to respond quickly during set hours"
    }
   ],
   "story": "A common first-week story: on the first morning of a trial, an attorney texted his assistant from the courthouse for a document. She was replying to emails and didn't see the text for forty minutes; he'd assumed she'd be watching her phone, she'd assumed he'd call. He managed without it, but cross-examination went less smoothly. A five-minute conversation about 'which channel, how fast' the week before would have avoided it.",
   "ask": "[Name], what would you want settled before a trial begins? [Name], what's one thing on your list that wasn't on theirs?"
  },
  "p2": {
   "why": "Treating trial like a slightly busier week is the mistake to avoid.",
   "talk": "And it's where everything from today comes together: calendars, travel and quick, calm communication, all at once. The thing most often missing, from the teaser, is the communication agreement. Documents get packed; nobody agrees how you'll reach each other.",
   "walk": [
    "First, prepare for a different pace, not just more work.",
    "Finally, expect travel and tricky scheduling on top of the document work."
   ],
   "contrast": {
    "lazy": "Carries on with the normal week, checks messages when there's time, and starts hunting when Elias asks for an exhibit.",
    "excellent": "Agrees the week before: 'Text me for anything urgent, I'll reply within five minutes from 7 a.m. to 7 p.m. Every exhibit, plus spares, is in the shared trial folder by number.' Then sticks to it."
   },
   "outcome": "In trial, a missing exhibit or slow reply can break a line of questioning or leave a point unmade in front of the judge or jury. Those moments add up to the verdict, or to how much the other side is willing to offer to settle mid-trial. Good war room support turns preparation into results in the courtroom.",
   "ask": "[Name], trial starts in three days and you haven't agreed with Elias how you'll support him. What do you nail down? [Name], how do you bring it up on such short notice?",
   "mystery": "The case of the 7 a.m. text. On day two of a trial, Elias texts at 7 a.m. asking for an exhibit that isn't in the trial binder. In pairs, three minutes: find what should have been done before trial, decide what you do in the next fifteen minutes, and bring back both lists. Warm-up clue: his trial starts Monday; what should have been agreed with him before Friday, and what's the one thing most likely to be forgotten?"
  }
 },
 "3::Executive Travel Logistics — Domestic & International Itineraries": {
  "p1": {
   "icebreaker": "Game: 'Forwards or backwards?' Planning a trip, what do you book first? Stand up if your first instinct is the flight. Stay sitting if it's something else. Most of you are standing. Keep that in mind.",
   "teaser": "The first thing to plan isn't the flight, the hotel or the car. It's something that happens after he lands. Let's see what.",
   "why": "Plan the trip backward, starting from what has to go right when the executive arrives.",
   "talk": "Most people plan a trip forward: flight, then hotel, then 'we'll sort out the car.' Planning backward flips that. You start with the meeting or hearing at the other end, and make sure every piece before it supports it. International trips add passports, visas and customs on top.",
   "walk": [
    "First, start with the arrival: what must Elias be ready for, and when? Then work back through the car, the hotel and the flights.",
    "Next, for international trips, check the visa and document rules well ahead of time.",
    "Finally, leave real room between connecting flights, especially when he lands internationally and has to clear customs again."
   ],
   "jargon": [
    {
     "term": "Itinerary",
     "hint": "the full plan of a trip, in order"
    },
    {
     "term": "Arbitration",
     "hint": "a private hearing where an arbitrator decides a dispute"
    },
    {
     "term": "Customs",
     "hint": "the border check on arrival in a country"
    }
   ],
   "story": "This happens in real offices: an assistant booked a cheap overnight flight that landed at 6 a.m. for a 9 a.m. hearing abroad. The flight was on time. Immigration took an hour and a half, traffic was heavy, and the attorney arrived with no sleep and no time to read his notes. Planning back from 'rested and prepared at 9' would have meant flying a day earlier.",
   "ask": "[Name], why do you think international-to-domestic connections need extra time? [Name], what can happen between landing and the next gate?"
  },
  "p2": {
   "why": "Give the traveler one tidy itinerary, not a pile of confirmation emails.",
   "talk": "An international trip is not a domestic trip with a longer flight. And whatever the trip, everything should sit in one document the traveler can open on their phone. When he asks 'what time is my car,' the answer should be on one page, not in his inbox.",
   "walk": [
    "First, don't plan an international trip as if it were domestic.",
    "Finally, gather every booking reference and detail into one itinerary."
   ],
   "contrast": {
    "lazy": "Forwards seven confirmation emails and says, 'Everything's in your inbox.'",
    "excellent": "Sends one page in time order: each flight, the car with driver name and number, the hotel address and reference, the meeting address, and a line saying what to do if a flight is late."
   },
   "outcome": "An attorney who arrives tired, late or confused is less sharp at the hearing, arbitration or negotiation the trip was for. That shows up in how well they argue and how well they read the room. A trip planned backward protects the reason for the trip.",
   "ask": "[Name], you're about to book Elias a tight connection from an international flight to a domestic one. What do you want to confirm before you book? [Name], what's your backup if it's too tight?",
   "mystery": "The case of the seven emails. Elias's inbox has seven separate confirmation emails for one trip: two flights, a hotel, two car transfers, a restaurant and a train. He asks, 'What time is my car tomorrow?' In pairs, four minutes: sketch the one-page itinerary he should have received instead. Then, planning backward, show how you'd get him to a 9 a.m. arbitration in London on Tuesday, rested and prepared. Bring both."
  }
 },
 "3::Visa & Documentation Requirements": {
  "p1": {
   "icebreaker": "Game: 'True or false?' Thumbs up for true, down for false. If your passport hasn't expired, you can travel anywhere. False, mostly. A visa always takes a few days. Watch out. The rules for a country are the same as last year. Hmm. Look at the room.",
   "teaser": "Two simple numbers catch out more travelers than anything else. One is about the passport and one is about time. They're on the next slide, see if you can guess them first.",
   "why": "Check the entry rules for this trip today; don't rely on what was true last time.",
   "talk": "Entry requirements change, and every country is different. A trip can be ruined at the airport by a passport that's valid but not valid enough, or a visa that takes weeks longer than expected. So you check the current rules for this trip, every time, and keep a note of what was needed.",
   "walk": [
    "First, look up the current rules for this destination and this trip.",
    "Next, check how long the passport is still valid. Many countries want six months left after the trip ends.",
    "Then, start any visa early, because some take weeks.",
    "After that, sort supporting papers like invitation letters early enough to fix problems.",
    "Finally, write down what was needed, so the next trip starts with facts."
   ],
   "jargon": [
    {
     "term": "Visa",
     "hint": "official permission to enter a country"
    },
    {
     "term": "Passport validity",
     "hint": "how long the passport has left before it expires"
    },
    {
     "term": "Invitation letter",
     "hint": "a letter from the host that some countries ask to see"
    }
   ],
   "story": "A real pattern from the field: an attorney was turned away at check-in for a flight abroad because his passport had four months left and the destination required six. It hadn't expired, so nobody had thought to check. The client meeting went ahead by video, with far less impact. A two-minute check of the entry rules when the trip was booked would have left time to renew.",
   "ask": "[Name], has anyone had a trip nearly ruined by a passport or visa problem? What happened? [Name], what would have caught it earlier?"
  },
  "p2": {
   "why": "Six months left on the passport and weeks of lead time: those two catch most people out.",
   "talk": "Two things trip people up more than anything else. The first is the passport: many countries won't let you in unless it has at least six months left on it, so 'not expired' isn't good enough. The second is time: some visas take weeks to come through, not days. Both are completely avoidable if we check early, as soon as the trip is on the calendar.",
   "walk": [
    "First, 'not expired' isn't the same as 'valid enough to travel'.",
    "Finally, some visas need weeks, not days."
   ],
   "contrast": {
    "lazy": "'His passport's fine, it doesn't expire till next year.' Visa left until the week before.",
    "excellent": "'Passport has seven months left on return, which meets the six-month rule. Business visa needed, typical processing three weeks, application started today. Invitation letter requested from the host.'"
   },
   "outcome": "A missed deposition, hearing or client meeting abroad can mean a delayed case, costly rescheduling and an annoyed client. In some cases evidence or testimony may be lost if the window closes. Early checks protect the trip and everything it's meant to achieve.",
   "ask": "[Name], Elias flies to Singapore for a deposition in five weeks, and his passport expires in four months. What do you check, and what do you do today? [Name], what do you tell him?",
   "mystery": "The case of the five-month passport. Elias's passport expires in five months, and he's travelling in three weeks to a country that requires six months' validity. In pairs, three minutes: list your options, decide what you do first, and write the message to Elias. Warm-up clue: he's also been invited to speak in Brazil in six weeks and you've never arranged travel there. What do you check today, and where?"
  }
 },
 "3::International Travel Considerations": {
  "p1": {
   "icebreaker": "Game: 'Three corners.' The left side of the room is health and safety. The middle is money. The right side is business customs. I'll shout something to check before a trip abroad; point to the side it belongs to. Vaccinations. Will his card work? How people greet each other. Local emergency number. Tipping. Good.",
   "teaser": "There's one check that people do once, when they book, and forget. It's the one that can change in the last 48 hours. Let's see which it is.",
   "why": "Going abroad means planning for health, money and local customs, not just flights and hotels.",
   "talk": "When the trip crosses a border, a few extra things come into play, and they fall into three areas. Health and safety: vaccinations, safety advisories and local emergency numbers. Money: will his card work there, and does he need cash? And business customs: how meetings run, how people greet each other and what they expect. None of it is hard, but all of it needs doing before he leaves.",
   "walk": [
    "First, check health and safety for the destination.",
    "Next, sort out how he'll pay for things before he goes.",
    "Then, learn the local business customs, so he doesn't get caught out in a meeting.",
    "After that, look at the government travel advisory again close to departure.",
    "Finally, give international trips more planning time than domestic ones."
   ],
   "jargon": [
    {
     "term": "Travel advisory",
     "hint": "government guidance on safety in a destination"
    },
    {
     "term": "Business customs",
     "hint": "local expectations for meetings, greetings and gifts"
    }
   ],
   "story": "This happens in real offices: an attorney landed abroad for a client meeting and found his firm card was blocked for foreign use. He paid for the client dinner on a personal card and spent the evening on the phone to the bank. Not a disaster, but not the impression he wanted. Calling the card issuer before departure and sending some local cash would have fixed it in ten minutes.",
   "ask": "[Name], if you've arranged international travel before, what surprised you the first time? [Name], which of the three areas would you be most likely to forget?"
  },
  "p2": {
   "why": "Check the travel advisory again just before departure, because it can change after you book.",
   "talk": "The planning for international travel isn't finished when the tickets are booked. Situations change, and a quick last check is part of the job. That's the check from the teaser: the travel advisory, looked at again in the last day or two.",
   "walk": [
    "First, the more variables a trip has, the more planning it needs.",
    "Finally, a last-minute look at the advisory is real diligence, not an extra."
   ],
   "contrast": {
    "lazy": "Checks the advisory when booking three weeks ago and never looks again.",
    "excellent": "Rechecks the advisory 48 hours before departure, notices the new warning about protests near the hotel, and calls Elias with a plan: 'I can move you to the hotel near the client's office tonight. Shall I?'"
   },
   "outcome": "An attorney caught in a safety situation, unable to pay, or offending a client by mistake can lose a meeting, a relationship or a deal. Abroad, those things are harder to recover from. Doing the extra checks keeps him safe and keeps the business on track.",
   "ask": "[Name], Elias has a client meeting in Mexico City next month. What would you check beyond the flights and the hotel? [Name], when exactly would you check the advisory?",
   "mystery": "The case of the protest near the hotel. You booked Elias's trip to a city three weeks ago. Two days before he leaves, the government issues an advisory about protests near his hotel. In pairs, three minutes: decide your first three actions, who you tell, and what you change. Warm-up: he's going to Singapore for a week; name three things about health, money and business customs you'd check beyond flights and hotel."
  }
 },
 "3::Managing Multi-City, Multi-Leg Itineraries": {
  "p1": {
   "icebreaker": "Game: 'Find the weak link.' I'll read out three connections. Shout 'weak!' for the one most likely to break. Two-hour connection in the same airport. Fifty-minute connection in a big hub. Four hours, with an overnight stay. Loud and clear.",
   "teaser": "On a trip with several stops, you don't protect every leg equally. There's one place you put your effort first, and it's the same every time.",
   "why": "In a trip with several stops, look for the tightest connection, because that's where it will break.",
   "talk": "With one flight there and back, a delay is annoying. With four legs, a delay on the first one can knock over every connection after it. So you plan all the legs together and put extra cushion where it's thinnest. That's the place from the teaser: the tightest connection.",
   "walk": [
    "First, lay out every leg of the trip together, not one at a time.",
    "Next, find the tightest connection and give it extra time.",
    "Then, make sure each car pickup and hotel check-in matches the real arrival times.",
    "After that, put the whole trip on one page.",
    "Finally, check it all again just before departure, in case any times have shifted."
   ],
   "jargon": [
    {
     "term": "Leg",
     "hint": "one flight or journey within a longer trip"
    },
    {
     "term": "Connection",
     "hint": "the time between landing and catching the next flight"
    },
    {
     "term": "Mediation",
     "hint": "a meeting where a neutral person helps both sides try to settle"
    }
   ],
   "story": "A real pattern from the field: an assistant booked each leg of a four-city trip as it came up, a week apart. One leg left from a different airport in the same city, with ninety minutes between landing and take-off. The attorney missed it, arrived the next morning, and the client meeting was squeezed into a lunch. Laying all four legs out together would have shown the airport change straight away.",
   "contrast": {
    "lazy": "Books each leg separately, whichever flight is cheapest, and assumes the airline will sort out any delay.",
    "excellent": "Lays the trip out on one page, spots the 50-minute Atlanta connection, moves it to a later flight, matches every car to real landing times, and rechecks all times the day before."
   },
   "outcome": "One broken connection can cost a day of trial prep or a mediation slot that took weeks to arrange. A mediation that starts with an exhausted or absent attorney rarely ends in the best settlement. Protecting the weak point protects the outcome at the end of the trip.",
   "ask": "[Name], Elias's trip: New York to Atlanta with a 50-minute connection, on to Dallas for two days of trial prep, then Dallas to Phoenix for a mediation. Where's the weak point? [Name], what would you change?",
   "mystery": "The case of the Chicago dash. Elias's trip: New York to Chicago for a morning meeting, Chicago to Denver the same afternoon, then Denver to Los Angeles the next day. The Chicago to Denver flight leaves 90 minutes after his meeting ends. In pairs, three minutes: find the weak point, list what could go wrong in those 90 minutes, and bring back two ways to protect it."
  }
 },
 "3::Ground Transportation Coordination": {
  "p1": {
   "icebreaker": "Game: 'Would you rather?' Would you rather be stuck with a delayed flight, or land on time with no car at midnight? Left hand up for the flight, right hand up for no car. Most of you chose the delay. Interesting.",
   "teaser": "The car is the part of the trip people plan last, and it's the part the executive remembers most when it goes wrong. There are three details that fix nearly all of it.",
   "why": "'We'll figure out a car when we land' is how good trips go wrong.",
   "talk": "Flights and hotels get all the attention, and the car gets treated as an afterthought, until the executive is standing at the curb at night with no ride. Ground transport deserves the same care as everything else. The three details: the exact pickup time, the exact spot and a phone number for the driver.",
   "walk": [
    "First, plan the ride as carefully as the flight.",
    "Next, confirm the exact pickup time, the exact spot and a phone number for the driver.",
    "Then, check who's traveling: children need car seats, and some people need accessible vehicles.",
    "After that, for important trips, have a backup ride ready.",
    "Finally, reconfirm the booking a day or so before travel."
   ],
   "jargon": [
    {
     "term": "Ground transportation",
     "hint": "cars, taxis and transfers on the ground"
    },
    {
     "term": "Meet-and-greet",
     "hint": "a driver who waits inside arrivals with a name sign"
    },
    {
     "term": "Flight tracking",
     "hint": "the car company watching the flight and adjusting for delays"
    }
   ],
   "story": "This happens in real offices: an attorney's flight was delayed two hours into a late-night arrival. The car company didn't track flights, the driver left, and the office line was closed. He waited forty minutes for a taxi before a 9 a.m. hearing. A booking with flight tracking, the driver's mobile number and a backup taxi app would have solved it from the plane.",
   "ask": "[Name], has anyone landed with the flight and hotel sorted but no ride? What did you do? [Name], what's one detail you'd now always confirm?"
  },
  "p2": {
   "why": "Plan the ride around who's actually in the car.",
   "talk": "The details are what turn a good trip into a smooth one: the exact time and place, and the family needs we already know from Elias's profile. If his children are travelling, the car needs car seats. If the nanny is coming, the car needs to be big enough. The Client Profile already tells you all of this.",
   "walk": [
    "First, specific details close the gap that ruins arrivals.",
    "Finally, the Client Profile tells you who's traveling and what they need."
   ],
   "contrast": {
    "lazy": "'Car booked for Orlando, they'll meet you outside.'",
    "excellent": "'Car booked for 9:40 PM, flight-tracked. Driver: Luis, phone on the confirmation, waiting at baggage claim 4 with a sign saying THORNE. SUV with two child seats. Backup: the hotel shuttle number is at the bottom.'"
   },
   "outcome": "A stranded attorney arrives late or worn out to the meeting or hearing the trip was for. A stranded family becomes his first worry, not the case. Getting the car right protects his focus, and his focus is what the client is paying for.",
   "ask": "[Name], Elias and his two young children land in Orlando at 9:40 PM. Write the ride confirmation you'd send him, with every detail it needs. [Name], what did they miss?",
   "mystery": "The case of the Boston curb. Elias lands in Boston at 11:45 p.m. after a delayed flight. The car company closes its phone line at 11 p.m. and the driver's number isn't on the confirmation. In pairs, three minutes: find what should have been arranged, decide what you do right now, and bring back both. Bonus: Sarah Thorne, the two children and their nanny are flying to Florida. List the details you'd confirm with the car service before that trip."
  }
 },
 "3::Loyalty Programs & Travel Preferences": {
  "p1": {
   "icebreaker": "Game: 'Quick-fire preferences.' I'll say a travel choice, you shout what you'd pick. Window or aisle? Early flight or late? Direct or cheaper with a stop? Hotel near the airport or near the meeting? Notice how fast you answered. Your boss answers that fast too, and he expects you to know.",
   "teaser": "There's one number, a few digits long, that most rushed bookings leave out. It costs nothing to add, and missing it is noticed on every flight.",
   "why": "Adding the loyalty number to every booking is a small habit that pays off on every single trip.",
   "talk": "Those numbers bring upgrades, priority service and status, and the benefits grow the more they're used. Leaving one off is money and comfort left on the table. The fix is boring and reliable: keep them with his other preferences, and add them as a normal step every time.",
   "walk": [
    "First, keep all the membership numbers in the same place as Elias's other preferences.",
    "Next, add them to every booking as a normal step.",
    "Then, apply his seat, route and hotel preferences at the same time.",
    "After that, put it on a checklist, so you don't rely on memory when you're rushing.",
    "Finally, check the details now and then, because status levels change."
   ],
   "jargon": [
    {
     "term": "Loyalty program",
     "hint": "an airline or hotel membership that rewards regular use"
    },
    {
     "term": "Status",
     "hint": "the membership level, which unlocks upgrades and priority"
    },
    {
     "term": "Client Profile",
     "hint": "where we keep the client's preferences and details"
    }
   ],
   "story": "A common first-week story: a new assistant booked an attorney's flight in a hurry from her phone and missed his frequent-flyer number. He lost his usual upgrade, sat in a cramped seat on a long flight, and couldn't work on the papers he'd planned to read. He asked her why, kindly but clearly. A checklist step at the point of booking would have caught it.",
   "ask": "[Name], which travel preference do you think is easiest to forget when you're in a hurry? [Name], how would you make sure it can't be forgotten?"
  },
  "p2": {
   "why": "A missed loyalty number is a small mistake, and a completely avoidable one.",
   "talk": "It's exactly the kind of detail a good process catches every time, because it doesn't depend on anyone remembering. That also means it works when someone else does the booking, like a substitute assistant covering your holiday.",
   "walk": [
    "First, apply loyalty numbers and preferences together, every time.",
    "Finally, a good travel process simply never produces this mistake."
   ],
   "contrast": {
    "lazy": "Relies on memory, and the cover assistant books a middle seat with a connection because nobody told her.",
    "excellent": "A booking checklist at the top of the Client Profile: loyalty numbers, aisle seat, direct flights preferred, preferred hotel chain. Anyone booking for Elias follows it, and the confirmation is checked against it."
   },
   "outcome": "Small travel misses add up to a tired attorney who can't work on the way to an important meeting. They also chip away at his trust in the support around him. A reliable process keeps him rested, working and confident in the team.",
   "ask": "[Name], you're booking a last-minute flight for Elias from your phone. What three things from his profile do you check before you press confirm? [Name], anything you'd add?",
   "mystery": "The case of the substitute's booking. A substitute assistant books Elias a middle seat with a connecting flight, not knowing his preferences. On a separate trip, you forgot his frequent-flyer number and he lost an upgrade. In pairs, three minutes: find what the two cases have in common, and bring back the one process change that would have prevented both, even with someone new doing the booking."
  }
 },
 "3::Travel Risk Contingency Planning": {
  "p1": {
   "icebreaker": "Game: 'Thirty-second list.' In pairs, you have thirty seconds to list everything that could go wrong on a two-flight trip to a morning hearing. Go! Stop. Hands up if you got five. Eight? Ten? Who got the most? Read me your top two.",
   "teaser": "You just did the most useful part of contingency planning in thirty seconds. There's one step after it that most people skip, and that's the step that saves the trip.",
   "why": "The backup plan should exist before the trip, not be invented in the middle of a crisis.",
   "talk": "When a flight is cancelled, the worst place to be is starting your research from scratch while the executive waits at the gate. Compare that with the assistant who, before the trip, wrote down the two or three things most likely to go wrong and found a backup for each. That's the skipped step: finding the backup in advance, not just listing the risk. When it happens, they're already making the call while everyone else is still searching.",
   "walk": [
    "First, before you finalize the trip, list the realistic things that could go wrong.",
    "Next, for each one, find the backup in advance: the next flight, another route, a local contact.",
    "Then, keep those backups with the itinerary, where you can find them fast.",
    "After that, if something happens, use the backup straight away.",
    "Finally, it's the same idea as having a backup vendor: it's ready before you need it."
   ],
   "jargon": [
    {
     "term": "Contingency plan",
     "hint": "a backup plan prepared in advance"
    },
    {
     "term": "Backup vendor",
     "hint": "a second supplier ready if the first one fails"
    },
    {
     "term": "Hearing",
     "hint": "a scheduled session in front of a judge"
    }
   ],
   "story": "A real pattern from the field: an attorney's connecting flight to a morning hearing was cancelled late at night. His assistant started searching from scratch at 11 p.m. and every option was gone or sold out. He appeared by phone, and the judge was noticeably less patient with him. The assistant who had already noted 'last flight 8:15 p.m., or drive 4 hours from the hub' would have booked it in minutes.",
   "contrast": {
    "lazy": "Books the flights, and when one is cancelled, opens a search engine and says, 'Leave it with me.'",
    "excellent": "Itinerary has a backup line for each risk: 'If Chicago to Denver is cancelled: 4:40 p.m. alternative, seat held. If Denver to Boise is late: car service from Denver, number below, 6 hours.'"
   },
   "outcome": "Missing a hearing because of travel can mean appearing by phone, asking for a delay or, in the worst case, a decision made without us. The judge's patience and the other side's view of us both take a hit. A backup prepared in advance protects the appearance, and the case.",
   "ask": "[Name], Elias flies Chicago to Denver, then on to Boise for a 10 AM hearing. What are the two most likely problems? [Name], what's the backup for each?",
   "mystery": "The case of the Sunday landing. Elias flies to Seattle for a Monday 9 a.m. hearing, landing Sunday at 6 p.m. In pairs, three minutes: find the two most likely problems, and bring back the backup you'd have ready for each before he leaves, written as the line that goes on the itinerary."
  }
 },
 "3::Emergency Flight Contingencies": {
  "p1": {
   "icebreaker": "Game: 'Fixed or flexible?' Stand up if the time is fixed and can't move; stay sitting if it's flexible. A hotel check-in. A court hearing at 1 p.m. A dinner reservation. A closing where the other side flies in. A car pickup. Notice how few things were truly fixed.",
   "teaser": "Every important trip has one fixed point like that. Plan around it, and a cancelled flight becomes a problem you've already solved. There's also one message you should send, and only one.",
   "why": "Know the one time the trip absolutely has to hit, and the backup, before the plane leaves.",
   "talk": "On an important trip, like a court appearance or a closing, a cancelled flight doesn't just waste time; it can wreck the whole reason for going. So you plan around that fixed point. And when it goes wrong, the executive gets one clear message: the problem and your plan.",
   "walk": [
    "First, identify the deadline the travel must meet, like the hearing time, before you book.",
    "Next, know the backups ahead of time: a later flight, a different airport or a car for the last stretch.",
    "Finally, when something goes wrong, send the executive one clear message with the problem and your plan, not a stream of updates."
   ],
   "jargon": [
    {
     "term": "Closing",
     "hint": "the meeting where a deal is signed and completed"
    },
    {
     "term": "Court appearance",
     "hint": "when the attorney must be present in court"
    }
   ],
   "story": "This happens in real offices: an attorney's early flight was cancelled and his assistant sent six texts in twenty minutes as she found out more: 'cancelled,' 'checking,' 'maybe 9 a.m.,' 'no, full,' and so on. He was trying to read his notes and ended up calling the airline himself. One message ten minutes later, with the problem and the rebooked flight, would have let him get on with his preparation.",
   "ask": "[Name], what's the one message Elias should get when his flight is cancelled? [Name], what must be in it, and what should be left out?"
  },
  "p2": {
   "why": "Reach Elias with a plan before the airline app reaches him with the problem.",
   "talk": "If he finds out from a notification before he hears from you, it feels like nobody's on it. That's the No-Surprises Rule again. You want him to read your message first, with the solution already in hand.",
   "walk": [
    "First, don't wait for a disruption to start thinking about backups.",
    "Finally, be the first to tell him, with the solution already in hand."
   ],
   "contrast": {
    "lazy": "'Your flight's been cancelled!! Not sure what to do, looking now.' Then three more updates.",
    "excellent": "'6 a.m. Atlanta flight cancelled. I've booked you on the 7:15, landing 9:50, car moved to match. You'll reach the deposition by 12:15. Backup if that slips: the 8 a.m. to the second airport. No action needed.'"
   },
   "outcome": "A missed court appearance or deposition can lead to a postponement, extra costs or even a ruling made without us. Clients lose confidence fast when their attorney isn't there. Being first with a plan keeps the attorney calm, prepared and in the room.",
   "ask": "[Name], Elias's flight to a court appearance is cancelled, and the next flight lands after the hearing starts. What do you do, and in what order? [Name], who besides Elias needs to hear from you?",
   "mystery": "The case of the Chicago storm. A storm grounds flights out of Chicago. Elias is stuck overnight, and his 9 a.m. client meeting in New York is at risk. In teams of three, four minutes: prepare your options, decide what you tell the client and when, and write the one message you send Elias. Warm-up: his 6 a.m. flight to a 1 p.m. deposition in Atlanta is cancelled at 4:30 a.m. and you have two backups ready. Write that message first."
  }
 },
 "3::Expense Tracking While Traveling": {
  "p1": {
   "icebreaker": "Game: 'Empty your pockets.' Hands up if right now you have a receipt in your wallet, bag or pocket that you haven't dealt with. Keep it up if it's more than a week old. Keep it up if you can't remember what it was for. A lot of hands. Put them down, no judgement.",
   "teaser": "One of those forgotten receipts in an attorney's pocket isn't just admin. If it belongs to a client matter, it's money the firm may never get back. Let's see why.",
   "why": "Snap the receipt the moment you get it, and note the client while you still remember.",
   "talk": "On the road, receipts end up in pockets, cars and hotel bins. Rebuilding a trip's expenses a week later from memory is slow and usually wrong. And if you can't say which client or matter a cost belongs to, it may not be billable to the client at all. A quick photo and a note right away saves all of that.",
   "walk": [
    "First, capture each receipt immediately, even just a photo.",
    "Next, note which client or matter it belongs to while it's fresh.",
    "Then, handle it the same way as normal expenses, just faster.",
    "After that, spend two minutes each evening checking nothing from the day is missing.",
    "Finally, submit everything within a set time after getting back."
   ],
   "jargon": [
    {
     "term": "Matter",
     "hint": "a specific case or piece of work for a client"
    },
    {
     "term": "Billable expense",
     "hint": "a cost the firm can charge back to the client"
    },
    {
     "term": "Reconcile",
     "hint": "match receipts against card statements so nothing's missing"
    }
   ],
   "story": "A common first-week story: an attorney came back from a week of travel with a bag of receipts and no notes. His assistant spent a day matching them to card statements and guessing which dinners were for which client. Two couldn't be placed and were written off, and one was billed to the wrong client, who queried it. A photo and a one-word note at the table would have taken seconds.",
   "contrast": {
    "lazy": "Waits for him to hand over the pile, then guesses: 'I think the Thursday dinner was Harlow?'",
    "excellent": "Each evening a two-minute message: 'Today: Harlow dinner, 2 taxis Harlow, coffee personal. Photos in the folder.' Expenses submitted within three days of return, each coded to a matter."
   },
   "outcome": "Expenses billed to the wrong client damage trust and invite questions about the whole bill. Expenses that can't be placed are lost money for the firm. In a dispute over fees, clean records are what let the firm show exactly what was spent on the client's case.",
   "ask": "[Name], Elias gets back from a three-day trip with a pocket full of receipts, some for the Harlow matter and some personal. What should have happened each day? [Name], what do you do now?",
   "mystery": "The case of the crumpled pile. Elias returns from a four-day trip with a pile of receipts: two client dinners, three taxis, a hotel, a personal gift and a coffee with no note. In pairs, three minutes: sort them into client, personal and unknown, find the clues that place the unknowns, and bring back the one change you'd make for the next trip."
  }
 },
 "3::Building a Real Travel Checklist": {
  "p1": {
   "icebreaker": "Game: 'Memory test.' Without writing anything down, everyone silently think of every item you pack for a work trip. Ten seconds. Now: hands up if you remembered the phone charger. Plug adapter? Medication? A copy of the itinerary? Emergency contact? Fewer hands each time.",
   "teaser": "Each of you forgot something different. That's exactly the problem, and it's why the checklist in your head isn't really a checklist. Let's build the real one.",
   "why": "A checklist that lives only in your head isn't really a checklist.",
   "talk": "Every time you rely on memory, you forget something different. Write it down once, use it every trip and improve it a little each time. It works just like the Home Binder: build it once, keep it current.",
   "walk": [
    "First, write the checklist down in a form you can reuse.",
    "Next, give passport and visa their own section, so they never get lost among the bookings.",
    "Then, add health and safety prep for the destination.",
    "After that, include a check that loyalty numbers were added, and a contact for emergencies.",
    "Finally, keep it somewhere you'll find it, and improve it after each trip."
   ],
   "jargon": [
    {
     "term": "Home Binder",
     "hint": "our single reference file for the household, built once and kept current"
    },
    {
     "term": "Emergency contact",
     "hint": "who to call if something goes wrong on the trip"
    }
   ],
   "story": "A real pattern from the field: an assistant kept the travel checklist in her head and was excellent at it, until she went on holiday. Her cover booked a trip abroad without checking the passport and forgot the hotel's emergency number. The attorney's passport had too little validity, and the trip was moved by a week. A written checklist, kept in a shared place, would have carried her knowledge for her.",
   "contrast": {
    "lazy": "'I just know what he needs.' Every trip is done from memory, and every trip misses something new.",
    "excellent": "A one-page checklist in the shared drive with five sections: documents, bookings, health and safety, money, contacts. Each trip is ticked off against it, and anything missed is added as a new line."
   },
   "outcome": "Small misses on trips add up to stress, lost time and sometimes a missed meeting or hearing. A written checklist means quality doesn't drop when you're busy or away. That reliability is what lets the attorney focus on the case instead of the trip.",
   "ask": "[Name], let's build version one together: five sections for Elias's international trips. What's the first section and two items in it? [Name], give me the next section.",
   "mystery": "The case of the three small misses. Elias's last trip had three small misses: no power adapter, a missing loyalty number and no emergency contact for the hotel. In pairs, three minutes: turn each miss into a checklist item, say which section each belongs in, and find one more item that would likely be missed next time. Bring back all four."
  }
 },
 "3::Post-Trip Debrief & Follow-Up": {
  "p1": {
   "icebreaker": "Game: 'Finish the sentence.' I'll start, you shout the ending. 'The trip is over when...' I heard 'he lands,' 'he gets home,' 'the expenses are in.' Hands up if you've ever written down what went wrong on a trip. Very few hands.",
   "teaser": "Of the three things that usually get skipped after a trip, one matters far more than the others. It's not the expenses. See if you can guess which.",
   "why": "The trip isn't over when the traveler gets home; the last steps make the next trip better.",
   "talk": "After a trip, three things usually get skipped: sorting out the expenses, sending thank-yous and writing down what went wrong. That last one matters most, because otherwise the same problem happens again next time. A short note now saves the same mistake later.",
   "walk": [
    "First, reconcile the expenses soon after return.",
    "Next, send any thank-you notes or follow-ups while they still mean something.",
    "Then, write a short note on what worked and what didn't while it's fresh.",
    "After that, feed that note into the travel preferences or checklist.",
    "Finally, think of it as the same improvement habit you'll use for bigger projects on Day 6."
   ],
   "jargon": [
    {
     "term": "Debrief",
     "hint": "a short review of what worked and what didn't"
    },
    {
     "term": "Follow-up",
     "hint": "the message or action after a meeting to keep things moving"
    }
   ],
   "story": "This happens in real offices: an attorney's hotel on a regular trip had no quiet place to work, and he mentioned it in passing. Nobody wrote it down. Three months later the same hotel was booked for the night before a major mediation, and he prepared in a noisy lobby. A two-line debrief note added to his preferences would have stopped it.",
   "contrast": {
    "lazy": "Files the receipts, closes the trip folder and moves on.",
    "excellent": "Within two days: expenses in, thank-you notes and client follow-ups drafted for Elias, and a three-line note: 'Hotel great. Car 40 minutes late, switch company. Two new contacts, follow-ups sent.' Preferences and checklist updated."
   },
   "outcome": "A follow-up that's sent late, or not at all, can lose a new client or a referral. A problem not written down repeats, sometimes on the trip that matters most. The debrief turns each trip into better business, and fewer surprises before the next big case.",
   "ask": "[Name], Elias's Denver hotel had no quiet place to work, and his return connection was too tight. Write the debrief note. [Name], say where each lesson gets recorded.",
   "mystery": "The case of the late car in Singapore. Elias is back from Singapore. The hotel was great, the airport car was 40 minutes late, and he met two potential clients who need follow-up notes. In pairs, three minutes: write the debrief, decide what gets updated in his preferences, and draft the first line of each follow-up note. Bring all three back."
  }
 },
 "3::Recognizing Stress & Burnout in High-Pressure Roles": {
  "p1": {
   "icebreaker": "Game: 'Weather report.' On your fingers, show me your energy today: one is a storm, five is sunshine. Everyone hold it up. No need to explain. Now look around: a lot of threes. That's normal.",
   "teaser": "Burnout doesn't arrive in one day. It comes in stages, and there's one stage where it's still easy to turn around. Let's see if you can spot it.",
   "why": "Burnout is much easier to fix when you catch it early.",
   "talk": "A bit of pressure can actually help you focus. Burnout is different: it's what happens when stress keeps going for weeks with no relief, until you feel exhausted, detached and less effective. This job has its own pressures, like always being on call and carrying other people's deadlines. It builds in stages, from healthy pressure, to strain, to chronic stress and finally to burnout, and the earlier stages are where it's easiest to turn around.",
   "walk": [
    "First, once a week, take two minutes to check in with yourself: energy, sleep, mistakes, and anything you keep dreading.",
    "Next, name the exact thing causing the stress, like late-night texts or unclear priorities. A specific problem has a specific fix.",
    "Then, watch the pattern for a couple of weeks before deciding what to change.",
    "Finally, if it lasts for weeks or affects your sleep, health or relationships, talk to your manager and consider support, like an employee assistance program or your doctor."
   ],
   "jargon": [
    {
     "term": "Burnout",
     "hint": "exhaustion from long-running stress with no relief"
    },
    {
     "term": "Chronic stress",
     "hint": "stress that keeps going for weeks or months"
    },
    {
     "term": "Employee assistance program (EAP)",
     "hint": "a free, confidential support service some employers offer"
    }
   ],
   "story": "A real pattern from the field: a very capable legal assistant took pride in answering every message, at any hour. Over a few months, small mistakes crept in: a wrong date here, a missed attachment there. Then she docketed a deadline a week late and only caught it by chance. Nobody had asked how she was doing, and she hadn't noticed it herself. A weekly two-minute check-in with herself, and one honest conversation, would have caught it months earlier.",
   "ask": "[Name], which early warning sign would you notice first in yourself? [Name], and which one might other people notice before you do?"
  },
  "p2": {
   "why": "Being exhausted doesn't prove you're dedicated; it puts the work at risk.",
   "talk": "In legal support, a tired mistake can be an expensive one. So looking after yourself is part of doing the job well. And the same goes for the people around you. The stage from the teaser is strain: tired, a few more mistakes, but still very fixable.",
   "walk": [
    "First, don't treat exhaustion as a badge of honor.",
    "Next, raise workload concerns early, while small changes can still fix it.",
    "Finally, if a colleague seems to be struggling, check in quietly and kindly, one to one."
   ],
   "contrast": {
    "lazy": "'I'm fine, just busy.' Keeps checking email at 11 p.m. and pushes through until something breaks.",
    "excellent": "Notices two scheduling errors in a week, names the cause, 'late-night texts and no clear priorities,' and books fifteen minutes with Elias to agree what can wait."
   },
   "outcome": "A tired assistant is far more likely to miss a deadline, send the wrong attachment or mix up a date. In a law firm, those mistakes can lead to sanctions, leaked information or a weaker position in a case. Catching strain early protects you, the attorney and the client.",
   "ask": "[Name], you've double-booked Elias twice this week, you're snapping at vendors and you check email at 11 every night 'just in case.' What's going on? [Name], what are your first three steps?",
   "mystery": "The case of the colleague who is 'fine.' For three weeks, a colleague has been missing small details, skipping lunch and answering emails at midnight. She says she's 'fine, just busy.' In pairs, three minutes: list the signs you notice, decide which stage you think she's at, and write the first line of a kind, private check-in. Bonus: what would you say to yourself if this were you?"
  }
 },
 "3::Stress Management Techniques That Work at a Desk": {
  "p1": {
   "icebreaker": "Game: 'Shoulders check.' Everyone, without moving, notice where your shoulders are right now. Now drop them. Did they move? Hands up if they dropped more than a centimetre. Most of the room. That's stress you didn't know you were carrying.",
   "teaser": "There's a breathing trick that takes thirty seconds, nobody can see you doing it, and it works because of one simple rule about the out-breath. We'll try it in a minute.",
   "why": "Stress doesn't wait for the weekend, so the tools that help most are the ones that fit into two minutes at your desk.",
   "talk": "Think about when stress actually hits: mid-afternoon, three things due and the phone ringing. A weekend away doesn't help you in that moment. Something small that you can do right where you're sitting does. Slow breathing is the quickest. When you breathe out more slowly than you breathe in, your body gets the message to calm down. And a lot of stress isn't the work itself; it's constantly asking yourself what to do next. A simple plan takes that question away.",
   "walk": [
    "First, before a call you're nervous about, take a few slow breaths: count four in and six out. It takes thirty seconds and nobody notices.",
    "Next, when your head is spinning, get everything out of your head and onto paper, then choose just one next step. One step is manageable; twenty isn't.",
    "Then, build small breaks into the day: stand up, stretch or walk for a few minutes every hour or so. Your focus comes back sharper.",
    "Finally, end the day on purpose: look at tomorrow, write down your top three and close the inbox. That's how you actually switch off."
   ],
   "jargon": [
    {
     "term": "Brain dump",
     "hint": "writing every open task down to clear your head"
    },
    {
     "term": "Shutdown routine",
     "hint": "a short, planned way to end the workday"
    }
   ],
   "story": "This happens in real offices: an assistant had to call a vendor who had let the firm down on a big trial delivery. She was angry and rang straight away. The call turned into an argument, and the vendor slowed down every job for the next month. A minute of slow breathing and three written points before dialling would have kept it calm and firm.",
   "ask": "[Name], let's try one together right now: one minute, four counts in, six counts out. Ready, everyone. Afterwards, [Name], how do you feel compared with a minute ago?"
  },
  "p2": {
   "why": "Coffee hides tiredness; it doesn't take any of the load off.",
   "talk": "The desk tools help in the moment. What keeps them working over months is the boring stuff around them. A lot of us run on coffee and willpower, and that works, until it doesn't. Coffee hides tiredness; it doesn't fix it. Sleep matters in this job more than people admit, because a tired assistant makes more scheduling and detail mistakes. And it helps to know, in advance, what actually calms you down.",
   "walk": [
    "First, don't lean only on caffeine and willpower. They mask the problem.",
    "Next, treat sleep as part of the job. Tired people make more scheduling and detail mistakes.",
    "Finally, keep a short personal list of what calms you down, so you don't have to think of it in the moment."
   ],
   "contrast": {
    "lazy": "Fourth coffee, straight into the calendar in a panic, and moves the wrong meeting.",
    "excellent": "Takes thirty seconds of slow breathing, writes the three changes on paper, picks the court date first, then moves the meetings one at a time and checks each one."
   },
   "outcome": "Stress makes people rush, and rushing in legal support means wrong dates, wrong files and tense calls with the people we depend on. Those slips can become missed deadlines or damaged relationships with vendors, clerks and clients. A calm assistant makes fewer mistakes, and fewer mistakes protect the case.",
   "ask": "[Name], Elias calls in a rush: a court date moved, three meetings have to shift and a family event now overlaps. What do you do in the first five minutes to keep a clear head before you touch the calendar? [Name], what's on your personal calm-down list?",
   "mystery": "The case of the night before trial. You've had four late nights this week and you're running on coffee. Tomorrow is a big trial day for Elias. In pairs, three minutes: plan your evening, from leaving the office to falling asleep, and decide what you'll do in the first ten minutes tomorrow. Warm-up: you must call a vendor who let the firm down in 30 minutes; which desk technique do you use, and how?"
  }
 },
 "3::Setting Boundaries & Managing Executive Pressure": {
  "p1": {
   "icebreaker": "Game: 'Emergency or not?' It's 10 p.m. I'll read a text from the boss. Shout 'Emergency!' or 'Tomorrow!' The court deadline moved to 9 a.m. tomorrow. Can you check if Friday's lunch is still on? My daughter's been taken to hospital, cancel tomorrow. What's the Wi-Fi password at the office? Good, mostly agreed.",
   "teaser": "You all agreed fast because you already have a line in your head. The trick is that your boss has a different line in his, and nobody has written either one down.",
   "why": "When an executive is stressed, match their problem with calm facts and options, not with more stress.",
   "talk": "Boundaries are simply agreements: when you're available, how fast you'll reply and what counts as an emergency. Without them, everything feels urgent. That's why the line needs writing down. And when an executive pushes hard, it's usually their own pressure talking. Staying calm and offering choices brings the temperature down.",
   "walk": [
    "First, agree the basics in writing: your working hours, what's a real after-hours emergency and how they should reach you for one.",
    "Next, when a new request crashes into existing work, ask, 'Which of these should move?' instead of silently taking on both.",
    "Finally, under pressure, use a simple pattern: 'I understand this is urgent. The filing is due at three. I can move the vendor call, or ask Maria to cover it.'"
   ],
   "jargon": [
    {
     "term": "Boundary",
     "hint": "an agreed limit on when and how you're available"
    },
    {
     "term": "Filing prep",
     "hint": "getting documents ready to submit to the court"
    }
   ],
   "story": "A real pattern from the field: an assistant was mid-way through filing prep when her attorney added three new urgent tasks. She said yes to all of them, worked fast, and uploaded the filing with an old version of one exhibit. It had to be corrected the next day, with an explanation to the court. Saying 'The filing is due at three; which of these can wait?' would have taken ten seconds.",
   "ask": "[Name], what would count as a real after-hours emergency in your role? [Name], is your answer the same, and would your boss agree?"
  },
  "p2": {
   "why": "A boundary should never become the reason a real legal deadline is missed, so build the emergency route into it.",
   "talk": "Boundaries aren't walls. A good one protects your evenings and still leaves a clear route for real emergencies, like a court deadline or a family crisis. What wears boundaries down is answering every late message instantly, because it teaches people you're always available. So we agree what counts as an emergency, stick to it, and revisit the agreement when things change.",
   "walk": [
    "First, avoid answering every late-night message instantly. It teaches people you're always available.",
    "Next, agree what the emergency route is, so true emergencies still get through.",
    "Finally, revisit the agreement when workloads, roles or family situations change."
   ],
   "contrast": {
    "lazy": "Either answers everything at 11 p.m. and burns out, or switches the phone off and misses a real court emergency.",
    "excellent": "A written agreement: 'Court deadlines and family emergencies: call me any time. Everything else: message, I'll handle it from 8 a.m.' Replies to the 10:40 p.m. text at 8 a.m., done by 8:15."
   },
   "outcome": "Without an emergency route, a true court emergency can go unanswered, and that's how deadlines and rights get lost. Without boundaries, the assistant wears out and mistakes creep in. A clear agreement keeps both the deadlines and the person handling them safe.",
   "ask": "[Name], Elias texts at 10:40 PM asking you to quickly rebook his 8 AM client meeting. Your agreement covers court and family emergencies only. What do you do tonight? [Name], what do you say tomorrow?",
   "mystery": "The case of the partner lunch text. Your agreement with Elias says after-hours contact is for court deadlines and family emergencies. At 9:30 p.m. he texts: 'Can you check if the partner lunch is still on Friday?' In pairs, three minutes: decide what you do tonight, and write how you raise it tomorrow. Warm-up: Elias bursts in needing the Meridian binder rebuilt, a flight change and a dinner for eight tonight while you're mid-way through urgent filing prep. Respond with the pattern: acknowledge, lay out the conflict, ask which comes first."
  }
 },
 "3::Recovery, Workload Conversations & Support Resources": {
  "p1": {
   "icebreaker": "Game: 'Hands up, hands down.' Hands up if you've had a full week off in the last six months. Keep it up if you didn't check work email once. Keep it up if nobody called you. Anyone still up? Round of applause for them.",
   "teaser": "Most of you checked email on holiday. There's a simple handover that makes switching off possible, and it fits on one page. Let's build it.",
   "why": "Raising your workload early, with facts and options, is professional, not complaining.",
   "talk": "Rest isn't the opposite of good work; it's what makes good work possible. If the workload is too much, that's a business problem, and it's easier to fix early. And help exists: many employers have confidential support programs, and in the US, anyone in crisis can call or text 988.",
   "walk": [
    "First, before the conversation, write down your regular tasks, the hours they take, what's slipping and two or three possible fixes.",
    "Next, when you take time off, hand over properly: access for your cover, an out-of-office message and a one-page status note, so you can actually switch off.",
    "Finally, find out where support is before you need it: your employer's program, your manager or HR, and the people you trust."
   ],
   "jargon": [
    {
     "term": "Out-of-office",
     "hint": "the automatic email reply while you're away"
    },
    {
     "term": "Handover / status note",
     "hint": "one page telling your cover what's live and what's due"
    },
    {
     "term": "988",
     "hint": "the US crisis line, by call or text"
    },
    {
     "term": "HR",
     "hint": "the team that handles staff matters and support"
    }
   ],
   "story": "A common first-week story: an assistant went on holiday without a handover, just an out-of-office. Her cover didn't have access to the docketing calendar, and a reminder for a response deadline went to the assistant's inbox only. She caught it on her phone by the pool, two days before it was due. A one-page status note and shared access would have let her actually rest.",
   "ask": "[Name], do you know where your employer's support information is? [Name], if not, who would you ask?"
  },
  "p2": {
   "why": "You can ask for a lighter workload without sharing anything personal.",
   "talk": "Your health details belong to you. What you bring to the conversation is the workload and the options. Hours, tasks, what's slipping and what could change: that's enough for a manager to act on.",
   "walk": [
    "First, don't wait until you're exhausted. By then it feels like a crisis instead of a plan.",
    "Next, keep personal health details private unless you choose to share them.",
    "Finally, cover properly for colleagues when they're away, so everyone gets to recover."
   ],
   "contrast": {
    "lazy": "Says nothing for months, then: 'I can't do this anymore.'",
    "excellent": "'I'd like fifteen minutes about workload. For eight weeks I've averaged 55 hours, and two scheduling errors slipped through this month. Three options: move travel booking to the team assistant, batch expenses weekly, or agree a 7 p.m. cut-off for non-urgent requests.'"
   },
   "outcome": "An overloaded assistant is where missed deadlines, wrong attachments and leaked information start. Fixing the workload early protects the attorney's cases and the client's results. A good handover means nothing falls through while you recover.",
   "ask": "[Name], you've worked 55-hour weeks for two months and you're starting to make mistakes. Draft the first two sentences of the conversation with Elias. [Name], what options would you bring?",
   "mystery": "The case of the 55-hour weeks. For two months you've been working 55-hour weeks. You want to raise it with Elias without sharing personal health details. In pairs, four minutes: gather the facts you'd bring, choose three options, and write the opening line. Then, part two: you're going on a week's vacation. List what access your cover needs, what goes in the out-of-office, and what must never wait for you to get back."
  }
 }
});
