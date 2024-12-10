// Example: Dynamic Patient List
import Web3 from 'web3';
var web3 = new Web3(new Web3.providers.WebsocketProvider("wss://sepolia.infura.io/ws/v3/f431f2932ffe4c0cad97f3c2adccc472"));
document.getElementById('add-patient-btn').addEventListener('click', () => {
    const table = document.getElementById('patient-table');
    const newRow = table.insertRow();
  
    const idCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);
    const conditionCell = newRow.insertCell(3);
  
    idCell.innerText = prompt("Enter Patient ID:");
    nameCell.innerText = prompt("Enter Patient Name:");
    ageCell.innerText = prompt("Enter Patient Age:");
    conditionCell.innerText = prompt("Enter Condition:");
  
    alert("Patient Added!");
  });
  
  // Example: Handle Appointment Form
  document.getElementById('appointment-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const patientName = document.getElementById('patient-name').value;
    const doctorName = document.getElementById('doctor-name').value;
    const appointmentDate = document.getElementById('appointment-date').value;
  
    alert("Appointment scheduled for ${patientName} with ${doctorName} on ${appointmentDate}");
  });

  //Login with metamask
document.getElementById('metamask-login-btn').addEventListener('click', async () => {
  window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
      web3js = new Web3(web3.currentProvider);
      loginWithMetamask();
    } else {
      this.alert("You haven't installed Metamask")
    }
  })
    
})
async function loginWithMetamask(){
  try{
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  console.log("Connected account:", account);
  document.getElementById('status').innerText = ("Connected account: ${account}");
  }
catch (error) {
  console.error("Error connecting to MetaMask:", error);
  alert("Failed to connect to MetaMask. Please try again.");
}
}