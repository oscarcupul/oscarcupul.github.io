document.getElementById("probability-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir el envío del formulario
  
    const totalEvents = parseInt(document.getElementById("total-events").value);
    const successfulEvents = parseInt(document.getElementById("successful-events").value);
  
    if (isNaN(totalEvents) || isNaN(successfulEvents) || totalEvents <= 0 || successfulEvents < 0 || successfulEvents > totalEvents) {
      document.getElementById("probability-text").textContent = "Por favor, ingresa valores válidos. El número de éxitos no puede ser mayor que el número total de eventos.";
      return;
    }
  
    const probability = successfulEvents / totalEvents;
    
    // Mostrar el resultado
    document.getElementById("probability-text").textContent = `La probabilidad de que ocurra un evento es: ${probability.toFixed(4)} (${(probability * 100).toFixed(2)}%)`;
  });
  