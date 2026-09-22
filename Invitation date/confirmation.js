const params = new URLSearchParams(window.location.search);
const selected = params.get('selected') || 'Selected plan';
const plan = params.get('selected') || 'Selected plan';
const date = params.get('date') || 'Not set';
const location = params.get('location') || 'Not set';

document.getElementById('choiceValue').textContent = selected;
document.getElementById('planValue').textContent = plan;
document.getElementById('dateValue').textContent = date;
document.getElementById('locationValue').textContent = location;
