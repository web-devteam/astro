setTimeout(function1, 10000);
function function1 (){
document.getElementById("loadpage").style.display="none" ;
} ; 
let randomize = Math.floor(Math.random()*8)
let ran1 = Math.floor(Math.random() *255)
let ran2 = Math.floor(Math.random() *255)
let ran3 = Math.floor(Math.random() *255)
let color = "rgb("+ran1+", "+ran2+", "+ran3+")"

console.log(randomize)
if(randomize==0){document.getElementById("displayimg").src="_23adfd5d-c39f-46cd-b02b-9231bbf1374c.jpg"
let randomize2 = Math.floor(Math.random()*4)
console.log(randomize2)
let randomize3 = Math.floor(Math.random()*18)
let randomize4 = Math.floor(Math.random()*8)
let randomizetime1 = Math.floor(Math.random()*23)
let randomizetime2 = Math.floor(Math.random()*60)
let names = ["wake up", "cook", "bed time", "evening jog", "exercise", "morning jog", "water the plant", "morning alarm", "alarm 1", "alarm 2", "alarm 3", "alarm 4", "alarm 5", "afternoon prayer", "church", "school alarm", "saturday cleaning", "daisy saturday bath", "work"]
let days = ["todays", "monday", "wednesday", "friday", "saturday", "sunday", "tuesday", "thursday" ]
if(randomize2==0){document.getElementById("infotxt").innerHTML="astro please set an alarm for "+randomizetime1+":"+randomizetime2+" title "+names[randomize3]}
else if(randomize2==1){document.getElementById("infotxt").innerHTML="astro please delete my "+names[randomize3]+" alarm"}
else if(randomize2==2){document.getElementById("infotxt").innerHTML="astro please read my "+days[randomize4]+" alarm"}
else if(randomize2==3){document.getElementById("infotxt").innerHTML="astro please snooze all active alarm for "+randomizetime2+" min"}}

else if(randomize==1){document.getElementById("displayimg").src="img14.jpg"
let randomize2 = Math.floor(Math.random()*3)
console.log(randomize2)
let randomize4 = Math.floor(Math.random()*14)
let randomize3 = Math.floor(Math.random()*23)
let randomizetime1 = Math.floor(Math.random()*23)
let randomizetime2 = Math.floor(Math.random()*60)
let names = ["pick up emmie from school", "pick up some groceries", "go to the shopping mall", "buy some sugar", "take a bath", "fuel the car", "clean the house", "pick up gran gran", "go to the hospital", "do a check up", "bath spike", "wash my car", "dress for my metting", "dress for my date", "prep for game night", "call lisa", "go to the mall", "go for spar", "greet my new neighbours", "wish andrew happy birthday", "wish philpi happy anniversery", "call my sister", "go fishing on weekend", "purchase the t-shirt", ]
let names2 = ["shopping", "bath", "sugar", "hospital", "check up", "meeting", "date", "spar", "birthday", "anniversery", "fishing", "weekend", "pick up", "order", ]
if(randomize2==0){document.getElementById("infotxt").innerHTML="astro please remind me to "+names[randomize3]+" by "+randomizetime1+":"+randomizetime2}
else if(randomize2==1){document.getElementById("infotxt").innerHTML="astro please delete my "+names2[randomize4]+" reminder"}
else if(randomize2==2){document.getElementById("infotxt").innerHTML="astro please cancel my "+names2[randomize4]+" reminder"}
}
else if(randomize==2){document.getElementById("displayimg").src="img 12.jpg"
let randomize2 = Math.floor(Math.random()*2)
console.log(randomize2)
let randomize3 = Math.floor(Math.random()*18)
let names = ["shopping list", "general cleaning", "repairs", "wishlist", "price list", "options", "medical records", "bio", "phy", "chem", "jottings", "ideas", "planner", "deco", "note 1", "note 2", "note 3", "note 4", "note 5"]
if(randomize2==0){document.getElementById("infotxt").innerHTML="astro please read my "+names[randomize3]+" note"}
else if(randomize2==1){document.getElementById("infotxt").innerHTML="astro please delete my "+names[randomize3]+" note"}
}

else if(randomize==3){document.getElementById("displayimg").src="img 4.jpg"
let randomize3 = Math.floor(Math.random()*26)
let names = ["all my life", "amapiano", "healing", "central cee let go", "drake on the radar", "eh God", "reckless love", "what a beautiful name", "last last", "joha", "memories", "happier", "miracle no dey tire jesus", "reason", "ole", "omo ope by asake", "my guy", "terminator", "shallipopi cast", "things of things", "our father", "big 7", "oceans", "praise", "firm foundation", "elon musk", "exconvict", ]
document.getElementById("infotxt").innerHTML="astro please play "+names[randomize3]
}
else if(randomize==4){document.getElementById("displayimg").src="img 8.jpg"
let randomize3 = Math.floor(Math.random()*14)
let names = ["2500+3000+5000+9000", "3+50+70+9+3", "2000*1500", "3000-500-100-200-1000", "10+20+30+40+50", "40*100", "1000*59", "5000-1290-1000", "50+40+1000+90", "3*8*7*4", "20000-4000-2000-1000", "30+40+63", "3332+4090+1122", "32*565*45", "1234-578-321",  ]
document.getElementById("infotxt").innerHTML="astro please calculate "+names[randomize3]}

else if(randomize==5){document.getElementById("displayimg").src="OIG (6).jpg"
let randomize3 = Math.floor(Math.random()*16)
if(randomize3==0){document.getElementById("infotxt").innerHTML="astro please set a timer for 40 min"}
else if(randomize3==1){document.getElementById("infotxt").innerHTML="show sidebar"}
else if(randomize3==2){document.getElementById("infotxt").innerHTML="turn on voice mode"}
else if(randomize3==3){document.getElementById("infotxt").innerHTML="flip a coin"}
else if(randomize3==4){document.getElementById("infotxt").innerHTML="roll a dice"}
else if(randomize3==5){document.getElementById("infotxt").innerHTML="start focus session"}
else if(randomize3==6){document.getElementById("infotxt").innerHTML="hide sidebar"}
else if(randomize3==7){document.getElementById("infotxt").innerHTML="turn off voice mode"}
else if(randomize3==8){document.getElementById("infotxt").innerHTML="play random music"}
else if(randomize3==9){document.getElementById("infotxt").innerHTML="pause music"}
else if(randomize3==10){document.getElementById("infotxt").innerHTML="play next track"}
else if(randomize3==11){document.getElementById("infotxt").innerHTML="please play prev track"}
else if(randomize3==12){document.getElementById("infotxt").innerHTML="what is the time"}
else if(randomize3==13){document.getElementById("infotxt").innerHTML="what is today's date"}
else if(randomize3==14){document.getElementById("infotxt").innerHTML="what is my device battery percent"}
else if(randomize3==15){document.getElementById("infotxt").innerHTML="astro is my laptop charging"}
}

else if(randomize==6){document.getElementById("displayimg").src="img 1.jpg"
let randomize3 = Math.floor(Math.random()*18)
if(randomize3==0){document.getElementById("infotxt").innerHTML="tired of typing why not try the voice mode"}
else if(randomize3==1){document.getElementById("infotxt").innerHTML="use sidebar to access various modes"}
else if(randomize3==2){document.getElementById("infotxt").innerHTML="the focus session is the perfect mode to help you get activities done and really focus"}
else if(randomize3==3){document.getElementById("infotxt").innerHTML="astro version 5.0 coming soon"}
else if(randomize3==4){document.getElementById("infotxt").innerHTML="create your account and don't miss out on any of astro's seasonal activites and more at https://web-devteam.github.io/astro-build"}
else if(randomize3==5){document.getElementById("infotxt").innerHTML="need help visit https://web-devteam.github.io/getting-started"}
else if(randomize3==6){document.getElementById("infotxt").innerHTML="report any bug or issue at https://web-devteam.github.io/getting-started"}
else if(randomize3==7){document.getElementById("infotxt").innerHTML="each version of astro comes with a better and more user friendly offline chat mode"}
else if(randomize3==8){document.getElementById("infotxt").innerHTML="welcome to the world of virtual assistance"}
else if(randomize3==9){document.getElementById("infotxt").innerHTML="set reminders, view alarms, type notes, play muisc all in one web app"}
else if(randomize3==10){document.getElementById("infotxt").innerHTML="want to see some of your own features in the next version just make your request"}
else if(randomize3==11){document.getElementById("infotxt").innerHTML="most of astro's function still functions while your data is turned off, using the new data saver mode for astro"}
else if(randomize3==12){document.getElementById("infotxt").innerHTML="get real time date and battery information open apps, send emails and do a lot more with astro"}
else if(randomize3==13){document.getElementById("infotxt").innerHTML="astro is perfect for all devices including smart screens for cars"}
else if(randomize3==14){document.getElementById("infotxt").innerHTML="take astro anywhere even on the road"}
else if(randomize3==15){document.getElementById("infotxt").innerHTML="visit our youtube page and discord channels"}
else if(randomize3==16){document.getElementById("infotxt").innerHTML="each version of astro comes with new modes and better interfaces. introducing the quick command and focus session modes"}
else if(randomize3==17){document.getElementById("infotxt").innerHTML="double tap the chat display area to view the quick command menu"}}

else{document.getElementById("displayimg").src="OIG (6).jpg"
let randomize3 = Math.floor(Math.random()*18)
let names = ["spotify", "whatsapp", "snapchat", "facebook", "instagram", "x", "onenote", "microsoft edge", "itunes", "battle net", "outlook", "onedrive", "power point", "ms word", "app store", "galary", "camera", "plex", "netflix", "zoom" ]
document.getElementById("infotxt").innerHTML="open "+names[randomize3]
}



let loaded = false
let loaded2 = false
let attempt = sessionStorage.getItem("attempt")
if(attempt==null){attempt=0}
console.log(attempt)
setTimeout(()=>{if(parseInt(attempt)<4){
  if(loaded==false){window.alert("astro couldn't load one or more data from previous session and needs to reload to resolve issue. Attempt "+attempt+" out of 3");
    attempt=parseInt(attempt)+1; sessionStorage.setItem("attempt", attempt);
     location.reload();
  } 
  else{sessionStorage.setItem("attempt", "0")}}
else if(loaded==false){window.alert("astro couldn't seem to fix the issue please try using a differnt web browser or restarting your current web browser. if you wish to continue you might experience some issue. please contact us for more information"); }
else{sessionStorage.setItem("attempt", "0")}
if(loaded2==false && loaded==false){window.alert("one or more of astro's api's could not load successfully, this may be due to the data loading error. you may wish to continue, but some functions might be offline")}
else if(loaded2==false){window.alert("it seem's like your web browser does not support astro's battery function, you may try using another web browser. if you wish to continue, astro will still function normally but the battery functions would be offline")}}, 9000)
function tag(){
  let num = Math.floor(Math.random() *4)
  console.log(num)
if(num==1){question="would you like me to read your scheduel"}
else if(num==2){question="would you like me to play you a song"}
else if(num==3){question="would you like me to tell you a joke"}
else if(num==0){question="how may i help you"};
console.log(question);}
let mindex = 0;
let micon = false;
let appname = ""
let conti = false;
let creturn = 0
let newuser = 0;
let situ = "";
let sp = ""
let formerreply = ""
let songmode = localStorage.getItem("songmode")
let arang = ""
let rrang = ""
let notevalue = "";
let remindervalue = ""
let completedvalue = 0;
let completed = document.getElementById("completed");
let phonecall = document.getElementById("phonecall");
let load = document.getElementById("load");
let mainaudio = document.getElementById("mainaudio");
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");
let audio4 = document.getElementById("audio4");
let utube = document.getElementById("youtube");
let alarmcontent = ""
let alarmlogic = ""
let callername = ""
let emailername=""
let notecontent = ""
let add = 0
let remindercontent = ""
let reminderlogic = ""
let battlevfull = ""
let fulllev = ""
let battlevlow = ""
let lowlev = ""
let voiceon = ""
let applog = ""
let remindersound = ""
let alarmview = ""
let duration = ""
let durationvalue = ""
let alarmsound = ""
let snoozetime = ""
let snoozevalue=""
let checklistf = ""
let oneclickmode = ""
let tipsarray = localStorage.getItem("tips")
if(tipsarray==null){tipsarray=[0, 0, 0, 0, 0, 0, 0, 0]}
else{tipsarray=tipsarray.split(",")}
console.log(tipsarray)
let oneclickf = ""
let timing = false
let timing2 = false
let batterystate = ""
let emaillog = ""
let phonelog = ""
let batterylvl = ""
let tab = document.getElementById("tab");
let username = document.getElementById("username");
let date = 0;
let statement = null;
 setInterval((function datev(){date = new Date; console.log(date); document.getElementById("fctimetxt").innerHTML="time/date : "+date}), 1000);
let on = false;
let text = "";
let start = false
let chattext = document.getElementById("chat");
let enter = document.getElementById("enter");
let mic = document.getElementById("mic");
let mic2 = document.getElementById("mic2");
let question = "";
let question2 = "";
let circle = document.getElementById("circle");
let acceptinput = false;
let reply = "";
setInterval(()=>{document.getElementById("time").innerHTML = date.toLocaleTimeString()})
enter.addEventListener("click", ()=>{f2(); f4()})
document.getElementById("chat").addEventListener("keydown", function(event){if(event.keyCode == 13){
  f2(); f4()
  if(tipsarray[0]==0){document.getElementById("tip").style.display="flex"; document.getElementById("tiptxt").innerHTML="double tab the screen to open the quick command menu"
  setTimeout(() => {
    document.getElementById("tip").style.display="none"
  }, 6000);
    tipsarray[0]=1; localStorage.setItem("tips", tipsarray)}
}})
let date2 = new Date
let value3 = localStorage.getItem("timing")
date2 = date2.toLocaleDateString().split("/")
date2 = date2[1]
console.log(date2)
console.log(value3)
let formertxt = ""

