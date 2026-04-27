// testEndpoints.js
import axios from "axios";

const API = "https://your-backend-url.onrender.com"; // CHANGE THIS

let token = null;

async function run() {
  try {
    console.log("\n=== 1. REGISTER USER ===");
    const register = await axios.post(`${API}/api/auth/register`, {
      name: "Test User",
      email: "testuser@example.com",
      password: "123456"
    });
    console.log(register.data);

  } catch (err) {
    console.log("Register error (likely user exists):", err.response?.data);
  }

  try {
    console.log("\n=== 2. LOGIN ===");
    const login = await axios.post(`${API}/api/auth/login`, {
      email: "testuser@example.com",
      password: "123456"
    });
    console.log(login.data);

    token = login.data.token;
  } catch (err) {
    console.log("Login error:", err.response?.data);
    return;
  }

  const authHeader = {
    headers: { Authorization: `Bearer ${token}` }
  };

  try {
    console.log("\n=== 3. CREATE ORDER ===");
    const order = await axios.post(
      `${API}/api/orders`,
      {
        serviceType: "Oil Change",
        description: "Test order from script"
      },
      authHeader
    );
    console.log(order.data);
  } catch (err) {
    console.log("Create order error:", err.response?.data);
  }

  try {
    console.log("\n=== 4. GET MY ORDERS ===");
    const myOrders = await axios.get(`${API}/api/orders/my`, authHeader);
    console.log(myOrders.data);
  } catch (err) {
    console.log("Get my orders error:", err.response?.data);
  }

  try {
    console.log("\n=== 5. SAVE LOCATION ===");
    const location = await axios.post(
      `${API}/api/locations`,
      {
        label: "Home",
        address: "123 Test St",
        lat: 30.0,
        lng: -92.0
      },
      authHeader
    );
    console.log(location.data);
  } catch (err) {
    console.log("Save location error:", err.response?.data);
  }

  try {
    console.log("\n=== 6. GET LOCATIONS ===");
    const locations = await axios.get(`${API}/api/locations`, authHeader);
    console.log(locations.data);
  } catch (err) {
    console.log("Get locations error:", err.response?.data);
  }

  try {
    console.log("\n=== 7. GET PROFILE ===");
    const profile = await axios.get(`${API}/api/profile`, authHeader);
    console.log(profile.data);
  } catch (err) {
    console.log("Get profile error:", err.response?.data);
  }

  try {
    console.log("\n=== 8. UPDATE PROFILE ===");
    const updated = await axios.put(
      `${API}/api/profile`,
      {
        name: "Updated User",
        email: "updated@example.com"
      },
      authHeader
    );
    console.log(updated.data);
  } catch (err) {
    console.log("Update profile error:", err.response?.data);
  }

  console.log("\n=== DONE ===");
}

run();
