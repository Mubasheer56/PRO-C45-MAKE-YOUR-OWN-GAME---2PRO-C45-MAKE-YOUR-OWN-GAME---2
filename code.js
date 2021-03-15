playSound("assets/bgm.mp3", false);
var time = 11;
var score = 0;
var correctAnswers = 0;

// Main Screen

onEvent("MainScreen", "click", function(event) {
  setScreen("getStarted");
});

// Get Started

onEvent("btPly_gs", "click", function(event) {
  setScreen("Screen1_q1");
  
  timedLoop(1000, function() {
    time = time - 1;
    setText("txtTime_1", ("Time Left : " + time) + " seconds");
    setText("txtTime_2", "Time Left : " + time + " seconds");
    setText("txtTime_3", "Time Left : " + time + " seconds");
    setText("txtTime_4", "Time Left : " + time + " seconds");
    setText("txtTime_5", "Time Left : " + time + " seconds");
    setText("txtTime_6", "Time Left : " + time + " seconds");
    setText("txtTime_7", "Time Left : " + time + " seconds");
    setText("txtTime_8", "Time Left : " + time + " seconds");
    setText("txtTime_9", "Time Left : " + time + " seconds");
    setText("txtTime_10", "Time Left : " + time + " seconds");
    
    if (time === 0) {
      setScreen("TimeOver");
    }
    
  });
});
  
