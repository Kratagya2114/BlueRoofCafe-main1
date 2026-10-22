import Logo from '../assets/Logo/logo.png';

// Owner page
const Contributors = () => (
  <div className="min-h-screen pt-32 pb-16 bg-violet-100 dark:bg-background-dark dark:text-white">
    <div className="max-w-2xl mx-auto px-6 text-center">
      <img src={Logo} alt="Blue Roof Cafe logo" className="w-40 h-40 mx-auto rounded-full shadow-xl" />
      <h1 className="text-5xl font-bold mt-8">Meet the Owner</h1>
      <div className="mt-8 rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-2xl border-2 border-black">
        <h2 className="text-3xl font-semibold">Aarav Mehta</h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Founder &amp; Owner, Blue Roof Cafe</p>
        <p className="mt-4 text-lg">
          Welcome to Blue Roof Cafe! Come in with friends and family for great coffee, good food and games.
        </p>
      </div>
    </div>
  </div>
);

export default Contributors;