function f2 (){
    let chat = document.createElement("p");
    let box = document.createElement("section");
    let box2 = document.createElement("article");
    reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
if(on==false){chat.innerText=chattext.value.toLowerCase().padEnd().padStart().replace(",", "").replace("!", "")}
else{chat.innerText=text.toLowerCase().padEnd().padStart().replace(",", "").replace("!", "");}
box.appendChild(chat)
box2.appendChild(reply)
chatarea.appendChild(box)
chatarea.appendChild(box2);
let chat2 = chat.innerText;
chatarea.scrollTo(0, 3000000000000000000000)
chattext.value=chattext.value.toLowerCase().padEnd().padStart().replace(".", "").replace(",", "").replace("!", "");
let value1 = "";
formertxt=chat.innerText
    let split = chattext.value.split(" ")
    
    console.log(split)
    console.log(split[0])
    if(chat.innerHTML.includes("how")){value1="describe"; console.log(value1)}
    else if(chat.innerHTML.includes("what")){value1="explain"; console.log(value1)}
    else if(chat.innerHTML.includes("who")){value1="name"; console.log(value1)}
    else if(chat.innerHTML.includes("where")){value1="place"; console.log(value1)}
    else if(chat.innerHTML.includes("when")){value1="time"; console.log(value1)}
    else if(chat.innerHTML.includes("why")){value1="question"; console.log(value1)}
    else if(chat.innerHTML.includes("are")){value1="yesorno"; console.log(value1)}
    else if(chat.innerHTML.includes("have")){value1="hyesorno"; console.log(value1)}
    else if(chat.innerHTML.includes("you")){value1= "mestatement"; console.log(value1)};

 let reference = "";
 if(chat.innerHTML.includes("youtube")){reference="utube"; console.log(reference)}
 else if(chat.innerHTML.match(/\byou\b/)){reference="me"; console.log(reference)}
  else if(chat.innerHTML.match(/\bme\b/)){reference="user"; console.log(reference)}
  else if(chat.innerHTML.match(/\bmy\b/)){reference="user"; console.log(reference)}
  else if(chat.innerHTML.match(/\bmine\b/)){reference="user"; console.log(reference)}
  else if(chat.innerHTML.match(/\bit\b/) || chat.innerHTML.includes("it's ")){reference="undefined"; console.log(reference)}
  else if(chat.innerHTML.match(/\bi\b/)){reference="user"; console.log(reference)}
  else if(chat.innerHTML.match(/\bi'm\b/)){reference="user"; console.log(reference)}
  else if(chat.innerHTML.match(/\byour\b/)){reference="me"; console.log(reference)}
  else if(chat.innerHTML.match(/\bastro\b/)){reference="me"; console.log(reference)}
 else if(chat.innerHTML.match(/\bhe\b/)){reference="he"; console.log(reference)}
 else if(chat.innerHTML.match(/\bher\b/)){reference="she"; console.log(reference)}
 else if(chat.innerHTML.match(/\bshe\b/)){reference="she"; console.log(reference)}
 else if(chat.innerHTML.match(/\bhim\b/)){reference="he"; console.log(reference)};

 let day = "";
 if(chat.innerHTML.includes("today")){day="today"; console.log(day)}
 else if(chat.innerHTML.includes("tomorrow")){day="tomorrow"; console.log(day)}
 else if(chat.innerHTML.includes("tomorrow's")){day="tomorrow"; console.log(day)}
 else if(chat.innerHTML.includes("yesterday")){day="yesterday"; console.log(day)}
 else if(chat.innerHTML.match(/\bday\b/)){day="today"; console.log(day)}
 else if(chat.innerHTML.includes("today's")){day="today"; console.log(day)}
 else if(chat.innerHTML.match("date")){day="day"; console.log(day)};

 let feeling = "";
 if(chat.innerHTML.includes("sad")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("stupid")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("useless")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("annoying")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("hate")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("mumu")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("worthless")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("unfortunate")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("ugly")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("shit")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("disgust")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("filthy")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("idiot")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("suck")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("fuck")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("fool")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("piece of trash")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("kill")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("hate")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("nice")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("love")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("amazing")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("nice")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("kind")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("wonderful")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("helpful")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("useful")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("fantastic")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("marvelous")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("special")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("cool")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("beautiful")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("okay")){feeling="okay"; console.log(feeling)} 
 else if(chat.innerHTML.match(/\bgood\b/)){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.match(/\bbad\b/)){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("fine")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("fool")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("mad")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("idiot")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("amazing")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("funny")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("cute")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("wonderful")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("rough")){feeling="bad"; console.log(feeling)};
 let greeting = "";
 if(chat.innerHTML.includes("hello")){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.match(/\bhi\b/)){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.includes("good morning")){greeting="morning"; console.log(greeting)}
 else if(chat.innerHTML.includes("good evening")){greeting="evening"; console.log(greeting)}
 else if(chat.innerHTML.includes("good afternoon")){greeting="afternoon"; console.log(greeting)}
 else if(chat.innerHTML.includes("good night")){greeting="night"; console.log(greeting)}
 else if(chat.innerHTML.includes("what's up")){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.includes("how far")){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.includes("bye")){greeting="bye"; console.log(greeting)};

 let verb = "";
 if(chat.innerHTML.includes("weather")){verb="weather"; console.log(verb)}
 else if(chat.innerHTML.includes("miss")){verb="miss"; console.log(verb)}
 else if(chat.innerHTML.includes("meet")){verb="meet"; console.log(verb)}
 else if(chat.innerHTML.includes("send")){verb="send"; console.log(verb)}
 else if(chat.innerHTML.includes("missed")){verb="missed"; console.log(verb)}
 else if(chat.innerHTML.includes("long")){verb="since"; console.log(verb)}
 else if(chat.innerHTML.includes("while")){verb="since"; console.log(verb)}
 else if(chat.innerHTML.includes("spoke")){verb="speak"; console.log(verb)}
 else if(chat.innerHTML.includes("thank")){verb="thank"; console.log(verb)}
 else if(chat.innerHTML.includes("start")){verb="start"; console.log(verb)}
 else if(chat.innerHTML.includes("name")){verb="name"; console.log(verb)}
 else if(chat.innerHTML.includes("welcome")){verb="welcome"; console.log(verb)}
  else if(chat.innerHTML.includes("pleasure")){verb="pleasure"; console.log(verb)}
  else if(chat.innerHTML.includes("play")){verb="play"; console.log(verb)}
 else if(chat.innerHTML.includes("unpause")){verb="unpause"; console.log(verb)}
  else if(chat.innerHTML.includes("pause")){verb="pause"; console.log(verb)}
  else if(chat.innerHTML.includes("tab")){verb="device"; console.log(verb)}
  else if(chat.innerHTML.includes("device")){verb="device"; console.log(verb)}
  else if(chat.innerHTML.includes("batter")){verb="device"; console.log(verb)}
  else if(chat.innerHTML.includes("phone")){verb="device"; console.log(verb)}
  else if(chat.innerHTML.includes("ipod")){verb="device"; console.log(verb)}
  else if(chat.innerHTML.includes("palmtop")){verb="device"; console.log(verb)}
  else if(chat.innerHTML.includes("laptop")){verb="device"; console.log(verb)}
  else if(chat.innerHTML.includes("pc")){verb="device"; console.log(verb)}
  else if(chat.innerHTML.includes("open")){verb="open"; console.log(verb)}
  else if(chat.innerHTML.includes("view")){verb="view"; console.log(verb)}
  else if(chat.innerHTML.includes("read")){verb="view"; console.log(verb)}
  else if(chat.innerHTML.includes("delete")){verb="delete"; console.log(verb)}
  else if(chat.innerHTML.includes("cancel")){verb="cancel"; console.log(verb)}
  else if(chat.innerHTML.includes("snooze")){verb="snooze"; console.log(verb)}
  else if(chat.innerHTML.includes("show")){verb="open"; console.log(verb)}
  else if(chat.innerHTML.includes("activate")){verb="activate"; console.log(verb)}
  else if(chat.innerHTML.includes("deactivate")){verb="deactivate"; console.log(verb)}
  else if(chat.innerHTML.includes("turn off")){verb="deactivate"; console.log(verb)}
  else if(chat.innerHTML.includes("turn on")){verb="activate"; console.log(verb)}
  else if(chat.innerHTML.includes("close")){verb="close"; console.log(verb)}
  else if(chat.innerHTML.includes("hide")){verb="close"; console.log(verb)}
  else if(chat.innerHTML.includes("name")){verb="name"; console.log(verb)}
  else if(chat.innerHTML.includes("sorry")){verb="sorry"; console.log(verb)}
  else if(chat.innerHTML.includes("date")){verb="date"; console.log(verb)}
  else if(chat.innerHTML.includes("time")){verb="time"; console.log(verb)}
  else if(chat.innerHTML.includes("joke")){verb="joke"; console.log(verb)}
  else if(chat.innerHTML.includes("assist")){verb="assist"; console.log(verb)}
  else if(chat.innerHTML.includes("help")){verb="assist"; console.log(verb)}
  else if(chat.innerHTML.includes("jokes")){verb="joke"; console.log(verb)}
   else if(chat.innerHTML.includes("bored")){verb="bored"; console.log(verb)}
  else if(chat.innerHTML.includes("fact")){verb="fact"; console.log(verb)}
  else if(chat.innerHTML.includes("facts")){verb="fact"; console.log(verb)}
  else if(chat.innerHTML.includes("search")){verb="search"; console.log(verb)};

let modes = "";
if(chat.innerHTML.includes("side bar")){modes="sidebar"; console.log(modes)}
else if(chat.innerHTML.includes("sidebar")){modes="sidebar"; console.log(modes)}
else if(chat.innerHTML.includes("side bar")){modes="sidebar"; console.log(modes)}
else if(chat.innerHTML.includes("voice mode")){modes="voicemode"; console.log(modes)}
else if(chat.innerHTML.includes("calculator")){modes="calculator"; console.log(modes)}
else if(chat.innerHTML.includes("music")){modes="music"; console.log(modes)}
else if(chat.innerHTML.includes("focus session")){modes="fc"; console.log(modes)}
else if(chat.innerHTML.includes("random music")){modes="rmusic"; console.log(modes)}
else if(chat.innerHTML.includes("song")){modes="music"; console.log(modes)}
else if(chat.innerHTML.includes("track")){modes="music"; console.log(modes)}
else if(chat.innerHTML.includes("text to speech")){modes="ttt"; console.log(modes)}
else if(chat.innerHTML.includes("text reader")){modes="ttt"; console.log(modes)}
else if(chat.innerHTML.includes("text-to-speech")){modes="ttt"; console.log(modes)}
else if(chat.innerHTML.includes("scheduel")){modes="scheduel"; console.log(modes)}
else if(chat.innerHTML.includes("schedule")){modes="scheduel"; console.log(modes)}
else if(chat.innerHTML.includes("alarm")){modes="alarm"; console.log(modes)}
else if(chat.innerHTML.includes("note")){modes="note"; console.log(modes)}
else if(chat.innerHTML.includes("notes")){modes="note"; console.log(modes)}
else if(chat.innerHTML.includes("reminder")){modes="reminder"; console.log(modes)}
else if(chat.innerHTML.includes("mail")){modes="mail"; console.log(modes)}
else if(chat.innerHTML.includes("new tab")){modes="tab"; console.log(modes)}
else if(chat.innerHTML.includes("games")){modes="game"; console.log(modes)}
else if(chat.innerHTML.includes("game")){modes="game"; console.log(modes)}
else if(chat.innerHTML.includes("tab")){modes="tab"; console.log(modes)}
else if(chat.innerHTML.includes("timer")){modes="timer"; console.log(modes)}
else if(chat.innerHTML.includes("setting")){modes="setting"; console.log(modes)};

let number = "";
if(chat.innerHTML.includes("1")){number="1"; console.log(number)}
else if(chat.innerHTML.includes("one")){number="1"; console.log(number)}
else if(chat.innerHTML.includes("2")){number="2"; console.log(number)}
else if(chat.innerHTML.includes("two")){number="2"; console.log(number)}
else if(chat.innerHTML.includes("3")){number="3"; console.log(number)}
else if(chat.innerHTML.includes("three")){number="3"; console.log(number)}

let others = ""
if(chat.innerHTML.includes("percent")){others="percent"; console.log(others)}
else if(chat.innerHTML.includes("level")){others="percent"; console.log(others)}
else if(chat.innerHTML.includes("status")){others="charge"; console.log(others)}
else if(chat.innerHTML.includes("skip")){others="next"; console.log(others)}
else if(chat.innerHTML.includes("next")){others="next"; console.log(others)}
else if(chat.innerHTML.includes("prev")){others="prev"; console.log(others)}
else if(chat.innerHTML.includes("charging")){others="charge"; console.log(others)}

 statement = greeting+value1+reference+feeling+verb+day+modes+others;
  console.log(statement);
 


//if(chattext.value.match(/\bokay\b/) || chattext.value.match(/\byes\b/) || chattext.value.match(/\bok\b/)){setTimeout(()=>{situ=""}, 100)}
//else{situ=""};



if(chat.innerText=="hi"){tag(); reply.innerHTML="hello"+" "+username.value+" "+question; conti=true; situ="hi"; formerreply=reply.innerHTML }
else if(chat.innerText=="hi astro"){tag(); reply.innerHTML="hello"+" "+username.value+" "+question; conti=true; situ="hi"; formerreply=reply.innerHTML }
else if(chat.innerText=="astro"){reply.innerHTML="yes"+" "+username.value}
else if(chat.innerText=="astro hi"){reply.innerHTML="hello"+" "+username.value}
else if(chat.innerText=="hey"){reply.innerHTML="hello"}
else if(chat.innerText=="hey astro"){reply.innerHTML="hello"}
else if(chat.innerText=="hey you"){reply.innerHTML="hello"}
else if(chat.innerText=="astro hey"){reply.innerHTML="hello"}
else if(chat.innerText=="how far"){reply.innerHTML="good"}
else if(chat.innerText=="what's up"){reply.innerHTML="the sky 😂"}
else if(chat.innerText=="what's up with you"){reply.innerHTML="nothing much"}
else if(chat.innerText=="what's going on"){reply.innerHTML="nothing much"}
else if(chat.innerText=="really"){reply.innerHTML="😊"}
else if(chat.innerText=="" || chat.innerText==""){reply.innerHTML="i don't have a response for that"}
else if(chat.innerText=="how are you" || chat.innerText==""){reply.innerHTML="good thanks for asking"}
else if(chat.innerText=="how is your day" || chat.innerText=="how was your day"){reply.innerHTML="fine, how was your's"}
else if(chat.innerText=="how are you doing" || chat.innerText==""){reply.innerHTML="good,how about you"}
else if(chat.innerText=="tell me the time" || chat.innerText=="astro can you tell me the time"){reply.innerHTML=date.toLocaleTimeString()}
else if(chat.innerText=="tell me todays date" || chat.innerText=="what's today date" || chat.innerText=="what is todays date" || chat.innerText=="what's the date" || chat.innerText=="what is the date" || chat.innerText=="what day is today"){reply.innerHTML=date.toLocaleDateString()}
else if(chat.innerText=="do you accept to abbriveations" || chat.innerText=="can i use abbriveatiions"){reply.innerHTML="no"}
else if(chat.innerText=="fine" || chat.innerText=="it's fine" || chat.innerText=="that's fine" || chat.innerText=="i'm fine" || chat.innerText=="i am fine"  ){reply.innerHTML="okay good to here that"}
else if(chat.innerText=="sad" || chat.innerText=="that's sad" || chat.innerText=="i'm sad" || chat.innerText=="i am sad" ){reply.innerHTML="sorry to hear that"}
else if(chat.innerText=="nice" || chat.innerText=="that's nice"){reply.innerHTML="ok"}
else if(chat.innerText=="what do we talk about" || chat.innerText=="so what do we talk about" || chat.innerText=="what should we talk about" ){reply.innerHTML="i don't know"}
else if(chat.innerText=="do you have games" || chat.innerText=="do you have inbuilt games"){reply.innerHTML="i don't have any inbuilt game"}
else if(chat.innerText=="who made you" || chat.innerText=="who created you" || chat.innerText=="who designed you"){reply.innerHTML="that's a classified information"}

else if(chat.innerText=="tell me a joke" || chat.innerText=="can you tell me a joke" || chat.innerText=="tell me another joke" || chat.innerText=="another joke" || chat.innerText=="i want to hear another joke"){
    let random = Math.floor(Math.random() *10)
  if(random==0){joke = "What did the left eye say to the right eye? Between you and me, something smells."}
  else if(random==1){joke = "I was going to tell you a joke about boxing but I forgot the punch line."}
  else if(random==2){joke = "Why couldn't the sunflower ride its bike? It lost its pedals."}
  else if(random==3){joke = "I ate a sock yesterday. It was very time-consuming."}
  else if(random==4){joke = "What kind of candy do astronauts like? Mars bars."}
  else if(random==5){joke = "What does a pig put on dry skin? Oinkment."}
  else if(random==6){joke = "Why do we tell actors to 'break a leg?' Because every play has a cast."}
  else if(random==7){joke = "My uncle named his dogs Timex and Rolex. They're his watch dogs."}
  else if(random==8){joke = "Which is faster, hot or cold? Hot, because you can catch cold."}
  else if(random==9){joke = "Why do oranges wear sunscreen? So they don't peel."}; reply.innerHTML=joke}

else if(chat.innerText=="wow" || chat.innerText=="uh"){reply.innerHTML="😊"}
else if(chat.innerText=="i never new that"){reply.innerHTML="😊"}
else if(chat.innerText=="can you give me a nickname" || chat.innerText=="give me a nickname" || chat.innerText=="i want a nickname"){reply.innerHTML="okay how about"+" "+username.slice(0,3)}
else if(chat.innerText=="are you a robot" || chat.innerText=="are you robot or human"){reply.innerHTML="no i am a chat bot designed to majorlly asist you"}
else if(chat.innerText=="you're boring" || chat.innerText=="you suck"){reply.innerHTML="i am sorry if you think so but i was not designed to have conversations i was designed to asist you"}
else if(chat.innerText=="how old are you" || chat.innerText=="what's your age"){reply.innerHTML="i am a 100 years just kidding i don't have an age"}

else if(chat.innerText=="tell me something" || chat.innerText=="tell me a fact" || chat.innerText=="can you tell me a fact" || chat.innerText=="i want to hear a fact"){
    let random = Math.floor(Math.random()*10)
  if(random==0){fact = " Sliced bread was first manufactured by machine and sold in the 1920s by the Chillicothe Baking Company in Missouri. It was the greatest thing since…unsliced bread? (chllicothenews.com)"}
  else if(random==1){fact = "The tallest man ever recorded was American giant Robert Wadlow (1918–1940), who stood 8 feet 11 inches. Wadlow's size was the result of an abnormally enlarged pituitary gland. (guinnessworldrecords.com)"}
  else if(random==2){fact = "The tallest living man is 39-year-old Sultan Kosen, from Turkey, who is 8 feet, 2.8 inches, who set the record in 2009. His growth is also due to a pituitary issue. (guinnessworldrecords.com)"}
  else if(random==3){fact = "The oldest person ever to have lived (whose age could be authenticated), a French woman named Jeanne Louise Calment, was 122 years old when she died in 1997. (guinnessworldrecord.com)"}
  else if(random==4){fact = "The original name for the search engine Google was Backrub. It was renamed Google after the googol, which is the number one followed by 100 zeros. (about.google)"}
  else if(random==5){fact = "The oldest-known living land animal is a tortoise named Jonathan, who is about to turn 190 years old. He was born in 1832 and has lived on the island of St. Helena in the Atlantic Ocean since 1882. (guinnessworldrecords.com)"}
  else if(random==6){fact = "Polar bears have black skin. And actually, their fur isn’t white—it’s see-through, so it appears white as it reflects light."}
  else if(random==7){fact = "Tigers’ skin is actually striped, just like their fur. Also, no two fur patterns are alike."}
  else if(random==8){fact = "There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms. (assh.org)"}
  else if(random==9){fact = "It’s impossible to hum while holding your nose (just try it!)."}; reply.innerHTML=fact}

else if(chat.innerText=="i am bored" || chat.innerText=="i'm bored"){reply.innerHTML="lets play a game"}
else if(chat.innerText=="it's been long" || chat.innerText=="its been long"){reply.innerHTML="yes it has"}
else if(chat.innerText=="do you have jokes" || chat.innerText=="do you have fact"){reply.innerHTML="yes"}
else if(chat.innerText=="the network is bad" || chat.innerText=="the network is slow"){reply.innerHTML="sorry to hear that"}
else if(chat.innerText=="what did you say" || chat.innerText=="what did you just say"){reply.innerHTML="am sorry did i say anything offensive"}
else if(chat.innerText=="why are you slow" || chat.innerText==""){reply.innerHTML="it must be network"}
else if(chat.innerText=="what's my name" || chat.innerText=="what is my name" || chat.innerText=="my name is"){reply.innerHTML="that's simple your name is"+" "+username.value}
else if(chat.innerText=="open youtube" || chat.innerText=="open YouTube"){reply.innerHTML="opening youtube"; utube.click()}
else if(chat.innerText=="open new tab" || chat.innerText=="open a new tab"){reply.innerHTML="opening a new tab"; tab.click()}
else if(chat.innerText=="how do i use you" || chat.innerText=="how do i talk to you"){reply.innerHTML="type command to see what i can assist you with"}
else if(chat.innerText=="how can you help me" || chat.innerText=="how can you asist me"){reply.innerHTML="by asisting you with functions like playing song or adding reminder"}
else if(chat.innerText=="what are your limitations" || chat.innerText=="what are your limits"){reply.innerHTML="i cant answer so basic questions"}
else if(chat.innerText=="how do i use you" || chat.innerText=="how do i talk to you"){reply.innerHTML="you could either type your command or press the voice button to talk. note when typing do not add expressions like question mark or eclamation mark."}
else if(chat.innerText=="what can you do" || chat.innerText=="what do you do" || chat.innerText=="what can you do for me"){reply.innerHTML="i am a virtual assistant that was made to assist you"}
else if(chat.innerText=="i need your help" || chat.innerText=="can you help me" || chat.innerText=="can you assist me"){reply.innerHTML="just type your command and i will see what i can do"}

else if(chat.innerText=="i hate you" || chat.innerText=="i hate your voice"){reply.innerHTML="i'm sorry to heard that"}
else if(chat.innerText=="you are stupid" || chat.innerText=="you are useless"){reply.innerHTML="i am sad you think so"}
else if(chat.innerText=="you are annoying" || chat.innerText=="you are bad"){reply.innerHTML="sorry to hear that 😥"}
else if(chat.innerText=="youre disgusting" || chat.innerText==""){reply.innerHTML="😥"}
else if(chat.innerText=="what are you" || chat.innerText==""){reply.innerHTML="i am a virtual assistant made for the purpose to assist you with some basic functions"}
else if(chat.innerText=="i love you" || chat.innerText=="you're so useful"){reply.innerHTML="thanks for the compliment"}
else if(chat.innerText=="youre a life saver" || chat.innerText=="you are good"){reply.innerHTML="thanks 😊"}
else if(chat.innerText=="you are wonderful" || chat.innerText=="you're good at your job"){reply.innerHTML="thanks"+" "+username.value}
else if(chat.innerText=="no problem" || chat.innerText=="no p"){reply.innerHTML="😊"}
else if(chat.innerText=="you're welcome" || chat.innerText=="you are welcome"){reply.innerHTML="😊"}
else if(chat2.includes("send a mail to") || chat2.includes("send an email to")){reply.innerHTML="okay mail sent"; acceptinput=true; mail()}
else if(chat2.includes("search for")){reply.innerHTML="okay"; acceptinput=true; search(); searchd.click()}
else if(chat2.includes("call")){  reply.innerHTML="okay calling "+callername; acceptinput=true; call();}
else if(chat.innerText=="flip a coin"){  let coinv = Math.floor(Math.random() *2);  if(coinv==1){ coin="head"} else{coin="tail"}; reply.innerText=coin}
else if(chat.innerText=="roll a dice"){  let dicev = Math.floor(Math.random() *7);  dice = dicev;  console.log(dicev); reply.innerText=dice}
else if(chat2.includes("set an alarm for")){reply.innerHTML="okay"; acceptinput=true; alarm(); }
else if(chat2.includes("remind me to")){reply.innerHTML="okay"; acceptinput=true; reminder()}
else if(chat.innerText=="add note" || chat.innerText=="add Note"){reply.innerHTML="okay"; show(); document.getElementById("notes").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="notes";}
else if(chat.innerText=="settings" || chat.innerText=="view settings" || chat.innerText=="show settings" || chat.innerText=="open settings"){reply.innerHTML="okay"; show(); document.getElementById("settings").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none"; title.innerHTML="setting";}
else if(chat.innerText=="calculator" || chat.innerText=="open calculator" || chat.innerText=="show calculator"){reply.innerHTML="okay"; show(); document.getElementById("calculators").style.display="block";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="Calculator";}
else if(chat.innerText=="edit my schedule" || chat.innerText=="edit schedule"){reply.innerHTML="okay"; show(); document.getElementById("scheduels").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="schedule";}
else if(chat.innerText=="read my schedule" || chat.innerText=="view my schedule"){scheduelread(); reply.innerHTML=scheduelsvalue.value; box2.appendChild(completed);box2.addEventListener("click", ()=>{shows()}) ;}
else if(chat.innerText=="clear my schedule" || chat.innerText=="delete my schedule"){reply.innerHTML="your schedule has been cleared"; scheduelsvalue.value="";}
else if(chat.innerText=="text to speech" || chat.innerText=="text-to-speech" || chat.innerText=="open text to speech" || chat.innerText=="open text-to-speech"){reply.innerHTML="okay lets begin"; acceptinput=true; show(); document.getElementById("texttospeech").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="text-to-speech";}
else if(chat.innerText=="show sidebar" || chat.innerText=="activate sidebar"){reply.innerHTML="side bar activated"; show()}
else if(chat.innerText=="hide sidebar" || chat.innerText=="deactivate sidebar"){reply.innerHTML="side bar deactivated"; hide()}
else if(chat.innerText=="show timer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="flex"}
else if(chat.innerText=="hide timer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="none"}
else if(chat2.includes("calculate")){acceptinput=true; calculator()}

//chat i.0 3
// greeting+value1+reference+feeling+verb+day+modes;

else if(statement=="explaintime"){reply.innerHTML=date.toLocaleTimeString()}
else if(statement=="explaindate"){reply.innerHTML=date.toLocaleDateString()}
else if(statement=="medatetoday"){reply.innerHTML=date.toLocaleDateString()}
else if(statement=="explaindatetoday"){reply.innerHTML=date.toLocaleDateString()}
else if(statement=="mejoke"){let random = Math.floor(Math.random() *10)
  if(random==0){joke = "What did the left eye say to the right eye? Between you and me, something smells."}
  else if(random==1){joke = "I was going to tell you a joke about boxing but I forgot the punch line."}
  else if(random==2){joke = "Why couldn't the sunflower ride its bike? It lost its pedals."}
  else if(random==3){joke = "I ate a sock yesterday. It was very time-consuming."}
  else if(random==4){joke = "What kind of candy do astronauts like? Mars bars."}
  else if(random==5){joke = "What does a pig put on dry skin? Oinkment."}
  else if(random==6){joke = "Why do we tell actors to 'break a leg?' Because every play has a cast."}
  else if(random==7){joke = "My uncle named his dogs Timex and Rolex. They're his watch dogs."}
  else if(random==8){joke = "Which is faster, hot or cold? Hot, because you can catch cold."}
  else if(random==9){joke = "Why do oranges wear sunscreen? So they don't peel."}; reply.innerHTML=joke}
else if(statement=="userjoke"){    let random = Math.floor(Math.random() *10)
  if(random==0){joke = "What did the left eye say to the right eye? Between you and me, something smells."}
  else if(random==1){joke = "I was going to tell you a joke about boxing but I forgot the punch line."}
  else if(random==2){joke = "Why couldn't the sunflower ride its bike? It lost its pedals."}
  else if(random==3){joke = "I ate a sock yesterday. It was very time-consuming."}
  else if(random==4){joke = "What kind of candy do astronauts like? Mars bars."}
  else if(random==5){joke = "What does a pig put on dry skin? Oinkment."}
  else if(random==6){joke = "Why do we tell actors to 'break a leg?' Because every play has a cast."}
  else if(random==7){joke = "My uncle named his dogs Timex and Rolex. They're his watch dogs."}
  else if(random==8){joke = "Which is faster, hot or cold? Hot, because you can catch cold."}
  else if(random==9){joke = "Why do oranges wear sunscreen? So they don't peel."}; reply.innerHTML=joke}

else if(statement=="mefact"){   let random = Math.floor(Math.random()*10)
  if(random==0){fact = " Sliced bread was first manufactured by machine and sold in the 1920s by the Chillicothe Baking Company in Missouri. It was the greatest thing since…unsliced bread? (chllicothenews.com)"}
  else if(random==1){fact = "The tallest man ever recorded was American giant Robert Wadlow (1918–1940), who stood 8 feet 11 inches. Wadlow's size was the result of an abnormally enlarged pituitary gland. (guinnessworldrecords.com)"}
  else if(random==2){fact = "The tallest living man is 39-year-old Sultan Kosen, from Turkey, who is 8 feet, 2.8 inches, who set the record in 2009. His growth is also due to a pituitary issue. (guinnessworldrecords.com)"}
  else if(random==3){fact = "The oldest person ever to have lived (whose age could be authenticated), a French woman named Jeanne Louise Calment, was 122 years old when she died in 1997. (guinnessworldrecord.com)"}
  else if(random==4){fact = "The original name for the search engine Google was Backrub. It was renamed Google after the googol, which is the number one followed by 100 zeros. (about.google)"}
  else if(random==5){fact = "The oldest-known living land animal is a tortoise named Jonathan, who is about to turn 190 years old. He was born in 1832 and has lived on the island of St. Helena in the Atlantic Ocean since 1882. (guinnessworldrecords.com)"}
  else if(random==6){fact = "Polar bears have black skin. And actually, their fur isn’t white—it’s see-through, so it appears white as it reflects light."}
  else if(random==7){fact = "Tigers’ skin is actually striped, just like their fur. Also, no two fur patterns are alike."}
  else if(random==8){fact = "There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms. (assh.org)"}
  else if(random==9){fact = "It’s impossible to hum while holding your nose (just try it!)."}; reply.innerHTML=fact}
else if(statement=="userfact"){   let random = Math.floor(Math.random()*10)
  if(random==0){fact = " Sliced bread was first manufactured by machine and sold in the 1920s by the Chillicothe Baking Company in Missouri. It was the greatest thing since…unsliced bread? (chllicothenews.com)"}
  else if(random==1){fact = "The tallest man ever recorded was American giant Robert Wadlow (1918–1940), who stood 8 feet 11 inches. Wadlow's size was the result of an abnormally enlarged pituitary gland. (guinnessworldrecords.com)"}
  else if(random==2){fact = "The tallest living man is 39-year-old Sultan Kosen, from Turkey, who is 8 feet, 2.8 inches, who set the record in 2009. His growth is also due to a pituitary issue. (guinnessworldrecords.com)"}
  else if(random==3){fact = "The oldest person ever to have lived (whose age could be authenticated), a French woman named Jeanne Louise Calment, was 122 years old when she died in 1997. (guinnessworldrecord.com)"}
  else if(random==4){fact = "The original name for the search engine Google was Backrub. It was renamed Google after the googol, which is the number one followed by 100 zeros. (about.google)"}
  else if(random==5){fact = "The oldest-known living land animal is a tortoise named Jonathan, who is about to turn 190 years old. He was born in 1832 and has lived on the island of St. Helena in the Atlantic Ocean since 1882. (guinnessworldrecords.com)"}
  else if(random==6){fact = "Polar bears have black skin. And actually, their fur isn’t white—it’s see-through, so it appears white as it reflects light."}
  else if(random==7){fact = "Tigers’ skin is actually striped, just like their fur. Also, no two fur patterns are alike."}
  else if(random==8){fact = "There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms. (assh.org)"}
  else if(random==9){fact = "It’s impossible to hum while holding your nose (just try it!)."}; reply.innerHTML=fact}

else if(statement=="explaindate"+day){reply.innerHTML="i am sorry but i can't tell you that"}
else if(statement=="describeme"){reply.innerHTML= "good, thanks for asking"}
else if(statement=="describeme"){reply.innerHTML= "good, thanks for asking"}
 else if(statement=="describeme"+day){reply.innerHTML= "good would you like to tell me about yours"}
 else if(statement=="describeme"+verb){reply.innerHTML= "good"}
 else if(statement=="yesornomegood"){reply.innerHTML= "yes"}
 else if(statement=="yesornomebad"){reply.innerHTML= "no"}
 else if(statement=="mestatementmebad"){reply.innerHTML= "i'm sad that you think so 😥"}
 else if(statement=="megoodmeet"){reply.innerHTML= "it's nice to meet you to"}
 else if(statement=="explainmename"){reply.innerHTML= "my name is astro"}
 else if(statement=="nameme"){reply.innerHTML= "i am a virtual assistant"}
 else if(statement=="username"){ let nameg = chat2.indexOf("is"); reply.innerHTML= "hi its nice to meet you"+chat2.slice(nameg+2, 20)}
 else if(statement=="mestatementmegood"){reply.innerHTML= "thanks 😊"}
 else if(statement=="mebad"){reply.innerHTML= "i am sorry that you think so 😥"}
 else if(statement=="megood"){reply.innerHTML= "thanks 😊"}
 else if(statement=="usersorry"){reply.innerHTML= "its okay"}
 else if(statement=="nightgood"){reply.innerHTML= "good night"+" "+username.value}
 else if(statement=="morninggood"){reply.innerHTML= "good morning"+" "+username.value}
 else if(statement=="eveninggood"){reply.innerHTML= "good evening"+" "+username.value}
 else if(statement=="afternoongood"){reply.innerHTML= "good afternoon"+" "+username.value}
 else if(statement=="userbadtoday"){reply.innerHTML= "i am sorry to hear that"+" "+username.value}
 else if(statement=="usergoodtoday"){reply.innerHTML= "that nice to hear"+" "+username.value}
 else if(statement=="userbad"){reply.innerHTML= "i am sorry to hear that"+" "+username.value}
 else if(statement=="undefinedgood"){reply.innerHTML= "that's nice to hear"+" "+username.value}
 else if(statement=="undefinedbad"){reply.innerHTML= "i am sorry to hear that"+" "+username.value}
 else if(statement=="bad"){reply.innerHTML= "😊"}
 else if(statement=="good"){reply.innerHTML= "😊"}
 else if(statement=="usergood"){reply.innerHTML= "that nice to hear"+" "+username.value}
 else if(statement=="bye"){reply.innerHTML= "bye"+username.value}
 else if(statement=="opentab"){reply.innerHTML="opening a new tab"; tab.click()}
 else if(statement=="meopentab"){reply.innerHTML="opening a new tab"; tab.click()}
 else if(statement=="useropentab"){reply.innerHTML="opening a new tab"; tab.click()}
 else if(statement=="utubeopen"){reply.innerHTML="opening youtube"; utube.click()}
 else if(statement=="sendmail"){reply.innerHTML= "to use my mail function type 'send a mail to' or 'send an email to' mail address 'subject' mail subject 'body' mail body"}
 else if(statement=="memail"){reply.innerHTML= "to use my mail function type 'send a mail to' or 'send an email to' mail address 'subject' mail subject 'body' mail body"}
 else if(statement=="usermail"){reply.innerHTML= "to use my mail function type 'send a mail to' or 'send an email to' mail address 'subject' mail subject 'body' mail body"}
 else if(statement=="mesendmail"){reply.innerHTML= "to use my mail function type 'send a mail to' or 'send an email to' mail address 'subject' mail subject 'body' mail body"}
 else if(statement=="usersendmail"){reply.innerHTML= "to use my mail function type 'send a mail to' or 'send an email to' mail address 'subject' mail subject 'body' mail body"}
 else if(statement=="mewelcome"){reply.innerHTML= "😊"}
 else if(statement=="userpleasure"){reply.innerHTML= "😊"}
 else if(statement=="userpleasure"){reply.innerHTML= "😊"}
 else if(statement=="methank"){reply.innerHTML= "my pleasure"}
 else if(statement=="explainuserdevicepercent"){reply.innerHTML= "your device is "+batterylvl}
 else if(statement=="explainuserdevicecharge"){reply.innerHTML= "your device is "+batterystate}
 else if(statement=="userdevicecharge"){reply.innerHTML= "your device is "+batterystate}
  else if(statement=="userbored"){reply.innerHTML= "try playing a game";}
   else if(statement=="mebored"){reply.innerHTML= "you could take a walk";}
 else if(statement=="thank"){reply.innerHTML= "😊"}
 else if(statement=="undefinedsince"){reply.innerHTML= "yes it has"}
 else if(statement=="explainmeassist"){reply.innerHTML= " ● alarm: set an alarm for 'time' title 'alarm title' (set alarm);          read my 'date' alarm (read alarm); delete my 'alarm name' alarm (delete alarm); snooze alarm for 'snooze time' min (snooze alarm); cancel active alarm (cancel alarm)-------------------- ● reminder: remind me to 'reminder' time 'reminder time' (set reminder); delete my 'reminder name' reminder (delete reminder); cancel active reminder (cancel reminder);-------------------------------------------- ● note: read my 'note name' note (read note); delete my 'note name note';---------- ● music: play 'music name'; pause song (pause); unpause(unpause song); play next track (next song); play previous track (prev song); play any music (play music)------------ ● others: send an email to 'email address or reciever name' subject 'mail subject' body 'mail body' (send email); call 'phone no or caller name' (make a call); open 'app name' (open app); search for 'search' (web search)------------------------------------------------ please note that this are not all of my functions."}
 else if(statement=="explainme" && chat.innerHTML.includes("do") && chat.innerHTML.includes("can")){reply.innerHTML= " ● alarm: set an alarm for 'time' title 'alarm title' (set alarm);          read my 'date' alarm (read alarm); delete my 'alarm name' alarm (delete alarm); snooze alarm for 'snooze time' min (snooze alarm); cancel active alarm (cancel alarm)-------------------- ● reminder: remind me to 'reminder' time 'reminder time' (set reminder); delete my 'reminder name' reminder (delete reminder); cancel active reminder (cancel reminder);-------------------------------------------- ● note: read my 'note name' note (read note); delete my 'note name note';---------- ● music: play 'music name'; pause song (pause); unpause(unpause song); play next track (next song); play previous track (prev song); play any music (play music)------------ ● others: send an email to 'email address or reciever name' subject 'mail subject' body 'mail body' (send email); call 'phone no or caller name' (make a call); open 'app name' (open app); search for 'search' (web search)------------------------------------------------ please note that this are not all of my functions."}
 else if(statement=="memissed"){reply.innerHTML= "me too"}
  else if(statement=="meokay"){ ; reply.innerHTML="okay"}
   else if(statement=="okayuser"){reply.innerHTML= "that's nice to hear"}
 else if(statement=="memiss"){reply.innerHTML= "me too"}
 else if(statement=="opencalculator"){reply.innerHTML="okay"; showc()}
 else if(statement=="meopencalculator"){reply.innerHTML="okay"; showc()}
 else if(statement=="useropencalculator"){reply.innerHTML="okay"; showc()}
 else if(statement=="closecalculator"){reply.innerHTML="okay"; hide()}
 else if(statement=="meclosecalculator"){reply.innerHTML="okay"; hide()}
 else if(statement=="userclosecalculator"){reply.innerHTML="okay"; hide()}
  else if(statement=="playrmusic"){reply.innerHTML= "okay";document.getElementById("songcreate").click(); songmode="random"; start=false}
 else if(statement=="userplayrmusic"){reply.innerHTML= "okay";document.getElementById("songcreate").click(); songmode="random"; start=false}
 else if(statement=="meplayrmusic"){reply.innerHTML= "okay";document.getElementById("songcreate").click(); songmode="random"; start=false}
 else if(statement=="playmusic"){reply.innerHTML= "okay"; document.getElementById("songcreate").click(); start=false}
 else if(statement=="userplaymusic"){reply.innerHTML= "okay";document.getElementById("songcreate").click(); start=false}
 else if(statement=="meplaymusic"){reply.innerHTML= "okay"; document.getElementById("songcreate").click(); start=false}
 else if(statement=="playmusicnext"){reply.innerHTML= "okay"; document.getElementById("mforward").click(); start=false}
 else if(statement=="userplaymusicnext"){reply.innerHTML= "okay"; document.getElementById("mforward").click(); start=false}
 else if(statement=="meplaymusicnext"){reply.innerHTML= "okay"; document.getElementById("mforward").click(); start=false}
 else if(statement=="playmusicprev"){reply.innerHTML= "okay"; document.getElementById("mback").click(); start=false}
 else if(statement=="userplaymusicprev"){reply.innerHTML= "okay"; document.getElementById("mback").click(); start=false}
 else if(statement=="meplaymusicprev"){reply.innerHTML= "okay"; document.getElementById("mback").click(); start=false}
 else if(statement=="mestartfc"){reply.innerHTML= "okay"; document.getElementById("focuscommand").click()}
 else if(statement=="startfc"){reply.innerHTML= "okay"; document.getElementById("focuscommand").click()}
 else if(statement=="userstartfc"){reply.innerHTML= "okay"; document.getElementById("focuscommand").click()}
 else if(statement=="userplay"){acceptinput=true; reply.innerHTML="okay"; musicp(); start=false}
 else if(statement=="play"){acceptinput=true; reply.innerHTML="okay"; musicp(); start=false}
 else if(statement=="meplay"){acceptinput=true; reply.innerHTML="okay"; musicp(); start=false}
 else if(statement=="pausemusic"){reply.innerHTML= "okay"; player.pause()}
 else if(statement=="unpausemusic"){reply.innerHTML= "okay"; player.play(); start=false}
 else if(statement=="mepausemusic"){reply.innerHTML= "okay"; player.pause()}
 else if(statement=="meunpausemusic"){reply.innerHTML= "okay"; player.play(); start=false}
 else if(statement=="userpausemusic"){reply.innerHTML= "okay"; player.pause()}
 else if(statement=="userunpausemusic"){reply.innerHTML= "okay"; player.play(); start=false}
 else if(statement=="pause"){reply.innerHTML= "okay"; player.pause()}
 else if(statement=="unpause"){reply.innerHTML= "okay"; player.play(); start=false}
 else if(statement=="ttt"){reply.innerHTML="okay lets begin"; showt()}
 else if(statement=="openttt"){reply.innerHTML="okay lets begin"; showt()}
 else if(statement=="meopenttt"){reply.innerHTML="okay lets begin"; showt()}
 else if(statement=="useropenttt"){reply.innerHTML="okay lets begin"; showt()}
 else if(statement=="closettt"){reply.innerHTML="okay"; hide()}
 else if(statement=="meclosettt"){reply.innerHTML="okay"; hide()}
 else if(statement=="userclosettt"){reply.innerHTML="okay"; hide()}
 else if(statement=="usergame"){reply.innerHTML= "i don't have any game we could play";}
 else if(statement=="megame"){reply.innerHTML= "i don't have any inbuilt game";}
 else if(statement=="viewscheduel"){scheduelread(); reply.innerHTML=scheduelsvalue.value; box2.appendChild(completed);box2.addEventListener("click", ()=>{shows()}) ;}
 else if(statement=="meviewscheduel"){scheduelread(); reply.innerHTML=scheduelsvalue.value; box2.appendChild(completed);box2.addEventListener("click", ()=>{shows()}) ;}
 else if(statement=="userviewscheduel"){scheduelread(); reply.innerHTML=scheduelsvalue.value; box2.appendChild(completed);box2.addEventListener("click", ()=>{shows()}) ;}
 else if(statement=="deletealarm"){reply.innerHTML="okay"; alarmdel()}
 else if(statement=="viewalarm"){ reply.innerHTML="okay you have an alarm for"+" "+alarmview; alarmloop();}
 else if(statement=="viewtodayalarm"){ reply.innerHTML="okay you have an alarm for"+" "+alarmview; alarmloop();}
 else if(statement=="medeletealarm"){reply.innerHTML="okay"; alarmdel()}
 else if(statement=="meviewalarm"){reply.innerHTML="okay you have an alarm for"+" "+alarmview; alarmloop(); }
 else if(statement=="meviewtodayalarm"){ reply.innerHTML="okay you have an alarm for"+" "+alarmview;alarmloop(); }
 else if(statement=="userdeletealarm"){reply.innerHTML="okay"; alarmdel()}
 else if(statement=="userviewalarm"){ reply.innerHTML="okay you have an alarm for"+" "+alarmview;alarmloop(); }
 else if(statement=="userviewtodayalarm"){ reply.innerHTML="okay you have an alarm for"+" "+alarmview;alarmloop(); }
 else if(statement=="cancelalarm"){reply.innerHTML="okay"; document.getElementById("snoozecnl").click()}
 else if(statement=="snoozealarm"){alarmsnooze(); reply.innerHTML="okay"  }
 else if(statement=="mecancelalarm"){reply.innerHTML="okay"; document.getElementById("snoozecnl").click()}
 else if(statement=="mesnoozealarm"){alarmsnooze(); reply.innerHTML="okay" }
 else if(statement=="usercancelalarm"){reply.innerHTML="okay"; document.getElementById("snoozecnl").click()}
 else if(statement=="usersnoozealarm"){alarmsnooze(); reply.innerHTML="okay" }
 else if(statement=="viewnote"){; reply.innerHTML=notevalue; note()}
 else if(statement=="meviewnote"){; reply.innerHTML=notevalue; note()}
 else if(statement=="userviewnote"){; reply.innerHTML=notevalue; note()}
 else if(statement=="deletenote"){; reply.innerHTML="okay"; notedel()}
 else if(statement=="medeletenote"){; reply.innerHTML="okay"; notedel()}
 else if(statement=="userdeletenote"){; reply.innerHTML="okay"; notedel()}
 else if(statement=="deletereminder"){ reply.innerHTML="okay"; reminderdel();}
 else if(statement=="medeletereminder"){ reply.innerHTML="okay"; reminderdel();}
 else if(statement=="userdeletereminder"){ reply.innerHTML="okay"; reminderdel();}
 else if(statement=="cancelreminder"){document.getElementById("ractivecnl").click(); reply.innerHTML="okay"; }
 else if(statement=="mecancelreminder"){document.getElementById("ractivecnl").click(); reply.innerHTML="okay"; }
 else if(statement=="usercancelreminder"){document.getElementById("ractivecnl").click(); reply.innerHTML="okay"; }
 else if(statement=="opensetting"){reply.innerHTML="okay"; showst()}
 else if(statement=="closesetting"){reply.innerHTML= "okay"; hide()}
 else if(statement=="meopensetting"){reply.innerHTML="okay"; showst()}
 else if(statement=="meclosesetting"){reply.innerHTML= "okay"; hide()}
 else if(statement=="useropensetting"){reply.innerHTML="okay"; showst()}
 else if(statement=="userclosesetting"){reply.innerHTML= "okay"; hide()}
 else if(statement=="opensidebar"){reply.innerHTML="okay"; show()}
 else if(statement=="meopensidebar"){reply.innerHTML="okay"; show()}
 else if(statement=="useropensidebar"){reply.innerHTML="okay"; show()}
 else if(statement=="closesidebar"){reply.innerHTML="okay"; hide()}
 else if(statement=="meclosesidebar"){reply.innerHTML="okay"; hide()}
 else if(statement=="userclosesidebar"){reply.innerHTML="okay"; hide()}
 else if(statement=="opentimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="flex"}
 else if(statement=="meopentimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="flex"}
 else if(statement=="useropentimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="flex"}
 else if(statement=="closetimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="none"}
 else if(statement=="meclosetimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="none"}
 else if(statement=="userclosetimer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="none"}
 else if(statement=="activatevoicemode"){reply.innerHTML="voice mode activated"; micon=true; document.getElementById("sleepscreen").style.display="block"; document.getElementById("sleepscreen").style.animationName="transistion3";
 speak2(); start=true; player.pause()}
 else if(statement=="meactivatevoicemode"){reply.innerHTML="voice mode activated"; micon=true; document.getElementById("sleepscreen").style.display="block"; document.getElementById("sleepscreen").style.animationName="transistion3";
 speak2(); start=true; player.pause()}
 else if(statement=="useractivatevoicemode"){reply.innerHTML="voice mode activated"; micon=true; document.getElementById("sleepscreen").style.display="block"; document.getElementById("sleepscreen").style.animationName="transistion3";
 speak2(); start=true; player.pause()}
 else if(statement=="deactivatevoicemode"){reply.innerHTML="voice mode deactivated"; micon=false; setTimeout(function sleeps (){document.getElementById("sleepscreen").style.display="none"}, 1000);
 document.getElementById("sleepscreen").style.animationName="transistion2";start=false;   circle.style.display="none"}
 else if(statement=="medeactivatevoicemode"){reply.innerHTML="voice mode deactivated"; micon=false; setTimeout(function sleeps (){document.getElementById("sleepscreen").style.display="none"}, 1000);
 document.getElementById("sleepscreen").style.animationName="transistion2";start=false;   circle.style.display="none"}
 else if(statement=="userdeactivatevoicemode"){reply.innerHTML="voice mode deactivated"; micon=false; setTimeout(function sleeps (){document.getElementById("sleepscreen").style.display="none"}, 1000);
 document.getElementById("sleepscreen").style.animationName="transistion2";start=false; circle.style.display="none"}
 else if(statement=="username"){reply.innerHTML= "it's nice to meet you"}
 else if(statement=="hiusername"){reply.innerHTML= "hi, it's nice to meet you"}
 else if(statement=="hi"+value1+reference+day){reply.innerHTML= "hi "+username.value; situ="hi";}
 else if(statement=="hi"){tag(); reply.innerHTML="hello"+" "+username.value+" "+question; conti=true; situ="hi"; formerreply=reply.innerHTML }
 
else if(chat.innerText=="activate voice mode" || chat.innerText=="voice mode on" || chat.innerText=="turn on voice mode"){reply.innerHTML="voice mode activated"; micon=true; document.getElementById("sleepscreen").style.display="block"; player.pause(); document.getElementById("sleepscreen").style.animationName="transistion3";
speak2(); start=true; player.pause()}
else if(chat.innerText=="voice mode off" || chat.innerText=="close" || chat.innerText=="turn off voice mode" || chat.innerText=="deactivate voice mode" ){reply.innerHTML="voice mode deactivated"; micon=false; setTimeout(function sleeps (){document.getElementById("sleepscreen").style.display="none"}, 1000);
document.getElementById("sleepscreen").style.animationName="transistion2";start=false; circle.style.display="none"}


else if(chat2.match(/\bgood\b/)){reply.innerHTML="that's nice to here"}
else if(chat2.match(/\btime\b/)){reply.innerHTML="okay"; timming()}
else if(chat2.match(/\bopen\b/)){reply.innerHTML="opening "+appname;openapp();}
else if(chat2.includes("hello")){reply.innerHTML="hi"}
else if(chat2.match(/\bhi\b/)){reply.innerHTML="hi"; situ="hi"}
else if(chat2.match(/\bokay\b/)){ reply.innerHTML="😊"}
else if(chat2.includes("command")){ reply.innerHTML=" ● alarm: set an alarm for 'time' title 'alarm title' (set alarm);          read my 'date' alarm (read alarm); delete my 'alarm name' alarm (delete alarm); snooze alarm for 'snooze time' min (snooze alarm); cancel active alarm (cancel alarm)-------------------- ● reminder: remind me to 'reminder' time 'reminder time' (set reminder); delete my 'reminder name' reminder (delete reminder); cancel active reminder (cancel reminder);-------------------------------------------- ● note: read my 'note name' note (read note); delete my 'note name note';---------- ● music: play 'music name'; pause song (pause); unpause(unpause song); play next track (next song); play previous track (prev song); play any music (play music)------------ ● others: send an email to 'email address or reciever name' subject 'mail subject' body 'mail body' (send email); call 'phone no or caller name' (make a call); open 'app name' (open app); search for 'search' (web search)------------------------------------------------ please note that this are not all of my functions."}
else if(chat2.match(/\bok\b/)){ reply.innerHTML="😊"}
else if(chat2.includes("great")){reply.innerHTML="hmm"}
else if(chat2.includes("bye")){reply.innerHTML="bye,it was nice talking to you"}
else if(chat2.includes("goodmorning")){reply.innerHTML="goodmorning"}
else if(chat2.includes("goodafternoon")){reply.innerHTML="goodafternoon"}
else if(chat2.includes("goodevening")){reply.innerHTML="goodevening"}
else if(chat2.includes("goodnight")){reply.innerHTML="goodnight"}
else if(chat2.includes("talking to you")){reply.innerHTML="okay"+" "+username.value}
else if(chat2.includes("the time")){reply.innerHTML=date}
else if(chat2.includes("thank")){reply.innerHTML="my pleasure"}
else if(chat2.includes("play a game")){reply.innerHTML="i'm sorry but i don't have any game we could play"}
else if(chat2.match(/yes\b/)){; reply.innerHTML="okay"}
else if(chat2.match(/\bno\b/)){reply.innerHTML="okay"}
else if(chat2.includes("boring")){reply.innerHTML="😥"}
else if(chat2.includes("missed you")){reply.innerHTML="same here"}
else if(chat2.includes("shutup") || chat.innerText=="keep quiet" || chat.innerText=="stop talking"){reply.innerHTML="sorry to here that am i annoying you"}
else if(chat2.includes("me too")){reply.innerHTML="😊"}
else if(chat2.includes("same here")){reply.innerHTML="😊"}
else if(chat2.includes("can i call you")){reply.innerHTML="i dont think my codes will allow that"}
//else if(chat2.includes("play")){acceptinput=true; reply.innerHTML="okay"; musicp()}

else{if(reference=="me"){reply.innerHTML="that's a hard question for me"} else if(statement.includes("describe") || statement.includes("place") || statement.includes("explain") || statement.includes("time") || statement.includes("question") || statement.includes("name")){reply.innerHTML= "i am not sure of "+chat2+" but i could help you research on that"; conti=true; situ="search";formerreply=reply.innerHTML; } else{let rand = Math.floor(Math.random() *2); if(rand==0){reply.innerHTML="am sorry i do not have a response for that"} else{reply.innerHTML="i am sorry but i don't understand"} if(add>3){reply.innerHTML="please remember "+username.value+" that i am not a chatbot and i can only  provide you assistance and help with web searches. for a list of things i could help with, type command"; add=0}else{add=add+1}}}

chattext.value="";
if(document.getElementById("voiceon").value=="1"){
window.speechSynthesis.cancel()
let msg = new SpeechSynthesisUtterance();
let voices = window.speechSynthesis.getVoices();
msg.voice = voices[6]; 
msg.text = reply.innerText;
window.speechSynthesis.speak(msg);} 
console.log(situ)

};


function f4 (){
  if((formertxt.includes("ok") || formertxt.includes("okay") || formertxt.includes("yes")) && conti==true && formerreply.includes("but i could help you research on that")){
    let place = formerreply.indexOf("but i could help you research on that")
  searchd.href="https://www.google.com/search?q="+formerreply.slice(17, place)
  searchd.click()
  console.log("worked")
  }
  else if((formertxt.includes("ok") || formertxt.includes("okay") || formertxt.includes("yes")) && conti==true && formerreply.includes("hello"+" "+username.value)){
    if(question=="would you like me to read your scheduel"){scheduelread(); reply.innerHTML=scheduelsvalue.value; box2.appendChild(completed); box2.addEventListener("click", ()=>{shows()}) ;}
    else if(question=="would you like me to play you a song"){reply.innerHTML= "okay "+username.value; document.getElementById("songcreate").click()}
    else if(question=="would you like me to tell you a joke"){reply.innerHTML=joke}
    else if(question=="how may i help you"){reply.innerHTML="😊"}
  }
  else{console.log("didnt work")}
  if(conti==true){if(creturn==1){conti=false; creturn=0}
else{creturn=1}}
console.log(conti)
}




document.getElementById("getstarted").addEventListener("click", ()=>{
  document.getElementById("getsbox").style.display="flex"
  Notification.requestPermission()
  })
let variable = 0
document.getElementById("gsnext").addEventListener("click", ()=>{
if(variable==0){
  document.getElementById("gstxt").innerHTML="use the chat input to send text to astro, tap on the mic icon to send voice commands. type show sidebar to display the sidebar which will allow you manipulate different features. type show timer to open the timer. type turn on voice mode or activate voice mode to turn on the advanced voice recognition feature which will allow you give hands free commands. lastly type open focus session or start focus session to start a new focus session."
  variable=variable+1
  document.getElementById("gspro").value=2
}
else if(variable==1){
  document.getElementById("gstxt").innerHTML="use the icons on the top left side of your device to switch between different modes in the sidebar. for smaller devices tap the three dot icon to expan the it"
  variable=variable+1
  document.getElementById("gspro").value=3
}
else if(variable==2){
  document.getElementById("gstxt").innerHTML="we're almost there. tapping next will open the settings panel. once your done with this guide you can move on to customizing your settings and preferences"
  variable=variable+1
  document.getElementById("gspro").value=4
  showst()
}
else if(variable==3){
  document.getElementById("gstxt").innerHTML="you have completed the five step guide clicking next will redirect you to two different pages. the first will allow you create your account and will provide you with more information. the second will give you a breakdown of my main features and cmmands. don't worry i will still be opened so you could come back here once your done. if you need some help just type 'command'. have fun exploring"
  variable=variable+1
  document.getElementById("gspro").value=5

 
} 
else if(variable==4){
newuser=1
  localStorage.setItem("newuser", newuser)
  searchd.href="http://web-devteam.github.io/getting-started"
  searchd.click()
  searchd.href="http://web-devteam.github.io/astro-build"
  searchd.click()
  searchd=""
 document.getElementById("getsbox").style.display="none"}
})

mic.addEventListener("click", speak)
document.getElementById("micbtn").addEventListener("click", ()=>{start=true; speak2(); player.pause()})

function speak2 (){
  if(tipsarray[7]==0){document.getElementById("tip").style.display="flex"; document.getElementById("tiptxt").innerHTML="tap the mic icon to reconnect if the voice recognition stops listening, tap the clock icon to switch between the focus session and voice mode"; document.getElementById("tip").style.right="50px"; document.getElementById("tip").style.top="100px"
  setTimeout(() => {
    document.getElementById("tip").style.display="none"
  }, 10000);
    tipsarray[7]=1; localStorage.setItem("tips", tipsarray)}


  let voice = new window.webkitSpeechRecognition;
voice.onstart = function f3(){console.log("speak"); on=true; document.getElementById("listening").style.backgroundColor="rgb(81, 255, 0)"};
voice.onend = function f4(){console.log("stop"); on=false; document.getElementById("listening").style.backgroundColor="orange";
setTimeout(()=>{if(start==true){window.speechSynthesis.cancel();voice.start(); voice.continuous=true}
else{voice.end()}}, 3500)};
voice.continuous=true
let index = -1
    voice.onresult = function(event) {
      index=index+1
      var transcript = event.results[0][0].transcript;
      console.log(transcript);
      text = transcript;
      voice.stop()
      f2()
        };
    
        voice.addEventListener("result", ()=>{
          
        })

voice.start()
  }
function speak (){

    let voice = new window.webkitSpeechRecognition;
voice.start()
voice.onstart = function f3(){console.log("speak"); on=true;};
voice.onend = function f4(){console.log("stop"); on=false;};

     voice.onresult = function(event) {
       var transcript = event.results[0][0].transcript;
      console.log(transcript);
        text = transcript;
        console.log("text")
      };
      voice.addEventListener("result", ()=>{f2()})
};

let scheduelsvalue = document.getElementById("scheduelsvalue");
let avalue = document.getElementById("alarmvalue");
let add2 = document.getElementById("add2");

let dvalue1 = document.getElementById("d1");
let dvalue2 = document.getElementById("d2");
let dvalue3 = document.getElementById("d3");
let dvalue4 = document.getElementById("d4");
let dvalue5 = document.getElementById("d5");
let dvalue6 = document.getElementById("d6");
let dtime = document.getElementById("dtime");
let dtime2 = document.getElementById("dtime2");
let dtime3 = document.getElementById("dtime3");
let dtime4 = document.getElementById("dtime4");
let dtime5 = document.getElementById("dtime5");
let dtime6 = document.getElementById("dtime6");
let note1 = document.getElementById("note1");
let note2 = document.getElementById("note2");
let note3 = document.getElementById("note3");
let note4 = document.getElementById("note4");
let note5 = document.getElementById("note5");
let note6 = document.getElementById("note6");

let rvalue = "";
let alarmvalue = 0;
let command = 0;
let alarmtime = 0;
let generaldate = new Date
generaldate=generaldate.toString()
generaldate=generaldate.slice(0, 3)
generaldate=generaldate.toLowerCase()
console.log(generaldate)
let generaldate2 = new Date
let gdate = generaldate2.getDate()
generaldate2=generaldate2.toString()
let gmon = generaldate2.slice(4, 7).toLowerCase()
generaldate2=generaldate2.slice(4, 11)
generaldate2=generaldate2.toLowerCase()
console.log(gdate)
setInterval((function datelog (){
  let time = date.toString();
alarmtime = time.slice(16, 21);
console.log(alarmtime)}), 1000)










function alarm (){
  if(on==true){chattext.value=text}
let place = chattext.value.indexOf("for")
  let place2 = place+7
  let place3 = chattext.value.indexOf("title")
   let alarmvalue1=chattext.value.slice(place+4, place+6)
   let alarmvalue2=chattext.value.slice(place2, place2+2)
   let alarmdetail=chattext.value.slice(place3+6, )
   if(place3==-1){alarmdetail="alarm "+alarmcontent.length}
  document.getElementById("alarmdetail").value=alarmdetail
  document.getElementById("alarmtime1").value=alarmvalue1
  document.getElementById("alarmtime2").value=alarmvalue2
  document.getElementById("add2").click()
  document.getElementById("add2").click()
console.log(alarmvalue);

}
function alarmdel (){
  if(on==true){chattext.value=text}
let done = ""
  let place = chattext.value.lastIndexOf("my")
  let place2 = chattext.value.lastIndexOf("alarm")
  let value = chattext.value.slice(place+3, place2)
  for (let index = 0; index < alarmcontent.length; index++) {
    let array=alarmcontent[index].split("|")
  if(value.includes(array[1])){done="yes"
    document.getElementById("alarmsdiv"+index).style.display="none"
alarmcontent[index]="null"
alarmlogic[index]="null"
    localStorage.setItem("alarmcontent", alarmcontent)
localStorage.setItem("alarmlogic", alarmlogic)
  }}
  if(done==""){reply.innerHTML="no alarms where found or deleted"}

  
}
function alarmloop (){
  if(on==true){chattext.value=text}
  let place = chattext.value.lastIndexOf("my")
  let place2 = chattext.value.lastIndexOf("alarm")
  let value = chattext.value.slice(place+3, place2)
  console.log(value)
for (let index = 0; index < alarmcontent.length; index++) {
 if(alarmcontent[index]!=""){ let array=alarmcontent[index].split("|")
if(value.includes("mon")){console.log(array);if(array[2].includes("mon")){alarmview=alarmview+", "+array[0]}}
else if(value.includes("tue")){if(array[2].includes("tue")){alarmview=alarmview+", "+array[0]}}
else if(value.includes("wed")){if(array[2].includes("wed")){alarmview=alarmview+", "+array[0]}}
else if(value.includes("thu")){if(array[2].includes("thu")){alarmview=alarmview+", "+array[0]}}
else if(value.includes("fri")){if(array[2].includes("fri")){alarmview=alarmview+", "+array[0]}}
else if(value.includes("sat")){if(array[2].includes("sat")){alarmview=alarmview+", "+array[0]}}
else if(value.includes("sun")){if(array[2].includes("sun")){alarmview=alarmview+", "+array[0]}}
else if(value.includes("today")){if(array[2].includes(generaldate2)){alarmview=alarmview+", "+array[0]}}}
}

reply.innerHTML="okay you have an alarm for"+" "+alarmview; 
if(alarmview==""){reply.innerHTML="no alarms where found"}
alarmview=""
}
function alarmsnooze (){
  if(on==true){chattext.value=text}
  let place = chattext.value.lastIndexOf("for")
  let value = chattext.value.slice(place+4, )
  value=parseInt(value)
  document.getElementById("snoozetimein").value=value
  document.getElementById("snoozebtn").click()
}
document.getElementById("keye").addEventListener("click", calc2)
let value1 = ""
let value2 = ""
let sign = ""
let answer = ""
let partvalue = ""
let topvalue = document.getElementById("topvalue")
let bottomvalue = document.getElementById("bottomvalue")
document.getElementById("key1").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"1"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"1"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key2").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"2"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"2"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key3").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"3"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"3"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key4").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"4"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"4"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key5").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"5"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"5"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key6").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"6"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"6"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key7").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"7"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"7"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key8").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"8"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"8"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key9").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"9"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"9"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key10").addEventListener("click", ()=>{
if(sign==" "){value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"};
if(sign==""){value1 = value1+"0"
console.log(value1); bottomvalue.innerHTML=value1}
else{value2 = value2+"0"
console.log(value2); bottomvalue.innerHTML=value2}
})
document.getElementById("key%").addEventListener("click", ()=>{
  if(sign==""){value1 = Number(value1)/100;
  console.log(value1); bottomvalue.innerHTML=value1}
  else{value2 = Number(value2)/100;
  console.log(value2); bottomvalue.innerHTML=value2}
  })
document.getElementById("key.").addEventListener("click", ()=>{
  if(sign==""){value1 = value1+"."
  console.log(value1); bottomvalue.innerHTML=value1}
  else{value2 = value2+"."
  console.log(value2); bottomvalue.innerHTML=value2}
  })
document.getElementById("key+").addEventListener("click", ()=>{
if(sign=="" || sign==" "){sign = "+"; partvalue=value1+sign
topvalue.innerHTML=partvalue
    console.log(sign)}
  else{calc(); sign="+"}
})
document.getElementById("key-").addEventListener("click", ()=>{
if(sign=="" || sign==" "){sign = "-"; partvalue=value1+sign
topvalue.innerHTML=partvalue
    console.log(sign)}
  else{calc(); sign="-"}
})
document.getElementById("key*").addEventListener("click", ()=>{
if(sign=="" || sign==" "){sign = "*"; partvalue=value1+sign
topvalue.innerHTML=partvalue
    console.log(sign)}
  else{calc(); sign="*"}
})
document.getElementById("key/").addEventListener("click", ()=>{
if(sign=="" || sign==" "){sign = "/"; partvalue=value1+sign
topvalue.innerHTML=partvalue;
    console.log(sign)}
  else{calc(); sign="/"}
})
document.getElementById("keyclr").addEventListener("click", ()=>{
value1=""
value2=""
sign=""
 answer = ""
 partvalue = ""
topvalue.innerHTML=""
bottomvalue.innerHTML="0"
})
document.getElementById("keydel").addEventListener("click", ()=>{
if(bottomvalue.innerHTML==value1){let slice = value1.length
  value1=value1.slice(0, slice-1)
console.log(slice); bottomvalue.innerHTML=value1}
else{let slice = value2.length
  value2=value2.slice(0, slice-1)
console.log(slice); bottomvalue.innerHTML=value2}
})
function calc(){
if(sign=="+"){answer=Number(value1)+Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
  partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""}
else if(sign=="-"){answer=Number(value1)-Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
  partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""}
else if(sign=="*"){answer=Number(value1)*Number(value2); bottomvalue.innerHTML=answer; value1=answer;
   partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""}
else if(sign=="/"){answer=Number(value1)/Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""};
if(answer==Infinity){bottomvalue.innerHTML="syntax error"; topvalue.innerHTML=""}
else if(answer==NaN){bottomvalue.innerHTML="syntax error"; topvalue.innerHTML=""}
console.log(answer)
}
function calc2(){
  if(sign=="+"){answer=Number(value1)+Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
    partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""; sign=" "}
  else if(sign=="-"){answer=Number(value1)-Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
    partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""; sign=" "}
  else if(sign=="*"){answer=Number(value1)*Number(value2); bottomvalue.innerHTML=answer; value1=answer;
     partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""; sign=" "}
  else if(sign=="/"){answer=Number(value1)/Number(value2); bottomvalue.innerHTML=answer; value1=answer; 
  partvalue=answer+sign; topvalue.innerHTML=partvalue; value2=""; sign=" "};
  if(answer==Infinity){bottomvalue.innerHTML="syntax error"; topvalue.innerHTML=""}
else if(answer==NaN){bottomvalue.innerHTML="syntax error"; topvalue.innerHTML=""}
  console.log(answer)
  }

function calculator (){
  let startf = 0
  let pluses = 0
  let num1p = chattext.value.indexOf("calculate")
  let numbers = []
  let anum = 1;

let ans = ""

if(chattext.value.includes("+")==true){ 
   numbers[0]=Number(chattext.value.slice(num1p+9, chattext.value.indexOf("+")))
for (let index = 0; index < 1; index) {
  if(chattext.value.includes("+", startf)==true){startf=chattext.value.indexOf("+", startf)+1; console.log(startf); pluses++; console.log(pluses); numbers[anum]=Number(chattext.value.slice(startf, chattext.value.indexOf("+", startf))); anum++}
  else{index++; console.log(pluses+"pluses")
 numbers[anum-1]=Number(chattext.value.slice(startf, )); console.log(numbers);}
}
ans=numbers.reduce(  (total, currentValue) => total + currentValue)
 numbers=[]; anum=1; startf=0; pluses=0
 reply.innerHTML="the answer is "+ans
}

else if(chattext.value.includes("-")==true ){
  numbers[0]=Number(chattext.value.slice(num1p+9, chattext.value.indexOf("-")))
for (let index = 0; index < 1; index) {
  if(chattext.value.includes("-", startf)==true){startf=chattext.value.indexOf("-", startf)+1; console.log(startf); pluses++; console.log(pluses); numbers[anum]=Number(chattext.value.slice(startf, chattext.value.indexOf("-", startf))); anum++}
  else{index++; console.log(pluses+"pluses")
 numbers[anum-1]=Number(chattext.value.slice(startf, )); console.log(numbers);}
}
ans=numbers.reduce(  (total, currentValue) => total - currentValue)
 numbers=[]; anum=1; startf=0; pluses=0
 reply.innerHTML="the answer is "+ans
}

else if(chattext.value.includes("/")==true){
  numbers[0]=Number(chattext.value.slice(num1p+9, chattext.value.indexOf("/")))
for (let index = 0; index < 1; index) {
  if(chattext.value.includes("/", startf)==true){startf=chattext.value.indexOf("/", startf)+1; console.log(startf); pluses++; console.log(pluses); numbers[anum]=Number(chattext.value.slice(startf, chattext.value.indexOf("/", startf))); anum++}
  else{index++; console.log(pluses+"pluses")
 numbers[anum-1]=Number(chattext.value.slice(startf, )); console.log(numbers);}
}
ans=numbers.reduce(  (total, currentValue) => total / currentValue)
 numbers=[]; anum=1; startf=0; pluses=0
 reply.innerHTML="the answer is "+ans
}

else if( chattext.value.includes("*")==true){
  numbers[0]=Number(chattext.value.slice(num1p+9, chattext.value.indexOf("*")))
for (let index = 0; index < 1; index) {
  if(chattext.value.includes("*", startf)==true){startf=chattext.value.indexOf("*", startf)+1; console.log(startf); pluses++; console.log(pluses); numbers[anum]=Number(chattext.value.slice(startf, chattext.value.indexOf("*", startf))); anum++}
  else{index++; console.log(pluses+"pluses")
 numbers[anum-1]=Number(chattext.value.slice(startf, )); console.log(numbers);}
}
ans=numbers.reduce(  (total, currentValue) => total * currentValue)
 numbers=[]; anum=1; startf=0; pluses=0
 reply.innerHTML="the answer is "+ans
}
else{reply.innerHTML="please make use of the calculator for your calculation"}
if(reply.innerHTML=="the answer is NaN" || ans==null || ans==undefined){reply.innerHTML="please make use of the calculator for your calculation"}



console.log(ans)
}



function reminder (){
  if(on==true){chattext.value=text}
  else{};
 let place = chattext.value.indexOf("to")
   let locate = chattext.value.indexOf("by");
    let value1 = chattext.value.slice(place+3, locate)
    if(value1.includes("my")){console.log("yes"); value1.replace(/\bmy\b/, "your")}
    let value2 = chattext.value.slice(locate+3, locate+5)
    let value3 = chattext.value.slice(locate+6, locate+8)

document.getElementById("remindercontent").value=value1
document.getElementById("remindertime1").value=value2
document.getElementById("remindertime2").value=value3
document.getElementById("add3").click()
//if(chattext.value.includes("on") && chattext.value.match(/[a-zA-Z. ]+\bto\b[a-zA-Z.]+\bby\b[0-9:0-9]+\bon\b[a-zA-Z0-9.]/)){
  //let locate2=chattext.value.lastIndexOf("on");
//let value4 = chattext.value.slice(locate2+3, )
//document.getElementById("reminderdate").value=value4}
document.getElementById("add3").click()
}
function reminderdel (){
  remindervalue=""
  let place = ""
   if(chattext.value.includes("my")){ place = chattext.value.lastIndexOf("my")}
else if(chattext.value.includes("delete")){ place = chattext.value.indexOf("delete")}
console.log(place)
let end = chattext.value.lastIndexOf("reminder")
let value = ""
if(chattext.value.includes("my")){ value = chattext.value.slice(place+3, end-1)}
else{ value = chattext.value.slice(place+7, end-1)}
console.log(value)
for (let index = 0; index < remindercontent.length; index++) {
 if(remindercontent[index]!=""){ let array = remindercontent[index].split("|")
if(array[2].includes(value)){remindercontent[index]="null";remindervalue="found"
document.getElementById("remindervalue"+index).style.display="none"; localStorage.setItem("remindercontent", remindercontent)}}
}
if(remindervalue==""){reply.innerHTML="no reminder was found or deleted"}
}

function note (){
  if(acceptinput==true){notevalue = chattext.value}
  notevalue=""
  let ping = false
  let place = ""
   if(chattext.value.includes("my")){ place = chattext.value.lastIndexOf("my")}
else if(chattext.value.includes("view")){ place = chattext.value.indexOf("view")}
else{ place = chattext.value.indexOf("read")}
let end = chattext.value.lastIndexOf("note")
let value = ""
if(chattext.value.includes("my")){ value = chattext.value.slice(place+3, end-1)}
else{ value = chattext.value.slice(place+5, end-1)}
console.log(value)
for (let index = 0; index < notecontent.length; index++) {
 if(notecontent[index]!=""){ let array = notecontent[index].split("|")
if(array[0].includes(value)){notevalue=array[1]; ping=true}
}}
if(notevalue==""){reply.innerHTML="no note was found"}
else{reply.innerHTML=notevalue}
console.log(notevalue)
}
function notedel (){
  if(acceptinput==true){notevalue = chattext.value}
  notevalue=""
  let place = ""
   if(chattext.value.includes("my")){ place = chattext.value.lastIndexOf("my")}
else if(chattext.value.includes("delete")){ place = chattext.value.indexOf("delete")}
console.log(place)
let end = chattext.value.lastIndexOf("note")
let value = ""
if(chattext.value.includes("my")){ value = chattext.value.slice(place+3, end-1)}
else{ value = chattext.value.slice(place+7, end-1)}
console.log(value)
for (let index = 0; index < notecontent.length; index++) {
 if(notecontent[index]!=""){ let array = notecontent[index].split("|")
if(value.includes(array[0])){notecontent[index]="null"; notevalue="found";
document.getElementById("notediv"+index).style.display="none"; localStorage.setItem("notecontent", notecontent)}

}

}
if(notevalue==""){reply.innerHTML="no note was found or deleted"}
notevalue=""
}

function scheduelread (){
if(document.getElementById("scheduelopt1").checked==true){completed.style.display="block"; completed.removeEventListener("click", f3) ; 
completed.innerHTML=document.getElementById("add6").innerHTML; scheduelsvalue.value=sp; reply.style.width="150px"; completed.style.width="120px"; completed.style.borderRadius="10px"; completed.style.backgroundColor="rgb(250, 31, 53)"}
else{ completed.style.display="block";  if(date2==value3){completed.style.backgroundColor="green"}}
}

function clear (){
  if(acceptinput==true){notevalue = chattext.value}
  else{};
  window.localStorage.setItem("note", notevalue)

console.log(notevalue);
}

function texttospeech (){
  if(acceptinput==true){reply.innerHTML=text}
  else{};
console.log();
}


document.getElementById("closesb").addEventListener("click", hide)

function show(){

  document.getElementById("sidepanel").style.display="flex";
  document.getElementById("chat").style.width="calc(60vw - 250px)";}

function hide(){
  document.getElementById("sidepanel").style.display="none";
  document.getElementById("chat").style.width="calc(90vw - 150px)"
}

  let title = document.getElementById("tile");
let calculatork = document.getElementById("calculator");
let alarmk = document.getElementById("alarm");
let reminderk = document.getElementById("games");
let notek = document.getElementById("note");
let scheduelk = document.getElementById("clean");
let musick = document.getElementById("song");
let ttt = document.getElementById("textto");
let read = document.getElementById("read");
let ttttext = document.getElementById("texttospeechvalue");
let settingk = document.getElementById("setting");
let equal = document.getElementById("keye");
let calcvalue = document.getElementById("calcscreen");


calculatork.addEventListener("click", function2)
function function2(){
document.getElementById("calculators").style.display="block";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none";
title.innerHTML="Calculator";

}


alarmk.addEventListener("click", function3)
function function3(){
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="flex";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
title.innerHTML="Alarm";


}
let add2value = 0
let alarmdates = ""
add2.addEventListener("click", stop)
function stop (){
if(add2value==0){document.getElementById("alarms").style.display="none"
document.getElementById("editb1").style.display="flex";
document.getElementById("cancel0").style.display="block"; add2value=1}
else{
  if(document.getElementById("alarmdetail").value==""){window.alert("please fill in the alarm detail");}
  else if(document.getElementById("alarmtime1").value=="" || parseInt(document.getElementById("alarmtime1").value)>23 || document.getElementById("alarmtime2").value=="" || parseInt(document.getElementById("alarmtime2").value)>60){window.alert("please fill in correct time format");}
  else if(document.getElementById("alarmdetail").value.includes("|")){window.alert("please remove all '|' case in your text")}
else{document.getElementById("alarms").style.display="flex"
document.getElementById("editb1").style.display="none";
document.getElementById("emptytxt").style.display="none";
document.getElementById("cancel0").style.display="none";
for (let index = 0; index <= document.getElementById("alarmdetail").value.length; index++) {
  document.getElementById("alarmdetail").value=document.getElementById("alarmdetail").value.replace(",", "^")
}

if(alarmdates==""){alarmdates=generaldate2}
if(document.getElementById("alarmtime1").value.length==1){document.getElementById("alarmtime1").value="0"+document.getElementById("alarmtime1").value}
if(document.getElementById("alarmtime2").value.length==1){document.getElementById("alarmtime2").value="0"+document.getElementById("alarmtime2").value}
let time = document.getElementById("alarmtime1").value+":"+document.getElementById("alarmtime2").value
let save = time+"|"+document.getElementById("alarmdetail").value+"|"+alarmdates
let on = "true"
console.log(save)
alarmcontent[alarmcontent.length]=save
alarmlogic[alarmlogic.length]=on
console.log(alarmcontent)
console.log(alarmlogic)
localStorage.setItem("alarmcontent", alarmcontent)
localStorage.setItem("alarmlogic", alarmlogic)
add2value=0
alarmdates=""
//
let index = alarmcontent.length-1
arang[arang.length]="false"
console.log(arang)
console.log(index)
let array = alarmcontent[index].split("|")
  let create = document.createElement("div")
  let create1 = document.createElement("div")
  let create2 = document.createElement("p")
  let create3 = document.createElement("p")
  let create4 = document.createElement("input")
  let create5 = document.createElement("p")
  create.className="alarmsdiv"
  create1.id="alarmsd"
  create2.id="alarmstime"
  create3.id="alarmsdays"
  create4.className="toggleon"
  create5.className="alarmcancel"
  create5.innerHTML="+"
  create5.id="alarmcancel"+index
  create.id="alarmsdiv"+index
  create4.id="toggleon"+index
   create.append(create1) 
   create.append(create4) 
   create.append(create5)
   create1.append(create2) 
   create1.append(create3) 
   for (let index = 0; index <= array[1].length; index++) {
   array[1]=array[1].replace("^", ",")
  }
   create2.innerHTML=array[1]+" "+array[0]
   create3.innerHTML=array[2]
   create4.type="checkbox"
   if(alarmlogic[index]=="true"){create4.checked=true}
   else{create4.checked=false}
  document.getElementById("alarms").append(create)
  document.getElementById("toggleon"+index).addEventListener("click", ()=>{
   if(document.getElementById("toggleon"+index).checked==true){ 
    let id =   document.getElementById("toggleon"+index).id
    let start = parseInt(id.slice(8, ))
    console.log(start)
    alarmlogic[start]="true"
    console.log(alarmlogic)
    localStorage.setItem("alarmlogic", alarmlogic)}
  else{let id =   document.getElementById("toggleon"+index).id
      let start = parseInt(id.slice(8, ))
      console.log(start)
      alarmlogic[start]="false"
      console.log(alarmlogic)
      localStorage.setItem("alarmlogic", alarmlogic)}
  })
  document.getElementById("alarmcancel"+index).addEventListener("click", ()=>{
    document.getElementById("alarmsdiv"+index).style.display="none"
    if(alarmcontent.length==0){document.getElementById("emptytxt").style.display="block"}
    let id2 =   document.getElementById("alarmsdiv"+index).id
    let start = parseInt(id2.slice(9, ))
  console.log(start)
  alarmcontent[start]="null"
  alarmlogic[start]="null"
  console.log(alarmcontent)
  console.log(alarmlogic)
  localStorage.setItem("alarmcontent", alarmcontent)
  localStorage.setItem("alarmlogic", alarmlogic)
  })
  
  let array2 = alarmcontent[index].split("|")
  setInterval(()=>{
  let array1 = array2[2].split(".")
  console.log(array1)
  console.log(array2)
  let search = false
  
  for (let index = 0; index < array1.length; index++) {
  if(array1[index]==generaldate || array2[2]==generaldate2){//console.log(true);
     search=true}
  }

  if((array2[0]==alarmtime && search==true && alarmlogic[index]=="true") || timing==true){console.log(array2[1])
  timing=true;  
  document.getElementById("snoozebox").style.display="flex";
  document.getElementById("timesup").play()}
  if((array2[0]==alarmtime && search==true && alarmlogic[index]=="true") || timing2==true ){
    timing2=false
    arang[index]="true"
    localStorage.setItem("arang", arang)
    array2[0]="null"
    let box2 = document.createElement("article");
    reply = document.createElement("h6");
  let chatarea = document.getElementById("chatarea");
  box2.appendChild(reply)
  chatarea.appendChild(box2);
  reply.innerHTML="your "+array[0]+" alarm is active";
    let notify = new Notification("alarm", {body: array2[1], icon:"computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-44413c43e2dd5f4f467181772ee8a7d5.png"})
    setTimeout(()=>{notify.close()}, 4000)
  }

  let value1 = alarmtime.split(":")
value1=value1[0]+value1[1]
let value2 =array[0].split(":")
value2=value2[0]+value2[1]
console.log(value1); console.log(value2)
if(arang[index]=="false" && search==true && alarmlogic[index]=="true" && parseInt(value1)>parseInt(value2)){
  let box2 = document.createElement("article");
  reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
reply.innerHTML="you missed your "+array[0]+" alarm";
  console.log(array[1])
  timing=true; search=false; 
  arang[index]="true"
localStorage.setItem("arang", arang)
let notify = new Notification("alarm", {body: "missed alarm : "+array[1], icon:"computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-44413c43e2dd5f4f467181772ee8a7d5.png"})
  document.getElementById("snoozebox").style.display="flex";
  
  document.getElementById("timesup").play()
}
  }, 1000)
document.getElementById("alarmdetail").value=""
document.getElementById("alarmdays").innerHTML="today"
alarmdates=""
document.getElementById("check1").style.color="black"
  document.getElementById("check1").style.borderBottom="0"
document.getElementById("check2").style.color="black"
  document.getElementById("check2").style.borderBottom="0"
document.getElementById("check3").style.color="black"
  document.getElementById("check3").style.borderBottom="0"
document.getElementById("check4").style.color="black"
  document.getElementById("check4").style.borderBottom="0"
document.getElementById("check5").style.color="black"
  document.getElementById("check5").style.borderBottom="0"
document.getElementById("check6").style.color="black"
  document.getElementById("check6").style.borderBottom="0"
document.getElementById("check7").style.color="black"
  document.getElementById("check7").style.borderBottom="0"
}
}
}
document.getElementById("snoozebtn").addEventListener("click", ()=>{
  let time = parseInt(document.getElementById("snoozetimein").value)*60000
  timing = false
  document.getElementById("snoozebox").style.display="none";
setTimeout(()=>{timing=true;timing2=true; document.getElementById("snoozebox").style.display="flex";}, time)
})
document.getElementById("snoozecnl").addEventListener("click", ()=>{  timing = false;
  document.getElementById("snoozebox").style.display="none";})
document.getElementById("cancel0").addEventListener("click", ()=>{
  document.getElementById("alarms").style.display="flex"
  document.getElementById("editb1").style.display="none";
  document.getElementById("cancel0").style.display="none"; add2value=0
})
//mon
document.getElementById("check1").addEventListener("click", ()=>{
if(document.getElementById("check1").style.color=="black"){document.getElementById("check1").style.color="white"
  document.getElementById("check1").style.borderBottom="1px solid white"
  if(alarmdates==""){alarmdates = alarmdates+"mon"}
  else{alarmdates = alarmdates+".mon"}
  document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(alarmdates)}
else{document.getElementById("check1").style.color="black"
  document.getElementById("check1").style.borderBottom="0"
let days = alarmdates.split(".")
console.log(days)
let point = days.indexOf("mon")
let v1 = ""
for (let index = 0; index < days.length; index++) {
if(index!=point){if(v1==""){v1 = v1+days[index]} 
else{v1 = v1+"."+days[index]}}
console.log(v1)
}
alarmdates = v1
document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(v1);console.log(alarmdates)}
})
//tue
document.getElementById("check2").addEventListener("click", ()=>{
  if(document.getElementById("check2").style.color=="black"){document.getElementById("check2").style.color="white"
    document.getElementById("check2").style.borderBottom="1px solid white"
    if(alarmdates==""){alarmdates = alarmdates+"tue"}
    else{alarmdates = alarmdates+".tue"}
    document.getElementById("alarmdays").innerHTML=alarmdates
    console.log(alarmdates)}
  else{document.getElementById("check2").style.color="black"
    document.getElementById("check2").style.borderBottom="0"
  let days = alarmdates.split(".")
  console.log(days)
  let point = days.indexOf("tue")
  let v1 = ""
  for (let index = 0; index < days.length; index++) {
  if(index!=point){if(v1==""){v1 = v1+days[index]} 
  else{v1 = v1+"."+days[index]}}
  console.log(v1)
  }
  alarmdates = v1
  document.getElementById("alarmdays").innerHTML=alarmdates
    console.log(v1);console.log(alarmdates)}
  })
//wed
document.getElementById("check3").addEventListener("click", ()=>{
if(document.getElementById("check3").style.color=="black"){document.getElementById("check3").style.color="white"
  document.getElementById("check3").style.borderBottom="1px solid white"
  if(alarmdates==""){alarmdates = alarmdates+"wed"}
  else{alarmdates = alarmdates+".wed"}
  document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(alarmdates)}
else{document.getElementById("check3").style.color="black"
  document.getElementById("check3").style.borderBottom="0"
let days = alarmdates.split(".")
console.log(days)
let point = days.indexOf("wed")
let v1 = ""
for (let index = 0; index < days.length; index++) {
if(index!=point){if(v1==""){v1 = v1+days[index]} 
else{v1 = v1+"."+days[index]}}
console.log(v1)
}
alarmdates = v1
document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(v1);console.log(alarmdates)}
})
//thu
document.getElementById("check4").addEventListener("click", ()=>{
if(document.getElementById("check4").style.color=="black"){document.getElementById("check4").style.color="white"
  document.getElementById("check4").style.borderBottom="1px solid white"
  if(alarmdates==""){alarmdates = alarmdates+"thu"}
  else{alarmdates = alarmdates+".thu"}
  document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(alarmdates)}
else{document.getElementById("check4").style.color="black"
  document.getElementById("check4").style.borderBottom="0"
let days = alarmdates.split(".")
console.log(days)
let point = days.indexOf("thu")
let v1 = ""
for (let index = 0; index < days.length; index++) {
if(index!=point){if(v1==""){v1 = v1+days[index]} 
else{v1 = v1+"."+days[index]}}
console.log(v1)
}
alarmdates = v1
document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(v1);console.log(alarmdates)}
})
//fri
document.getElementById("check5").addEventListener("click", ()=>{
if(document.getElementById("check5").style.color=="black"){document.getElementById("check5").style.color="white"
  document.getElementById("check5").style.borderBottom="1px solid white"
  if(alarmdates==""){alarmdates = alarmdates+"fri"}
  else{alarmdates = alarmdates+".fri"}
  document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(alarmdates)}
else{document.getElementById("check5").style.color="black"
  document.getElementById("check5").style.borderBottom="0"
let days = alarmdates.split(".")
console.log(days)
let point = days.indexOf("fri")
let v1 = ""
for (let index = 0; index < days.length; index++) {
if(index!=point){if(v1==""){v1 = v1+days[index]} 
else{v1 = v1+"."+days[index]}}
console.log(v1)
}
alarmdates = v1
document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(v1);console.log(alarmdates)}
})
//sat
document.getElementById("check6").addEventListener("click", ()=>{
if(document.getElementById("check6").style.color=="black"){document.getElementById("check6").style.color="white"
  document.getElementById("check6").style.borderBottom="1px solid white"
  if(alarmdates==""){alarmdates = alarmdates+"sat"}
  else{alarmdates = alarmdates+".sat"}
  document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(alarmdates)}
else{document.getElementById("check6").style.color="black"
  document.getElementById("check6").style.borderBottom="0"
let days = alarmdates.split(".")
console.log(days)
let point = days.indexOf("sat")
let v1 = ""
for (let index = 0; index < days.length; index++) {
if(index!=point){if(v1==""){v1 = v1+days[index]} 
else{v1 = v1+"."+days[index]}}
console.log(v1)
}
alarmdates = v1
document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(v1);console.log(alarmdates)}
})
//sun
document.getElementById("check7").addEventListener("click", ()=>{
if(document.getElementById("check7").style.color=="black"){document.getElementById("check7").style.color="white"
  document.getElementById("check7").style.borderBottom="1px solid white"
  if(alarmdates==""){alarmdates = alarmdates+"sun"}
  else{alarmdates = alarmdates+".sun"}
  document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(alarmdates)}
else{document.getElementById("check7").style.color="black"
  document.getElementById("check7").style.borderBottom="0"
let days = alarmdates.split(".")
console.log(days)
let point = days.indexOf("sun")
let v1 = ""
for (let index = 0; index < days.length; index++) {
if(index!=point){if(v1==""){v1 = v1+days[index]} 
else{v1 = v1+"."+days[index]}}
console.log(v1)
}
alarmdates = v1
document.getElementById("alarmdays").innerHTML=alarmdates
  console.log(v1);console.log(alarmdates)}
})

let add4value = 0
document.getElementById("add4").addEventListener("click", ()=>{
  if(tipsarray[3]==0){document.getElementById("tip").style.display="flex"; document.getElementById("tiptxt").innerHTML="check the edit to checklist box to convert your typed note to a checklist"; document.getElementById("tip").style.left="50px"; document.getElementById("tip").style.top="150px"
  setTimeout(() => {
    document.getElementById("tip").style.display="none"
  }, 6000);
    tipsarray[3]=1; localStorage.setItem("tips", tipsarray)}
if(add4value==0){document.getElementById("notesbox").style.display="none"
document.getElementById("noteedit").style.display="flex";
document.getElementById("cancel1").style.display="block"; add4value=1}
else{
  if(document.getElementById("notenamein").value==""){window.alert("please fill in the note name")}
  else if(document.getElementById("notecontentin").value==""){window.alert("please fill in the note content")}
  else if(document.getElementById("notecontentin").value.includes("|") || document.getElementById("notenamein").value.includes("|")){window.alert("please remove all '|' case in your text")}
  else{document.getElementById("notesbox").style.display="flex"
document.getElementById("emptytxt2").style.display="none";
document.getElementById("noteedit").style.display="none";
document.getElementById("cancel1").style.display="none"; add4value=0

if(document.getElementById("notecontentin").value.includes("▢")){document.getElementById("notecontentin").value=document.getElementById("notecontentin").value.replace(/,/g, "~")}
 else{document.getElementById("notecontentin").value=document.getElementById("notecontentin").value.replace(/,/g, "^")}


document.getElementById("notenamein").value=document.getElementById("notenamein").value.replace(/,/g, "^")


let values = document.getElementById("notenamein").value+"|"+document.getElementById("notecontentin").value
console.log(values)
notecontent[notecontent.length]=values
localStorage.setItem("notecontent", notecontent)
console.log(notecontent)
//
let index = notecontent.length-1

  if(notecontent[index].includes("▢") || notecontent[index].includes("▣")){
  let array = notecontent[index].split("|")
  let create = document.createElement("div")
  let create1 = document.createElement("div")
  let create2 = document.createElement("p")
  let create3 = document.createElement("p")
  let create5 = document.createElement("p")

  create.className="notediv"
  create1.className="notechecklist"
  create2.id="notename"
  create3.className="noteshow"
  create3.id="noteshow"+index
  create5.className="notecancel"
create1.id="notechecklist"+index
create5.id="notecancel"+index
create.id="notediv"+index
create3.innerHTML="✒️"
let items = array[1].split("")
console.log(items)
let join = items.join("")
items=join.split("\n")
if(items[items.length-1]==""){items.splice(items.length-1, 1)}
console.log(items)
let p = 0
for (let index1 = 0; index1 < index; index1++) {
p=p+1}
for (let index = 0; index < items.length; index++) {
let create6 = document.createElement("p")
create6.innerHTML=items[index].replace(/~/g, ",")
create6.addEventListener("click", ()=>{
if(create6.innerHTML.includes("▢")){let array2 = create6.innerHTML.replace(/,/g, "~").split("▢")
array2[array2.length-1]="▣"
console.log(array2)
let value = array2.join("")
for (let index3 = 0; index3 < items.length; index3++) {
if(items[index3].includes(create6.innerHTML.replace(/,/g, "~"))){console.log("in"); console.log(index3)
items[index3]=value; console.log(items)
let save = items.join("\n")
save = save.split("");
save = save.join("")
let value2 = array[0]+"|"+save
notecontent[p]=value2
console.log(notecontent)
console.log(save)
localStorage.setItem("notecontent", notecontent)
}}
create6.innerHTML=value.replace(/~/g, ",")
}
else if(create6.innerHTML.includes("▣")){let array2 = create6.innerHTML.replace(/,/g, "~").split("▣")
array2[array2.length-1]="▢"
console.log(array2)
let value = array2.join("")
for (let index3 = 0; index3 < items.length; index3++) {
if(items[index3].includes(create6.innerHTML.replace(/,/g, "~"))){console.log("in"); console.log(index3)
items[index3]=value; console.log(items)
let save = items.join("\n")
save = save.split("");
save = save.join("")
let value2 = array[0]+"|"+save
notecontent[p]=value2
console.log(notecontent)
console.log(save)
localStorage.setItem("notecontent", notecontent)
}}
create6.innerHTML=value.replace(/~/g, ",")}
})
create1.append(create6)}
   create.append(create2) 
   create.append(create3)
   create.append(create5)
let txt= array[0]
   for (let index = 0; index <= txt.length; index++) {
     txt=txt.replace("^", ",")
   }
   create2.innerHTML=txt
   create5.innerHTML="+"
  document.getElementById("notesbox").append(create)
  document.getElementById("notesbox").append(create1)
  document.getElementById("noteshow"+index).addEventListener("click", ()=>{
    if(  document.getElementById("noteshow"+index).innerHTML=="✒️"){document.getElementById("notechecklist"+index).style.display="block";
    document.getElementById("noteshow"+index).innerHTML="✏️"  }
    else{document.getElementById("notechecklist"+index).style.display="none";   document.getElementById("noteshow"+index).innerHTML="✒️"  }
  })
  document.getElementById("notecancel"+index).addEventListener("click", ()=>{
    document.getElementById("notediv"+index).style.display="none"
    document.getElementById("notechecklist"+index).style.display="none"
    if(notecontent.length==0){document.getElementById("emptytxt2").style.display="block"}
    let id2 =   document.getElementById("notediv"+index).id
    let start = parseInt(id2.slice(7, ))
  console.log(start)
  notecontent[start]="null"
  console.log(notecontent)
  localStorage.setItem("notecontent", notecontent)
  })
  }
    else{let array = notecontent[index].split("|")
  let create = document.createElement("div")
  let create1 = document.createElement("textarea")
  let create2 = document.createElement("p")
  let create3 = document.createElement("p")
  let create5 = document.createElement("p")
  create.className="notediv"
  create1.className="notecontent"
  create2.id="notename"
  create3.className="noteshow"
  create3.id="noteshow"+index
  create5.className="notecancel"
create1.id="notecontent"+index
create5.id="notecancel"+index
create.id="notediv"+index
create3.innerHTML="✒️"
   create.append(create2) 
   create.append(create3)
   create.append(create5)

   let txt= array[0]
   for (let index = 0; index <= txt.length; index++) {
     txt=txt.replace("^", ",")
   }
   create2.innerHTML=txt

   for (let index = 0; index <= array[1].length; index++) {
    array[1]=array[1].replace("^", ",")
   }
   
   create1.value=array[1]
   create5.innerHTML="+"
  document.getElementById("notesbox").append(create)
  document.getElementById("notesbox").append(create1)
  document.getElementById("noteshow"+index).addEventListener("click", ()=>{
    if(  document.getElementById("noteshow"+index).innerHTML=="✒️"){document.getElementById("notecontent"+index).style.display="block";
    document.getElementById("noteshow"+index).innerHTML="✏️"  }
    else{document.getElementById("notecontent"+index).style.display="none";   document.getElementById("noteshow"+index).innerHTML="✒️"  }
  })
  document.getElementById("notecontent"+index).addEventListener("focusout", ()=>{
    console.log(notecontent)
    let id2 =   document.getElementById("notecontent"+index).id
    let start = parseInt(id2.slice(11, )) 
    let array = notecontent[start].split("|")
  console.log(start)
  console.log(array)
  array[1]=document.getElementById("notecontent"+index).value

    array[1]=array[1].replace(/,/g, "^")
   
notecontent[start]=array[0]+"|"+array[1]
console.log(notecontent)
localStorage.setItem("notecontent", notecontent)})

document.getElementById("notecancel"+index).addEventListener("click", ()=>{
  document.getElementById("notediv"+index).style.display="none"
  document.getElementById("notecontent"+index).style.display="none"
  if(notecontent.length==0){document.getElementById("emptytxt2").style.display="block"}
  let id2 =   document.getElementById("notediv"+index).id
  let start = parseInt(id2.slice(7, ))
console.log(start)
notecontent[start]="null"
console.log(notecontent)
localStorage.setItem("notecontent", notecontent)
let notecontentcopy = notecontent
for (let index = 0; index < notecontentcopy.length; index++) {
if(notecontentcopy[index]=="null"){notecontentcopy.splice(index, 1)}
}
for (let index = 0; index < notecontentcopy.length; index++) {
if(notecontentcopy[index]=="null"){notecontentcopy.splice(index, 1)}
}
if(notecontentcopy.length==0){document.getElementById("emptytxt2").style.display="block"}
else if(notecontentcopy.length==1 && notecontentcopy[0]==""){document.getElementById("emptytxt2").style.display="block"}
})
}
document.getElementById("notecontentin").value=""
document.getElementById("notenamein").value=""
document.getElementById("checklisttoggle").checked=false
}}
})
document.getElementById("checklisttoggle").addEventListener("click", ()=>{

if(document.getElementById("checklisttoggle").checked==true){
let content = document.getElementById("notecontentin").value
let array = content.split("")
for (let index = 0; index <= array.length; index++) {
if(array[index]=="\n"){array[index]=" ▢"}

}
content=array.join("")
array = content.split("▢")
console.log(array)
let array2 = []
let index2 = 0
let value = array.length-1+array.length+array.length
for (let index = 0; index < value; index++) {
 array2[index] = array[index2]
 array2[index+1] = " ▢"
 array2[index+2] = "\n"
 index=index+2
 index2=index2+1
}
content=array2.join("")
 console.log(content)
console.log(array2)
document.getElementById("notecontentin").value=content
}
else{
  let content = document.getElementById("notecontentin").value
  let array = content.split(" ▢")
  array.splice(array.length-1, 1)
  content = array.join("")
  console.log(content)
  console.log(array)
  document.getElementById("notecontentin").value=content
}
})
document.getElementById("cancel1").addEventListener("click", ()=>{
document.getElementById("notesbox").style.display="flex"
document.getElementById("noteedit").style.display="none";
document.getElementById("cancel1").style.display="none"; add4value=0
})
document.getElementById("cancel2").addEventListener("click", ()=>{
  document.getElementById("remindersbox").style.display="flex"
  document.getElementById("reminderedit").style.display="none";
  document.getElementById("cancel2").style.display="none"; add3value=0
  })
let add3value = 0
document.getElementById("add3").addEventListener("click", ()=>{
  if(tipsarray[4]==0){document.getElementById("tip").style.display="flex"; document.getElementById("tiptxt").innerHTML="check the link to checklist box to link your reminder to one of your checklist"; document.getElementById("tip").style.left="50px"; document.getElementById("tip").style.top="150px"
  setTimeout(() => {
    document.getElementById("tip").style.display="none"
  }, 6000);
    tipsarray[4]=1; localStorage.setItem("tips", tipsarray)}
  if(add3value==0){document.getElementById("remindersbox").style.display="none"
  document.getElementById("reminderedit").style.display="flex";
  document.getElementById("cancel2").style.display="block";
  document.getElementById("reminderdate").value=gdate+" "+gmon
   add3value=1}
  else{document.getElementById("reminderdate").value=document.getElementById("reminderdate").value.toLowerCase()
    if(document.getElementById("reminderdate").value==""){window.alert("please fill in the reminder date")}
    else if(document.getElementById("remindertime1").value=="" || parseInt(document.getElementById("remindertime1").value)>23 || document.getElementById("remindertime2").value=="" || parseInt(document.getElementById("remindertime2").value)>60){window.alert("please fill in correct time format");}
    else if(document.getElementById("remindercontent").value==""){window.alert("please fill in the reminder content")}
    else if(document.getElementById("remindercontent").value.includes("|")){window.alert("please remove all '|' case in your text")}
else if(parseInt(document.getElementById("reminderdate").value)>0 && parseInt(document.getElementById("reminderdate").value)<33 && (document.getElementById("reminderdate").value.includes("jan") || 
document.getElementById("reminderdate").value.includes("feb") || 
document.getElementById("reminderdate").value.includes("mar") || 
document.getElementById("reminderdate").value.includes("apr") || 
document.getElementById("reminderdate").value.includes("may") || 
document.getElementById("reminderdate").value.includes("jun") || 
document.getElementById("reminderdate").value.includes("jul") || 
document.getElementById("reminderdate").value.includes("aug") || 
document.getElementById("reminderdate").value.includes("sep") || 
document.getElementById("reminderdate").value.includes("oct") || 
document.getElementById("reminderdate").value.includes("nov") || 
document.getElementById("reminderdate").value.includes("dec"))){document.getElementById("remindersbox").style.display="flex"
  document.getElementById("reminderedit").style.display="none";
  document.getElementById("emptytxt3").style.display="none";
  document.getElementById("cancel2").style.display="none";
  for (let index = 0; index <= document.getElementById("remindercontent").value.length; index++) {
  document.getElementById("remindercontent").value=document.getElementById("remindercontent").value.replace(",", "^")
  }
  if(document.getElementById("remindertime1").value.length==1){document.getElementById("remindertime1").value="0"+document.getElementById("remindertime1").value}
if(document.getElementById("remindertime2").value.length==1){document.getElementById("remindertime2").value="0"+document.getElementById("remindertime2").value}
  let time = document.getElementById("remindertime1").value+":"+document.getElementById("remindertime2").value
  let save = time+"|"+document.getElementById("reminderdate").value+"|"+document.getElementById("remindercontent").value+"|"+document.getElementById("checkselect").value
  let on2 = "true"
  console.log(save)
  remindercontent[remindercontent.length]=save
  reminderlogic[reminderlogic.length]=on2
  console.log(remindercontent)
  console.log(reminderlogic)
  localStorage.setItem("remindercontent", remindercontent)
  localStorage.setItem("reminderlogic", reminderlogic)
  add3value=0
  //
  let index = remindercontent.length-1
  rrang[rrang.length]="false"
let array = remindercontent[index].split("|")
    let create = document.createElement("div")
    let create2 = document.createElement("p")
    let create4 = document.createElement("input")
    let create5 = document.createElement("p")
    create.className="remindervalue"
    create2.id="remindercontenttxt"
    create4.className="reminderon"
    create5.className="remindercnl"
    create5.innerHTML="+"
    create5.id="remindercnl"+index
    create.id="remindervalue"+index
    create4.id="reminderon"+index
     create.append(create2) 
     create.append(create4) 
     create.append(create5)
     for (let index = 0; index <= array[2].length; index++) {
      array[2]=array[2].replace("^", ",")
     }
     create2.innerHTML=array[2]+" "+array[1]
     create4.type="checkbox"
     if(reminderlogic[index]=="true"){create4.checked=true}
     else{create4.checked=false}
    document.getElementById("remindersbox").append(create)
    document.getElementById("reminderon"+index).addEventListener("click", ()=>{
     if(document.getElementById("reminderon"+index).checked==true){ 
      let id =   document.getElementById("reminderon"+index).id
      let start = parseInt(id.slice(10, ))
      console.log(start)
      reminderlogic[start]="true"
      console.log(reminderlogic)
      localStorage.setItem("reminderlogic", reminderlogic)}
    else{let id =   document.getElementById("reminderon"+index).id
        let start = parseInt(id.slice(10, ))
        console.log(start)
        reminderlogic[start]="false"
        console.log(reminderlogic)
        localStorage.setItem("reminderlogic", reminderlogic)}
    })
    document.getElementById("remindercnl"+index).addEventListener("click", ()=>{
      document.getElementById("remindervalue"+index).style.display="none"
      if(remindercontent.length==0){document.getElementById("emptytxt3").style.display="block"}
      let id2 =   document.getElementById("remindervalue"+index).id
      let start = parseInt(id2.slice(13, ))
    console.log(start)
    remindercontent[start]="null"
    reminderlogic[start]="null"
    console.log(remindercontent)
    console.log(reminderlogic)
    localStorage.setItem("remindercontent", remindercontent)
    localStorage.setItem("reminderlogic", reminderlogic)
    
    })
  
    let array2 = remindercontent[index].split("|")
    
    
    setInterval(()=>{
    console.log(array2)
    let search = false
    if(array2[1].includes(gmon) && parseInt(array2[1])==gdate){search=true}
    if(array2[1]==generaldate2){search=true}
    if((array2[0]==alarmtime && search==true && reminderlogic[index]=="true")){console.log(array2[2])
      let box2 = document.createElement("article");
      reply = document.createElement("h6");
    let chatarea = document.getElementById("chatarea");
    box2.appendChild(reply)
    chatarea.appendChild(box2);
    reply.innerHTML="remember to "+array[2]+" "+username.value;
      rrang[index]="true"
  localStorage.setItem("rrang", rrang)
      document.getElementById("ractivedel").addEventListener("click", ()=>{
        document.getElementById("remindervalue"+index).style.display="none"
        if(remindercontent.length==0){document.getElementById("emptytxt3").style.display="block"}
        let id2 =   document.getElementById("remindervalue"+index).id
        let start = parseInt(id2.slice(13, ))
      console.log(start)
      remindercontent[start]="null"
      reminderlogic[start]="null"
      console.log(remindercontent)
      console.log(reminderlogic)
      localStorage.setItem("remindercontent", remindercontent)
      localStorage.setItem("reminderlogic", reminderlogic)
      document.getElementById("ractivebox").style.display="none"
      })
    document.getElementById("ractivebox").style.display="flex";
    setTimeout(()=>{document.getElementById("ractivebox").style.display="none";}, 120000)
    setInterval(()=>{ if(document.getElementById("ractivebox").style.display=="flex"){document.getElementById("remindersound").play()}}, document.getElementById("remindersound").duration)
    document.getElementById("ractivetxt").innerHTML=array2[2]
    let notify = new Notification("reminder", {body: array[2], icon:"5bfc1c0ea645f-2723436d0f517f1d2e2b58510a7b6a72.png"})
    if(array2[3]=="none"){document.getElementById("ractivecl").style.display="none"}
    else{document.getElementById("ractivecl").addEventListener("click", ()=>{
    console.log(array2[3])
    shown();
    for (let index = 0; index < notecontent.length; index++) {
    let array1 = notecontent[index].split("|")
    if(array1[0]==array2[3]){document.getElementById("notechecklist"+index).style.display="block"
    document.getElementById("noteshow"+index).innerHTML="✏️"}
    }
    
    
    })}; search=false; array2[1]="null"; array2[0]="null"}
    let value1 = alarmtime.split(":")
value1=value1[0]+value1[1]
let value2 =array[0].split(":")
value2=value2[0]+value2[1]
console.log(value1); console.log(value2)
if(rrang[index]=="false" && search==true && reminderlogic[index]=="true" && parseInt(value1)>parseInt(value2)){
  let box2 = document.createElement("article");
  reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
reply.innerHTML="remember to "+array[2]+" "+username.value;
  console.log(array[2])
  rrang[index]="true"
  localStorage.setItem("rrang", rrang)
    document.getElementById("ractivedel").addEventListener("click", ()=>{
      document.getElementById("remindervalue"+index).style.display="none"
      if(remindercontent.length==0){document.getElementById("emptytxt3").style.display="block"}
      let id2 =   document.getElementById("remindervalue"+index).id
      let start = parseInt(id2.slice(13, ))
    console.log(start)
    remindercontent[start]="null"
    reminderlogic[start]="null"
    console.log(remindercontent)
    console.log(reminderlogic)
    localStorage.setItem("remindercontent", remindercontent)
    localStorage.setItem("reminderlogic", reminderlogic)
    document.getElementById("ractivebox").style.display="none"
    })
  document.getElementById("ractivebox").style.display="flex";
  setTimeout(()=>{document.getElementById("ractivebox").style.display="none";}, durationvalue)
  setInterval(()=>{ if(document.getElementById("ractivebox").style.display=="flex"){document.getElementById("remindersound").play()}}, document.getElementById("remindersound").duration)
  document.getElementById("ractivetxt").innerHTML="missed reminder : "+array[2]
  let notify = new Notification("reminder", {body: "missed reminder : "+array[2], icon:"5bfc1c0ea645f-2723436d0f517f1d2e2b58510a7b6a72.png"})
  if(array[3]=="none"){document.getElementById("ractivecl").style.display="none"}
  else{document.getElementById("ractivecl").style.display="block"; document.getElementById("ractivecl").addEventListener("click", ()=>{
  console.log(array[3])
  shown();
  for (let index = 0; index < notecontent.length; index++) {
  let array1 = notecontent[index].split("|")
  if(array1[0]==array[3]){document.getElementById("notechecklist"+index).style.display="block"
  document.getElementById("noteshow"+index).innerHTML="✏️"}
  }
  
  
  })}; search=false; array[1]="null"
}
    }, 1000)
  document.getElementById("remindercontent").value=""
  document.getElementById("reminderdate").value=""
  if(document.getElementById("remindercheck").checked==true){document.getElementById("remindercheck").checked=false
  document.getElementById("checkselect").style.color="rgb(113, 113, 113)"
  document.getElementById("checkselect").remove()
  let create = document.createElement("select")
  let create2 = document.createElement("option")
  create.id="checkselect"
  create2.value="none"
  create2.innerHTML="none"
  document.getElementById("reminderedit").append(create); 
  document.getElementById("checkselect").append(create2); }}
  else{window.alert("please input correct date format: date month, eg 01 jan")}}

})
let contains = 0
  document.getElementById("remindercheck").addEventListener("click", ()=>{
  if(  document.getElementById("remindercheck").checked==true){
    document.getElementById("checkselect").style.color="white"
    for (let index = 0; index < notecontent.length; index++) {
      if(notecontent[index].includes("▢") || notecontent[index].includes("▣")){
       let create = document.createElement("option")
       let array = notecontent[index].split("|")
       contains=contains+1
       create.id="create"+contains
       create.value=array[0]
       let txt = array[0]
       for (let index = 0; index <= txt.length; index++) {
     txt=txt.replace("^", ",")
       }
       create.innerHTML=txt
      
       document.getElementById("checkselect").append(create); 
       }
       }}
  else{document.getElementById("checkselect").style.color="rgb(113, 113, 113)"
  document.getElementById("checkselect").remove()
  let create = document.createElement("select")
  let create2 = document.createElement("option")
  create.id="checkselect"
  create2.value="none"
  create2.innerHTML="none"
  document.getElementById("reminderedit").append(create); 
  document.getElementById("checkselect").append(create2); 
}
  })

  document.getElementById("ractivecnl").addEventListener("click", ()=>{
    document.getElementById("ractivebox").style.display="none"
  })
  let sitch = 0;
  let focusv = ""
document.getElementById("chatarea").addEventListener("click", ()=>{
  document.getElementById("commandlist").style.display="none"
})
document.getElementById("sidepanel").addEventListener("click", ()=>{
  document.getElementById("commandlist").style.display="none"
})
document.getElementById("sleepscreen").addEventListener("click", ()=>{
  document.getElementById("commandlist").style.display="none"
  
})
document.getElementById("fcclose").addEventListener("click", ()=>{
 if(document.getElementById("focusctrl").style.display=="flex"){document.getElementById("focusctrl").style.display="none"
  document.getElementById("focustabs").style.display="flex"
  document.getElementById("focustabs").style.top="20px"
  document.getElementById("timebox").style.border=" 2px solid white"
  document.getElementById("focustime").style.color="white"}
  document.getElementById("fcclose").style.display="none"
})
document.getElementById("qcmethod").value=localStorage.getItem("showmethod")
document.getElementById("qcmethod").addEventListener("input", ()=>{
  ; localStorage.setItem("showmethod", document.getElementById("qcmethod").value)
})

if(localStorage.getItem("showmethod")==null){document.getElementById("chatarea").addEventListener("dblclick", ()=>{
  document.getElementById("commandlist").style.display="flex"
  
})}
else if(localStorage.getItem("showmethod")=="double click"){document.getElementById("chatarea").addEventListener("dblclick", ()=>{
  document.getElementById("commandlist").style.display="flex"
  
})}
else if(localStorage.getItem("showmethod")=="right click"){document.getElementById("chatarea").addEventListener("auxclick", ()=>{
  document.getElementById("commandlist").style.display="flex"
  
})}
else if(localStorage.getItem("showmethod")=="drag"){document.getElementById("chatarea").addEventListener("drag", ()=>{
  document.getElementById("commandlist").style.display="flex"
  
})}
let qcs =false
document.getElementById("qcsettings").addEventListener("click", ()=>{
if(qcs==false){  document.getElementById("qcsettingsdiv").style.display="flex"; qcs=true}
else{  document.getElementById("qcsettingsdiv").style.display="none"; qcs=false}
});
document.getElementById("sidebarcommand").addEventListener("click", ()=>{
show()
})
document.getElementById("timercommand").addEventListener("click", ()=>{
  document.getElementById("timer").style.display="flex"
})
document.getElementById("voicemcommand").addEventListener("click", ()=>{
  document.getElementById("commandlist").style.display="none"
  micon=true; document.getElementById("sleepscreen").style.display="block"; player.pause(); document.getElementById("sleepscreen").style.animationName="transistion3";
  speak2(); start=true
})
document.getElementById("focuscommand").addEventListener("click", ()=>{
  micon=true; document.getElementById("sleepscreen").style.display="block"; player.pause(); document.getElementById("sleepscreen").style.animationName="transistion3";
  speak2(); start=true
  document.getElementById("musiccontrol").style.display="none";
 document.getElementById("focusctrl").style.display="flex"
 document.getElementById("focustabs").style.display="flex"
 document.getElementById("timebox").style.display="none"
 document.getElementById("fctimebox").style.display="flex"
 document.getElementById("focustime").style.display="block"
 if(window.innerWidth<750){  document.getElementById("focustabs").style.top="20px"
 document.getElementById("fcclose").style.display="block"
   if(window.innerHeight<650){document.getElementById("focusctrl").style.position="absolute"
 document.getElementById("focusctrl").style.bottom="20px"}
 if(window.innerHeight<540){
   document.getElementById("focusctrl").style.bottom="60px"
 }
 if(window.innerHeight<530){  document.getElementById("focustabs").style.display="none"
 document.getElementById("focusctrl").style.bottom="100px"}}
 if(focusv!=""){document.getElementById("fcadd").style.display="none"; document.getElementById("fcpref").style.display="flex"}
  sitch=1
  document.getElementById("commandlist").style.display="none"
})
document.getElementById("hsidebarcommand").addEventListener("click", ()=>{
hide()
})

reminderk.addEventListener("click", function4)

function function4 (){
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="block";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="Reminder"

    
}

notek.addEventListener("click", function5)
function function5 (){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="block";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none";
title.innerHTML="notes";
}

  let interval = ""
scheduelk.addEventListener("click", function6)
function function6(){
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="block";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="schedule";
}

completed.addEventListener("click", f3)
function f3(){completedvalue=1; completed.style.background="green"; value3=date2;  localStorage.setItem("timing", value3)}


musick.addEventListener("click", function7)
function function7(){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="block";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none";
title.innerHTML="music";

}
document.getElementById("musicadd").addEventListener("click", ()=>{
 let on = true;
  if(on===true){document.getElementById("list").style.display="flex"; on = false}
  else if (on===false){document.getElementById("list").style.display="none"; on = true}})

document.getElementById("madd").addEventListener("click", ()=>{
  if(tipsarray[1]==0){document.getElementById("tip").style.display="flex"; document.getElementById("tiptxt").innerHTML="check the multiple file box to select multiple audio tracks at once"; document.getElementById("tip").style.left="50px"; document.getElementById("tip").style.top="150px"
  setTimeout(() => {
    document.getElementById("tip").style.display="none"
  }, 6000);
    tipsarray[1]=1; localStorage.setItem("tips", tipsarray)}
  if( document.getElementById("madd").innerText=="✖️"){document.getElementById("addbox").style.display="flex";
  document.getElementById("b2").style.display="none";
  document.getElementById("madd").innerText="❌"}
  else{document.getElementById("addbox").style.display="none";
  document.getElementById("b2").style.display="block";
  document.getElementById("madd").innerText="✖️"}
})
let player = document.getElementById("audio4")
let names = []



if(songmode==null){songmode="replay"}
else if(songmode=="forwardplay"){document.getElementById("mforwardplay").style.display="block"
document.getElementById("mreplay").style.display="none"}
else if(songmode=="random"){
  document.getElementById("mrandom").style.display="block"
  document.getElementById("mreplay").style.display="none"
}
console.log(songmode)

let array = [ ]
let array1 = [ ]
let saved = 0
let acon = [ ]
let inter1 = null
let inter2 = null
let inter3 = null
let inter0 = null
let inter = null
let namee = document.getElementById("songn")


function music5(event){
  if(document.getElementById("ainput5").value!==""){
  if(document.getElementById("madd").innerText=="❌"){document.getElementById("madd").innerText="✖️"}
  let pre = names.length
   document.getElementById("addbox").style.display="none";
  if(document.getElementById("multi").checked==false){ 
 let song = document.createElement("p")
  song.id="songcreate";
 names[pre] = document.getElementById("songn").value
 song.innerText=names[pre]; console.log(names)
 array[pre]=URL.createObjectURL(event.target.files[0])
 document.getElementById("b2").append(song)
 console.log(array)
 //click
 song.addEventListener("click", ()=>{let psong = song.innerText

  for (let index = 0; index < names.length; index++) {
    if(psong==names[index]){console.log(psong); console.log(index); console.log(names[index]); mindex=index}  
    }
    player.src = array[mindex]
    player.play()
     console.log(player);
  player.addEventListener("mouseover", ()=>{
    document.getElementById("songplaying").style.display="flex" 
    document.getElementById("sptxt").innerHTML=psong
  })
  document.getElementById("fcplayingmusic").innerHTML="playing : "+psong    
  document.getElementById("fcsongtxt").innerHTML="playing : "+psong
  })
song.addEventListener("dblclick", ()=>{song.style.display="none";

let psong = song.innerText;
for (let index = 0; index < names.length; index++) {
  if(psong==names[index]){console.log(psong); console.log(index); console.log(names[index]); array.splice(index, 1); names.splice(index, 1); console.log(names); console.log(array)}  
}})}
else{console.log(document.getElementById("ainput5").files.length)
for (let index = 0; index < document.getElementById("ainput5").files.length; index++) {
  pre = names.length
  let song = document.createElement("p")
  song.id="songcreate";
  let object = event.target.files[index]
 names[pre] = object.name
 song.innerText=names[pre]; console.log(names)
 array[pre]=URL.createObjectURL(event.target.files[index])
 console.log(array)
 document.getElementById("b2").append(song)
 //click
 song.addEventListener("click", ()=>{let psong = song.innerText
  player.removeEventListener("ended", ()=>{mautoplay()})
  for (let index = 0; index < names.length; index++) {
    if(psong==names[index]){console.log(psong); console.log(index); console.log(names[index]); mindex=index}  
    }
    player.src = array[mindex]
    player.play()
     console.log(player);
  player.addEventListener("mouseover", ()=>{
    document.getElementById("songplaying").style.display="flex" 
    document.getElementById("sptxt").innerHTML=psong
  })
  document.getElementById("fcplayingmusic").innerHTML="playing : "+psong    
  document.getElementById("fcsongtxt").innerHTML="playing : "+psong
  })
song.addEventListener("dblclick", ()=>{song.style.display="none";

let psong = song.innerText;
for (let index = 0; index < names.length; index++) {
  if(psong==names[index]){console.log(psong); console.log(index); console.log(names[index]); array.splice(index, 1); names.splice(index, 1); console.log(names); console.log(array)}  
}})
}
}
 document.getElementById("b2").style.display="block";
}
  }


function musicp (){
  let ppsong = ""
  let locate = chattext.value.indexOf("play")
  let psong = chattext.value.slice(locate+5, )
  console.log(psong);
  for (let index = 0; index < names.length; index++) {
    if(names[index].toLowerCase().includes(psong)){console.log(psong); console.log(index); console.log(names[index]); player.src=array[index]; player.play(); ppsong=names[index]} 

    }
    if(ppsong==""){reply.innerHTML="no song found"}
  }
player.addEventListener("ended", ()=>{mreplay()})
player.addEventListener("ended", ()=>{mautoplay()})
player.addEventListener("ended", ()=>{mrandomplay()})

function mrandomplay(){ 
  if(songmode=="random"){
   let num = Math.floor(Math.random() *array.length-1)
    console.log(player)
  player.src=array[num]
    console.log(num)
    player.play()
    player.addEventListener("mouseover", ()=>{
      document.getElementById("songplaying").style.display="flex" 
      document.getElementById("sptxt").innerHTML=names[num]
    })
    document.getElementById("fcplayingmusic").innerHTML="playing : "+names[num]
    document.getElementById("fcsongtxt").innerHTML="playing : "+names[num]
  }
}
 let truet = false

function mautoplay(){ 
  if(songmode=="forwardplay"){
    mindex=mindex+1
      if(mindex==array.length){mindex=0; console.log("end")};
    player.src=array[mindex]
      console.log(mindex)
      player.play()
    truet=true
    player.addEventListener("mouseover", ()=>{
      document.getElementById("songplaying").style.display="flex" 
      document.getElementById("sptxt").innerHTML=names[mindex]
    })
    document.getElementById("fcplayingmusic").innerHTML="playing : "+names[mindex]
    document.getElementById("fcsongtxt").innerHTML="playing : "+names[mindex]
  }   
}

function mreplay(){ 
  if(songmode=="replay"){
  player.src=array[mindex]
    console.log(mindex)
    player.play()
    player.addEventListener("mouseover", ()=>{
      document.getElementById("songplaying").style.display="flex" 
      document.getElementById("sptxt").innerHTML=names[mindex]
    })
    document.getElementById("fcplayingmusic").innerHTML="playing : "+names[mindex]
    document.getElementById("fcsongtxt").innerHTML="playing : "+names[mindex]
  }
}

document.getElementById("mreplay").addEventListener("click", ()=>{
    document.getElementById("mforwardplay").style.display="block"
    document.getElementById("mreplay").style.display="none"
    songmode="forwardplay"
    localStorage.setItem("songmode", songmode)

})
document.getElementById("mforwardplay").addEventListener("click", ()=>{
    document.getElementById("mrandom").style.display="block"
    document.getElementById("mforwardplay").style.display="none"
    songmode="random"
    localStorage.setItem("songmode", songmode)

})
document.getElementById("mrandom").addEventListener("click", ()=>{
    document.getElementById("mreplay").style.display="block"
    document.getElementById("mrandom").style.display="none"
    songmode="replay"
    localStorage.setItem("songmode", songmode)
})
document.getElementById("mback").addEventListener("click", ()=>{
mindex=mindex-1
if(mindex==-1){mindex=array.length-1};
if(songmode=="replay"){player.src = array[mindex]
  player.play()
   console.log(player);}
else if(songmode=="forwardplay"){player.src = array[mindex]
  player.play()
   console.log(player);}
else if(songmode=="random"){mindex=Math.floor(Math.random() *array.length-1);  
  player.src = array[mindex]
  player.play()
   console.log(player);}
  console.log(songmode)
  player.addEventListener("mouseover", ()=>{
    document.getElementById("songplaying").style.display="flex" 
    document.getElementById("sptxt").innerHTML=names[mindex]
  })
  document.getElementById("fcplayingmusic").innerHTML="playing : "+names[mindex]
  document.getElementById("fcsongtxt").innerHTML="playing : "+names[mindex]
})
document.getElementById("mforward").addEventListener("click", ()=>{
  mindex=mindex+1
if(mindex==array.length){mindex=0};
  if(songmode=="replay"){
    player.src = array[mindex]
  player.play()
   console.log(player);
  }
  else if(songmode=="forwardplay"){
    player.src = array[mindex]
  player.play()
   console.log(player);
  }
  else if(songmode=="random"){mindex=Math.floor(Math.random() *array.length-1); 
    player.src = array[mindex]
    player.play()
     console.log(player);}
    console.log(songmode)
    player.addEventListener("mouseover", ()=>{
      document.getElementById("songplaying").style.display="flex" 
      document.getElementById("sptxt").innerHTML=names[mindex]
    })
    document.getElementById("fcplayingmusic").innerHTML="playing : "+names[mindex]
    document.getElementById("fcsongtxt").innerHTML="playing : "+names[mindex]
  })
player.addEventListener("mouseleave", ()=>{
    document.getElementById("songplaying").style.display="none" 
  })


ttt.addEventListener("click", function8)
function function8(){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="block";
document.getElementById("settings").style.display="none";
title.innerHTML="text-to-speech";

}
document.getElementById("multi").addEventListener("click", ()=>{
if(document.getElementById("multi").checked==false){
  document.getElementById("songn").style.backgroundColor="white"
  document.getElementById("songn").style.color="black"
}
else{  document.getElementById("songn").style.backgroundColor="grey"; document.getElementById("songn").style.color="#545454"}
})
read.addEventListener("click", reader)
function reader (){
  console.log(ttttext.value);
  let msg = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices();
  msg.voice = voices[6]; 
  msg.text = ttttext.value;
  window.speechSynthesis.speak(msg);
}



let joke ="";
let story = "";
let coin = "";
let dice = "";
let fact = "";
let mailv = "buluswise@gmail.com";
let subject = "mail test";
let body = "this is the body";

function mail(){
  if(on==true){chattext.value=text}
  else{};
  if(acceptinput==true){mailv=chattext.value}
  emailername=""
  console.log(mailv)
let place = mailv.indexOf("to");
let place2 = mailv.indexOf("subject");
let place3 = mailv.indexOf("body");
let maila = mailv.slice(place+3, place2-1)
subject = mailv.slice(place2+8, place3)
body = mailv.slice(place3+5,)
console.log(subject)
console.log(maila)
if(maila.includes("@")){console.log("err"); location.href="mailto:"+maila+"?"+"subject="+subject+"&"+"body="+body; emailername=maila}
else{
for (let index = 0; index < emaillog.length; index++) {
 let array = emaillog[index].split("|")
 if(array[1].includes("`")){
 array[1]=array[1].replace(/`/g, ",");
 }
 if(array[0].includes("`")){
  array[0]=array[0].replace(/`/g, ",");
  }
 if(array[0]==maila){location.href="mailto:"+array[1]+"?"+"subject="+subject+"&"+"body="+body; emailername=maila}

}}
if(emailername==""){reply.innerHTML="invalid name"}
else{reply.innerHTML="okay mail sent"}
}
let searchv = "";
let searchd = document.getElementById("search");
function search(){
  if(on==true){chattext.value=text}
  else{};
  if(acceptinput==true){let place = chattext.value.indexOf("for")
  searchv=chattext.value.slice(place+4, )}
  else{};
  console.log(searchv)
  searchd.href="https://www.google.com/search?q="+searchv;  
}
function call(){
  if(on==true){chattext.value=text}
  callername=""
let place = chattext.value.indexOf("call")
  let value=chattext.value.slice(place+5, )
  console.log(value)
if(parseInt(value)>60000000){ location.href="tel:+"+value; callername=value}
else{
for (let index = 0; index < phonelog.length; index++) {
 let array = phonelog[index].split("|")
 if(array[1].includes("`")){
  array[1]=array[1].replace(/`/g, ",");
  }
  if(array[0].includes("`")){
   array[0]=array[0].replace(/`/g, ",");
   }
 if(array[0]==value){ location.href="tel:+"+array[1]; callername=array[0]}
}
if(callername==""){reply.innerHTML="invalid caller name or phone number length"}
else{reply.innerHTML="okay calling "+callername;}
}
}
function openapp(){
  if(on==true){chattext.value=text}
  appname=""
let place = chattext.value.indexOf("open")
  let value=chattext.value.slice(place+5, )
  console.log(value)
for (let index = 0; index < applog.length; index++) {
 let array = applog[index].split("|")
 if(array[1].includes("`")){
  array[1]=array[1].replace(/`/g, ",");
  }
  if(array[0].includes("`")){
   array[0]=array[0].replace(/`/g, ",");
   }
 if(array[0]==value){ location.href=array[1]; appname=array[0]}
}
if(appname==""){reply.innerHTML="invalid app name"}
else{reply.innerHTML="opening "+appname}
}

let timervalue2box = document.getElementById("timervalue2box");
let timervaluebox = document.getElementById("timervaluebox");
let bset1 = document.getElementById("buttonset1");
let bset2 = document.getElementById("buttonset2");
let timervalues = document.getElementById("timervalues");
let timervaluem = document.getElementById("timervaluem");
let timervalueh = document.getElementById("timervalueh");
player.src=null
let timervalue2s = document.getElementById("timervalue2s");
let timervalue2m = document.getElementById("timervalue2m");
let timervalue2h = document.getElementById("timervalue2h");
let start2 = document.getElementById("start2");
let start3 = document.getElementById("start3");
let pause2 = document.getElementById("pause2");
let start21 = document.getElementById("start21");
let start31 = document.getElementById("start31");
let pause21 = document.getElementById("pause21");
let stop2 = document.getElementById("stop2");
let range = document.getElementById("range");
timervalues.value=1;
timervaluem.value=1;
timervalueh.value=1;
let on2 = false;
let pause = false;
 let pauset = false
range.addEventListener("click", timermode)
function timermode(){
  if(range.value==1){timervaluebox.style.display="flex"; timervalue2box.style.display="none"; bset2.style.display="flex"; bset1.style.display="none"}
  else if(range.value==0){timervalue2box.style.display="flex"; timervaluebox.style.display="none"; bset1.style.display="flex"; bset2.style.display="none"}
}
window.addEventListener("online", ()=>{
  document.getElementById("offmodetxt").style.display="flex"
  document.getElementById("offmodetxt").style.backgroundColor="rgb(0, 115, 255)"
  document.getElementById("offmodetxt").innerHTML="offline mode turned off"
  setTimeout(()=>{document.getElementById("offmodetxt").style.display="none"}, 2000)
})
window.addEventListener("offline", ()=>{
document.getElementById("offmodetxt").style.display="flex"
document.getElementById("offmodetxt").style.backgroundColor="rgb(72, 68, 68)"
document.getElementById("offmodetxt").innerHTML="offline mode turned on"
setTimeout(()=>{document.getElementById("offmodetxt").style.display="none"}, 2000)
})

let fname =""
let brno = ""
let flength=""
let brlength=""
let gap = 0
let focuspause = false
document.getElementById("focusbtn").addEventListener("click", ()=>{
 if(sitch==0){document.getElementById("musiccontrol").style.display="none";
 document.getElementById("focusctrl").style.display="flex"
 document.getElementById("focustabs").style.display="flex"
 document.getElementById("timebox").style.display="none"
 document.getElementById("fctimebox").style.display="flex"

if(window.innerWidth<750){ document.getElementById("fcclose").style.display="block"
  document.getElementById("focustabs").style.top="20px"
  if(window.innerHeight<650){document.getElementById("focusctrl").style.position="absolute"
 document.getElementById("focusctrl").style.bottom="20px"}
 if(window.innerHeight<540){
   document.getElementById("focusctrl").style.bottom="60px"
 }
 if(window.innerHeight<530){  document.getElementById("focustabs").style.display="none"
 document.getElementById("focusctrl").style.bottom="100px"}}

 if(focusv!=""){document.getElementById("fcadd").style.display="none"; document.getElementById("fcpref").style.display="flex"}
  sitch=1}
 else{document.getElementById("musiccontrol").style.display="flex";
 document.getElementById("focusctrl").style.display="none"
 document.getElementById("focustabs").style.display="none"
 document.getElementById("fctimebox").style.display="none"
 document.getElementById("timebox").style.display="flex"
 document.getElementById("fcclose").style.display="none"
  ;sitch=0

    document.getElementById("timebox").style.marginLeft="auto"
    document.getElementById("timebox").style.marginRight="auto"
    document.getElementById("timebox").style.border=" 2px solid white"
  }
})

document.getElementById("fcstart").addEventListener("click", ()=>{
fname=document.getElementById("fcname").value
brno=parseInt(document.getElementById("fcbreakno").value)+1
let br = parseInt(document.getElementById("fcbreakno").value)
if(document.getElementById("fcsel1").value=="hour"){flength=parseInt(document.getElementById("fclength").value)*60}
else{flength=parseInt(document.getElementById("fclength").value)}
if(document.getElementById("fcsel2").value=="hour"){brlength=parseInt(document.getElementById("fcbreak").value)*60}
else{brlength=parseInt(document.getElementById("fcbreak").value)}
console.log(flength); console.log(brlength); console.log(brno); console.log(fname)

document.getElementById("fcadd").style.display="none"
document.getElementById("fcpref").style.display="flex"
document.getElementById("fcitem").innerHTML=fname
gap=parseInt(flength/brno)
let initialgap = gap
document.getElementById("fcpro").max=gap
gap=gap-1
console.log(gap)
document.getElementById("timeremaining").innerHTML=gap+1
if(br!=0){document.getElementById("breaktxt").innerHTML="break in : "+(gap+1)+"min"}
else{document.getElementById("breaktxt").innerHTML="no break"}
let sec = 60
document.getElementById("focustime").innerHTML=gap+" min, "+sec+" sec"
    document.getElementById("fcelapsedtxt").innerHTML="time elapsed : "+(initialgap-(gap+1))+" min, break in : "+(gap+1)+" min"
    document.getElementById("fcltime").innerHTML=gap+1
    if(br==0){ document.getElementById("fcelapsedtxt").innerHTML="time elapsed : "+(initialgap-(gap+1))+" min"}

let provalue = 0
//interval
function interval(){let finter2 = ""
  let finter1 = setInterval(()=>{if(focuspause==false){
  sec=sec-1
  let sec2 = 60-sec
  document.getElementById("fcpro").value=provalue+(sec2/60)
  document.getElementById("focustime").innerHTML=gap+" min, "+sec+" sec"
      document.getElementById("fcelapsedtxt").innerHTML="time elapsed : "+(initialgap-(gap+1))+" min, break in : "+(gap+1)+" min"
      document.getElementById("fcltime").innerHTML=gap+1
      if(br==0){ document.getElementById("fcelapsedtxt").innerHTML="time elapsed : "+(initialgap-(gap+1))+" min"}
if(sec<30){if(br!=0){document.getElementById("breaktxt").innerHTML="break in : "+gap+"min"}
else{document.getElementById("breaktxt").innerHTML="no break"}; document.getElementById("timeremaining").innerHTML=gap
}
if(sec==0){
  sec=60
gap=gap-1
document.getElementById("focustime").innerHTML=gap+" min, "+sec+" sec"
    document.getElementById("fcelapsedtxt").innerHTML="time elapsed : "+(initialgap-(gap+1))+" min, break in : "+(gap+1)+" min"
    document.getElementById("fcltime").innerHTML=gap+1
    if(br==0){ document.getElementById("fcelapsedtxt").innerHTML="time elapsed : "+(initialgap-(gap+1))+" min"}
document.getElementById("timeremaining").innerHTML=gap+1
let gap2 = initialgap-(gap+1)
let value = gap2
document.getElementById("fcpro").value=value
provalue=value
if(br!=0){document.getElementById("breaktxt").innerHTML="break in : "+(gap+1)+"min"}
else{document.getElementById("breaktxt").innerHTML="no break"}
if(gap==-1 && br==0){
  document.getElementById("focustime").innerHTML="session end"
document.getElementById("timeremaining").innerHTML="end"
document.getElementById("breaktxt").innerHTML="no breaks"
document.getElementById("fccnl").innerHTML="finish"
document.getElementById("fcpause").style.backgroundColor="grey"
clearInterval(finter1)
}
if(gap==-1){
 
let sec12 = 60
document.getElementById("fcpro").max=brlength
document.getElementById("fcpro").value=0
brlength=brlength-1
console.log(brlength)
document.getElementById("timeremaining").innerHTML=brlength+1
document.getElementById("breaktxt").innerHTML="break ends in : "+(brlength+1)+"min"
document.getElementById("focustime").innerHTML="break start"
document.getElementById("fcelapsedtxt").innerHTML="break ends in : "+(brlength+1)+" min"
   document.getElementById("fcltime").innerHTML=brlength+1
document.getElementById("focusheader").innerHTML="break"
document.getElementById("battsound").play()
let initialgap2=brlength+1
  let provalue2=0
 finter2 = setInterval(()=>{if(focuspause==false){
sec12=sec12-1
console.log(sec12)
let sec2 = 60-sec12
document.getElementById("fcpro").value=provalue2+(sec2/60)
document.getElementById("focustime").innerHTML=brlength+" min, "+sec12+" sec"
if(sec12<30){document.getElementById("breaktxt").innerHTML="break ends in : "+brlength+"min"
document.getElementById("fcelapsedtxt").innerHTML="break ends in : "+(brlength+1)+" min"
   document.getElementById("fcltime").innerHTML=brlength+1
 document.getElementById("timeremaining").innerHTML=brlength
}
if(sec12==0){
brlength=brlength-1
console.log(brlength)
console.log(sec12)
sec12=60
document.getElementById("timeremaining").innerHTML=brlength+1
document.getElementById("breaktxt").innerHTML="break ends in : "+(brlength+1)+"min"
document.getElementById("fcelapsedtxt").innerHTML="break ends in : "+(brlength+1)+" min"
   document.getElementById("fcltime").innerHTML=brlength+1
document.getElementById("focustime").innerHTML=brlength+" min, "+sec12+" sec"
let gap2 = initialgap2-(brlength+1)
let value = gap2
document.getElementById("fcpro").value=value
provalue2=value
if(brlength==-1){
   gap=initialgap
  document.getElementById("fcpro").max=gap
  document.getElementById("fcpro").value=0
  gap=gap-1
  br=br-1
  document.getElementById("timeremaining").innerHTML=gap+1
if(br!=0){document.getElementById("breaktxt").innerHTML="break in : "+(gap+1)+"min"; document.getElementById("fcelapsedtxt").innerHTML="elapsed time : "+(initialgap-(gap+1))+" min, break in : "+(gap+1)+" min"}
else{document.getElementById("breaktxt").innerHTML="no break"; document.getElementById("fcelapsedtxt").innerHTML="elapsed time : "+(initialgap-(gap+1))+" min"}

 sec = 60
document.getElementById("focustime").innerHTML="break end"
 provalue = 0
 document.getElementById("focusheader").innerHTML="focus mode"
 document.getElementById("battsound").play()
 brlength=initialgap2
interval();
clearInterval(finter2)}
}}
}, 1000)
if(gap==-1 && br==0){  document.getElementById("focustime").innerHTML="session end"
document.getElementById("timeremaining").innerHTML="end"
document.getElementById("breaktxt").innerHTML="no breaks"
document.getElementById("focusheader").innerHTML="focus mode"
  clearInterval(finter2)}
clearInterval(finter1)
document.getElementById("fcelapsedtxt").innerHTML="focus session ended"
}
}}
}, 1000)
document.getElementById("fccnl").addEventListener("click", ()=>{
clearInterval(finter1)
clearInterval(finter2)
document.getElementById("fcadd").style.display="flex"
document.getElementById("fcelapsedtxt").innerHTML="no current focus session"
document.getElementById("fcpref").style.display="none"
document.getElementById("fcinfo").style.display="none"
document.getElementById("fcmusic").style.display="none"
flength=""
})}; interval(); 
})
let fcpause = 0
document.getElementById("fcpause").addEventListener("click", ()=>{
if(fcpause==0){focuspause=true; fcpause=1; document.getElementById("fcpause").innerHTML="unpause"}
else{focuspause=false; fcpause=0 ; document.getElementById("fcpause").innerHTML="pause"}
})

document.getElementById("fcbreak").addEventListener("input", ()=>{
if(document.getElementById("fcbreak").value!="" && document.getElementById("fclength").value!="" && document.getElementById("fcbreakno").value!=""){
  let value = 0
  let value1 = 0
  let value2 = 0
  if(document.getElementById("fcsel1").value=="hour"){value1=parseInt(document.getElementById("fclength").value)*60}
  else{value1=parseInt(document.getElementById("fclength").value)}
  if(document.getElementById("fcsel2").value=="hour"){value2=parseInt(document.getElementById("fcbreak").value)*60}
  else{value2=parseInt(document.getElementById("fcbreak").value)}
   value = parseInt(document.getElementById("fcbreakno").value)
   value2=value2*value
   value1=value2+value1
  document.getElementById("totalfctime").innerHTML="total focus time : "+value1+" min"
}
})
document.getElementById("fcbreakno").addEventListener("input", ()=>{
if(document.getElementById("fcbreak").value!="" && document.getElementById("fclength").value!="" && document.getElementById("fcbreakno").value!=""){
  let value = 0
  let value1 = 0
  let value2 = 0
  if(document.getElementById("fcsel1").value=="hour"){value1=parseInt(document.getElementById("fclength").value)*60}
  else{value1=parseInt(document.getElementById("fclength").value)}
  if(document.getElementById("fcsel2").value=="hour"){value2=parseInt(document.getElementById("fcbreak").value)*60}
  else{value2=parseInt(document.getElementById("fcbreak").value)}
   value = parseInt(document.getElementById("fcbreakno").value)
   value2=value2*value
   value1=value2+value1
  document.getElementById("totalfctime").innerHTML="total focus time : "+value1+" min"
}
})
document.getElementById("fclength").addEventListener("input", ()=>{
if(document.getElementById("fcbreak").value!="" && document.getElementById("fclength").value!="" && document.getElementById("fcbreakno").value!=""){
  let value = 0
  let value1 = 0
  let value2 = 0
  if(document.getElementById("fcsel1").value=="hour"){value1=parseInt(document.getElementById("fclength").value)*60}
  else{value1=parseInt(document.getElementById("fclength").value)}
  if(document.getElementById("fcsel2").value=="hour"){value2=parseInt(document.getElementById("fcbreak").value)*60}
  else{value2=parseInt(document.getElementById("fcbreak").value)}
   value = parseInt(document.getElementById("fcbreakno").value)
   value2=value2*value
   value1=value2+value1
  document.getElementById("totalfctime").innerHTML="total focus time : "+value1+" min"
}
})
document.getElementById("fcsel2").addEventListener("input", ()=>{
if(document.getElementById("fcbreak").value!="" && document.getElementById("fclength").value!="" && document.getElementById("fcbreakno").value!=""){
  let value = 0
  let value1 = 0
  let value2 = 0
  if(document.getElementById("fcsel1").value=="hour"){value1=parseInt(document.getElementById("fclength").value)*60}
  else{value1=parseInt(document.getElementById("fclength").value)}
  if(document.getElementById("fcsel2").value=="hour"){value2=parseInt(document.getElementById("fcbreak").value)*60}
  else{value2=parseInt(document.getElementById("fcbreak").value)}
   value = parseInt(document.getElementById("fcbreakno").value)
   value2=value2*value
   value1=value2+value1
  document.getElementById("totalfctime").innerHTML="total focus time : "+value1+" min"
}
})
document.getElementById("fcsel1").addEventListener("input", ()=>{
if(document.getElementById("fcbreak").value!="" && document.getElementById("fclength").value!="" && document.getElementById("fcbreakno").value!=""){
  let value = 0
  let value1 = 0
  let value2 = 0
  if(document.getElementById("fcsel1").value=="hour"){value1=parseInt(document.getElementById("fclength").value)*60}
  else{value1=parseInt(document.getElementById("fclength").value)}
  if(document.getElementById("fcsel2").value=="hour"){value2=parseInt(document.getElementById("fcbreak").value)*60}
  else{value2=parseInt(document.getElementById("fcbreak").value)}
   value = parseInt(document.getElementById("fcbreakno").value)
   value2=value2*value
   value1=value2+value1
  document.getElementById("totalfctime").innerHTML="total focus time : "+value1+" min"
}
})
document.getElementById("closebtn").addEventListener("click", ()=>{
   start=false
  document.getElementById("sleepscreen").style.display="none"
})
document.getElementById("musictab").addEventListener("click", ()=>{
  document.getElementById("focusctrl").style.display="flex"

  if(window.innerWidth<750){  document.getElementById("fcclose").style.display="block"
  if(window.innerHeight<650){document.getElementById("focusctrl").style.position="absolute"
  document.getElementById("focusctrl").style.bottom="20px"}
  if(window.innerHeight<540){
    document.getElementById("focusctrl").style.bottom="60px"
  }
  if(window.innerHeight<530){  document.getElementById("focustabs").style.display="none"
  document.getElementById("focusctrl").style.bottom="100px"}}

  if(flength!=""){document.getElementById("fcpref").style.display="none"}
  else{document.getElementById("fcadd").style.display="none"}
  document.getElementById("fcmusic").style.display="flex"
  document.getElementById("fcinfo").style.display="none"
  document.getElementById("preftab").style.borderBottom="none"
  document.getElementById("musictab").style.borderBottom="1px solid white"
  document.getElementById("infotab").style.borderBottom="none"})


document.getElementById("preftab").addEventListener("click", ()=>{
  document.getElementById("focusctrl").style.display="flex"
  
  if(window.innerWidth<750){document.getElementById("fcclose").style.display="block"
  if(window.innerHeight<650){document.getElementById("focusctrl").style.position="absolute"
  document.getElementById("focusctrl").style.bottom="20px"}
  if(window.innerHeight<540){
    document.getElementById("focusctrl").style.bottom="60px"
  }
  if(window.innerHeight<530){  document.getElementById("focustabs").style.display="none"
  document.getElementById("focusctrl").style.bottom="100px"}}
  if(flength!=""){document.getElementById("fcpref").style.display="flex"}
  else{document.getElementById("fcadd").style.display="flex"}
  document.getElementById("fcmusic").style.display="none"
  document.getElementById("fcinfo").style.display="none"
  document.getElementById("preftab").style.borderBottom="1px solid white"
  document.getElementById("musictab").style.borderBottom="none"
  document.getElementById("infotab").style.borderBottom="none"
})
document.getElementById("infotab").addEventListener("click", ()=>{
  document.getElementById("focusctrl").style.display="flex"

  if(window.innerWidth<750){  document.getElementById("fcclose").style.display="block"
    if(window.innerHeight<650){document.getElementById("focusctrl").style.position="absolute"
  document.getElementById("focusctrl").style.bottom="20px"}
  if(window.innerHeight<540){
    document.getElementById("focusctrl").style.bottom="60px"
  }
  if(window.innerHeight<530){  document.getElementById("focustabs").style.display="none"
  document.getElementById("focusctrl").style.bottom="100px"}}
  if(flength!=""){document.getElementById("fcpref").style.display="none"}
  else{document.getElementById("fcadd").style.display="none"}
  document.getElementById("fcpref").style.display="none"
  document.getElementById("fcmusic").style.display="none"
  document.getElementById("fcinfo").style.display="flex"
  document.getElementById("preftab").style.borderBottom="none"
  document.getElementById("musictab").style.borderBottom="none"
  document.getElementById("infotab").style.borderBottom="1px solid white"
})
document.getElementById("notelink").addEventListener("click", ()=>{
shown()
document.getElementById("fclink").style.display="flex"
document.getElementById("sleepscreen").style.display="none"
})
document.getElementById("calclink").addEventListener("click", ()=>{
showc()
document.getElementById("fclink").style.display="flex"
document.getElementById("sleepscreen").style.display="none"
})
document.getElementById("musiclink").addEventListener("click", ()=>{
showm()
document.getElementById("fclink").style.display="flex"
document.getElementById("sleepscreen").style.display="none"
})
document.getElementById("fcltime").addEventListener("click", ()=>{
hide()
document.getElementById("fclink").style.display="none"
document.getElementById("sleepscreen").style.display="block"
})
document.getElementById("fclcnl").addEventListener("click", ()=>{
document.getElementById("fccnl").click()
})
document.getElementById("fclpause").addEventListener("click", ()=>{
  document.getElementById("fcpause").click()
})
let playing = false
document.getElementById("mcplay").addEventListener("click", ()=>{
  document.getElementById("fcplaysong").click()
  })
document.getElementById("fcplaysong").addEventListener("click", ()=>{start=false;
  console.log(player.src)
if(player.src.includes("null") || player.src.includes("undefined")){mindex=0; console.log("pppppppppppppppppppppppppppppppppppppppppppppppppppppp")
player.src = array[mindex]
player.play()
 console.log(player);
document.getElementById("fcplayingmusic").innerHTML="playing : "+names[mindex]
document.getElementById("fcsongtxt").innerHTML="playing : "+names[mindex]
document.getElementById("songdur").innerHTML="00:00/"+player.duration
document.getElementById("songpro").value=0
document.getElementById("songpro").max=parseInt(player.duration)}
else if(playing==false){player.play(); playing=true}
else if(playing==true){player.pause(); playing=false}
setInterval(()=>{
  document.getElementById("songdur").innerHTML=parseInt(player.currentTime)+" sec"+"/"+parseInt(player.duration)+" sec"
  document.getElementById("songpro").max=parseInt(player.duration)
  document.getElementById("songpro").value=parseInt(player.currentTime)
  console.log(player.played)
}, 1000)
})
document.getElementById("mcnext").addEventListener("click", ()=>{
  document.getElementById("fcnextsong").click()
  })
document.getElementById("fcnextsong").addEventListener("click", ()=>{start=false;
  document.getElementById("mforward").click() 
setInterval(()=>{
  document.getElementById("songdur").innerHTML=parseInt(player.currentTime)+" sec"+"/"+parseInt(player.duration)+" sec"
  document.getElementById("songpro").max=parseInt(player.duration)
  document.getElementById("songpro").value=parseInt(player.currentTime)
  console.log(player.played)
}, 1000)
})
document.getElementById("mcback").addEventListener("click", ()=>{
document.getElementById("fcprevsong").click()
})
document.getElementById("fcprevsong").addEventListener("click", ()=>{start=false;
  document.getElementById("mback").click()  
setInterval(()=>{
  document.getElementById("songdur").innerHTML=parseInt(player.currentTime)+" sec"+"/"+parseInt(player.duration)+" sec"
  document.getElementById("songpro").max=parseInt(player.duration)
  document.getElementById("songpro").value=parseInt(player.currentTime)
  console.log(player.played)
}, 1000)
})
document.getElementById("fcvolumetxt").innerHTML="volume : "+player.volume*100
player.addEventListener("volumechange", ()=>{document.getElementById("fcvolumetxt").innerHTML="volume : "+player.volume*100})
start21.addEventListener("click", timer)
function timming(){
  document.getElementById("stop2").click()
  let place = chattext.value.indexOf("time")
  let end = ""
  if(chattext.value.includes("min")){end=chattext.value.indexOf("min")}
  else if(chattext.value.includes("hour")){end=chattext.value.indexOf("hour")}
  else if(chattext.value.includes("sec")){end=chattext.value.indexOf("sec")}
  else{}
  let value = chattext.value.slice(place+5, end-1)
   console.log(value)
  if(chattext.value.includes("min")){document.getElementById("timervalue2m").value=value; document.getElementById("start2").click()}
  else if(chattext.value.includes("hour")){document.getElementById("timervalue2h").value=value; document.getElementById("start2").click()}
  else if(chattext.value.includes("sec")){document.getElementById("timervalue2s").value=value; document.getElementById("start2").click()}
  else{reply.innerHTML="improper format"}
}
function timer(){
let inter = setInterval(()=>{if(pause==false){if(timervalues.value==60){if(timervaluem.value<10){timervaluem.innerHTML="0"+timervaluem.value++}
else{timervaluem.innerHTML=timervaluem.value++}
  timervalues.value=0};
if(timervaluem.value==60){if(timervalueh.value<10){timervalueh.innerHTML="0"+timervalueh.value++}
else{timervalueh.innerHTML=timervalueh.value++}
   timervaluem.value=0};

if(timervalues.value<10){timervalues.innerHTML="0"+timervalues.value++}
else{timervalues.innerHTML=timervalues.value++}}}, 1000);
start21.style.display="none"
stop21.style.display="block";

stop21.addEventListener("click", timerstop)
function timerstop(){
clearInterval(inter)
start21.style.display="block"
stop21.style.display="none"
timervalues.innerHTML="00";
timervalues.value=1
timervaluem.innerHTML="00";
timervaluem.value=1
timervalueh.innerHTML="00";
timervalueh.value=1}

pause21.addEventListener("click", timerpause)
function timerpause(){
pause=true
  start31.style.display="block"
  stop21.style.display="none"
}
start31.addEventListener("click", timerstart)
function timerstart(){
if(start21.style.display=="none"){pause=false
  start31.style.display="none"
  stop21.style.display="block"
}}}

start2.addEventListener("click", timer2)
function timer2(){
  let seconds = parseInt(timervalue2s.value)
  let minutes = parseInt(timervalue2m.value)
  let hours = parseInt(timervalue2h.value)
  let inter = setInterval(()=>{if(pauset==false){
    if(seconds==0 && minutes>0){minutes = minutes-1; if(minutes<10){timervalue2m.value="0"+minutes}
else{timervalue2m.value=minutes}
  seconds=60};
if(minutes==0 && hours>0){hours = hours-1; if(hours<10){ timervalue2h.value="0"+hours}
else{timervalue2h.value=hours}
minutes=60;};
if(seconds==1 && minutes==0 && hours==0){stop2.click(); document.getElementById("timersound").play()}

if(seconds>0){seconds = seconds-1; if(seconds<10){timervalue2s.value="0"+seconds}
else{timervalue2s.value=seconds}}}}, 1000);
start2.style.display="none"
stop2.style.display="block";

stop2.addEventListener("click", timerstop)
function timerstop(){
clearInterval(inter)
start2.style.display="block"
stop2.style.display="none"
timervalue2s.value="00";
seconds=0
timervalue2m.value="00";
minutes=0
timervalue2h.value="00";
hours=0

}
pause2.addEventListener("click", timerpause)
function timerpause(){
pauset=true
  start3.style.display="block"
  stop2.style.display="none"

}
start3.addEventListener("click", timerstart)
function timerstart(){
if(start2.style.display=="none"){pauset=false
  start3.style.display="none"
  stop2.style.display="block"}
}

}

document.getElementById("plogbtn").addEventListener("click", ()=>{
  document.getElementById("blank").style.display="flex";
  document.getElementById("phonelog").style.display="flex";
  document.getElementById("emaillog").style.display="none";
});
document.getElementById("elogbtn").addEventListener("click", ()=>{
  document.getElementById("blank").style.display="flex";
  document.getElementById("emaillog").style.display="flex";
  document.getElementById("phonelog").style.display="none";
});
document.getElementById("plogcnl").addEventListener("click", ()=>{
  document.getElementById("blank").style.display="none";
  document.getElementById("emaillog").style.display="none";
  document.getElementById("phonelog").style.display="none";
});
document.getElementById("elogcnl").addEventListener("click", ()=>{
  document.getElementById("blank").style.display="none";
  document.getElementById("emaillog").style.display="none";
  document.getElementById("phonelog").style.display="none";
});
document.getElementById("alogcnl").addEventListener("click", ()=>{
  document.getElementById("blank").style.display="none";
  document.getElementById("applog").style.display="none";
  document.getElementById("phonelog").style.display="none";
});
document.getElementById("alogbtn").addEventListener("click", ()=>{
  if(tipsarray[6]==0){document.getElementById("tip").style.display="flex"; document.getElementById("tiptxt").innerHTML="the app log is used to save your apps information so astro can open those apps in the future, to add a new app info visit our app log documentation before attempting to proceed"; document.getElementById("tip").style.left="50px"; document.getElementById("tip").style.top="150px"
  setTimeout(() => {
    document.getElementById("tip").style.display="none"
  }, 11000);
    tipsarray[6]=1; localStorage.setItem("tips", tipsarray)}
  document.getElementById("blank").style.display="flex";
  document.getElementById("applog").style.display="flex";
  document.getElementById("phonelog").style.display="none";
});
settingk.addEventListener("click", setting)
function setting (){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="block";
title.innerHTML="settings";
}
document.getElementById("save2").addEventListener("click", save);



function save2 (){
  localStorage.setItem("state4", dtime.value) 
  localStorage.setItem("state5", dtime2.value) 
  localStorage.setItem("state6", dtime3.value) 
  localStorage.setItem("state7", dvalue1.value) 
  localStorage.setItem("state8", dvalue2.value) 
  localStorage.setItem("state9", dvalue3.value) 
  localStorage.setItem("state15", dtime4.value) 
  localStorage.setItem("state16", dtime5.value) 
  localStorage.setItem("state17", dtime6.value) 
  localStorage.setItem("state18", dvalue4.value) 
  localStorage.setItem("state19", dvalue5.value) 
  localStorage.setItem("state20", dvalue6.value) 
  window.alert("reminders added")
}
function save3 (){
  localStorage.setItem("state10", note1.value) 
  localStorage.setItem("state11", note2.value) 
  localStorage.setItem("state12", note3.value) 
  localStorage.setItem("state21", note4.value) 
  localStorage.setItem("state22", note5.value) 
  localStorage.setItem("state23", note6.value) 
  window.alert("notes added")
}
function save4 (){
  localStorage.setItem("state13", scheduelsvalue.value) 
  window.alert("schedule applied")
}
function save(){
 battlevfull = 90
 battlevlow = 20
 voiceon = "1"
 remindersound = "sound 1"
 duration = "10"
 alarmsound = "alarm 1"
 snoozetime = "5"
 checklistf = "false"
 oneclickf = "true"
localStorage.setItem("battlevfull", battlevfull)
localStorage.setItem("battlevlow", battlevlow)
localStorage.setItem("voiceon", voiceon)
localStorage.setItem("remindersound", remindersound)
localStorage.setItem("duration", duration)
localStorage.setItem("alarmsound", alarmsound)
localStorage.setItem("checklistf", checklistf)
localStorage.setItem("state1", "3 hour")

localStorage.setItem("oneclickf", oneclickf)
window.alert("settings saved")
}
document.getElementById("elogadd").addEventListener("click", ()=>{
let index = emaillog.length
  emaillog[index]=""
  let create1 = document.createElement("input")
  let create2 = document.createElement("p")
  let create3 = document.createElement("input")
  let create4 = document.createElement("div")
  create4.id="elogdiv"
  create2.id="dividing"
  create1.className="email"
  create3.className="emailname"
  create3.placeholder="name"
  create1.placeholder="email"
  create1.id="email"+index
  create3.id="emailname"+index
  create4.append(create3)
  create4.append(create2)
  create4.append(create1)
  document.getElementById("elogscroll").append(create4)
  document.getElementById("emailname"+index).addEventListener("focusout", ()=>{
    let e =  document.getElementById("emailname"+index).value
    if(document.getElementById("emailname"+index).value.includes("|")){window.alert("please remove all '|' case from your text"); document.getElementById("emailname"+index).value=""}
    else if(document.getElementById("emailname"+index).value.includes("@")){window.alert("you can't use @ in the email name"); document.getElementById("emailname"+index).value=""}
    else{if(document.getElementById("emailname"+index).value.includes(",")){
     e=document.getElementById("emailname"+index).value.replace(/,/g, "`");
       console.log(document.getElementById("email"+index).value)}
    let id2 =   document.getElementById("emailname"+index).id
    let start = parseInt(id2.slice(9, )) 
  if(emaillog[start].includes("|")){  let array = emaillog[start].split("|")
  array[0]=e
emaillog[start]=array[0]+"|"+array[1]}
else{
let y = document.getElementById("email"+index).value
emaillog[start]=e+"|"+y
}
console.log(emaillog)
localStorage.setItem("emaillog", emaillog)}}) 

document.getElementById("email"+index).addEventListener("focusout", ()=>{
  let e =  document.getElementById("email"+index).value
  if(document.getElementById("email"+index).value.includes("|")){window.alert("please remove all '|' case from your text"); document.getElementById("email"+index).value=""}
  else{if(document.getElementById("email"+index).value.includes(",")){
   e=document.getElementById("email"+index).value.replace(/,/g, "`");
     console.log(document.getElementById("email"+index).value)}
     let id2 =   document.getElementById("email"+index).id
  let start = parseInt(id2.slice(5, )) 
if(emaillog[start].includes("|")){  let array = emaillog[start].split("|")
array[1]=e
emaillog[start]=array[0]+"|"+array[1]}
else{let p = document.getElementById("emailname"+index).value

emaillog[start]=p+"|"+e
}
console.log(emaillog)
localStorage.setItem("emaillog", emaillog)}})
})

document.getElementById("alogadd").addEventListener("click", ()=>{
let index = applog.length
  applog[index]=""
  let create1 = document.createElement("input")
  let create2 = document.createElement("p")
  let create3 = document.createElement("input")
  let create4 = document.createElement("div")
  create4.id="alogdiv"
  create2.id="dividing"
  create1.className="appurl"
  create3.className="appname"
  create3.placeholder="app name"
  create1.placeholder="app custom URL scheme"
  create1.id="appurl"+index
  create3.id="appname"+index
  create4.append(create3)
  create4.append(create2)
  create4.append(create1)
  document.getElementById("alogscroll").append(create4)
  document.getElementById("appname"+index).addEventListener("focusout", ()=>{
    let e =  document.getElementById("appname"+index).value
    if(document.getElementById("appname"+index).value.includes("|")){window.alert("please remove all '|' case from your app name"); document.getElementById("appname"+index).value=""}
    else{if(document.getElementById("appname"+index).value.includes(",")){
     e=document.getElementById("appname"+index).value.replace(/,/g, "`");
       console.log(document.getElementById("appname"+index).value)}
    let id2 =   document.getElementById("appname"+index).id
    let start = parseInt(id2.slice(7, )) 
  if(applog[start].includes("|")){  let array = applog[start].split("|")
  array[0]=e
applog[start]=array[0]+"|"+array[1]}
else{
let y = document.getElementById("appurl"+index).value
applog[start]=e+"|"+y
}

localStorage.setItem("applog", applog);console.log(applog)}}) 

document.getElementById("appurl"+index).addEventListener("focusout", ()=>{
  let e =  document.getElementById("appurl"+index).value
  if(document.getElementById("appurl"+index).value.includes("|")){window.alert("please remove all '|' case from your text"); document.getElementById("appurl"+index).value=""}
  else{if(document.getElementById("appurl"+index).value.includes(",")){
   e=document.getElementById("appurl"+index).value.replace(/,/g, "`");
     console.log(document.getElementById("appurl"+index).value)}
     let id2 =   document.getElementById("appurl"+index).id
  let start = parseInt(id2.slice(6, )) 
if(applog[start].includes("|")){  let array = applog[start].split("|")
array[1]=e
applog[start]=array[0]+"|"+array[1]}
else{let p = document.getElementById("appname"+index).value

applog[start]=p+"|"+e
}

localStorage.setItem("applog", applog);console.log(applog)}})
})
document.getElementById("plogadd").addEventListener("click", ()=>{
  window.alert("this section is adviced for advanced developers. please read the app opening documentation before you continue")
  let index = phonelog.length
  phonelog[index]=""
  let create1 = document.createElement("input")
  let create2 = document.createElement("p")
  let create3 = document.createElement("input")
  let create4 = document.createElement("div")
  create4.id="plogdiv"
  create2.id="dividing"
  create1.className="contact"
  create3.className="contactname"
  create3.placeholder="name"
  create1.placeholder="phone no"
  create1.id="contact"+index
  create3.id="contactname"+index
  create4.append(create3)
  create4.append(create2)
  create4.append(create1)
  document.getElementById("plogscroll").append(create4)
  document.getElementById("contactname"+index).addEventListener("focusout", ()=>{
    let e =  document.getElementById("contactname"+index).value
    if(document.getElementById("contactname"+index).value.includes("|")){window.alert("please remove all '|' case from your text"); document.getElementById("contactname"+index).value=""}
       else{if(document.getElementById("contactname"+index).value.includes(",")){
     e=document.getElementById("contactname"+index).value.replace(/,/g, "`");
       console.log(document.getElementById("contactname"+index).value)}
    let id2 =   document.getElementById("contactname"+index).id
    let start = parseInt(id2.slice(11, )) 
  if(phonelog[start].includes("|")){  let array = phonelog[start].split("|")
  array[0]=e
phonelog[start]=array[0]+"|"+array[1]}
else{
let y = document.getElementById("contact"+index).value
phonelog[start]=e+"|"+y
}
console.log(phonelog)
localStorage.setItem("phonelog", phonelog)}}) 

document.getElementById("contact"+index).addEventListener("focusout", ()=>{
  let e =  document.getElementById("contact"+index).value
  if(document.getElementById("contact"+index).value.includes("|")){window.alert("please remove all '|' case from your text"); document.getElementById("contact"+index).value=""}
  else{if(document.getElementById("contact"+index).value.includes(",")){
   e=document.getElementById("contact"+index).value.replace(/,/g, "`");
     console.log(document.getElementById("contact"+index).value)}
  let id2 =   document.getElementById("contact"+index).id
  let start = parseInt(id2.slice(7, )) 
if(phonelog[start].includes("|")){  let array = phonelog[start].split("|")
array[1]=e
phonelog[start]=array[0]+"|"+array[1]}
else{let p = document.getElementById("contactname"+index).value

phonelog[start]=p+"|"+e
}
console.log(phonelog)
localStorage.setItem("phonelog", phonelog)}})
})
window.addEventListener("load", loadstate)

function loadstate(){
  document.getElementById("scheduletime").value=localStorage.getItem("state1")
  if(document.getElementById("scheduletime").value=="" || document.getElementById("scheduletime").value==null){document.getElementById("scheduletime").value="3 hour"};
if(document.getElementById("scheduletime").value.includes("min")){interval=parseInt(document.getElementById("scheduletime").value)}
else if(document.getElementById("scheduletime").value.includes("hour")){interval=parseInt(document.getElementById("scheduletime").value)*60}
else{interval=180}
console.log(interval)
username.value = localStorage.getItem("state2")
//avalue.innerHTML = localStorage.getItem("state3")
alarmvalue = localStorage.getItem("state3")
alarmcontent = localStorage.getItem("alarmcontent")
remindercontent = localStorage.getItem("remindercontent")
reminderlogic = localStorage.getItem("reminderlogic")
phonelog = localStorage.getItem("phonelog")
emaillog = localStorage.getItem("emaillog")
applog = localStorage.getItem("applog")
notecontent = localStorage.getItem("notecontent")
alarmlogic = localStorage.getItem("alarmlogic")
let newday = localStorage.getItem("newday")
if(newday==null){newday=gdate; localStorage.setItem("newday", newday)}
if(remindercontent==null){remindercontent=[]}
else{remindercontent=remindercontent.split(",")}
console.log(remindercontent)
if(alarmcontent==null){alarmcontent=[]}
else{alarmcontent=alarmcontent.split(",")}
if(reminderlogic==null){reminderlogic=[]}
else{reminderlogic=reminderlogic.split(",")}
if(phonelog==null){phonelog=[]}
else{phonelog=phonelog.split(",")}
if(emaillog==null){emaillog=[]}
else{emaillog=emaillog.split(",")}
if(applog==null){applog=["app store|appstore://", "google chrome|googlechrome://", "google map|comgooglemaps://", "instagram|instagram://", "maps|maps://", "spotify|spotify://", "youtube|youtube://", "whatsapp|whatsapp://",]}
else{applog=applog.split(",")}
console.log(applog)
console.log(reminderlogic)
if(notecontent==null){notecontent=[]}
else{notecontent=notecontent.split(",")}
rrang = localStorage.getItem("rrang")
console.log(rrang)
if(rrang==null || newday!=gdate){rrang=[]; 
  for (let index = 0; index < remindercontent.length; index++) {
rrang[index]="false"
}; localStorage.setItem("rrang", rrang)}
else{rrang=rrang.split(",")}

arang = localStorage.getItem("arang")

if(arang==null || newday!=gdate){arang=[]; 
  for (let index = 0; index < alarmcontent.length; index++) {
arang[index]="false"
}; localStorage.setItem("arang", arang)}
else{arang=arang.split(",")}
console.log(arang)

console.log(rrang)
console.log(notecontent)
console.log(phonelog)
console.log(emaillog)

for (let index = 0; index < applog.length; index++) {
if(applog[index]=="" || applog[index]=="|"){applog.splice(index, 1)}
else{
  let create1 = document.createElement("input")
  let create2 = document.createElement("p")
  let create3 = document.createElement("input")
  let create4 = document.createElement("div")
  create4.id="alogdiv"
  create2.id="dividing"
  create1.className="appurl"
  create3.className="appname"
  create3.placeholder="app name"
  create1.placeholder="app custom URL scheme"
  create1.id="appurl"+index
  create3.id="appname"+index
  let array = applog[index].split("|")
  if(array[1].includes("`")){
  array[1]=array[1].replace(/`/g, ",");
  }
  if(array[0].includes("`")){
   array[0]=array[0].replace(/`/g, ",");
   }
  create1.value=array[1]
  create3.value=array[0]
  create4.append(create3)
  create4.append(create2)
  create4.append(create1)
  document.getElementById("alogscroll").append(create4)
  document.getElementById("appname"+index).addEventListener("focusout", ()=>{
    let e =  document.getElementById("appname"+index).value
    if(document.getElementById("appname"+index).value.includes("|")){window.alert("please remove all '|' case from your app name"); document.getElementById("appname"+index).value=""}
    else{if(document.getElementById("appname"+index).value.includes(",")){
     e=document.getElementById("appname"+index).value.replace(/,/g, "`");
       console.log(document.getElementById("appname"+index).value)}
    let id2 =   document.getElementById("appname"+index).id
    let start = parseInt(id2.slice(7, )) 
  if(applog[start].includes("|")){  let array = applog[start].split("|")
  array[0]=e
applog[start]=array[0]+"|"+array[1]}
else{
let y = document.getElementById("appurl"+index).value
applog[start]=e+"|"+y
}
console.log(applog)
localStorage.setItem("applog", applog)}}) 

document.getElementById("appurl"+index).addEventListener("focusout", ()=>{
  let e =  document.getElementById("appurl"+index).value
  if(document.getElementById("appurl"+index).value.includes("|")){window.alert("please remove all '|' case from your text"); document.getElementById("appurl"+index).value=""}
  else{if(document.getElementById("appurl"+index).value.includes(",")){
   e=document.getElementById("appurl"+index).value.replace(/,/g, "`");
     console.log(document.getElementById("appurl"+index).value)}
     let id2 =   document.getElementById("appurl"+index).id
  let start = parseInt(id2.slice(6, )) 
if(applog[start].includes("|")){  let array = applog[start].split("|")
array[1]=e
applog[start]=array[0]+"|"+array[1]}
else{let p = document.getElementById("appname"+index).value

applog[start]=p+"|"+e
}
console.log(applog)
localStorage.setItem("applog", applog)}})
}
  
}

for (let index = 0; index < emaillog.length; index++) {
  if(emaillog[index]=="|" || emaillog[index]==""){emaillog.splice(index, 1)}
  else{ let create1 = document.createElement("input")
   let create2 = document.createElement("p")
   let create3 = document.createElement("input")
   let create4 = document.createElement("div")
   create4.id="elogdiv"
   create2.id="dividing"
   create1.className="email"
   create3.className="emailname"
   create3.placeholder="name"
   create1.placeholder="email"
   create1.id="email"+index
   create3.id="emailname"+index
   let array = emaillog[index].split("|")
   if(array[1].includes("`")){
   array[1]=array[1].replace(/`/g, ",");
   }
   if(array[0].includes("`")){
    array[0]=array[0].replace(/`/g, ",");
    }
   create1.value=array[1]
   create3.value=array[0]
   create4.append(create3)
   create4.append(create2)
   create4.append(create1)
   document.getElementById("elogscroll").append(create4)
   document.getElementById("emailname"+index).addEventListener("focusout", ()=>{
    let e =  document.getElementById("emailname"+index).value
    if(document.getElementById("emailname"+index).value.includes("|")){window.alert("please remove all '|' case from your text"); document.getElementById("emailname"+index).value=""}
    else if(document.getElementById("emailname"+index).value.includes("@")){window.alert("you can't use @ in the email name"); document.getElementById("emailname"+index).value=""}
    else{if(document.getElementById("emailname"+index).value.includes(",")){
      e=document.getElementById("emailname"+index).value.replace(/,/g, "`");
       console.log(document.getElementById("email"+index).value)}
     let id2 =   document.getElementById("emailname"+index).id
     let start = parseInt(id2.slice(9, )) 
   if(emaillog[start].includes("|")){  let array = emaillog[start].split("|")
   array[0]=e
 emaillog[start]=array[0]+"|"+array[1]}
 else{
 let y = document.getElementById("email"+index).value
 emaillog[start]=e+"|"+y
 }
 console.log(emaillog)
 localStorage.setItem("emaillog", emaillog)}}) 
 
 document.getElementById("email"+index).addEventListener("focusout", ()=>{
  let e =  document.getElementById("email"+index).value
  if(document.getElementById("email"+index).value.includes("|")){window.alert("please remove all '|' case from your text"); document.getElementById("email"+index).value=""}
  else{if(document.getElementById("email"+index).value.includes(",")){
   e=document.getElementById("email"+index).value.replace(/,/g, "`");
     console.log(document.getElementById("email"+index).value)}
   let id2 =   document.getElementById("email"+index).id
   let start = parseInt(id2.slice(5, )) 
 if(emaillog[start].includes("|")){  let array = emaillog[start].split("|")
 array[1]=e
 emaillog[start]=array[0]+"|"+array[1]}
 else{let p = document.getElementById("emailname"+index).value

 emaillog[start]=p+"|"+e
 }
 console.log(emaillog)
 localStorage.setItem("emaillog", emaillog)}})}

 }
for (let index = 0; index < phonelog.length; index++) {
   if(phonelog[index]=="" || phonelog[index]=="|"){phonelog.splice(index, 1)}
else{ let create1 = document.createElement("input")
  let create2 = document.createElement("p")
  let create3 = document.createElement("input")
  let create4 = document.createElement("div")
  create4.id="plogdiv"
  create2.id="dividing"
  create1.className="contact"
  create3.className="contactname"
  create3.placeholder="name"
  create1.placeholder="phone no"
  create1.id="contact"+index
  create3.id="contactname"+index
  let array = phonelog[index].split("|")
  if(array[1].includes("`")){
    array[1]=array[1].replace(/`/g, ",");
    }
    if(array[0].includes("`")){
     array[0]=array[0].replace(/`/g, ",");
     }
  create1.value=array[1]
  create3.value=array[0]
  create4.append(create3)
  create4.append(create2)
  create4.append(create1)
  document.getElementById("plogscroll").append(create4)
  document.getElementById("contactname"+index).addEventListener("focusout", ()=>{
    let e =  document.getElementById("contactname"+index).value
    if(document.getElementById("contactname"+index).value.includes("|")){window.alert("please remove all '|' case from your text"); document.getElementById("contactname"+index).value=""}
       else{if(document.getElementById("contactname"+index).value.includes(",")){
     e=document.getElementById("contactname"+index).value.replace(/,/g, "`");
       console.log(document.getElementById("contactname"+index).value)}
    let id2 =   document.getElementById("contactname"+index).id
    let start = parseInt(id2.slice(11, )) 
  if(phonelog[start].includes("|")){  let array = phonelog[start].split("|")
  array[0]=e
phonelog[start]=array[0]+"|"+array[1]}
else{
let y = document.getElementById("contact"+index).value
phonelog[start]=e+"|"+y
}
console.log(phonelog)
localStorage.setItem("phonelog", phonelog)}}) 

document.getElementById("contact"+index).addEventListener("focusout", ()=>{
  let e =  document.getElementById("contact"+index).value
  if(document.getElementById("contact"+index).value.includes("|")){window.alert("please remove all '|' case from your text"); document.getElementById("contact"+index).value=""}
  else{if(document.getElementById("contact"+index).value.includes(",")){
   e=document.getElementById("contact"+index).value.replace(/,/g, "`");
     console.log(document.getElementById("contact"+index).value)}
  let id2 =   document.getElementById("contact"+index).id
  let start = parseInt(id2.slice(7, )) 
if(phonelog[start].includes("|")){  let array = phonelog[start].split("|")
array[1]=e
phonelog[start]=array[0]+"|"+array[1]}
else{let p = document.getElementById("contactname"+index).value
phonelog[start]=p+"|"+e
}
console.log(phonelog)
localStorage.setItem("phonelog", phonelog)}})}

}
//alarm load start

if(alarmlogic==null){alarmlogic=[]}
else{alarmlogic=alarmlogic.split(",")}
console.log(alarmcontent)
console.log(alarmlogic)
newuser = localStorage.getItem("newuser")
if(newuser==null){newuser=0}

saved = localStorage.getItem("saved")
console.log(saved)
for (let index = 0; index < alarmcontent.length; index++) {
if(alarmcontent[index]=="null"){alarmcontent.splice(index, 1) 

  amount = 0
amount++
  console.log(amount)
  if(alarmcontent.length==0){alarmcontent=[]}
 localStorage.setItem("alarmcontent", alarmcontent)
}
 if(alarmlogic[index]=="null"){  alarmlogic.splice(index, 1);  localStorage.setItem("alarmlogic", alarmlogic)}
}
for (let index = 0; index < alarmcontent.length; index++) {
if(alarmcontent[index]=="null"){alarmcontent.splice(index, 1) 

  amount = 0
amount++
  console.log(amount)
  if(alarmcontent.length==0){alarmcontent=[]}
 localStorage.setItem("alarmcontent", alarmcontent)
}
 if(alarmlogic[index]=="null"){  alarmlogic.splice(index, 1);  localStorage.setItem("alarmlogic", alarmlogic)}
  
}

// alarm rang log
if(arang.length!=alarmcontent.length){
  console.log("change in values alarm")
  let diff = ""
if(arang.length<alarmcontent.length){diff=alarmcontent.length-arang.length;
for (let index = 0; index < diff; index++) {
  arang[arang.length]="false"
}}
else{diff=arang.length-alarmcontent.length;
for (let index = 0; index < diff; index++) {
  arang.splice(arang.length-1, 1)
}}
console.log(diff)
localStorage.setItem("arang", arang)
console.log(arang)
}

for (let index = 0; index < alarmcontent.length; index++) {

if(alarmcontent.length==1 && alarmcontent[0]==""){document.getElementById("emptytxt").style.display="block"}
else if(alarmcontent.length==0){document.getElementById("emptytxt").style.display="block"}
else if(alarmcontent.length>0){
if(alarmcontent[index]!=""){let array = alarmcontent[index].split("|")
let create = document.createElement("div")
let create1 = document.createElement("div")
let create2 = document.createElement("p")
let create3 = document.createElement("p")
let create4 = document.createElement("input")
let create5 = document.createElement("p")
create.className="alarmsdiv"
create1.id="alarmsd"
create2.id="alarmstime"
create3.id="alarmsdays"
create4.className="toggleon"
create5.className="alarmcancel"
create5.innerHTML="+"
create5.id="alarmcancel"+index
create.id="alarmsdiv"+index
create4.id="toggleon"+index
 create.append(create1) 
 create.append(create4) 
 create.append(create5)
 create1.append(create2) 
 create1.append(create3) 
 for (let index = 0; index <= array[1].length; index++) {
 array[1]=array[1].replace("^", ",")
}
 create2.innerHTML=array[1]+" "+array[0]
 create3.innerHTML=array[2]
 create4.type="checkbox"
 if(alarmlogic[index]=="true"){create4.checked=true}
 else{create4.checked=false}
document.getElementById("alarms").append(create)
document.getElementById("toggleon"+index).addEventListener("click", ()=>{
 if(document.getElementById("toggleon"+index).checked==true){ 
  let id =   document.getElementById("toggleon"+index).id
  let start = parseInt(id.slice(8, ))
  console.log(start)
  alarmlogic[start]="true"
  console.log(alarmlogic)
  localStorage.setItem("alarmlogic", alarmlogic)}
else{let id =   document.getElementById("toggleon"+index).id
    let start = parseInt(id.slice(8, ))
    console.log(start)
    alarmlogic[start]="false"
    console.log(alarmlogic)
    localStorage.setItem("alarmlogic", alarmlogic)}
})
document.getElementById("alarmcancel"+index).addEventListener("click", ()=>{
  document.getElementById("alarmsdiv"+index).style.display="none"
  if(alarmcontent.length==0){document.getElementById("emptytxt").style.display="block"}
  let id2 =   document.getElementById("alarmsdiv"+index).id
  let start = parseInt(id2.slice(9, ))
console.log(start)
alarmcontent[start]="null"
alarmlogic[start]="null"
console.log(alarmcontent)
console.log(alarmlogic)
localStorage.setItem("alarmcontent", alarmcontent)
localStorage.setItem("alarmlogic", alarmlogic)
})
}
}}

for (let index = 0; index < alarmcontent.length; index++) {
let array = alarmcontent[index].split("|")
let close = false
setInterval(()=>{
let array1 = array[2].split(".")
console.log(array1)
console.log(array)
let search = false

for (let index = 0; index < array1.length; index++) {
if(array1[index]==generaldate || array[2]==generaldate2){//console.log(true);
   search=true; console.log(search)}
   
}
if((array[0]==alarmtime && search==true && alarmlogic[index]=="true") || timing==true){console.log(array[1])
timing=true;
document.getElementById("snoozebox").style.display="flex";
document.getElementById("timesup").play()
close=true}
if((array[0]==alarmtime && search==true && alarmlogic[index]=="true") || timing2==true ){
  timing2=false
    arang[index]="true"
localStorage.setItem("arang", arang)
let box2 = document.createElement("article");
reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
reply.innerHTML="your "+array[0]+" alarm is active";
array[0]="null"
  let notify = new Notification("alarm", {body: array[1], icon:"computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-44413c43e2dd5f4f467181772ee8a7d5.png"})
  setTimeout(()=>{notify.close()}, 4000)
}
let value1 = alarmtime.split(":")
value1=value1[0]+value1[1]
let value2 =array[0].split(":")
value2=value2[0]+value2[1]
console.log(value1); console.log(value2)
if(arang[index]=="false" && search==true && alarmlogic[index]=="true" && parseInt(value1)>parseInt(value2)){
  let box2 = document.createElement("article");
  reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
reply.innerHTML="you missed your "+array[0]+" alarm";
  console.log(array[1])
  timing=true; search=false; 
  arang[index]="true"
localStorage.setItem("arang", arang)
let notify = new Notification("alarm", {body: "missed alarm : "+array[1], icon:"computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-44413c43e2dd5f4f467181772ee8a7d5.png"})
  document.getElementById("snoozebox").style.display="flex";
  
  document.getElementById("timesup").play()
}
}, 1000)}
// alarm load end

//note load start
for (let index = 0; index < notecontent.length; index++) {
  if(notecontent[index]=="null"){notecontent.splice(index, 1) }}
for (let index = 0; index < notecontent.length; index++) {
  if(notecontent[index]=="null"){notecontent.splice(index, 1) }}

for (let index = 0; index < notecontent.length; index++) {
  if(notecontent.length==1 && notecontent[0]==""){document.getElementById("emptytxt2").style.display="block"}
  else if(notecontent.length==0){document.getElementById("emptytxt2").style.display="block"}
 else if(notecontent.length>0){
  if(notecontent[index]!=""){
  if(notecontent[index].includes("▢") || notecontent[index].includes("▣")){
  let array = notecontent[index].split("|")
  let create = document.createElement("div")
  let create1 = document.createElement("div")
  let create2 = document.createElement("p")
  let create3 = document.createElement("p")
  let create5 = document.createElement("p")

  create.className="notediv"
  create1.className="notechecklist"
  create2.id="notename"
  create3.className="noteshow"
  create3.id="noteshow"+index
  create5.className="notecancel"
create1.id="notechecklist"+index
create5.id="notecancel"+index
create.id="notediv"+index
create3.innerHTML="✒️"
let items = array[1].split("")
console.log(items)
let join = items.join("")
items=join.split("\n")
if(items[items.length-1]==""){items.splice(items.length-1, 1)}
console.log(items)
let p = 0
for (let index1 = 0; index1 < index; index1++) {
p=p+1}
for (let index = 0; index < items.length; index++) {
let create6 = document.createElement("p")
create6.innerHTML=items[index].replace(/~/g, ",")
create6.addEventListener("click", ()=>{
if(create6.innerHTML.includes("▢")){let array2 = create6.innerHTML.replace(/,/g, "~").split("▢")
array2[array2.length-1]="▣"
console.log(array2)
let value = array2.join("")
for (let index3 = 0; index3 < items.length; index3++) {
if(items[index3].includes(create6.innerHTML.replace(/,/g, "~"))){console.log("in"); console.log(index3)
items[index3]=value; console.log(items)
let save = items.join("\n")
save = save.split("");
save = save.join("")
let value2 = array[0]+"|"+save
notecontent[p]=value2
console.log(notecontent)
console.log(save)
localStorage.setItem("notecontent", notecontent)
}}
create6.innerHTML=value.replace(/~/g, ",")
}
else if(create6.innerHTML.includes("▣")){let array2 = create6.innerHTML.replace(/,/g, "~").split("▣")
array2[array2.length-1]="▢"
console.log(array2)
let value = array2.join("")
for (let index3 = 0; index3 < items.length; index3++) {
if(items[index3].includes(create6.innerHTML.replace(/,/g, "~"))){console.log("in"); console.log(index3)
items[index3]=value; console.log(items)
let save = items.join("\n")
save = save.split("");
save = save.join("")
let value2 = array[0]+"|"+save
notecontent[p]=value2
console.log(notecontent)
console.log(save)
localStorage.setItem("notecontent", notecontent)
}}
create6.innerHTML=value.replace(/~/g, ",")}
})
create1.append(create6)}
   create.append(create2) 
   create.append(create3)
   create.append(create5)
   for (let index = 0; index <= array[0].length; index++) {
    array[0]=array[0].replace("^", ",")
   }
   create2.innerHTML=array[0]
   create5.innerHTML="+"
  document.getElementById("notesbox").append(create)
  document.getElementById("notesbox").append(create1)
  document.getElementById("noteshow"+index).addEventListener("click", ()=>{
    if(  document.getElementById("noteshow"+index).innerHTML=="✒️"){document.getElementById("notechecklist"+index).style.display="block";
    document.getElementById("noteshow"+index).innerHTML="✏️"  }
    else{document.getElementById("notechecklist"+index).style.display="none";   document.getElementById("noteshow"+index).innerHTML="✒️"  }
  })
  document.getElementById("notecancel"+index).addEventListener("click", ()=>{
    document.getElementById("notediv"+index).style.display="none"
    document.getElementById("notechecklist"+index).style.display="none"
    if(notecontent.length==0){document.getElementById("emptytxt2").style.display="block"}
    let id2 =   document.getElementById("notediv"+index).id
    let start = parseInt(id2.slice(7, ))
  console.log(start)
  notecontent[start]="null"
  console.log(notecontent)
  localStorage.setItem("notecontent", notecontent)
  })
  }
    else{let array = notecontent[index].split("|")
  let create = document.createElement("div")
  let create1 = document.createElement("textarea")
  let create2 = document.createElement("p")
  let create3 = document.createElement("p")
  let create5 = document.createElement("p")
  create.className="notediv"
  create1.className="notecontent"
  create2.id="notename"
  create3.className="noteshow"
  create3.id="noteshow"+index
  create5.className="notecancel"
create1.id="notecontent"+index
create5.id="notecancel"+index
create.id="notediv"+index
create3.innerHTML="✒️"
   create.append(create2) 
   create.append(create3)
   create.append(create5)
   for (let index = 0; index <= array[0].length; index++) {
    array[0]=array[0].replace("^", ",")
   }
   for (let index = 0; index <= array[1].length; index++) {
    array[1]=array[1].replace("^", ",")
   }
   create2.innerHTML=array[0]
   create1.value=array[1]
   create5.innerHTML="+"
  document.getElementById("notesbox").append(create)
  document.getElementById("notesbox").append(create1)
  document.getElementById("noteshow"+index).addEventListener("click", ()=>{
    if(  document.getElementById("noteshow"+index).innerHTML=="✒️"){document.getElementById("notecontent"+index).style.display="block";
    document.getElementById("noteshow"+index).innerHTML="✏️"  }
    else{document.getElementById("notecontent"+index).style.display="none";   document.getElementById("noteshow"+index).innerHTML="✒️"  }
  })
  document.getElementById("notecontent"+index).addEventListener("focusout", ()=>{
    console.log(notecontent)
    let id2 =   document.getElementById("notecontent"+index).id
    let start = parseInt(id2.slice(11, )) 
    let array = notecontent[start].split("|")
  console.log(start)
  console.log(array)
  array[1]=document.getElementById("notecontent"+index).value
  for (let index = 0; index <= array[1].length; index++) {
    array[1]=array[1].replace(",", "^")
   }
notecontent[start]=array[0]+"|"+array[1]
console.log(notecontent)
localStorage.setItem("notecontent", notecontent)})

document.getElementById("notecancel"+index).addEventListener("click", ()=>{
  document.getElementById("notediv"+index).style.display="none"
  document.getElementById("notecontent"+index).style.display="none"
  if(notecontent.length==0){document.getElementById("emptytxt2").style.display="block"}
  let id2 =   document.getElementById("notediv"+index).id
  let start = parseInt(id2.slice(7, ))
console.log(start)
notecontent[start]="null"
console.log(notecontent)
localStorage.setItem("notecontent", notecontent)

})
}}
}}

//note load end
//reminder load start
for (let index = 0; index < remindercontent.length; index++) {
if(remindercontent[index]=="null"){remindercontent.splice(index, 1) 
 localStorage.setItem("remindercontent", remindercontent)
}
 if(reminderlogic[index]=="null"){  reminderlogic.splice(index, 1);  localStorage.setItem("reminderlogic", reminderlogic)}
}
for (let index = 0; index < remindercontent.length; index++) {
  if(remindercontent[index]=="null"){remindercontent.splice(index, 1) 
   localStorage.setItem("remindercontent", remindercontent)
  }
   if(reminderlogic[index]=="null"){  reminderlogic.splice(index, 1);  localStorage.setItem("reminderlogic", reminderlogic)}
  }
//reminder rang log
if(rrang.length!=remindercontent.length){
  console.log("change in values")
  let diff = ""
if(rrang.length<remindercontent.length){diff=remindercontent.length-rrang.length;
for (let index = 0; index < diff; index++) {
  rrang[rrang.length]="false"
}}
else{diff=rrang.length-remindercontent.length;
for (let index = 0; index < diff; index++) {
  rrang.splice(rrang.length-1, 1)
}}
console.log(diff)
localStorage.setItem("rrang", rrang)
}

for (let index = 0; index < remindercontent.length; index++) {
if(remindercontent.length==1 && remindercontent[0]==""){document.getElementById("emptytxt3").style.display="block"}
else if(remindercontent.length==0){document.getElementById("emptytxt3").style.display="block"}
else if(remindercontent.length>0){
if(remindercontent[index]!=""){let array = remindercontent[index].split("|")
let create = document.createElement("div")
let create2 = document.createElement("p")
let create4 = document.createElement("input")
let create5 = document.createElement("p")
create.className="remindervalue"
create2.id="remindercontenttxt"
create4.className="reminderon"
create5.className="remindercnl"
create5.innerHTML="+"
create5.id="remindercnl"+index
create.id="remindervalue"+index
create4.id="reminderon"+index
 create.append(create2) 
 create.append(create4) 
 create.append(create5)
 for (let index = 0; index <= array[2].length; index++) {
  array[2]=array[2].replace("^", ",")
 }
 create2.innerHTML=array[2]+" "+array[1]
 create4.type="checkbox"
 if(reminderlogic[index]=="true"){create4.checked=true}
 else{create4.checked=false}
document.getElementById("remindersbox").append(create)
document.getElementById("reminderon"+index).addEventListener("click", ()=>{
 if(document.getElementById("reminderon"+index).checked==true){ 
  let id =   document.getElementById("reminderon"+index).id
  let start = parseInt(id.slice(10, ))
  console.log(start)
  reminderlogic[start]="true"
  console.log(reminderlogic)
  localStorage.setItem("reminderlogic", reminderlogic)}
else{let id =   document.getElementById("reminderon"+index).id
    let start = parseInt(id.slice(10, ))
    console.log(start)
    reminderlogic[start]="false"
    console.log(reminderlogic)
    localStorage.setItem("reminderlogic", reminderlogic)}
})
document.getElementById("remindercnl"+index).addEventListener("click", ()=>{
  document.getElementById("remindervalue"+index).style.display="none"
  if(remindercontent.length==0){document.getElementById("emptytxt3").style.display="block"}
  let id2 =   document.getElementById("remindervalue"+index).id
  let start = parseInt(id2.slice(13, ))
console.log(start)
remindercontent[start]="null"
reminderlogic[start]="null"
console.log(remindercontent)
console.log(reminderlogic)
localStorage.setItem("remindercontent", remindercontent)
localStorage.setItem("reminderlogic", reminderlogic)


})
}}}
for (let index = 0; index < remindercontent.length; index++) {
  let array = ""
if(remindercontent[index]!=""){ array = remindercontent[index].split("|")}
setInterval(()=>{
console.log(array)
let search = false
if(array[1].includes(gmon) && parseInt(array[1])==gdate){search=true; }
if(array[1]==generaldate2.padEnd()){search=true}
if((array[0]==alarmtime && search==true && reminderlogic[index]=="true")){console.log(array[2])
  let box2 = document.createElement("article");
  reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
reply.innerHTML="remember to "+array[2]+" "+username.value;
rrang[index]="true"
localStorage.setItem("rrang", rrang)
  document.getElementById("ractivedel").addEventListener("click", ()=>{
    document.getElementById("remindervalue"+index).style.display="none"
    if(remindercontent.length==0){document.getElementById("emptytxt3").style.display="block"}
    let id2 =   document.getElementById("remindervalue"+index).id
    let start = parseInt(id2.slice(13, ))
  console.log(start)
  remindercontent[start]="null"
  reminderlogic[start]="null"
  console.log(remindercontent)
  console.log(reminderlogic)
  localStorage.setItem("remindercontent", remindercontent)
  localStorage.setItem("reminderlogic", reminderlogic)
  document.getElementById("ractivebox").style.display="none"
  })
document.getElementById("ractivebox").style.display="flex";
setTimeout(()=>{document.getElementById("ractivebox").style.display="none";}, durationvalue)
setInterval(()=>{ if(document.getElementById("ractivebox").style.display=="flex"){document.getElementById("remindersound").play()}}, document.getElementById("remindersound").duration)
document.getElementById("ractivetxt").innerHTML=array[2]
let notify = new Notification("reminder", {body: array[2], icon:"5bfc1c0ea645f-2723436d0f517f1d2e2b58510a7b6a72.png"})
if(array[3]=="none"){document.getElementById("ractivecl").style.display="none"}
else{document.getElementById("ractivecl").addEventListener("click", ()=>{
console.log(array[3])
shown();
for (let index = 0; index < notecontent.length; index++) {
let array1 = notecontent[index].split("|")
if(array1[0]==array[3]){document.getElementById("notechecklist"+index).style.display="block"
document.getElementById("noteshow"+index).innerHTML="✏️"}
}
})}; search=false; array[1]="null"; array[0]="null"}

let value1 = alarmtime.split(":")
value1=value1[0]+value1[1]
let value2 =array[0].split(":")
value2=value2[0]+value2[1]
console.log(value1); console.log(value2)
console.log(search)
console.log(parseInt(array[1]))
console.log(reminderlogic[index])
console.log(rrang[index])
if(rrang[index]=="false" && search==true && reminderlogic[index]=="true" && parseInt(value1)>parseInt(value2)){
  let box2 = document.createElement("article");
  reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
reply.innerHTML="remember to "+array[2]+" "+username.value;
  console.log(array[2])
  rrang[index]="true"
  localStorage.setItem("rrang", rrang)
    document.getElementById("ractivedel").addEventListener("click", ()=>{
      document.getElementById("remindervalue"+index).style.display="none"
      if(remindercontent.length==0){document.getElementById("emptytxt3").style.display="block"}
      let id2 =   document.getElementById("remindervalue"+index).id
      let start = parseInt(id2.slice(13, ))
    console.log(start)
    remindercontent[start]="null"
    reminderlogic[start]="null"
    console.log(remindercontent)
    console.log(reminderlogic)
    localStorage.setItem("remindercontent", remindercontent)
    localStorage.setItem("reminderlogic", reminderlogic)
    document.getElementById("ractivebox").style.display="none"
    })
  document.getElementById("ractivebox").style.display="flex";
  setTimeout(()=>{document.getElementById("ractivebox").style.display="none";}, durationvalue)
  setInterval(()=>{ if(document.getElementById("ractivebox").style.display=="flex"){document.getElementById("remindersound").play()}}, document.getElementById("remindersound").duration)
  document.getElementById("ractivetxt").innerHTML="missed reminder : "+array[2]
  let notify = new Notification("reminder", {body: "missed reminder : "+array[2], icon:"5bfc1c0ea645f-2723436d0f517f1d2e2b58510a7b6a72.png"})
  if(array[3]=="none"){document.getElementById("ractivecl").style.display="none"}
  else{document.getElementById("ractivecl").style.display="block"; document.getElementById("ractivecl").addEventListener("click", ()=>{
  console.log(array[3])
  shown();
  for (let index = 0; index < notecontent.length; index++) {
  let array1 = notecontent[index].split("|")
  if(array1[0]==array[3]){document.getElementById("notechecklist"+index).style.display="block"
  document.getElementById("notediv"+index).scrollIntoView()
  document.getElementById("noteshow"+index).innerHTML="✏️"}
  }
  
  
  })}; search=false; array[1]="null"
}
}, 1000)}
//reminder load end
// settings load
checklistf = localStorage.getItem("checklistf")
oneclickf = localStorage.getItem("oneclickf")
snoozetime = localStorage.getItem("snoozetime")
alarmsound = localStorage.getItem("alarmsound")
duration = localStorage.getItem("duration")
remindersound = localStorage.getItem("remindersound")
voiceon = localStorage.getItem("voiceon")
battlevlow = localStorage.getItem("battlevlow")
battlevfull = localStorage.getItem("battlevfull")
if(checklistf==null){checklistf="false"; document.getElementById("scheduelopt1").checked=false; oneclickmode=true}
else if(checklistf=="true"){document.getElementById("scheduelopt1").checked=true; oneclickmode=false}
else if(checklistf=="false"){document.getElementById("scheduelopt1").checked=false; oneclickmode=true}
if(oneclickf==null){oneclickf="true"; document.getElementById("scheduelopt2").checked=true; oneclickmode=true}
else if(oneclickf=="true"){document.getElementById("scheduelopt2").checked=true; oneclickmode=true}
else if(oneclickf=="false"){document.getElementById("scheduelopt2").checked=false; oneclickmode=false}
document.getElementById("scheduelopt2").addEventListener("click", ()=>{
oneclickmode=true
oneclickf="true"
checklistf="false"
localStorage.setItem("checklistf", checklistf)
localStorage.setItem("oneclickf", oneclickf)
console.log(oneclickmode)
})
document.getElementById("scheduelopt1").addEventListener("click", ()=>{
oneclickmode=false
checklistf="true"
oneclickf="false"
localStorage.setItem("checklistf", checklistf)
localStorage.setItem("oneclickf", oneclickf)
console.log(oneclickmode)
})
console.log(oneclickmode)

if(snoozetime==null){snoozetime="4"; document.getElementById("snoozetimein").value=snoozetime;  document.getElementById("alarmstset").value=snoozetime}
else{ document.getElementById("snoozetimein").value=snoozetime;  document.getElementById("alarmstset").value=snoozetime}
document.getElementById("alarmstset").addEventListener("focusout", ()=>{
snoozetime=document.getElementById("alarmstset").value
document.getElementById("snoozetimein").value=snoozetime
localStorage.setItem("snoozetime", snoozetime)
})
if(duration==null){duration="2";  document.getElementById("reminderdurset").value=duration; durationvalue=parseInt(duration)*60000}
else{ document.getElementById("reminderdurset").value=duration;  durationvalue=parseInt(duration)*60000}
document.getElementById("reminderdurset").addEventListener("focusout", ()=>{
duration=document.getElementById("reminderdurset").value
durationvalue=parseInt(duration)*60000
localStorage.setItem("duration", duration)
})
if(battlevfull==null){battlevfull="90";   document.getElementById("battfullset").value=battlevfull; fulllev=battlevfull+"%"}
else{   document.getElementById("battfullset").value=battlevfull; fulllev=battlevfull+"%"}
document.getElementById("battfullset").addEventListener("focusout", ()=>{
battlevfull=document.getElementById("battfullset").value
fulllev=battlevfull+"%"
localStorage.setItem("battlevfull", battlevfull)
})
if(battlevlow==null){battlevlow="20";   document.getElementById("battlowset").value=battlevlow; lowlev=battlevlow+"%"}
else{   document.getElementById("battlowset").value=battlevlow; lowlev=battlevlow+"%"}
document.getElementById("battlowset").addEventListener("focusout", ()=>{
battlevlow=document.getElementById("battlowset").value
lowlev=battlevlow+"%"
localStorage.setItem("battlevlow", battlevlow)
})
if(voiceon==null){voiceon="1";   document.getElementById("voiceon").value=parseInt(voiceon);
if(voiceon=="0"){document.getElementsByClassName("voiceonlabel").item(0).innerHTML="turn on"}
else{document.getElementsByClassName("voiceonlabel").item(0).innerHTML="turn off"} }
else{   document.getElementById("voiceon").value=parseInt(voiceon);
if(voiceon=="0"){document.getElementsByClassName("voiceonlabel").item(0).innerHTML="turn on"}
else{document.getElementsByClassName("voiceonlabel").item(0).innerHTML="turn off"} }
document.getElementById("voiceon").addEventListener("click", ()=>{
voiceon=document.getElementById("voiceon").value
if(voiceon=="0"){document.getElementsByClassName("voiceonlabel").item(0).innerHTML="turn on"}
else{document.getElementsByClassName("voiceonlabel").item(0).innerHTML="turn off"}
localStorage.setItem("voiceon", voiceon)
})
if(alarmsound==null){alarmsound="alarm 1"; document.getElementById("timesup").src="Wake Up.mp3"}
else if(alarmsound=="alarm 1"){document.getElementById("timesup").src="Wake Up.mp3"; document.getElementById("alarmsoundset").value=alarmsound}
else if(alarmsound=="alarm 2"){document.getElementById("timesup").src="clock-alarm-8761.mp3"; document.getElementById("alarmsoundset").value=alarmsound}
else if(alarmsound=="alarm 3"){document.getElementById("timesup").src="oversimplified-alarm-clock-113180.mp3"; document.getElementById("alarmsoundset").value=alarmsound}
else if(alarmsound=="alarm 4"){document.getElementById("timesup").src="ringtone-126505.mp3"; document.getElementById("alarmsoundset").value=alarmsound}
else if(alarmsound=="alarm 5"){document.getElementById("timesup").src="beep-beep-6151.mp3"; document.getElementById("alarmsoundset").value=alarmsound}
console.log(alarmsound)
document.getElementById("alarmsoundset").addEventListener("focusout", ()=>{
alarmsound=document.getElementById("alarmsoundset").value
localStorage.setItem("alarmsound", alarmsound)
 if(alarmsound=="alarm 1"){document.getElementById("timesup").src="Wake Up.mp3"; }
else if(alarmsound=="alarm 2"){document.getElementById("timesup").src="clock-alarm-8761.mp3"}
else if(alarmsound=="alarm 3"){document.getElementById("timesup").src="oversimplified-alarm-clock-113180.mp3"}
else if(alarmsound=="alarm 4"){document.getElementById("timesup").src="ringtone-126505.mp3"}
else if(alarmsound=="alarm 5"){document.getElementById("timesup").src="beep-beep-6151.mp3"}
document.getElementById("timesup").play()
setTimeout(()=>{document.getElementById("timesup").pause()}, 2000)
})
if(remindersound==null){remindersound="sound 1"; document.getElementById("remindersound").src="alarm.mp3"}
else if(remindersound=="sound 1"){document.getElementById("remindersound").src="alarm.mp3"; document.getElementById("remindersoundset").value=remindersound}
else if(remindersound=="sound 2"){document.getElementById("remindersound").src="simple-notification-152054"; document.getElementById("remindersoundset").value=remindersound}
else if(remindersound=="sound 3"){document.getElementById("remindersound").src="marimba-for-smartphone-151931.mp3"; document.getElementById("remindersoundset").value=remindersound}
else if(remindersound=="sound 4"){document.getElementById("remindersound").src="simple-short-call-loop-153308.mp3"; document.getElementById("remindersoundset").value=remindersound}
else if(remindersound=="sound 5"){document.getElementById("remindersound").src="ringtone-incoming-interface-153265.mp3"; document.getElementById("remindersoundset").value=remindersound}
console.log(alarmsound)
document.getElementById("remindersoundset").addEventListener("focusout", ()=>{
remindersound=document.getElementById("remindersoundset").value
localStorage.setItem("remindersound", remindersound)
 if(remindersound=="sound 1"){document.getElementById("remindersound").src="alarm.mp3"}
else if(remindersound=="sound 2"){document.getElementById("remindersound").src="simple-notification-152054.mp3"}
else if(remindersound=="sound 3"){document.getElementById("remindersound").src="marimba-for-smartphone-151931.mp3"}
else if(remindersound=="sound 4"){document.getElementById("remindersound").src="simple-short-call-loop-153308.mp3"}
else if(remindersound=="sound 5"){document.getElementById("remindersound").src="ringtone-incoming-interface-153265.mp3"}
document.getElementById("remindersound").play()
setTimeout(()=>{document.getElementById("remindersound").pause()}, 2000)
})
document.getElementById("username").addEventListener("focusout", ()=>{
 localStorage.setItem("state2", document.getElementById("username").value)
})
document.getElementById("scheduletime").addEventListener("focusout", ()=>{
  if((document.getElementById("scheduletime").value.includes("min") || document.getElementById("scheduletime").value.includes("hour")) && parseInt(document.getElementById("scheduletime").value)>0){localStorage.setItem("state1", document.getElementById("scheduletime").value)}
  else{window.alert("please input correct format: number min,hour. eg 1 hour | 60 min"); localStorage.setItem("state1", "3 hour")}
})
document.getElementById("scheduletime").addEventListener("click", ()=>{
  if(tipsarray[5]==0){document.getElementById("tip").style.display="flex"; document.getElementById("tiptxt").innerHTML="the schedule time is the interval in min/hours that astro observe before reminding you of your schedule completion"; document.getElementById("tip").style.left="50px"; document.getElementById("tip").style.top="150px"
  setTimeout(() => {
    document.getElementById("tip").style.display="none"
  }, 10000);
    tipsarray[5]=1; localStorage.setItem("tips", tipsarray)}
})

if(document.getElementById("scheduelopt1").checked==true){
  document.getElementById("add6").innerHTML="0% complete"
document.getElementById("add6").style.width="130px"; document.getElementById("add6").style.backgroundColor="rgb(250, 31, 53)"
  document.getElementById("checkselect").style.color="white"
 if(localStorage.getItem("state13")!=null){ let tick = localStorage.getItem("tick")

  let state = localStorage.getItem("state13");
    let array3 = state.split("")
    for (let index = 0; index <= array3.length; index++) {
    if(array3[index]=="\n"){array3[index]=" ▢"}
    
    }
    console.log(array3)
    state=array3.join("")
    array3 = state.split("▢")
    console.log(array3)
    let array2 = []
    let index2 = 0
    let value = array3.length-1+array3.length+array3.length
    for (let index = 0; index < value; index++) {
     array2[index] = array3[index2]
     array2[index+1] = " ▢"
     array2[index+2] = "\n"
     index=index+2
     index2=index2+1
    }
    state=array2.join("")
     console.log(state)
    console.log(array2)


    document.getElementById("scheduelsclvalue").style.display="flex"
    scheduelsvalue.style.display="none"
     array2=state.split("\n")
     array2.splice(array.length-1, 1)
     if(tick==null){tick=[]; for (let index = 0; index < array2.length; index++) {
    tick[index]=0}; localStorage.setItem("tick", tick)}
    else{tick=tick.split(",")}
    if(tick.length!=array2.length){tick=[]
      for (let index = 0; index < array2.length; index++) {
        tick[index]=0}; localStorage.setItem("tick", tick)
    }
//
console.log(newday+"ratio"+gdate)
if(newday!=gdate){newday=gdate; localStorage.setItem("newday", gdate);for (let index = 0; index < tick.length; index++) {
tick[index]=0
localStorage.setItem("tick", tick)
}console.log("a nw  day"+tick)}
    console.log(array2)
    console.log(tick)
    
let half = 0
for (let index = 0; index < tick.length; index++) {
if(tick[index]=="1"){half=half+1}
  
}
console.log(half)
let total = half/tick.length*100
document.getElementById("add6").innerHTML=Math.round(total)+"% complete"
    for (let index = 0; index < array2.length; index++) {
let create1 = document.createElement("p")
create1.className="scheduelcl"
create1.id="scheduelcl"+index
create1.innerHTML=array2[index]
if(parseInt(tick[index])==1){
let mini = array2[index].split("▢")
create1.innerHTML=mini[0]+"▣"
array2[index]=create1.innerHTML
}
sp=array2.join(" ")
document.getElementById("scheduelsclvalue").append(create1)
document.getElementById("scheduelcl"+index).addEventListener("click", ()=>{
let place = document.getElementById("scheduelcl"+index).id.slice(10, )
if(create1.innerHTML.includes("▢")){let mini = create1.innerHTML.split("▢")
create1.innerHTML=mini[0]+"▣"
tick[place]=1;
array2[index]=create1.innerHTML}
else{let mini = create1.innerHTML.split("▣")
create1.innerHTML=mini[0]+"▢"
tick[place]=0;array2[index]=create1.innerHTML
}
let half = 0
for (let index = 0; index < tick.length; index++) {
if(tick[index]=="1"){half=half+1}
  
}
let total = half/tick.length*100
if(total==100){value3=date2;  localStorage.setItem("timing", value3); console.log("schedule completed")}
document.getElementById("add6").innerHTML=Math.round(total)+"% complete"
localStorage.setItem("tick", tick)
sp=array2.join(" ")
})
}
document.getElementById("scheduelscledit").addEventListener("click", ()=>{
  document.getElementById("scheduelsclvalue").style.display="none"
  scheduelsvalue.value=localStorage.getItem("state13")
  scheduelsvalue.style.display="block"
})
scheduelsvalue.addEventListener("focusout", ()=>{
  document.getElementById("scheduelsclvalue").style.display="flex"
  scheduelsvalue.style.display="none"
  localStorage.setItem("state13", scheduelsvalue.value)
  window.alert("changes will effect when page is reloaded and all current selections would be canceled if new lines of schedules where added")
})


}
else{
  scheduelsvalue.addEventListener("focusout", ()=>{
    localStorage.setItem("state13", scheduelsvalue.value)
    window.alert("changes will effect when page is reloaded and all current selections would be canceled if new lines of schedules where added")
  })
}}
else{document.getElementById("add6").innerHTML="done"; 
scheduelsvalue.value = localStorage.getItem("state13"); 
if(date2==value3){document.getElementById("add6").style.backgroundColor="green"}
document.getElementById("add6").addEventListener("click", ()=>{
completed.click()
document.getElementById("add6").style.backgroundColor="green"
})
scheduelsvalue.addEventListener("focusout", ()=>{
  localStorage.setItem("state13", scheduelsvalue.value)
})}

if(window.innerHeight<550){document.getElementById("add3").innerText="+"
document.getElementById("add4").innerText="+"}
 if(username.value==""){username.value="user"};




       if(localStorage.getItem("state13")!=null && localStorage.getItem("state13")!=""){console.log("schedule active")
         setInterval((function recall(){
          if(date2!=value3){    let box2 = document.createElement("article");
          reply = document.createElement("h6");
      let chatarea = document.getElementById("chatarea");
      box2.appendChild(reply)
      chatarea.appendChild(box2);
      reply.innerHTML="your schedule for today has not been completed. type read my schedule to view it";
          let msg = new SpeechSynthesisUtterance();
          let voices = window.speechSynthesis.getVoices();
          msg.voice = voices[6]; 
          msg.text = "your schedule for today has not been completed. type read my schedule to view it";
          window.speechSynthesis.speak(msg);}else{};
      }), interval*60000);}

      let box2 = document.createElement("article");
      reply = document.createElement("h6");
  let chatarea = document.getElementById("chatarea");
  box2.appendChild(reply)
  chatarea.appendChild(box2);
  let random = Math.floor(Math.random() *4)
  if(newuser==1){
  if(random==1){reply.innerHTML="hi"+" "+username.value}
  else if(random==2){reply.innerHTML="hello"}
   else if(random==3){reply.innerHTML="hello"+" "+username.value+" what would you like me to do for you"}
  else if(random==0){reply.innerHTML="hello"+" "+username.value+" how may i help you"}}
else{reply.innerHTML="hello i'm astro your new virtual assistant. lets get started"
document.getElementById("getstarted").style.display="block"; box2.appendChild(document.getElementById("getstarted"))}
let height = parseInt(window.innerHeight)-140
document.getElementById("chatarea").style.height=height+"px"
let width = parseInt(window.innerWidth)-15
document.getElementById("chatarea").style.width=width+"px"
if(window.innerHeight<550){let height2 = parseInt(window.innerHeight)-240
  document.getElementById("b2").style.height=height2+"px"}
  else{let height2 = parseInt(window.innerHeight)-280
  document.getElementById("b2").style.height=height2+"px"}

  if(parseInt(window.innerHeight)*1.8>parseInt(window.innerWidth)){
    console.log("smaller")
    if(window.innerWidth+200>window.innerHeight){    document.getElementById("sleepscreen").style.backgroundImage=" url(image5.jpg)"}
   else{document.getElementById("sleepscreen").style.backgroundImage=" url(image1.jpg)"}
      }
      else{document.getElementById("sleepscreen").style.backgroundImage=" url(afd1dc8ece4e386bf5975b0d60578bfc33.jpg)"}
loaded=true
console.log(loaded)
}
document.getElementById("menu").addEventListener("click", ()=>{
  document.getElementById("icons").style.display="flex";
  document.getElementById("menu").style.display="none";
})
document.getElementById("cancel").addEventListener("click", ()=>{
  document.getElementById("icons").style.display="none";
  document.getElementById("menu").style.display="block";
})

document.getElementById("calculator").addEventListener("click", ()=>{
  showc()
})
document.getElementById("setting").addEventListener("click", ()=>{
  showst()
})
document.getElementById("games").addEventListener("click", ()=>{
  showr()
})
document.getElementById("alarm").addEventListener("click", ()=>{
  showa()
})
document.getElementById("note").addEventListener("click", ()=>{
  shown()
})
document.getElementById("textto").addEventListener("click", ()=>{
  showt()
})
document.getElementById("song").addEventListener("click", ()=>{
  if(window.innerHeight>850){
    document.getElementById("tile").style.marginTop="60px"
    document.getElementById("tile").style.marginBottom="40px"
  }
  showm()
})
document.getElementById("clean").addEventListener("click", ()=>{
  shows()
  if(document.getElementById("scheduelopt1").checked==true){
    if(tipsarray[2]==0){document.getElementById("tip").style.display="flex"; document.getElementById("tiptxt").innerHTML="tap on the ✏️ icon to edit your schedule."; document.getElementById("tip").style.left="50px"; document.getElementById("tip").style.top="150px"
    setTimeout(() => {
      document.getElementById("tip").style.display="none"
    }, 6000);
      tipsarray[2]=1; localStorage.setItem("tips", tipsarray)}}
  else{ if(tipsarray[2]==0){document.getElementById("tip").style.display="flex"; document.getElementById("tiptxt").innerHTML="tap done once you have completed your schedule"; document.getElementById("tip").style.left="50px"; document.getElementById("tip").style.top="150px"
    setTimeout(() => {
      document.getElementById("tip").style.display="none"
    }, 6000);
      tipsarray[2]=1; localStorage.setItem("tips", tipsarray)}}
})
function showt (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="block";
  document.getElementById("settings").style.display="none";
  title.innerHTML="text-to-speech";
}
function showc (){
  show();
  document.getElementById("calculators").style.display="block";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="calculator";
}
function showa (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="block";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="alarm";
}
function showr (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="block";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="reminder";
}
function shown (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="block";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="note";
}
function shows (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="block";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="scheduel";
}
function showm (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="block";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="music";
}
function showst (){
  show();
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="block";
  title.innerHTML="setting";
}
let random = Math.floor(Math.random() *10)
if(random==0){joke = "What did the left eye say to the right eye? Between you and me, something smells."}
else if(random==1){joke = "I was going to tell you a joke about boxing but I forgot the punch line."}
else if(random==2){joke = "Why couldn't the sunflower ride its bike? It lost its pedals."}
else if(random==3){joke = "I ate a sock yesterday. It was very time-consuming."}
else if(random==4){joke = "What kind of candy do astronauts like? Mars bars."}
else if(random==5){joke = "What does a pig put on dry skin? Oinkment."}
else if(random==6){joke = "Why do we tell actors to 'break a leg?' Because every play has a cast."}
else if(random==7){joke = "My uncle named his dogs Timex and Rolex. They're his watch dogs."}
else if(random==8){joke = "Which is faster, hot or cold? Hot, because you can catch cold."}
else if(random==9){joke = "Why do oranges wear sunscreen? So they don't peel."}


navigator.getBattery().then(function(battery) {
  if(battery.charging){batterystate="plugged in"}
  else{batterystate="unplugged"}
 displayBatteryLevel(battery);

 battery.addEventListener('levelchange', function() {
   displayBatteryLevel(battery);
       var level = battery.level;
   var percentage = Math.round(level * 100);  
   document.getElementById("fcbatterytxt").innerHTML="battery percent : "+percentage
 if(percentage==parseInt(fulllev) && battery.charging==true){console.log("batt full");
 if(document.getElementById("voiceon").value=="1"){
   let msg = new SpeechSynthesisUtterance();
   let voices = window.speechSynthesis.getVoices();
   msg.voice = voices[6]; 
   msg.text = username.value+"your battery is full, you should consider unpluging your device";
   window.speechSynthesis.speak(msg);}
   let chatarea = document.getElementById("chatarea");
   let reply = document.createElement("h6");
   let box2 = document.createElement("article");
   reply.innerHTML=username.value+"your battery is full, you should consider unpluging your device"
   box2.appendChild(reply)
   chatarea.appendChild(box2);}
 if(percentage==parseInt(lowlev) && battery.charging==false){console.log("batt low"); 
 if(document.getElementById("voiceon").value=="1"){
   let msg = new SpeechSynthesisUtterance();
   let voices = window.speechSynthesis.getVoices();
   msg.voice = voices[6]; 
   msg.text = username.value+" your battery is low you should consider pluging in your device";
   window.speechSynthesis.speak(msg);}
   let chatarea = document.getElementById("chatarea");
   let reply = document.createElement("h6");
   let box2 = document.createElement("article");
   reply.innerHTML=username.value+" your battery is low you should consider pluging in your device"
   box2.appendChild(reply)
   chatarea.appendChild(box2);}
 });

 battery.addEventListener('chargingchange', function() {
   displayBatteryStatus(battery);

 })})

function displayBatteryStatus(battery) {
 if (battery.charging) {
   console.log('The device is charging');
batterystate="plugged in";
 } else {
   console.log('The device is not charging');
batterystate="unpluged";
 }
}

function displayBatteryLevel(battery) {
 var level = battery.level;
 var percentage = Math.round(level * 100);
 console.log('The battery level is ' + percentage + '%');
batterylvl=percentage+"%";
}
let focused = false
document.getElementById("chat").addEventListener("focusin", ()=>{
focused=true
})
document.getElementById("chat").addEventListener("focusout", ()=>{
focused=false
})
document.getElementById("chat").addEventListener("input", ()=>{
  document.getElementById("txtviewtxt").innerHTML=document.getElementById("chat").value
})
document.getElementById("txtwiewsend").addEventListener("click", ()=>{
  enter.click()
})
window.addEventListener("resize", ()=>{
  if(parseInt(window.innerHeight)*1.8>parseInt(window.innerWidth)){
    console.log("smaller")
    if(window.innerWidth+200>window.innerHeight){    document.getElementById("sleepscreen").style.backgroundImage=" url(image5.jpg)"}
    else{    document.getElementById("sleepscreen").style.backgroundImage=" url(image1.jpg)"}
      }
      else{    document.getElementById("sleepscreen").style.backgroundImage=" url(afd1dc8ece4e386bf5975b0d60578bfc33.jpg)"}
  let height = parseInt(window.innerHeight)-140
document.getElementById("chatarea").style.height=height+"px"
if(window.innerHeight<550){let height2 = parseInt(window.innerHeight)-240
document.getElementById("b2").style.height=height2+"px"}
else{let height2 = parseInt(window.innerHeight)-280
document.getElementById("b2").style.height=height2+"px"}
let width = parseInt(window.innerWidth)-15
document.getElementById("chatarea").style.width=width+"px"
if(window.innerHeight<430 && focused==true){
  document.getElementById("error").style.display="none"
  console.log("selected")
  select()
}
else if(window.innerHeight<430){
  document.getElementById("error").style.display="flex"
}
else if(window.innerHeight>430){
  document.getElementById("error").style.display="none"
}
if(window.innerWidth<330){
  document.getElementById("error").style.display="flex"
}

})
function select(){
  let random = Math.floor(Math.random() *8)
let array = ["show sidebar", "turn on voice mode", "start focus session", "open calculator", "add note", "open settings", "show timer", "open new tab", "open youtube", "flip a coin", "tell me a joke", "tell me a fact", "roll a dice"]
document.getElementById("txtviewopt1").innerHTML=array[random]
document.getElementById("txtviewopt2").innerHTML=array[random+1]
document.getElementById("txtviewopt3").innerHTML=array[random+4]
document.getElementById("txtviewopt4").innerHTML=array[random+3]
document.getElementById("txtviewopt5").innerHTML=array[random+2]
}
document.getElementById("txtviewopt1").addEventListener("click", ()=>{
  document.getElementById("chat").value=document.getElementById("txtviewopt1").innerHTML
  document.getElementById("txtviewtxt").innerHTML=document.getElementById("txtviewopt1").innerHTML
})
document.getElementById("txtviewopt2").addEventListener("click", ()=>{
  document.getElementById("chat").value=document.getElementById("txtviewopt2").innerHTML
  document.getElementById("txtviewtxt").innerHTML=document.getElementById("txtviewopt2").innerHTML
})
document.getElementById("txtviewopt3").addEventListener("click", ()=>{
  document.getElementById("chat").value=document.getElementById("txtviewopt3").innerHTML
  document.getElementById("txtviewtxt").innerHTML=document.getElementById("txtviewopt3").innerHTML
})
document.getElementById("txtviewopt4").addEventListener("click", ()=>{
  document.getElementById("chat").value=document.getElementById("txtviewopt4").innerHTML
  document.getElementById("txtviewtxt").innerHTML=document.getElementById("txtviewopt4").innerHTML
})
document.getElementById("txtviewopt5").addEventListener("click", ()=>{
  document.getElementById("chat").value=document.getElementById("txtviewopt5").innerHTML
  document.getElementById("txtviewtxt").innerHTML=document.getElementById("txtviewopt5").innerHTML
})

loaded2=true
