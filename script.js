let stats = {
  studyLevel:5,
  energy:5,
  friendship:5,
  balance:5,
}
let current = "start"
let studied = false
let played = false
let gamemode = ""

const clicksound = new Audio("click.mp3")
function playclick(){
  const sound = clicksound.cloneNode()
  sound.volume = 0.5
  sound.play()
}


function showModeSelcetion(){
  document.getElementById("home").style.display="none"
  document.getElementById("modeSelection").style.display="block"
  
}

function startgame(mode){
  gamemode = mode
  document.getElementById("home").style.display = "none"
  document.getElementById("sceneDynamic").style.display = "block"
  restartGame()
  showScenarioDynamic()
}


const storyHighSchool = {

  start:{
  text:`It's 11:47 PM... ⏰  
Your room is silent... except your racing thoughts 😰  

Your phone lights up — friends are calling 📱  
Your bed looks SO comfortable 😴  

But your exam is tomorrow... and you're NOT ready.  

What will you do?`,
  choices:[
    {text:"Push yourself to study 📚", next:"studyPath"},
    {text:"Ignore everything and play 🎮", next:"playPath"},
    {text:"Give up and sleep 😴", next:"sleepPath"}
  ]
},
  secret:{
    end:true,
    text:"SECRET ENDING 😱 You became a legend in school "
  },

// ================================ STUDY
  studyPath:{
    text:"You studied well! Friend calls you to go out.",
    choices:[
      {text:"Go out 🌙", next:"end1", stats:{studyLevel:-2, friendship:3}},
      {text:"Stay home 📚", next:"studyPathDeep1", stats:{studyLevel:3, energy:-1}}
    ]
  },

  studyPathDeep1:{
    text:"You study 2 hours. Phone won't stop ringing ",
    choices:[
      {text:"Answer  📞", next:"studyPathDeep2", stats:{friendship:2, studyLevel:-1, energy:1}},
      {text:"Ignore  🤐", next:"studyPathDeep3", stats:{studyLevel:2, friendship:-1, balance:1}}
    ]
  },

  studyPathDeep2:{
    text:"Friend wants to go out. But exam tomorrow!",
    choices:[
      {text:"Go anyway 🌙", next:"end1", stats:{friendship:3, studyLevel:-3, balance:1}},
      {text:"Say no 👋", next:"end2", stats:{studyLevel:4, friendship:-1, balance:2}}
    ]
  },

  studyPathDeep3:{
    text:"You finished studying! You feel confident 😎",
    choices:[
      {text:"Sleep now 😴", next:"end2", stats:{energy:2, studyLevel:2, balance:1}},
      {text:"Review again 📚", next:"secret", stats:{studyLevel:5, energy:-2, balance:2}}
    ]
  },

  playPath:{
    text:"You played all day. Now exhausted!",
    choices:[
      {text:"Sleep 😴", next:"playPathDeep1", stats:{energy:3, studyLevel:-2, friendship:1}},
      {text:"Study now 📚", next:"playPathDeep2", stats:{studyLevel:2, energy:-1, friendship:-1}}
    ]
  },
  playPathDeep1:{
    text:"Slept after gaming. Woke up tired!",
    choices:[
      {text:"Study hard ⚡", next:"playPathDeep1A", stats:{studyLevel:3, energy:-2, balance:1}},
      {text:"Rest more 😴", next:"playPathDeep1B", stats:{energy:2, studyLevel:-2, balance:-1}}
    ]
  },
  playPathDeep1A:{
    text:"2 hours left! Study like crazy!",
    choices:[
      {text:"Focus 100% 🎯", next:"end4", stats:{studyLevel:4, energy:-3, balance:2}},
      {text:"Check phone 📱", next:"end3", stats:{studyLevel:-1, friendship:1, energy:1}}
    ]
  },
  playPathDeep1B:{
    text:"Panicked! Exam starting soon!",
    choices:[
      {text:"Quick review 📖", next:"end3", stats:{studyLevel:1, energy:1, balance:-1}},
      {text:"Go unprepared 😰", next:"end6", stats:{studyLevel:-3, balance:-2, energy:1}}
    ]
  },
  playPathDeep2:{
    text:"Studying after gaming. Feeling confused!",
    choices:[
      {text:"Review notes 📝", next:"playPathDeep2A", stats:{studyLevel:2, energy:-1, balance:1}},
      {text:"Sleep first 😴", next:"playPathDeep2B", stats:{energy:3, studyLevel:-1, balance:1}}
    ]
  },
  playPathDeep2A:{
    text:"Reviewing now... Getting it! 💡",
    choices:[
      {text:"Continue studying 📚", next:"end2", stats:{studyLevel:4, energy:-2, balance:2}},
      {text:"Sleep soon 😴", next:"end4", stats:{energy:2, studyLevel:2, balance:1}}
    ]
  },
  playPathDeep2B:{
    text:"Slept. Woke up refreshed!",
    choices:[
      {text:"Study the rest 📚", next:"end2", stats:{studyLevel:3, energy:1, balance:1}},
      {text:"Just go to exam 🏫", next:"end4", stats:{balance:2, energy:1}}
    ]
  },


//================================== SLEEP
  sleepPath:{
    text:"You woke up fresh!",
    choices:[
      {text:"Study 📚", next:"sleepPathDeep1", stats:{studyLevel:4, energy:2, balance:1}},
      {text:"Play 🎮", next:"sleepPathDeep2", stats:{friendship:2, energy:1, studyLevel:-2}}
    ]
  },

  sleepPathDeep1:{
    text:"You studied in the morning. Feeling strong!",
    choices:[
      {text:"Study more 📚", next:"sleepPathDeep1A", stats:{studyLevel:3, energy:-1, balance:1}},
      {text:"Relax now 🎵", next:"sleepPathDeep1B", stats:{energy:2, balance:2, friendship:1}}
    ]
  },

  sleepPathDeep1A:{
    text:"Studying hard. You got this 💪",
    choices:[
      {text:"Review one more time 📖", next:"end5", stats:{studyLevel:4, energy:-2, balance:1}},
      {text:"Rest before exam 😴", next:"secret", stats:{energy:3, balance:3, studyLevel:3}}
    ]
  },

  sleepPathDeep1B:{
    text:"You relaxed. Feeling confident 😌",
    choices:[
      {text:"Light review 📝", next:"end5", stats:{studyLevel:2, balance:2, energy:1}},
      {text:"Just go to exam 🏫", next:"end4", stats:{balance:1, energy:1}}
    ]
  },

  sleepPathDeep2:{
    text:"You played after sleeping. Getting tired...",
    choices:[
      {text:"Study now ⚡", next:"sleepPathDeep2A", stats:{studyLevel:2, energy:-2, balance:1}},
      {text:"Keep playing 🎮", next:"sleepPathDeep2B", stats:{friendship:2, energy:1, studyLevel:-3}}
    ]
  },

  sleepPathDeep2A:{
    text:"You studied but tired. Energy low!",
    choices:[
      {text:"Quick caffeine ☕ and study", next:"end4", stats:{studyLevel:2, energy:-1, balance:1}},
      {text:"Sleep again 😴", next:"end3", stats:{energy:2, studyLevel:-1, balance:-1}}
    ]
  },

  sleepPathDeep2B:{
    text:"You kept playing. No time to study! 😱",
    choices:[
      {text:"Panic study 📚", next:"end3", stats:{studyLevel:-1, energy:-2, balance:-1}},
      {text:"Go unprepared 😰", next:"end6", stats:{studyLevel:-4, balance:-3, energy:1}}
    ]
  },

  end1:{end:true, text:"You had fun 🤪 but failed the exam 😢"},
  end2:{end:true, text:"Genius! Perfect score 🧠✨"},
  end3:{end:true, text:"Missed homework 😅 (Passed barely)"},
  end4:{end:true, text:"You survived 😎 Average score"},
  end5:{end:true, text:"Balanced ⚖️ Good score"},
  end6:{end:true, text:"Lazy 😴 Failed hard"}
}


