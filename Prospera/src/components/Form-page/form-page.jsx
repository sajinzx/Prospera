import React, { useState } from "react";
import "./Form-page.css";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    income: "",
    totalExpense: "",
    savings: "",
    financialGoal: "",
    timePeriod: "",
    riskPreference: "" // single value: "low", "medium", or "high"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Financial Planning Form</h2>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Income:
        <input
          type="number"
          name="income"
          value={formData.income}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Total Expense:
        <input
          type="number"
          name="totalExpense"
          value={formData.totalExpense}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Savings:
        <input
          type="number"
          name="savings"
          value={formData.savings}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Financial Goal:
        <input
          type="text"
          name="financialGoal"
          value={formData.financialGoal}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Time Period (in years):
        <input
          type="number"
          name="timePeriod"
          value={formData.timePeriod}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      
        <legend>Risk Preference:</legend>
        <label>
          <input
            type="radio"
            name="riskPreference"
            value="Low"
            checked={formData.riskPreference === "Low"}
            onChange={handleChange}
          />
          Low Risk
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="riskPreference"
            value="Medium"
            checked={formData.riskPreference === "Medium"}
            onChange={handleChange}
          />
          Medium Risk
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="riskPreference"
            value="High"
            checked={formData.riskPreference === "High"}
            onChange={handleChange}
          />
          High Risk
        </label>
     
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormPage;
