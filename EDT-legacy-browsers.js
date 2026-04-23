/************ 
 * Edt *
 ************/


// store info about the experiment session:
let expName = 'EDT';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(prac_introRoutineBegin());
flowScheduler.add(prac_introRoutineEachFrame());
flowScheduler.add(prac_introRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(prac_endRoutineBegin());
flowScheduler.add(prac_endRoutineEachFrame());
flowScheduler.add(prac_endRoutineEnd());
flowScheduler.add(intro_againRoutineBegin());
flowScheduler.add(intro_againRoutineEachFrame());
flowScheduler.add(intro_againRoutineEnd());
flowScheduler.add(formal_introRoutineBegin());
flowScheduler.add(formal_introRoutineEachFrame());
flowScheduler.add(formal_introRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);



flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'practice.xlsx', 'path': 'practice.xlsx'},
    {'name': 'material/L2.png', 'path': 'material/L2.png'},
    {'name': 'material/W2.png', 'path': 'material/W2.png'},
    {'name': 'stimuli.xlsx', 'path': 'stimuli.xlsx'},
    {'name': 'material/L0.png', 'path': 'material/L0.png'},
    {'name': 'material/W0.png', 'path': 'material/W0.png'},
    {'name': 'material/W1.png', 'path': 'material/W1.png'},
    {'name': 'material/W2.png', 'path': 'material/W2.png'},
    {'name': 'material/W3.png', 'path': 'material/W3.png'},
    {'name': 'material/L1.png', 'path': 'material/L1.png'},
    {'name': 'material/L2.png', 'path': 'material/L2.png'},
    {'name': 'material/L3.png', 'path': 'material/L3.png'},
    {'name': 'material/Intro/Intro/幻灯片1.PNG', 'path': 'material/Intro/Intro/幻灯片1.PNG'},
    {'name': 'material/Intro/Intro/幻灯片2.PNG', 'path': 'material/Intro/Intro/幻灯片2.PNG'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'material/Intro/Intro/幻灯片4.PNG', 'path': 'material/Intro/Intro/幻灯片4.PNG'},
    {'name': 'material/Intro/Intro/幻灯片5.PNG', 'path': 'material/Intro/Intro/幻灯片5.PNG'},
    {'name': 'material/Intro/Intro/幻灯片6.PNG', 'path': 'material/Intro/Intro/幻灯片6.PNG'},
    {'name': 'material/Intro/Intro/幻灯片7.PNG', 'path': 'material/Intro/Intro/幻灯片7.PNG'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var image;
var key_resp_4;
var prac_introClock;
var image_2;
var key_resp_5;
var fixedClock;
var fix;
var responseClock;
var key_resp_2;
var image_7;
var image_8;
var prac_endClock;
var image_5;
var key_resp_8;
var intro_againClock;
var image_4;
var key_resp_6;
var formal_introClock;
var image_3;
var key_resp_7;
var EndClock;
var image_6;
var key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'material/Intro/Intro/幻灯片1.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_intro"
  prac_introClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'material/Intro/Intro/幻灯片2.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixed"
  fixedClock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "response"
  responseClock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), 0], 
    draggable: false,
    size : [0.25, 0.2285],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, 0], 
    draggable: false,
    size : [0.25, 0.2285],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "prac_end"
  prac_endClock = new util.Clock();
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'material/Intro/Intro/幻灯片4.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "intro_again"
  intro_againClock = new util.Clock();
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'material/Intro/Intro/幻灯片5.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "formal_intro"
  formal_introClock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'material/Intro/Intro/幻灯片6.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'material/Intro/Intro/幻灯片7.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var introMaxDurationReached;
var _key_resp_4_allKeys;
var introMaxDuration;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    introClock.reset();
    routineTimer.reset();
    introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    introMaxDuration = null
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(image);
    introComponents.push(key_resp_4);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_introMaxDurationReached;
