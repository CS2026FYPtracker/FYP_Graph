async function loadData() {
  const res = await fetch('data/data.json');
  const json = await res.json();

  const labels = json.map(d => new Date(d.timestamp));
  const outline_doc = json.map(d => d.outline);
  const abstract = json.map(d => d.abstract);
  const final_report = json.map(d => d.final_report);

  // Chart for outline_doc
  new Chart(document.getElementById('chart1'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Outline Document',
        data: outline_doc,
        borderWidth: 2,
        borderColor: 'blue',
        fill: false,
        tension: 0.1
      }]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: { unit: 'hour' }
        }
      }
    }
  });

  // Chart for abstract
  new Chart(document.getElementById('chart2'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Abstract',
        data: abstract,
        borderWidth: 2,
        borderColor: 'green',
        fill: false,
        tension: 0.1
      }]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: { unit: 'hour' }
        }
      }
    }
  });

  // Chart for final_report
  new Chart(document.getElementById('chart3'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Final Report',
        data: final_report,
        borderWidth: 2,
        borderColor: 'red',
        fill: false,
        tension: 0.1
      }]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: { unit: 'hour' }
        }
      }
    }
  });
}

loadData();