const storyWork = {
  start:{
    text:"BIG PRESENTATION TOMORROW 💼 Boss watching",
    choices:[
      {text:"Prepare slides 📊", next:"slidesPath"},
      {text:"Go to gym 💪", next:"gymPath"},
      {text:"Sleep early 😴", next:"sleepPath"}
    ]
  },
  secret:{
    end:true,
    text:"SECRET ENDING 🌟 You beccame CEO"
  },
  // ================================ SILDES
  slidesPath:{
    text:"Working on sides. Coworker invites to party",
    choices:[
      {text:"Go party 🎉", next:"end1", stats:{studyLevel:-2, friendship:3}},
      {text:"Keep working 💻", next:"slidesPathDeep1", stats:{studyLevel:3, energy:-1}}
    ]
  },

  slidesPathDeep1:{
    text:"4 hours in Make progress. Coffee break?",
    choices:[
      {text:"Coffee break ☕", next:"slidesPathDeep2", stats:{friendship:2, studyLevel:-1, energy:1}},
      {text:"No break 🚫", next:"slidesPathDeep3", stats:{studyLevel:2, friendship:-1, balance:1}}
    ]
  },

  slidesPathDeep2:{
    text:"Chatting with colleagues. Time flying",
    choices:[
      {text:"Chat longer 💬", next:"end1", stats:{friendship:3, studyLevel:-3, balance:1}},
      {text:"Back to work 💼", next:"end2", stats:{studyLevel:4, friendship:-1, balance:2}}
    ]
  },

  slidesPathDeep3:{
    text:"Finished slides Presentation ready 🎯",
    choices:[
      {text:"Sleep now 😴", next:"end2", stats:{energy:2, studyLevel:2, balance:1}},
      {text:"Sleep now 😴", next:"secret", stats:{studyLevel:5, energy:-2, balance:2}}
    ]
  },

///========================== GYM
  gymPath:{
    text:"Gym time Feeling energized",
    choices:[
      {text:"Extra workout 💪 ", next:"gymPathDeep1", stats:{energy:3, studyLevel:-2, friendship:1}},
      {text:"Work on slides 📊", next:"gymPathDeep2", stats:{studyLevel:2, energy:-1, friendship:-1}}
    ]
  },

  gymPathDeep1:{
    text:"Overdid it Too tired now ",
    choices:[
      {text:"Nap then work ⚡", next:"gymPathDeep1A", stats:{studyLevel:3, energy:-2, balance:1}},
      {text:"Just rest 😴", next:"gymPathDeep1B", stats:{energy:2, studyLevel:-2, balance:-1}}
    ]
  },

  gymPathDeep1A:{
    text:"4 hours left Working fast",
    choices:[
      {text:"Work hard 🎯", next:"end4", stats:{studyLevel:4, energy:-3, balance:2}},
      {text:"Check emails 📧", next:"end3", stats:{studyLevel:-1, friendship:1, energy:1}}
    ]
  },

  gymPathDeep1B:{
    text:"Overslept Presentation in morning",
    choices:[
      {text:"Rush work 🚀", next:"end3", stats:{studyLevel:1, energy:1, balance:-1}},
      {text:"Wing it 🎲", next:"end6", stats:{studyLevel:-3, balance:-2, energy:1}}
    ]
  },

  gymPathDeep2:{
    text:"Back at work. Slides need polish",
    choices:[
      {text:"Detail work 🔍", next:"gymPathDeep2A", stats:{studyLevel:2, energy:-1, balance:1}},
      {text:"Sleep first 😴", next:"gymPathDeep2B", stats:{energy:3, studyLevel:-1, balance:1}}
    ]
  },

  gymPathDeep2A:{
    text:"Making progress Getting better",
    choices:[
      {text:"Finish now 📊", next:"end2", stats:{studyLevel:4, energy:-2, balance:2}},
      {text:"Rest soon 😴", next:"end4", stats:{energy:2, studyLevel:2, balance:1}}
    ]
  },

  gymPathDeep2B:{
    text:"Morning Ready to work",
    choices:[
      {text:"Final polish 📊", next:"end2", stats:{studyLevel:3, energy:1, balance:1}},
      {text:"Present now 🎤 ", next:"end4", stats:{balance:2, energy:1}}
    ]
  },
//================================== SLEEP
  sleepPath:{
    text:"Slept well Fresh and ready",
    choices:[
      {text:"Prepare early 📊", next:"sleepPathDeep1", stats:{studyLevel:4, energy:2, balance:1}},
      {text:"Breakfast first 🥐", next:"sleepPathDeep2", stats:{friendship:2, energy:1, studyLevel:-2}}
    ]
  },

  sleepPathDeep1:{
    text:"Morning work Feeling strong",
    choices:[
      {text:"Detail work 🔧", next:"sleepPathDeep1A", stats:{studyLevel:3, energy:-1, balance:1}},
      {text:"Relax first ☕", next:"sleepPathDeep1B", stats:{energy:2, balance:2, friendship:1}}
    ]
  },

  sleepPathDeep1A:{
    text:"Prefect slides You're ready 💪 ",
    choices:[
      {text:"Review once 📖", next:"end5", stats:{studyLevel:4, energy:-2, balance:1}},
      {text:"Rest before 😴", next:"secret", stats:{energy:3, balance:3, studyLevel:3}}
    ]
  },

  sleepPathDeep1B:{
    text:"Relaxed. Confident 😌",
    choices:[
      {text:"Light review 📝", next:"end5", stats:{studyLevel:2, balance:2, energy:1}},
      {text:"Just present 🎤", next:"end4", stats:{balance:1, energy:1}}
    ]
  },

  sleepPathDeep2:{
    text:"Chatting with family. Time passes!",
    choices:[
      {text:"Work now ⚡", next:"sleepPathDeep2A", stats:{studyLevel:2, energy:-2, balance:1}},
      {text:"Keep talking 💬", next:"sleepPathDeep2B", stats:{friendship:2, energy:1, studyLevel:-3}}
    ]
  },

  sleepPathDeep2A:{
    text:"Rushed work. Energy low!",
    choices:[
      {text:"Caffeine boost ☕", next:"end4", stats:{studyLevel:2, energy:-1, balance:1}},
      {text:"Rest first 😴", next:"end3", stats:{energy:2, studyLevel:-1, balance:-1}}
    ]
  },

  sleepPathDeep2B:{
    text:"No time left 😱",
    choices:[
      {text:"Quick prep 📚", next:"end3", stats:{studyLevel:-1, energy:-2, balance:-1}},
      {text:"Wing it 🎲", next:"end6", stats:{studyLevel:-4, balance:-3, energy:1}}
    ]
  },

  end1:{end:true, text:"Failed presentation 😢 Party was worth it"},
  end2:{end:true, text:"Perfect Got promotion 🚀"},
  end3:{end:true, text:"Okay presentation 😅 kept job"},
  end4:{end:true, text:"Good job 😎 Boss impressed "},
  end5:{end:true, text:"Great presentaion  ⚖️ Team happy"},
  end6:{end:true, text:"Disaster 😵 Got fired"}
}



