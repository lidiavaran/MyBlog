let questions = [
    {
      question: "Te simți fericit/ă?",
      options: { a: "Da", b: "Nu" },
      correctAnswer: "a",
      correctResponse: "Super! Mă bucur să aud asta 😊",
      incorrectResponse: "Îmi pare rău să aud asta. Sper să îți fie mai bine curând."
    },
    {
      question: "Îți place muzica?",
      options: { a: "Da", b: "Nu" },
      correctAnswer: "a",
      correctResponse: "Minunat! Muzica face viața mai frumoasă.",
      incorrectResponse: "Fiecare are gusturile lui, e în regulă."
    },
    {
      question: "Vrei să înveți să cânți la chitară?",
      options: { a: "Da", b: "Nu" },
      correctAnswer: "a",
      correctResponse: "Excelent! Sunt aici să te ajut cu sfaturi.",
      incorrectResponse: "Nicio problemă, există multe alte pasiuni frumoase."
    }
  ];
  
  let currentQuestionIndex = 0;
  const chatContainer = document.getElementById("chat-container");
  const chatForm = document.getElementById("chat-form");
  const userInput = document.getElementById("user-input");
  
  function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options)
      .map((key) => `<div><strong>${key}.</strong> ${currentQuestion.options[key]}</div>`)
      .join("");
  
    let botResponse = document.createElement("div");
    botResponse.classList.add("message", "bot");
    botResponse.innerHTML = `<strong>Chatbot:</strong> ${currentQuestion.question}<br>${optionsHTML}`;
    chatContainer.appendChild(botResponse);
    scrollChatContainerToBottom();
  }
  
  function scrollChatContainerToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  chatForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let userResponse = userInput.value.trim().toLowerCase();
  
    if (!["a", "b"].includes(userResponse)) {
      alert("Te rog să răspunzi doar cu 'a' sau 'b'");
      userInput.value = "";
      return;
    }
  
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerHTML = `<strong>Tu:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);
  
    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message", "bot");
  
    if (userResponse === currentQuestion.correctAnswer) {
      botResponse.innerHTML = `<strong>Chatbot:</strong> ${currentQuestion.correctResponse}`;
    } else {
      botResponse.innerHTML = `<strong>Chatbot:</strong> ${currentQuestion.incorrectResponse}`;
    }
  
    chatContainer.appendChild(botResponse);
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";
    displayQuestion();
    scrollChatContainerToBottom();
  });
  

  displayQuestion();
  