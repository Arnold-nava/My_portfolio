const ctx = document.getElementById("skillsChart");

if (ctx) {
  new Chart(ctx, {
    type: "pie",

    data: {
      labels: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "C#", "Python", "Git"],

      datasets: [{
        data: [90, 80, 77, 40, 60, 65, , 65],
        backgroundColor: [
          "#8b5cf6",
          "#06b6d4",
          "#ec4899",
          "#6366f1",
          "#0ea5e9",
          "#9333ea",
          "#14b8a6",
          "#f43f5e"
        ],
        borderColor: "#111",
        borderWidth: 2
      }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#ffffff",
            padding: 18
          }
        }
      }
    }
  });
}