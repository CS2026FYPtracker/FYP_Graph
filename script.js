async function loadData() {
  const res = await fetch('data/data.json');
  const json = await res.json();

  // convert timestamps to Date so the time adapter can format tooltips/axis
  const outline_doc = json.map(d => ({ x: new Date(d.timestamp), y: d.outline }));
  const abstract = json.map(d => ({ x: new Date(d.timestamp), y: d.abstract }));
  const final_report = json.map(d => ({ x: new Date(d.timestamp), y: d.final_report }));

  new Chart(document.getElementById('chart1'), {
    type: 'line',
    data: {
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
          type: 'time'
        }
      }
    }
  });

  new Chart(document.getElementById('chart2'), {
    type: 'line',
    data: {
      datasets: [{
        label: 'Extended Abstract',
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
          type: 'time'
        }
      }
    }
  });

  // Chart for final_report
  new Chart(document.getElementById('chart3'), {
    type: 'line',
    data: {
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
          type: 'time'
        }
      }
    }
  });

  new Chart(document.getElementById('chart4'), {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Outline Document',
          data: outline_doc,
          borderWidth: 2,
          borderColor: 'blue',
          fill: false,
          tension: 0.1
        },
        {
          label: 'Extended Abstract',
          data: abstract,
          borderWidth: 2,
          borderColor: 'green',
          fill: false,
          tension: 0.1
        },
        {
          label: 'Final Report',
          data: final_report,
          borderWidth: 2,
          borderColor: 'red',
          fill: false,
          tension: 0.1
        }
      ]
    },
    options: {
      scales: {
        x: {
          type: 'time'
        }
      }
    }
  });
}

loadData();
