function calculateTCO() {
    // Electric Vehicle Inputs
    let msrpEV = parseFloat(document.getElementById('msrpEV').value) || 0;
    let taxCreditEV = parseFloat(document.getElementById('taxCreditEV').value) || 0;
    let maintenanceCostEV = parseFloat(document.getElementById('maintenanceCostEV').value) || 0;
    let efficiencyEV = parseFloat(document.getElementById('efficiencyEV').value) || 0;
    let electricityCost = parseFloat(document.getElementById('electricityCost').value) || 0;
    let milesDriven = parseFloat(document.getElementById('milesDriven').value) || 0;
    let yearsOwned = parseFloat(document.getElementById('yearsOwned').value) || 0;

    // Gas Vehicle Inputs
    let msrpGas = parseFloat(document.getElementById('msrpGas').value) || 0;
    let taxCreditGas = parseFloat(document.getElementById('taxCreditGas').value) || 0;
    let maintenanceCostGas = parseFloat(document.getElementById('maintenanceCostGas').value) || 0;
    let mpgGas = parseFloat(document.getElementById('mpgGas').value) || 0;
    let fuelCostGas = parseFloat(document.getElementById('fuelCostGas').value) || 0;
    let milesDrivenGas = parseFloat(document.getElementById('milesDrivenGas').value) || 0;
    let yearsOwnedGas = parseFloat(document.getElementById('yearsOwnedGas').value) || 0;

    // Total Miles Driven Calculation
    let totalMilesDriven = milesDriven * yearsOwned;
    let totalMilesDrivenGas = milesDrivenGas * yearsOwned;

    // Maintenance Costs Calculation
    let maintenanceCostsEV = maintenanceCostEV * totalMilesDriven;
    let maintenanceCostsGas = maintenanceCostGas * totalMilesDrivenGas;

    // Depreciation Calculation (assuming 15% depreciation per year)
    let depreciationRate = 0.15;
    let depreciationEV = msrpEV * Math.pow((1 - depreciationRate), yearsOwned);
    let depreciationGas = msrpGas * Math.pow((1 - depreciationRate), yearsOwned);

    // Fuel Costs Calculation for Electric Vehicle
    let fuelCostsEV = (totalMilesDriven / efficiencyEV) * electricityCost;

    // Fuel Costs Calculation for Gas Vehicle
    let fuelCostsGas = (totalMilesDrivenGas / mpgGas) * fuelCostGas;

    // TCO Calculation for Electric Vehicle
    let tcoEV = (msrpEV - taxCreditEV) + maintenanceCostsEV + fuelCostsEV + depreciationEV;

    // TCO Calculation for Gas Vehicle
    let tcoGas = (msrpGas - taxCreditGas) + maintenanceCostsGas + fuelCostsGas + depreciationGas;

    // Output Results - TCO Breakdown for Electric and Gas Vehicle
    let tcoEVDetails = document.getElementById('tcoEVDetails');
    let tcoGasDetails = document.getElementById('tcoGasDetails');
    
    tcoEVDetails.innerHTML = `
        <p><strong>Electric Vehicle TCO Breakdown:</strong></p>
        <ul>
            <li>MSRP (EV): $${msrpEV.toLocaleString()}</li>
            <li>Tax Credit (EV): -$${taxCreditEV.toLocaleString()}</li>
            <li>Maintenance Costs (EV): $${maintenanceCostsEV.toLocaleString()}</li>
            <li>Fuel Costs (EV): $${fuelCostsEV.toLocaleString()}</li>
            <li>Depreciation (EV): $${Math.round(depreciationEV).toLocaleString()}</li>
            <li><strong>Total TCO for EV: $${Math.round(tcoEV).toLocaleString()}</strong></li>
        </ul>
    `;

    tcoGasDetails.innerHTML = `
        <p><strong>Gas Vehicle TCO Breakdown:</strong></p>
        <ul>
            <li>MSRP (Gas): $${msrpGas.toLocaleString()}</li>
            <li>Tax Credit (Gas): -$${taxCreditGas.toLocaleString()}</li>
            <li>Maintenance Costs (Gas): $${maintenanceCostsGas.toLocaleString()}</li>
            <li>Fuel Costs (Gas): $${fuelCostsGas.toLocaleString()}</li>
            <li>Depreciation (Gas): $${Math.round(depreciationGas).toLocaleString()}</li>
            <li><strong>Total TCO for Gas Vehicle: $${Math.round(tcoGas).toLocaleString()}</strong></li>
        </ul>
    `;

    // Fuel Cost Breakdown for both vehicles
    let fuelCostEVDetails = document.getElementById('fuelCostEVDetails');
    let fuelCostGasDetails = document.getElementById('fuelCostGasDetails');

    fuelCostEVDetails.innerHTML = `
        <p><strong>Electric Vehicle Fuel Cost Breakdown:</strong></p>
        <ul>
            <li>Total Miles Driven: ${totalMilesDriven.toLocaleString()} miles</li>
            <li>Fuel Efficiency (EV): ${efficiencyEV} miles/kWh</li>
            <li>Electricity Cost per kWh: $${electricityCost.toLocaleString()}</li>
            <li><strong>Total Fuel Cost for EV: $${Math.round(fuelCostsEV).toLocaleString()}</strong></li>
        </ul>
    `;

    fuelCostGasDetails.innerHTML = `
        <p><strong>Gas Vehicle Fuel Cost Breakdown:</strong></p>
        <ul>
            <li>Total Miles Driven: ${totalMilesDrivenGas.toLocaleString()} miles</li>
            <li>Fuel Efficiency (Gas): ${mpgGas} mpg</li>
            <li>Fuel Cost per Gallon: $${fuelCostGas.toLocaleString()}</li>
            <li><strong>Total Fuel Cost for Gas Vehicle: $${Math.round(fuelCostsGas).toLocaleString()}</strong></li>
        </ul>
    `;
}