var _key_resp_5_allKeys;
var prac_introMaxDuration;
var prac_introComponents;
function prac_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    prac_introClock.reset();
    routineTimer.reset();
    prac_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('prac_intro.started', globalClock.getTime());
    prac_introMaxDuration = null
    // keep track of which components have finished
    prac_introComponents = [];
    prac_introComponents.push(image_2);
    prac_introComponents.push(key_resp_5);
    
    prac_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function prac_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_intro' ---
    // get current time
    t = prac_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // if image_2 is active this frame...
    if (image_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    prac_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_intro' ---
    prac_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('prac_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "prac_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'practice.xlsx', '0:1'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fixedRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixedRoutineEachFrame());
      trialsLoopScheduler.add(fixedRoutineEnd(snapshot));
      trialsLoopScheduler.add(responseRoutineBegin(snapshot));
      trialsLoopScheduler.add(responseRoutineEachFrame());
      trialsLoopScheduler.add(responseRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'stimuli.xlsx', '0:16'),
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(fixedRoutineBegin(snapshot));
      trials_2LoopScheduler.add(fixedRoutineEachFrame());
      trials_2LoopScheduler.add(fixedRoutineEnd(snapshot));
      trials_2LoopScheduler.add(responseRoutineBegin(snapshot));
      trials_2LoopScheduler.add(responseRoutineEachFrame());
      trials_2LoopScheduler.add(responseRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fixedMaxDurationReached;
var fixedMaxDuration;
var fixedComponents;
function fixedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixed' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    fixedClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    fixedMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixed.started', globalClock.getTime());
    fixedMaxDuration = 0.5
    // keep track of which components have finished
    fixedComponents = [];
    fixedComponents.push(fix);
    
    fixedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixed' ---
    // get current time
    t = fixedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > fixedMaxDuration) {
        fixedMaxDurationReached = true
        continueRoutine = false
    }
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }
    
    
    // if fix is active this frame...
    if (fix.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fix.tStop = t;  // not accounting for scr refresh
      fix.frameNStop = frameN;  // exact frame index
      // update status
      fix.status = PsychoJS.Status.FINISHED;
      fix.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixed' ---
    fixedComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fixed.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (fixedMaxDurationReached) {
        fixedClock.add(fixedMaxDuration);
    } else {
        fixedClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var responseMaxDurationReached;
var _key_resp_2_allKeys;
var positions;
var responseMaxDuration;
var responseComponents;
function responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    responseClock.reset(routineTimer.getTime());
    routineTimer.add(15.000000);
    responseMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    image_7.setImage(stim1);
    image_8.setImage(stim2);
    // Run 'Begin Routine' code from code
    positions = [[(- 0.2), 0], [0.2, 0]];
    image_7.pos = positions[0];
    image_8.pos = positions[1];
    
    psychoJS.experiment.addData('response.started', globalClock.getTime());
    responseMaxDuration = null
    // keep track of which components have finished
    responseComponents = [];
    responseComponents.push(key_resp_2);
    responseComponents.push(image_7);
    responseComponents.push(image_8);
    
    responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'response' ---
    // get current time
    t = responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_2.tStop = t;  // not accounting for scr refresh
      key_resp_2.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_2.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_2.tStop = t;  // not accounting for scr refresh
        key_resp_2.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_2.status = PsychoJS.Status.FINISHED;
        key_resp_2.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_2 is active this frame...
      if (key_resp_2.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_2.getKeys({keyList: ['f','j'], waitRelease: false});
        _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
        if (_key_resp_2_allKeys.length > 0) {
          key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
          key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
          key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *image_7* updates
      if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_7.tStart = t;  // (not accounting for frame time here)
        image_7.frameNStart = frameN;  // exact frame index
        
        image_7.setAutoDraw(true);
      }
      
      
      // if image_7 is active this frame...
      if (image_7.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (image_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        image_7.tStop = t;  // not accounting for scr refresh
        image_7.frameNStop = frameN;  // exact frame index
        // update status
        image_7.status = PsychoJS.Status.FINISHED;
        image_7.setAutoDraw(false);
      }
      
      
      // *image_8* updates
      if (t >= 0.0 && image_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_8.tStart = t;  // (not accounting for frame time here)
        image_8.frameNStart = frameN;  // exact frame index
        
        image_8.setAutoDraw(true);
      }
      
      
      // if image_8 is active this frame...
      if (image_8.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (image_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        image_8.tStop = t;  // not accounting for scr refresh
        image_8.frameNStop = frameN;  // exact frame index
        // update status
        image_8.status = PsychoJS.Status.FINISHED;
        image_8.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      responseComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var var1;
function responseRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'response' ---
      responseComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('response.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_2.corr, level);
      }
      psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
      if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
          psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
          routineTimer.reset();
          }
      
      key_resp_2.stop();
      // Run 'End Routine' code from code
      var1 = positions[0];
      
      if (routineForceEnded) {
          routineTimer.reset();} else if (responseMaxDurationReached) {
          responseClock.add(responseMaxDuration);
      } else {
          responseClock.add(15.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var prac_endMaxDurationReached;
var _key_resp_8_allKeys;
var prac_endMaxDuration;
var prac_endComponents;
function prac_endRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'prac_end' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      prac_endClock.reset();
      routineTimer.reset();
      prac_endMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_8.keys = undefined;
      key_resp_8.rt = undefined;
      _key_resp_8_allKeys = [];
      psychoJS.experiment.addData('prac_end.started', globalClock.getTime());
      prac_endMaxDuration = null
      // keep track of which components have finished
      prac_endComponents = [];
      prac_endComponents.push(image_5);
      prac_endComponents.push(key_resp_8);
      
      prac_endComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function prac_endRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'prac_end' ---
      // get current time
      t = prac_endClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *image_5* updates
      if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_5.tStart = t;  // (not accounting for frame time here)
        image_5.frameNStart = frameN;  // exact frame index
        
        image_5.setAutoDraw(true);
      }
      
      
      // if image_5 is active this frame...
      if (image_5.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_8* updates
      if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_8.tStart = t;  // (not accounting for frame time here)
        key_resp_8.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
      }
      
      // if key_resp_8 is active this frame...
      if (key_resp_8.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_8.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
        if (_key_resp_8_allKeys.length > 0) {
          key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
          key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
          key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      prac_endComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function prac_endRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'prac_end' ---
      prac_endComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('prac_end.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_8.corr, level);
      }
      psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
      if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
          psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
          routineTimer.reset();
          }
      
      key_resp_8.stop();
      // the Routine "prac_end" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var intro_againMaxDurationReached;
var _key_resp_6_allKeys;
var intro_againMaxDuration;
var intro_againComponents;
function intro_againRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'intro_again' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      intro_againClock.reset();
      routineTimer.reset();
      intro_againMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_6.keys = undefined;
      key_resp_6.rt = undefined;
      _key_resp_6_allKeys = [];
      psychoJS.experiment.addData('intro_again.started', globalClock.getTime());
      intro_againMaxDuration = null
      // keep track of which components have finished
      intro_againComponents = [];
      intro_againComponents.push(image_4);
      intro_againComponents.push(key_resp_6);
      
      intro_againComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function intro_againRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'intro_again' ---
      // get current time
      t = intro_againClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *image_4* updates
      if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_4.tStart = t;  // (not accounting for frame time here)
        image_4.frameNStart = frameN;  // exact frame index
        
        image_4.setAutoDraw(true);
      }
      
      
      // if image_4 is active this frame...
      if (image_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_6* updates
      if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_6.tStart = t;  // (not accounting for frame time here)
        key_resp_6.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
      }
      
      // if key_resp_6 is active this frame...
      if (key_resp_6.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_6.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
        if (_key_resp_6_allKeys.length > 0) {
          key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
          key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
          key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      intro_againComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function intro_againRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'intro_again' ---
      intro_againComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('intro_again.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_6.corr, level);
      }
      psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
      if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
          psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
          routineTimer.reset();
          }
      
      key_resp_6.stop();
      // the Routine "intro_again" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var formal_introMaxDurationReached;
var _key_resp_7_allKeys;
var formal_introMaxDuration;
var formal_introComponents;
function formal_introRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'formal_intro' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      formal_introClock.reset();
      routineTimer.reset();
      formal_introMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_7.keys = undefined;
      key_resp_7.rt = undefined;
      _key_resp_7_allKeys = [];
      psychoJS.experiment.addData('formal_intro.started', globalClock.getTime());
      formal_introMaxDuration = null
      // keep track of which components have finished
      formal_introComponents = [];
      formal_introComponents.push(image_3);
      formal_introComponents.push(key_resp_7);
      
      formal_introComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function formal_introRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'formal_intro' ---
      // get current time
      t = formal_introClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *image_3* updates
      if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_3.tStart = t;  // (not accounting for frame time here)
        image_3.frameNStart = frameN;  // exact frame index
        
        image_3.setAutoDraw(true);
      }
      
      
      // if image_3 is active this frame...
      if (image_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_7* updates
      if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_7.tStart = t;  // (not accounting for frame time here)
        key_resp_7.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
      }
      
      // if key_resp_7 is active this frame...
      if (key_resp_7.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_7.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
        if (_key_resp_7_allKeys.length > 0) {
          key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
          key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
          key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      formal_introComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function formal_introRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'formal_intro' ---
      formal_introComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('formal_intro.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_7.corr, level);
      }
      psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
      if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
          psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
          routineTimer.reset();
          }
      
      key_resp_7.stop();
      // the Routine "formal_intro" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var EndMaxDurationReached;
var _key_resp_allKeys;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'End' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      EndClock.reset();
      routineTimer.reset();
      EndMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp.keys = undefined;
      key_resp.rt = undefined;
      _key_resp_allKeys = [];
      psychoJS.experiment.addData('End.started', globalClock.getTime());
      EndMaxDuration = null
      // keep track of which components have finished
      EndComponents = [];
      EndComponents.push(image_6);
      EndComponents.push(key_resp);
      
      EndComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function EndRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'End' ---
      // get current time
      t = EndClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *image_6* updates
      if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_6.tStart = t;  // (not accounting for frame time here)
        image_6.frameNStart = frameN;  // exact frame index
        
        image_6.setAutoDraw(true);
      }
      
      
      // if image_6 is active this frame...
      if (image_6.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp* updates
      if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp.tStart = t;  // (not accounting for frame time here)
        key_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
      }
      
      // if key_resp is active this frame...
      if (key_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
        if (_key_resp_allKeys.length > 0) {
          key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
          key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
          key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      EndComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function EndRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'End' ---
      EndComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('End.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp.corr, level);
      }
      psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
      if (typeof key_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
          psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
          routineTimer.reset();
          }
      
      key_resp.stop();
      // the Routine "End" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
