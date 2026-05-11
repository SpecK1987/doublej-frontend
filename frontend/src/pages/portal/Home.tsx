import PortalLayout from "../../components/PortalLayout";

const Home = () => {
  return (
    <PortalLayout>
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-gray-700">
        From here you can create new service orders, view your existing orders,
        manage saved locations, and update your profile.
      </p>
    </PortalLayout>
  );
};

export default Home;
