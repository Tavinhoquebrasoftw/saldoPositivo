// const getRecommendations = async (score, attempts, timeSpent) => {
//     const response = await fetch("https://SEU-API-URL.com/predict", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ score, attempts, time_spent: timeSpent }),
//     });
  
//     const data = await response.json();
//     return data.needs_review ? "Revisar este módulo" : "Avançar para o próximo";
//   };
  
//   // Exemplo de uso no React Native
//   useEffect(() => {
//     getRecommendations(50, 2, 15).then(recommendation => {
//       console.log("Sugestão:", recommendation);
//     });
//   }, []);
  