const storyZombie = {
  start:{
    text:"🧟 ZOMBIE APOCALYPSE! Survive the night",
    choices:[
      {text:"Barricade & hide 🚪", next:"hidePath"},
      {text:"Collect weapons 🔫", next:"weaponsPath"},
      {text:"Sleep in safehouse 😴", next:"sleepPath"}
    ]
  },
  secret:{
    end:true,
    text:"SECRET ENDING 🌟 You became tha last human hero"
  },
  // ================================ HIDE
  hidePath:{
    text:"You barriceaded the house. Zombies surround it ",
    choices:[
      {text:"Break through 💥", next:"end1", stats:{studyLevel:-2, friendship:3}},
      {text:"Stay hidden 🤐", next:"hidePathDeep1", stats:{studyLevel:3, energy:-1}}
    ]
  },

  hidePathDeep1:{
    text:"Hours pass. Radio signal detected ",
    choices:[
      {text:"Answer 📻", next:"hidePathDeep2", stats:{friendship:2, studyLevel:-1, energy:1}},
      {text:"Ignore it 🚫", next:"hidePathDeep3", stats:{studyLevel:2, friendship:-1, balance:1}}
    ]
  },

  hidePathDeep2:{
    text:"Military unit asking for location, Rescue coming",
    choices:[
      {text:"Tell location 📡", next:"end1", stats:{friendship:3, studyLevel:-3, balance:1}},
      {text:"Stay silent 🤫", next:"end2", stats:{studyLevel:4, friendship:-1, balance:2}}
    ]
  },

  hidePathDeep3:{
    text:"You fonud a map to safe zone 🗺️",
    choices:[
      {text:"Leave now 🏃", next:"end2", stats:{energy:2, studyLevel:2, balance:1}},
      {text:"Wait for dawn 🌅", next:"secret", stats:{studyLevel:5, energy:-2, balance:2}}
    ]
  },

///========================== WEAPONS
  weaponsPath:{
    text:"You got weapons But zombies closing in ",
    choices:[
      {text:"Fight them 💪 ", next:"weaponsPathDeep1", stats:{energy:3, studyLevel:-2, friendship:1}},
      {text:"Run away 🏃", next:"weaponsPathDeep2", stats:{studyLevel:2, energy:-1, friendship:-1}}
    ]
  },

  weaponsPathDeep1:{
    text:"Battle You killed 5 zombies",
    choices:[
      {text:"Continue fighting ⚔️", next:"weaponsPathDeep1A", stats:{studyLevel:3, energy:-2, balance:1}},
      {text:"Escape now 🚪", next:"weaponsPathDeep1B", stats:{energy:2, studyLevel:-2, balance:-1}}
    ]
  },

  weaponsPathDeep1A:{
    text:"Last zombie One final strike",
    choices:[
      {text:"Kill it 🎯", next:"end4", stats:{studyLevel:4, energy:-3, balance:2}},
      {text:"Spare it 😢", next:"end3", stats:{studyLevel:-1, friendship:1, energy:1}}
    ]
  },

  weaponsPathDeep1B:{
    text:"Escaped But injuerd",
    choices:[
      {text:"Find clinic 🏥", next:"end3", stats:{studyLevel:1, energy:1, balance:-1}},
      {text:"Hide in cave 🕳️", next:"end6", stats:{studyLevel:-3, balance:-2, energy:1}}
    ]
  },

  weaponsPathDeep2:{
    text:"Running through streets. Found group",
    choices:[
      {text:"Join group 👥", next:"weaponsPathDeep2A", stats:{studyLevel:2, energy:-1, balance:1}},
      {text:"Stay alone 🚶", next:"weaponsPathDeep2B", stats:{energy:3, studyLevel:-1, balance:1}}
    ]
  },

  weaponsPathDeep2A:{
    text:"Group has plan. Together is safer",
    choices:[
      {text:"Go with them 🤝", next:"end2", stats:{studyLevel:4, energy:-2, balance:2}},
      {text:"Leave soon 👋", next:"end4", stats:{energy:2, studyLevel:2, balance:1}}
    ]
  },

  weaponsPathDeep2B:{
    text:"Solo survival. Very dangerous ! ",
    choices:[
      {text:"Find shelter 🏠", next:"end2", stats:{studyLevel:3, energy:1, balance:1}},
      {text:"Keep wandering 🌍", next:"end4", stats:{balance:2, energy:1}}
    ]
  },
//================================== SLEEP
  sleepPath:{
    text:"Safehouse locked. You sleep safely 💤",
    choices:[
      {text:"Plan escape 🗺️", next:"sleepPathDeep1", stats:{studyLevel:4, energy:2, balance:1}},
      {text:"Explore building 🔍", next:"sleepPathDeep2", stats:{friendship:2, energy:1, studyLevel:-2}}
    ]
  },

  sleepPathDeep1:{
    text:"Morning You have supplies",
    choices:[
      {text:"Prepare gear ⚔️", next:"sleepPathDeep1A", stats:{studyLevel:3, energy:-1, balance:1}},
      {text:"Wait for help 📻", next:"sleepPathDeep1B", stats:{energy:2, balance:2, friendship:1}}
    ]
  },

  sleepPathDeep1A:{
    text:"ou're ready for anything! 💪",
    choices:[
      {text:"Head out 🚀", next:"end5", stats:{studyLevel:4, energy:-2, balance:1}},
      {text:"Scout first 👀", next:"secret", stats:{energy:3, balance:3, studyLevel:3}}
    ]
  },

  sleepPathDeep1B:{
    text:"Waiting. Signal received 📡",
    choices:[
      {text:"Respond 📞", next:"end5", stats:{studyLevel:2, balance:2, energy:1}},
      {text:"Prepar to leave 🏃", next:"end4", stats:{balance:1, energy:1}}
    ]
  },

  sleepPathDeep2:{
    text:"Found supplies! But also zombies!",
    choices:[
      {text:"Fight now ⚔️", next:"sleepPathDeep2A", stats:{studyLevel:2, energy:-2, balance:1}},
      {text:"Hide 🤫", next:"sleepPathDeep2B", stats:{friendship:2, energy:1, studyLevel:-3}}
    ]
  },

  sleepPathDeep2A:{
    text:"Battle! Got wounded",
    choices:[
      {text:"Keep fighting 💢", next:"end4", stats:{studyLevel:2, energy:-1, balance:1}},
      {text:"Retreat 🚪", next:"end3", stats:{energy:2, studyLevel:-1, balance:-1}}
    ]
  },

  sleepPathDeep2B:{
    text:"Zombies passed! You survived!",
    choices:[
      {text:"Escape 🏃", next:"end3", stats:{studyLevel:-1, energy:-2, balance:-1}},
      {text:"Fortify here 🏰", next:"end6", stats:{studyLevel:-4, balance:-3, energy:1}}
    ]
  },

  end1:{end:true, text:"Overrun by zombies 😵 Game Over"},
  end2:{end:true, text:"Rescued 🚁 You're safe"},
  end3:{end:true, text:"Survived barely 😅 Scarred for life"},
  end4:{end:true, text:"Hero 🦸 Made it out "},
  end5:{end:true, text:"Strong survivor ⚖️ Found safety"},
  end6:{end:true, text:"Lost 😵 Turned into zombie"}
}
  