if (time > 0) {
    
    // Question 1 ; screen 1
    
    onEvent("rdV_1", "click", function(event) {
      score = score + 10;
      console.log("Score = " + score)
      correctAnswers = correctAnswers + 1;
      console.log("Correct Answers = " + correctAnswers)
      setScreen("Screen2_q2");
      time = 11;
    });
    
    onEvent("rdX_1", "click", function(event) {
      setScreen("Screen2_q2");
      time = 11;
    });
    
    onEvent("rdXx_1", "click", function(event) {
      setScreen("Screen2_q2");
      time = 11;
    });
    
    onEvent("rdXxx_1", "click", function(event) {
      setScreen("Screen2_q2");
      time = 11;
    });
    
    // Question 2 ; Screen 2
    
    onEvent("rdV_2", "click", function(event) {
      score = score + 10;
      console.log("Score = " + score)
      correctAnswers = correctAnswers + 1;
      console.log("Correct Answers = " + correctAnswers)
      setScreen("Screen3_q3");
      time = 11;
    });
    
    onEvent("rdX_2", "click", function(event) {
      setScreen("Screen3_q3");
      time = 11;
    });
    
    onEvent("rdXx_2", "click", function(event) {
      setScreen("Screen3_q3");
      time = 11;
    });
    
    // Question 3 ; Screen 3
    
    onEvent("rdV_3", "click", function(event) {
      score = score + 10;
      console.log("Score = " + score)
      correctAnswers = correctAnswers + 1;
      console.log("Correct Answers = " + correctAnswers)
      setScreen("Screen4_q4");
      time = 11;
    });
    
    onEvent("rdX_3", "click", function(event) {
      setScreen("Screen4_q4");
      time = 11;
    });
    
    onEvent("rdXx_3", "click", function(event) {
      setScreen("Screen4_q4");
      time = 11;
    });
    
    onEvent("rdXxx_3", "click", function(event) {
      setScreen("Screen4_q4");
      time = 11;
    });
    
    // Question 4 ; Screen 4
    
    onEvent("rdV_4", "click", function(event) {
      score = score + 10;
      console.log("Score = " + score)
      correctAnswers = correctAnswers + 1;
      console.log("Correct Answers = " + correctAnswers)
      setScreen("Screen5_q5");
      time = 11;
    });
    
    onEvent("rdX_4", "click", function(event) {
      setScreen("Screen5_q5");
      time = 11;
    });
    
    onEvent("rdXx_4", "click", function(event) {
      setScreen("Screen5_q5");
      time = 11;
    });
    
    onEvent("rdXxx_4", "click", function(event) {
      setScreen("Screen5_q5");
      time = 11;
    });
    
    // Question 5 ; Screen 5
    
    onEvent("rdV_5", "click", function(event) {
      score = score + 10;
      console.log("Score = " + score)
      correctAnswers = correctAnswers + 1;
      console.log("Correct Answers = " + correctAnswers)
      setScreen("Screen6_q6");
      time = 11;
    });
    
    onEvent("rdX_5", "click", function(event) {
      setScreen("Screen6_q6");
      time = 11;
    });
    
    onEvent("rdXx_5", "click", function(event) {
      setScreen("Screen6_q6");
      time = 11;
    });
    
    onEvent("rdXxx_5", "click", function(event) {
      setScreen("Screen6_q6");
      time = 11;
    });
    
    // Question 6 ; Screen 6
    
    onEvent("rdV_6", "click", function(event) {
      score = score + 10;
      console.log("Score = " + score)
      correctAnswers = correctAnswers + 1;
      console.log("Correct Answers = " + correctAnswers)
      setScreen("Screen7_q7");
      time = 11;
    });
    
    onEvent("rdX_6", "click", function(event) {
      setScreen("Screen7_q7");
      time = 11;
    });
    
    onEvent("rdXx_6", "click", function(event) {
      setScreen("Screen7_q7");
      time = 11;
    });
    
    onEvent("rdXxx_6", "click", function(event) {
      setScreen("Screen7_q7");
      time = 11;
    });
    
    // Question 7 ; Screen 7
    
     onEvent("rdV_7", "click", function(event) {
      score = score + 10;
      console.log("Score = " + score)
      correctAnswers = correctAnswers + 1;
      console.log("Correct Answers = " + correctAnswers)
      setScreen("Screen8_q8");
      time = 11;
    });
    
    onEvent("rdX_7", "click", function(event) {
      setScreen("Screen8_q8");
      time = 11;
    });
    
    onEvent("rdXx_7", "click", function(event) {
      setScreen("Screen8_q8");
      time = 11;
    });
    
    onEvent("rdXxx_7", "click", function(event) {
      setScreen("Screen8_q8");
      time = 11;
    });
    
    // Question 8 ; Screen 8
    
     onEvent("rdV_8", "click", function(event) {
      score = score + 10;
      console.log("Score = " + score)
      correctAnswers = correctAnswers + 1;
      console.log("Correct Answers = " + correctAnswers)
      setScreen("Screen9_q9");
      time = 11;
    });
    
    onEvent("rdX_8", "click", function(event) {
      setScreen("Screen9_q9");
      time = 11;
    });
    
    onEvent("rdXx_8", "click", function(event) {
      setScreen("Screen9_q9");
      time = 11;
    });
    
    onEvent("rdXxx_8", "click", function(event) {
      setScreen("Screen9_q9");
      time = 11;
    });
    
    // Question 9 ; Screen 9

 onEvent("rdV_9", "click", function(event) {
      score = score + 10;
      console.log("Score = " + score)
      correctAnswers = correctAnswers + 1;
      console.log("Correct Answers = " + correctAnswers)
      setScreen("Screen10_q10");
      time = 11;
    });

onEvent("rdX_9", "click", function(event) {
      setScreen("Screen10_q10");
      time = 11;
    });

onEvent("rdXx_9", "click", function(event) {
      setScreen("Screen10_q10");
      time = 11;
    });

onEvent("rdXxx_9", "click", function(event) {
      setScreen("Screen10_q10");
      time = 11;
    });

// Question 10 ; Screen 10

 onEvent("rdV_10", "click", function(event) {
      score = score + 10;
      console.log("Score = " + score)
      correctAnswers = correctAnswers + 1;
      console.log("Correct Answers = " + correctAnswers)
      setScreen("ResultsTime");
      time = 11;
      stopTimedLoop();
      setText("txt_RT_Score", ("Great !!, You've scored " + score) + " out of 100");
      setText("txt_RT_AC", "You've answered " + correctAnswers + " questions correctly out of 10");
    });

onEvent("rdX_10", "click", function(event) {
      setScreen("ResultsTime");
      time = 11;
      stopTimedLoop();
      setText("txt_RT_Score", ("Great !!, You've scored " + score) + " out of 100");
      setText("txt_RT_AC", "You've answered " + correctAnswers + " questions correctly out of 10");
    });

onEvent("rdXx_10", "click", function(event) {
      setScreen("ResultsTime");
      time = 11;
      stopTimedLoop();
      setText("txt_RT_Score", ("Great !!, You've scored " + score) + " out of 100");
      setText("txt_RT_AC", "You've answered " + correctAnswers + " questions correctly out of 10");
    });

onEvent("rdXxx_10", "click", function(event) {
      setScreen("ResultsTime");
      time = 11;
      stopTimedLoop();
      setText("txt_RT_Score", ("Great !!, You've scored " + score) + " out of 100");
      setText("txt_RT_AC", "You've answered " + correctAnswers + " questions correctly out of 10");
    });
    
  }

// Time Over

onEvent("btRply_To", "click", function(event) {
  stopTimedLoop();
  time = 11;
  score = 0;
  correctAnswers = 0;
  setScreen("getStarted");
});
