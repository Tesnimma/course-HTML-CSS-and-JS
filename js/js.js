
const correctAnswers = {
  q1: "b",
  q2: "c",
  q3: "a",
  q4: "a",
  q5: "c",
  q6: "c",
  q7: "b",
};

document.querySelector("#quiz-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let score = 0;

    Object.keys(correctAnswers).forEach(function (question) {
      const answer = document.querySelector(
        `input[name="${question}"]:checked`
      ).value;
      if (answer === correctAnswers[question]) {
        score++;
      }
    });

    alert(
      `Your score is ${score} out of ${Object.keys(correctAnswers).length}`
    );
  });
  