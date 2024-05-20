import Currencies from './Currencies';

const Header = () => {
  return (
    <header className="fixed w-screen h-[100px] bg-secondaryBG flex items-center justify-between px-10">
      <div>
        <h1 className="text-2xl">Cubeia</h1>
        <p>Code Challenge</p>
      </div>

      <Currencies />
    </header>
  );
};

export default Header;