const storyGamer = {
  start:{
    text:"Epic gaming tournament tomorrow! 🎮",
    choices:[
      {text:"Practice 12 hours 🎯", next:"practicePath"},
      {text:"Stream for fun 📱", next:"streamPath"},
      {text:"Sleep & recover 😴", next:"sleepPath"}
    ]
  },
  secret:{
    end:true,
    text:"SECRET ENDING 🏆 You became a pro gamer!"
  },
  practicePath:{
    text:"Training hard! Chat wants you to stream!",
    choices:[
      {text:"Stream now 📡", next:"end1", stats:{studyLevel:-2, friendship:3}},
      {text:"Practice solo 🎮", next:"practicePathDeep1", stats:{studyLevel:3, energy:-1}}
    ]
  },
  practicePathDeep1:{
    text:"6 hours in. Getting tired but improving!",
    choices:[
      {text:"Break & relax 🍕", next:"practicePathDeep2", stats:{friendship:2, studyLevel:-1, energy:1}},
      {text:"More practice 🎯", next:"practicePathDeep3", stats:{studyLevel:2, friendship:-1, balance:1}}
    ]
  },
  practicePathDeep2:{
    text:"Friends calling to play together!",
    choices:[
      {text:"Join them 👥", next:"end1", stats:{friendship:3, studyLevel:-3, balance:1}},
      {text:"Stay focused 🎮", next:"end2", stats:{studyLevel:4, friendship:-1, balance:2}}
    ]
  },
  practicePathDeep3:{
    text:"You're on fire! Skills maxed! 🔥",
    choices:[
      {text:"Sleep now 😴", next:"end2", stats:{energy:2, studyLevel:2, balance:1}},
      {text:"Final grind 💪", next:"secret", stats:{studyLevel:5, energy:-2, balance:2}}
    ]
  },


  streamPath:{
    text:"Streaming & vibing! Lots of followers!",
    choices:[
      {text:"Stream longer 📡", next:"streamPathDeep1", stats:{energy:3, studyLevel:-2, friendship:1}},
      {text:"Practice too 🎮", next:"streamPathDeep2", stats:{studyLevel:2, energy:-1, friendship:-1}}
    ]
  },
  streamPathDeep1:{
    text:"5 hours streaming. Now very tired!",
    choices:[
      {text:"Quick nap ⚡", next:"streamPathDeep1A", stats:{studyLevel:3, energy:-2, balance:1}},
      {text:"Just chill 😴", next:"streamPathDeep1B", stats:{energy:2, studyLevel:-2, balance:-1}}
    ]
  },
  streamPathDeep1A:{
    text:"Refreshed! Few hours left!",
    choices:[
      {text:"Practice hard 🎯", next:"end4", stats:{studyLevel:4, energy:-3, balance:2}},
      {text:"Check Discord 💬", next:"end3", stats:{studyLevel:-1, friendship:1, energy:1}}
    ]
  },
  streamPathDeep1B:{
    text:"Overslept! Tournament starts soon!",
    choices:[
      {text:"Quick warmup 🎮", next:"end3", stats:{studyLevel:1, energy:1, balance:-1}},
      {text:"Wing it 🎲", next:"end6", stats:{studyLevel:-3, balance:-2, energy:1}}
    ]
  },
  streamPathDeep2:{
    text:"Balance practice & streaming!",
    choices:[
      {text:"More practice 🎮", next:"streamPathDeep2A", stats:{studyLevel:2, energy:-1, balance:1}},
      {text:"Stream more 📡", next:"streamPathDeep2B", stats:{energy:3, studyLevel:-1, balance:1}}
    ]
  },
  streamPathDeep2A:{
    text:"Getting better! Gaining confidence!",
    choices:[
      {text:"Full practice 🎯", next:"end2", stats:{studyLevel:4, energy:-2, balance:2}},
      {text:"Rest now 😴", next:"end4", stats:{energy:2, studyLevel:2, balance:1}}
    ]
  },
  streamPathDeep2B:{
    text:"Streaming late night!",
    choices:[
      {text:"Final practice 🎮", next:"end2", stats:{studyLevel:3, energy:1, balance:1}},
      {text:"Sleep soon 😴", next:"end4", stats:{balance:2, energy:1}}
    ]
  },


  sleepPath:{
    text:"Rest well! Mental reset! 💤",
    choices:[
      {text:"Light practice 🎮", next:"sleepPathDeep1", stats:{studyLevel:4, energy:2, balance:1}},
      {text:"Gaming session 🎮", next:"sleepPathDeep2", stats:{friendship:2, energy:1, studyLevel:-2}}
    ]
  },
  sleepPathDeep1:{
    text:"Morning! Feeling fresh!",
    choices:[
      {text:"Full training 🔧", next:"sleepPathDeep1A", stats:{studyLevel:3, energy:-1, balance:1}},
      {text:"Chill stream ☕", next:"sleepPathDeep1B", stats:{energy:2, balance:2, friendship:1}}
    ]
  },
  sleepPathDeep1A:{
    text:"Perfect practice! You're sharp! 💪",
    choices:[
      {text:"Review plays 📖", next:"end5", stats:{studyLevel:4, energy:-2, balance:1}},
      {text:"Final rest 😴", next:"secret", stats:{energy:3, balance:3, studyLevel:3}}
    ]
  },
  sleepPathDeep1B:{
    text:"Chilled & confident! 😌",
    choices:[
      {text:"Light review 📝", next:"end5", stats:{studyLevel:2, balance:2, energy:1}},
      {text:"Go to tournament 🏁", next:"end4", stats:{balance:1, energy:1}}
    ]
  },
  sleepPathDeep2:{
    text:"Gaming with friends!",
    choices:[
      {text:"Practice more ⚡", next:"sleepPathDeep2A", stats:{studyLevel:2, energy:-2, balance:1}},
      {text:"Keep gaming 🎮", next:"sleepPathDeep2B", stats:{friendship:2, energy:1, studyLevel:-3}}
    ]
  },
  sleepPathDeep2A:{
    text:"Mixed session. Energy low!",
    choices:[
      {text:"Energy drink ☕", next:"end4", stats:{studyLevel:2, energy:-1, balance:1}},
      {text:"Sleep again 😴", next:"end3", stats:{energy:2, studyLevel:-1, balance:-1}}
    ]
  },
  sleepPathDeep2B:{
    text:"Lost track of time! 😱",
    choices:[
      {text:"Panic practice 📚", next:"end3", stats:{studyLevel:-1, energy:-2, balance:-1}},
      {text:"Just go 🎲", next:"end6", stats:{studyLevel:-4, balance:-3, energy:1}}
    ]
  },
  end1:{end:true, text:"Had fun streaming 🎉 Lost tournament"},
  end2:{end:true, text:"1st place! 🏆 Champion!"},
  end3:{end:true, text:"Made top 8 😅 Good run"},
  end4:{end:true, text:"Top 16 😎 Respectable!"},
  end5:{end:true, text:"Top 10 ⚖️ Strong showing"},
  end6:{end:true, text:"Eliminated early 😵 GG"}
}																																				



