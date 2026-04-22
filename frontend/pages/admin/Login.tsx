// Same as customer login but redirects to /admin/orders
window.location.href = "/admin/orders";
localStorage.setItem("token", data.token);
localStorage.setItem("role", data.user.role);