function showScenarioDynamic(){

  let storyData = storyHighSchool
  if (gamemode === "highschool") storyData = storyHighSchool
  if (gamemode === "work") storyData = storyWork
  if (gamemode === "zombie") storyData = storyZombie
  if (gamemode === "gamer") storyData = storyGamer


  if (storyData[current].end && stats.studyLevel >= 9 && stats.balance >= 9 && studied){
    current = "secret"
  }

  let scene = {...storyData[current]}
  const container = document.getElementById("sceneDynamic")

  container.innerHTML = ""

  if (Math.random() < 0.3){
    scene.text += "\n⚠️ Something unexpected happened!"
  }

  const p = document.createElement("p")
  p.innerText = scene.text
  if (studied){
    p.innerText += "\n😎 You studied before"
  }
  if (played){
    p.innerText += "\n🎮 You played a lot"
  }
  if(current === "sleepPath" && studied){
  p.innerText += "\n😎 You slept after studying!"
}

if(current === "playPath" && studied){
  p.innerText += "\n😅 You got distracted after studying!"
}
  container.appendChild(p)

  const statsDiv = document.createElement("div")
  statsDiv.id = "statsContainer"
  statsDiv.className = "stats-display"
  statsDiv.innerHTML = `
  <div>📚 Study:  ${stats.studyLevel}/10</div>
  <div>⚡ Energy:  ${stats.energy}/10</div>
  <div>👥 Friendship:  ${stats.friendship}/10</div>
  <div>⚖️ Balance:  ${stats.balance}/10</div>`
  container.appendChild(statsDiv)

  if(scene.end){
    const btn = document.createElement("button")
    btn.innerText = "Restart"
    btn.onclick = restartGame
    container.appendChild(btn)
  } 
  else {
    scene.choices.forEach(choice => {
      const btn = document.createElement("button")
      btn.innerText = choice.text

      btn.onclick = () => {
        playclick()

        if(choice.next === "studyPath") studied = true
        if(choice.next === "playPath") played = true

        if (choice.stats) {
          Object.keys(choice.stats).forEach(key => {
            stats[key] += choice.stats[key]
          })

          Object.keys(stats).forEach(key =>{
            if (stats[key] > 10) stats[key] =10
            if (stats[key] < 0) stats[key] =0
          })
        }

        current = choice.next
        
        updateProgressDynamic()
        showScenarioDynamic()
      }

      container.appendChild(btn)
    })
  }
}


function updateProgressDynamic(){
  const progressMap = {
    
    start: 0,

    studyPath: 30,
    studyPathDeep1:50,
    studyPathDeep2: 70,    
    studyPathDeep3: 70, 

    playPath: 40,
    playPathDeep1:60,
    playPathDeep1A:80,
    playPathDeep1B:80,
    playPathDeep2:60,
    playPathDeep2A:80,
    playPathDeep2B:80,

    sleepPath: 20,
    sleepPathDeep1: 50,
    sleepPathDeep1A: 80,
    sleepPathDeep1B: 80,
    sleepPathDeep2: 50,
    sleepPathDeep2A: 80,
    sleepPathDeep2B: 80,

    secret : 100,
    end1: 100,
    end2: 100,
    end3: 100,
    end4: 100,
    end5: 100,
    end6: 100
  }

  document.getElementById("progress-bar").style.width = progressMap[current] + "%"
}

function restartGame(){
  stats = {
  studyLevel:5,
  energy:5,
  friendship:5,
  balance:5,
  }
  current = "start"
  studied = false
  played = false
  document.getElementById("sceneDynamic").innerHTML = ""
  updateProgressDynamic()
  showScenarioDynamic()
  
}